import { useEffect, useRef, useState } from 'react';
import { CAST } from '../content/story';
import type { DialogueItem, TheoryItem, VocabListItem } from '../engine/types';
import { speak, stopSpeaking } from '../speech';
import { useStore } from '../store';
import { Inline, Rich } from './Rich';
import { Say } from './Say';

export function TheoryView({ item }: { item: TheoryItem }) {
  return (
    <div className="theory">
      {item.title && <h3>{item.title}</h3>}
      <Rich text={item.body} />
      {item.table && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {item.table[0].map((h, i) => (
                  <th key={i}>
                    <Inline text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.table.slice(1).map((row, i) => (
                <tr key={i}>
                  {row.map((c, j) => (
                    <td key={j}>
                      <Inline text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {item.examples && (
        <ul className="examples">
          {item.examples.map((e, i) => (
            <li key={i}>
              <Inline text={e} /> <Say text={e} />
            </li>
          ))}
        </ul>
      )}
      {item.pitfalls && (
        <div className="pitfalls">
          <div className="instruction">Типичные ошибки</div>
          {item.pitfalls.map((p, i) => (
            <div key={i} className="pitfall">
              <span className="d-miss">✗ {p.wrong}</span>
              <span className="d-ok">✓ {p.right}</span>
              {p.note && (
                <span className="muted">
                  <Inline text={p.note} />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function DialogueView({ item }: { item: DialogueItem }) {
  const settings = useStore((s) => s.settings);
  const [playing, setPlaying] = useState<number | null>(null);
  const stopped = useRef(false);
  useEffect(() => () => stopSpeaking(), []);
  async function playAll() {
    if (playing !== null) {
      stopped.current = true;
      stopSpeaking();
      setPlaying(null);
      return;
    }
    stopped.current = false;
    for (let i = 0; i < item.lines.length && !stopped.current; i++) {
      setPlaying(i);
      await speak(item.lines[i].text, { who: item.lines[i].who, rate: settings.ttsRate, voiceURI: settings.voiceURI });
    }
    setPlaying(null);
  }
  return (
    <div className={'dialogue ' + (item.format ?? 'chat')}>
      <div className="dialogue-head">
        <h3>{item.title}</h3>
        <button onClick={playAll}>{playing !== null ? '■ Стоп' : '▶ Слушать всё'}</button>
      </div>
      {item.lines.map((l, i) => (
        <div key={i} className={'line' + (l.who === 'You' ? ' me' : '') + (playing === i ? ' playing' : '')}>
          <div className="who" style={{ color: CAST[l.who]?.color }}>
            {l.who}
            {CAST[l.who] && <span className="role"> · {CAST[l.who].role}</span>}
          </div>
          <div className="text">
            <Inline text={l.text} /> <Say text={l.text} who={l.who} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function VocabListView({ item }: { item: VocabListItem }) {
  return (
    <div className="vocab">
      <div className="instruction">Новые слова и выражения. Они автоматически попадут в карточки повторения.</div>
      {item.words.map((w) => (
        <div key={w.chunk} className="vocab-card">
          <div className="vc-top">
            <b>{w.chunk}</b> <Say text={w.chunk} /> <span className="muted">· {w.ru}</span>
          </div>
          <div className="vc-ex">
            <Inline text={w.example} /> <Say text={w.example} />
          </div>
        </div>
      ))}
    </div>
  );
}
