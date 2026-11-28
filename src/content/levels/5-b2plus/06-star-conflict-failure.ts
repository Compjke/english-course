import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2p-06',
  level: 'B2+',
  title: 'Day 91: Tell me about a time you failed',
  grammar: 'Difficult STAR questions: conflict, failure, disagreement — owning mistakes, neutral language',
  scene: 'Самые неудобные вопросы интервью: конфликт с коллегой, провал, несогласие с руководителем.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the hard questions',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Mock interview, part 2',
          format: 'call',
          lines: [
            { who: 'Kate', text: "Tell me about a time when you disagreed with a colleague." },
            { who: 'You', text: "Last spring, Arjun and I disagreed about online-first versus offline-first architecture. He was worried about the complexity, and I was worried about drivers losing connection." },
            { who: 'You', text: "Instead of arguing in the meeting, I asked Lena for field data. It showed that drivers lost connection ten times per shift. I shared it with Arjun one-on-one, and we agreed on a compromise: offline-first only for routes." },
            { who: 'You', text: "As a result, we kept the scope manageable, and offline routes became the most used feature. Arjun and I still work very well together." },
            { who: 'Kate', text: "Very good: you didn't blame him, and you used data. Now the hardest one: tell me about a failure." },
            { who: 'You', text: "Our photo upload feature lost 5% of photos in the first week. I had only tested it on office Wi-Fi, so that was my mistake." },
            { who: 'You', text: "I owned it immediately, explained the cause to the client the same day, and switched to the system background upload. Losses dropped below 0.5%. Since then, I always test on throttled networks, and I've added this to our release checklist." },
            { who: 'Kate', text: "Excellent. You owned it, fixed it, and changed the process. That's exactly what interviewers want to hear." },
          ],
        },
        { kind: 'choice', prompt: 'What did you and Arjun disagree about?', options: ['Online-first vs offline-first', 'Salaries', 'The logo', 'Holidays'], answer: 0 },
        { kind: 'choice', prompt: 'How did you resolve it?', options: ['With field data and a one-on-one conversation', 'By arguing in the meeting', 'By asking Maya to decide', 'By ignoring him'], answer: 0 },
        { kind: 'choice', prompt: 'What was your failure?', options: ['Photo uploads lost 5% of photos', 'A missed deadline', 'A lost client', 'A bad hire'], answer: 0 },
        { kind: 'choice', prompt: 'Why did it happen?', options: ['You had only tested on office Wi-Fi', 'Arjun broke it', 'The client', 'Apple'], answer: 0 },
        { kind: 'choice', prompt: 'What process change did you make?', options: ['Testing on throttled networks is in the release checklist', 'No more photos', 'Longer meetings', 'Nothing'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Language: talking about conflict and failure',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Conflict stories: neutral and respectful',
          body:
            'Interviewers check **how you treat people**. Describe the other person’s view **fairly**, focus on the **issue, not the person**, and show the **relationship stayed good**.\n\n' +
            'Neutral language:\n*We disagreed about… / We had different views on… / He was worried about…, and I was worried about…*\n*Instead of arguing, I… / I suggested we look at the data. / We agreed on a compromise.*\n*We still work very well together.*\n\n' +
            'Avoid: *He was wrong / stupid / difficult. I won.*',
        },
        {
          kind: 'theory',
          title: 'Failure stories: own, fix, learn',
          body:
            'A good failure story has four parts: **the mistake** (real, not fake like "I work too hard"), **ownership**, **the fix**, **what changed**.\n\n' +
            '*That was my mistake. / I underestimated… / I should have… / I owned it immediately.*\n*I fixed it by + -ing… / I switched to…*\n*Since then, I always… / I’ve added this to our checklist. / Now I make sure that…*\n\n' +
            'Tenses: Past Simple for the story, **Past Perfect** for what you had (not) done before (*I had only tested it on Wi-Fi*), **Present Perfect** for the lasting change (*I’ve added it to the checklist*), **Present Simple** for your new habit (*I always test…*).',
          table: [
            ['Part', 'Language'],
            ['mistake', 'I had only tested it on Wi-Fi. That was my mistake.'],
            ['ownership', 'I owned it immediately and told the client the same day.'],
            ['fix', 'I fixed it by switching to background upload.'],
            ['change', "Since then, I always test on slow networks. I've added it to the checklist."],
          ],
          pitfalls: [
            { wrong: 'My biggest failure is that I am a perfectionist.', right: 'Our photo feature lost 5% of photos because I had only tested on Wi-Fi.' },
            { wrong: 'It was the client’s fault.', right: 'That was my mistake, and here is what I changed.' },
            { wrong: 'He was completely wrong, and I proved it.', right: 'We had different views, so I suggested we look at the data.' },
            { wrong: 'Since then, I always tested on slow networks.', right: 'Since then, I always test on slow networks.' },
          ],
        },
        { kind: 'choice', prompt: 'Neutral way to describe a disagreement:', options: ['We had different views on the architecture.', 'He was wrong about everything.', 'I won the argument.', 'He is difficult.'], answer: 0 },
        { kind: 'choice', prompt: 'I ___ only tested it on office Wi-Fi. (before the release)', options: ['have', 'had', 'was', 'did'], answer: 1 },
        { kind: 'choice', prompt: 'Since then, I always ___ on throttled networks.', options: ['tested', 'test', 'had tested', 'was testing'], answer: 1 },
        { kind: 'choice', prompt: "I've ___ this to our release checklist.", options: ['add', 'added', 'adding', 'adds'], answer: 1 },
        { kind: 'choice', prompt: 'I fixed it ___ switching to background upload.', options: ['with', 'by', 'for', 'through to'], answer: 1 },
        { kind: 'choice', prompt: '___ arguing in the meeting, I asked for data.', options: ['Instead of', 'Instead', 'Rather', 'Except'], answer: 0 },
        { kind: 'choice', prompt: 'Best "failure" answer:', options: ['A real mistake, ownership, a fix, a process change', 'I never fail', 'I work too hard', 'It was not my fault'], answer: 0 },
        { kind: 'choice', prompt: 'Showing the relationship is fine:', options: ['We still work very well together.', 'We never talk now.', 'He left the company.', 'I don’t care about him.'], answer: 0 },
        { kind: 'gap', text: 'He was worried ___ the complexity.', answers: ['about'] },
        { kind: 'gap', text: 'That was my ___ . I should have tested more.', answers: ['mistake', 'fault'] },
        { kind: 'gap', text: 'I ___ it immediately and told the client. (took responsibility)', answers: ['owned'] },
        { kind: 'gap', text: 'We agreed ___ a compromise.', answers: ['on'] },
        { kind: 'gap', text: 'I ___ the effort needed. (thought it was smaller)', answers: ['underestimated'] },
        { kind: 'gap', text: 'Now I make ___ that every feature is tested on 3G.', answers: ['sure'] },
        { kind: 'gap', text: 'I suggested we ___ at the data together.', answers: ['look'] },
        { kind: 'transform', instruction: 'Make it neutral and respectful', source: 'My manager was wrong about the deadline.', answers: ['My manager and I had different views on the deadline.', 'My manager and I disagreed about the deadline.', 'We had different views on the deadline.'] },
        { kind: 'transform', instruction: 'Show ownership', source: 'The bug happened because the test environment was bad.', answers: ['That was my mistake: I had not tested it properly.', "That was my mistake: I hadn't tested it properly.", 'I should have tested it properly. That was my mistake.'] },
        { kind: 'transform', instruction: 'Describe the lasting change (Since then…)', source: 'After the incident, I started writing a checklist and I still do it.', answers: ['Since then, I always write a checklist.', 'Since then, I have always written a checklist.', "Since then, I've always written a checklist."] },
        { kind: 'fix', sentence: 'Instead to argue, I collected data.', answers: ['Instead of arguing, I collected data.'] },
        { kind: 'fix', sentence: 'I fixed it with switching the API.', answers: ['I fixed it by switching the API.'] },
        { kind: 'fix', sentence: 'We agreed about a compromise.', answers: ['We agreed on a compromise.'] },
        { kind: 'fix', sentence: 'Before the release, I have only tested on Wi-Fi.', answers: ['Before the release, I had only tested on Wi-Fi.'] },
        { kind: 'fix', sentence: 'Since then, I always checked the logs.', answers: ['Since then, I always check the logs.', 'Since then, I have always checked the logs.'] },
        { kind: 'order', words: ['That', 'was', 'my', 'mistake', '.'], ru: 'Это была моя ошибка.' },
        { kind: 'order', words: ['We', 'had', 'different', 'views', 'on', 'it', '.'], ru: 'У нас были разные взгляды на это.' },
        { kind: 'order', words: ['Since', 'then', ',', 'I', 'always', 'test', 'on', '3G', '.'], ru: 'С тех пор я всегда тестирую на 3G.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: conflict & learning',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'disagreed about', ru: 'разошлись во мнении о', example: 'We disagreed about the architecture.' },
            { chunk: 'different views', ru: 'разные взгляды', example: 'We had different views on the scope.' },
            { chunk: 'one-on-one', ru: 'один на один', example: 'I talked to him one-on-one.' },
            { chunk: 'manageable', ru: 'управляемый, посильный', example: 'We kept the scope manageable.' },
            { chunk: 'owned it', ru: 'признал ответственность', example: 'I owned it immediately.' },
            { chunk: 'throttled network', ru: 'искусственно замедленная сеть', example: 'Test on a throttled network.' },
            { chunk: 'release checklist', ru: 'чек-лист релиза', example: "I've added it to the release checklist." },
            { chunk: 'underestimated', ru: 'недооценил', example: 'I underestimated the integration.' },
            { chunk: 'common ground', ru: 'общая позиция', example: 'We found common ground.' },
            { chunk: 'constructive', ru: 'конструктивный', example: 'It was a constructive discussion.' },
            { chunk: 'learning experience', ru: 'полезный опыт', example: 'It was a painful but useful learning experience.' },
            { chunk: 'blame', ru: 'винить', example: "Don't blame other people in interviews." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['common ground', 'общая позиция'],
            ['constructive', 'конструктивный'],
            ['manageable', 'посильный'],
            ['underestimated', 'недооценил'],
            ['one-on-one', 'один на один'],
          ],
        },
        { kind: 'gap', text: 'After a long talk, we found common ___ .', answers: ['ground'] },
        { kind: 'gap', text: 'It was a painful but valuable learning ___ .', answers: ['experience'] },
        { kind: 'gap', text: 'The discussion was tense but ___ .', answers: ['constructive'] },
        { kind: 'gap', text: "Never ___ your colleagues in an interview.", answers: ['blame'] },
        { kind: 'gap', text: 'I talked to him ___ -on-one after the meeting.', answers: ['one'] },
        { kind: 'choice', prompt: 'What do interviewers want to hear in a failure story?', options: ['Ownership, a fix and a lasting change', 'That you never fail', 'Who was guilty', 'A long excuse'], answer: 0 },
        { kind: 'choice', prompt: 'Weak answer to "Tell me about a failure":', options: ['"I\'m a perfectionist."', 'A real story with numbers', 'A story with a lesson', 'A story with a process change'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'Arjun and I disagreed about the architecture.' },
        { kind: 'dictation', text: 'Instead of arguing in the meeting, I asked for field data.' },
        { kind: 'dictation', text: 'We agreed on a compromise.' },
        { kind: 'dictation', text: 'We still work very well together.' },
        { kind: 'dictation', text: 'I had only tested it on office Wi-Fi.' },
        { kind: 'dictation', text: 'That was my mistake, and I owned it immediately.' },
        { kind: 'dictation', text: 'Since then, I always test on throttled networks.' },
        { kind: 'dictation', text: "I've added this to our release checklist." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: hard STAR answers',
      minutes: 14,
      items: [
        { kind: 'shadow', text: 'We had different views. He was worried about complexity, and I was worried about connectivity.' },
        { kind: 'shadow', text: 'Instead of arguing, I suggested we look at the data.' },
        { kind: 'shadow', text: 'That was my mistake. I had only tested it on Wi-Fi.' },
        { kind: 'shadow', text: "Since then, I always test on slow networks, and I've added it to our checklist." },
        {
          kind: 'speak',
          situation: '"Tell me about a time you disagreed with your manager." Answer respectfully with STAR.',
          keywords: ['different views', 'instead of', 'agreed'],
          sample: "My manager wanted to skip the load test to save time. We had different views on the risk. Instead of refusing, I showed her last year's incident data. We agreed on a shorter test, and it found a critical bug.",
        },
        {
          kind: 'speak',
          situation: '"Tell me about a failure." Use a real mistake: own it, fix it, change the process.',
          keywords: ['my mistake', 'I fixed it by', 'since then'],
          sample: "I once deployed a migration without a backup, and we lost an hour of data. That was my mistake. I fixed it by restoring from logs. Since then, I always check the backup before any migration.",
        },
        {
          kind: 'speak',
          situation: '"How do you handle conflict in a team?" Give a short principle and an example.',
          keywords: ['issue, not the person', 'data'],
          sample: "I focus on the issue, not the person. For example, when two developers argued about a library, I asked both to bring data. We chose the faster one, and nobody felt personally defeated.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: two hard stories',
      minutes: 10,
      items: [
        {
          kind: 'write',
          task: 'Write two short STAR stories: 1) a disagreement with a colleague, 2) a professional failure. Use neutral language, ownership, and a lasting change.',
          checklist: [
            'Respectful description of the other view',
            'Data or compromise in the conflict story',
            'Clear ownership in the failure story (*That was my mistake*)',
            'Past Perfect + Present Perfect/Simple for the lasting change',
          ],
          minWords: 110,
          sample:
            "1. Disagreement: Last spring, Arjun and I disagreed about the driver app architecture. He was worried about the complexity of offline-first, and I was worried about drivers losing connection. Instead of arguing in the meeting, I asked Lena for field data, which showed ten connection losses per shift. I shared it with Arjun one-on-one, and we agreed on a compromise: offline-first only for routes. Offline routes became our most used feature, and we still work very well together.\n\n2. Failure: Our photo upload feature lost 5% of photos in the first week. I had only tested it on office Wi-Fi, so that was my mistake. I owned it immediately, informed the client the same day, and fixed it by switching to the system background upload. Losses dropped below 0.5%. Since then, I always test on throttled networks, and I've added this step to our release checklist.",
        },
      ],
    },
  ],
};

export default lesson;
