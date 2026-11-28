import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2p-14',
  level: 'B2+',
  title: 'Day 99: Two minutes with the CTO',
  grammar: 'Talking to executives: bottom line up front, business language, small talk and networking',
  scene: 'Ты случайно оказываешься в лифте с CTO, а вечером — на корпоративном мероприятии.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: elevator and networking',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Elevator and evening event',
          format: 'call',
          lines: [
            { who: 'Client', text: "(CTO) Ah, you're Alex from the driver app, right? How's Austria going?" },
            { who: 'You', text: "Bottom line: we're on track for the two largest depots next month. The main risk is the depots' IT capacity, and we've already agreed a plan with them." },
            { who: 'Client', text: "Good. Anything you need from me?" },
            { who: 'You', text: "One thing: a quick intro to the Austrian operations director would speed up the depot onboarding by about two weeks." },
            { who: 'Client', text: "Consider it done. Send me a one-line email." },
            { who: 'Kate', text: "(Evening event) Alex, have you met Daniel? He leads the data platform team in Berlin." },
            { who: 'You', text: "Nice to meet you, Daniel. I've heard great things about your team's streaming pipeline." },
            { who: 'Client', text: "(Daniel) Thanks! And you're the one who handled the Black Friday traffic, aren't you?" },
            { who: 'You', text: "Guilty as charged, with a lot of help from the team. Actually, I'd love to hear how you handle backpressure. Could we grab a virtual coffee next week?" },
            { who: 'Client', text: "(Daniel) Absolutely. Let's connect on Slack." },
          ],
        },
        { kind: 'choice', prompt: 'How do you start your answer to the CTO?', options: ['With the bottom line', 'With a long history', 'With a joke', 'With technical details'], answer: 0 },
        { kind: 'choice', prompt: 'What do you ask the CTO for?', options: ['An intro to the Austrian operations director', 'More money', 'A promotion', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: 'Who is Daniel?', options: ['Leader of the data platform team in Berlin', 'A driver', 'The CEO', 'A client'], answer: 0 },
        { kind: 'choice', prompt: 'How do you react to the compliment about Black Friday?', options: ['Accept it modestly and credit the team', 'Deny it', 'Brag', 'Change the topic'], answer: 0 },
        { kind: 'choice', prompt: 'What do you propose to Daniel?', options: ['A virtual coffee next week', 'A job change', 'Nothing', 'A long meeting'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Language: executives and networking',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Bottom line up front (BLUF)',
          body:
            'Executives have little time. Start with the **conclusion**, then the **main risk**, then **what you need**:\n\n' +
            '1. **Status**: *Bottom line: we’re on track for…* / *In short, we’re two weeks behind on…*\n' +
            '2. **Risk**: *The main risk is… We’ve already…*\n' +
            '3. **Ask**: *One thing that would help: … / What I need from you is…*\n\n' +
            'Translate tech into **business**: not *we optimised Redis TTLs*, but *drivers get their routes in one second instead of eight*. Speak about **money, time, risk, customers**.',
          table: [
            ['Engineer-speak', 'Executive-speak'],
            ['We refactored the sync module.', 'New countries now take weeks instead of months to launch.'],
            ['The p99 latency dropped.', 'Drivers wait one second instead of eight.'],
            ['We need two more engineers.', 'Two more engineers would let us launch Austria a month earlier.'],
          ],
        },
        {
          kind: 'theory',
          title: 'Small talk and networking',
          body:
            '**Introductions**: *Have you met…? / I’ve heard great things about… / What are you working on at the moment?*\n' +
            '**Accepting compliments**: *Thanks, that’s kind of you. It was a real team effort.* / *Guilty as charged!* (humorous)\n' +
            '**Showing interest**: *I’d love to hear how you… / How did you approach…?*\n' +
            '**Follow up**: *Could we grab a (virtual) coffee next week? / Let’s connect on Slack / LinkedIn. / I’ll send you a quick message.*\n\n' +
            'Question tags make small talk friendly: *You’re in the Berlin team, aren’t you?*',
          pitfalls: [
            { wrong: 'So, first I will tell you the history of the project…', right: "Bottom line: we're on track. The main risk is…" },
            { wrong: 'No, no, I did nothing special.', right: 'Thanks, that’s kind of you. It was a real team effort.' },
            { wrong: 'I would love hearing how you do it.', right: "I'd love to hear how you do it." },
            { wrong: 'Could we grab coffee in next week?', right: 'Could we grab a coffee next week?' },
          ],
        },
        { kind: 'choice', prompt: 'CTO asks "How is it going?" Best start:', options: ["Bottom line: we're on track for next month.", 'Well, it all started in January…', 'Fine.', 'Let me show you the code.'], answer: 0 },
        { kind: 'choice', prompt: 'Executive-friendly result:', options: ['Drivers wait one second instead of eight.', 'We tuned the Redis TTLs.', 'We fixed the p99.', 'We moved to Go.'], answer: 0 },
        { kind: 'choice', prompt: 'Making an ask:', options: ['One thing that would help: an intro to the operations director.', 'Give me stuff.', 'I want more.', 'Nothing, thanks.'], answer: 0 },
        { kind: 'choice', prompt: 'Accepting a compliment:', options: ["Thanks, that's kind of you. It was a real team effort.", 'Yes, I am great.', 'No, it was nothing.', 'Whatever.'], answer: 0 },
        { kind: 'choice', prompt: "I'd love ___ how you handle backpressure.", options: ['hearing', 'to hear', 'hear', 'heard'], answer: 1 },
        { kind: 'choice', prompt: 'Starting a conversation at an event:', options: ["I've heard great things about your team's pipeline.", 'Who are you?', 'What is your salary?', 'Do you know me?'], answer: 0 },
        { kind: 'choice', prompt: 'Following up:', options: ['Could we grab a virtual coffee next week?', 'Meet me now.', 'Call me sometime maybe.', 'Bye forever.'], answer: 0 },
        { kind: 'choice', prompt: "You lead the Berlin team, ___ ?", options: ["don't you", "aren't you", "do you", "isn't it"], answer: 0 },
        { kind: 'gap', text: "Bottom ___ : we're on track.", answers: ['line'] },
        { kind: 'gap', text: 'The main ___ is the depots\' IT capacity.', answers: ['risk'] },
        { kind: 'gap', text: 'What I ___ from you is an introduction.', answers: ['need'] },
        { kind: 'gap', text: "I've heard great ___ about your team.", answers: ['things'] },
        { kind: 'gap', text: 'Have you ___ Daniel? He leads the data team.', answers: ['met'] },
        { kind: 'gap', text: "Let's ___ on LinkedIn.", answers: ['connect'] },
        { kind: 'gap', text: 'Consider it ___ . (I will do it)', answers: ['done'] },
        { kind: 'transform', instruction: 'Translate into executive-speak', source: 'We parallelised the CI pipeline.', answers: ['Developers now get feedback in 8 minutes instead of 25.', 'Developers now wait 8 minutes instead of 25 for test results.', 'Our releases are now faster because tests take 8 minutes instead of 25.'] },
        { kind: 'transform', instruction: 'Give a BLUF status', source: 'Austria: two weeks late because of depot IT; we need a contact.', answers: ["Bottom line: we're two weeks behind on Austria because of the depots' IT. What I need is a contact there.", "In short, Austria is two weeks late because of depot IT. One thing that would help is a contact there."] },
        { kind: 'transform', instruction: 'Propose a follow-up', source: 'Meet me for coffee next week? (online)', answers: ['Could we grab a virtual coffee next week?', 'Could we have a virtual coffee next week?'] },
        { kind: 'fix', sentence: "I'd love hearing more about it.", answers: ["I'd love to hear more about it."] },
        { kind: 'fix', sentence: 'Could we grab coffee in next week?', answers: ['Could we grab a coffee next week?', 'Could we grab coffee next week?'] },
        { kind: 'fix', sentence: "I've heard great thing about you.", answers: ["I've heard great things about you."] },
        { kind: 'fix', sentence: "You lead the Berlin team, isn't it?", answers: ["You lead the Berlin team, don't you?"] },
        { kind: 'fix', sentence: 'Bottom line we are on the track.', answers: ["Bottom line: we're on track.", 'Bottom line: we are on track.'] },
        { kind: 'order', words: ['Bottom', 'line', ':', "we're", 'on', 'track', '.'], ru: 'Итог: мы идём по плану.' },
        { kind: 'order', words: ["I've", 'heard', 'great', 'things', 'about', 'you', '.'], ru: 'Я слышал о вас много хорошего.' },
        { kind: 'order', words: ["Let's", 'connect', 'on', 'Slack', '.'], ru: 'Давайте спишемся в Slack.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: business talk',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'bottom line', ru: 'итог, суть', example: "Bottom line: we're on track." },
            { chunk: 'on track', ru: 'по плану', example: "We're on track for May." },
            { chunk: 'elevator pitch', ru: 'короткая самопрезентация', example: 'Prepare a 30-second elevator pitch.' },
            { chunk: 'consider it done', ru: 'считай, сделано', example: 'An intro? Consider it done.' },
            { chunk: 'guilty as charged', ru: 'виновен (шутл.: да, это я)', example: "You did that? — Guilty as charged!" },
            { chunk: 'grab a coffee', ru: 'выпить кофе (встретиться)', example: "Let's grab a coffee next week." },
            { chunk: 'connect on', ru: 'связаться в (соцсети)', example: "Let's connect on LinkedIn." },
            { chunk: 'return on investment', ru: 'окупаемость инвестиций', example: 'What is the return on investment?' },
            { chunk: 'time to market', ru: 'время выхода на рынок', example: 'We cut time to market by half.' },
            { chunk: 'stakeholder', ru: 'заинтересованное лицо', example: 'Keep stakeholders informed.' },
            { chunk: 'heard great things', ru: 'слышал много хорошего', example: "I've heard great things about your team." },
            { chunk: 'team effort', ru: 'командная работа', example: 'It was a real team effort.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['elevator pitch', 'короткая самопрезентация'],
            ['time to market', 'время выхода на рынок'],
            ['return on investment', 'окупаемость'],
            ['consider it done', 'считай, сделано'],
            ['stakeholder', 'заинтересованное лицо'],
          ],
        },
        { kind: 'gap', text: 'Prepare a 30-second elevator ___ .', answers: ['pitch'] },
        { kind: 'gap', text: 'We cut time to ___ for new countries by half.', answers: ['market'] },
        { kind: 'gap', text: "It was a real team ___ , not just me.", answers: ['effort'] },
        { kind: 'gap', text: "Let's grab a ___ next week.", answers: ['coffee'] },
        { kind: 'gap', text: 'What is the return on ___ for this project?', answers: ['investment'] },
        { kind: 'choice', prompt: 'Executives care most about…', options: ['money, time, risk and customers', 'variable names', 'which IDE you use', 'code style'], answer: 0 },
        { kind: 'choice', prompt: 'At a networking event, after a good talk you should…', options: ['propose a concrete follow-up', 'leave without saying anything', 'ask for a job immediately', 'talk only about yourself'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "Bottom line: we're on track for the two largest depots." },
        { kind: 'dictation', text: "The main risk is the depots' IT capacity." },
        { kind: 'dictation', text: 'A quick intro would speed up the onboarding by two weeks.' },
        { kind: 'dictation', text: 'Consider it done. Send me a one-line email.' },
        { kind: 'dictation', text: "I've heard great things about your team." },
        { kind: 'dictation', text: 'Guilty as charged, with a lot of help from the team.' },
        { kind: 'dictation', text: "I'd love to hear how you handle backpressure." },
        { kind: 'dictation', text: "Let's connect on Slack." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: elevator and networking',
      minutes: 14,
      items: [
        { kind: 'shadow', text: "Bottom line: we're on track. The main risk is the depots' IT capacity." },
        { kind: 'shadow', text: 'One thing that would help is a quick intro to the operations director.' },
        { kind: 'shadow', text: "Thanks, that's kind of you. It was a real team effort." },
        { kind: 'shadow', text: "I'd love to hear more. Could we grab a virtual coffee next week?" },
        {
          kind: 'speak',
          situation: 'A senior executive asks you in the elevator: "How\'s your project going?" Answer in 20 seconds: status, risk, ask.',
          keywords: ['bottom line', 'main risk', 'would help'],
          sample: "Bottom line: we're on track to launch next month. The main risk is a slow partner API, and we have a fallback. One thing that would help is faster legal approval of the contract.",
        },
        {
          kind: 'speak',
          situation: 'Give your 30-second elevator pitch to someone you have just met at a conference.',
          keywords: ["I'm", 'I lead', 'at the moment'],
          sample: "Hi, I'm Alex. I lead the frontend of a delivery platform used by four thousand drivers in three countries. At the moment I'm focused on offline-first mobile apps.",
        },
        {
          kind: 'speak',
          situation: 'Someone compliments your work. Accept it, credit the team, and turn it into a follow-up.',
          keywords: ['team effort', "I'd love to"],
          sample: "Thanks, that's very kind. It was a real team effort. I'd love to hear how your team approached the same problem. Could we grab a coffee next week?",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: one-line email & follow-up',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write two short messages: 1) the "one-line email" to the CTO asking for the introduction (BLUF, very short), 2) a follow-up Slack message to Daniel after the event.',
          checklist: [
            'CTO email: subject + ask in the first line + one sentence of why',
            'Business value (time saved)',
            'Daniel: reminder of where you met + specific topic + proposed time',
            'Friendly, concise tone',
          ],
          minWords: 60,
          sample:
            "1. Subject: Intro to Austrian operations director\nHi Mark, as discussed in the elevator: could you introduce me to the Austrian operations director? A direct contact would speed up depot onboarding by about two weeks. Thanks a lot, Alex\n\n2. Hi Daniel, great to meet you at yesterday's event! I'd love to hear more about how your team handles backpressure in the streaming pipeline; we're facing something similar with depot events. Would Thursday at 11 work for a 30-minute virtual coffee? Cheers, Alex",
        },
      ],
    },
  ],
};

export default lesson;
