import { create } from 'zustand';
import { createJSONStorage, persist, type StateStorage } from 'zustand/middleware';
import { del, get, set } from 'idb-keyval';
import type { Grade } from 'ts-fsrs';
import { dayKey } from './engine/days';
import type { Completed, LessonResult } from './engine/progress';
import { exerciseCardId, newCard, review, vocabCardId, type SrsCard } from './engine/srs';
import { correctOf, promptOf, reviewable } from './engine/describe';
import type { Exercise, Lesson, VocabEntry } from './engine/types';

export interface Settings {
  reminderTime: string;
  ttsRate: number;
  voiceURI: string;
  unlimited: boolean;
  appUrl: string;
  inAppReminders: boolean;
}

export interface Mistake {
  id: string;
  day: string;
  lessonId: string;
  prompt: string;
  yours: string;
  correct: string;
}

export interface Position {
  stage: number;
  item: number;
  correct: number;
  total: number;
  xp: number;
  stageScores: { correct: number; total: number }[];
}

export interface State {
  completed: Completed;
  activeDays: string[];
  cards: Record<string, SrsCard>;
  mistakes: Mistake[];
  positions: Record<string, Position>;
  placement?: { day: string; level: string };
  reviewsByDay: Record<string, number>;
  settings: Settings;
}

interface Actions {
  completeLesson(lesson: Lesson, r: Omit<LessonResult, 'day'>): void;
  savePosition(lessonId: string, p: Position | null): void;
  addVocab(lessonId: string, entries: VocabEntry[]): void;
  addExerciseCards(lessonId: string, exs: Exercise[]): void;
  /** toSrs=false for items that make no sense out of context (story questions). */
  recordMistake(lessonId: string, ex: Exercise, yours: string, toSrs?: boolean): void;
  reviewCard(id: string, grade: Grade): void;
  markActive(): void;
  applyPlacement(level: string, skipped: Lesson[]): void;
  updateSettings(s: Partial<Settings>): void;
  importState(s: State): void;
  reset(): void;
}

const idbStorage: StateStorage = {
  getItem: async (name) => (await get<string>(name)) ?? null,
  setItem: (name, value) => set(name, value),
  removeItem: (name) => del(name),
};

const initial: State = {
  completed: {},
  activeDays: [],
  cards: {},
  mistakes: [],
  positions: {},
  reviewsByDay: {},
  settings: {
    reminderTime: '19:00',
    ttsRate: 1,
    voiceURI: '',
    unlimited: false,
    appUrl: '',
    inAppReminders: true,
  },
};

function withActive(days: string[], today: string) {
  return days.includes(today) ? days : [...days, today];
}

function vocabCards(cards: Record<string, SrsCard>, lessonId: string, entries: VocabEntry[]) {
  const now = new Date();
  const out = { ...cards };
  for (const entry of entries) {
    const id = vocabCardId(lessonId, entry.chunk);
    if (!out[id]) out[id] = newCard(id, { type: 'vocab', lessonId, entry }, now, dayKey(now));
  }
  return out;
}

export const useStore = create<State & Actions>()(
  persist(
    (setState) => ({
      ...initial,
      completeLesson: (lesson, r) =>
        setState((s) => {
          const today = dayKey();
          const positions = { ...s.positions };
          delete positions[lesson.id];
          return {
            completed: { ...s.completed, [lesson.id]: { ...r, day: today } },
            activeDays: withActive(s.activeDays, today),
            positions,
          };
        }),
      savePosition: (lessonId, p) =>
        setState((s) => {
          const positions = { ...s.positions };
          if (p) positions[lessonId] = p;
          else delete positions[lessonId];
          return { positions };
        }),
      addVocab: (lessonId, entries) => setState((s) => ({ cards: vocabCards(s.cards, lessonId, entries) })),
      addExerciseCards: (lessonId, exs) =>
        setState((s) => {
          const now = new Date();
          const cards = { ...s.cards };
          for (const ex of exs.filter(reviewable)) {
            const id = exerciseCardId(lessonId, ex);
            if (!cards[id]) cards[id] = newCard(id, { type: 'exercise', lessonId, exercise: ex }, now, dayKey(now));
          }
          return { cards };
        }),
      recordMistake: (lessonId, ex, yours, toSrs = true) =>
        setState((s) => {
          const now = new Date();
          const cards = { ...s.cards };
          if (toSrs && reviewable(ex)) {
            const id = exerciseCardId(lessonId, ex);
            // A fresh mistake makes the card due again right away.
            cards[id] = newCard(id, { type: 'exercise', lessonId, exercise: ex }, now, dayKey(now));
          }
          const m: Mistake = {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            day: dayKey(now),
            lessonId,
            prompt: promptOf(ex),
            yours,
            correct: correctOf(ex),
          };
          return { cards, mistakes: [m, ...s.mistakes].slice(0, 500) };
        }),
      reviewCard: (id, grade) =>
        setState((s) => {
          const c = s.cards[id];
          if (!c) return {};
          const today = dayKey();
          return {
            cards: { ...s.cards, [id]: review(c, grade, new Date()) },
            reviewsByDay: { ...s.reviewsByDay, [today]: (s.reviewsByDay[today] ?? 0) + 1 },
          };
        }),
      markActive: () => setState((s) => ({ activeDays: withActive(s.activeDays, dayKey()) })),
      applyPlacement: (level, skipped) =>
        setState((s) => {
          const today = dayKey();
          const completed = { ...s.completed };
          let cards = s.cards;
          for (const l of skipped) {
            if (completed[l.id]) continue;
            completed[l.id] = { day: today, correct: 0, total: 0, xp: 0, viaPlacement: true };
            const words = l.stages.flatMap((st) => st.items).flatMap((i) => (i.kind === 'vocabList' ? i.words : []));
            cards = vocabCards(cards, l.id, words);
          }
          return { completed, cards, placement: { day: today, level } };
        }),
      updateSettings: (patch) => setState((s) => ({ settings: { ...s.settings, ...patch } })),
      importState: (incoming) => setState(() => ({ ...initial, ...incoming, settings: { ...initial.settings, ...incoming.settings } })),
      reset: () => setState(() => ({ ...initial })),
    }),
    {
      name: 'it-english-v1',
      storage: createJSONStorage(() => idbStorage),
      partialize: (s: State & Actions) => pickData(s),
    },
  ),
);

export function exportState(): State {
  return pickData(useStore.getState());
}

function pickData(s: State): State {
  return {
    completed: s.completed,
    activeDays: s.activeDays,
    cards: s.cards,
    mistakes: s.mistakes,
    positions: s.positions,
    placement: s.placement,
    reviewsByDay: s.reviewsByDay,
    settings: s.settings,
  };
}
