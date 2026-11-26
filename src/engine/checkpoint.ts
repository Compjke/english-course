import { maskChunk, seededShuffle } from './check';
import type { Exercise, Item, Lesson, Stage } from './types';

const GRADED_TEXT = new Set(['choice', 'gap', 'transform', 'fix', 'order']);

/**
 * Builds a checkpoint from the lessons it follows: one stage per source
 * lesson (so a weak stage = a weak topic), mixing grammar items, vocab
 * recall from that lesson and one dictation.
 */
export function buildCheckpoint(id: string, number: number, sources: Lesson[]): Lesson {
  const stages: Stage[] = sources.map((src) => {
    const grammar = src.stages
      .filter((s) => s.kind === 'grammar')
      .flatMap((s) => s.items)
      .filter((i): i is Exercise => GRADED_TEXT.has(i.kind));
    const vocab = src.stages
      .flatMap((s) => s.items)
      .flatMap((i) => (i.kind === 'vocabList' ? i.words : []));
    const dict = src.stages
      .flatMap((s) => s.items)
      .filter((i): i is Exercise => i.kind === 'dictation');

    const items: Item[] = [
      ...seededShuffle(grammar, id + src.id).slice(0, 5),
      ...seededShuffle(vocab, id + src.id + 'v')
        .slice(0, 2)
        .flatMap((w): Item[] => {
          const masked = maskChunk(w.example, w.chunk);
          return masked ? [{ kind: 'gap', text: masked, answers: [w.chunk], hint: w.ru }] : [];
        }),
      ...seededShuffle(dict, id + src.id + 'd').slice(0, 1),
    ];
    return { kind: 'checkpoint', title: src.grammar, minutes: 8, items };
  });
  return {
    id,
    level: sources[sources.length - 1].level,
    title: `Checkpoint ${number}: sprint review`,
    grammar: 'Контрольная по последним темам',
    scene: 'Конец спринта: команда проверяет, что ты усвоил(а) за неделю.',
    stages,
    checkpoint: true,
  };
}

/** Inserts a checkpoint after every `every` regular lessons. */
export function withCheckpoints(lessons: Lesson[], every = 7): Lesson[] {
  const out: Lesson[] = [];
  let n = 0;
  lessons.forEach((l, i) => {
    out.push(l);
    if ((i + 1) % every === 0) {
      n++;
      out.push(buildCheckpoint(`cp-${String(n).padStart(2, '0')}`, n, lessons.slice(i + 1 - every, i + 1)));
    }
  });
  return out;
}
