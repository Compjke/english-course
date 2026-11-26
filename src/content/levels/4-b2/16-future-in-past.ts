import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-16',
  level: 'B2',
  title: 'Day 76: We were going to launch in May',
  grammar: 'Future in the past: was going to, would, was about to, was supposed to, was due to',
  scene: 'Ретроспектива квартала: что планировали и что на самом деле произошло.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: plans vs reality',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Quarter retrospective',
          format: 'call',
          lines: [
            { who: 'Maya', text: "Let's look back at the quarter. What did we plan, and what actually happened?" },
            { who: 'You', text: "We were going to launch in twenty depots in May. In the end, we launched in five." },
            { who: 'Arjun', text: "And the SAP connector was supposed to be ready in March. It was finished in April." },
            { who: 'Lena', text: "I remember the night before the launch. We were about to go live when Munich stopped responding." },
            { who: 'You', text: "Yes. I thought the problem would take an hour to fix. It took three days." },
            { who: 'Ken', text: "The Black Friday load test was due to happen in October, but we moved it to September. Best decision of the year." },
            { who: 'Maya', text: "And the refactoring? It was meant to take one sprint." },
            { who: 'You', text: "It took one and a half. But we knew it would pay off, and it did: new features are much faster now." },
            { who: 'Maya', text: "So, lesson learned: our plans were too optimistic. Next quarter, let's add a 30% buffer." },
          ],
        },
        { kind: 'choice', prompt: 'How many depots were they going to launch in?', options: ['Five', 'Ten', 'Twenty', 'Fifty'], answer: 2 },
        { kind: 'choice', prompt: 'When was the SAP connector supposed to be ready?', options: ['In March', 'In April', 'In May', 'In June'], answer: 0 },
        { kind: 'choice', prompt: 'What happened just before going live?', options: ['Munich stopped responding', 'The client cancelled', 'A party', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: 'How long did the refactoring take?', options: ['One sprint', 'One and a half sprints', 'Two months', 'A day'], answer: 1 },
        { kind: 'choice', prompt: 'What is the lesson?', options: ['Add a 30% buffer to plans', 'Never plan', 'Work more', 'Cancel refactoring'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: future seen from the past',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Talking about past plans and predictions',
          body:
            'When we look back at what was **planned, expected or predicted** in the past, we move future forms one step back:\n\n' +
            '**was / were going to** — a past plan (often it didn’t happen): *We were going to launch in twenty depots.*\n' +
            '**would** — a past prediction or belief: *I thought it would take an hour.* (= "it will take")\n' +
            '**was / were about to** — something was going to happen very soon: *We were about to go live when Munich stopped.*\n' +
            '**was supposed to / was meant to** — a plan or expectation that didn’t happen as planned: *It was supposed to be ready in March.*\n' +
            '**was due to** — something was scheduled: *The load test was due to happen in October.*',
          table: [
            ['Future', 'Future in the past'],
            ['We are going to launch.', 'We **were going to** launch.'],
            ['It will take an hour.', 'I thought it **would** take an hour.'],
            ['We are about to go live.', 'We **were about to** go live (when…).'],
            ['It is supposed to be ready.', 'It **was supposed to** be ready.'],
            ['It is due in October.', 'It **was due to** happen in October.'],
          ],
          pitfalls: [
            { wrong: 'I thought it will take an hour.', right: 'I thought it would take an hour.' },
            { wrong: 'We were going launch in May.', right: 'We were going to launch in May.' },
            { wrong: 'It supposed to be ready.', right: 'It was supposed to be ready.' },
            { wrong: 'We were about going live.', right: 'We were about to go live.' },
          ],
        },
        { kind: 'choice', prompt: 'We ___ launch in twenty depots, but we launched in five.', options: ['are going to', 'were going to', 'will', 'were going'], answer: 1 },
        { kind: 'choice', prompt: 'I thought the problem ___ an hour to fix.', options: ['will take', 'would take', 'takes', 'was taking'], answer: 1 },
        { kind: 'choice', prompt: 'We were ___ go live when Munich stopped responding.', options: ['about to', 'about', 'going', 'supposed'], answer: 0 },
        { kind: 'choice', prompt: 'The connector ___ be ready in March.', options: ['supposed to', 'was supposed to', 'is supposed', 'was suppose'], answer: 1 },
        { kind: 'choice', prompt: 'The load test was ___ to happen in October.', options: ['due', 'about', 'going', 'meant on'], answer: 0 },
        { kind: 'choice', prompt: 'We knew it ___ pay off.', options: ['will', 'would', 'is going to', 'was'], answer: 1 },
        { kind: 'choice', prompt: 'The refactoring was ___ to take one sprint.', options: ['meant', 'mean', 'meaning', 'means'], answer: 0 },
        { kind: 'gap', text: 'I ___ going to call you, but I forgot.', answers: ['was'] },
        { kind: 'gap', text: 'She promised she ___ send the report by Friday.', answers: ['would'] },
        { kind: 'gap', text: 'The release was ___ to start at 6, but it started at 9. (supposed)', answers: ['supposed'] },
        { kind: 'gap', text: 'I was ___ to leave when the alert came.', answers: ['about'] },
        { kind: 'gap', text: 'The new office was ___ to open in January. (scheduled)', answers: ['due'] },
        { kind: 'gap', text: 'Nobody knew the project ___ become so big.', answers: ['would'] },
        { kind: 'gap', text: 'We ___ going to hire two more people, but the budget was cut.', answers: ['were'] },
        { kind: 'transform', instruction: 'Report the past prediction (I thought…)', source: '"It will be easy," I thought.', answers: ['I thought it would be easy.'] },
        { kind: 'transform', instruction: 'Rewrite with "was supposed to"', source: 'The plan was: the API ready in March. It wasn’t.', answers: ['The API was supposed to be ready in March.'] },
        { kind: 'transform', instruction: 'Rewrite with "was about to … when"', source: 'We nearly deployed. Then Lena found a bug.', answers: ['We were about to deploy when Lena found a bug.'] },
        { kind: 'transform', instruction: 'Rewrite with "were going to"', source: 'Our plan was to use Flutter, but we chose React Native.', answers: ['We were going to use Flutter, but we chose React Native.'] },
        { kind: 'fix', sentence: 'I thought the meeting will be short.', answers: ['I thought the meeting would be short.'] },
        { kind: 'fix', sentence: 'The fix supposed to be ready yesterday.', answers: ['The fix was supposed to be ready yesterday.'] },
        { kind: 'fix', sentence: 'We were about deploying when it crashed.', answers: ['We were about to deploy when it crashed.'] },
        { kind: 'fix', sentence: 'She was going call me.', answers: ['She was going to call me.'] },
        { kind: 'fix', sentence: 'He said he will help us.', answers: ['He said he would help us.'] },
        { kind: 'order', words: ['We', 'were', 'going', 'to', 'launch', 'in', 'May', '.'], ru: 'Мы собирались запуститься в мае.' },
        { kind: 'order', words: ['It', 'was', 'supposed', 'to', 'be', 'ready', '.'], ru: 'Это должно было быть готово.' },
        { kind: 'order', words: ['I', 'thought', 'it', 'would', 'be', 'easy', '.'], ru: 'Я думал, будет легко.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: looking back',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'look back at', ru: 'оглянуться на', example: "Let's look back at the quarter." },
            { chunk: 'in the end', ru: 'в итоге', example: 'In the end, we launched in five depots.' },
            { chunk: 'go live', ru: 'запуститься (в прод)', example: 'We go live on Monday.' },
            { chunk: 'stopped responding', ru: 'перестал отвечать', example: 'The server stopped responding.' },
            { chunk: 'pay off', ru: 'окупиться', example: 'The refactoring will pay off.' },
            { chunk: 'too optimistic', ru: 'слишком оптимистичный', example: 'Our plans were too optimistic.' },
            { chunk: 'buffer', ru: 'запас', example: "Let's add a 30% buffer." },
            { chunk: 'slip', ru: 'сдвинуться (о сроке)', example: 'The deadline slipped by a month.' },
            { chunk: 'ahead of schedule', ru: 'с опережением графика', example: 'We finished ahead of schedule.' },
            { chunk: 'behind schedule', ru: 'с отставанием', example: 'The connector was behind schedule.' },
            { chunk: 'planned vs actual', ru: 'план против факта', example: 'Show planned vs actual in the report.' },
            { chunk: 'lesson learned', ru: 'извлечённый урок', example: 'Lesson learned: add a buffer.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['slip', 'сдвинуться (о сроке)'],
            ['ahead of schedule', 'с опережением'],
            ['pay off', 'окупиться'],
            ['in the end', 'в итоге'],
            ['go live', 'запуститься'],
          ],
        },
        { kind: 'gap', text: 'The deadline ___ by two weeks. (moved later)', answers: ['slipped'] },
        { kind: 'gap', text: 'We finished the migration ___ of schedule.', answers: ['ahead'] },
        { kind: 'gap', text: 'In the ___ , everything worked out.', answers: ['end'] },
        { kind: 'gap', text: 'We go ___ next Monday at 9 am.', answers: ['live'] },
        { kind: 'gap', text: 'The report shows planned ___ actual.', answers: ['vs', 'versus'] },
        { kind: 'choice', prompt: 'A good retro question:', options: ['What did we plan, and what actually happened?', 'Who is guilty?', 'Why are we so slow?', 'Can we skip this?'], answer: 0 },
        { kind: 'choice', prompt: '"The deadline slipped" means…', options: ['it moved later', 'it was met', 'it was cancelled', 'it moved earlier'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'We were going to launch in twenty depots in May.' },
        { kind: 'dictation', text: 'The connector was supposed to be ready in March.' },
        { kind: 'dictation', text: 'We were about to go live when Munich stopped responding.' },
        { kind: 'dictation', text: 'I thought the problem would take an hour to fix.' },
        { kind: 'dictation', text: 'The load test was due to happen in October.' },
        { kind: 'dictation', text: 'We knew it would pay off.' },
        { kind: 'dictation', text: 'Our plans were too optimistic.' },
        { kind: 'dictation', text: "Let's add a thirty percent buffer." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: plans vs reality',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'We were going to launch in twenty depots. In the end, we launched in five.' },
        { kind: 'shadow', text: 'The connector was supposed to be ready in March.' },
        { kind: 'shadow', text: 'We were about to go live when Munich stopped responding.' },
        { kind: 'shadow', text: 'I thought it would take an hour. It took three days.' },
        {
          kind: 'speak',
          situation: 'Talk about a plan from your life or work that changed: what you were going to do and what happened.',
          keywords: ['was going to', 'in the end'],
          sample: "Last year I was going to learn Rust. In the end, I spent the time on React Native, because my project needed it.",
        },
        {
          kind: 'speak',
          situation: 'Describe a task that took much longer than expected: what it was supposed to take and what you thought.',
          keywords: ['was supposed to', 'would'],
          sample: "The migration was supposed to take one day. I thought it would be easy, but it took a whole week because of old data.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: quarterly retrospective',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a "Planned vs actual" section for the quarterly retrospective. Use at least five future-in-the-past structures.',
          checklist: [
            '*was / were going to*',
            '*was supposed / meant to*',
            '*would* (past prediction)',
            '*was about to … when*, *was due to*',
          ],
          minWords: 60,
          sample:
            "Planned vs actual\nWe were going to launch in twenty German depots in May; in the end, we launched in five. The SAP connector was supposed to be ready in March but was finished in April. On launch night we were about to go live when the Munich depot stopped responding. We thought it would take an hour to fix; it took three days. The refactoring was meant to take one sprint and took one and a half, but it paid off. The Black Friday load test was due to happen in October; moving it to September was our best decision.",
        },
      ],
    },
  ],
};

export default lesson;
