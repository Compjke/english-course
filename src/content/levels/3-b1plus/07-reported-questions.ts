import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1p-07',
  level: 'B1+',
  title: 'Day 47: The auditors asked if…',
  grammar: 'Reported questions',
  scene: 'Аудиторы задали команде много вопросов. Ты пересказываешь их Maya.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: after the audit interview',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Debrief with Maya',
          format: 'call',
          lines: [
            { who: 'Maya', text: "How was the interview with the auditors? What did they ask?" },
            { who: 'You', text: "A lot! First they asked where we stored the location data." },
            { who: 'You', text: "Then they wanted to know if the data was encrypted at rest. I said it was." },
            { who: 'Maya', text: 'Good. Anything difficult?' },
            { who: 'You', text: "They asked how long we kept the logs. I wasn't sure, so I asked Ken. He said thirty days." },
            { who: 'You', text: "They also asked whether drivers could delete their history, and who had access to production." },
            { who: 'Maya', text: 'Did they ask about the intern?' },
            { who: 'You', text: "Yes, they asked why Nina had admin rights on staging. I explained that she needed them for testing, but they recommended removing them." },
            { who: 'Maya', text: "Fair. Did they say when the report would be ready?" },
            { who: 'You', text: "They said it would be ready in two weeks." },
          ],
        },
        { kind: 'choice', prompt: 'What was their first question about?', options: ['Where the location data was stored', 'The price', 'The team size', 'The design'], answer: 0 },
        { kind: 'choice', prompt: 'How long are the logs kept?', options: ['Seven days', 'Thirty days', 'A year', 'Forever'], answer: 1 },
        { kind: 'choice', prompt: 'What did they ask about Nina?', options: ['Why she had admin rights on staging', 'Her salary', 'Her experience', 'Her location'], answer: 0 },
        { kind: 'choice', prompt: 'What did they recommend?', options: ['Removing her admin rights', 'Firing her', 'Giving her more rights', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: 'When will the report be ready?', options: ['Tomorrow', 'In two weeks', 'Next year', 'They didn’t say'], answer: 1 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: reporting questions',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Wh-questions in reported speech',
          body:
            'In a reported question, the word order is like a **normal statement**, not a question. No *do/does/did*, no question mark.\n\n' +
            '"Where **do you store** the data?" → *They asked where **we stored** the data.*\n"How long **do you keep** logs?" → *They asked how long **we kept** logs.*\n"Who **has** access?" → *They asked who **had** access.*\n\n' +
            'Tenses usually move back, the same as in reported statements (*store → stored, will → would, has done → had done*).',
          pitfalls: [
            { wrong: 'They asked where do we store the data.', right: 'They asked where we stored the data.' },
            { wrong: 'She asked me what was I doing?', right: 'She asked me what I was doing.' },
            { wrong: 'He asked when will it be ready.', right: 'He asked when it would be ready.' },
          ],
        },
        {
          kind: 'theory',
          title: 'Yes/No questions: if / whether',
          body:
            'For yes/no questions, use **if** or **whether** (more formal):\n\n' +
            '"**Is** the data encrypted?" → *They asked **if** the data **was** encrypted.*\n"**Can** drivers delete their history?" → *They asked **whether** drivers **could** delete their history.*\n\n' +
            'Useful reporting verbs: *ask, want to know, wonder, enquire* (formal).',
          table: [
            ['Direct question', 'Reported question'],
            ['"Where do you store it?"', 'They asked **where we stored** it.'],
            ['"Is it encrypted?"', 'They asked **if it was** encrypted.'],
            ['"Who has access?"', 'They asked **who had** access.'],
            ['"Why does Nina have admin rights?"', 'They asked **why Nina had** admin rights.'],
            ['"When will it be ready?"', 'I asked **when it would be** ready.'],
            ['"Did you test it?"', 'She asked **whether I had tested** it.'],
          ],
        },
        { kind: 'choice', prompt: '"Where do you store the data?" → They asked where we ___ the data.', options: ['do store', 'stored', 'did store', 'store do'], answer: 1 },
        { kind: 'choice', prompt: '"Is the data encrypted?" → They asked ___ the data was encrypted.', options: ['that', 'if', 'what', 'is'], answer: 1 },
        { kind: 'choice', prompt: '"Who has access?" → They asked who ___ access.', options: ['has', 'had', 'did have', 'does have'], answer: 1 },
        { kind: 'choice', prompt: '"When will the report be ready?" → I asked when the report ___ ready.', options: ['will be', 'would be', 'was being', 'is'], answer: 1 },
        { kind: 'choice', prompt: '"Did you test it?" → She asked whether I ___ it.', options: ['tested', 'had tested', 'did test', 'have tested'], answer: 1 },
        { kind: 'choice', prompt: 'Which is correct?', options: ['He asked what was I doing.', 'He asked what I was doing.', 'He asked what did I do?', 'He asked me what am I doing.'], answer: 1 },
        { kind: 'choice', prompt: '"Can drivers delete their history?" → They wanted to know whether drivers ___ their history.', options: ['can delete', 'could delete', 'did delete', 'deleted can'], answer: 1 },
        { kind: 'gap', text: '"How long do you keep logs?" → They asked how long we ___ logs.', answers: ['kept'] },
        { kind: 'gap', text: '"Are you the owner of this service?" → They asked ___ I was the owner.', answers: ['if', 'whether'] },
        { kind: 'gap', text: '"Why does Nina need admin rights?" → They asked why Nina ___ admin rights.', answers: ['needed'] },
        { kind: 'gap', text: '"What did you change?" → Arjun asked what I ___ changed.', answers: ['had'] },
        { kind: 'gap', text: '"Have you read the policy?" → She asked if I ___ read the policy.', answers: ['had'] },
        { kind: 'gap', text: '"Where is the backup?" → Ken asked where the backup ___ .', answers: ['was'] },
        { kind: 'gap', text: '"Will you join the call?" → Tom asked if I ___ join the call.', answers: ['would'] },
        { kind: 'transform', instruction: 'Report the question (They asked…)', source: '"Where do you keep the API keys?"', answers: ['They asked where we kept the API keys.'] },
        { kind: 'transform', instruction: 'Report the question (She asked…)', source: '"Is the app ready for the audit?"', answers: ['She asked if the app was ready for the audit.', 'She asked whether the app was ready for the audit.'] },
        { kind: 'transform', instruction: 'Report the question (He wanted to know…)', source: '"Who deployed the last release?"', answers: ['He wanted to know who had deployed the last release.', 'He wanted to know who deployed the last release.'] },
        { kind: 'transform', instruction: 'Report the question (They asked me…)', source: '"Can you show us the logs?"', answers: ['They asked me if I could show them the logs.', 'They asked me whether I could show them the logs.'] },
        { kind: 'fix', sentence: 'They asked where do we store backups.', answers: ['They asked where we stored backups.', 'They asked where we store backups.'] },
        { kind: 'fix', sentence: 'She asked me did I finish the task.', answers: ['She asked me if I had finished the task.', 'She asked me whether I had finished the task.', 'She asked me if I finished the task.'] },
        { kind: 'fix', sentence: 'He asked when will the report be ready.', answers: ['He asked when the report would be ready.'] },
        { kind: 'fix', sentence: 'They wanted to know who has access?', answers: ['They wanted to know who had access.'] },
        { kind: 'fix', sentence: 'I asked him that he was coming.', answers: ['I asked him if he was coming.', 'I asked him whether he was coming.'] },
        { kind: 'order', words: ['They', 'asked', 'where', 'we', 'stored', 'the', 'data', '.'], ru: 'Они спросили, где мы храним данные.' },
        { kind: 'order', words: ['She', 'asked', 'if', 'it', 'was', 'encrypted', '.'], ru: 'Она спросила, зашифровано ли это.' },
        { kind: 'order', words: ['I', 'wanted', 'to', 'know', 'who', 'had', 'access', '.'], ru: 'Я хотел знать, у кого есть доступ.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: data & privacy',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'encrypted at rest', ru: 'зашифрован при хранении', example: 'The data is encrypted at rest.' },
            { chunk: 'in transit', ru: 'при передаче', example: 'It is also encrypted in transit.' },
            { chunk: 'retention', ru: 'срок хранения', example: 'Our log retention is thirty days.' },
            { chunk: 'admin rights', ru: 'права администратора', example: 'Why does she have admin rights?' },
            { chunk: 'least privilege', ru: 'минимальные привилегии', example: 'Follow the principle of least privilege.' },
            { chunk: 'GDPR', ru: 'общий регламент ЕС о защите данных', example: 'We must follow GDPR.' },
            { chunk: 'personal data', ru: 'персональные данные', example: 'Location is personal data.' },
            { chunk: 'delete their history', ru: 'удалить свою историю', example: 'Can drivers delete their history?' },
            { chunk: 'access to production', ru: 'доступ к продакшену', example: 'Who has access to production?' },
            { chunk: 'debrief', ru: 'разбор после события', example: "Let's do a quick debrief." },
            { chunk: 'wanted to know', ru: 'хотели знать', example: 'They wanted to know who had access.' },
            { chunk: 'recommended removing', ru: 'рекомендовали убрать', example: 'They recommended removing her rights.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['retention', 'срок хранения'],
            ['least privilege', 'минимальные привилегии'],
            ['in transit', 'при передаче'],
            ['personal data', 'персональные данные'],
            ['debrief', 'разбор после события'],
          ],
        },
        { kind: 'gap', text: 'All data is encrypted at ___ and in transit.', answers: ['rest'] },
        { kind: 'gap', text: 'Our log ___ period is thirty days.', answers: ['retention'] },
        { kind: 'gap', text: 'Give people only the rights they need: the principle of least ___ .', answers: ['privilege'] },
        { kind: 'gap', text: 'Under ___ , users can ask us to delete their data.', answers: ['GDPR'] },
        { kind: 'gap', text: "Let's have a quick ___ after the client call.", answers: ['debrief'] },
        { kind: 'choice', prompt: 'Location history of a driver is…', options: ['personal data', 'public data', 'test data', 'not data'], answer: 0 },
        { kind: 'choice', prompt: '"Encrypted at rest" means encrypted…', options: ['when stored on disk', 'when sleeping', 'only at night', 'when sent'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'They asked where we stored the location data.' },
        { kind: 'dictation', text: 'They wanted to know if the data was encrypted.' },
        { kind: 'dictation', text: 'They asked how long we kept the logs.' },
        { kind: 'dictation', text: 'They asked whether drivers could delete their history.' },
        { kind: 'dictation', text: 'They asked why Nina had admin rights.' },
        { kind: 'dictation', text: 'They said it would be ready in two weeks.' },
        { kind: 'dictation', text: 'Follow the principle of least privilege.' },
        { kind: 'dictation', text: 'Our log retention is thirty days.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: report the questions',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'They asked where we stored the location data.' },
        { kind: 'shadow', text: 'They wanted to know if the data was encrypted at rest.' },
        { kind: 'shadow', text: 'They asked whether drivers could delete their history.' },
        { kind: 'shadow', text: 'They said the report would be ready in two weeks.' },
        {
          kind: 'speak',
          situation: 'Remember a job interview (or invent one). Report three questions they asked you.',
          keywords: ['they asked', 'if', 'what'],
          sample: 'They asked what my biggest project was. They asked if I had worked with GraphQL, and they wanted to know why I wanted to change jobs.',
        },
        {
          kind: 'speak',
          situation: 'A client called while your manager was away. Report two questions from the client and what you answered.',
          keywords: ['asked whether', 'I said'],
          sample: "The client asked whether the app would be ready by March. I said it probably would. They also asked who was responsible for testing, and I said it was Lena.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: audit interview notes',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write notes for Maya about the audit interview: list 5 questions the auditors asked (in reported form) and your answers.',
          checklist: [
            'Statement word order after *asked where/how/why*',
            '*if / whether* for yes/no questions',
            'Tense backshift',
            'Your answers with *I said / I explained*',
          ],
          minWords: 55,
          sample:
            "Audit interview notes\n- They asked where we stored the location data. I said it was in our EU database.\n- They wanted to know if the data was encrypted at rest. I said it was.\n- They asked how long we kept the logs. Ken said thirty days.\n- They asked whether drivers could delete their history. I explained that the feature was planned for March.\n- They asked why Nina had admin rights on staging. I explained that she needed them for testing.",
        },
      ],
    },
  ],
};

export default lesson;
