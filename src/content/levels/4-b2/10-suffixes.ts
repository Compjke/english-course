import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-10',
  level: 'B2',
  title: 'Day 70: Reliability, scalability, availability',
  grammar: 'Word formation 2: suffixes (-tion, -ment, -ity, -ness, -ance, -able, -ive, -ize, -en)',
  scene: 'Ты пишешь нефункциональные требования (NFR) для немецкого запуска.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: non-functional requirements',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'NFR workshop',
          format: 'call',
          lines: [
            { who: 'Arjun', text: "Let's define the non-functional requirements. Start with availability." },
            { who: 'You', text: "The app should be available 99.9% of the time. For the depot connector, 99.5% is acceptable." },
            { who: 'Ken', text: "Scalability: we need to handle three times the Polish load without a redesign." },
            { who: 'Lena', text: "And usability. German drivers are older on average. The app must be readable without glasses." },
            { who: 'You', text: "Good point. I'll add accessibility requirements: bigger fonts and high contrast." },
            { who: 'Arjun', text: "Maintainability is important too. Every module needs documentation and test coverage above 70%." },
            { who: 'Tom', text: "From the business side: the client expects a significant reduction in support calls." },
            { who: 'You', text: "Then we should measure it. I'll add a requirement for analytics and monitoring of errors." },
            { who: 'Arjun', text: "Great. Let's finalize the list tomorrow and prioritize it with the client." },
          ],
        },
        { kind: 'choice', prompt: 'What availability should the app have?', options: ['90%', '99%', '99.9%', '100%'], answer: 2 },
        { kind: 'choice', prompt: 'What is the scalability requirement?', options: ['Handle three times the Polish load', 'Handle half the load', 'No requirement', 'Unlimited'], answer: 0 },
        { kind: 'choice', prompt: 'Why is readability important in Germany?', options: ['Drivers are older on average', 'The sun is bright', 'Phones are small', 'The client said so'], answer: 0 },
        { kind: 'choice', prompt: 'What test coverage is needed?', options: ['Above 50%', 'Above 70%', '100%', 'None'], answer: 1 },
        { kind: 'choice', prompt: 'What does the client expect?', options: ['A significant reduction in support calls', 'More features', 'A lower price', 'A new design'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: suffixes',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Noun suffixes',
          body:
            'Suffixes change the **part of speech**. In technical and business English we use many **nouns made from verbs and adjectives** (nominalisation).\n\n' +
            '**-tion / -sion** (verb → noun): *integrate → integration, reduce → reduction, decide → decision*\n' +
            '**-ment**: *deploy → deployment, require → requirement, improve → improvement, manage → management*\n' +
            '**-ity** (adjective → noun): *available → availability, scalable → scalability, secure → security, reliable → reliability*\n' +
            '**-ness**: *ready → readiness, aware → awareness, effective → effectiveness*\n' +
            '**-ance / -ence**: *perform → performance, maintain → maintenance, depend → dependence*\n' +
            '**-er / -or**: *develop → developer, monitor → monitor*',
        },
        {
          kind: 'theory',
          title: 'Adjective and verb suffixes',
          table: [
            ['Suffix', 'Type', 'Examples'],
            ['-able / -ible', 'adjective (can be done)', 'readable, scalable, accessible, maintainable'],
            ['-ive', 'adjective', 'effective, responsive, intuitive'],
            ['-al', 'adjective', 'functional, technical, optional'],
            ['-ful / -less', 'adjective (with / without)', 'useful, helpful / useless, stateless'],
            ['-ize (-ise UK)', 'verb', 'prioritize, optimize, finalize, normalize'],
            ['-en', 'verb', 'shorten, strengthen, widen'],
            ['-ify', 'verb', 'simplify, verify, notify'],
          ],
          body: 'Spelling: *-ize* is American (and acceptable in UK). *-ise* is common in the UK. Be consistent in one document.',
          pitfalls: [
            { wrong: 'The availableness is 99.9%.', right: 'The availability is 99.9%.' },
            { wrong: 'This code is maintainable-less.', right: 'This code is unmaintainable.' },
            { wrong: 'We need to optimizate it.', right: 'We need to optimize it.' },
            { wrong: 'A significant reduce in calls.', right: 'A significant reduction in calls.' },
          ],
        },
        { kind: 'choice', prompt: 'The app needs 99.9% ___ .', options: ['available', 'availability', 'availableness', 'availably'], answer: 1 },
        { kind: 'choice', prompt: '___ means the system can grow with the load.', options: ['Scalable', 'Scalability', 'Scaling', 'Scalation'], answer: 1 },
        { kind: 'choice', prompt: 'The client expects a significant ___ in support calls.', options: ['reduce', 'reduction', 'reducing', 'reduced'], answer: 1 },
        { kind: 'choice', prompt: 'The text must be ___ without glasses.', options: ['read', 'readable', 'reading', 'readability'], answer: 1 },
        { kind: 'choice', prompt: "Let's ___ the list with the client.", options: ['priority', 'prioritize', 'prioritization', 'prior'], answer: 1 },
        { kind: 'choice', prompt: 'We need better ___ : bigger fonts and high contrast.', options: ['accessible', 'accessibility', 'access', 'accessing'], answer: 1 },
        { kind: 'choice', prompt: 'This error message is ___ . It explains nothing.', options: ['useful', 'useless', 'usable', 'usage'], answer: 1 },
        { kind: 'choice', prompt: 'We should ___ the onboarding flow. It is too complex.', options: ['simple', 'simplify', 'simplicity', 'simply'], answer: 1 },
        { kind: 'gap', text: 'The ___ (deploy) is scheduled for Thursday.', answers: ['deployment'] },
        { kind: 'gap', text: 'We wrote down all the ___ (require) for Germany.', answers: ['requirements'] },
        { kind: 'gap', text: 'Arjun cares a lot about ___ (maintain). Every module needs docs.', answers: ['maintainability'] },
        { kind: 'gap', text: 'The ___ (integrate) with SAP took two months.', answers: ['integration'] },
        { kind: 'gap', text: 'The new UI is very ___ (intuition): drivers need no training.', answers: ['intuitive'] },
        { kind: 'gap', text: 'Our services are ___ (state + less), so they scale easily.', answers: ['stateless'] },
        { kind: 'gap', text: 'We need to ___ (strong) the security of the API.', answers: ['strengthen'] },
        { kind: 'gap', text: 'The ___ (perform) of the app improved by 40%.', answers: ['performance'] },
        { kind: 'transform', instruction: 'Rewrite with a noun (nominalise)', source: 'We will integrate with SAP in March.', answers: ['The integration with SAP will be in March.', 'The integration with SAP is planned for March.', 'Integration with SAP will happen in March.'] },
        { kind: 'transform', instruction: 'Rewrite with an -able adjective', source: 'The system can be scaled easily.', answers: ['The system is easily scalable.', 'The system is scalable.'] },
        { kind: 'transform', instruction: 'Rewrite with a verb in -ize', source: 'We need to make the queries more optimal.', answers: ['We need to optimize the queries.', 'We need to optimise the queries.'] },
        { kind: 'transform', instruction: 'Rewrite with a noun in -ity', source: 'The service must be very secure.', answers: ['Security of the service is critical.', 'The service needs high security.', 'Service security is critical.'] },
        { kind: 'fix', sentence: 'The availableness of the app is good.', answers: ['The availability of the app is good.'] },
        { kind: 'fix', sentence: 'We need to optimizate the database.', answers: ['We need to optimize the database.', 'We need to optimise the database.'] },
        { kind: 'fix', sentence: 'There was a big improve in speed.', answers: ['There was a big improvement in speed.'] },
        { kind: 'fix', sentence: 'The new design is very use.', answers: ['The new design is very useful.', 'The new design is very usable.'] },
        { kind: 'fix', sentence: 'We must priority the bugs.', answers: ['We must prioritize the bugs.', 'We must prioritise the bugs.'] },
        { kind: 'order', words: ['Availability', 'must', 'be', '99.9%', '.'], ru: 'Доступность должна быть 99,9%.' },
        { kind: 'order', words: ["Let's", 'prioritize', 'the', 'requirements', '.'], ru: 'Давайте приоритизируем требования.' },
        { kind: 'order', words: ['The', 'app', 'must', 'be', 'readable', '.'], ru: 'Приложение должно быть читаемым.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: NFRs',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'non-functional requirements', ru: 'нефункциональные требования', example: "Let's define the non-functional requirements." },
            { chunk: 'availability', ru: 'доступность', example: 'Availability must be 99.9%.' },
            { chunk: 'scalability', ru: 'масштабируемость', example: 'Scalability is key for Germany.' },
            { chunk: 'usability', ru: 'удобство использования', example: 'Usability tests start next week.' },
            { chunk: 'accessibility', ru: 'доступность для людей с ограничениями', example: 'We need accessibility requirements.' },
            { chunk: 'maintainability', ru: 'поддерживаемость', example: 'Maintainability is important too.' },
            { chunk: 'test coverage', ru: 'покрытие тестами', example: 'Test coverage must be above 70%.' },
            { chunk: 'high contrast', ru: 'высокая контрастность', example: 'Use high contrast colours.' },
            { chunk: 'on average', ru: 'в среднем', example: 'Drivers are older on average.' },
            { chunk: 'significant', ru: 'значительный', example: 'A significant reduction in calls.' },
            { chunk: 'SLA', ru: 'соглашение об уровне сервиса', example: 'The SLA is 99.9% uptime.' },
            { chunk: 'uptime', ru: 'время безотказной работы', example: 'Our uptime last month was 99.95%.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['uptime', 'время безотказной работы'],
            ['SLA', 'соглашение об уровне сервиса'],
            ['usability', 'удобство использования'],
            ['test coverage', 'покрытие тестами'],
            ['on average', 'в среднем'],
          ],
        },
        { kind: 'gap', text: 'Our ___ last month was 99.95%.', answers: ['uptime'] },
        { kind: 'gap', text: 'The ___ promises 99.9% availability.', answers: ['SLA'] },
        { kind: 'gap', text: 'Test ___ is only 45% in the old module.', answers: ['coverage'] },
        { kind: 'gap', text: 'Drivers are 48 years old on ___ .', answers: ['average'] },
        { kind: 'gap', text: 'Use high ___ for outdoor screens.', answers: ['contrast'] },
        { kind: 'choice', prompt: 'Which is a non-functional requirement?', options: ['The app must load in under 2 seconds.', 'Drivers can see their route.', 'Users can log in.', 'There is a list of stops.'], answer: 0 },
        { kind: 'choice', prompt: '99.9% availability means about … of downtime per month.', options: ['43 minutes', '7 hours', '1 day', '0 seconds'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "Let's define the non-functional requirements." },
        { kind: 'dictation', text: 'The app should be available 99.9% of the time.' },
        { kind: 'dictation', text: 'Scalability is key for the German launch.' },
        { kind: 'dictation', text: "I'll add accessibility requirements." },
        { kind: 'dictation', text: 'Maintainability is important too.' },
        { kind: 'dictation', text: 'The client expects a significant reduction in support calls.' },
        {
          kind: 'theory',
          title: 'Stress moves with suffixes',
          body: 'Adding a suffix often **moves the stress**: *aVAILable → availaBILity, SCALable → scalaBILity, inTEgrate → inteGRAtion, PRIority → priORity*. With *-ity* and *-tion*, the stress is usually on the syllable **just before** the suffix.',
        },
        { kind: 'dictation', text: "Let's finalize the list tomorrow." },
        { kind: 'dictation', text: 'Our uptime last month was 99.95 percent.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: talk like an architect',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'Availability must be 99.9%, and scalability is key.' },
        { kind: 'shadow', text: 'Maintainability and test coverage matter too.' },
        { kind: 'shadow', text: "Let's prioritize the requirements with the client." },
        { kind: 'shadow', text: 'The client expects a significant reduction in support calls.' },
        {
          kind: 'speak',
          situation: 'Describe three non-functional requirements of a system you know, using nouns in -ity and -ance.',
          keywords: ['availability', 'scalability', 'performance'],
          sample: "Our shop needs high availability during sales. Scalability matters because traffic grows ten times on Black Friday, and performance must stay under two seconds per page.",
        },
        {
          kind: 'speak',
          situation: 'Explain what you will do to improve a slow and confusing app, using verbs in -ize, -ify and -en.',
          keywords: ['optimize', 'simplify'],
          sample: "We'll optimize the database queries, simplify the checkout flow and shorten the onboarding. We'll also strengthen the security of the login.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: NFR document',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write the non-functional requirements section for the German launch: availability, scalability, usability/accessibility, maintainability, and measurement. Use nouns formed with suffixes.',
          checklist: [
            'Nouns in *-ity, -tion, -ment, -ance*',
            'Adjectives in *-able, -ive, -ful/-less*',
            'Verbs in *-ize / -ify / -en*',
            'Numbers for each requirement',
          ],
          minWords: 60,
          sample:
            "Non-functional requirements: Germany\n1. Availability: the driver app must be available 99.9% of the time; the depot connector 99.5%.\n2. Scalability: the platform must handle three times the current load without redesign.\n3. Usability and accessibility: all text must be readable without glasses (minimum 16 px) with high contrast.\n4. Maintainability: every module needs documentation and test coverage above 70%.\n5. Measurement: we will monitor errors and analyse support calls to verify a significant reduction.",
        },
      ],
    },
  ],
};

export default lesson;
