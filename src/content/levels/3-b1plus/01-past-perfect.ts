import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1p-01',
  level: 'B1+',
  title: 'Day 41: By the time we noticed…',
  grammar: 'Past Perfect & narrative tenses',
  scene: 'Ты впервые пишешь постмортем сам(а): пилот ETA показал неверное время для одного города.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: what really happened',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Postmortem interview',
          format: 'call',
          lines: [
            { who: 'You', text: "Arjun, I'm writing the postmortem for the Kraków ETA bug. Can you walk me through the timeline?" },
            { who: 'Arjun', text: "Sure. On Tuesday morning the client called. Drivers in Kraków had been seeing wrong ETAs for two days." },
            { who: 'You', text: 'Why had nobody noticed it before?' },
            { who: 'Arjun', text: "Our alerts only checked if the ETA existed, not if it was correct. And the Kraków depot had changed its system the week before." },
            { who: 'You', text: 'So they had switched to a new scanner system, and it sent local time without a time zone?' },
            { who: 'Arjun', text: "Exactly. By the time we noticed, about 3,000 deliveries had shown the wrong time." },
            { who: 'You', text: 'And what did you do first?' },
            { who: 'Arjun', text: "I was checking the logs when Lena found the pattern: every wrong ETA came from that depot. After we had confirmed it, Ken deployed a quick fix." },
            { who: 'You', text: "Had anyone told us about the scanner change?" },
            { who: 'Arjun', text: "No. Nobody had told us. That's the main lesson: we need a process for partner changes." },
          ],
        },
        { kind: 'choice', prompt: 'How long had drivers been seeing wrong ETAs?', options: ['An hour', 'Two days', 'A week', 'A month'], answer: 1 },
        { kind: 'choice', prompt: 'Why had nobody noticed?', options: ['Alerts only checked if the ETA existed', 'Nobody uses the app', 'Lena was on holiday', 'The logs were deleted'], answer: 0 },
        { kind: 'choice', prompt: 'What had the Kraków depot done the week before?', options: ['Closed', 'Changed its scanner system', 'Hired new drivers', 'Moved'], answer: 1 },
        { kind: 'choice', prompt: 'How many deliveries had shown the wrong time?', options: ['About 300', 'About 3,000', 'About 30,000', 'Only one'], answer: 1 },
        { kind: 'choice', prompt: 'What is the main lesson?', options: ['Fire the depot', 'A process for partner changes', 'More meetings', 'No more ETAs'], answer: 1 },
        {
          kind: 'choice',
          prompt: '"By the time we noticed, 3,000 deliveries **had shown** the wrong time." Which happened first?',
          options: ['The wrong times were shown, then we noticed', 'We noticed, then the times were shown', 'At the same time', 'It is not clear'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: Past Perfect',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'The past before the past',
          body:
            'We use **Past Perfect** (*had + past participle*) when we talk about the past and need to go **further back** to an earlier event: *The depot **had changed** its system the week before.*\n\n' +
            'Think of it as a timeline. There is a main moment in the past (*the client called on Tuesday*), and Past Perfect shows what happened **before** that moment.\n\n' +
            'Typical words: *by the time, before, after, already, never … before, when, because*.\n\n' +
            'Form: *had* for every person: *I had done, it had changed, they hadn’t told us. Had anyone told us?* Short form: *I’d, they’d*.',
          table: [
            ['Event 1 (earlier)', 'Event 2 (later)'],
            ['The depot **had changed** its system…', '…and then the ETAs **went** wrong.'],
            ['Nobody **had told** us…', '…so we **didn’t know**.'],
            ['3,000 deliveries **had shown** the wrong time…', '…by the time we **noticed**.'],
          ],
        },
        {
          kind: 'theory',
          title: 'Narrative tenses together',
          body:
            'A good story (or postmortem!) uses four past tenses:\n' +
            '**Past Simple** for the main events, in order: *The client called. Ken deployed a fix.*\n' +
            '**Past Continuous** for the background, an action in progress: *I was checking the logs when…*\n' +
            '**Past Perfect** for an earlier event: *They had switched to a new system.*\n' +
            '**Past Perfect Continuous** for a longer earlier action, how long: *Drivers had been seeing wrong ETAs for two days.*\n\n' +
            'Do not overuse Past Perfect. If the order is clear (with *after* or *before*, or a simple sequence), Past Simple is often fine: *After we confirmed it, Ken deployed a fix.*',
          pitfalls: [
            { wrong: 'When I arrived, the meeting already started.', right: 'When I arrived, the meeting had already started.' },
            { wrong: 'I had seen the bug yesterday. (no earlier past moment)', right: 'I saw the bug yesterday.' },
            { wrong: 'Nobody has told us before the incident.', right: 'Nobody had told us before the incident.' },
            { wrong: 'They had been change the config.', right: 'They had changed the config.' },
          ],
        },
        { kind: 'choice', prompt: 'When the client called, drivers ___ wrong ETAs for two days.', options: ['have been seeing', 'had been seeing', 'were seen', 'saw since'], answer: 1 },
        { kind: 'choice', prompt: 'The depot ___ its system the week before.', options: ['has changed', 'had changed', 'was changing', 'changes'], answer: 1 },
        { kind: 'choice', prompt: 'By the time we noticed, 3,000 deliveries ___ the wrong time.', options: ['showed', 'had shown', 'have shown', 'were showing'], answer: 1 },
        { kind: 'choice', prompt: 'I ___ the logs when Lena found the pattern.', options: ['had checked', 'was checking', 'have checked', 'check'], answer: 1 },
        { kind: 'choice', prompt: '___ anyone told us about the change?', options: ['Has', 'Had', 'Did', 'Was'], answer: 1 },
        { kind: 'choice', prompt: 'When I joined the call, they ___ already ___ the fix.', options: ['have / deployed', 'had / deployed', 'were / deploying', 'did / deploy'], answer: 1 },
        { kind: 'choice', prompt: "I ___ never ___ such a strange bug before that day.", options: ['have / seen', 'had / seen', 'was / seeing', 'did / see'], answer: 1 },
        { kind: 'gap', text: 'Nobody ___ (tell) us about the scanner change.', answers: ['had told', "'d told"] },
        { kind: 'gap', text: 'When Ken arrived, Arjun ___ (already / find) the cause.', answers: ['had already found', "'d already found"] },
        { kind: 'gap', text: 'The bug ___ (exist) for months before Lena found it.', answers: ['had existed', 'had been there'] },
        { kind: 'gap', text: 'They ___ (wait) for an hour when the support finally answered. (how long)', answers: ['had been waiting'] },
        { kind: 'gap', text: 'I couldn’t log in because I ___ (forget) my password.', answers: ['had forgotten', "'d forgotten"] },
        { kind: 'gap', text: 'While we ___ (deploy) the fix, the client called again.', answers: ['were deploying'] },
        { kind: 'gap', text: 'After we ___ (confirm) the pattern, Ken deployed a fix.', answers: ['had confirmed', 'confirmed'] },
        { kind: 'gap', text: 'The client was angry because nobody ___ (warn) them.', answers: ['had warned'] },
        { kind: 'transform', instruction: 'Join with "when" + Past Perfect', source: 'The fix was ready. Then the client called.', answers: ['When the client called, the fix had been ready.', 'When the client called, the fix was already ready.', 'The fix had been ready when the client called.'] },
        { kind: 'transform', instruction: 'Join with "because" + Past Perfect', source: "The ETA was wrong. The depot changed its system earlier.", answers: ['The ETA was wrong because the depot had changed its system.'] },
        { kind: 'transform', instruction: 'Join with "by the time"', source: 'We noticed the bug. Before that, it affected 3,000 deliveries.', answers: ['By the time we noticed the bug, it had affected 3,000 deliveries.'] },
        { kind: 'fix', sentence: 'When I came, the meeting already finished.', answers: ['When I came, the meeting had already finished.'] },
        { kind: 'fix', sentence: 'I had fixed the bug yesterday at 5 pm.', answers: ['I fixed the bug yesterday at 5 pm.'] },
        { kind: 'fix', sentence: 'They have changed the system before the incident.', answers: ['They had changed the system before the incident.'] },
        { kind: 'fix', sentence: 'She had been work there for two years when she left.', answers: ['She had been working there for two years when she left.', 'She had worked there for two years when she left.'] },
        { kind: 'fix', sentence: 'Did anyone had told you?', answers: ['Had anyone told you?'] },
        { kind: 'order', words: ['Nobody', 'had', 'told', 'us', 'about', 'it', '.'], ru: 'Никто нам об этом не сказал (до того).' },
        { kind: 'order', words: ['By', 'the', 'time', 'we', 'noticed', ',', 'it', 'was', 'too', 'late', '.'], ru: 'К тому времени, как мы заметили, было поздно.' },
        { kind: 'order', words: ['I', 'was', 'checking', 'the', 'logs', 'when', 'she', 'called', '.'], ru: 'Я проверял логи, когда она позвонила.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: postmortems',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'postmortem', ru: 'разбор инцидента', example: "I'm writing the postmortem." },
            { chunk: 'walk me through', ru: 'проведи меня по шагам', example: 'Can you walk me through the timeline?' },
            { chunk: 'timeline', ru: 'хронология', example: 'The timeline starts on Monday.' },
            { chunk: 'by the time', ru: 'к тому времени, как', example: 'By the time we noticed, it was late.' },
            { chunk: 'switched to', ru: 'перешли на', example: 'They switched to a new system.' },
            { chunk: 'confirmed', ru: 'подтвердили', example: 'We confirmed the pattern.' },
            { chunk: 'blameless', ru: 'без поиска виноватых', example: 'Our postmortems are blameless.' },
            { chunk: 'contributing factors', ru: 'способствующие факторы', example: 'There were three contributing factors.' },
            { chunk: 'impact', ru: 'влияние, последствия', example: 'The impact was 3,000 wrong ETAs.' },
            { chunk: 'detection', ru: 'обнаружение', example: 'Detection took two days.' },
            { chunk: 'lessons learned', ru: 'извлечённые уроки', example: 'Lessons learned: test partner changes.' },
            { chunk: 'partner', ru: 'партнёр', example: 'We need a process for partner changes.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['blameless', 'без поиска виноватых'],
            ['impact', 'последствия'],
            ['detection', 'обнаружение'],
            ['timeline', 'хронология'],
            ['contributing factors', 'способствующие факторы'],
          ],
        },
        { kind: 'gap', text: 'Our postmortems are ___ : we fix processes, not people.', answers: ['blameless'] },
        { kind: 'gap', text: 'Can you walk me ___ the timeline?', answers: ['through'] },
        { kind: 'gap', text: 'The ___ was big: 3,000 deliveries affected.', answers: ['impact'] },
        { kind: 'gap', text: 'Lessons ___ : alert on wrong data, not only missing data.', answers: ['learned'] },
        { kind: 'gap', text: 'The depot switched ___ a new scanner.', answers: ['to'] },
        { kind: 'choice', prompt: 'Standard postmortem sections:', options: ['Summary, Impact, Timeline, Root cause, Lessons learned', 'Jokes, Blame, Gossip', 'Only code', 'Price list'], answer: 0 },
        { kind: 'choice', prompt: 'A "blameless" postmortem means…', options: ['we focus on causes and processes, not on who is guilty', 'nobody writes it', 'we blame the client', 'we skip it'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'Drivers had been seeing wrong ETAs for two days.' },
        { kind: 'dictation', text: 'The depot had changed its system the week before.' },
        { kind: 'dictation', text: 'By the time we noticed, it had affected 3,000 deliveries.' },
        { kind: 'dictation', text: 'I was checking the logs when Lena found the pattern.' },
        { kind: 'dictation', text: 'Nobody had told us.' },
        { kind: 'dictation', text: 'Can you walk me through the timeline?' },
        {
          kind: 'theory',
          title: "Hearing 'd",
          body: 'In fast speech *had* becomes just a short **’d**: *they’d changed* [ðeɪd ˈtʃeɪndʒd], *nobody’d told us*. Listen for a past participle (*changed, told, seen*) after a subject. If you hear one, there is probably a hidden *had*.',
        },
        { kind: 'dictation', text: "They'd switched to a new system." },
        { kind: 'dictation', text: 'Our postmortems are blameless.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: tell the incident story',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'On Tuesday the client called. Drivers had been seeing wrong ETAs for two days.' },
        { kind: 'shadow', text: 'The depot had changed its system, but nobody had told us.' },
        { kind: 'shadow', text: 'By the time we noticed, it had affected three thousand deliveries.' },
        { kind: 'shadow', text: 'I was checking the logs when Lena found the pattern.' },
        {
          kind: 'speak',
          situation: 'Tell the story of a problem from your experience (or invent one): what happened, what had happened before, what was going on at that moment.',
          keywords: ['had', 'was', 'when'],
          sample: "Last year our site went down on Black Friday. We had added a new payment library the day before. I was eating dinner when the alerts started.",
        },
        {
          kind: 'speak',
          situation: 'Explain why a problem happened using "because … had …" and "by the time …".',
          keywords: ['because', 'had', 'by the time'],
          sample: "The release failed because someone had deleted an environment variable. By the time we found it, the site had been down for twenty minutes.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: postmortem summary',
      minutes: 10,
      items: [
        {
          kind: 'write',
          task: 'Write the "Summary" and "Root cause" sections of the Kraków ETA postmortem. Use all four narrative tenses.',
          checklist: [
            'Past Simple for the main events',
            'Past Continuous for background',
            'Past Perfect for earlier events (*had changed, had told*)',
            'Past Perfect Continuous for duration (*had been seeing … for*)',
          ],
          minWords: 60,
          sample:
            "Summary: On Tuesday morning the client reported wrong ETAs in Kraków. Drivers had been seeing wrong times for two days, and by the time we noticed, about 3,000 deliveries had been affected. Arjun was checking the logs when Lena found the pattern. Ken deployed a fix at 11:30.\nRoot cause: The Kraków depot had switched to a new scanner system the week before. The new system sent local time without a time zone. Nobody had told us about the change, and our alerts only checked if an ETA existed, not if it was correct.",
        },
      ],
    },
  ],
};

export default lesson;
