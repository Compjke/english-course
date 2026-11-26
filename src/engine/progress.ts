import type { Lesson } from './types';

export interface LessonResult {
  day: string; // YYYY-MM-DD
  correct: number;
  total: number;
  xp: number;
  viaPlacement?: boolean;
}

export type Completed = Record<string, LessonResult>;

export type LessonStatus = 'done' | 'available' | 'tomorrow' | 'locked';

/**
 * Daily rule: a lesson opens when the previous one is done, and at most one
 * new lesson (not counting lessons skipped by the placement test) can be
 * completed per calendar day, unless `unlimited` is set.
 */
export function lessonStatus(
  course: Lesson[],
  index: number,
  completed: Completed,
  today: string,
  unlimited: boolean,
): LessonStatus {
  const lesson = course[index];
  if (completed[lesson.id]) return 'done';
  if (index > 0 && !completed[course[index - 1].id]) return 'locked';
  if (unlimited) return 'available';
  const doneToday = Object.values(completed).some((r) => r.day === today && !r.viaPlacement);
  return doneToday ? 'tomorrow' : 'available';
}

/** Index of the first not-done lesson, or -1 if the course is finished. */
export function nextLessonIndex(course: Lesson[], completed: Completed): number {
  return course.findIndex((l) => !completed[l.id]);
}

export function totalXp(completed: Completed): number {
  return Object.values(completed).reduce((s, r) => s + r.xp, 0);
}
