import { describe, expect, it } from 'vitest';
import { COURSE, LESSONS } from '../src/content';
import { PLACEMENT } from '../src/content/placement';
import { CAST } from '../src/content/story';
import { keywordHits, maskChunk, matches, normalize } from '../src/engine/check';
import { isExercise, LEVELS, type Item, type Lesson } from '../src/engine/types';

const allItems = (l: Lesson): Item[] => l.stages.flatMap((s) => s.items);

/** Only **bold** and *italic* are rendered; anything else shows raw. */
function badMarkup(text: string): string | null {
  if (/`|~~|\[.+\]\(.+\)|^#/m.test(text)) return 'unsupported markup';
  const stripped = text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1');
  if (stripped.includes('*')) return 'unbalanced *';
  return null;
}

function texts(item: Item): string[] {
  switch (item.kind) {
    case 'theory':
      return [item.body, ...(item.table?.flat() ?? []), ...(item.examples ?? []), ...(item.pitfalls?.flatMap((p) => [p.wrong, p.right, p.note ?? '']) ?? [])];
    case 'dialogue':
      return item.lines.map((l) => l.text);
    case 'vocabList':
      return item.words.flatMap((w) => [w.example, w.ru]);
    case 'choice':
      return [item.prompt, ...item.options, item.explain ?? ''];
    case 'gap':
      return [item.text, item.explain ?? ''];
    case 'transform':
      return [item.instruction, item.source, item.explain ?? ''];
    case 'fix':
      return [item.explain ?? ''];
    case 'speak':
      return [item.situation, item.sample];
    case 'write':
      return [item.task, ...item.checklist];
    default:
      return [];
  }
}

describe('course structure', () => {
  it('has lessons with unique ids', () => {
    expect(LESSONS.length).toBeGreaterThan(0);
    const ids = COURSE.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
  it('lessons are in level order', () => {
    const order = LESSONS.map((l) => LEVELS.indexOf(l.level));
    expect([...order].sort((a, b) => a - b)).toEqual(order);
  });
  it('placement has 8 valid questions per level', () => {
    for (const lvl of LEVELS) {
      expect(PLACEMENT[lvl]).toHaveLength(8);
      for (const q of PLACEMENT[lvl]) expect(q.options[q.answer]).toBeDefined();
    }
  });
});

describe.each(LESSONS.map((l) => [l.id, l] as const))('lesson %s', (_id, lesson) => {
  const items = allItems(lesson);

  it('lasts 55–90 minutes including a 10-minute warm-up', () => {
    const total = 10 + lesson.stages.reduce((s, st) => s + st.minutes, 0);
    expect(total).toBeGreaterThanOrEqual(55);
    expect(total).toBeLessThanOrEqual(90);
  });

  it('has enough practice (at least 40 graded items)', () => {
    expect(items.filter(isExercise).length).toBeGreaterThanOrEqual(40);
  });

  it('has every stage type', () => {
    for (const k of ['episode', 'grammar', 'vocab', 'listening', 'speaking', 'writing'])
      expect(lesson.stages.some((s) => s.kind === k), k).toBe(true);
  });

  it('uses only supported markup', () => {
    for (const item of items) for (const t of texts(item)) expect(badMarkup(t), t).toBeNull();
  });

  it('dialogue speakers are in the cast', () => {
    for (const item of items) if (item.kind === 'dialogue') for (const l of item.lines) expect(CAST[l.who], l.who).toBeDefined();
  });

  it('exercises are answerable', () => {
    for (const item of items) {
      const where = JSON.stringify(item).slice(0, 120);
      switch (item.kind) {
        case 'choice':
          expect(item.options[item.answer], where).toBeDefined();
          expect(new Set(item.options).size, where).toBe(item.options.length);
          break;
        case 'gap':
          expect(item.text.split('___').length, where).toBe(2);
          for (const a of item.answers) expect(normalize(a), where).not.toBe('');
          break;
        case 'transform':
          expect(item.answers.length, where).toBeGreaterThan(0);
          for (const a of item.answers) expect(normalize(a), where).not.toBe('');
          break;
        case 'fix':
          expect(matches(item.sentence, item.answers), `fix accepted as-is: ${item.sentence}`).toBe(false);
          break;
        case 'order':
          expect(item.words.length, where).toBeGreaterThan(2);
          break;
        case 'match':
          expect(item.pairs.length, where).toBeGreaterThanOrEqual(3);
          expect(new Set(item.pairs.map((p) => p[1])).size, where).toBe(item.pairs.length);
          break;
        case 'speak':
          expect(keywordHits(item.sample, item.keywords).every(Boolean), `sample misses keywords: ${item.sample}`).toBe(true);
          for (const k of item.keywords) expect(/^'/.test(k), `bare contraction keyword: ${k}`).toBe(false);
          break;
        case 'write':
          expect(item.sample.split(/\s+/).length, where).toBeGreaterThanOrEqual(item.minWords);
          break;
      }
    }
  });

  it('vocab chunks can be masked in their examples', () => {
    for (const item of items)
      if (item.kind === 'vocabList') for (const w of item.words) expect(maskChunk(w.example, w.chunk), w.chunk).not.toBeNull();
  });
});
