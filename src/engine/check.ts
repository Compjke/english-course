const CONTRACTIONS: [RegExp, string][] = [
  [/\bcan't\b/g, 'cannot'],
  [/\bcan not\b/g, 'cannot'],
  [/\bwon't\b/g, 'will not'],
  [/\bshan't\b/g, 'shall not'],
  [/\bain't\b/g, 'is not'],
  [/n't\b/g, ' not'],
  [/'re\b/g, ' are'],
  [/'m\b/g, ' am'],
  [/'ll\b/g, ' will'],
  [/'ve\b/g, ' have'],
  [/\b(it|he|she|that|there|what|who|where|here)'s\b/g, '$1 is'],
];

/**
 * Normalizes a typed answer for comparison: case, quotes, spaces,
 * edge punctuation and unambiguous contractions.
 */
export function normalize(input: string): string {
  let s = input
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[“”«»]/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
  for (const [re, rep] of CONTRACTIONS) s = s.replace(re, rep);
  s = s
    .replace(/\s*([,;:!?.])\s*/g, '$1 ')
    .replace(/^[\s"'.,!?;:]+|[\s"'.,!?;:]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return s;
}

export function matches(input: string, answers: string[]): boolean {
  const n = normalize(input);
  if (!n) return false;
  return answers.some((a) => normalize(a) === n);
}

/** Words only, for fuzzy comparisons (dictation, speech). */
export function words(input: string): string[] {
  return normalize(input)
    .replace(/[,;:!?."]/g, ' ')
    .split(' ')
    .filter(Boolean);
}

export interface WordDiff {
  word: string;
  ok: boolean;
}

/** LCS-based word diff: marks each target word as matched or missed. */
export function diffWords(target: string, attempt: string): { parts: WordDiff[]; ratio: number } {
  const t = target.split(/\s+/).filter(Boolean);
  const tn = t.map((w) => words(w).join(' '));
  const a = words(attempt);
  const dp: number[][] = Array.from({ length: t.length + 1 }, () => Array(a.length + 1).fill(0));
  for (let i = t.length - 1; i >= 0; i--)
    for (let j = a.length - 1; j >= 0; j--)
      dp[i][j] = tn[i] === a[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const parts: WordDiff[] = [];
  let i = 0;
  let j = 0;
  while (i < t.length) {
    if (j < a.length && tn[i] === a[j]) {
      parts.push({ word: t[i], ok: true });
      i++;
      j++;
    } else if (j < a.length && dp[i][j + 1] >= dp[i + 1][j]) {
      j++;
    } else {
      parts.push({ word: t[i], ok: tn[i] === '' });
      i++;
    }
  }
  const total = tn.filter(Boolean).length || 1;
  const ok = parts.filter((p, k) => p.ok && tn[k] !== '').length;
  return { parts, ratio: ok / total };
}

/** Which keywords are present in a free answer. */
export function keywordHits(answer: string, keywords: string[]): boolean[] {
  const n = ' ' + words(answer).join(' ') + ' ';
  return keywords.map((k) => n.includes(' ' + words(k).join(' ') + ' '));
}

export function wordCount(s: string): number {
  return s.split(/\s+/).filter((w) => /[a-z0-9]/i.test(w)).length;
}

/** Deterministic shuffle so a reload shows the same order. */
export function seededShuffle<T>(arr: T[], seed: string): T[] {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909);
    const j = (h >>> 0) % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Replace the first occurrence of chunk in example with a gap (case-insensitive). */
export function maskChunk(example: string, chunk: string): string | null {
  const idx = example.toLowerCase().indexOf(chunk.toLowerCase());
  if (idx < 0) return null;
  return example.slice(0, idx) + '___' + example.slice(idx + chunk.length);
}
