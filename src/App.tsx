import { useEffect, useState } from 'react';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import { dayKey } from './engine/days';
import { dueCards } from './engine/srs';
import { useStore } from './store';
import { Home } from './ui/Home';
import { LessonPlayer } from './ui/LessonPlayer';
import { Mistakes } from './ui/Mistakes';
import { Placement } from './ui/Placement';
import { ReviewPage } from './ui/Review';
import { Settings } from './ui/Settings';

/** Waits for the IndexedDB store to load before rendering. */
function useHydrated() {
  const [ok, setOk] = useState(useStore.persist.hasHydrated());
  useEffect(() => useStore.persist.onFinishHydration(() => setOk(true)), []);
  return ok;
}

/** While the app is open, nudge once a day after the chosen time. */
function useInAppReminder() {
  useEffect(() => {
    const tick = () => {
      const s = useStore.getState();
      if (!s.settings.inAppReminders || typeof Notification === 'undefined' || Notification.permission !== 'granted') return;
      const today = dayKey();
      const now = new Date();
      const hhmm = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      let last = '';
      try {
        last = localStorage.getItem('it-english-nudged') ?? '';
      } catch {
        /* storage unavailable */
      }
      if (last === today || s.activeDays.includes(today) || hhmm < s.settings.reminderTime) return;
      const due = dueCards(s.cards, now).length;
      new Notification('IT English: пора на урок', {
        body: due ? `Урок дня ждёт, и ${due} карточек на повторение.` : 'Урок дня ждёт тебя.',
        icon: './icon-192.png',
      });
      try {
        localStorage.setItem('it-english-nudged', today);
      } catch {
        /* ignore */
      }
    };
    tick();
    const t = setInterval(tick, 60_000);
    return () => clearInterval(t);
  }, []);
}

export function App() {
  const hydrated = useHydrated();
  useInAppReminder();
  if (!hydrated) return <div className="page muted">Загрузка…</div>;
  return (
    <HashRouter>
      <nav className="topnav">
        <NavLink to="/" end>
          🗺️ <span>Карта</span>
        </NavLink>
        <NavLink to="/review">
          🔁 <span>Повторение</span>
        </NavLink>
        <NavLink to="/mistakes">
          📓 <span>Ошибки</span>
        </NavLink>
        <NavLink to="/settings">
          ⚙️ <span>Настройки</span>
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:id" element={<LessonPlayer />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/mistakes" element={<Mistakes />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </HashRouter>
  );
}
