export type Level = 'A2' | 'B1' | 'B1+' | 'B2' | 'B2+';
export const LEVELS: Level[] = ['A2', 'B1', 'B1+', 'B2', 'B2+'];

export const LEVEL_INFO: Record<Level, { title: string; arc: string }> = {
  A2: { title: 'A2 Review', arc: 'Onboarding' },
  B1: { title: 'B1', arc: 'First Sprint' },
  'B1+': { title: 'B1+', arc: 'Owning Features' },
  B2: { title: 'B2', arc: 'Tech Lead Track' },
  'B2+': { title: 'B2+', arc: 'Promotion' },
};

/* ---------- Info items (no grading) ---------- */

export interface TheoryItem {
  kind: 'theory';
  title?: string;
  /** Paragraphs separated by blank lines. Supports **bold** and *italic* only. */
  body: string;
  table?: string[][]; // first row = header
  examples?: string[];
  pitfalls?: { wrong: string; right: string; note?: string }[];
}

export interface DialogueItem {
  kind: 'dialogue';
  title: string;
  /** Format of the text: chat, call, email, ticket, PR... purely visual. */
  format?: 'chat' | 'call' | 'email' | 'doc';
  lines: { who: string; text: string }[];
}

export interface VocabEntry {
  chunk: string; // the phrase to learn, must appear in example
  ru: string;
  example: string;
}
export interface VocabListItem {
  kind: 'vocabList';
  words: VocabEntry[];
}

/* ---------- Exercises (graded) ---------- */

export interface ChoiceEx {
  kind: 'choice';
  prompt: string;
  options: string[];
  answer: number;
  explain?: string;
}

/** Text with one gap marked as ___ */
export interface GapEx {
  kind: 'gap';
  text: string;
  answers: string[];
  hint?: string;
  explain?: string;
}

export interface TransformEx {
  kind: 'transform';
  instruction: string;
  source: string;
  answers: string[];
  explain?: string;
}

/** The sentence contains a mistake; the learner types the corrected sentence. */
export interface FixEx {
  kind: 'fix';
  sentence: string;
  answers: string[];
  explain?: string;
}

/** Build a sentence from shuffled words. `words` is in correct order. */
export interface OrderEx {
  kind: 'order';
  words: string[];
  alt?: string[]; // other accepted full sentences
  ru?: string;
  explain?: string;
}

export interface MatchEx {
  kind: 'match';
  prompt?: string;
  pairs: [string, string][];
}

export interface DictationEx {
  kind: 'dictation';
  text: string;
}

export interface ShadowEx {
  kind: 'shadow';
  text: string;
}

export interface SpeakEx {
  kind: 'speak';
  situation: string;
  keywords: string[];
  sample: string;
}

export interface WriteEx {
  kind: 'write';
  task: string;
  checklist: string[];
  minWords: number;
  sample: string;
}

export type Exercise =
  | ChoiceEx
  | GapEx
  | TransformEx
  | FixEx
  | OrderEx
  | MatchEx
  | DictationEx
  | ShadowEx
  | SpeakEx
  | WriteEx;

export type Item = TheoryItem | DialogueItem | VocabListItem | Exercise;

export type StageKind = 'episode' | 'grammar' | 'vocab' | 'listening' | 'speaking' | 'writing' | 'checkpoint';

export interface Stage {
  kind: StageKind;
  title: string;
  minutes: number;
  items: Item[];
}

export interface Lesson {
  id: string; // e.g. "a2-01"
  level: Level;
  title: string; // story title of the day
  grammar: string; // grammar topic name
  scene: string; // one-line story setup shown on the map
  stages: Stage[];
  checkpoint?: boolean;
}

export const INFO_KINDS = ['theory', 'dialogue', 'vocabList'] as const;
export function isExercise(item: Item): item is Exercise {
  return !(INFO_KINDS as readonly string[]).includes(item.kind);
}
