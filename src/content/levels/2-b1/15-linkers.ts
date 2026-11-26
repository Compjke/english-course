import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-15',
  level: 'B1',
  title: 'Day 30: However, there is a risk',
  grammar: 'Связки: although, however, because of, so that, in order to',
  scene: 'Ты пишешь свой первый короткий технический proposal: light mode для старых телефонов.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the proposal',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Proposal draft review',
          format: 'doc',
          lines: [
            { who: 'You', text: 'Problem: the app crashes on old Android phones because of the big bundle. As a result, 8% of drivers can’t use it.' },
            { who: 'You', text: 'Solution: we will build a light mode in order to reduce memory usage. In addition, we will split the bundle so that old phones load less code.' },
            { who: 'You', text: 'Although the light mode has fewer features, drivers will be able to see their route. However, there is a risk: two versions are harder to maintain.' },
            { who: 'Arjun', text: "Nice structure! One comment: 'because of the bundle' is correct, but add 'since the bundle is 4 MB' for a number." },
            { who: 'Maya', text: "Good. Also say what happens otherwise: 'Otherwise, we risk losing these drivers.'" },
            { who: 'You', text: "Thanks! And should I add the cost?" },
            { who: 'Maya', text: "Yes. Despite the cost, it's worth it. But write it so that Tom can show it to the client." },
          ],
        },
        { kind: 'choice', prompt: 'Why does the app crash?', options: ['Because of the big bundle', 'Because of the CDN', 'Because drivers are careless', 'Because of the API'], answer: 0 },
        { kind: 'choice', prompt: 'Why will you build a light mode?', options: ['In order to reduce memory usage', 'To add features', 'To change the design', 'To please Tom'], answer: 0 },
        { kind: 'choice', prompt: 'What is the risk?', options: ['Two versions are harder to maintain.', 'Drivers will not like it.', 'It is too cheap.', 'There is no risk.'], answer: 0 },
        { kind: 'choice', prompt: "What does Maya want to add?", options: ['What happens otherwise', 'More colours', 'A joke', 'A new feature'], answer: 0 },
        { kind: 'choice', prompt: 'Who should be able to show the proposal to the client?', options: ['Lena', 'Tom', 'Ken', 'Arjun'], answer: 1 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: linking ideas',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Контраст: although, however, despite',
          body:
            '**although / even though + предложение** — хотя: *Although the light mode has fewer features, drivers can see their route.*\n' +
            '**however** — однако. Начинает **новое предложение**, после него ставится запятая: *It’s faster. However, there is a risk.*\n' +
            '**but** — но, внутри одного предложения: *It’s faster, but there is a risk.*\n' +
            '**despite / in spite of + существительное или -ing** — несмотря на: *Despite the cost, it’s worth it. Despite having fewer features, …*\n\n' +
            'Важно: после *despite* **не ставится предложение** (подлежащее + глагол). Говорят *Despite the rain*, а не *Despite it rains*.',
          pitfalls: [
            { wrong: 'Although it is fast, but it is risky.', right: 'Although it is fast, it is risky.', note: 'although и but вместе не ставят.' },
            { wrong: 'Despite it is expensive, …', right: 'Although it is expensive, … / Despite the cost, …' },
            { wrong: 'It is fast, however it is risky.', right: 'It is fast. However, it is risky.' },
          ],
        },
        {
          kind: 'theory',
          title: 'Причина, результат, цель, добавление',
          body:
            '**Причина**: *because + предложение* (because the bundle is big); *because of + существительное* (because of the bundle); *since / as + предложение* (since the bundle is 4 MB).\n' +
            '**Результат**: *so* (внутри предложения); *As a result, / Therefore,* (новое предложение).\n' +
            '**Цель**: *to / in order to + глагол* (in order to reduce memory); *so that + предложение* (so that old phones load less).\n' +
            '**Добавление**: *also, In addition, / Moreover,* (формально).\n' +
            '**Альтернатива или угроза**: *Otherwise,* — иначе.',
          table: [
            ['Значение', 'Связка + что дальше', 'Пример'],
            ['причина', 'because + clause', 'because the bundle **is** big'],
            ['причина', 'because of + noun', 'because of **the bundle**'],
            ['цель', 'in order to + verb', 'in order to **reduce** memory'],
            ['цель', 'so that + clause', 'so that phones **load** less'],
            ['контраст', 'although + clause', 'although it **has** fewer features'],
            ['контраст', 'despite + noun / -ing', 'despite **the cost**'],
            ['результат', 'As a result, + clause', 'As a result, drivers **can’t** use it.'],
          ],
          pitfalls: [
            { wrong: 'because of the bundle is big', right: 'because the bundle is big' },
            { wrong: 'for reduce memory', right: 'to reduce memory / in order to reduce memory' },
            { wrong: 'so that to load less', right: 'so that it loads less' },
          ],
        },
        { kind: 'choice', prompt: 'The app crashes ___ the big bundle.', options: ['because', 'because of', 'although', 'so that'], answer: 1 },
        { kind: 'choice', prompt: '___ the light mode has fewer features, it works.', options: ['Despite', 'However', 'Although', 'Because of'], answer: 2 },
        { kind: 'choice', prompt: "It's faster. ___, there is a risk.", options: ['Although', 'However', 'Despite', 'Because'], answer: 1 },
        { kind: 'choice', prompt: "We'll split the bundle ___ old phones load less code.", options: ['in order to', 'so that', 'because of', 'despite'], answer: 1 },
        { kind: 'choice', prompt: 'We use caching ___ reduce the load.', options: ['so that', 'in order to', 'because', 'although'], answer: 1 },
        { kind: 'choice', prompt: '___ the cost, the project is worth it.', options: ['Although', 'Despite', 'However', 'Because'], answer: 1 },
        { kind: 'choice', prompt: 'Fix it today. ___, the client will be angry.', options: ['Otherwise', 'However', 'Although', 'Despite'], answer: 0 },
        { kind: 'choice', prompt: 'The API was down. ___, the app showed errors.', options: ['Although', 'As a result', 'Despite', 'In order to'], answer: 1 },
        { kind: 'gap', text: 'We added caching ___ order to reduce the load.', answers: ['in'] },
        { kind: 'gap', text: '___ it was late, Ken fixed the server. (хотя)', answers: ['Although', 'Even though'] },
        { kind: 'gap', text: 'The release was delayed because ___ a bug.', answers: ['of'] },
        { kind: 'gap', text: 'Despite ___ (have) little time, we finished.', answers: ['having'] },
        { kind: 'gap', text: 'I wrote the docs so ___ new people can start faster.', answers: ['that'] },
        { kind: 'gap', text: 'The tests are slow. ___ , they are very useful. (Однако)', answers: ['However'] },
        { kind: 'gap', text: 'In ___ , we will update the monitoring. (Кроме того)', answers: ['addition'] },
        { kind: 'transform', instruction: 'Соедини с although', source: 'The map is beautiful. It is slow.', answers: ['Although the map is beautiful, it is slow.', 'The map is slow, although it is beautiful.', "Although the map is beautiful, it's slow."] },
        { kind: 'transform', instruction: 'Перепиши с despite', source: 'Although the budget was small, we finished on time.', answers: ['Despite the small budget, we finished on time.'] },
        { kind: 'transform', instruction: 'Перепиши с because of', source: 'The demo failed because the Wi-Fi was bad.', answers: ['The demo failed because of the bad Wi-Fi.'] },
        { kind: 'transform', instruction: 'Перепиши с so that', source: 'I recorded a video. The client can watch it later.', answers: ['I recorded a video so that the client can watch it later.', 'I recorded a video so that the client could watch it later.'] },
        { kind: 'fix', sentence: 'Although the API is fast, but the UI is slow.', answers: ['Although the API is fast, the UI is slow.', 'The API is fast, but the UI is slow.'] },
        { kind: 'fix', sentence: 'Despite it was raining, I went to the office.', answers: ['Although it was raining, I went to the office.', 'Despite the rain, I went to the office.', 'Even though it was raining, I went to the office.'] },
        { kind: 'fix', sentence: 'We cancelled the demo because of the client was sick.', answers: ['We cancelled the demo because the client was sick.'] },
        { kind: 'fix', sentence: 'I use a VPN for access the servers.', answers: ['I use a VPN to access the servers.', 'I use a VPN in order to access the servers.'] },
        { kind: 'fix', sentence: 'It is expensive, however we need it.', answers: ['It is expensive. However, we need it.', 'It is expensive; however, we need it.', 'It is expensive, but we need it.'] },
        { kind: 'order', words: ['However', ',', 'there', 'is', 'a', 'risk', '.'], ru: 'Однако есть риск.' },
        { kind: 'order', words: ['We', 'split', 'the', 'bundle', 'in', 'order', 'to', 'save', 'memory', '.'], ru: 'Мы разделили бандл, чтобы сэкономить память.' },
        { kind: 'order', words: ['Despite', 'the', 'cost', ',', "it's", 'worth', 'it', '.'], ru: 'Несмотря на стоимость, оно того стоит.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: proposals',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'proposal', ru: 'предложение (документ)', example: 'I wrote my first proposal.' },
            { chunk: 'reduce memory usage', ru: 'снизить потребление памяти', example: 'We want to reduce memory usage.' },
            { chunk: 'harder to maintain', ru: 'сложнее поддерживать', example: 'Two versions are harder to maintain.' },
            { chunk: "it's worth it", ru: 'оно того стоит', example: "It's expensive, but it's worth it." },
            { chunk: 'we risk losing', ru: 'мы рискуем потерять', example: 'Otherwise, we risk losing these users.' },
            { chunk: 'trade-offs', ru: 'компромиссы', example: 'Every solution has trade-offs.' },
            { chunk: 'benefit', ru: 'польза, выгода', example: 'The main benefit is stability.' },
            { chunk: 'drawback', ru: 'недостаток', example: 'The main drawback is the cost.' },
            { chunk: 'be able to', ru: 'быть в состоянии, смочь', example: 'Drivers will be able to see the route.' },
            { chunk: 'structure', ru: 'структура', example: 'Nice structure!' },
            { chunk: 'alternative', ru: 'альтернатива', example: 'We considered one alternative.' },
            { chunk: 'next steps', ru: 'следующие шаги', example: 'Next steps: estimate and plan.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['benefit', 'польза'],
            ['drawback', 'недостаток'],
            ['proposal', 'предложение (документ)'],
            ['alternative', 'альтернатива'],
            ['next steps', 'следующие шаги'],
          ],
        },
        { kind: 'gap', text: "It takes time, but it's ___ it.", answers: ['worth'] },
        { kind: 'gap', text: 'The main ___ of this approach is speed.', answers: ['benefit'] },
        { kind: 'gap', text: 'One ___ is that we need a second team.', answers: ['drawback'] },
        { kind: 'gap', text: 'Users will be ___ to work offline.', answers: ['able'] },
        { kind: 'gap', text: 'Otherwise, we ___ losing the client.', answers: ['risk'] },
        { kind: 'choice', prompt: 'Структура proposal:', options: ['Problem, Solution, Risks, Next steps', 'Hello, Goodbye', 'Only code', 'Jokes and memes'], answer: 0 },
        { kind: 'choice', prompt: '«Оно того стоит»:', options: ["It's worth it.", 'It costs it.', 'It is worthy.', 'It stands it.'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'The app crashes because of the big bundle.' },
        { kind: 'dictation', text: 'As a result, drivers cannot use it.' },
        { kind: 'dictation', text: 'We will build a light mode in order to reduce memory usage.' },
        { kind: 'dictation', text: 'However, there is a risk.' },
        { kind: 'dictation', text: 'Although it has fewer features, it works.' },
        { kind: 'dictation', text: "Despite the cost, it's worth it." },
        { kind: 'dictation', text: 'Otherwise, we risk losing these drivers.' },
        { kind: 'dictation', text: 'In addition, we will split the bundle.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: pitch an idea',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'The app crashes because of the big bundle.' },
        { kind: 'shadow', text: "We'll build a light mode in order to reduce memory usage." },
        { kind: 'shadow', text: 'However, two versions are harder to maintain.' },
        { kind: 'shadow', text: "Despite the cost, I think it's worth it." },
        {
          kind: 'speak',
          situation: 'Предложи улучшение для своего проекта за 30 секунд: проблема (because), решение (in order to), риск (however), итог (despite / it’s worth it).',
          keywords: ['because', 'in order to', 'however'],
          sample: "Our tests are slow because they run one by one. I suggest running them in parallel in order to save time. However, some tests may conflict. Despite that, I think it's worth it.",
        },
        {
          kind: 'speak',
          situation: 'Назови один плюс и один минус удалённой работы, соединив их although.',
          keywords: ['although'],
          sample: "Although remote work saves a lot of time, it's sometimes hard to stay in touch with the team.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: mini-proposal',
      minutes: 10,
      items: [
        {
          kind: 'write',
          task: 'Напиши мини-proposal (Problem / Solution / Risks / Next steps) для любого улучшения: например, ускорить CI, добавить тёмную тему, ввести e2e-тесты. Используй минимум 5 разных связок.',
          checklist: [
            'Причина: *because / because of / since*',
            'Цель: *in order to / so that*',
            'Контраст: *although / however / despite*',
            'Результат или добавление: *As a result / In addition / Otherwise*',
          ],
          minWords: 70,
          sample:
            "Proposal: parallel CI\nProblem: our CI takes 25 minutes because all tests run one by one. As a result, developers wait too long and switch context.\nSolution: we will split the tests into four groups in order to run them in parallel. In addition, we will cache dependencies so that each job starts faster.\nRisks: although parallel jobs are faster, they cost more. However, the cost is small compared to developer time. Otherwise, we will keep losing about an hour per person every day.\nNext steps: Ken estimates the cost, and I prepare a test run next sprint.",
        },
      ],
    },
  ],
};

export default lesson;
