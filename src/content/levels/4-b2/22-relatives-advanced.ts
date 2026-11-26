import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-22',
  level: 'B2',
  title: 'Day 82: The system on which we depend',
  grammar: 'Advanced relative clauses: preposition + which/whom, whereby, whatever/whoever/wherever, all of which',
  scene: 'Ты пишешь архитектурный документ для нового члена команды — сеньора из Берлина.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the architecture doc',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Architecture doc review',
          format: 'doc',
          lines: [
            { who: 'You', text: "The event bus is the component on which all other services depend. It was designed by Arjun, to whom questions about it should be sent." },
            { who: 'You', text: "We use a model whereby each depot pushes events, and the app only reads them. Depots that cannot push are polled, all of which are listed in the config." },
            { who: 'You', text: "Whatever happens to the event bus, drivers can still see their cached routes. Whoever is on call receives an alert within one minute." },
            { who: 'Arjun', text: "Very good. One small thing: 'the team which we work with' is fine in Slack, but in a formal doc 'the team with which we work' looks better." },
            { who: 'You', text: "Got it. And should I write 'the person who you report to' or 'to whom you report'?" },
            { who: 'Arjun', text: "In docs: 'the person to whom you report'. In speech, 'the person you report to' is totally natural." },
            { who: 'You', text: "OK. Wherever possible, I'll use the formal version in this doc." },
          ],
        },
        { kind: 'choice', prompt: 'On which component do all services depend?', options: ['The event bus', 'The UI', 'The cache', 'SAP'], answer: 0 },
        { kind: 'choice', prompt: 'Who should questions about the event bus go to?', options: ['Arjun', 'Ken', 'Maya', 'Lena'], answer: 0 },
        { kind: 'choice', prompt: 'What model do they use?', options: ['Depots push events; the app reads them', 'The app pushes to depots', 'Only polling', 'Email'], answer: 0 },
        { kind: 'choice', prompt: 'What can drivers still see if the bus fails?', options: ['Cached routes', 'Nothing', 'Only chat', 'Photos'], answer: 0 },
        { kind: 'choice', prompt: 'Which version is better for a formal doc?', options: ['the team with which we work', 'the team which we work with', 'the team we work', 'the team what we work with'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: formal relative clauses',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Preposition + which / whom',
          body:
            'In **informal** English, the preposition goes to the **end**: *the system **which** we depend **on***, *the person **you** report **to***.\n' +
            'In **formal** writing, it goes **before which / whom**: *the system **on which** we depend*, *the person **to whom** you report*.\n\n' +
            '**whom** is the formal object form of *who*, used mainly after prepositions: *to whom, with whom, for whom*. Never *to who* or *to that*.\n\n' +
            '**whereby** = by which, through which (a method or system): *a model **whereby** each depot pushes events.*',
          table: [
            ['Informal', 'Formal'],
            ['the system which we depend on', 'the system **on which** we depend'],
            ['the person you report to', 'the person **to whom** you report'],
            ['the team we work with', 'the team **with which** we work'],
            ['a process where depots push events', 'a process **whereby** depots push events'],
          ],
        },
        {
          kind: 'theory',
          title: 'Quantifier + of which/whom; whatever, whoever, wherever',
          body:
            '**all / some / most / none / both of which / whom** — in non-defining clauses: *Some depots are polled, **all of which** are listed in the config.* *We hired three engineers, **two of whom** speak German.*\n\n' +
            '**-ever words** mean "any…, it doesn’t matter which":\n**whatever** — any thing: *Whatever happens, drivers see cached routes.*\n**whoever** — any person: *Whoever is on call gets an alert.*\n**wherever / whenever / however** — any place / time / way: *Wherever possible, use the formal version.*',
          pitfalls: [
            { wrong: 'the person to who you report', right: 'the person to whom you report' },
            { wrong: 'the system on that we depend', right: 'the system on which we depend' },
            { wrong: 'two of them speak German (in one sentence)', right: 'three engineers, two of whom speak German' },
            { wrong: 'Who is on call gets an alert.', right: 'Whoever is on call gets an alert.' },
          ],
        },
        { kind: 'choice', prompt: 'The event bus is the component ___ all services depend.', options: ['which', 'on which', 'on that', 'whom'], answer: 1 },
        { kind: 'choice', prompt: 'Arjun, ___ questions should be sent, designed it.', options: ['to who', 'to whom', 'whom', 'to which'], answer: 1 },
        { kind: 'choice', prompt: 'We use a model ___ each depot pushes events.', options: ['whereby', 'whereas', 'wherever', 'which'], answer: 0 },
        { kind: 'choice', prompt: 'Some depots are polled, all ___ are listed in the config.', options: ['of them', 'of which', 'which', 'of whom'], answer: 1 },
        { kind: 'choice', prompt: '___ happens to the bus, drivers can see cached routes.', options: ['What', 'Whatever', 'Which', 'However'], answer: 1 },
        { kind: 'choice', prompt: '___ is on call receives an alert.', options: ['Who', 'Whoever', 'Whom', 'Which'], answer: 1 },
        { kind: 'choice', prompt: 'We hired three engineers, two ___ speak German.', options: ['of them', 'of whom', 'of which', 'whom'], answer: 1 },
        { kind: 'choice', prompt: '___ possible, use the formal version.', options: ['Where', 'Wherever', 'Whatever', 'Whereby'], answer: 1 },
        { kind: 'gap', text: 'This is the client ___ whom we signed the contract.', answers: ['with'] },
        { kind: 'gap', text: 'The library on ___ the app is built is open source.', answers: ['which'] },
        { kind: 'gap', text: 'The person to ___ you should write is Maya.', answers: ['whom'] },
        { kind: 'gap', text: 'We have five services, three of ___ are written in Go.', answers: ['which'] },
        { kind: 'gap', text: '___ you deploy, check the dashboard afterwards. (any time)', answers: ['Whenever'] },
        { kind: 'gap', text: 'A system ___ users earn points for deliveries. (by which)', answers: ['whereby'] },
        { kind: 'gap', text: 'Take ___ you need from the fridge. (any thing)', answers: ['whatever'] },
        { kind: 'gap', text: 'The developers, most of ___ work remotely, meet once a quarter.', answers: ['whom'] },
        { kind: 'transform', instruction: 'Make it formal (preposition first)', source: 'This is the API which we rely on.', answers: ['This is the API on which we rely.'] },
        { kind: 'transform', instruction: 'Make it formal (to whom)', source: 'Maya is the manager who you report to.', answers: ['Maya is the manager to whom you report.'] },
        { kind: 'transform', instruction: 'Join with "… of which"', source: 'We have four test phones. Two of them are Android.', answers: ['We have four test phones, two of which are Android.'] },
        { kind: 'transform', instruction: 'Rewrite with "Whoever"', source: 'The person who finds the bug first gets a coffee.', answers: ['Whoever finds the bug first gets a coffee.'] },
        { kind: 'fix', sentence: 'The person to who I spoke was very helpful.', answers: ['The person to whom I spoke was very helpful.', 'The person I spoke to was very helpful.'] },
        { kind: 'fix', sentence: 'The framework on that we built the app is old.', answers: ['The framework on which we built the app is old.', 'The framework that we built the app on is old.'] },
        { kind: 'fix', sentence: 'We met ten drivers, most of them liked the app.', answers: ['We met ten drivers, most of whom liked the app.'] },
        { kind: 'fix', sentence: 'What happens, keep calm.', answers: ['Whatever happens, keep calm.'] },
        { kind: 'fix', sentence: 'Who wants to join is welcome.', answers: ['Whoever wants to join is welcome.'] },
        { kind: 'order', words: ['the', 'system', 'on', 'which', 'we', 'depend'], ru: 'система, от которой мы зависим' },
        { kind: 'order', words: ['the', 'person', 'to', 'whom', 'you', 'report'], ru: 'человек, которому ты подчиняешься' },
        { kind: 'order', words: ['Whatever', 'happens', ',', 'stay', 'calm', '.'], ru: 'Что бы ни случилось, сохраняй спокойствие.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: architecture docs',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'component', ru: 'компонент', example: 'The event bus is a core component.' },
            { chunk: 'depend on', ru: 'зависеть от', example: 'All services depend on it.' },
            { chunk: 'single point of failure', ru: 'единая точка отказа', example: 'The bus is a single point of failure.' },
            { chunk: 'redundancy', ru: 'резервирование', example: 'We added redundancy in two zones.' },
            { chunk: 'fallback', ru: 'запасной вариант', example: 'Cached routes are the fallback.' },
            { chunk: 'architecture decision record', ru: 'запись об архитектурном решении', example: 'Write an architecture decision record.' },
            { chunk: 'diagram', ru: 'схема', example: 'See the diagram below.' },
            { chunk: 'data flow', ru: 'поток данных', example: 'The data flow is one-way.' },
            { chunk: 'ownership', ru: 'ответственность, владение', example: 'Ownership: the platform team.' },
            { chunk: 'onboarding doc', ru: 'документ для новичков', example: 'This is part of the onboarding doc.' },
            { chunk: 'wherever possible', ru: 'где возможно', example: 'Use events wherever possible.' },
            { chunk: 'listed in', ru: 'перечислены в', example: 'All depots are listed in the config.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['single point of failure', 'единая точка отказа'],
            ['redundancy', 'резервирование'],
            ['fallback', 'запасной вариант'],
            ['ownership', 'ответственность'],
            ['wherever possible', 'где возможно'],
          ],
        },
        { kind: 'gap', text: 'The event bus is a single point of ___ .', answers: ['failure'] },
        { kind: 'gap', text: 'We added ___ by running it in two zones.', answers: ['redundancy'] },
        { kind: 'gap', text: 'If the API is down, cached data is the ___ .', answers: ['fallback'] },
        { kind: 'gap', text: 'All depots are listed ___ the config file.', answers: ['in'] },
        { kind: 'gap', text: 'See the ___ below for the full data flow.', answers: ['diagram'] },
        { kind: 'choice', prompt: 'A good architecture doc for a new senior includes…', options: ['components, data flow, dependencies, ownership, failure modes', 'only code', 'office rules', 'lunch menu'], answer: 0 },
        { kind: 'choice', prompt: '"Single point of failure" means…', options: ['if this part fails, the whole system fails', 'the best component', 'a test', 'a backup'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'The event bus is the component on which all other services depend.' },
        { kind: 'dictation', text: 'Questions should be sent to Arjun, to whom we report.' },
        { kind: 'dictation', text: 'We use a model whereby each depot pushes events.' },
        { kind: 'dictation', text: 'Some depots are polled, all of which are listed in the config.' },
        { kind: 'dictation', text: 'Whatever happens, drivers can still see their routes.' },
        { kind: 'dictation', text: 'Whoever is on call receives an alert.' },
        { kind: 'dictation', text: 'We hired three engineers, two of whom speak German.' },
        { kind: 'dictation', text: 'Wherever possible, use events.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: explain a system',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'The event bus is the component on which all other services depend.' },
        { kind: 'shadow', text: 'We use a model whereby each depot pushes events.' },
        { kind: 'shadow', text: 'Whatever happens, drivers can still see their cached routes.' },
        { kind: 'shadow', text: 'Whoever is on call receives an alert within one minute.' },
        {
          kind: 'speak',
          situation: 'Describe a key component of a system you know using formal relative clauses.',
          keywords: ['on which', 'whereby'],
          sample: "The database is the component on which everything depends. We use a model whereby every write goes to the primary node and reads go to replicas.",
        },
        {
          kind: 'speak',
          situation: 'Explain your team’s rules with whoever / whatever / whenever.',
          keywords: ['whoever', 'whatever', 'whenever'],
          sample: "Whoever breaks the build fixes it. Whatever we release, we test on real phones first. And whenever there's an incident, we write a short postmortem.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: architecture overview',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a formal "Architecture overview" paragraph for the new senior engineer: main component, dependencies, model, failure behaviour, ownership. Use at least five advanced relative structures.',
          checklist: [
            'preposition + *which / whom*',
            '*whereby*',
            '*all / some / two of which / whom*',
            '*whatever / whoever / wherever*',
          ],
          minWords: 60,
          sample:
            "Architecture overview\nThe event bus is the component on which all other services depend. We use a model whereby each depot pushes events and the driver app only reads them. Depots that cannot push events are polled; all of them are listed in the depot config. Whatever happens to the bus, drivers can still see their cached routes. Whoever is on call receives an alert within one minute. Questions about the bus should be sent to Arjun, by whom it was designed.",
        },
      ],
    },
  ],
};

export default lesson;
