import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1p-03',
  level: 'B1+',
  title: "Day 43: If we'd chosen React Native…",
  grammar: 'Mixed conditionals',
  scene: 'Старт driver app. Команда спорит: правильным ли был выбор технологий год назад.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the tech choice',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Driver app kick-off',
          format: 'call',
          lines: [
            { who: 'Maya', text: "Welcome to the driver app kick-off! First question: do we build on our existing web stack or go native?" },
            { who: 'Arjun', text: "Honestly, if we had chosen React Native for the light mode last year, we would already have a mobile codebase now." },
            { who: 'You', text: "True, but if we had gone native back then, we wouldn't be so fast on the web today. The web skills helped a lot." },
            { who: 'Ken', text: "If I were more experienced with mobile CI, I would have pushed for native earlier. But I'm not." },
            { who: 'Sofia', text: "If drivers weren't so happy with the web version, we wouldn't have got this project at all." },
            { who: 'Maya', text: "Good points. The past is the past. What do we choose now?" },
            { who: 'You', text: "I'd go with React Native. We know React, and it would let us share some code with the web app." },
            { who: 'Arjun', text: "Agreed. And if Nina, our intern, hadn't built that React Native prototype last month, I wouldn't feel so confident now." },
            { who: 'Maya', text: "Great, decision made: React Native. Alex, you'll lead the frontend architecture." },
          ],
        },
        { kind: 'choice', prompt: 'What would they have now if they had chosen React Native last year?', options: ['A mobile codebase', 'More money', 'A new designer', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: "Why are they fast on the web today?", options: ["They didn't go native back then", 'They hired more people', 'They use Java', 'Luck'], answer: 0 },
        { kind: 'choice', prompt: 'Why did they get this project?', options: ['Drivers are happy with the web version', 'They were cheap', 'Maya asked', 'Random'], answer: 0 },
        { kind: 'choice', prompt: 'What did Nina build last month?', options: ['A React Native prototype', 'A backend', 'A design system', 'A CI pipeline'], answer: 0 },
        { kind: 'choice', prompt: 'What is decided?', options: ['Native iOS only', 'React Native, and you lead the frontend architecture', 'No mobile app', 'Flutter'], answer: 1 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: mixing time in conditionals',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Past condition → present result',
          body:
            'Sometimes a **past** situation (that did not happen) changes the **present**. Then we mix the Third and the Second Conditional:\n\n' +
            '**If + Past Perfect, would + infinitive (now)**\n*If we **had chosen** React Native last year, we **would** already **have** a mobile codebase **now**.*\n(We didn’t choose it then, so we don’t have it now.)\n\n' +
            'Signal words: *now, today, already, still* in the result part.',
          examples: ["If we had gone native, we wouldn't be so fast on the web today.", "If Nina hadn't built the prototype, I wouldn't feel so confident now."],
        },
        {
          kind: 'theory',
          title: 'Present condition → past result',
          body:
            'The other mix: a **present or permanent** situation explains a **past** result:\n\n' +
            '**If + Past Simple (general truth), would have + V3 (past)**\n*If I **were** more experienced with mobile CI, I **would have pushed** for native earlier.*\n(I am not experienced — in general — so I didn’t push.)\n\n' +
            '*If drivers **weren’t** so happy, we **wouldn’t have got** this project.*',
          table: [
            ['Type', 'Pattern', 'Example'],
            ['past → present', 'If + had V3, would + V', 'If I **had learned** Kotlin, I **would be** on the Android team now.'],
            ['present → past', 'If + V2, would have + V3', "If I **were** braver, I **would have spoken** at the meeting."],
            ['Third (past → past)', 'If + had V3, would have V3', 'If I **had known**, I **would have told** you.'],
            ['Second (present → present)', 'If + V2, would + V', 'If I **knew**, I**’d tell** you.'],
          ],
          pitfalls: [
            { wrong: 'If we had chosen it, we would have a codebase yesterday.', right: 'If we had chosen it, we would have a codebase now.' },
            { wrong: 'If I would have learned Kotlin, I would be…', right: 'If I had learned Kotlin, I would be…' },
            { wrong: 'If I was more experienced, I would push for it last year.', right: 'If I were more experienced, I would have pushed for it last year.' },
          ],
        },
        { kind: 'choice', prompt: 'If we had chosen React Native last year, we ___ a mobile codebase now.', options: ['would have had', 'would have', 'had', 'will have'], answer: 1 },
        { kind: 'choice', prompt: "If I ___ more experienced, I would have pushed for native earlier.", options: ['had been', 'were', 'would be', 'am'], answer: 1 },
        { kind: 'choice', prompt: "If Nina hadn't built the prototype, I ___ so confident now.", options: ["wouldn't have felt", "wouldn't feel", "didn't feel", "won't feel"], answer: 1 },
        { kind: 'choice', prompt: "If drivers weren't so happy, we ___ this project.", options: ["wouldn't get", "wouldn't have got", "didn't get", "hadn't got"], answer: 1 },
        { kind: 'choice', prompt: 'If I had learned Kotlin at university, I ___ on the Android team today.', options: ['would have been', 'would be', 'was', 'had been'], answer: 1 },
        { kind: 'choice', prompt: 'Which sentence is past → present?', options: ['If I had slept more, I would feel better now.', 'If I had slept more, I would have passed.', 'If I slept more, I would feel better.', 'If I sleep more, I will feel better.'], answer: 0 },
        { kind: 'choice', prompt: "If she ___ afraid of flying, she would have come to the conference.", options: ["hadn't been", "weren't", "isn't", "wouldn't be"], answer: 1, explain: 'She is afraid of flying in general (present), so she didn’t come (past).' },
        { kind: 'gap', text: 'If we ___ (not / go) native, we would be faster today.', answers: ["hadn't gone", 'had not gone'] },
        { kind: 'gap', text: 'If I ___ (be) a morning person, I would have joined the 7 am call.', answers: ['were', 'was'] },
        { kind: 'gap', text: 'If Ken had fixed the CI, the build ___ (be) green now.', answers: ['would be', "'d be"] },
        { kind: 'gap', text: "If Arjun didn't know the old code so well, we ___ (not / fix) that bug last year.", answers: ["wouldn't have fixed", 'would not have fixed'] },
        { kind: 'gap', text: 'If you had taken the job in Berlin, you ___ (live) in Germany now.', answers: ['would be living', "'d be living", 'would live'] },
        { kind: 'gap', text: 'If we ___ (hire) a QA earlier, we would have fewer bugs now.', answers: ['had hired', "'d hired"] },
        { kind: 'gap', text: "If I spoke German, I ___ (apply) for that job last month.", answers: ['would have applied', "'d have applied"] },
        { kind: 'transform', instruction: 'Mixed conditional (past → present)', source: "I didn't learn Swift, so I can't help with iOS now.", answers: ['If I had learned Swift, I could help with iOS now.', 'If I had learned Swift, I would be able to help with iOS now.'] },
        { kind: 'transform', instruction: 'Mixed conditional (present → past)', source: "Arjun is a careful person, so he didn't miss the bug.", answers: ["If Arjun weren't a careful person, he would have missed the bug.", "If Arjun wasn't a careful person, he would have missed the bug.", "If Arjun weren't careful, he would have missed the bug."] },
        { kind: 'transform', instruction: 'Mixed conditional (past → present)', source: "We didn't write tests last year, so we are afraid of refactoring now.", answers: ["If we had written tests last year, we wouldn't be afraid of refactoring now.", 'If we had written tests last year, we would not be afraid of refactoring now.'] },
        { kind: 'fix', sentence: 'If I had studied harder, I would have a better job yesterday.', answers: ['If I had studied harder, I would have a better job now.', 'If I had studied harder, I would have a better job today.'] },
        { kind: 'fix', sentence: 'If we would have chosen Flutter, we would be done now.', answers: ['If we had chosen Flutter, we would be done now.'] },
        { kind: 'fix', sentence: 'If I was taller, I would play basketball last year.', answers: ['If I were taller, I would have played basketball last year.', 'If I was taller, I would have played basketball last year.'] },
        { kind: 'fix', sentence: "If he hadn't missed the train, he would be here yesterday.", answers: ["If he hadn't missed the train, he would have been here yesterday.", "If he hadn't missed the train, he would be here now."] },
        { kind: 'order', words: ['We', 'would', 'have', 'a', 'mobile', 'app', 'now', '.'], ru: 'У нас сейчас было бы мобильное приложение.' },
        { kind: 'order', words: ['If', 'I', 'were', 'braver', ',', "I'd", 'have', 'spoken', '.'], ru: 'Будь я смелее, я бы выступил.' },
        { kind: 'order', words: ['I', "wouldn't", 'feel', 'so', 'confident', 'now', '.'], ru: 'Я бы не чувствовал такой уверенности сейчас.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: tech decisions',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'go native', ru: 'писать нативно', example: 'Should we go native?' },
            { chunk: 'existing stack', ru: 'существующий стек', example: 'We build on our existing stack.' },
            { chunk: 'share code', ru: 'переиспользовать код', example: 'We can share code with the web app.' },
            { chunk: 'push for', ru: 'настаивать на', example: 'Arjun will push for more tests.' },
            { chunk: 'prototype', ru: 'прототип', example: 'Nina built a prototype.' },
            { chunk: 'confident', ru: 'уверенный', example: 'I feel confident about it.' },
            { chunk: 'decision made', ru: 'решение принято', example: 'Great, decision made.' },
            { chunk: 'lead the architecture', ru: 'руководить архитектурой', example: "You'll lead the architecture of the frontend." },
            { chunk: 'cross-platform', ru: 'кроссплатформенный', example: 'React Native is cross-platform.' },
            { chunk: 'learning curve', ru: 'кривая обучения, сложность освоения', example: 'The learning curve is steep.' },
            { chunk: 'the past is the past', ru: 'что было, то прошло', example: "The past is the past. Let's decide." },
            { chunk: "I'd go with", ru: 'я бы выбрал', example: "I'd go with React Native." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['learning curve', 'сложность освоения'],
            ['cross-platform', 'кроссплатформенный'],
            ['push for', 'настаивать на'],
            ['prototype', 'прототип'],
            ["I'd go with", 'я бы выбрал'],
          ],
        },
        { kind: 'gap', text: 'Flutter has a steep learning ___ for our team.', answers: ['curve'] },
        { kind: 'gap', text: "If I had to choose, I'd go ___ Kotlin.", answers: ['with'] },
        { kind: 'gap', text: 'React Native lets us share ___ between iOS and Android.', answers: ['code'] },
        { kind: 'gap', text: 'Arjun pushed ___ more tests in the plan.', answers: ['for'] },
        { kind: 'gap', text: "OK, decision ___ . Let's move on.", answers: ['made'] },
        { kind: 'choice', prompt: 'Recommending a technology politely:', options: ["I'd go with React Native, because we already know React.", 'React Native. Period.', 'Only idiots use Flutter.', 'Whatever.'], answer: 0 },
        { kind: 'choice', prompt: '"Steep learning curve" means…', options: ['it is hard to learn at first', 'it is very easy', 'it is cheap', 'it is old'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'If we had chosen React Native last year, we would have a mobile codebase now.' },
        { kind: 'dictation', text: "If we had gone native, we wouldn't be so fast on the web today." },
        { kind: 'dictation', text: 'If I were more experienced, I would have pushed for it.' },
        { kind: 'dictation', text: "I'd go with React Native." },
        { kind: 'dictation', text: "The past is the past." },
        { kind: 'dictation', text: 'Great, decision made.' },
        { kind: 'dictation', text: 'The learning curve is steep.' },
        { kind: 'dictation', text: "You'll lead the frontend architecture." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: different paths',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'If we had chosen React Native last year, we would have a mobile app now.' },
        { kind: 'shadow', text: "If I were more experienced, I would have pushed for it." },
        { kind: 'shadow', text: "I'd go with React Native. We already know React." },
        { kind: 'shadow', text: 'The past is the past. What do we choose now?' },
        {
          kind: 'speak',
          situation: 'Talk about a past choice in your life or career and how your present would be different (past → present).',
          keywords: ['if I had', 'now'],
          sample: "If I had studied computer science at university, I would probably be a backend developer now. But I studied design, and that helps me in frontend.",
        },
        {
          kind: 'speak',
          situation: 'Explain a past result with a permanent quality of yours (present → past).',
          keywords: ['if I were', 'would have'],
          sample: "If I were a morning person, I would have joined the 7 am meetings last year. But I'm not, so I asked for a later slot.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: decision record',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a short Architecture Decision Record (ADR): context, decision (React Native), and a "What if" paragraph with mixed conditionals about past choices.',
          checklist: [
            'Context / Decision / Consequences structure',
            'Past → present mixed conditional',
            'Present → past mixed conditional',
            "Clear recommendation (*We'll go with…*)",
          ],
          minWords: 55,
          sample:
            "ADR-012: Driver app technology\nContext: we need a mobile app for drivers next quarter. Our team knows React well.\nDecision: we'll go with React Native.\nConsequences: we can share code with the web app, but we need mobile CI.\nWhat if: if we had chosen React Native last year, we would already have a mobile codebase now. However, if we weren't so strong on the web, we wouldn't have won this project in the first place.",
        },
      ],
    },
  ],
};

export default lesson;
