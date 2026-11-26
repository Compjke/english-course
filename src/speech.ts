import { CAST } from './content/story';

export const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

type RecognitionCtor = new () => {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
};

function recognitionCtor(): RecognitionCtor | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export const recognitionSupported = recognitionCtor() !== null;

export function englishVoices(): SpeechSynthesisVoice[] {
  if (!ttsSupported) return [];
  return speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'));
}

function pickVoice(accent: 'us' | 'gb', preferred: string): SpeechSynthesisVoice | undefined {
  const voices = englishVoices();
  if (preferred) {
    const p = voices.find((v) => v.voiceURI === preferred);
    if (p && accent === 'us') return p;
  }
  const tag = accent === 'gb' ? 'en-gb' : 'en-us';
  return (
    voices.find((v) => v.lang.toLowerCase().replace('_', '-') === tag && /natural|online|google/i.test(v.name)) ??
    voices.find((v) => v.lang.toLowerCase().replace('_', '-') === tag) ??
    voices[0]
  );
}

export interface SpeakOpts {
  rate?: number;
  who?: string;
  voiceURI?: string;
}

/** Speak text; resolves when done (or immediately if TTS is missing). */
export function speak(text: string, opts: SpeakOpts = {}): Promise<void> {
  if (!ttsSupported) return Promise.resolve();
  return new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text.replace(/\*+/g, ''));
    const accent = opts.who ? (CAST[opts.who]?.voice ?? 'us') : 'us';
    const v = pickVoice(accent, opts.voiceURI ?? '');
    if (v) {
      u.voice = v;
      u.lang = v.lang;
    } else u.lang = 'en-US';
    u.rate = opts.rate ?? 1;
    u.onend = () => resolve();
    u.onerror = () => resolve();
    speechSynthesis.speak(u);
  });
}

export function stopSpeaking() {
  if (ttsSupported) speechSynthesis.cancel();
}

/** One-shot speech recognition. Rejects with an error code string. */
export function listen(): { promise: Promise<string>; stop: () => void } {
  const Ctor = recognitionCtor();
  if (!Ctor) return { promise: Promise.reject('unsupported'), stop: () => {} };
  const r = new Ctor();
  r.lang = 'en-US';
  r.interimResults = false;
  r.maxAlternatives = 1;
  const promise = new Promise<string>((resolve, reject) => {
    let got = '';
    r.onresult = (e) => {
      got = Array.from(e.results)
        .map((res) => res[0].transcript)
        .join(' ');
    };
    r.onerror = (e) => reject(e.error);
    r.onend = () => resolve(got);
  });
  r.start();
  return { promise, stop: () => r.stop() };
}
