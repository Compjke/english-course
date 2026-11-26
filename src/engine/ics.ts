function pad(n: number) {
  return String(n).padStart(2, '0');
}

function stamp(d: Date) {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
}

/** Escape text per RFC 5545. */
function esc(s: string) {
  return s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

/**
 * A daily recurring calendar event with a notification at the start time.
 * Uses floating local time, so it fires at the same wall-clock time in any
 * time zone the phone is in.
 */
export function buildIcs(opts: { time: string; minutes: number; url: string; now?: Date }): string {
  const now = opts.now ?? new Date();
  const [hh, mm] = opts.time.split(':').map(Number);
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm);
  const end = new Date(start.getTime() + opts.minutes * 60000);
  const local = (d: Date) =>
    `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//IT English Course//RU',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:it-english-daily-${hh}${mm}@it-english.local`,
    `DTSTAMP:${stamp(now)}`,
    `DTSTART:${local(start)}`,
    `DTEND:${local(end)}`,
    'RRULE:FREQ=DAILY',
    `SUMMARY:${esc('IT English: урок дня')}`,
    `DESCRIPTION:${esc('Пора пройти сегодняшний урок и повторить карточки.\n' + opts.url)}`,
    `URL:${opts.url}`,
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    `DESCRIPTION:${esc('IT English: пора на урок')}`,
    'TRIGGER:PT0M',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return lines.join('\r\n') + '\r\n';
}
