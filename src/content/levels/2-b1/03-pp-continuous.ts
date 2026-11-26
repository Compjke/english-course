import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-03',
  level: 'B1',
  title: "Day 18: I've been debugging all morning",
  grammar: 'Present Perfect Continuous',
  scene: 'Ты всё утро воюешь с медленной картой. Arjun предлагает помощь.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the slow map',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Huddle with Arjun',
          format: 'call',
          lines: [
            { who: 'Arjun', text: 'You look tired. What have you been doing?' },
            { who: 'You', text: "I've been debugging the map all morning. It freezes when there are more than 500 markers." },
            { who: 'Arjun', text: 'How long have you been trying to fix it?' },
            { who: 'You', text: "Since nine. I've been reading the Mapbox docs, and I've tried three different approaches." },
            { who: 'Arjun', text: 'Have you found anything?' },
            { who: 'You', text: "I've found one problem: we re-render all markers on every update. I've already fixed that, but it's still slow." },
            { who: 'Arjun', text: "Have you been using the clustering option? It groups nearby markers. We've been using it in the admin app for a year." },
            { who: 'You', text: "No! I haven't heard about it. That sounds like exactly what I need." },
            { who: 'Arjun', text: "Try it. And take a break. You've been staring at the screen for three hours." },
            { who: 'You', text: "Good idea. I've been drinking coffee instead of eating, too." },
          ],
        },
        { kind: 'choice', prompt: 'What have you been doing all morning?', options: ['Writing tests', 'Debugging the map', 'Reading emails', 'In meetings'], answer: 1 },
        { kind: 'choice', prompt: 'When does the map freeze?', options: ['With more than 500 markers', 'On mobile', 'At night', 'With no internet'], answer: 0 },
        { kind: 'choice', prompt: 'What problem have you already fixed?', options: ['Clustering', 'Re-rendering all markers on every update', 'The API', 'The colours'], answer: 1 },
        { kind: 'choice', prompt: 'What does Arjun suggest?', options: ['Using clustering and taking a break', 'Rewriting the app', 'Asking Ken', 'Removing the map'], answer: 0 },
        { kind: 'choice', prompt: 'How long have they used clustering in the admin app?', options: ['Since nine', 'For a year', 'For three hours', 'Never'], answer: 1 },
        {
          kind: 'choice',
          prompt: '«I’ve **been debugging** all morning» vs «I’ve **tried** three approaches». В чём разница?',
          options: ['Первое — процесс и длительность, второе — результат и количество', 'Никакой разницы', 'Первое — прошлое, второе — будущее', 'Второе — ошибка'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: Present Perfect Continuous',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Форма и смысл',
          body:
            '**have / has been + V-ing**: *I’ve been debugging. She’s been working.*\n\n' +
            'Используется, когда важен **процесс и его длительность** до настоящего момента:\n**действие длится до сих пор**: *I’ve been trying to fix it since nine* (и всё ещё пытаюсь);\n**действие только что закончилось, и видны следы**: *You look tired. What have you been doing?* (видно по тебе).\n\n' +
            'Вопрос: *How long have you been working on it?* Отрицание: *I haven’t been sleeping well.*',
          examples: ["I've been debugging the map all morning.", 'How long have you been waiting?', "It's been raining, the streets are wet.", "We've been using clustering for a year."],
        },
        {
          kind: 'theory',
          title: 'Simple или Continuous?',
          body:
            '**Present Perfect Simple** отвечает на вопрос **сколько / что сделано** (результат, количество): *I’ve fixed two bugs. I’ve read the docs* (прочитал полностью).\n' +
            '**Present Perfect Continuous** отвечает на вопрос **как долго / чем занимался** (процесс): *I’ve been fixing bugs all day. I’ve been reading the docs* (читал, может, не дочитал).\n\n' +
            'С числами и количеством (*three approaches, two bugs, 50 pages*) нужен **Simple**. С *all day, all morning, for hours* естественнее **Continuous**.\n\n' +
            'Глаголы состояния (*know, have* — «владеть», *like, understand, believe*) в Continuous не ставят: *I’ve known him for years*, а не *I’ve been knowing*.',
          table: [
            ['Simple (результат)', 'Continuous (процесс)'],
            ["I've **written** three tests.", "I've **been writing** tests all day."],
            ["She's **read** the spec.", "She's **been reading** the spec since lunch."],
            ['How many PRs **have** you **reviewed**?', 'How long **have** you **been reviewing**?'],
          ],
          pitfalls: [
            { wrong: "I've been fixing three bugs today.", right: "I've fixed three bugs today.", note: 'Количество: Simple.' },
            { wrong: "I've been knowing Arjun for years.", right: "I've known Arjun for years." },
            { wrong: 'I am debugging since nine.', right: "I've been debugging since nine." },
            { wrong: 'How long are you waiting?', right: 'How long have you been waiting?' },
          ],
        },
        { kind: 'choice', prompt: "I ___ the map since nine. I'm still on it.", options: ['debug', 'have been debugging', 'debugged', 'am debugging since'], answer: 1 },
        { kind: 'choice', prompt: "I ___ three different approaches.", options: ['have been trying', 'have tried', 'am trying', 'tried yet'], answer: 1 },
        { kind: 'choice', prompt: 'How long ___ for the build?', options: ['are you waiting', 'have you been waiting', 'did you wait', 'you have waited'], answer: 1 },
        { kind: 'choice', prompt: "I ___ Lena since my first day.", options: ['have been knowing', 'have known', 'know', 'am knowing'], answer: 1 },
        { kind: 'choice', prompt: "Your eyes are red. ___ at the screen all day?", options: ['Have you stared', 'Have you been staring', 'Did you stare', 'Are you staring since'], answer: 1 },
        { kind: 'choice', prompt: "How many PRs ___ today?", options: ['have you been reviewing', 'have you reviewed', 'are you reviewing', 'did you reviewed'], answer: 1 },
        { kind: 'choice', prompt: "We ___ this library for a year. It's stable.", options: ['have been using', 'are using', 'use since', 'used for'], answer: 0 },
        { kind: 'gap', text: "I ___ (read) the docs all morning, and I'm only on page 20.", answers: ["'ve been reading", 'have been reading'] },
        { kind: 'gap', text: 'She ___ (write) five test cases today.', answers: ["'s written", 'has written'] },
        { kind: 'gap', text: 'How long ___ you been working on this ticket?', answers: ['have'] },
        { kind: 'gap', text: "The CI ___ (fail) randomly for a week. We need to fix it.", answers: ["'s been failing", 'has been failing'] },
        { kind: 'gap', text: "Sorry I'm late! ___ you been waiting long?", answers: ['Have'] },
        { kind: 'gap', text: "Ken ___ (not / sleep) well since the incident.", answers: ["hasn't been sleeping", 'has not been sleeping'] },
        { kind: 'gap', text: "We've been ___ (talk) about this refactoring for months.", answers: ['talking'] },
        { kind: 'transform', instruction: 'Перепиши в Present Perfect Continuous с for', source: 'I started waiting for the review two days ago. I am still waiting.', answers: ["I've been waiting for the review for two days.", 'I have been waiting for the review for two days.'] },
        { kind: 'transform', instruction: 'Задай вопрос How long…?', source: 'Arjun has been working on the API **since Monday**.', answers: ['How long has Arjun been working on the API?'] },
        { kind: 'transform', instruction: 'Перепиши про результат (Simple), используй число', source: "I've been fixing bugs all day. (4 bugs)", answers: ["I've fixed four bugs today.", 'I have fixed four bugs today.', "I've fixed 4 bugs today.", "I've fixed four bugs."] },
        { kind: 'fix', sentence: "I'm working here since January.", answers: ["I've been working here since January.", 'I have been working here since January.', "I've worked here since January."] },
        { kind: 'fix', sentence: "I've been writing ten tests today.", answers: ["I've written ten tests today.", 'I have written ten tests today.'] },
        { kind: 'fix', sentence: 'How long are you learning English?', answers: ['How long have you been learning English?'] },
        { kind: 'fix', sentence: "She has been knowing the client for years.", answers: ['She has known the client for years.', "She's known the client for years."] },
        { kind: 'fix', sentence: "We have been use Jira for five years.", answers: ['We have been using Jira for five years.', "We've been using Jira for five years."] },
        { kind: 'order', words: ['What', 'have', 'you', 'been', 'doing', '?'], ru: 'Чем ты занимался (всё это время)?' },
        { kind: 'order', words: ["I've", 'been', 'debugging', 'all', 'morning', '.'], ru: 'Я всё утро отлаживаю.' },
        { kind: 'order', words: ['How', 'long', 'have', 'you', 'been', 'waiting', '?'], ru: 'Как долго ты ждёшь?' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: performance',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'freezes', ru: 'зависает', example: 'The map freezes with 500 markers.' },
            { chunk: 're-render', ru: 'перерисовывать', example: 'We re-render all markers on every update.' },
            { chunk: 'clustering', ru: 'группировка (кластеризация)', example: 'Try the clustering option.' },
            { chunk: 'approaches', ru: 'подходы', example: "I've tried three approaches." },
            { chunk: 'performance', ru: 'производительность', example: 'The performance is bad on mobile.' },
            { chunk: 'bottleneck', ru: 'узкое место', example: 'The API is not the bottleneck.' },
            { chunk: 'take a break', ru: 'сделать перерыв', example: 'Take a break and come back later.' },
            { chunk: 'staring at the screen', ru: 'пялиться в экран', example: "You've been staring at the screen for hours." },
            { chunk: 'exactly what I need', ru: 'именно то, что нужно', example: 'That sounds like exactly what I need.' },
            { chunk: 'profiler', ru: 'профилировщик', example: 'Open the profiler in DevTools.' },
            { chunk: 'nearby', ru: 'рядом, поблизости', example: 'It groups nearby markers.' },
            { chunk: 'instead of', ru: 'вместо', example: "I've been drinking coffee instead of eating." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['bottleneck', 'узкое место'],
            ['freeze', 'зависать'],
            ['performance', 'производительность'],
            ['instead of', 'вместо'],
            ['nearby', 'поблизости'],
          ],
        },
        { kind: 'gap', text: 'The database is the ___ , not the frontend.', answers: ['bottleneck'] },
        { kind: 'gap', text: 'Use the ___ in DevTools to find slow functions.', answers: ['profiler'] },
        { kind: 'gap', text: "You've been working for five hours. Take a ___ !", answers: ['break'] },
        { kind: 'gap', text: 'We use Vite instead ___ Webpack now.', answers: ['of'] },
        { kind: 'gap', text: 'The app ___ when I open the big report.', answers: ['freezes'] },
        { kind: 'choice', prompt: 'Совет от коллеги «отдохни»:', options: ['Take a break.', 'Make a break.', 'Do a pause.', 'Have a stop.'], answer: 0 },
        { kind: 'choice', prompt: 'Группировка близких маркеров на карте:', options: ['clustering', 'grouping up', 'gathering', 'collecting'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'What have you been doing?' },
        { kind: 'dictation', text: "I've been debugging the map all morning." },
        { kind: 'dictation', text: 'How long have you been trying to fix it?' },
        { kind: 'dictation', text: "I've tried three different approaches." },
        { kind: 'dictation', text: "We've been using it for a year." },
        { kind: 'dictation', text: 'Take a break.' },
        {
          kind: 'theory',
          title: 'been: слабая форма',
          body: 'В *have been doing* слово *been* звучит коротко, [bɪn], а не [biːn]: *I’ve been* ≈ «айв бин». Вся конструкция произносится очень быстро: *How long have you been waiting?* ≈ «хау лонг эв ю бин уэйтин».',
        },
        { kind: 'dictation', text: "She's been working on it since Monday." },
        { kind: 'dictation', text: "The CI has been failing for a week." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: what have you been doing?',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "I've been debugging the map all morning." },
        { kind: 'shadow', text: 'How long have you been working on it?' },
        { kind: 'shadow', text: "I've tried three approaches, but it's still slow." },
        { kind: 'shadow', text: "You've been staring at the screen for three hours." },
        {
          kind: 'speak',
          situation: 'Maya спрашивает: «What have you been working on this week?» Расскажи про процесс (чем занимался) и про результат (что готово).',
          keywords: ["I've been working on", "I've finished"],
          sample: "I've been working on the map performance this week. I've finished the clustering, and I've fixed two rendering bugs.",
        },
        {
          kind: 'speak',
          situation: 'Ты долго ждёшь ревью своего PR. Вежливо напомни коллеге, сколько уже ждёшь.',
          keywords: ["I've been waiting", 'for'],
          sample: "Hi Arjun, sorry to bother you. I've been waiting for a review for two days. Could you have a look today?",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: end-of-day note',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши итог дня в Slack: чем ты занимался(лась) (процесс), что конкретно сделано (результат с числами) и что пока не готово.',
          checklist: [
            'Present Perfect Continuous для процесса (*I’ve been…*)',
            'Present Perfect Simple для результата с числами',
            '*since / for / all day*',
            'Есть план на завтра',
          ],
          minWords: 40,
          sample:
            "End of day: I've been working on the map performance all day. I've found the main problem, we re-rendered every marker on each update, and I've fixed it. I've also added clustering, so we can now show 5,000 markers without freezing. I haven't tested it on mobile yet. Tomorrow I'm going to test it on two phones and open a PR.",
        },
      ],
    },
  ],
};

export default lesson;
