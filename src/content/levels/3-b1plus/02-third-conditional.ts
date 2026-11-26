import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1p-02',
  level: 'B1+',
  title: 'Day 42: If we had known…',
  grammar: 'Third Conditional',
  scene: 'Ретро по постмортему: что было бы, если бы…',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the retro',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Postmortem retro',
          format: 'call',
          lines: [
            { who: 'Maya', text: "Thanks for the postmortem, it's very clear. Let's discuss what we could have done differently." },
            { who: 'Lena', text: "If we had checked the data quality, we would have caught it on day one." },
            { who: 'Arjun', text: "True. And if the depot had told us about the scanner, we wouldn't have had any problem at all." },
            { who: 'Ken', text: "If I hadn't been on holiday, maybe I would have seen the strange metrics earlier." },
            { who: 'Maya', text: "Let's not blame ourselves. Holidays are normal. The question is the process." },
            { who: 'You', text: "Honestly, if we hadn't written the timestamp tests last month, it would have taken us days to find the cause." },
            { who: 'Maya', text: "Good point, so something went right too! What would have happened if the client hadn't called?" },
            { who: 'Arjun', text: "We probably wouldn't have noticed for another week. That's scary." },
            { who: 'Maya', text: 'OK. Action items: data quality alerts, and a contract clause about system changes.' },
          ],
        },
        { kind: 'choice', prompt: 'What would have caught the bug on day one?', options: ['Checking data quality', 'More meetings', 'A new designer', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: 'What would have prevented the problem completely?', options: ['If the depot had told them', 'If Ken had worked more', 'If the client had paid more', 'If they had used Python'], answer: 0 },
        { kind: 'choice', prompt: 'What went right?', options: ['The timestamp tests helped find the cause quickly', 'Nothing', 'The holiday', 'The client called late'], answer: 0 },
        { kind: 'choice', prompt: "What if the client hadn't called?", options: ['They would have noticed in an hour', "They wouldn't have noticed for another week", 'The bug would have fixed itself', 'Nothing'], answer: 1 },
        { kind: 'choice', prompt: 'What are the action items?', options: ['Data quality alerts and a contract clause', 'Fire Ken', 'Cancel holidays', 'Stop the pilot'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: unreal past',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Third Conditional',
          body:
            'We use the **Third Conditional** to imagine a **different past**. It is about things that did **not** happen, and their imaginary results:\n\n' +
            '**If + Past Perfect, would have + past participle**\n*If we **had checked** the data, we **would have caught** it.* (We didn’t check, so we didn’t catch it.)\n\n' +
            'It is very common in retros and postmortems: what went wrong and what we could have done.\n\n' +
            'Instead of *would have* you can use **could have** (it was possible) or **might have** (maybe): *If I hadn’t been on holiday, I might have seen it.*\n\n' +
            'Short forms in speech: *If we’d checked, we’d have caught it.* Here the first *’d* = **had**, the second *’d* = **would**.',
          table: [
            ['Reality (past)', 'Third Conditional'],
            ["We didn't check the data.", 'If we **had checked** it, we **would have caught** the bug.'],
            ["The depot didn't tell us.", "If they **had told** us, we **wouldn't have had** a problem."],
            ['Ken was on holiday.', "If Ken **hadn't been** on holiday, he **might have seen** it."],
          ],
          pitfalls: [
            { wrong: 'If we would have checked, we would have caught it.', right: 'If we had checked, we would have caught it.' },
            { wrong: 'If I had known, I would told you.', right: 'If I had known, I would have told you.' },
            { wrong: 'If they told us, we would have fixed it. (past)', right: 'If they had told us, we would have fixed it.' },
            { wrong: 'If we had tested it, we would of found the bug.', right: 'If we had tested it, we would have found the bug.', note: '*would of* is a spelling mistake: it only sounds like *would’ve*.' },
          ],
        },
        { kind: 'choice', prompt: 'If we ___ the data, we would have caught it.', options: ['checked', 'had checked', 'would have checked', 'have checked'], answer: 1 },
        { kind: 'choice', prompt: "If the depot had told us, we ___ any problem.", options: ["wouldn't have", "wouldn't have had", "didn't have", "won't have"], answer: 1 },
        { kind: 'choice', prompt: "If I ___ on holiday, I might have seen it.", options: ["wasn't", "hadn't been", "wouldn't be", "haven't been"], answer: 1 },
        { kind: 'choice', prompt: 'What would have happened if the client ___ ?', options: ["didn't call", "hadn't called", "wouldn't call", "doesn't call"], answer: 1 },
        { kind: 'choice', prompt: 'If I had known about the meeting, I ___ .', options: ['would come', 'would have come', 'had come', 'came'], answer: 1 },
        { kind: 'choice', prompt: 'If we’d tested on Safari, we ___ found the bug. (maybe)', options: ['might have', 'might', 'would', 'had'], answer: 0 },
        { kind: 'choice', prompt: '"If we\'d known, we\'d have stopped it." The two \'d mean…', options: ['had / would', 'would / had', 'had / had', 'would / would'], answer: 0 },
        { kind: 'gap', text: 'If we ___ (write) the tests earlier, we would have saved a week.', answers: ['had written', "'d written"] },
        { kind: 'gap', text: "If you had asked me, I ___ (help) you.", answers: ['would have helped', "'d have helped", 'would’ve helped'] },
        { kind: 'gap', text: "If Ken ___ (not / restart) the server, the outage would have lasted longer.", answers: ["hadn't restarted", 'had not restarted'] },
        { kind: 'gap', text: 'We ___ (not / miss) the deadline if the API had been ready.', answers: ["wouldn't have missed", 'would not have missed'] },
        { kind: 'gap', text: 'If the alerts had worked, we ___ have noticed it in minutes. (could)', answers: ['could'] },
        { kind: 'gap', text: 'If I had seen your message, I would ___ replied.', answers: ['have'] },
        { kind: 'gap', text: 'What ___ you have done if you had been the on-call engineer?', answers: ['would'] },
        { kind: 'transform', instruction: 'Write a Third Conditional sentence', source: "We didn't back up the data, so we lost it.", answers: ["If we had backed up the data, we wouldn't have lost it.", 'If we had backed up the data, we would not have lost it.', "If we'd backed up the data, we wouldn't have lost it."] },
        { kind: 'transform', instruction: 'Write a Third Conditional sentence', source: "Lena found the pattern, so we fixed it fast.", answers: ["If Lena hadn't found the pattern, we wouldn't have fixed it fast.", 'If Lena had not found the pattern, we would not have fixed it fast.'] },
        { kind: 'transform', instruction: 'Write a Third Conditional sentence', source: "I didn't know about the change, so I didn't warn you.", answers: ['If I had known about the change, I would have warned you.', "If I'd known about the change, I'd have warned you."] },
        { kind: 'fix', sentence: 'If I would have known, I would have told you.', answers: ['If I had known, I would have told you.', "If I'd known, I'd have told you."] },
        { kind: 'fix', sentence: 'If we had tested it, we would found the bug.', answers: ['If we had tested it, we would have found the bug.'] },
        { kind: 'fix', sentence: 'If she called me, I would have answered. (yesterday)', answers: ['If she had called me, I would have answered.'] },
        { kind: 'fix', sentence: "If they hadn't helped us, we would fail.", answers: ["If they hadn't helped us, we would have failed."] },
        { kind: 'fix', sentence: 'We would have finish on time if we had started earlier.', answers: ['We would have finished on time if we had started earlier.'] },
        { kind: 'order', words: ['If', 'we', 'had', 'known', ',', 'we', 'would', 'have', 'acted', '.'], ru: 'Если бы мы знали, мы бы приняли меры.' },
        { kind: 'order', words: ['It', 'would', 'have', 'taken', 'us', 'days', '.'], ru: 'У нас бы ушли дни.' },
        { kind: 'order', words: ['What', 'would', 'you', 'have', 'done', '?'], ru: 'Что бы ты сделал (тогда)?' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: reflecting on the past',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'caught it', ru: 'поймали это', example: 'We would have caught it on day one.' },
            { chunk: 'data quality', ru: 'качество данных', example: 'We need data quality alerts.' },
            { chunk: 'blame ourselves', ru: 'винить себя', example: "Let's not blame ourselves." },
            { chunk: 'went right', ru: 'пошло хорошо', example: 'Something went right too!' },
            { chunk: 'went wrong', ru: 'пошло не так', example: 'What went wrong?' },
            { chunk: 'contract clause', ru: 'пункт договора', example: 'We need a contract clause about changes.' },
            { chunk: 'in hindsight', ru: 'оглядываясь назад', example: 'In hindsight, we should have tested it.' },
            { chunk: 'a close call', ru: 'чуть не случилось', example: 'That was a close call.' },
            { chunk: 'prevent', ru: 'предотвратить', example: 'How can we prevent it next time?' },
            { chunk: 'scary', ru: 'страшно', example: "That's scary." },
            { chunk: 'early warning', ru: 'раннее предупреждение', example: 'We had no early warning.' },
            { chunk: 'for another week', ru: 'ещё неделю', example: "We wouldn't have noticed for another week." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['in hindsight', 'оглядываясь назад'],
            ['a close call', 'чуть не случилось'],
            ['prevent', 'предотвратить'],
            ['contract clause', 'пункт договора'],
            ['early warning', 'раннее предупреждение'],
          ],
        },
        { kind: 'gap', text: 'In ___ , we should have asked the depot.', answers: ['hindsight'] },
        { kind: 'gap', text: 'We almost deleted production. That was a close ___ !', answers: ['call'] },
        { kind: 'gap', text: 'What can we do to ___ this in the future?', answers: ['prevent'] },
        { kind: 'gap', text: "What went ___ ? And what went wrong?", answers: ['right'] },
        { kind: 'gap', text: "Let's not ___ ourselves. Let's fix the process.", answers: ['blame'] },
        { kind: 'choice', prompt: 'Retro question:', options: ['What could we have done differently?', 'Who is guilty?', 'Why are you so slow?', 'Whose fault is it?'], answer: 0 },
        { kind: 'choice', prompt: '"Оглядываясь назад, …"', options: ['In hindsight, …', 'Looking at back, …', 'In backsight, …', 'Behind looking, …'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'If we had checked the data quality, we would have caught it.' },
        { kind: 'dictation', text: "If the depot had told us, we wouldn't have had any problem." },
        { kind: 'dictation', text: "Let's not blame ourselves." },
        { kind: 'dictation', text: 'It would have taken us days to find the cause.' },
        { kind: 'dictation', text: "We probably wouldn't have noticed for another week." },
        { kind: 'dictation', text: 'In hindsight, we should have asked them.' },
        {
          kind: 'theory',
          title: "would have = would've ≈ 'woulda'",
          body: 'In fast speech *would have* sounds like [ˈwʊdəv] ("woulda"), and *wouldn’t have* like [ˈwʊdntəv]. Never write *would of*: it is a common native-speaker mistake. The correct written forms are *would have / would’ve*.',
        },
        { kind: 'dictation', text: "If I'd known, I would've told you." },
        { kind: 'dictation', text: 'That was a close call.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: what if…',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'If we had checked the data quality, we would have caught it on day one.' },
        { kind: 'shadow', text: "If the depot had told us, we wouldn't have had any problem." },
        { kind: 'shadow', text: "Let's not blame ourselves. The question is the process." },
        { kind: 'shadow', text: 'In hindsight, we should have asked them.' },
        {
          kind: 'speak',
          situation: 'Think of a mistake from your work or studies. Say what happened and what would have happened if you had acted differently.',
          keywords: ['if I had', 'would have'],
          sample: "I once pushed a bug to production on Friday. If I had run the tests, I would have seen it. And if I hadn't deployed on Friday, nobody would have worked on Saturday.",
        },
        {
          kind: 'speak',
          situation: 'Say something positive about the past: a good decision and what would have happened without it.',
          keywords: ["if we hadn't", "wouldn't have"],
          sample: "We wrote good monitoring last year. If we hadn't done that, we wouldn't have found the outage so quickly.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: lessons learned',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write the "Lessons learned" section of the postmortem: 4–5 sentences with the Third Conditional, positive and negative, plus action items.',
          checklist: [
            '*If + had + V3, would/could/might have + V3*',
            'At least one negative (*hadn’t / wouldn’t have*)',
            'Something that went right',
            'Action items at the end',
          ],
          minWords: 50,
          sample:
            "Lessons learned\nIf we had had data quality alerts, we would have caught the problem on day one. If the depot had told us about the new scanners, the incident wouldn't have happened at all. On the positive side, if we hadn't written timestamp tests last month, finding the cause could have taken days.\nAction items: add data quality alerts (Arjun), add a contract clause about system changes (Tom).",
        },
      ],
    },
  ],
};

export default lesson;
