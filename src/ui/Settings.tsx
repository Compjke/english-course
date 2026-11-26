import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { buildIcs } from '../engine/ics';
import { dayKey } from '../engine/days';
import { englishVoices, speak, ttsSupported, recognitionSupported } from '../speech';
import { exportState, useStore, type State } from '../store';

function download(name: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

function defaultUrl() {
  return window.location.href.split('#')[0];
}

export function Settings() {
  const settings = useStore((s) => s.settings);
  const update = useStore((s) => s.updateSettings);
  const importState = useStore((s) => s.importState);
  const reset = useStore((s) => s.reset);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(englishVoices());
  const [perm, setPerm] = useState(typeof Notification !== 'undefined' ? Notification.permission : 'unsupported');
  const [msg, setMsg] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);
  const canvas = useRef<HTMLCanvasElement>(null);
  const url = settings.appUrl || defaultUrl();
  const isLocal = /localhost|127\.0\.0\.1/.test(url);

  useEffect(() => {
    if (!ttsSupported) return;
    const on = () => setVoices(englishVoices());
    speechSynthesis.addEventListener('voiceschanged', on);
    return () => speechSynthesis.removeEventListener('voiceschanged', on);
  }, []);

  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(''), 3000);
    return () => clearTimeout(t);
  }, [msg]);

  useEffect(() => {
    if (canvas.current) QRCode.toCanvas(canvas.current, url, { width: 180, margin: 1 }).catch(() => {});
  }, [url]);

  const psCommand = `powershell -ExecutionPolicy Bypass -File scripts\\reminder-install.ps1 -Time ${settings.reminderTime} -Url "${url}"`;

  return (
    <main className="page settings">
      <h1>Настройки</h1>

      <section className="card">
        <h2>⏰ Ежедневное напоминание</h2>
        <label className="field">
          Время урока:
          <input type="time" value={settings.reminderTime} onChange={(e) => update({ reminderTime: e.target.value })} />
        </label>

        <h3>📱 Телефон и любой календарь</h3>
        <p>
          Скачай файл и открой его: Google Calendar, Apple Calendar или Outlook создадут ежедневное событие с уведомлением. На телефоне открой
          файл из почты или мессенджера, либо импортируй его в Google Calendar на компьютере, и событие появится на телефоне само.
        </p>
        <button
          className="primary"
          onClick={() => download('it-english-daily.ics', buildIcs({ time: settings.reminderTime, minutes: 75, url }), 'text/calendar')}
        >
          Скачать .ics
        </button>

        <h3>🪟 Уведомление Windows</h3>
        <p>
          Выполни в папке <code>course</code> (PowerShell). Каждый день в это время появится системное уведомление, клик откроет курс. Удаление:{' '}
          <code>scripts\reminder-uninstall.ps1</code>.
        </p>
        <pre className="cmd">{psCommand}</pre>
        <button onClick={() => navigator.clipboard?.writeText(psCommand).then(() => setMsg('Команда скопирована'))}>Скопировать команду</button>

        <h3>🔔 Пока курс открыт</h3>
        <label className="check">
          <input type="checkbox" checked={settings.inAppReminders} onChange={(e) => update({ inAppReminders: e.target.checked })} /> Напоминать
          уведомлением браузера, если курс открыт, а урок ещё не пройден
        </label>
        {perm !== 'granted' && perm !== 'unsupported' && (
          <button onClick={() => Notification.requestPermission().then(setPerm)}>Разрешить уведомления</button>
        )}
        {perm === 'granted' && <span className="muted"> ✓ разрешено</span>}
      </section>

      <section className="card">
        <h2>📲 Курс на телефоне</h2>
        <p>
          Отсканируй QR-код и выбери в браузере «Добавить на главный экран». Курс установится как приложение и будет работать офлайн.
        </p>
        {isLocal && (
          <p className="hint">
            Сейчас курс открыт с localhost, телефон его не увидит. Опубликуй курс на GitHub Pages (см. README) и впиши адрес ниже.
          </p>
        )}
        <label className="field">
          Адрес курса:
          <input value={settings.appUrl} placeholder={defaultUrl()} onChange={(e) => update({ appUrl: e.target.value.trim() })} />
        </label>
        <canvas ref={canvas} className="qr" />
      </section>

      <section className="card">
        <h2>🔊 Озвучка и речь</h2>
        {!ttsSupported && <p className="hint">Браузер не поддерживает синтез речи.</p>}
        <p className="muted">
          Распознавание речи: {recognitionSupported ? 'доступно ✓' : 'недоступно в этом браузере (нужен Chrome, Edge или Android Chrome), задания на говорение будут с самопроверкой'}
        </p>
        <label className="field">
          Скорость: {settings.ttsRate.toFixed(2)}
          <input type="range" min={0.6} max={1.3} step={0.05} value={settings.ttsRate} onChange={(e) => update({ ttsRate: Number(e.target.value) })} />
        </label>
        <label className="field">
          Голос:
          <select value={settings.voiceURI} onChange={(e) => update({ voiceURI: e.target.value })}>
            <option value="">Автоматически (US и UK для разных персонажей)</option>
            {voices.map((v) => (
              <option key={v.voiceURI} value={v.voiceURI}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>
        </label>
        <button onClick={() => speak('Hi! I pushed a fix for the login bug. Could you review my pull request?', { rate: settings.ttsRate, voiceURI: settings.voiceURI })}>
          ▶ Проверить голос
        </button>
      </section>

      <section className="card">
        <h2>📅 Режим занятий</h2>
        <label className="check">
          <input type="checkbox" checked={settings.unlimited} onChange={(e) => update({ unlimited: e.target.checked })} /> Без ограничения «один новый
          урок в день»
        </label>
        <p className="muted small">Ограничение помогает учиться каждый день понемногу: так материал запоминается лучше, чем марафоном раз в неделю.</p>
      </section>

      <section className="card">
        <h2>💾 Прогресс</h2>
        <p>Прогресс хранится в этом браузере. Чтобы перенести его на другое устройство, экспортируй файл и импортируй его там.</p>
        <div className="row">
          <button onClick={() => download(`it-english-progress-${dayKey()}.json`, JSON.stringify(exportState()), 'application/json')}>
            Экспорт
          </button>
          <label className="button">
            Импорт
            <input
              type="file"
              accept="application/json,.json"
              hidden
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                try {
                  const data = JSON.parse(await f.text()) as State;
                  if (!data || typeof data.completed !== 'object') throw new Error('bad');
                  importState(data);
                  setMsg('Прогресс загружен ✓');
                } catch {
                  setMsg('Не удалось прочитать файл');
                }
              }}
            />
          </label>
          {!confirmReset ? (
            <button className="danger" onClick={() => setConfirmReset(true)}>
              Сбросить всё
            </button>
          ) : (
            <button
              className="danger"
              onClick={() => {
                reset();
                setConfirmReset(false);
                setMsg('Прогресс сброшен');
              }}
            >
              Точно сбросить? Нажми ещё раз
            </button>
          )}
        </div>
      </section>
      {msg && <div className="toast">{msg}</div>}
    </main>
  );
}
