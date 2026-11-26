import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-06',
  level: 'B1',
  title: "Day 21: The demo is on Thursday",
  grammar: 'Будущее: Present Continuous, Present Simple, will, going to',
  scene: 'Подготовка к демо карты для клиента. Расписание, договорённости и прогнозы.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: demo prep',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Demo preparation',
          format: 'call',
          lines: [
            { who: 'Maya', text: "Let's check the plan. The demo starts at 4 pm on Thursday, and the client's flight lands at noon, so they'll be on time." },
            { who: 'Tom', text: "I'm meeting the client for lunch before the demo. I'm taking them to the Italian place." },
            { who: 'You', text: "I'm going to show the map and the clustering. Sofia's presenting the design system." },
            { who: 'Sofia', text: 'Yes, and the new icons are coming tomorrow. The agency is sending them in the morning.' },
            { who: 'Ken', text: 'The release train leaves on Wednesday at 6 pm. After that, staging is frozen until the demo.' },
            { who: 'Arjun', text: "I think the delivery estimate won't be ready. It's going to need one more week, the data is a mess." },
            { who: 'Maya', text: "OK, we'll show it as a preview, not a feature. Is everyone free on Wednesday for a rehearsal?" },
            { who: 'You', text: "I'm seeing the dentist at 10, but I'm free after lunch." },
            { who: 'Maya', text: 'Perfect. Rehearsal at 2. I’ll send the invite now.' },
            { who: 'Lena', text: "Careful, the build is about to finish. I'll test it in ten minutes." },
          ],
        },
        { kind: 'choice', prompt: 'When does the demo start?', options: ['At noon on Thursday', 'At 4 pm on Thursday', 'On Wednesday at 6 pm', 'At 2 pm'], answer: 1 },
        { kind: 'choice', prompt: 'What is Tom doing before the demo?', options: ['Rehearsing', 'Having lunch with the client', 'Testing the build', 'Flying'], answer: 1 },
        { kind: 'choice', prompt: 'When is staging frozen?', options: ['From Wednesday 6 pm until the demo', 'All week', 'Only on Thursday', 'Never'], answer: 0 },
        { kind: 'choice', prompt: 'Why won’t the delivery estimate be ready?', options: ['The data is a mess.', 'Arjun is on holiday.', 'The client changed its mind.', 'Sofia has no designs.'], answer: 0 },
        { kind: 'choice', prompt: 'Why are you busy on Wednesday morning?', options: ['A meeting with Tom', 'The dentist', 'The release', 'A flight'], answer: 1 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: talking about the future',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Четыре способа сказать о будущем',
          body:
            'В английском будущее выражается не только через *will*. Выбор зависит от того, **что это за будущее**:\n\n' +
            '**Present Continuous** — **договорённость** с другими людьми, есть время и место (как в календаре): *I’m meeting the client for lunch. I’m seeing the dentist at 10.*\n' +
            '**Present Simple** — **расписание**: поезда, рейсы, встречи по графику, релизы: *The demo starts at 4. The flight lands at noon. The release train leaves on Wednesday.*\n' +
            '**going to** — **намерение / план** (решил сам) и прогноз по фактам: *I’m going to show the clustering. The data is a mess, it’s going to need a week.*\n' +
            '**will** — решение в момент речи, обещание, прогноз-мнение: *I’ll send the invite now. I think it won’t be ready.*\n\n' +
            '**be about to** + глагол — «вот-вот»: *The build is about to finish.*',
          table: [
            ['Форма', 'Когда', 'Пример'],
            ['Present Continuous', 'договорённость (календарь)', "I'**m meeting** Tom at 3."],
            ['Present Simple', 'расписание', 'The demo **starts** at 4.'],
            ['going to', 'план, очевидный прогноз', "I'**m going to** refactor it."],
            ['will', 'решение сейчас, обещание, мнение', "I'**ll** check it. It **will** be fine."],
            ['be about to', 'вот-вот', 'The build **is about to** finish.'],
          ],
          pitfalls: [
            { wrong: 'I will meet the client tomorrow at 1. (договорились)', right: "I'm meeting the client tomorrow at 1." },
            { wrong: 'The demo will start at 4 pm. (по расписанию — тоже возможно, но звучит менее естественно)', right: 'The demo starts at 4 pm.' },
            { wrong: 'What do you do tonight?', right: 'What are you doing tonight?' },
            { wrong: 'I send the invite now!', right: "I'll send the invite now!" },
          ],
        },
        { kind: 'choice', prompt: 'The client’s flight ___ at noon. (расписание)', options: ['lands', 'is going to land', 'will be landing', 'land'], answer: 0 },
        { kind: 'choice', prompt: "I ___ the client for lunch tomorrow. We booked a table.", options: ['meet', "'m meeting", "'ll meet", 'met'], answer: 1 },
        { kind: 'choice', prompt: '— The invite is missing. — Oh, I ___ it now.', options: ["'m sending", 'send', "'ll send", "'m going to send"], answer: 2 },
        { kind: 'choice', prompt: 'The release train ___ every Wednesday at 6 pm.', options: ['leaves', 'is leaving', 'will leave', 'is going to leave'], answer: 0 },
        { kind: 'choice', prompt: "Look at the data! This ___ more time.", options: ['needs', "is going to need", "is needing", "need"], answer: 1 },
        { kind: 'choice', prompt: 'What ___ on Friday evening? Any plans?', options: ['do you do', 'are you doing', 'will you do', 'you do'], answer: 1 },
        { kind: 'choice', prompt: "Hurry up, the meeting is about ___ !", options: ['start', 'to start', 'starting', 'started'], answer: 1 },
        { kind: 'gap', text: 'The demo ___ (start) at 4 pm on Thursday.', answers: ['starts'] },
        { kind: 'gap', text: "I ___ (see) the dentist at 10, so I'll be late.", answers: ["'m seeing", 'am seeing'] },
        { kind: 'gap', text: "Sofia ___ (present) the design system on Thursday. It's in the agenda.", answers: ["'s presenting", 'is presenting'] },
        { kind: 'gap', text: "I think the client ___ (like) the new map.", answers: ['will like', "'ll like"] },
        { kind: 'gap', text: "Next sprint I'm ___ to refactor the marker code.", answers: ['going'] },
        { kind: 'gap', text: 'What time ___ the train leave?', answers: ['does'] },
        { kind: 'gap', text: 'The build is ___ to finish, wait a second.', answers: ['about'] },
        { kind: 'gap', text: "Don't worry, I ___ (help) you with the slides.", answers: ["'ll help", 'will help'] },
        { kind: 'transform', instruction: 'Перепиши как договорённость (Present Continuous)', source: 'I have a meeting with Tom at 3 tomorrow.', answers: ["I'm meeting Tom at 3 tomorrow.", 'I am meeting Tom at 3 tomorrow.', "I'm meeting Tom tomorrow at 3."] },
        { kind: 'transform', instruction: 'Задай вопрос о расписании (What time…?)', source: 'The demo starts **at 4 pm**.', answers: ['What time does the demo start?', 'When does the demo start?'] },
        { kind: 'transform', instruction: 'Скажи «вот-вот» (be about to)', source: 'The deploy will finish in a few seconds.', answers: ['The deploy is about to finish.'] },
        { kind: 'fix', sentence: 'What do you do this weekend?', answers: ['What are you doing this weekend?'] },
        { kind: 'fix', sentence: 'The webinar will begins at 5.', answers: ['The webinar begins at 5.', 'The webinar will begin at 5.'] },
        { kind: 'fix', sentence: "The phone is ringing. I'm going to answer it! (решил сейчас)", answers: ["The phone is ringing. I'll answer it!"] },
        { kind: 'fix', sentence: 'The build is about finishing.', answers: ['The build is about to finish.'] },
        { kind: 'fix', sentence: "I meet the client tomorrow, we have a reservation.", answers: ["I'm meeting the client tomorrow, we have a reservation.", 'I am meeting the client tomorrow, we have a reservation.'] },
        { kind: 'order', words: ['The', 'demo', 'starts', 'at', '4', 'pm', '.'], ru: 'Демо начинается в 16:00.' },
        { kind: 'order', words: ["I'm", 'meeting', 'the', 'client', 'for', 'lunch', '.'], ru: 'Я встречаюсь с клиентом за обедом.' },
        { kind: 'order', words: ['The', 'build', 'is', 'about', 'to', 'finish', '.'], ru: 'Сборка вот-вот закончится.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: demos & releases',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'rehearsal', ru: 'репетиция', example: 'Rehearsal at 2 pm on Wednesday.' },
            { chunk: 'release train', ru: 'релизный поезд (график релизов)', example: 'The release train leaves on Wednesday.' },
            { chunk: 'is frozen', ru: 'заморожен (нельзя менять)', example: 'Staging is frozen until the demo.' },
            { chunk: 'as a preview', ru: 'как превью', example: "We'll show it as a preview." },
            { chunk: 'a mess', ru: 'бардак', example: 'The data is a mess.' },
            { chunk: 'agenda', ru: 'повестка', example: "It's in the agenda." },
            { chunk: 'on time', ru: 'вовремя', example: "They'll be on time." },
            { chunk: 'design system', ru: 'дизайн-система', example: 'Sofia is presenting the design system.' },
            { chunk: 'agency', ru: 'агентство', example: 'The agency is sending the icons.' },
            { chunk: 'careful', ru: 'осторожно', example: 'Careful, the build is about to finish.' },
            { chunk: 'are you free', ru: 'ты свободен', example: 'Are you free on Wednesday?' },
            { chunk: 'walk through', ru: 'пройтись (показать по шагам)', example: "I'll walk through the new map." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['rehearsal', 'репетиция'],
            ['agenda', 'повестка'],
            ['a mess', 'бардак'],
            ['on time', 'вовремя'],
            ['frozen', 'заморожен'],
          ],
        },
        { kind: 'gap', text: 'Let’s do a ___ before the real demo.', answers: ['rehearsal'] },
        { kind: 'gap', text: 'What is on the ___ for tomorrow’s meeting?', answers: ['agenda'] },
        { kind: 'gap', text: "Code is ___ before the release, no new merges.", answers: ['frozen'] },
        { kind: 'gap', text: "Are you ___ on Friday at 11?", answers: ['free'] },
        { kind: 'gap', text: "I'll walk you ___ the new features.", answers: ['through'] },
        { kind: 'choice', prompt: '«Покажу как превью, не как готовую фичу»:', options: ["We'll show it as a preview.", 'We show it like preview.', "We'll show it in preview mode only.", 'It will be shown pre-view.'], answer: 0 },
        { kind: 'choice', prompt: '«Вовремя» (к назначенному времени):', options: ['on time', 'in time', 'at time', 'by time'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'The demo starts at 4 pm on Thursday.' },
        { kind: 'dictation', text: "I'm meeting the client for lunch." },
        { kind: 'dictation', text: 'The release train leaves on Wednesday.' },
        { kind: 'dictation', text: "It's going to need one more week." },
        { kind: 'dictation', text: "I'll send the invite now." },
        { kind: 'dictation', text: 'The build is about to finish.' },
        { kind: 'dictation', text: "I'm seeing the dentist at ten." },
        { kind: 'dictation', text: "We'll show it as a preview." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: your week ahead',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "I'm meeting the client for lunch before the demo." },
        { kind: 'shadow', text: 'The demo starts at four, and the rehearsal is at two.' },
        { kind: 'shadow', text: "The data is a mess. It's going to need one more week." },
        { kind: 'shadow', text: "Don't worry, I'll send the invite now." },
        {
          kind: 'speak',
          situation: 'Расскажи о своей следующей неделе: одна договорённость (Present Continuous), одно событие по расписанию (Present Simple), один твой план (going to).',
          keywords: ["I'm", 'starts', 'going to'],
          sample: "On Monday I'm meeting Arjun to plan the API. The sprint starts on Tuesday. I'm going to finish the map clustering by Friday.",
        },
        {
          kind: 'speak',
          situation: 'Коллега говорит: «The demo room has no projector!» Предложи решение прямо сейчас (will).',
          keywords: ["I'll"],
          sample: "No problem, I'll book another room. And I'll bring my HDMI adapter, just in case.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: demo plan',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши письмо команде с планом демо: расписание (Present Simple), кто что показывает (Present Continuous / going to), прогноз по рискам (will / going to), твоё обещание (I’ll).',
          checklist: [
            'Present Simple для расписания',
            'Present Continuous для договорённостей',
            '*going to* для планов и прогнозов по фактам',
            '*will / I’ll* для обещаний',
          ],
          minWords: 50,
          sample:
            "Hi team,\nHere is the plan for the demo. The release train leaves on Wednesday at 6 pm, and the rehearsal starts at 2 pm the same day. The demo itself starts at 4 pm on Thursday. Tom is meeting the client for lunch before that. I'm going to show the map and the clustering, and Sofia is presenting the design system. The delivery estimate isn't going to be ready, so we'll show it as a preview. I'll send the final agenda tomorrow.\nAlex",
        },
      ],
    },
  ],
};

export default lesson;
