import { withCheckpoints } from '../engine/checkpoint';
import type { Lesson } from '../engine/types';

// Folders are numbered (1-a2, 2-b1, ...) so a path sort gives course order.
const modules = import.meta.glob<{ default: Lesson }>('./levels/**/*.ts', { eager: true });

export const LESSONS: Lesson[] = Object.keys(modules)
  .sort()
  .map((k) => modules[k].default);

export const COURSE: Lesson[] = withCheckpoints(LESSONS);

export function findLesson(id: string): { lesson: Lesson; index: number } | null {
  const index = COURSE.findIndex((l) => l.id === id);
  return index < 0 ? null : { lesson: COURSE[index], index };
}
