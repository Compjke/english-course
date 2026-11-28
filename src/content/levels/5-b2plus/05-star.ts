import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2p-05',
  level: 'B2+',
  title: 'Day 90: Tell me about a time when…',
  grammar: 'STAR answers: Situation, Task, Action, Result — tenses and "I" vs "we"',
  scene: 'Подготовка к поведенческому интервью с Kate из HR: тренируем STAR.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: mock interview',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Mock behavioural interview',
          format: 'call',
          lines: [
            { who: 'Kate', text: "Tell me about a time when you had to deliver under a tight deadline." },
            { who: 'You', text: "Sure. Last year, our client wanted to launch in twenty German depots in May, but the SAP integration was behind schedule. That was the situation." },
            { who: 'You', text: "As the tech lead, my task was to protect the launch date without risking a major outage." },
            { who: 'You', text: "First, I analysed the load test data and identified the riskiest depots. Then I proposed a phased rollout to the client and negotiated a launch with five depots. I also set up alerts so we could react within fifteen minutes." },
            { who: 'You', text: "As a result, we launched on time, and when one depot failed, only 4% of deliveries were affected instead of all of them. The client extended the contract for two more countries." },
            { who: 'Kate', text: "Great structure. One comment: you said 'we' a lot at first. In interviews, make your own actions clear: 'I analysed', 'I proposed'." },
            { who: 'You', text: "Got it. And should I mention what I learned?" },
            { who: 'Kate', text: "Yes, a short reflection at the end is perfect: 'What I learned was…'. Keep the whole answer under two minutes." },
          ],
        },
        { kind: 'choice', prompt: 'What was the situation?', options: ['A launch in Germany with SAP behind schedule', 'A team conflict', 'A new hire', 'A holiday'], answer: 0 },
        { kind: 'choice', prompt: 'What was your task?', options: ['Protect the launch date without a major outage', 'Write documentation', 'Hire people', 'Fix the UI'], answer: 0 },
        { kind: 'choice', prompt: 'Which actions did you take?', options: ['Analysed data, proposed a phased rollout, set up alerts', 'Waited', 'Asked Maya to decide', 'Worked nights alone'], answer: 0 },
        { kind: 'choice', prompt: 'What was the result?', options: ['On-time launch, limited impact, contract extended', 'Failure', 'Delay', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: "What is Kate's main comment?", options: ['Make your own actions clear with "I"', 'Use "we" more', 'Speak longer', 'Skip the result'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Language: the STAR structure',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'STAR',
          body:
            'Behavioural questions (*Tell me about a time when… / Give me an example of… / Describe a situation where…*) are answered with **STAR**:\n\n' +
            '**S — Situation** (context, 1–2 sentences): Past Simple / Past Continuous / Past Perfect: *Last year, our client wanted… The integration was behind schedule.*\n' +
            '**T — Task** (your responsibility): *My task was to… / I was responsible for…*\n' +
            '**A — Action** (most of the answer!): Past Simple with **I**: *I analysed… I proposed… I negotiated…* Use sequencers: *First, Then, After that*.\n' +
            '**R — Result** (numbers!): *As a result, … / This led to… / We reduced X by Y%.*\n' +
            '+ **Reflection**: *What I learned was… / Looking back, I would…*',
          table: [
            ['Part', 'Typical language'],
            ['Situation', 'Last year, … / At my previous company, … / We were facing…'],
            ['Task', 'My task was to… / I was responsible for… / I needed to…'],
            ['Action', 'I analysed / proposed / convinced / organised… First, … Then, …'],
            ['Result', 'As a result, … / This led to… / In the end, … (+ numbers)'],
            ['Reflection', 'What I learned was… / If I did it again, I would…'],
          ],
        },
        {
          kind: 'theory',
          title: 'Strong action verbs',
          body:
            'Use specific verbs instead of *did / made / worked on*: *analysed, identified, proposed, negotiated, convinced, led, coordinated, introduced, automated, reduced, prioritised, mentored, escalated, resolved*.\n\n' +
            '"I" vs "we": it is fine to mention the team, but the interviewer evaluates **you**: *We had a tight deadline. **I** proposed a phased rollout.*',
          pitfalls: [
            { wrong: 'We did many things and it was good.', right: 'I proposed a phased rollout. As a result, only 4% of deliveries were affected.' },
            { wrong: 'My task was analyse the risks.', right: 'My task was to analyse the risks.' },
            { wrong: 'As result, we launched on time.', right: 'As a result, we launched on time.' },
            { wrong: 'What I learned is that… (very long story without action)', right: 'Keep Situation short; spend most time on Action.' },
          ],
        },
        { kind: 'choice', prompt: 'Which part of STAR should be the longest?', options: ['Situation', 'Task', 'Action', 'Result'], answer: 2 },
        { kind: 'choice', prompt: 'My task was ___ the launch date.', options: ['protect', 'to protect', 'protecting', 'protected'], answer: 1 },
        { kind: 'choice', prompt: '___ a result, we launched on time.', options: ['As', 'For', 'By', 'In'], answer: 0 },
        { kind: 'choice', prompt: 'Strongest action sentence:', options: ['I negotiated a phased launch with the client.', 'We kind of talked.', 'Things were done.', 'I was there.'], answer: 0 },
        { kind: 'choice', prompt: 'Best result sentence:', options: ['This led to a 60% reduction in incidents.', 'It was nice.', 'Everybody was happy, I think.', 'Something improved.'], answer: 0 },
        { kind: 'choice', prompt: 'A typical behavioural question:', options: ['Tell me about a time when you disagreed with your manager.', 'What is a closure in JS?', 'How old are you?', 'Where is the office?'], answer: 0 },
        { kind: 'choice', prompt: 'Reflection phrase:', options: ['What I learned was that data convinces people.', 'The end.', "That's all.", 'Next question.'], answer: 0 },
        { kind: 'choice', prompt: 'The integration ___ behind schedule, so we had a problem. (Situation)', options: ['is', 'was', 'has been', 'will be'], answer: 1 },
        { kind: 'gap', text: 'I was ___ for the whole frontend.', answers: ['responsible'] },
        { kind: 'gap', text: 'First, I ___ the load test data. (analyse, past)', answers: ['analysed', 'analyzed'] },
        { kind: 'gap', text: '___ , I proposed a phased rollout. (Then / After that)', answers: ['Then', 'After that', 'Next'] },
        { kind: 'gap', text: 'This led ___ a 30% drop in support calls.', answers: ['to'] },
        { kind: 'gap', text: 'What I ___ was that early communication matters.', answers: ['learned', 'learnt'] },
        { kind: 'gap', text: 'If I did it again, I ___ involve the client earlier.', answers: ['would'] },
        { kind: 'gap', text: 'Tell me about a ___ when you failed.', answers: ['time'] },
        { kind: 'transform', instruction: 'Rewrite with a strong action verb and "I"', source: 'We did something about the slow API.', answers: ['I introduced a cache for the slow API.', 'I added a cache to fix the slow API.', 'I introduced a cache that fixed the slow API.'] },
        { kind: 'transform', instruction: 'Rewrite as a Result with a number', source: 'After that, the app was much faster.', answers: ['As a result, latency dropped by 80%.', 'As a result, the app became 80% faster.', 'This led to an 80% reduction in latency.'] },
        { kind: 'transform', instruction: 'Write the Task sentence', source: '(You had to stop data loss.)', answers: ['My task was to stop the data loss.', 'My task was to stop data loss.', 'I was responsible for stopping the data loss.'] },
        { kind: 'fix', sentence: 'My task was find the root cause.', answers: ['My task was to find the root cause.'] },
        { kind: 'fix', sentence: 'As result, the client was happy.', answers: ['As a result, the client was happy.'] },
        { kind: 'fix', sentence: 'This led a big improvement.', answers: ['This led to a big improvement.'] },
        { kind: 'fix', sentence: 'I was responsible of the release.', answers: ['I was responsible for the release.'] },
        { kind: 'fix', sentence: 'What I learned it was patience.', answers: ['What I learned was patience.'] },
        { kind: 'order', words: ['My', 'task', 'was', 'to', 'protect', 'the', 'launch', '.'], ru: 'Моей задачей было защитить запуск.' },
        { kind: 'order', words: ['As', 'a', 'result', ',', 'we', 'launched', 'on', 'time', '.'], ru: 'В результате мы запустились вовремя.' },
        { kind: 'order', words: ['What', 'I', 'learned', 'was', 'simple', '.'], ru: 'Урок был простым.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: interview verbs',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'behavioural interview', ru: 'поведенческое интервью', example: 'The behavioural interview takes 45 minutes.' },
            { chunk: 'identified', ru: 'выявил', example: 'I identified the riskiest depots.' },
            { chunk: 'negotiated', ru: 'договорился', example: 'I negotiated a phased launch.' },
            { chunk: 'convinced', ru: 'убедил', example: 'I convinced the client with data.' },
            { chunk: 'coordinated', ru: 'координировал', example: 'I coordinated three teams.' },
            { chunk: 'prioritised', ru: 'приоритизировал', example: 'I prioritised the critical bugs.' },
            { chunk: 'resolved', ru: 'решил, урегулировал', example: 'We resolved the conflict in a day.' },
            { chunk: 'escalated', ru: 'эскалировал', example: 'I escalated the issue to Maya.' },
            { chunk: 'measurable result', ru: 'измеримый результат', example: 'Always give a measurable result.' },
            { chunk: 'under pressure', ru: 'под давлением', example: 'How do you work under pressure?' },
            { chunk: 'tight deadline', ru: 'жёсткий срок', example: 'We had a tight deadline.' },
            { chunk: 'take ownership', ru: 'взять ответственность', example: 'Leaders take ownership of problems.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['convinced', 'убедил'],
            ['escalated', 'эскалировал'],
            ['resolved', 'урегулировал'],
            ['prioritised', 'приоритизировал'],
            ['measurable result', 'измеримый результат'],
          ],
        },
        { kind: 'gap', text: 'Always end with a ___ result.', answers: ['measurable'] },
        { kind: 'gap', text: 'I ___ the issue to my manager when it became critical.', answers: ['escalated'] },
        { kind: 'gap', text: 'I ___ the client with data from the pilot.', answers: ['convinced'] },
        { kind: 'gap', text: 'How do you work ___ pressure?', answers: ['under'] },
        { kind: 'gap', text: 'I took ___ of the problem.', answers: ['ownership'] },
        { kind: 'choice', prompt: 'Ideal length of a STAR answer:', options: ['about 1.5–2 minutes', '10 seconds', '15 minutes', 'as long as possible'], answer: 0 },
        { kind: 'choice', prompt: 'Which verb is the strongest in an interview?', options: ['negotiated', 'did', 'was involved in', 'helped a bit'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'Tell me about a time when you had to deliver under a tight deadline.' },
        { kind: 'dictation', text: 'As the tech lead, my task was to protect the launch date.' },
        { kind: 'dictation', text: 'First, I analysed the load test data.' },
        { kind: 'dictation', text: 'Then I proposed a phased rollout to the client.' },
        { kind: 'dictation', text: 'As a result, we launched on time.' },
        { kind: 'dictation', text: 'The client extended the contract for two more countries.' },
        { kind: 'dictation', text: 'What I learned was that data convinces people.' },
        { kind: 'dictation', text: 'Keep the whole answer under two minutes.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: your STAR stories',
      minutes: 14,
      items: [
        { kind: 'shadow', text: 'Last year, our client wanted to launch in twenty depots, but the integration was behind schedule.' },
        { kind: 'shadow', text: 'As the tech lead, my task was to protect the launch date without risking an outage.' },
        { kind: 'shadow', text: 'First, I analysed the data. Then I proposed a phased rollout.' },
        { kind: 'shadow', text: 'As a result, we launched on time, and the client extended the contract.' },
        {
          kind: 'speak',
          situation: '"Tell me about a time when you improved a process." Answer with full STAR (use your real experience if you can).',
          keywords: ['my task was', 'I', 'as a result'],
          sample: "At my previous job, code reviews took three days on average. My task was to speed them up. I introduced a rule of small PRs and a daily review slot. As a result, review time dropped to one day.",
        },
        {
          kind: 'speak',
          situation: '"Give me an example of when you took ownership of a problem." Use STAR and end with a reflection.',
          keywords: ['I took ownership', 'what I learned'],
          sample: "Our photo uploads were failing for 5% of drivers. Nobody owned the module, so I took ownership. I found that iOS killed the app and switched to the background upload API. Losses dropped below 0.5%. What I learned was to test on real networks.",
        },
        {
          kind: 'speak',
          situation: '"Describe a situation where you worked under pressure." Keep the Situation short and the Action long.',
          keywords: ['first', 'then', 'result'],
          sample: "On Black Friday our traffic doubled within an hour. First, I asked Ken to scale up. Then I paused all deploys and set up a war room. As a result, the app stayed online with zero downtime.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: STAR bank',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write your strongest STAR story for the question "Tell me about your biggest professional achievement." Mark each part (S, T, A, R) and add a reflection.',
          checklist: [
            'Short Situation, clear Task',
            'Action with "I" and strong verbs',
            'Result with numbers',
            'Reflection: *What I learned was…*',
          ],
          minWords: 100,
          sample:
            "S: Last year, our client wanted to launch the driver app in twenty German depots in May, but the SAP integration was two months behind schedule.\nT: As the tech lead, my task was to protect the launch date without risking a major outage.\nA: First, I analysed the load test data and identified the five most stable depots. Then I proposed a phased rollout and negotiated it with the client, explaining the risks with numbers. I also set up automatic alerts and a fifteen-minute notification process.\nR: As a result, we launched on time. When one depot failed, only 4% of deliveries were affected, and the client extended the contract to two more countries.\nReflection: What I learned was that transparency with numbers builds more trust than optimistic promises.",
        },
      ],
    },
  ],
};

export default lesson;
