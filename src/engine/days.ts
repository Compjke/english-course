/** Local calendar date as YYYY-MM-DD. */
export function dayKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function parseDay(key: string): Date {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function addDays(key: string, n: number): string {
  const d = parseDay(key);
  d.setDate(d.getDate() + n);
  return dayKey(d);
}

/** Monday-based week id: the day key of that week's Monday. */
export function weekOf(key: string): string {
  const d = parseDay(key);
  const shift = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - shift);
  return dayKey(d);
}

/**
 * Streak of consecutive active days ending today (or yesterday, if today
 * is not done yet). One missed day per Monday-based week is "frozen" and
 * does not break the streak, but does not count either.
 */
export function computeStreak(active: Iterable<string>, today: string): { days: number; frozen: string[] } {
  const set = new Set(active);
  let cursor = set.has(today) ? today : addDays(today, -1);
  let days = 0;
  const frozen: string[] = [];
  const usedWeeks = new Set<string>();
  // Safety bound: streaks longer than ~3 years are not a concern here.
  for (let guard = 0; guard < 1200; guard++) {
    if (set.has(cursor)) {
      days++;
    } else {
      const wk = weekOf(cursor);
      const prev = addDays(cursor, -1);
      // A freeze only bridges a gap between two active days.
      if (!usedWeeks.has(wk) && set.has(prev) && days > 0) {
        usedWeeks.add(wk);
        frozen.push(cursor);
      } else break;
    }
    cursor = addDays(cursor, -1);
  }
  return { days, frozen };
}
