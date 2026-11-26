import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating, type Grade } from 'ts-fsrs';
import { maskChunk } from '../engine/check';
import { dueCards, type SrsCard } from '../engine/srs';
import type { GapEx } from '../engine/types';
import { useStore } from '../store';
import { ExerciseView, type ExResult } from './exercises';

function toExercise(c: SrsCard) {
  if (c.payload.type === 'exercise') return c.payload.exercise;
  const { entry } = c.payload;
  const masked = maskChunk(entry.example, entry.chunk) ?? `___ (${entry.example})`;
  const gap: GapEx = { kind: 'gap', text: masked, answers: [entry.chunk], hint: entry.ru };
  return gap;
}

/**
 * Runs through a fixed batch of due cards. A wrong answer grades the card
 * "Again"; a right one lets the learner say how hard it felt.
 */
export function ReviewSession({ limit, onFinish }: { limit: number; onFinish: (stats: { done: number; right: number }) => void }) {
  const cards = useStore((s) => s.cards);
  const reviewCard = useStore((s) => s.reviewCard);
  // Snapshot the batch once so grading does not reshuffle the queue.
  const batch = useMemo(() => dueCards(cards, new Date(), limit), []); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [right, setRight] = useState(0);
  const [pending, setPending] = useState<ExResult | null>(null);

  if (batch.length === 0) {
    return (
      <div className="card center">
        <p>Нет карточек на повторение. Отлично!</p>
        <button className="primary" onClick={() => onFinish({ done: 0, right: 0 })}>
          Дальше →
        </button>
      </div>
    );
  }
  const card = batch[i];

  function grade(g: Grade, ok: boolean) {
    reviewCard(card.id, g);
    const r = right + (ok ? 1 : 0);
    setRight(r);
    setPending(null);
    if (i + 1 >= batch.length) onFinish({ done: batch.length, right: r });
    else setI(i + 1);
  }

  return (
    <div>
      <div className="muted small">
        Карточка {i + 1} из {batch.length} · {card.payload.type === 'vocab' ? 'слово' : 'твоя прошлая ошибка'}
      </div>
      {!pending && (
        <ExerciseView
          key={card.id}
          ex={toExercise(card)}
          seed={card.id}
          onDone={(r) => {
            if (!r.correct) grade(Rating.Again, false);
            else setPending(r);
          }}
        />
      )}
      {pending && (
        <div className="grade">
          <div className="instruction">Насколько легко было вспомнить?</div>
          <div className="row">
            <button onClick={() => grade(Rating.Hard, true)}>😓 Трудно</button>
            <button className="primary" onClick={() => grade(Rating.Good, true)}>
              🙂 Нормально
            </button>
            <button onClick={() => grade(Rating.Easy, true)}>😎 Легко</button>
          </div>
        </div>
      )}
    </div>
  );
}

export function ReviewPage() {
  const [stats, setStats] = useState<{ done: number; right: number } | null>(null);
  const [round, setRound] = useState(0);
  const markActive = useStore((s) => s.markActive);
  return (
    <main className="page">
      <h1>Повторение</h1>
      {!stats && (
        <ReviewSession
          key={round}
          limit={30}
          onFinish={(s) => {
            if (s.done > 0) markActive();
            setStats(s);
          }}
        />
      )}
      {stats && (
        <div className="card center">
          <p>
            Повторено: {stats.done}, верно с первого раза: {stats.right}
          </p>
          <div className="row center">
            <button
              onClick={() => {
                setStats(null);
                setRound(round + 1);
              }}
            >
              Ещё раунд
            </button>
            <Link className="button primary" to="/">
              На карту
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
