import { Link } from 'react-router-dom';
import { COURSE } from '../content';
import { computeStreak, dayKey } from '../engine/days';
import { lessonStatus, nextLessonIndex, totalXp, type LessonStatus } from '../engine/progress';
import { dueCards } from '../engine/srs';
import { LEVEL_INFO, LEVELS } from '../engine/types';
import { useStore } from '../store';

const PLANNED: Record<string, number> = { A2: 15, B1: 25, 'B1+': 20, B2: 25, 'B2+': 15 };

const STATUS_ICON: Record<LessonStatus, string> = { done: '✅', available: '▶️', tomorrow: '🌙', locked: '🔒' };

export function Home() {
  const s = useStore();
  const today = dayKey();
  const streak = computeStreak(s.activeDays, today);
  const due = dueCards(s.cards, new Date()).length;
  const nextIdx = nextLessonIndex(COURSE, s.completed);
  const next = nextIdx >= 0 ? COURSE[nextIdx] : null;
  const nextStatus = next ? lessonStatus(COURSE, nextIdx, s.completed, today, s.settings.unlimited) : null;
  const fresh = Object.keys(s.completed).length === 0 && !s.placement;
  const doneToday = s.activeDays.includes(today);

  return (
    <main className="page">
      <section className="hero">
        <h1>IT English</h1>
        <p className="muted">От повторения до повышения · A2 → B2+</p>
        <div className="stats">
          <div className={'stat' + (doneToday ? ' lit' : '')}>
            <b>🔥 {streak.days}</b>
            <span>дней подряд</span>
          </div>
          <div className="stat">
            <b>⭐ {totalXp(s.completed)}</b>
            <span>XP</span>
          </div>
          <div className="stat">
            <b>🔁 {due}</b>
            <span>карточек</span>
          </div>
        </div>
        {streak.frozen.length > 0 && <p className="muted small">❄️ Заморозка спасла серию: {streak.frozen.join(', ')}</p>}
      </section>

      {fresh && (
        <section className="card highlight">
          <h2>С чего начать?</h2>
          <p>Пройди входной тест (~15 минут): он покажет твой уровень, и курс пропустит то, что ты уже знаешь.</p>
          <div className="row">
            <Link className="button primary" to="/placement">
              Пройти входной тест
            </Link>
            {next && (
              <Link className="button" to={`/lesson/${next.id}`}>
                Начать с первого урока
              </Link>
            )}
          </div>
        </section>
      )}

      {!fresh && next && (
        <section className="card highlight">
          <div className="muted small">Урок дня</div>
          <h2>{next.title}</h2>
          <p>
            {LEVEL_INFO[next.level].title} · {next.grammar}
          </p>
          <p className="muted">{next.scene}</p>
          {nextStatus === 'available' && (
            <Link className="button primary" to={`/lesson/${next.id}`}>
              {s.positions[next.id] ? 'Продолжить урок' : 'Начать урок'} (~75 мин)
            </Link>
          )}
          {nextStatus === 'tomorrow' && <p>🌙 На сегодня всё. Следующий урок откроется завтра.</p>}
        </section>
      )}
      {!next && COURSE.length > 0 && (
        <section className="card highlight">
          <h2>🏆 Все доступные уроки пройдены!</h2>
        </section>
      )}

      {due > 0 && (
        <section className="card row spread">
          <span>🔁 На повторение: {due} карточек</span>
          <Link className="button" to="/review">
            Повторить
          </Link>
        </section>
      )}

      <section className="map">
        {LEVELS.map((lvl) => {
          const items = COURSE.map((l, i) => ({ l, i })).filter((x) => x.l.level === lvl);
          const doneN = items.filter((x) => s.completed[x.l.id] && !x.l.checkpoint).length;
          return (
            <div key={lvl} className="level">
              <div className="level-head">
                <h2>
                  {LEVEL_INFO[lvl].title} <span className="muted">· {LEVEL_INFO[lvl].arc}</span>
                </h2>
                <span className="muted small">
                  {doneN}/{PLANNED[lvl]} уроков
                </span>
              </div>
              {items.length === 0 && <p className="muted">Уроки этого уровня в разработке.</p>}
              <ol className="lessons">
                {items.map(({ l, i }) => {
                  const st = lessonStatus(COURSE, i, s.completed, today, s.settings.unlimited);
                  const res = s.completed[l.id];
                  const content = (
                    <>
                      <span className="icon">{STATUS_ICON[st]}</span>
                      <span className="name">
                        <b>{l.title}</b>
                        <span className="muted small">{l.grammar}</span>
                      </span>
                      {res && !res.viaPlacement && res.total > 0 && (
                        <span className="score">{Math.round((100 * res.correct) / res.total)}%</span>
                      )}
                      {res?.viaPlacement && <span className="score muted">тест</span>}
                    </>
                  );
                  const cls = 'lesson-row ' + st + (l.checkpoint ? ' checkpoint' : '');
                  return (
                    <li key={l.id}>
                      {st === 'locked' ? (
                        <div className={cls}>{content}</div>
                      ) : (
                        <Link className={cls} to={`/lesson/${l.id}`}>
                          {content}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </section>
    </main>
  );
}
