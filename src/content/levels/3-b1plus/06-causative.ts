import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1p-06',
  level: 'B1+',
  title: 'Day 46: We had the app audited',
  grammar: 'Causative: have / get something done; have / get someone do',
  scene: 'Клиент требует аудит безопасности. Решаем, что делаем сами, а что поручаем другим.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the security audit',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Security planning',
          format: 'call',
          lines: [
            { who: 'Maya', text: "The client wants a security audit before the full launch. We can't do it ourselves, so we'll have it done by an external company." },
            { who: 'Ken', text: "Last year we had the web app audited by SecureLab. They were good. I can get them to start next week." },
            { who: 'Arjun', text: "Before that, we should get the dependencies updated. Some libraries are two years old." },
            { who: 'You', text: "I'll have Nina run the dependency scanner today. It's a good learning task." },
            { who: 'Maya', text: "Good. And Tom, can you get the client to sign the NDA for the auditors?" },
            { who: 'Tom', text: "Sure. I'll have it sent today." },
            { who: 'Lena', text: "One more thing: we need to get the test devices reset. The auditors want clean phones." },
            { who: 'Ken', text: "I'll get IT to reset them on Monday." },
            { who: 'Maya', text: "Perfect. Last question: should we get the report translated into Polish for the client's legal team?" },
            { who: 'Tom', text: "Yes, they asked for it. I'll get it done." },
          ],
        },
        { kind: 'choice', prompt: 'Who will do the security audit?', options: ['The team', 'An external company', 'The client', 'Nina alone'], answer: 1 },
        { kind: 'choice', prompt: 'What should be updated before the audit?', options: ['The logo', 'The dependencies', 'The office', 'The contract'], answer: 1 },
        { kind: 'choice', prompt: 'Who will run the dependency scanner?', options: ['Ken', 'Nina', 'Arjun', 'Tom'], answer: 1 },
        { kind: 'choice', prompt: 'Who will reset the test devices?', options: ['Lena', 'IT', 'The auditors', 'You'], answer: 1 },
        { kind: 'choice', prompt: 'What will be translated?', options: ['The app', 'The audit report', 'The NDA', 'The code'], answer: 1 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: causative',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'have / get something done',
          body:
            'We use the **causative** when **someone else does something for us** (we arrange it, pay for it, or ask for it):\n\n' +
            '**have + object + past participle**: *We’ll have the app audited.* (A company will audit it for us.)\n**get + object + past participle**: *We should get the dependencies updated.* (same meaning, more informal)\n\n' +
            'Compare:\n*I fixed my laptop.* (I did it myself.)\n*I had my laptop fixed.* (A technician did it.)\n\n' +
            'Any tense is possible: *We had it audited last year. We’re having the office painted. I’ll get it done.*',
          examples: ['We had the web app audited last year.', 'We should get the dependencies updated.', "I'll have it sent today.", "I'll get it done."],
        },
        {
          kind: 'theory',
          title: 'have someone do / get someone to do',
          body:
            'When we name **the person** who does the job:\n\n' +
            '**have + person + infinitive (without to)**: *I’ll have Nina run the scanner.*\n**get + person + to + infinitive**: *I can get them to start next week. Can you get the client to sign the NDA?*\n\n' +
            '*get someone to do* often means you need to persuade them.',
          table: [
            ['Pattern', 'Example'],
            ['have + thing + V3', "We'll **have the app audited**."],
            ['get + thing + V3', "Let's **get the devices reset**."],
            ['have + person + V', "I'll **have Nina run** the scanner."],
            ['get + person + to V', "Can you **get the client to sign** it?"],
          ],
          pitfalls: [
            { wrong: 'We will have audited the app. (= someone audits it)', right: 'We will have the app audited.', note: 'Word order matters: object before V3.' },
            { wrong: "I'll have Nina to run the scanner.", right: "I'll have Nina run the scanner." },
            { wrong: 'Can you get the client sign it?', right: 'Can you get the client to sign it?' },
            { wrong: 'I got fixed my phone.', right: 'I got my phone fixed.' },
          ],
        },
        { kind: 'choice', prompt: "We can't do the audit ourselves, so we'll ___ .", options: ['audit it', 'have it audited', 'have audited it', 'get audit it'], answer: 1 },
        { kind: 'choice', prompt: "I'll have Nina ___ the scanner.", options: ['run', 'to run', 'running', 'ran'], answer: 0 },
        { kind: 'choice', prompt: 'Can you get the client ___ the NDA?', options: ['sign', 'to sign', 'signed', 'signing'], answer: 1 },
        { kind: 'choice', prompt: 'We should get the dependencies ___ .', options: ['update', 'to update', 'updated', 'updating'], answer: 2 },
        { kind: 'choice', prompt: 'Last year we ___ by SecureLab.', options: ['audited the app', 'had the app audited', 'had audited the app', 'got audit the app'], answer: 1 },
        { kind: 'choice', prompt: 'My laptop screen broke, so I ___ .', options: ['had it repaired', 'repaired it by a shop', 'had repaired it', 'got it repair'], answer: 0 },
        { kind: 'choice', prompt: "I'll get IT ___ the phones on Monday.", options: ['reset', 'to reset', 'resetting', 'resets'], answer: 1 },
        { kind: 'gap', text: 'We need to get the report ___ (translate) into Polish.', answers: ['translated'] },
        { kind: 'gap', text: "I'll have it ___ (send) today.", answers: ['sent'] },
        { kind: 'gap', text: 'Maya had Ken ___ (check) the firewall rules.', answers: ['check'] },
        { kind: 'gap', text: 'I finally got Arjun ___ (review) my PR.', answers: ['to review'] },
        { kind: 'gap', text: 'We are having the office ___ (paint) next week.', answers: ['painted'] },
        { kind: 'gap', text: 'Did you get your access ___ (fix)?', answers: ['fixed'] },
        { kind: 'gap', text: "Don't worry, I'll get it ___ (do) by Friday.", answers: ['done'] },
        { kind: 'transform', instruction: 'Use have something done', source: 'An external company will test our app.', answers: ['We will have our app tested by an external company.', "We'll have our app tested by an external company.", 'We will have our app tested.'] },
        { kind: 'transform', instruction: 'Use have + person + verb', source: 'I will ask Lena to test the login.', answers: ["I'll have Lena test the login.", 'I will have Lena test the login.'] },
        { kind: 'transform', instruction: 'Use get + person + to', source: 'Tom will persuade the client to approve the budget.', answers: ['Tom will get the client to approve the budget.'] },
        { kind: 'transform', instruction: 'Use get something done', source: 'Someone needs to reset the test devices.', answers: ['We need to get the test devices reset.'] },
        { kind: 'fix', sentence: "I'll have Ken to restart the server.", answers: ["I'll have Ken restart the server.", 'I will have Ken restart the server.'] },
        { kind: 'fix', sentence: 'We had audited our app by SecureLab.', answers: ['We had our app audited by SecureLab.'] },
        { kind: 'fix', sentence: 'Can you get him sign the contract?', answers: ['Can you get him to sign the contract?'] },
        { kind: 'fix', sentence: 'I got cut my hair yesterday.', answers: ['I got my hair cut yesterday.', 'I had my hair cut yesterday.'] },
        { kind: 'fix', sentence: 'We need to get the data backup.', answers: ['We need to get the data backed up.'] },
        { kind: 'order', words: ["We'll", 'have', 'the', 'app', 'audited', '.'], ru: 'Мы закажем аудит приложения.' },
        { kind: 'order', words: ["I'll", 'have', 'Nina', 'run', 'the', 'scanner', '.'], ru: 'Я поручу Nina запустить сканер.' },
        { kind: 'order', words: ["I'll", 'get', 'it', 'done', '.'], ru: 'Я это организую / сделаю.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: security',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'security audit', ru: 'аудит безопасности', example: 'The client wants a security audit.' },
            { chunk: 'external company', ru: 'сторонняя компания', example: 'An external company will do it.' },
            { chunk: 'dependencies', ru: 'зависимости', example: 'Some dependencies are two years old.' },
            { chunk: 'dependency scanner', ru: 'сканер зависимостей', example: 'Run the dependency scanner.' },
            { chunk: 'vulnerability', ru: 'уязвимость', example: 'The scanner found one vulnerability.' },
            { chunk: 'NDA', ru: 'соглашение о неразглашении', example: 'The auditors must sign an NDA.' },
            { chunk: 'penetration test', ru: 'тест на проникновение', example: 'They will run a penetration test.' },
            { chunk: 'clean phones', ru: 'чистые (сброшенные) телефоны', example: 'The auditors want clean phones.' },
            { chunk: 'legal team', ru: 'юридический отдел', example: "The client's legal team will read it." },
            { chunk: 'encrypted', ru: 'зашифрован', example: 'All data is encrypted.' },
            { chunk: 'patch', ru: 'патч, исправление', example: 'We need to patch this library.' },
            { chunk: 'get it done', ru: 'сделать, решить вопрос', example: "Don't worry, I'll get it done." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['vulnerability', 'уязвимость'],
            ['penetration test', 'тест на проникновение'],
            ['patch', 'исправление'],
            ['encrypted', 'зашифрованный'],
            ['legal team', 'юридический отдел'],
          ],
        },
        { kind: 'gap', text: 'The scanner found a critical ___ in an old library.', answers: ['vulnerability'] },
        { kind: 'gap', text: 'All location data must be ___ .', answers: ['encrypted'] },
        { kind: 'gap', text: "We'll ___ the library today.", answers: ['patch'] },
        { kind: 'gap', text: 'Hackers will try to break in during the ___ test.', answers: ['penetration'] },
        { kind: 'gap', text: 'The auditors must sign an ___ first.', answers: ['NDA'] },
        { kind: 'choice', prompt: 'A short "pentest" is…', options: ['a penetration test', 'a pen for testing', 'a pencil test', 'a performance test'], answer: 0 },
        { kind: 'choice', prompt: 'Someone asks you to organise something. Confident answer:', options: ["Sure, I'll get it done.", 'I try maybe.', 'Not my job.', 'Who knows.'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "We'll have it done by an external company." },
        { kind: 'dictation', text: 'Last year we had the web app audited.' },
        { kind: 'dictation', text: 'We should get the dependencies updated.' },
        { kind: 'dictation', text: "I'll have Nina run the dependency scanner." },
        { kind: 'dictation', text: 'Can you get the client to sign the NDA?' },
        { kind: 'dictation', text: "I'll get IT to reset them on Monday." },
        { kind: 'dictation', text: 'The scanner found one vulnerability.' },
        { kind: 'dictation', text: "Don't worry, I'll get it done." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: delegating',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "We can't do it ourselves, so we'll have it done." },
        { kind: 'shadow', text: "I'll have Nina run the scanner today." },
        { kind: 'shadow', text: 'Can you get the client to sign the NDA?' },
        { kind: 'shadow', text: "Don't worry, I'll get it done." },
        {
          kind: 'speak',
          situation: 'Talk about things you have done for you by others (at home or at work): repairs, services, tasks you delegated.',
          keywords: ['had my', 'got my'],
          sample: "Last month I had my laptop repaired, and I got my flat cleaned before my parents came. At work I had the old tests rewritten by an intern.",
        },
        {
          kind: 'speak',
          situation: 'You are the lead. Delegate three tasks before a release: name the people and the tasks.',
          keywords: ["I'll have", 'get', 'to'],
          sample: "I'll have Lena test the payment flow. I'll get Ken to update the servers. And I'll have the release notes translated by the agency.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: audit preparation plan',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write an audit preparation plan for Maya: what will be done by whom, what you will have done by external people, and what you will get others to do.',
          checklist: [
            '*have/get + thing + V3*',
            '*have + person + verb*',
            '*get + person + to + verb*',
            'Clear owners and dates',
          ],
          minWords: 50,
          sample:
            "Audit preparation plan\n1. We'll have the app audited by SecureLab next week; Ken will get them to start on Monday.\n2. I'll have Nina run the dependency scanner today, and we'll get the old libraries updated by Wednesday.\n3. Tom will get the client to sign the NDA.\n4. Ken will get IT to reset the test devices.\n5. After the audit, we'll have the report translated into Polish for the client's legal team.",
        },
      ],
    },
  ],
};

export default lesson;
