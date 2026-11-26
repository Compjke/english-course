import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1p-09',
  level: 'B1+',
  title: "Day 49: It can't be the network",
  grammar: 'Modals of deduction (present): must / can’t / might / could be',
  scene: 'Водители жалуются, что GPS «прыгает». Команда строит гипотезы.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: jumping GPS',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Debugging session',
          format: 'call',
          lines: [
            { who: 'Lena', text: "Drivers say their position jumps 200 metres sometimes. Any ideas?" },
            { who: 'Nina', text: "It might be the network. Maybe the requests arrive in the wrong order." },
            { who: 'You', text: "It can't be the network. We sort points by timestamp on the server." },
            { who: 'Arjun', text: "Then it must be the phones. Cheap GPS chips are often inaccurate in cities." },
            { who: 'Lena', text: "But it happens on new iPhones too. So it can't only be cheap chips." },
            { who: 'You', text: "Wait. Do the jumps happen near tall buildings? That could be signal reflection." },
            { who: 'Lena', text: "Let me check… Yes! Most of them are in the city centre." },
            { who: 'Arjun', text: "Then it must be reflection. The fix might be a simple filter that ignores impossible speeds." },
            { who: 'Nina', text: "That can't be difficult. Can I try it?" },
            { who: 'You', text: "Sure. You must be tired of UI tasks anyway." },
          ],
        },
        { kind: 'choice', prompt: 'What is the problem?', options: ['Position jumps 200 metres', 'App crashes', 'No GPS at all', 'Slow login'], answer: 0 },
        { kind: 'choice', prompt: 'Why can’t it be the network?', options: ['Points are sorted by timestamp on the server', 'The network is perfect', 'There is no network', 'Ken said so'], answer: 0 },
        { kind: 'choice', prompt: 'Why can’t it only be cheap chips?', options: ['It happens on new iPhones too', 'Cheap chips are perfect', 'Nobody uses cheap phones', 'Arjun checked'], answer: 0 },
        { kind: 'choice', prompt: 'Where do most jumps happen?', options: ['In the countryside', 'In the city centre near tall buildings', 'On highways', 'At the depot'], answer: 1 },
        { kind: 'choice', prompt: 'What might the fix be?', options: ['A filter for impossible speeds', 'New phones', 'A new server', 'Turning GPS off'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: logical guesses (present)',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'How sure are you?',
          body:
            'When we **guess** about the present using logic or evidence, we use modal verbs:\n\n' +
            '**must** — I’m almost sure it’s true (strong logical conclusion): *It must be reflection.* *You must be tired.*\n' +
            '**might / may / could** — it’s possible: *It might be the network. That could be signal reflection.*\n' +
            '**can’t / couldn’t** — I’m almost sure it’s NOT true: *It can’t be the network.*\n\n' +
            'Important: the negative of logical *must* is **can’t**, not *mustn’t*! (*mustn’t* means "forbidden".)\n\n' +
            'For actions in progress: *must/might/can’t + be + -ing*: *He must be sleeping. They might be deploying right now.*',
          table: [
            ['Certainty', 'Modal', 'Example'],
            ['~95% yes', 'must', 'It **must be** the phones.'],
            ['~50%', 'might / may / could', 'It **might be** the network.'],
            ['~95% no', "can't / couldn't", "It **can't be** the network."],
            ['in progress', 'must/might be + -ing', 'Ken **must be sleeping**.'],
          ],
          pitfalls: [
            { wrong: "It mustn't be the network. (= I'm sure it isn't)", right: "It can't be the network." },
            { wrong: 'It must to be the phones.', right: 'It must be the phones.' },
            { wrong: 'He can be at home. (= maybe)', right: 'He might be at home. / He could be at home.' },
            { wrong: "She mustn't be tired after 2 hours of sleep.", right: 'She must be tired after 2 hours of sleep.' },
          ],
        },
        { kind: 'choice', prompt: "We sort points on the server, so it ___ be the network.", options: ["mustn't", "can't", 'might', 'must'], answer: 1 },
        { kind: 'choice', prompt: "It happens only near tall buildings. It ___ be reflection.", options: ['must', "can't", 'mustn’t', 'should to'], answer: 0 },
        { kind: 'choice', prompt: "I'm not sure. It ___ be the GPS chip.", options: ['must', 'might', "can't", 'has to'], answer: 1 },
        { kind: 'choice', prompt: "You've been working for twelve hours. You ___ be exhausted!", options: ['must', "can't", 'might not', "mustn't"], answer: 0 },
        { kind: 'choice', prompt: "Ken isn't answering. He ___ be sleeping, he was on call last night.", options: ["can't", 'must', 'mustn’t', 'should'], answer: 1 },
        { kind: 'choice', prompt: "That ___ be Arjun's laptop, he has a Mac and this is a ThinkPad.", options: ['must', "can't", 'might', 'could'], answer: 1 },
        { kind: 'choice', prompt: '"It could be the cache" means…', options: ['It is possibly the cache', 'It is definitely the cache', 'It was able to be the cache', 'It is not the cache'], answer: 0 },
        { kind: 'gap', text: 'The build is green on my machine, so the problem ___ be in the code. (no)', answers: ["can't", 'cannot', "couldn't"] },
        { kind: 'gap', text: 'All the errors come from one depot. It ___ be their scanner. (sure)', answers: ['must'] },
        { kind: 'gap', text: "I don't know where Lena is. She ___ be in a meeting. (maybe)", answers: ['might', 'may', 'could'] },
        { kind: 'gap', text: 'The office lights are on. Someone must ___ working late.', answers: ['be'] },
        { kind: 'gap', text: "This can't ___ right. The ETA is 300 hours!", answers: ['be'] },
        { kind: 'gap', text: 'They ___ be deploying now. The dashboard shows a new version. (sure)', answers: ['must'] },
        { kind: 'gap', text: "You ___ be serious! Another meeting today? (you can't…)", answers: ["can't", 'cannot'] },
        { kind: 'transform', instruction: 'Use must', source: "I'm sure this is a caching problem.", answers: ['This must be a caching problem.', 'It must be a caching problem.'] },
        { kind: 'transform', instruction: "Use can't", source: "I'm sure it isn't the database. We didn't touch it.", answers: ["It can't be the database.", 'It cannot be the database.'] },
        { kind: 'transform', instruction: 'Use might', source: 'Perhaps the client is on holiday.', answers: ['The client might be on holiday.'] },
        { kind: 'transform', instruction: 'Use must + be + -ing', source: "I'm sure Arjun is debugging something. He looks stressed.", answers: ['Arjun must be debugging something.'] },
        { kind: 'fix', sentence: "It mustn't be the network, we checked it.", answers: ["It can't be the network, we checked it."] },
        { kind: 'fix', sentence: 'He must to be at lunch.', answers: ['He must be at lunch.'] },
        { kind: 'fix', sentence: "She can't being at home, I just saw her here.", answers: ["She can't be at home, I just saw her here."] },
        { kind: 'fix', sentence: 'It may is a memory leak.', answers: ['It may be a memory leak.'] },
        { kind: 'fix', sentence: 'You must being tired.', answers: ['You must be tired.'] },
        { kind: 'order', words: ['It', "can't", 'be', 'the', 'network', '.'], ru: 'Это не может быть сеть.' },
        { kind: 'order', words: ['It', 'must', 'be', 'signal', 'reflection', '.'], ru: 'Это, должно быть, отражение сигнала.' },
        { kind: 'order', words: ['He', 'might', 'be', 'in', 'a', 'meeting', '.'], ru: 'Возможно, он на встрече.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: hypotheses',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'any ideas', ru: 'есть идеи?', example: 'Any ideas what it could be?' },
            { chunk: 'inaccurate', ru: 'неточный', example: 'GPS is often inaccurate in cities.' },
            { chunk: 'signal reflection', ru: 'отражение сигнала', example: 'That could be signal reflection.' },
            { chunk: 'hypothesis', ru: 'гипотеза', example: 'My hypothesis is the cache.' },
            { chunk: 'evidence', ru: 'доказательства, данные', example: 'What is the evidence?' },
            { chunk: 'rule out', ru: 'исключить', example: 'We can rule out the network.' },
            { chunk: 'narrow it down', ru: 'сузить круг', example: "Let's narrow it down." },
            { chunk: 'impossible speeds', ru: 'невозможные скорости', example: 'Ignore impossible speeds.' },
            { chunk: 'in the wrong order', ru: 'в неправильном порядке', example: 'The requests arrive in the wrong order.' },
            { chunk: 'a simple filter', ru: 'простой фильтр', example: 'The fix might be a simple filter.' },
            { chunk: 'tired of', ru: 'устал от', example: 'You must be tired of UI tasks.' },
            { chunk: 'let me check', ru: 'дай проверю', example: 'Let me check the logs.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['rule out', 'исключить'],
            ['narrow it down', 'сузить круг'],
            ['hypothesis', 'гипотеза'],
            ['evidence', 'доказательства'],
            ['inaccurate', 'неточный'],
          ],
        },
        { kind: 'gap', text: 'We can rule ___ the database; it was fine all day.', answers: ['out'] },
        { kind: 'gap', text: "Let's narrow it ___ to one service.", answers: ['down'] },
        { kind: 'gap', text: 'Do you have any ___ for that? Logs, screenshots?', answers: ['evidence'] },
        { kind: 'gap', text: "Let me ___ the dashboard.", answers: ['check'] },
        { kind: 'gap', text: "I'm tired ___ fixing the same bug.", answers: ['of'] },
        { kind: 'choice', prompt: 'Good debugging language:', options: ['It might be the cache, but let’s check the evidence first.', "It's 100% the cache, trust me.", 'Who broke it?', 'No idea, bye.'], answer: 0 },
        { kind: 'choice', prompt: '"Rule out" means…', options: ['exclude as a possibility', 'make a rule', 'go out', 'measure'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'It might be the network.' },
        { kind: 'dictation', text: "It can't be the network." },
        { kind: 'dictation', text: 'Then it must be the phones.' },
        { kind: 'dictation', text: 'That could be signal reflection.' },
        { kind: 'dictation', text: 'The fix might be a simple filter.' },
        { kind: 'dictation', text: 'You must be tired of UI tasks.' },
        { kind: 'dictation', text: 'We can rule out the database.' },
        { kind: 'dictation', text: "Let's narrow it down." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: make guesses',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "It can't be the network. We sort points on the server." },
        { kind: 'shadow', text: 'It must be signal reflection near tall buildings.' },
        { kind: 'shadow', text: 'It might be the cache, but let me check.' },
        { kind: 'shadow', text: 'You must be tired after the night on call.' },
        {
          kind: 'speak',
          situation: 'The website is slow only for users in Asia. Make three guesses with different certainty.',
          keywords: ['must', 'might', "can't"],
          sample: "It must be the distance to our servers in Europe. It might be the CDN configuration. It can't be the code, because Europe is fast.",
        },
        {
          kind: 'speak',
          situation: 'A colleague hasn’t replied all morning. Guess why (at least two guesses).',
          keywords: ['must be', 'might be'],
          sample: "He must be in the workshop, it's on his calendar. Or he might be ill. He can't be on holiday, because he was online yesterday.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: hypotheses in a ticket',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a comment in the "GPS jumps" ticket: list hypotheses (likely, possible, unlikely), the evidence for each, and the next step.',
          checklist: [
            '*must be* for strong conclusions',
            '*might / could be* for possibilities',
            "*can't be* for impossible options",
            'Evidence and next step',
          ],
          minWords: 50,
          sample:
            "Hypotheses:\n1. It must be GPS signal reflection: 80% of jumps are in the city centre near tall buildings.\n2. It could also be cheap GPS chips, but this can't be the only reason, because new iPhones have the same problem.\n3. It can't be the network: we sort points by timestamp on the server.\nNext step: Nina will add a filter that ignores impossible speeds (over 200 km/h).",
        },
      ],
    },
  ],
};

export default lesson;
