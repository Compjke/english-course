import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-04',
  level: 'B2',
  title: 'Day 64: Having analysed the logs, we…',
  grammar: 'Participle clauses: -ing, having done, done (past participle)',
  scene: 'Ты пишешь техническое заключение по кэшу: коротко и профессионально.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: tightening the text',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Doc review with Arjun',
          format: 'doc',
          lines: [
            { who: 'You', text: "Draft: 'After we analysed the logs, we found that 70% of requests repeat. Because we wanted to reduce latency, we added a cache.'" },
            { who: 'Arjun', text: "Good content, but it's a bit long. Try participle clauses: 'Having analysed the logs, we found that 70% of requests repeat.'" },
            { who: 'You', text: "Ah, nice. And: 'Wanting to reduce latency, we added a cache.'" },
            { who: 'Arjun', text: "Exactly. And this one: 'The cache, which is built on Redis, stores routes for 24 hours.'" },
            { who: 'You', text: "'Built on Redis, the cache stores routes for 24 hours.'" },
            { who: 'Arjun', text: "Perfect. Last one: 'When it receives a new route, the service invalidates the old entry.'" },
            { who: 'You', text: "'Receiving a new route, the service invalidates the old entry.' Or 'On receiving'?" },
            { who: 'Arjun', text: "Both work. Just be careful: the subject of both parts must be the same. Otherwise it sounds funny." },
          ],
        },
        { kind: 'choice', prompt: 'What percentage of requests repeat?', options: ['7%', '17%', '70%', '100%'], answer: 2 },
        { kind: 'choice', prompt: 'What is the cache built on?', options: ['Postgres', 'Redis', 'Kafka', 'SAP'], answer: 1 },
        { kind: 'choice', prompt: 'How long are routes stored?', options: ['1 hour', '24 hours', 'A week', 'Forever'], answer: 1 },
        { kind: 'choice', prompt: 'What does the service do when it receives a new route?', options: ['Invalidates the old entry', 'Deletes everything', 'Calls the depot', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: "What is Arjun's warning?", options: ['The subject of both parts must be the same', 'Never use participles', 'Use only passive', 'Write longer sentences'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: participle clauses',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Shorter, more formal sentences',
          body:
            'Participle clauses replace a full clause (*when / because / after / which…* + subject + verb). They make writing **shorter and more formal**, which is perfect for reports and documentation.\n\n' +
            '**Present participle (-ing)** — same time or reason (active):\n*When it receives a route, the service…* → ***Receiving** a route, the service…*\n*Because we wanted to reduce latency, we…* → ***Wanting** to reduce latency, we…*\n\n' +
            '**Perfect participle (having + V3)** — an action **before** the main one:\n*After we had analysed the logs, we found…* → ***Having analysed** the logs, we found…*\n\n' +
            '**Past participle (V3)** — passive meaning:\n*The cache, which is built on Redis, stores…* → ***Built** on Redis, the cache stores…*\n*Data that is stored in the EU…* → *Data **stored** in the EU…*',
          table: [
            ['Full clause', 'Participle clause'],
            ['When it receives a route, …', '**Receiving** a route, …'],
            ['After we had tested it, …', '**Having tested** it, …'],
            ['The service, which was written in Go, …', '**Written** in Go, the service …'],
            ['Users who use old phones …', 'Users **using** old phones …'],
            ['Logs that are older than 30 days …', 'Logs **older** than 30 days … / Logs **stored** for 30 days …'],
          ],
        },
        {
          kind: 'theory',
          title: 'The same-subject rule',
          body:
            'The participle clause and the main clause must have **the same subject**. Otherwise you get a "dangling participle", which sounds funny:\n\n' +
            '✗ *Having analysed the logs, the cache was added.* (The cache analysed the logs?)\n✓ *Having analysed the logs, **we** added a cache.*\n\n' +
            'Negative: put **not** before the participle: ***Not having** access, we couldn’t see the logs.*',
          pitfalls: [
            { wrong: 'Having finished the tests, the app was deployed.', right: 'Having finished the tests, we deployed the app.' },
            { wrong: 'Built on Redis, we store routes.', right: 'Built on Redis, the cache stores routes.' },
            { wrong: 'Having not access, we waited.', right: 'Not having access, we waited.' },
            { wrong: 'After analysed the logs, we…', right: 'After analysing the logs, we… / Having analysed the logs, we…' },
          ],
        },
        { kind: 'choice', prompt: '___ the logs, we found that 70% of requests repeat.', options: ['Analysed', 'Having analysed', 'Have analysed', 'To analyse'], answer: 1 },
        { kind: 'choice', prompt: '___ on Redis, the cache stores routes for 24 hours.', options: ['Building', 'Built', 'Having build', 'Builds'], answer: 1 },
        { kind: 'choice', prompt: '___ to reduce latency, we added a cache.', options: ['Wanted', 'Wanting', 'Want', 'Having want'], answer: 1 },
        { kind: 'choice', prompt: '___ a new route, the service invalidates the old entry.', options: ['Received', 'Receiving', 'Receive', 'To receive'], answer: 1 },
        { kind: 'choice', prompt: 'Which sentence is correct?', options: ['Having tested the app, it was released.', 'Having tested the app, we released it.', 'Tested the app, we released it.', 'Having test the app, we released it.'], answer: 1 },
        { kind: 'choice', prompt: '___ access to the logs, we could not find the cause.', options: ['Not having', 'Having not', 'No having', "Don't having"], answer: 0 },
        { kind: 'choice', prompt: 'Drivers ___ old phones see a simpler map.', options: ['used', 'using', 'uses', 'to use'], answer: 1 },
        { kind: 'choice', prompt: 'Data ___ in the EU is protected by GDPR.', options: ['storing', 'stored', 'stores', 'having stored'], answer: 1 },
        { kind: 'gap', text: '___ (finish) the migration, Ken went on holiday.', answers: ['Having finished'] },
        { kind: 'gap', text: '___ (write) in 2005, the depot system is hard to change.', answers: ['Written'] },
        { kind: 'gap', text: '___ (know) the risks, we added a kill switch.', answers: ['Knowing'] },
        { kind: 'gap', text: 'Requests ___ (send) after midnight go to the backup server.', answers: ['sent'] },
        { kind: 'gap', text: '___ (not / know) German, I asked Tom to translate.', answers: ['Not knowing'] },
        { kind: 'gap', text: 'Developers ___ (work) on the cache should read this.', answers: ['working'] },
        { kind: 'gap', text: 'Having ___ (receive) the approval, we started the work.', answers: ['received'] },
        { kind: 'transform', instruction: 'Use a perfect participle', source: 'After we had tested the cache, we deployed it.', answers: ['Having tested the cache, we deployed it.'] },
        { kind: 'transform', instruction: 'Use a past participle', source: 'The service, which was designed by Arjun, handles 50,000 events.', answers: ['Designed by Arjun, the service handles 50,000 events.'] },
        { kind: 'transform', instruction: 'Use a present participle', source: 'Because I wanted to help Nina, I stayed late.', answers: ['Wanting to help Nina, I stayed late.'] },
        { kind: 'transform', instruction: 'Shorten with a participle', source: 'Drivers who use Android 9 see a list instead of a map.', answers: ['Drivers using Android 9 see a list instead of a map.'] },
        { kind: 'fix', sentence: 'Having read the report, the decision was made.', answers: ['Having read the report, we made the decision.', 'Having read the report, the team made the decision.'] },
        { kind: 'fix', sentence: 'Having not time, we skipped the demo.', answers: ['Not having time, we skipped the demo.', 'Not having enough time, we skipped the demo.'] },
        { kind: 'fix', sentence: 'Building in 2020, the service is old.', answers: ['Built in 2020, the service is old.'] },
        { kind: 'fix', sentence: 'Having finish the work, I went home.', answers: ['Having finished the work, I went home.'] },
        { kind: 'fix', sentence: 'Logs storing in the EU are safe.', answers: ['Logs stored in the EU are safe.'] },
        { kind: 'order', words: ['Having', 'analysed', 'the', 'logs', ',', 'we', 'added', 'a', 'cache', '.'], ru: 'Проанализировав логи, мы добавили кэш.' },
        { kind: 'order', words: ['Built', 'on', 'Redis', ',', 'it', 'is', 'fast', '.'], ru: 'Построенный на Redis, он быстрый.' },
        { kind: 'order', words: ['Not', 'having', 'access', ',', 'we', 'waited', '.'], ru: 'Не имея доступа, мы ждали.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: technical writing',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'concise', ru: 'краткий, ёмкий', example: 'Technical writing should be concise.' },
            { chunk: 'requests repeat', ru: 'запросы повторяются', example: '70% of requests repeat.' },
            { chunk: 'entry', ru: 'запись (в кэше)', example: 'The service invalidates the old entry.' },
            { chunk: 'cache hit rate', ru: 'доля попаданий в кэш', example: 'The cache hit rate is 70%.' },
            { chunk: 'TTL', ru: 'время жизни записи', example: 'The TTL is 24 hours.' },
            { chunk: 'findings', ru: 'выводы', example: 'Our findings are below.' },
            { chunk: 'conclusion', ru: 'заключение', example: 'Conclusion: the cache works.' },
            { chunk: 'it sounds funny', ru: 'звучит смешно', example: 'Otherwise it sounds funny.' },
            { chunk: 'tighten the text', ru: 'сократить текст, сделать плотнее', example: "Let's tighten the text." },
            { chunk: 'wordy', ru: 'многословный', example: 'This paragraph is too wordy.' },
            { chunk: 'outcome', ru: 'результат', example: 'The outcome was positive.' },
            { chunk: 'reduce latency', ru: 'снизить задержку', example: 'We want to reduce latency.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['concise', 'краткий'],
            ['wordy', 'многословный'],
            ['TTL', 'время жизни записи'],
            ['outcome', 'результат'],
            ['entry', 'запись'],
          ],
        },
        { kind: 'gap', text: 'The cache hit ___ is 70%.', answers: ['rate'] },
        { kind: 'gap', text: 'This paragraph is too ___ . Make it shorter.', answers: ['wordy'] },
        { kind: 'gap', text: 'We set the ___ to 24 hours.', answers: ['TTL'] },
        { kind: 'gap', text: "Let's tighten the ___ before we send it.", answers: ['text'] },
        { kind: 'gap', text: 'Good technical writing is clear and ___ .', answers: ['concise'] },
        { kind: 'choice', prompt: 'Which sentence is the most concise?', options: ['Having tested it, we deployed it.', 'After the moment when we had finished testing it, we then deployed it.', 'We tested, after that we did the deploy of it.', 'It was tested and then we deployed it after.'], answer: 0 },
        { kind: 'choice', prompt: '"Cache hit rate" is…', options: ['the share of requests answered from the cache', 'the speed of the cache', 'cache errors', 'the size of the cache'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'Having analysed the logs, we found that most requests repeat.' },
        { kind: 'dictation', text: 'Wanting to reduce latency, we added a cache.' },
        { kind: 'dictation', text: 'Built on Redis, the cache stores routes for 24 hours.' },
        { kind: 'dictation', text: 'Receiving a new route, the service invalidates the old entry.' },
        { kind: 'dictation', text: 'Not having access, we could not see the logs.' },
        { kind: 'dictation', text: 'Drivers using old phones see a simpler map.' },
        { kind: 'dictation', text: 'The cache hit rate is seventy percent.' },
        { kind: 'dictation', text: "Let's tighten the text." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: sound professional',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'Having analysed the logs, we found that 70% of requests repeat.' },
        { kind: 'shadow', text: 'Built on Redis, the cache stores routes for 24 hours.' },
        { kind: 'shadow', text: 'Wanting to reduce latency, we added a cache.' },
        { kind: 'shadow', text: 'Not having access, we could not see the logs.' },
        {
          kind: 'speak',
          situation: 'Describe what you did last week in a project, starting two sentences with participle clauses.',
          keywords: ['having finished', 'knowing'],
          sample: 'Having finished the API integration, I started on the cache. Knowing the deadline was close, I asked Nina to help with the tests.',
        },
        {
          kind: 'speak',
          situation: 'Describe a system or tool using a past participle clause (built / written / designed…).',
          keywords: ['built', 'written'],
          sample: 'Written in Go and built on Kafka, our event bus handles 50,000 events a minute. Designed by Arjun, it has never lost a message.',
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: technical summary',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a short technical summary of the route cache (analysis, solution, how it works, results). Use at least four participle clauses.',
          checklist: [
            'Perfect participle (*Having…*)',
            'Present participle (*-ing*)',
            'Past participle (*Built / Stored…*)',
            'Same subject in both parts',
          ],
          minWords: 55,
          sample:
            "Route cache: technical summary\nHaving analysed two weeks of logs, we found that 70% of route requests repeat. Wanting to reduce latency, we added a cache on our side. Built on Redis, the cache stores routes for 24 hours. Receiving a new route from a depot, the service invalidates the old entry. Drivers using the German depots now get their routes in under one second instead of eight.",
        },
      ],
    },
  ],
};

export default lesson;
