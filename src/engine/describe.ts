import type { Exercise } from './types';

/** Short human description of an exercise, for the mistakes log. */
export function promptOf(ex: Exercise): string {
  switch (ex.kind) {
    case 'choice':
      return ex.prompt;
    case 'gap':
      return ex.text;
    case 'transform':
      return `${ex.instruction}: ${ex.source}`;
    case 'fix':
      return `Исправь: ${ex.sentence}`;
    case 'order':
      return ex.ru ? `Собери: ${ex.ru}` : 'Собери предложение';
    case 'match':
      return ex.prompt ?? 'Сопоставь';
    case 'dictation':
      return 'Диктант';
    case 'shadow':
      return 'Повтори за диктором';
    case 'speak':
      return ex.situation;
    case 'write':
      return ex.task;
  }
}

export function correctOf(ex: Exercise): string {
  switch (ex.kind) {
    case 'choice':
      return ex.options[ex.answer];
    case 'gap':
      return ex.text.replace('___', ex.answers[0]);
    case 'transform':
    case 'fix':
      return ex.answers[0];
    case 'order':
      return ex.words.join(' ');
    case 'match':
      return ex.pairs.map((p) => `${p[0]} = ${p[1]}`).join('; ');
    case 'dictation':
    case 'shadow':
      return ex.text;
    case 'speak':
    case 'write':
      return ex.sample;
  }
}

/** Exercises that can be re-asked as an SRS card. */
export function reviewable(ex: Exercise): boolean {
  return ['choice', 'gap', 'transform', 'fix', 'order', 'dictation'].includes(ex.kind);
}
