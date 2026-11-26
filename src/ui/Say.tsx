import { useState } from 'react';
import { speak, stopSpeaking, ttsSupported } from '../speech';
import { useStore } from '../store';

/** Small play button that reads text aloud. */
export function Say({ text, who, slow, label }: { text: string; who?: string; slow?: boolean; label?: string }) {
  const settings = useStore((s) => s.settings);
  const [busy, setBusy] = useState(false);
  if (!ttsSupported) return null;
  const rate = settings.ttsRate * (slow ? 0.75 : 1);
  return (
    <button
      type="button"
      className={'say' + (busy ? ' busy' : '')}
      title={slow ? 'Медленно' : 'Прослушать'}
      aria-label={slow ? 'Прослушать медленно' : 'Прослушать'}
      onClick={async () => {
        if (busy) {
          stopSpeaking();
          setBusy(false);
          return;
        }
        setBusy(true);
        await speak(text, { rate, who, voiceURI: settings.voiceURI });
        setBusy(false);
      }}
    >
      {busy ? '■' : slow ? '🐢' : '🔊'}
      {label && <span>{label}</span>}
    </button>
  );
}
