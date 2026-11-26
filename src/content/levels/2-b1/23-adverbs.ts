import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-23',
  level: 'B1',
  title: 'Day 38: It works perfectly… mostly',
  grammar: 'Наречия: quick → quickly, good → well, hard / hardly, late / lately',
  scene: 'Lena тестирует ETA-фичу и пишет отчёт. Ты помогаешь сделать его точным.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the test report',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Reviewing the test report',
          format: 'call',
          lines: [
            { who: 'Lena', text: "I've tested the ETA feature. It works well on most devices. The map loads quickly, and the ETA updates correctly." },
            { who: 'You', text: "Great! Any problems?" },
            { who: 'Lena', text: "On slow networks the ETA updates very slowly, sometimes a minute late. And on the old tablet, the text is hardly readable." },
            { who: 'You', text: "Hardly readable? I worked hard on that layout!" },
            { who: 'Lena', text: "Haha, I know. It looks good on phones. But on the tablet the font is too small. You can easily fix it." },
            { who: 'You', text: "OK. Have you tested the time zones carefully?" },
            { who: 'Lena', text: "Yes. Lately we've had many bugs with time zones, so I checked each depot separately. All correct." },
            { who: 'You', text: "Perfect. Can you write it clearly in the report? Tom will read it to the client." },
            { who: 'Lena', text: "Sure. I'll write it simply: what works, what doesn't, and how bad it is." },
          ],
        },
        { kind: 'choice', prompt: 'How does the feature work on most devices?', options: ['Badly', 'Well', 'Slowly', 'Hardly'], answer: 1 },
        { kind: 'choice', prompt: 'What happens on slow networks?', options: ['The ETA updates very slowly', 'The app crashes', 'Nothing', 'The map disappears'], answer: 0 },
        { kind: 'choice', prompt: 'What is the problem on the old tablet?', options: ['The text is hardly readable', 'It is too fast', 'No map', 'Wrong colours'], answer: 0 },
        { kind: 'choice', prompt: 'Why did Lena check each depot separately?', options: ['Lately there were many time zone bugs', 'Maya asked', 'For fun', 'The client asked'], answer: 0 },
        { kind: 'choice', prompt: 'Who will read the report to the client?', options: ['Lena', 'Tom', 'Maya', 'You'], answer: 1 },
        {
          kind: 'choice',
          prompt: '«I worked **hard**» vs «It’s **hardly** readable». Разница?',
          options: ['hard — усердно; hardly — едва, почти не', 'Одно и то же', 'hardly — очень усердно', 'hard — едва'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: adjectives vs adverbs',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Прилагательное или наречие?',
          body:
            '**Прилагательное** описывает **существительное**: *a quick fix, a careful test, the map is slow.*\n**Наречие** описывает **действие (глагол)**: *it loads quickly, she tested carefully, it updates slowly.*\n\n' +
            'Обычно наречие = прилагательное + **-ly**: *quick → quickly, clear → clearly, easy → easily (y→i), simple → simply, automatic → automatically*.\n\n' +
            'После глаголов-связок **be, look, seem, sound, feel, smell, taste, become, get** ставится **прилагательное**, не наречие: *It looks good. It sounds great. The UI feels slow.*',
          pitfalls: [
            { wrong: 'It loads quick.', right: 'It loads quickly.' },
            { wrong: 'It looks well on phones. (выглядит хорошо)', right: 'It looks good on phones.' },
            { wrong: 'She tested it careful.', right: 'She tested it carefully.' },
            { wrong: 'The new UI feels nicely.', right: 'The new UI feels nice.' },
          ],
        },
        {
          kind: 'theory',
          title: 'Неправильные наречия и ловушки',
          body:
            '**good → well**: *a good developer — she codes well.* (*well* бывает и прилагательным со значением «здоров»: *I’m well.*)\n' +
            '**fast → fast**: *a fast app — it runs fast.* (*fastly* не существует!)\n' +
            '**hard → hard** (усердно, тяжело): *I worked hard.* А **hardly** значит «едва, почти не»: *It’s hardly readable. I hardly slept.*\n' +
            '**late → late** (поздно): *The ETA was a minute late.* А **lately** значит «в последнее время»: *Lately we’ve had many bugs.*\n' +
            '**early → early**, **daily → daily** (одинаковые формы).',
          table: [
            ['Прилагательное', 'Наречие', 'Ловушка'],
            ['good', 'well', '—'],
            ['fast', 'fast', 'fastly ✗'],
            ['hard', 'hard', 'hardly = едва'],
            ['late', 'late', 'lately = в последнее время'],
            ['easy', 'easily', '—'],
          ],
        },
        { kind: 'choice', prompt: 'The map loads ___ .', options: ['quick', 'quickly', 'quicker than', 'quickness'], answer: 1 },
        { kind: 'choice', prompt: 'It works ___ on most devices.', options: ['good', 'well', 'goodly', 'nice'], answer: 1 },
        { kind: 'choice', prompt: 'It looks ___ on phones.', options: ['good', 'well', 'goodly', 'nicely'], answer: 0 },
        { kind: 'choice', prompt: 'I worked really ___ on that layout.', options: ['hardly', 'hard', 'hardy', 'harder than'], answer: 1 },
        { kind: 'choice', prompt: 'The text is ___ readable. You can barely see it.', options: ['hard', 'hardly', 'hardy', 'hardness'], answer: 1 },
        { kind: 'choice', prompt: '___ we have had many bugs with time zones.', options: ['Late', 'Lately', 'Later', 'Latest'], answer: 1 },
        { kind: 'choice', prompt: 'The server responds very ___ .', options: ['fastly', 'fast', 'fastest', 'fasting'], answer: 1 },
        { kind: 'choice', prompt: 'The new UI feels ___ .', options: ['slowly', 'slow', 'slowness', 'slowing'], answer: 1 },
        { kind: 'gap', text: 'Please read the requirements ___ (careful).', answers: ['carefully'] },
        { kind: 'gap', text: 'You can ___ (easy) fix it.', answers: ['easily'] },
        { kind: 'gap', text: 'Lena tests every feature very ___ (good).', answers: ['well'] },
        { kind: 'gap', text: 'The tests run ___ (automatic) on every commit.', answers: ['automatically'] },
        { kind: 'gap', text: "I'll write it ___ (simple).", answers: ['simply'] },
        { kind: 'gap', text: 'The ETA was a minute ___ (поздно).', answers: ['late'] },
        { kind: 'gap', text: "I ___ slept last night. The pager kept ringing. (едва)", answers: ['hardly'] },
        { kind: 'gap', text: 'Your explanation sounds ___ (clear) now.', answers: ['clear'] },
        { kind: 'transform', instruction: 'Перепиши с наречием', source: 'Arjun is a careful reviewer.', answers: ['Arjun reviews carefully.', 'Arjun reviews code carefully.'] },
        { kind: 'transform', instruction: 'Перепиши с наречием', source: 'Sofia is a good designer.', answers: ['Sofia designs well.'] },
        { kind: 'transform', instruction: 'Перепиши с hardly', source: 'I almost didn’t understand the accent.', answers: ['I hardly understood the accent.', 'I could hardly understand the accent.'] },
        { kind: 'fix', sentence: 'The app runs very quick now.', answers: ['The app runs very quickly now.', 'The app runs very fast now.'] },
        { kind: 'fix', sentence: 'She speaks English very good.', answers: ['She speaks English very well.'] },
        { kind: 'fix', sentence: 'The design looks nicely.', answers: ['The design looks nice.'] },
        { kind: 'fix', sentence: 'He drives fastly.', answers: ['He drives fast.'] },
        { kind: 'fix', sentence: "I've been busy late.", answers: ["I've been busy lately.", 'I have been busy lately.'] },
        { kind: 'order', words: ['It', 'works', 'well', 'on', 'most', 'devices', '.'], ru: 'Работает хорошо на большинстве устройств.' },
        { kind: 'order', words: ['The', 'text', 'is', 'hardly', 'readable', '.'], ru: 'Текст едва читается.' },
        { kind: 'order', words: ['Lately', "we've", 'had', 'many', 'bugs', '.'], ru: 'В последнее время у нас много багов.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: testing',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'test report', ru: 'отчёт о тестировании', example: 'Lena wrote the test report.' },
            { chunk: 'slow networks', ru: 'медленные сети', example: 'It updates slowly on slow networks.' },
            { chunk: 'readable', ru: 'читаемый', example: 'The text is hardly readable.' },
            { chunk: 'separately', ru: 'по отдельности', example: 'I checked each depot separately.' },
            { chunk: 'regression', ru: 'регрессия, вернувшийся баг', example: 'Is it a regression?' },
            { chunk: 'test case', ru: 'тест-кейс', example: 'I added three new test cases.' },
            { chunk: 'passes', ru: 'проходит (тест)', example: 'Everything passes.' },
            { chunk: 'flaky', ru: 'нестабильный (тест)', example: 'This test is flaky.' },
            { chunk: 'severity', ru: 'серьёзность', example: 'What is the severity of the bug?' },
            { chunk: 'minor', ru: 'незначительный', example: 'It is a minor issue.' },
            { chunk: 'critical', ru: 'критичный', example: 'Login failures are critical.' },
            { chunk: 'how bad it is', ru: 'насколько всё плохо', example: 'Explain how bad it is.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['flaky', 'нестабильный'],
            ['severity', 'серьёзность'],
            ['regression', 'вернувшийся баг'],
            ['minor', 'незначительный'],
            ['critical', 'критичный'],
          ],
        },
        { kind: 'gap', text: 'This test is ___ : it fails one time in ten.', answers: ['flaky'] },
        { kind: 'gap', text: 'The font issue is ___ , not critical.', answers: ['minor'] },
        { kind: 'gap', text: 'It worked last week, so it is a ___ .', answers: ['regression'] },
        { kind: 'gap', text: 'What is the ___ of this bug: low or high?', answers: ['severity'] },
        { kind: 'gap', text: 'All tests ___ except one.', answers: ['pass'] },
        { kind: 'choice', prompt: 'Тест иногда падает без причины:', options: ['flaky test', 'fluffy test', 'flaming test', 'floating test'], answer: 0 },
        { kind: 'choice', prompt: '«Нельзя войти в систему» — какой severity?', options: ['critical', 'minor', 'cosmetic', 'nice to have'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'It works well on most devices.' },
        { kind: 'dictation', text: 'The map loads quickly.' },
        { kind: 'dictation', text: 'The text is hardly readable.' },
        { kind: 'dictation', text: 'I worked hard on that layout.' },
        { kind: 'dictation', text: 'It looks good on phones.' },
        { kind: 'dictation', text: "Lately we've had many bugs with time zones." },
        { kind: 'dictation', text: 'I checked each depot separately.' },
        { kind: 'dictation', text: 'This test is flaky.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: describe how it works',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'It works well, and the map loads quickly.' },
        { kind: 'shadow', text: "It looks good on phones, but it's hardly readable on tablets." },
        { kind: 'shadow', text: "Lately we've had many bugs with time zones." },
        { kind: 'shadow', text: 'I checked each depot carefully.' },
        {
          kind: 'speak',
          situation: 'Опиши, как работает приложение, которым ты пользуешься каждый день: что работает хорошо и быстро, что медленно или плохо.',
          keywords: ['well', 'quickly', 'slowly'],
          sample: 'Our banking app works well. It opens quickly, and payments go through fast. But the search works slowly and the filters look strange.',
        },
        {
          kind: 'speak',
          situation: 'Расскажи, как ты работал(а) на прошлой неделе: что делал(а) усердно, что почти не успел(а), что изменилось в последнее время.',
          keywords: ['hard', 'hardly', 'lately'],
          sample: "Last week I worked hard on the new form. I hardly had time for reviews. Lately I've been more focused, because I turned off Slack notifications.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: test summary',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши краткий отчёт о тестировании ETA-фичи для клиента: что работает хорошо, что медленно, что плохо читается, насколько серьёзны проблемы.',
          checklist: [
            'Наречия на -ly: *quickly, correctly, slowly*',
            '*well* (не good) после глаголов действия',
            '*looks / seems + прилагательное*',
            'Есть *hardly* или *lately*',
          ],
          minWords: 45,
          sample:
            "ETA feature: test summary\nThe feature works well on 9 of 10 test devices. The map loads quickly, and the ETA updates correctly in all time zones. On slow networks the ETA updates slowly, sometimes a minute late; severity: minor. On one old tablet the text is hardly readable because the font is too small; we can easily fix it this week. Overall, the feature looks good and is ready for the pilot.",
        },
      ],
    },
  ],
};

export default lesson;
