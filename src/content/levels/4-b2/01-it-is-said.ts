import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-01',
  level: 'B2',
  title: 'Day 61: The new market is said to be huge',
  grammar: 'Impersonal passive: it is said that… / is said to…',
  scene: 'Клиент выходит на рынок Германии. Ты, уже техлид, готовишь первую оценку рисков.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: expansion rumours',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Strategy call',
          format: 'call',
          lines: [
            { who: 'Tom', text: "Big news: the client is planning to expand to Germany. The German market is said to be three times bigger than Poland." },
            { who: 'You', text: "Interesting. Do we know anything about the depots there?" },
            { who: 'Tom', text: "Not much. It is believed that most of them use an old SAP system. Their API is reported to be very slow." },
            { who: 'Arjun', text: "From the platform side: that system is known to drop events under load. Several companies are said to have had problems with it." },
            { who: 'You', text: "Then we should be careful. It's often claimed that integrations take two weeks, but in reality they take two months." },
            { who: 'Maya', text: "What about legal requirements?" },
            { who: 'Lena', text: "German labour law is thought to be stricter about tracking employees. Drivers' location may only be tracked during working hours." },
            { who: 'You', text: "OK. It is expected that the client will ask for an estimate soon. I'll prepare a risk overview by Friday." },
            { who: 'Maya', text: "Great. And remember: these are rumours, not facts. Please mark them clearly." },
          ],
        },
        { kind: 'choice', prompt: 'How big is the German market said to be?', options: ['The same as Poland', 'Three times bigger than Poland', 'Half of Poland', 'Nobody knows'], answer: 1 },
        { kind: 'choice', prompt: 'What is believed about German depots?', options: ['They use an old SAP system', 'They have no system', 'They use our app', 'They are closed'], answer: 0 },
        { kind: 'choice', prompt: 'What is the system known to do?', options: ['Drop events under load', 'Work perfectly', 'Use React', 'Delete data'], answer: 0 },
        { kind: 'choice', prompt: 'What is thought about German labour law?', options: ['It is stricter about tracking employees', 'It does not exist', 'It is the same as in Poland', 'It allows everything'], answer: 0 },
        { kind: 'choice', prompt: 'What does Maya ask you to do?', options: ['Mark rumours clearly', 'Ignore legal issues', 'Promise two weeks', 'Call SAP'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: reporting what people say',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Two structures',
          body:
            'When we report **general opinions, rumours or facts** without saying who exactly said them, we use impersonal passive structures. They are typical of reports, news and formal writing.\n\n' +
            '**1. It + passive verb + that + clause**\n*It is said that the market is huge.*\n*It is believed that most depots use SAP.*\n\n' +
            '**2. Subject + passive verb + to-infinitive**\n*The market **is said to be** huge.*\n*Their API **is reported to be** very slow.*\n\n' +
            'Common verbs: *say, believe, think, know, report, expect, claim, consider, understand, estimate*.',
          table: [
            ['Active', 'It … that', 'Subject … to'],
            ['People say the API is slow.', 'It is said that the API is slow.', 'The API **is said to be** slow.'],
            ['Experts expect prices to rise.', 'It is expected that prices will rise.', 'Prices **are expected to rise**.'],
            ['People know it drops events.', 'It is known that it drops events.', 'It **is known to drop** events.'],
          ],
        },
        {
          kind: 'theory',
          title: 'Talking about the past',
          body:
            'If the reported action happened **before** the moment of speaking, use the **perfect infinitive** (*to have + V3*):\n*Several companies **are said to have had** problems.* (They had problems in the past; people say it now.)\n*The system **is believed to have been** built in 2005.*\n\n' +
            'If the reporting happened in the past: *It **was** thought that… / He **was** reported to be…*\n\n' +
            'For an action **in progress**, use *to be + -ing*: *The client **is said to be planning** a new market.*',
          pitfalls: [
            { wrong: 'The market is said that it is huge.', right: 'The market is said to be huge. / It is said that the market is huge.' },
            { wrong: 'It is said the API to be slow.', right: 'The API is said to be slow.' },
            { wrong: 'They are said to have problems last year.', right: 'They are said to have had problems last year.' },
            { wrong: 'He is known as being difficult.', right: 'He is known to be difficult.' },
          ],
        },
        { kind: 'choice', prompt: 'The German market ___ three times bigger.', options: ['is said to be', 'is said that is', 'says to be', 'is saying to be'], answer: 0 },
        { kind: 'choice', prompt: 'It ___ that most depots use SAP.', options: ['believes', 'is believed', 'is believing', 'believed to'], answer: 1 },
        { kind: 'choice', prompt: 'Several companies are said ___ problems with it last year.', options: ['to have', 'to have had', 'having', 'to had'], answer: 1 },
        { kind: 'choice', prompt: 'Their API is reported ___ very slow.', options: ['being', 'to be', 'that is', 'be'], answer: 1 },
        { kind: 'choice', prompt: 'The client is said ___ a new market right now.', options: ['to plan', 'to be planning', 'planning', 'to have planned'], answer: 1 },
        { kind: 'choice', prompt: 'It ___ that the client will ask for an estimate soon.', options: ['expects', 'is expected', 'is expecting', 'expected to'], answer: 1 },
        { kind: 'choice', prompt: 'That system is known ___ events under load.', options: ['to drop', 'dropping', 'that drops', 'drop'], answer: 0 },
        { kind: 'gap', text: 'German law is thought ___ be stricter.', answers: ['to'] },
        { kind: 'gap', text: 'It is ___ (estimate) that the project will cost €2 million.', answers: ['estimated'] },
        { kind: 'gap', text: 'The old system is believed to have ___ (be) built in 2005.', answers: ['been'] },
        { kind: 'gap', text: 'It ___ (report) that the SAP API was down for two days last month.', answers: ['was reported', 'is reported'] },
        { kind: 'gap', text: 'The new CEO is ___ (know) to be very data-driven.', answers: ['known'] },
        { kind: 'gap', text: 'Integrations are often ___ (claim) to take two weeks.', answers: ['claimed'] },
        { kind: 'gap', text: 'The competitor is said to ___ (lose) several big clients last year.', answers: ['have lost'] },
        { kind: 'transform', instruction: 'Rewrite: Subject + is said to…', source: 'People say that the depots are very old.', answers: ['The depots are said to be very old.'] },
        { kind: 'transform', instruction: 'Rewrite: It is believed that…', source: 'People believe the market will grow.', answers: ['It is believed that the market will grow.'] },
        { kind: 'transform', instruction: 'Rewrite with perfect infinitive', source: 'People say that the competitor failed in Germany.', answers: ['The competitor is said to have failed in Germany.'] },
        { kind: 'transform', instruction: 'Rewrite: Subject + is expected to…', source: 'Experts expect that the client will expand next year.', answers: ['The client is expected to expand next year.'] },
        { kind: 'fix', sentence: 'The API is said that it is slow.', answers: ['The API is said to be slow.', 'It is said that the API is slow.'] },
        { kind: 'fix', sentence: 'It is believed the system to be old.', answers: ['The system is believed to be old.', 'It is believed that the system is old.'] },
        { kind: 'fix', sentence: 'They are reported to have problems in 2023.', answers: ['They are reported to have had problems in 2023.'] },
        { kind: 'fix', sentence: 'The client is said to plan a new market now.', answers: ['The client is said to be planning a new market now.'] },
        { kind: 'fix', sentence: 'It says that German law is stricter.', answers: ['It is said that German law is stricter.'] },
        { kind: 'order', words: ['The', 'market', 'is', 'said', 'to', 'be', 'huge', '.'], ru: 'Говорят, что рынок огромный.' },
        { kind: 'order', words: ['It', 'is', 'believed', 'that', 'they', 'use', 'SAP', '.'], ru: 'Считается, что они используют SAP.' },
        { kind: 'order', words: ['It', 'is', 'known', 'to', 'drop', 'events', '.'], ru: 'Известно, что он теряет события.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: market expansion',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'expand to', ru: 'расшириться на (рынок)', example: 'The client plans to expand to Germany.' },
            { chunk: 'market', ru: 'рынок', example: 'The German market is huge.' },
            { chunk: 'rumours', ru: 'слухи', example: 'These are rumours, not facts.' },
            { chunk: 'labour law', ru: 'трудовое право', example: 'German labour law is strict.' },
            { chunk: 'under load', ru: 'под нагрузкой', example: 'The system drops events under load.' },
            { chunk: 'risk overview', ru: 'обзор рисков', example: "I'll prepare a risk overview." },
            { chunk: 'in reality', ru: 'на самом деле', example: 'In reality, it takes two months.' },
            { chunk: 'working hours', ru: 'рабочие часы', example: 'Tracking only during working hours.' },
            { chunk: 'competitor', ru: 'конкурент', example: 'Our competitor failed in Germany.' },
            { chunk: 'due diligence', ru: 'комплексная проверка', example: 'We need technical due diligence.' },
            { chunk: 'stakeholders', ru: 'заинтересованные стороны', example: 'Inform all stakeholders.' },
            { chunk: 'mark them clearly', ru: 'чётко их пометить', example: 'Assumptions? Mark them clearly.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['due diligence', 'комплексная проверка'],
            ['stakeholders', 'заинтересованные стороны'],
            ['competitor', 'конкурент'],
            ['rumours', 'слухи'],
            ['labour law', 'трудовое право'],
          ],
        },
        { kind: 'gap', text: 'Before we sign, we need technical due ___ .', answers: ['diligence'] },
        { kind: 'gap', text: 'Please inform all ___ about the delay.', answers: ['stakeholders'] },
        { kind: 'gap', text: 'The API is slow under ___ .', answers: ['load'] },
        { kind: 'gap', text: 'The client wants to expand ___ Germany and Austria.', answers: ['to'] },
        { kind: 'gap', text: 'In ___ , integrations take much longer.', answers: ['reality'] },
        { kind: 'choice', prompt: 'How to mark unconfirmed information in a report?', options: ['It is reported that… (unconfirmed)', 'It is 100% true that…', 'Everybody knows…', 'Obviously…'], answer: 0 },
        { kind: 'choice', prompt: 'Formal way to say "people think":', options: ['It is thought that…', 'People are thinking…', 'Thinks are that…', 'It thinks…'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'The German market is said to be three times bigger.' },
        { kind: 'dictation', text: 'It is believed that most of them use an old system.' },
        { kind: 'dictation', text: 'Their API is reported to be very slow.' },
        { kind: 'dictation', text: 'Several companies are said to have had problems with it.' },
        { kind: 'dictation', text: 'German labour law is thought to be stricter.' },
        { kind: 'dictation', text: 'It is expected that the client will ask for an estimate.' },
        { kind: 'dictation', text: 'These are rumours, not facts.' },
        { kind: 'dictation', text: 'We need technical due diligence.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: report rumours professionally',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'The German market is said to be three times bigger than Poland.' },
        { kind: 'shadow', text: 'It is believed that most depots use an old SAP system.' },
        { kind: 'shadow', text: 'Several companies are said to have had problems with it.' },
        { kind: 'shadow', text: 'These are rumours, not facts, so I have marked them clearly.' },
        {
          kind: 'speak',
          situation: 'Report three things "people say" about a technology or company (e.g. a new framework), without naming sources.',
          keywords: ['is said to', 'it is believed that', 'is known to'],
          sample: "The new framework is said to be twice as fast as React. It is believed that big companies will adopt it soon. However, it is known to have a small community.",
        },
        {
          kind: 'speak',
          situation: 'Tell your manager about a rumour from the past and say it still needs to be checked.',
          keywords: ['is said to have', 'need to check'],
          sample: "Our competitor is said to have lost three clients last year because of outages. We still need to check whether it's true.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: risk overview',
      minutes: 10,
      items: [
        {
          kind: 'write',
          task: 'Write the first part of a risk overview for the German expansion: market, technical and legal risks. Mark unconfirmed information with impersonal passive structures.',
          checklist: [
            '*It is said / believed / reported that…*',
            '*X is said / thought / known to…*',
            'Perfect infinitive for the past (*to have had*)',
            'Clear separation of facts and rumours',
          ],
          minWords: 70,
          sample:
            "Germany expansion: initial risk overview\nMarket: the German market is said to be three times bigger than Poland, and the client is expected to ask for an estimate soon (unconfirmed).\nTechnical: it is believed that most depots use an old SAP system. Its API is reported to be very slow and is known to drop events under load. Several companies are said to have had serious integration problems.\nLegal: German labour law is thought to be stricter about tracking employees. It is understood that location may only be tracked during working hours.\nNext step: technical due diligence with one pilot depot.",
        },
      ],
    },
  ],
};

export default lesson;
