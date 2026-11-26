import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { findLesson, COURSE } from '../content';
import { dayKey } from '../engine/days';
import { lessonStatus } from '../engine/progress';
import { dueCards } from '../engine/srs';
import { isExercise, LEVEL_INFO, type Exercise, type Item, type Stage } from '../engine/types';
import { stopSpeaking } from '../speech';
import { useStore, type Position } from '../store';
import { ExerciseView, type ExResult } from './exercises';
import { DialogueView, TheoryView, VocabListView } from './info';
import { ReviewSession } from './Review';
import { Inline } from './Rich';

const STAGE_ICON: Record<string, string> = {
  warmup: '🔁',
  episode: '🎬',
  grammar: '🧩',
  vocab: '📚',
  listening: '🎧',
  speaking: '🎤',
  writing: '✍️',
  checkpoint: '🏁',
};

const XP_PER_RIGHT = 10;
const XP_LESSON = 50;

function useStageTimer(key: string) {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    setSec(0);
    const t = setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [key]);
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
}

function emptyPosition(stages: Stage[]): Position {
  return { stage: 0, item: 0, correct: 0, total: 0, xp: 0, stageScores: stages.map(() => ({ correct: 0, total: 0 })) };
}

export function LessonPlayer() {
  const { id = '' } = useParams();
  const found = findLesson(id);
  const s = useStore();
  const navigate = useNavigate();
  const today = dayKey();

  const lesson = found?.lesson;
  const saved = lesson ? s.positions[lesson.id] : undefined;
  const dueCount = useMemo(() => dueCards(s.cards, new Date()).length, []); // eslint-disable-line react-hooks/exhaustive-deps
  const [warmup, setWarmup] = useState(!saved && dueCount > 0 && !lesson?.checkpoint);
  const [pos, setPos] = useState<Position>(() => saved ?? emptyPosition(lesson?.stages ?? []));
  const [retry, setRetry] = useState<Exercise[]>([]);
  const [retryIdx, setRetryIdx] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const timer = useStageTimer(warmup ? 'w' : `${pos.stage}`);

  useEffect(() => () => stopSpeaking(), []);

  if (!found || !lesson) return <Navigate to="/" />;
  const status = lessonStatus(COURSE, found.index, s.completed, today, s.settings.unlimited);
  if (status === 'locked' && !finished) return <Navigate to="/" />;
  if (status === 'tomorrow' && !saved && !finished) {
    return (
      <main className="page">
        <div className="card center">
          <h2>Сегодняшний урок уже пройден 🎉</h2>
          <p>Следующий откроется завтра. Пока можно повторить карточки или прочитать журнал ошибок.</p>
          <div className="row center">
            <Link className="button primary" to="/review">
              Повторение
            </Link>
            <Link className="button" to="/">
              На карту
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const stage = lesson.stages[pos.stage];
  const inRetry = retryIdx !== null;
  const item: Item | undefined = inRetry ? retry[retryIdx] : stage?.items[pos.item];

  function persist(p: Position) {
    setPos(p);
    s.savePosition(lesson!.id, p);
  }

  function finishLesson(p: Position) {
    const xp = p.correct * XP_PER_RIGHT + XP_LESSON;
    if (lesson!.checkpoint) {
      // Weak topics go back into the review queue.
      lesson!.stages.forEach((st, i) => {
        const sc = p.stageScores[i];
        if (sc.total > 0 && sc.correct / sc.total < 0.7) s.addExerciseCards(lesson!.id, st.items.filter(isExercise));
      });
    }
    const prev = s.completed[lesson!.id];
    if (prev && !prev.viaPlacement) {
      // A replay: keep the original completion day so the daily rule holds.
      s.savePosition(lesson!.id, null);
      s.markActive();
    } else s.completeLesson(lesson!, { correct: p.correct, total: p.total, xp });
    setPos({ ...p, xp });
    setFinished(true);
  }

  function advance(p: Position) {
    if (!inRetry && p.item + 1 < stage.items.length) return persist({ ...p, item: p.item + 1 });
    // End of the stage's own items: go through retries once.
    if (!inRetry && retry.length > 0) {
      setRetryIdx(0);
      return persist(p);
    }
    if (inRetry && retryIdx! + 1 < retry.length) {
      setRetryIdx(retryIdx! + 1);
      return;
    }
    setRetry([]);
    setRetryIdx(null);
    if (p.stage + 1 < lesson!.stages.length) {
      window.scrollTo({ top: 0 });
      return persist({ ...p, stage: p.stage + 1, item: 0 });
    }
    finishLesson(p);
  }

  function onInfoDone() {
    if (item?.kind === 'vocabList') s.addVocab(lesson!.id, item.words);
    advance(pos);
  }

  function onExerciseDone(ex: Exercise, r: ExResult) {
    let p = pos;
    if (r.graded && !inRetry) {
      const sc = p.stageScores.map((x, i) => (i === p.stage ? { correct: x.correct + (r.correct ? 1 : 0), total: x.total + 1 } : x));
      p = { ...p, correct: p.correct + (r.correct ? 1 : 0), total: p.total + 1, stageScores: sc };
    }
    if (r.graded && !r.correct) {
      s.recordMistake(lesson!.id, ex, r.yours, stage.kind !== 'episode');
      if (!inRetry) setRetry((q) => [...q, ex]);
    }
    advance(p);
  }

  if (finished) {
    const pct = pos.total ? Math.round((pos.correct / pos.total) * 100) : 100;
    return (
      <main className="page">
        <div className="card center done">
          <div className="big-emoji">{pct >= 80 ? '🚀' : pct >= 60 ? '👍' : '💪'}</div>
          <h2>Урок пройден!</h2>
          <p>
            Верно с первого раза: {pos.correct} из {pos.total} ({pct}%) · +{pos.xp} XP
          </p>
          {lesson.checkpoint && (
            <ul className="left">
              {lesson.stages.map((st, i) => {
                const sc = pos.stageScores[i];
                const r = sc.total ? sc.correct / sc.total : 1;
                return (
                  <li key={i}>
                    {r < 0.7 ? '⚠️' : '✅'} {st.title}: {sc.correct}/{sc.total}
                    {r < 0.7 && ' — добавлено в повторение'}
                  </li>
                );
              })}
            </ul>
          )}
          <p className="muted">Ошибки уже в карточках повторения. Следующий урок откроется завтра.</p>
          <button className="primary" onClick={() => navigate('/')}>
            На карту
          </button>
        </div>
      </main>
    );
  }

  const stagesNav = (
    <div className="stages">
      {!lesson.checkpoint && dueCount > 0 && (
        <span className={'stage-pill' + (warmup ? ' current' : ' past')} title="Разминка: повторение">
          {STAGE_ICON.warmup}
        </span>
      )}
      {lesson.stages.map((st, i) => (
        <span
          key={i}
          className={'stage-pill' + (!warmup && i === pos.stage ? ' current' : '') + (!warmup && i < pos.stage ? ' past' : '')}
          title={`${st.title} · ~${st.minutes} мин`}
        >
          {STAGE_ICON[st.kind]}
        </span>
      ))}
    </div>
  );

  return (
    <main className="page lesson">
      <header className="lesson-head">
        <Link to="/" className="back" onClick={() => stopSpeaking()}>
          ← Карта
        </Link>
        <div className="lesson-title">
          <div className="muted small">
            {LEVEL_INFO[lesson.level].title} · {lesson.grammar}
          </div>
          <div>{lesson.title}</div>
        </div>
        {stagesNav}
      </header>

      {warmup ? (
        <section>
          <div className="stage-head">
            <h2>{STAGE_ICON.warmup} Разминка: повторение</h2>
            <span className="timer">⏱ {timer} / ~10 мин</span>
          </div>
          <ReviewSession limit={25} onFinish={() => setWarmup(false)} />
        </section>
      ) : (
        <section>
          <div className="stage-head">
            <h2>
              {STAGE_ICON[stage.kind]} <Inline text={stage.title} />
            </h2>
            <span className="timer">
              ⏱ {timer} / ~{stage.minutes} мин
            </span>
          </div>
          <div className="progress">
            <div style={{ width: `${(100 * (pos.item + (inRetry ? 1 : 0))) / Math.max(1, stage.items.length)}%` }} />
          </div>
          {inRetry && <div className="retry-note">Ещё раз задания, где была ошибка ({retryIdx! + 1}/{retry.length})</div>}
          {item && (
            <div className="item" key={`${pos.stage}-${pos.item}-${retryIdx}`}>
              {isExercise(item) ? (
                <ExerciseView ex={item} seed={`${lesson.id}-${pos.stage}-${pos.item}-${retryIdx ?? ''}`} onDone={(r) => onExerciseDone(item, r)} />
              ) : (
                <>
                  {item.kind === 'theory' && <TheoryView item={item} />}
                  {item.kind === 'dialogue' && <DialogueView item={item} />}
                  {item.kind === 'vocabList' && <VocabListView item={item} />}
                  <button className="primary" onClick={onInfoDone}>
                    Понятно, дальше →
                  </button>
                </>
              )}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
