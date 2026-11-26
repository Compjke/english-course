import { useState } from 'react';
import { Link } from 'react-router-dom';
import { findLesson } from '../content';
import { useStore } from '../store';
import { Inline } from './Rich';
import { Say } from './Say';

export function Mistakes() {
  const mistakes = useStore((s) => s.mistakes);
  const [filter, setFilter] = useState('');
  const list = mistakes.filter((m) => !filter || (m.prompt + m.correct + m.yours).toLowerCase().includes(filter.toLowerCase()));
  return (
    <main className="page">
      <h1>Журнал ошибок</h1>
      <p className="muted">
        Каждая ошибка уже стоит в очереди интервального повторения. Здесь можно спокойно перечитать их.{' '}
        <Link to="/review">Повторить сейчас →</Link>
      </p>
      <input className="answer" placeholder="Поиск" value={filter} onChange={(e) => setFilter(e.target.value)} />
      {list.length === 0 && <p className="muted">Пока пусто.</p>}
      {list.map((m) => (
        <div key={m.id} className="card mistake">
          <div className="muted small">
            {m.day} · {findLesson(m.lessonId)?.lesson.title ?? m.lessonId}
          </div>
          <div>
            <Inline text={m.prompt} />
          </div>
          {m.yours && <div className="d-miss">Твой ответ: {m.yours}</div>}
          <div className="d-ok">
            Верно: {m.correct} <Say text={m.correct} />
          </div>
        </div>
      ))}
    </main>
  );
}
