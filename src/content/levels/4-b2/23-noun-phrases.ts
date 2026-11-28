import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-23',
  level: 'B2',
  title: 'Day 83: Implementation of the retry mechanism',
  grammar: 'Noun phrases & nominalisation: compound nouns, noun + of, pre-modifiers',
  scene: 'Ты готовишь квартальный технический отчёт для руководства клиента — коротко и плотно.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: dense writing',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Report review with Maya',
          format: 'doc',
          lines: [
            { who: 'You', text: "Draft: 'We implemented a mechanism that retries uploads, and because of this, fewer photos got lost.'" },
            { who: 'Maya', text: "Fine for Slack. For the board report, try nouns: 'The implementation of an upload retry mechanism led to a significant reduction in photo loss.'" },
            { who: 'You', text: "It's shorter and sounds more official. But is it harder to read?" },
            { who: 'Maya', text: "A bit, if you overdo it. Use it for key results, not for every sentence." },
            { who: 'You', text: "Next one: 'Drivers were very satisfied, and they used the app more often.'" },
            { who: 'Maya', text: "'Driver satisfaction increased, along with a 20% growth in daily app usage.'" },
            { who: 'You', text: "I see the pattern: verbs become nouns, and nouns stack before the main noun: driver satisfaction, app usage, upload retry mechanism." },
            { who: 'Maya', text: "Exactly. Just don't stack more than three nouns. 'Driver app photo upload retry queue size limit' is unreadable." },
          ],
        },
        { kind: 'choice', prompt: 'What did the implementation lead to?', options: ['A significant reduction in photo loss', 'More bugs', 'Slower uploads', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: 'When should you use nominalisation?', options: ['For key results, not every sentence', 'Always', 'Never', 'Only in Slack'], answer: 0 },
        { kind: 'choice', prompt: 'How much did daily app usage grow?', options: ['2%', '20%', '200%', 'It fell'], answer: 1 },
        { kind: 'choice', prompt: "What is Maya's warning?", options: ["Don't stack more than three nouns", 'Never use nouns', 'Use only verbs', 'Write longer'], answer: 0 },
        { kind: 'choice', prompt: 'Which is a compound noun?', options: ['driver satisfaction', 'very satisfied', 'used more often', 'got lost'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: noun-heavy style',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Nominalisation: verbs → nouns',
          body:
            'Formal reports often turn **verbs and adjectives into nouns**. The text becomes shorter, more objective, and focused on results, not people.\n\n' +
            '*We implemented a retry mechanism* → *The **implementation** of a retry mechanism…*\n*Fewer photos got lost* → *a **reduction** in photo loss*\n*Drivers were satisfied* → *driver **satisfaction***\n\n' +
            'Typical patterns:\n**the + noun + of + noun**: *the implementation of, the migration of, the introduction of*\n**a + noun + in + noun** (change): *an increase in usage, a reduction in errors, a drop in latency*\n**lead to / result in / contribute to + noun**: *led to a reduction in…*',
          table: [
            ['Verb style (informal)', 'Noun style (formal)'],
            ['We migrated the database.', 'The **migration of** the database…'],
            ['Errors went down by 40%.', 'A 40% **reduction in** errors…'],
            ['Drivers used the app more.', 'An **increase in** app usage…'],
            ['We introduced photo proof, so complaints dropped.', 'The **introduction of** photo proof **led to** fewer complaints.'],
          ],
        },
        {
          kind: 'theory',
          title: 'Compound nouns and pre-modifiers',
          body:
            'English puts nouns **before** the main noun as modifiers: *upload retry mechanism* (a mechanism for retrying uploads), *driver satisfaction*, *app usage*, *error rate*.\n\n' +
            'The **last noun is the main one**; earlier nouns describe it. They stay **singular**: *a three-day pilot* (not *three-days*), *a 20-minute call*, *a ten-person team*.\n\n' +
            'Russian often uses genitive chains («повышение удовлетворённости водителей»); English prefers *driver satisfaction*, but avoid chains longer than three nouns.',
          pitfalls: [
            { wrong: 'a three-days pilot', right: 'a three-day pilot' },
            { wrong: 'a reduction of errors by 40%', right: 'a 40% reduction in errors' },
            { wrong: 'satisfaction of drivers increase', right: 'driver satisfaction increased' },
            { wrong: 'an increase of usage', right: 'an increase in usage' },
          ],
        },
        { kind: 'choice', prompt: 'The ___ of a retry mechanism reduced photo loss.', options: ['implement', 'implementation', 'implementing of', 'implemented'], answer: 1 },
        { kind: 'choice', prompt: 'A significant reduction ___ photo loss.', options: ['of', 'in', 'on', 'at'], answer: 1 },
        { kind: 'choice', prompt: 'Driver ___ increased.', options: ['satisfied', 'satisfaction', 'satisfy', 'satisfying'], answer: 1 },
        { kind: 'choice', prompt: 'We ran a ___ pilot.', options: ['three-days', 'three-day', 'three day\'s', 'days-three'], answer: 1 },
        { kind: 'choice', prompt: 'The introduction of photo proof ___ fewer complaints.', options: ['led to', 'led', 'leaded to', 'leading'], answer: 0 },
        { kind: 'choice', prompt: 'A 20% ___ in daily usage.', options: ['grow', 'growth', 'growing', 'grown'], answer: 1 },
        { kind: 'choice', prompt: 'Which is the main noun in "upload retry mechanism"?', options: ['upload', 'retry', 'mechanism', 'all equally'], answer: 2 },
        { kind: 'choice', prompt: 'Too long, hard to read:', options: ['driver app photo upload retry queue size limit', 'error rate', 'driver satisfaction', 'app usage'], answer: 0 },
        { kind: 'gap', text: 'The ___ (migrate) of the database took two weeks.', answers: ['migration'] },
        { kind: 'gap', text: 'There was a sharp ___ (increase) in app usage.', answers: ['increase'] },
        { kind: 'gap', text: 'The new cache resulted ___ lower latency.', answers: ['in'] },
        { kind: 'gap', text: 'We noticed a drop ___ support calls.', answers: ['in'] },
        { kind: 'gap', text: 'It was a 20-___ call. (minute)', answers: ['minute'] },
        { kind: 'gap', text: 'The ___ (introduce) of chat improved communication.', answers: ['introduction'] },
        { kind: 'gap', text: 'Better tests contributed ___ fewer incidents.', answers: ['to'] },
        { kind: 'transform', instruction: 'Nominalise (The … of …)', source: 'We introduced dark mode in May.', answers: ['The introduction of dark mode was in May.', 'The introduction of dark mode took place in May.', 'Dark mode was introduced in May.'] },
        { kind: 'transform', instruction: 'Use "a … reduction in …"', source: 'Errors went down by 40%.', answers: ['There was a 40% reduction in errors.', 'A 40% reduction in errors.'] },
        { kind: 'transform', instruction: 'Use a compound noun', source: 'The rate of errors fell.', answers: ['The error rate fell.'] },
        { kind: 'transform', instruction: 'Use "led to"', source: 'We added a cache, so latency was lower.', answers: ['The addition of a cache led to lower latency.', 'Adding a cache led to lower latency.', 'The cache led to lower latency.'] },
        { kind: 'fix', sentence: 'We had a two-weeks sprint.', answers: ['We had a two-week sprint.'] },
        { kind: 'fix', sentence: 'There was an increase of usage.', answers: ['There was an increase in usage.'] },
        { kind: 'fix', sentence: 'The implement of the cache helped.', answers: ['The implementation of the cache helped.'] },
        { kind: 'fix', sentence: 'Satisfaction of drivers grew.', answers: ['Driver satisfaction grew.'] },
        { kind: 'fix', sentence: 'The new design led a reduction in calls.', answers: ['The new design led to a reduction in calls.'] },
        { kind: 'order', words: ['Driver', 'satisfaction', 'increased', '.'], ru: 'Удовлетворённость водителей выросла.' },
        { kind: 'order', words: ['a', 'reduction', 'in', 'photo', 'loss'], ru: 'снижение потерь фото' },
        { kind: 'order', words: ['It', 'led', 'to', 'fewer', 'complaints', '.'], ru: 'Это привело к меньшему числу жалоб.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: reporting results',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'implementation', ru: 'внедрение, реализация', example: 'The implementation took two sprints.' },
            { chunk: 'reduction in', ru: 'снижение', example: 'A reduction in photo loss.' },
            { chunk: 'increase in', ru: 'рост', example: 'An increase in daily usage.' },
            { chunk: 'led to', ru: 'привело к', example: 'It led to fewer complaints.' },
            { chunk: 'resulted in', ru: 'привело к', example: 'The cache resulted in lower latency.' },
            { chunk: 'contributed to', ru: 'способствовало', example: 'Tests contributed to stability.' },
            { chunk: 'usage', ru: 'использование', example: 'App usage grew by 20%.' },
            { chunk: 'error rate', ru: 'доля ошибок', example: 'The error rate is below 1%.' },
            { chunk: 'along with', ru: 'наряду с', example: 'Along with speed, stability improved.' },
            { chunk: 'overdo it', ru: 'перестараться', example: "Don't overdo it." },
            { chunk: 'key results', ru: 'ключевые результаты', example: 'Highlight the key results.' },
            { chunk: 'executive summary', ru: 'краткое резюме для руководства', example: 'Start with an executive summary.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['executive summary', 'резюме для руководства'],
            ['contributed to', 'способствовало'],
            ['overdo it', 'перестараться'],
            ['along with', 'наряду с'],
            ['usage', 'использование'],
          ],
        },
        { kind: 'gap', text: 'Start the report with an executive ___ .', answers: ['summary'] },
        { kind: 'gap', text: 'The error ___ dropped below 1%.', answers: ['rate'] },
        { kind: 'gap', text: 'The new cache resulted ___ much lower latency.', answers: ['in'] },
        { kind: 'gap', text: "Nominalisation is useful, but don't ___ it.", answers: ['overdo'] },
        { kind: 'gap', text: 'Along ___ speed, stability improved too.', answers: ['with'] },
        { kind: 'choice', prompt: 'Best sentence for a board report:', options: ['The introduction of photo proof led to a 30% reduction in disputes.', 'We did photos and people argued less.', 'Photos good.', 'It was nice.'], answer: 0 },
        { kind: 'choice', prompt: 'An executive summary should be…', options: ['short, with key results first', 'long and detailed', 'only code', 'jokes'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'The implementation of an upload retry mechanism reduced photo loss.' },
        { kind: 'dictation', text: 'Driver satisfaction increased.' },
        { kind: 'dictation', text: 'There was a 20% growth in daily app usage.' },
        { kind: 'dictation', text: 'The introduction of photo proof led to fewer complaints.' },
        { kind: 'dictation', text: 'The error rate is below one percent.' },
        { kind: 'dictation', text: 'We ran a three-day pilot.' },
        { kind: 'dictation', text: 'Start with an executive summary.' },
        { kind: 'dictation', text: 'Tests contributed to stability.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: present results',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'The implementation of a retry mechanism led to a significant reduction in photo loss.' },
        { kind: 'shadow', text: 'Driver satisfaction increased, along with a 20% growth in app usage.' },
        { kind: 'shadow', text: 'The introduction of photo proof resulted in fewer disputes.' },
        { kind: 'shadow', text: 'The error rate is now below one percent.' },
        {
          kind: 'speak',
          situation: 'Present two results of a project to management in formal noun style.',
          keywords: ['led to', 'reduction in', 'increase in'],
          sample: "The migration to the new database led to a 50% reduction in query time. We also saw an increase in user activity of around 15%.",
        },
        {
          kind: 'speak',
          situation: 'Say the same result informally to a teammate, then formally to a director.',
          keywords: ['we', 'resulted in'],
          sample: "Informally: we added the cache and now it's way faster. Formally: the introduction of a cache resulted in an 80% reduction in latency.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: executive summary',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: "Write an executive summary of the quarter's technical results for the client's board (photo proof, retries, cache, usage). Use noun style for key results.",
          checklist: [
            'Nominalisation: *implementation of, introduction of, migration of*',
            '*a … increase / reduction in …*',
            '*led to / resulted in / contributed to*',
            'Compound nouns with singular modifiers (*a two-week pilot*)',
          ],
          minWords: 60,
          sample:
            "Executive summary: Q3 technical results\nThe introduction of photo proof led to a 30% reduction in delivery disputes. The implementation of an upload retry mechanism resulted in a significant reduction in photo loss, from 5% to under 0.5%. The deployment of a route cache contributed to an 80% drop in latency for German depots. Driver satisfaction increased, along with a 20% growth in daily app usage. A two-week pilot of event-driven sync is planned for October.",
        },
      ],
    },
  ],
};

export default lesson;
