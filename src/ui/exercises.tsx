import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { diffWords, keywordHits, matches, normalize, seededShuffle, wordCount } from '../engine/check';
import type {
  ChoiceEx,
  DictationEx,
  Exercise,
  FixEx,
  GapEx,
  MatchEx,
  OrderEx,
  ShadowEx,
  SpeakEx,
  TransformEx,
  WriteEx,
} from '../engine/types';
import { listen, recognitionSupported } from '../speech';
import { Inline } from './Rich';
import { Say } from './Say';

export interface ExResult {
  graded: boolean;
  correct: boolean;
  yours: string;
}

interface Props<E> {
  ex: E;
  seed: string;
  onDone: (r: ExResult) => void;
}

function Feedback({
  ok,
  correct,
  explain,
  extra,
  onNext,
  neutral,
}: {
  ok: boolean;
  correct?: string;
  explain?: string;
  extra?: ReactNode;
  onNext: () => void;
  neutral?: boolean;
}) {
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => btn.current?.focus(), []);
  return (
    <div className={'feedback ' + (neutral ? 'neutral' : ok ? 'ok' : 'bad')}>
      <div className="fb-title">{neutral ? 'Готово' : ok ? '✓ Верно' : '✗ Не совсем'}</div>
      {!ok && correct && (
        <div className="fb-correct">
          Правильно: <b>{correct}</b> <Say text={correct} />
        </div>
      )}
      {extra}
      {explain && (
        <div className="fb-explain">
          <Inline text={explain} />
        </div>
      )}
      <button ref={btn} className="primary" onClick={onNext}>
        Дальше →
      </button>
    </div>
  );
}

/* ---------------- choice ---------------- */

function Choice({ ex, onDone }: Props<ChoiceEx>) {
  const [picked, setPicked] = useState<number | null>(null);
  const ok = picked === ex.answer;
  return (
    <div className="ex">
      <div className="ex-prompt">
        <Inline text={ex.prompt} />
      </div>
      <div className="options">
        {ex.options.map((o, i) => (
          <button
            key={i}
            disabled={picked !== null}
            className={'option' + (picked !== null && i === ex.answer ? ' right' : '') + (picked === i && !ok ? ' wrong' : '')}
            onClick={() => setPicked(i)}
          >
            <Inline text={o} />
          </button>
        ))}
      </div>
      {picked !== null && (
        <Feedback
          ok={ok}
          correct={ex.options[ex.answer]}
          explain={ex.explain}
          onNext={() => onDone({ graded: true, correct: ok, yours: ex.options[picked] })}
        />
      )}
    </div>
  );
}

/* ---------------- typed answers (gap / transform / fix) ---------------- */

function TypedAnswer({
  prompt,
  answers,
  explain,
  onDone,
  placeholder,
  initial = '',
  rejectSame,
}: {
  prompt: ReactNode;
  answers: string[];
  explain?: string;
  onDone: (r: ExResult) => void;
  placeholder: string;
  initial?: string;
  rejectSame?: string;
}) {
  const [value, setValue] = useState(initial);
  const [checked, setChecked] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => input.current?.focus(), []);
  const ok = matches(value, answers) && !(rejectSame && normalize(value) === normalize(rejectSame));
  return (
    <div className="ex">
      {prompt}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim()) setChecked(true);
        }}
      >
        <input
          ref={input}
          className={'answer' + (checked ? (ok ? ' right' : ' wrong') : '')}
          value={value}
          disabled={checked}
          placeholder={placeholder}
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          onChange={(e) => setValue(e.target.value)}
        />
        {!checked && (
          <button className="primary" type="submit" disabled={!value.trim()}>
            Проверить
          </button>
        )}
      </form>
      {checked && (
        <Feedback ok={ok} correct={answers[0]} explain={explain} onNext={() => onDone({ graded: true, correct: ok, yours: value })} />
      )}
    </div>
  );
}

function Gap({ ex, onDone }: Props<GapEx>) {
  const [before, after] = ex.text.split('___');
  return (
    <TypedAnswer
      prompt={
        <div className="ex-prompt gap-text">
          <Inline text={before} />
          <span className="gap-mark">____</span>
          <Inline text={after ?? ''} />
          {ex.hint && <div className="hint">Подсказка: {ex.hint}</div>}
        </div>
      }
      answers={ex.answers}
      explain={ex.explain}
      onDone={onDone}
      placeholder="Впиши пропуск"
    />
  );
}

function Transform({ ex, onDone }: Props<TransformEx>) {
  return (
    <TypedAnswer
      prompt={
        <div className="ex-prompt">
          <div className="instruction">
            <Inline text={ex.instruction} />
          </div>
          <div className="source">
            <Inline text={ex.source} />
          </div>
        </div>
      }
      answers={ex.answers}
      explain={ex.explain}
      onDone={onDone}
      placeholder="Напиши предложение целиком"
    />
  );
}

function Fix({ ex, onDone }: Props<FixEx>) {
  return (
    <TypedAnswer
      prompt={
        <div className="ex-prompt">
          <div className="instruction">Найди и исправь ошибку. Напиши предложение целиком.</div>
          <div className="source wrong-sentence">{ex.sentence}</div>
        </div>
      }
      answers={ex.answers}
      explain={ex.explain}
      onDone={onDone}
      placeholder="Исправленное предложение"
      initial={ex.sentence}
      rejectSame={ex.sentence}
    />
  );
}

/* ---------------- order ---------------- */

function Order({ ex, seed, onDone }: Props<OrderEx>) {
  const pool = useMemo(() => {
    let s = seededShuffle(ex.words.map((w, i) => ({ w, i })), seed);
    if (s.every((x, k) => x.i === k) && s.length > 1) s = [...s.slice(1), s[0]];
    return s;
  }, [ex, seed]);
  const [picked, setPicked] = useState<number[]>([]);
  const [checked, setChecked] = useState(false);
  const sentence = picked.map((k) => pool[k].w).join(' ');
  const ok = matches(sentence, [ex.words.join(' '), ...(ex.alt ?? [])]);
  return (
    <div className="ex">
      <div className="ex-prompt">
        <div className="instruction">Собери предложение{ex.ru ? `: ${ex.ru}` : ''}</div>
      </div>
      <div className={'built' + (checked ? (ok ? ' right' : ' wrong') : '')}>
        {picked.length === 0 && <span className="muted">Нажимай на слова по порядку</span>}
        {picked.map((k, pos) => (
          <button key={k} className="chip placed" disabled={checked} onClick={() => setPicked(picked.filter((_, p) => p !== pos))}>
            {pool[k].w}
          </button>
        ))}
      </div>
      <div className="pool">
        {pool.map((x, k) => (
          <button key={k} className="chip" disabled={checked || picked.includes(k)} onClick={() => setPicked([...picked, k])}>
            {x.w}
          </button>
        ))}
      </div>
      {!checked && (
        <button className="primary" disabled={picked.length !== pool.length} onClick={() => setChecked(true)}>
          Проверить
        </button>
      )}
      {checked && (
        <Feedback ok={ok} correct={ex.words.join(' ')} explain={ex.explain} onNext={() => onDone({ graded: true, correct: ok, yours: sentence })} />
      )}
    </div>
  );
}

/* ---------------- match ---------------- */

function Match({ ex, seed, onDone }: Props<MatchEx>) {
  const rights = useMemo(() => seededShuffle(ex.pairs.map((p, i) => ({ t: p[1], i })), seed), [ex, seed]);
  const [left, setLeft] = useState<number | null>(null);
  const [done, setDone] = useState<number[]>([]);
  const [wrong, setWrong] = useState<number | null>(null);
  const [errors, setErrors] = useState(0);
  const finished = done.length === ex.pairs.length;
  return (
    <div className="ex">
      <div className="ex-prompt instruction">{ex.prompt ?? 'Сопоставь пары'}</div>
      <div className="match">
        <div className="col">
          {ex.pairs.map((p, i) => (
            <button
              key={i}
              className={'chip block' + (left === i ? ' sel' : '') + (done.includes(i) ? ' right' : '')}
              disabled={done.includes(i)}
              onClick={() => setLeft(i)}
            >
              <Inline text={p[0]} />
            </button>
          ))}
        </div>
        <div className="col">
          {rights.map((r) => (
            <button
              key={r.i}
              className={'chip block' + (done.includes(r.i) ? ' right' : '') + (wrong === r.i ? ' wrong' : '')}
              disabled={done.includes(r.i) || left === null}
              onClick={() => {
                if (left === null) return;
                if (r.i === left) {
                  setDone([...done, left]);
                  setLeft(null);
                } else {
                  setErrors(errors + 1);
                  setWrong(r.i);
                  setTimeout(() => setWrong(null), 500);
                }
              }}
            >
              <Inline text={r.t} />
            </button>
          ))}
        </div>
      </div>
      {finished && (
        <Feedback
          ok={errors === 0}
          extra={errors > 0 ? <div>Ошибок: {errors}. Пары запишутся в повторение.</div> : undefined}
          onNext={() => onDone({ graded: true, correct: errors === 0, yours: `${errors} ошибок` })}
        />
      )}
    </div>
  );
}

/* ---------------- listening ---------------- */

function DiffView({ target, attempt }: { target: string; attempt: string }) {
  const { parts } = diffWords(target, attempt);
  return (
    <div className="diff">
      {parts.map((p, i) => (
        <span key={i} className={p.ok ? 'd-ok' : 'd-miss'}>
          {p.word}{' '}
        </span>
      ))}
    </div>
  );
}

function Dictation({ ex, onDone }: Props<DictationEx>) {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const ok = matches(value, [ex.text]);
  return (
    <div className="ex">
      <div className="ex-prompt instruction">Послушай и запиши фразу. Можно слушать сколько угодно раз.</div>
      <div className="row">
        <Say text={ex.text} label="Слушать" />
        <Say text={ex.text} slow label="Медленно" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim()) setChecked(true);
        }}
      >
        <input
          className={'answer' + (checked ? (ok ? ' right' : ' wrong') : '')}
          value={value}
          disabled={checked}
          placeholder="Что ты услышал(а)?"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          onChange={(e) => setValue(e.target.value)}
        />
        {!checked && (
          <button className="primary" type="submit" disabled={!value.trim()}>
            Проверить
          </button>
        )}
      </form>
      {checked && (
        <Feedback
          ok={ok}
          correct={ex.text}
          extra={!ok ? <DiffView target={ex.text} attempt={value} /> : undefined}
          onNext={() => onDone({ graded: true, correct: ok, yours: value })}
        />
      )}
    </div>
  );
}

/* ---------------- speaking ---------------- */

function useRecorder() {
  const [state, setState] = useState<'idle' | 'rec' | 'error'>('idle');
  const [error, setError] = useState('');
  const stopRef = useRef<() => void>(() => {});
  async function record(): Promise<string | null> {
    setState('rec');
    setError('');
    const { promise, stop } = listen();
    stopRef.current = stop;
    try {
      const text = await promise;
      setState('idle');
      return text;
    } catch (e) {
      setState('error');
      setError(e === 'not-allowed' ? 'Нет доступа к микрофону' : e === 'no-speech' ? 'Не слышно речи, попробуй ещё' : String(e));
      return null;
    }
  }
  return { state, error, record, stop: () => stopRef.current() };
}

function Shadow({ ex, onDone }: Props<ShadowEx>) {
  const rec = useRecorder();
  const [heard, setHeard] = useState<string | null>(null);
  const [selfDone, setSelfDone] = useState(false);
  const ratio = heard !== null ? diffWords(ex.text, heard).ratio : 0;
  const ok = ratio >= 0.8;
  return (
    <div className="ex">
      <div className="ex-prompt instruction">Shadowing: послушай и повтори вслух с той же интонацией.</div>
      <div className="source big">{ex.text}</div>
      <div className="row">
        <Say text={ex.text} label="Слушать" />
        <Say text={ex.text} slow label="Медленно" />
        {recognitionSupported && heard === null && (
          <button className={'rec' + (rec.state === 'rec' ? ' on' : '')} onClick={async () => {
            if (rec.state === 'rec') return rec.stop();
            const t = await rec.record();
            if (t !== null) setHeard(t);
          }}>
            {rec.state === 'rec' ? '■ Стоп' : '🎤 Сказать'}
          </button>
        )}
        {heard === null && !selfDone && rec.state !== 'rec' && (
          // Always available: the mic may be blocked or the room may be noisy.
          <button onClick={() => setSelfDone(true)}>Я повторил(а) вслух без микрофона</button>
        )}
      </div>
      {rec.error && <div className="hint">{rec.error}</div>}
      {heard !== null && (
        <Feedback
          ok={ok}
          extra={
            <>
              <div>Распознано: «{heard || '…'}» · совпадение {Math.round(ratio * 100)}%</div>
              <DiffView target={ex.text} attempt={heard} />
              {!ok && <button onClick={() => setHeard(null)}>Попробовать ещё раз</button>}
            </>
          }
          onNext={() => onDone({ graded: false, correct: ok, yours: heard })}
        />
      )}
      {selfDone && <Feedback ok neutral onNext={() => onDone({ graded: false, correct: true, yours: '' })} />}
    </div>
  );
}

function Speak({ ex, onDone }: Props<SpeakEx>) {
  const rec = useRecorder();
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  const hits = keywordHits(text, ex.keywords);
  const ok = hits.every(Boolean);
  return (
    <div className="ex">
      <div className="ex-prompt">
        <div className="instruction">Ответь вслух (или напиши), используя ключевые фразы.</div>
        <div className="source">
          <Inline text={ex.situation} />
        </div>
      </div>
      <ul className="keywords">
        {ex.keywords.map((k, i) => (
          <li key={k} className={hits[i] ? 'hit' : ''}>
            {hits[i] ? '✓' : '○'} {k}
          </li>
        ))}
      </ul>
      <textarea
        className="answer"
        rows={3}
        value={text}
        disabled={checked}
        placeholder="Здесь появится распознанный текст, можно и напечатать"
        onChange={(e) => setText(e.target.value)}
      />
      {!checked && (
        <div className="row">
          {recognitionSupported && (
            <button className={'rec' + (rec.state === 'rec' ? ' on' : '')} onClick={async () => {
              if (rec.state === 'rec') return rec.stop();
              const t = await rec.record();
              if (t) setText((prev) => (prev ? prev + ' ' : '') + t);
            }}>
              {rec.state === 'rec' ? '■ Стоп' : '🎤 Говорить'}
            </button>
          )}
          <button className="primary" disabled={!text.trim()} onClick={() => setChecked(true)}>
            Проверить
          </button>
        </div>
      )}
      {rec.error && <div className="hint">{rec.error}</div>}
      {checked && (
        <Feedback
          ok={ok}
          extra={
            <div className="sample">
              Пример ответа: <Inline text={ex.sample} /> <Say text={ex.sample} />
            </div>
          }
          onNext={() => onDone({ graded: false, correct: ok, yours: text })}
        />
      )}
    </div>
  );
}

/* ---------------- writing ---------------- */

function Write({ ex, onDone }: Props<WriteEx>) {
  const [text, setText] = useState('');
  const [checks, setChecks] = useState<boolean[]>(ex.checklist.map(() => false));
  const [submitted, setSubmitted] = useState(false);
  const n = wordCount(text);
  return (
    <div className="ex">
      <div className="ex-prompt">
        <div className="source">
          <Inline text={ex.task} />
        </div>
      </div>
      <textarea className="answer" rows={7} value={text} disabled={submitted} onChange={(e) => setText(e.target.value)} />
      <div className="muted">
        Слов: {n} / минимум {ex.minWords}
      </div>
      <div className="checklist">
        <div className="instruction">Проверь себя:</div>
        {ex.checklist.map((c, i) => (
          <label key={i}>
            <input type="checkbox" checked={checks[i]} onChange={() => setChecks(checks.map((v, j) => (j === i ? !v : v)))} />{' '}
            <Inline text={c} />
          </label>
        ))}
      </div>
      {!submitted && (
        <button className="primary" disabled={n < ex.minWords} onClick={() => setSubmitted(true)}>
          Готово, показать образец
        </button>
      )}
      {submitted && (
        <Feedback
          ok
          neutral
          extra={
            <div className="sample">
              <div className="instruction">Образец:</div>
              <div className="pre">{ex.sample}</div>
            </div>
          }
          onNext={() => onDone({ graded: false, correct: true, yours: text })}
        />
      )}
    </div>
  );
}

export function ExerciseView({ ex, seed, onDone }: Props<Exercise>) {
  switch (ex.kind) {
    case 'choice':
      return <Choice ex={ex} seed={seed} onDone={onDone} />;
    case 'gap':
      return <Gap ex={ex} seed={seed} onDone={onDone} />;
    case 'transform':
      return <Transform ex={ex} seed={seed} onDone={onDone} />;
    case 'fix':
      return <Fix ex={ex} seed={seed} onDone={onDone} />;
    case 'order':
      return <Order ex={ex} seed={seed} onDone={onDone} />;
    case 'match':
      return <Match ex={ex} seed={seed} onDone={onDone} />;
    case 'dictation':
      return <Dictation ex={ex} seed={seed} onDone={onDone} />;
    case 'shadow':
      return <Shadow ex={ex} seed={seed} onDone={onDone} />;
    case 'speak':
      return <Speak ex={ex} seed={seed} onDone={onDone} />;
    case 'write':
      return <Write ex={ex} seed={seed} onDone={onDone} />;
  }
}
