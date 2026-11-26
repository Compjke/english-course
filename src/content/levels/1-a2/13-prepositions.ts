import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'a2-13',
  level: 'A2',
  title: 'Day 13: Meeting the client',
  grammar: 'Предлоги времени и места: in / on / at',
  scene: 'Нужно назначить встречу с клиентом из другого часового пояса.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: scheduling a call',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Email thread',
          format: 'email',
          lines: [
            { who: 'Client', text: 'Hi Maya, can we meet next week to see the map demo? I am in Toronto, so mornings are hard for me.' },
            { who: 'Maya', text: 'Sure! Our team is in Europe. How about Tuesday at 4 pm our time? That is 10 am in Toronto.' },
            { who: 'Client', text: "Tuesday doesn't work, I'm at a conference from Monday to Wednesday. What about Thursday?" },
            { who: 'Maya', text: 'Thursday is fine. We usually release on Thursday morning, so the demo will be on the new version.' },
            { who: 'Client', text: 'Perfect. Let’s say Thursday at 4 pm CET. Where do we meet, on Zoom or in Teams?' },
            { who: 'Maya', text: 'On Google Meet, if that’s OK. The link is in the invite. Our developer will show the map on his screen.' },
            { who: 'Client', text: 'Great. In the meantime, can you send me the release notes? I want to read them on the plane.' },
            { who: 'Maya', text: 'Of course. You will get them by Wednesday evening at the latest. See you on Thursday!' },
          ],
        },
        { kind: 'choice', prompt: 'Where is the client?', options: ['In Europe', 'In Toronto', 'In London', 'At the office'], answer: 1 },
        { kind: 'choice', prompt: "Why doesn't Tuesday work?", options: ['The client is at a conference.', 'Maya is busy.', 'It is a holiday.', 'The release is on Tuesday.'], answer: 0 },
        { kind: 'choice', prompt: 'When is the demo?', options: ['Tuesday at 4 pm', 'Thursday at 4 pm CET', 'Wednesday evening', 'Thursday at 10 am CET'], answer: 1 },
        { kind: 'choice', prompt: 'Where is the meeting?', options: ['On Zoom', 'In Teams', 'On Google Meet', 'In the office'], answer: 2 },
        { kind: 'choice', prompt: 'When will the client get the release notes?', options: ['On Thursday', 'By Wednesday evening at the latest', 'In a month', 'Now'], answer: 1 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: in / on / at',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Время: от большого к маленькому',
          body:
            '**in** — большие периоды: *in November, in 2026, in the morning, in summer, in two weeks* (через две недели).\n' +
            '**on** — дни и даты: *on Thursday, on 5 May, on Monday morning, on my birthday*.\n' +
            '**at** — точное время и «точки»: *at 4 pm, at noon, at night, at the weekend* (брит.), *at the end of the sprint*.\n\n' +
            'Без предлога: *next week, last Monday, this morning, tomorrow, yesterday, every day*. Не говорят *on next week*.\n\n' +
            'Полезные пары: **from … to** (с… по), **until** (до какого-то момента, действие длится), **by** (не позже, крайний срок): *I’m busy until 3. Send it by Friday.*',
          table: [
            ['in', 'on', 'at'],
            ['in November', 'on Thursday', 'at 4 pm'],
            ['in 2026', 'on 12 March', 'at noon'],
            ['in the morning', 'on Monday morning', 'at night'],
            ['in two weeks', 'on my first day', 'at the end of the day'],
          ],
          pitfalls: [
            { wrong: 'on next week', right: 'next week' },
            { wrong: 'in Monday', right: 'on Monday' },
            { wrong: 'at the morning', right: 'in the morning' },
            { wrong: 'Send it until Friday. (крайний срок)', right: 'Send it by Friday.' },
          ],
        },
        {
          kind: 'theory',
          title: 'Место и онлайн',
          body:
            '**in** — внутри пространства: *in the office, in Toronto, in the repo, in the folder, in Jira, in the invite*.\n' +
            '**on** — на поверхности, линии, экране и платформе: *on the screen, on page 3, on line 42, on Zoom, on Slack, on the website, on GitHub*.\n' +
            '**at** — точка или событие: *at the office* (на работе), *at a conference, at the meeting, at home, at work*.\n\n' +
            'IT-ловушки: *on Slack / on Zoom* (платформа), но *in the channel / in the chat* (внутри). *In the code*, но *on line 12*.',
          pitfalls: [
            { wrong: 'in Zoom', right: 'on Zoom' },
            { wrong: 'on the folder', right: 'in the folder' },
            { wrong: 'in the line 42', right: 'on line 42' },
            { wrong: 'I am on a conference.', right: 'I am at a conference.' },
          ],
        },
        { kind: 'choice', prompt: 'The demo is ___ Thursday.', options: ['in', 'on', 'at', '— (без предлога)'], answer: 1 },
        { kind: 'choice', prompt: 'Let’s meet ___ 4 pm.', options: ['in', 'on', 'at', 'by'], answer: 2 },
        { kind: 'choice', prompt: 'We release a big version ___ December.', options: ['in', 'on', 'at', 'by'], answer: 0 },
        { kind: 'choice', prompt: 'I’ll send it ___ next week.', options: ['in', 'on', 'at', '— (без предлога)'], answer: 3 },
        { kind: 'choice', prompt: 'The client is ___ a conference.', options: ['in', 'on', 'at', 'by'], answer: 2 },
        { kind: 'choice', prompt: 'The error is ___ line 42.', options: ['in', 'on', 'at', 'by'], answer: 1 },
        { kind: 'choice', prompt: 'Let’s talk ___ Slack.', options: ['in', 'on', 'at', 'by'], answer: 1 },
        { kind: 'choice', prompt: 'Please send the notes ___ Wednesday. (не позже)', options: ['until', 'by', 'in', 'at'], answer: 1 },
        { kind: 'choice', prompt: "I'm in meetings ___ 3 pm. Then I'm free.", options: ['by', 'until', 'on', 'in'], answer: 1 },
        { kind: 'gap', text: 'I usually check emails ___ the morning.', answers: ['in'] },
        { kind: 'gap', text: 'The link is ___ the invite.', answers: ['in'] },
        { kind: 'gap', text: 'Our team is in Europe, and the client is ___ Toronto.', answers: ['in'] },
        { kind: 'gap', text: 'The new version will be ready ___ two weeks.', answers: ['in'] },
        { kind: 'gap', text: 'The config file is ___ the root folder.', answers: ['in'] },
        { kind: 'gap', text: 'He shows the map ___ his screen.', answers: ['on'] },
        { kind: 'gap', text: 'I’m ___ home today, I have a cold.', answers: ['at'] },
        { kind: 'gap', text: 'The conference is ___ Monday to Wednesday.', answers: ['from'] },
        { kind: 'fix', sentence: 'See you in Thursday!', answers: ['See you on Thursday!'] },
        { kind: 'fix', sentence: "Let's meet on next Monday.", answers: ["Let's meet next Monday."] },
        { kind: 'fix', sentence: 'We have a call in Zoom.', answers: ['We have a call on Zoom.'] },
        { kind: 'fix', sentence: 'The bug is in the line 12.', answers: ['The bug is on line 12.'] },
        { kind: 'fix', sentence: 'Send me the report until Friday, it is the deadline.', answers: ['Send me the report by Friday, it is the deadline.'] },
        { kind: 'order', words: ['See', 'you', 'on', 'Thursday', 'at', '4', 'pm', '.'], ru: 'Увидимся в четверг в 4 вечера.' },
        { kind: 'order', words: ['The', 'link', 'is', 'in', 'the', 'invite', '.'], ru: 'Ссылка в приглашении.' },
        { kind: 'order', words: ["I'm", 'busy', 'until', 'three', '.'], ru: 'Я занят до трёх.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: scheduling',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'how about', ru: 'как насчёт', example: 'How about Tuesday at 4 pm?' },
            { chunk: "doesn't work for me", ru: 'мне не подходит', example: "Tuesday doesn't work for me." },
            { chunk: 'is fine', ru: 'подходит', example: 'Thursday is fine.' },
            { chunk: 'our time', ru: 'по нашему времени', example: 'The call is at 4 pm our time.' },
            { chunk: 'time zone', ru: 'часовой пояс', example: 'We are in different time zones.' },
            { chunk: 'invite', ru: 'приглашение (в календаре)', example: 'The link is in the invite.' },
            { chunk: 'release notes', ru: 'описание изменений релиза', example: 'Can you send the release notes?' },
            { chunk: 'in the meantime', ru: 'тем временем, а пока', example: 'In the meantime, read the docs.' },
            { chunk: 'at the latest', ru: 'самое позднее', example: 'By Wednesday at the latest.' },
            { chunk: "let's say", ru: 'скажем, давайте так', example: "Let's say Thursday at 4." },
            { chunk: 'reschedule', ru: 'перенести встречу', example: 'Can we reschedule the call?' },
            { chunk: 'see you on', ru: 'увидимся в (день)', example: 'See you on Thursday!' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['reschedule', 'перенести встречу'],
            ['time zone', 'часовой пояс'],
            ['at the latest', 'самое позднее'],
            ['in the meantime', 'а пока'],
            ['invite', 'приглашение'],
          ],
        },
        { kind: 'gap', text: '___ about Friday morning?', answers: ['How'] },
        { kind: 'gap', text: "Sorry, Monday doesn't ___ for me.", answers: ['work'] },
        { kind: 'gap', text: 'Something came up. Can we ___ our call?', answers: ['reschedule'] },
        { kind: 'gap', text: 'Please reply by Monday at the ___ .', answers: ['latest'] },
        { kind: 'gap', text: 'In the ___ , I’ll prepare the demo data.', answers: ['meantime'] },
        { kind: 'choice', prompt: 'Вежливо предложить время:', options: ['How about Monday at 10?', 'You come Monday 10.', 'Monday 10, OK?! ', 'I want Monday.'], answer: 0 },
        { kind: 'choice', prompt: '«4 pm CET» значит…', options: ['16:00 по центральноевропейскому времени', '4 утра', '16:00 по Торонто', 'время не указано'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'How about Tuesday at 4 pm our time?' },
        { kind: 'dictation', text: "I'm at a conference from Monday to Wednesday." },
        { kind: 'dictation', text: 'The link is in the invite.' },
        { kind: 'dictation', text: 'We usually release on Thursday morning.' },
        { kind: 'dictation', text: 'See you on Thursday!' },
        { kind: 'dictation', text: 'By Wednesday evening at the latest.' },
        {
          kind: 'theory',
          title: 'Даты и время вслух',
          body: '*4 pm* читается «four p-m». *10:30* — «ten thirty». *5 May* читается «the fifth of May» (брит.), а *May 5* — «May fifth» (амер.). *2026* — «twenty twenty-six».',
        },
        { kind: 'dictation', text: 'The demo is on the fifth of May at ten thirty.' },
        { kind: 'dictation', text: "Let's talk on Slack in the afternoon." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: arrange a meeting',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'How about Thursday at 4 pm our time?' },
        { kind: 'shadow', text: "Tuesday doesn't work for me. I'm at a conference." },
        { kind: 'shadow', text: 'The link is in the invite. See you on Thursday!' },
        { kind: 'shadow', text: "I'll send it by Wednesday at the latest." },
        {
          kind: 'speak',
          situation: 'Коллега предлагает созвон в понедельник в 9 утра. Тебе не подходит: в понедельник утром у тебя стендап. Предложи другое время.',
          keywords: ["doesn't work for me", 'how about', 'on'],
          sample: "Monday at nine doesn't work for me, I have a standup. How about Monday at two, or on Tuesday morning?",
        },
        {
          kind: 'speak',
          situation: 'Скажи клиенту, где будет встреча, где ссылка и когда он получит документы (не позже среды).',
          keywords: ['on Google Meet', 'in the invite', 'by Wednesday'],
          sample: "We'll meet on Google Meet. The link is in the invite, and you'll get the documents by Wednesday.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: meeting email',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши письмо клиенту: предложи два варианта времени для демо (с днём, временем и часовым поясом), укажи платформу и пообещай прислать материалы к определённому сроку.',
          checklist: [
            'Правильно: *on* + день, *at* + время, *in* + месяц/часть дня',
            'Есть платформа: *on Zoom / on Google Meet*',
            'Есть *by* + срок',
            'Вежливое начало и конец',
          ],
          minWords: 40,
          sample:
            "Hi Anna,\nThank you for your interest in the map demo. Could we meet on Wednesday at 4 pm CET (10 am in Toronto)? If that doesn't work for you, Thursday at the same time is also fine for us. The call will be on Google Meet, and the link will be in the invite. I'll send you the release notes by Tuesday evening at the latest.\nBest regards,\nAlex",
        },
      ],
    },
  ],
};

export default lesson;
