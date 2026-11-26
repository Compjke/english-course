import { createEmptyCard, fsrs, generatorParameters, Rating, type Card, type Grade } from 'ts-fsrs';
import type { Exercise, VocabEntry } from './types';

const scheduler = fsrs(generatorParameters({ enable_fuzz: true, maximum_interval: 365 }));

export { Rating };

export type SrsPayload =
  | { type: 'vocab'; lessonId: string; entry: VocabEntry }
  | { type: 'exercise'; lessonId: string; exercise: Exercise };

export interface SrsCard {
  id: string;
  payload: SrsPayload;
  card: Card;
  addedDay: string;
}

/** Cards are stored as JSON, so dates come back as strings. */
function revive(card: Card): Card {
  return {
    ...card,
    due: new Date(card.due),
    last_review: card.last_review ? new Date(card.last_review) : undefined,
  };
}

export function newCard(id: string, payload: SrsPayload, now: Date, addedDay: string): SrsCard {
  return { id, payload, card: createEmptyCard(now), addedDay };
}

export function review(c: SrsCard, grade: Grade, now: Date): SrsCard {
  const next = scheduler.next(revive(c.card), now, grade);
  return { ...c, card: next.card };
}

export function isDue(c: SrsCard, now: Date): boolean {
  return new Date(c.card.due).getTime() <= now.getTime();
}

/** Due cards, oldest due first, mistakes before vocab on ties. */
export function dueCards(cards: Record<string, SrsCard>, now: Date, limit = Infinity): SrsCard[] {
  return Object.values(cards)
    .filter((c) => isDue(c, now))
    .sort((a, b) => new Date(a.card.due).getTime() - new Date(b.card.due).getTime())
    .slice(0, limit);
}

export function vocabCardId(lessonId: string, chunk: string): string {
  return `v:${lessonId}:${chunk.toLowerCase()}`;
}

export function exerciseCardId(lessonId: string, ex: Exercise): string {
  const key = JSON.stringify(ex).slice(0, 160);
  let h = 0;
  for (const ch of key) h = (Math.imul(h, 31) + ch.charCodeAt(0)) | 0;
  return `e:${lessonId}:${(h >>> 0).toString(36)}`;
}
