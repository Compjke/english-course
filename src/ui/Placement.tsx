import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSE } from '../content';
import { PLACEMENT } from '../content/placement';
import { LEVEL_INFO, LEVELS, type Level } from '../engine/types';
import { useStore } from '../store';
import { ExerciseView } from './exercises';

const PASS = 6;

export function Placement() {
  const navigate = useNavigate();
  const applyPlacement = useStore((s) => s.applyPlacement);
  const [levelIdx, setLevelIdx] = useState(0);
  const [q, setQ] = useState(0);
  const [right, setRight] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [result, setResult] = useState<Level | null>(null);

  const level = LEVELS[levelIdx];
  const questions = PLACEMENT[level];

  function answer(ok: boolean) {
    const r = right + (ok ? 1 : 0);
    if (q + 1 < questions.length) {
      setRight(r);
      setQ(q + 1);
      return;
    }
    const all = [...scores, r];
    setScores(all);
    // Stop at the first level that is not passed: that's where to start.
    if (r < PASS || levelIdx + 1 >= LEVELS.length) {
      setResult(r < PASS ? level : LEVELS[LEVELS.length - 1]);
      return;
    }
    setLevelIdx(levelIdx + 1);
    setQ(0);
    setRight(0);
  }

  function start(from: Level | null) {
    if (from) {
      const first = COURSE.findIndex((l) => LEVELS.indexOf(l.level) >= LEVELS.indexOf(from));
      const skipped = first < 0 ? COURSE : COURSE.slice(0, first);
      applyPlacement(from, skipped);
    } else applyPlacement('A2', []);
    navigate('/');
  }

  if (result) {
    const firstOfLevel = COURSE.findIndex((l) => LEVELS.indexOf(l.level) >= LEVELS.indexOf(result));
    return (
      <main className="page">
        <div className="card">
          <h1>Результат теста</h1>
          <ul>
            {scores.map((sc, i) => (
              <li key={i}>
                {LEVEL_INFO[LEVELS[i]].title}: {sc}/8 {sc >= PASS ? '✅' : '⚠️'}
              </li>
            ))}
          </ul>
          <p>
            Рекомендуемая стартовая точка: <b>{LEVEL_INFO[result].title}</b>. Предыдущие уроки отметятся как пройденные, а их слова уйдут в
            карточки повторения, чтобы освежить базу.
          </p>
          {firstOfLevel < 0 && (
            <p className="hint">
              Уроки уровня {result} ещё в разработке. Пока можно начать с начала и повторить основы, это тоже полезно.
            </p>
          )}
          <div className="row">
            {result !== 'A2' && firstOfLevel >= 0 && (
              <button className="primary" onClick={() => start(result)}>
                Начать с {LEVEL_INFO[result].title}
              </button>
            )}
            <button className={result === 'A2' || firstOfLevel < 0 ? 'primary' : ''} onClick={() => start(null)}>
              Начать с самого начала
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <h1>Входной тест</h1>
      <p className="muted">
        Уровень {LEVEL_INFO[level].title} · вопрос {q + 1} из {questions.length}. Если не знаешь, выбирай наугад: тест сам остановится на
        нужном уровне.
      </p>
      <div className="progress">
        <div style={{ width: `${(100 * (levelIdx * 8 + q)) / 40}%` }} />
      </div>
      <ExerciseView key={`${levelIdx}-${q}`} ex={questions[q]} seed={`p${levelIdx}${q}`} onDone={(r) => answer(r.correct)} />
    </main>
  );
}
