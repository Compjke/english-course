import { describe, expect, it } from 'vitest';
import { Rating } from 'ts-fsrs';
import { diffWords, keywordHits, matches, normalize } from '../src/engine/check';
import { addDays, computeStreak, weekOf } from '../src/engine/days';
import { lessonStatus } from '../src/engine/progress';
import { buildIcs } from '../src/engine/ics';
import { dueCards, newCard, review } from '../src/engine/srs';
import { withCheckpoints } from '../src/engine/checkpoint';
import type { Lesson } from '../src/engine/types';

describe('normalize / matches', () => {
  it('ignores case, spaces, edge punctuation and curly quotes', () => {
    expect(normalize('  The Bug   ISN’T critical. ')).toBe('the bug is not critical');
    expect(matches("i'm not ready", ['I am not ready.'])).toBe(true);
  });
  it('treats contractions and full forms the same', () => {
    expect(matches("We can't deploy", ['We cannot deploy.'])).toBe(true);
    expect(matches("It won't work", ['It will not work'])).toBe(true);
    expect(matches("they're online", ['They are online'])).toBe(true);
  });
  it('does not accept a wrong word', () => {
    expect(matches('The tests is green', ['The tests are green'])).toBe(false);
    expect(matches('', ['x'])).toBe(false);
  });
});

describe('diffWords / keywordHits', () => {
  it('marks missed words', () => {
    const d = diffWords('The tests are green.', 'the test are green');
    expect(d.parts.map((p) => p.ok)).toEqual([true, false, true, true]);
    expect(d.ratio).toBe(0.75);
  });
  it('finds keywords as whole phrases', () => {
    expect(keywordHits("Hi, I'm Alex, nice to meet you", ["I'm", 'nice to meet you', 'developer'])).toEqual([true, true, false]);
  });
});

describe('streak', () => {
  it('counts consecutive days ending today or yesterday', () => {
    const today = '2026-11-26';
    expect(computeStreak([today, addDays(today, -1), addDays(today, -2)], today).days).toBe(3);
    expect(computeStreak([addDays(today, -1), addDays(today, -2)], today).days).toBe(2);
    expect(computeStreak([addDays(today, -3)], today).days).toBe(0);
  });
  it('freezes one missed day per week', () => {
    const today = '2026-11-26'; // Thursday
    const days = [today, '2026-11-25', '2026-11-23', '2026-11-22'];
    const r = computeStreak(days, today);
    expect(r.frozen).toEqual(['2026-11-24']);
    expect(r.days).toBe(4);
  });
  it('does not freeze two days in the same week', () => {
    const today = '2026-11-27'; // Friday
    const days = [today, '2026-11-25', '2026-11-23'];
    expect(computeStreak(days, today).days).toBe(2);
  });
  it('weeks start on Monday', () => {
    expect(weekOf('2026-11-29')).toBe('2026-11-23');
    expect(weekOf('2026-11-30')).toBe('2026-11-30');
  });
});

const fake = (id: string): Lesson => ({ id, level: 'A2', title: id, grammar: id, scene: '', stages: [] });

describe('daily unlock', () => {
  const course = [fake('a'), fake('b'), fake('c')];
  it('opens the first lesson', () => {
    expect(lessonStatus(course, 0, {}, '2026-11-26', false)).toBe('available');
    expect(lessonStatus(course, 1, {}, '2026-11-26', false)).toBe('locked');
  });
  it('allows only one new lesson per day', () => {
    const done = { a: { day: '2026-11-26', correct: 1, total: 1, xp: 1 } };
    expect(lessonStatus(course, 1, done, '2026-11-26', false)).toBe('tomorrow');
    expect(lessonStatus(course, 1, done, '2026-11-27', false)).toBe('available');
    expect(lessonStatus(course, 1, done, '2026-11-26', true)).toBe('available');
  });
  it('lessons skipped by the placement test do not use up the day', () => {
    const done = { a: { day: '2026-11-26', correct: 0, total: 0, xp: 0, viaPlacement: true } };
    expect(lessonStatus(course, 1, done, '2026-11-26', false)).toBe('available');
  });
});

describe('srs', () => {
  it('a new card is due now and moves into the future after Good', () => {
    const now = new Date('2026-11-26T10:00:00');
    const c = newCard('x', { type: 'vocab', lessonId: 'a', entry: { chunk: 'a', ru: 'a', example: 'a' } }, now, '2026-11-26');
    expect(dueCards({ x: c }, now)).toHaveLength(1);
    // Simulate JSON storage round-trip.
    const stored = JSON.parse(JSON.stringify(c));
    const after = review(stored, Rating.Good, now);
    expect(new Date(after.card.due).getTime()).toBeGreaterThan(now.getTime());
  });
});

describe('ics', () => {
  it('creates a daily event with an alarm', () => {
    const ics = buildIcs({ time: '19:30', minutes: 75, url: 'https://x.test/', now: new Date('2026-11-26T08:00:00') });
    expect(ics).toContain('RRULE:FREQ=DAILY');
    expect(ics).toContain('DTSTART:20261126T193000');
    expect(ics).toContain('DTEND:20261126T204500');
    expect(ics).toContain('BEGIN:VALARM');
    expect(ics.split('\r\n').length).toBeGreaterThan(10);
  });
});

describe('checkpoints', () => {
  it('inserts one after every 7 lessons', () => {
    const ls = Array.from({ length: 15 }, (_, i) => fake('l' + i));
    const c = withCheckpoints(ls);
    expect(c).toHaveLength(17);
    expect(c[7].checkpoint).toBe(true);
    expect(c[15].checkpoint).toBe(true);
  });
});
