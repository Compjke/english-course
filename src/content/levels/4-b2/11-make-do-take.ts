import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-11',
  level: 'B2',
  title: 'Day 71: Make a decision, take a risk',
  grammar: 'Collocations with make, do, take, have, give, pay',
  scene: 'Решение о дате запуска в Германии. Ты взвешиваешь риски вместе с Maya и Tom.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the launch date',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Launch decision meeting',
          format: 'call',
          lines: [
            { who: 'Tom', text: "We need to make a decision today: launch in Germany on May 1st or wait until June?" },
            { who: 'You', text: "Let's take a moment to look at the facts. We've done a lot of testing, but the SAP connector still makes mistakes under load." },
            { who: 'Maya', text: "How much difference would one more month make?" },
            { who: 'You', text: "A big one. We could do a proper load test and make the retries more robust." },
            { who: 'Tom', text: "But the client has made it clear: they want May. If we wait, we take the risk of losing their trust." },
            { who: 'Arjun', text: "If we launch too early, we take a bigger risk. A failed launch does more harm than a delay." },
            { who: 'Maya', text: "Let's have a quick vote. Or better: let's give the client both options and pay attention to their reaction." },
            { who: 'You', text: "I'll do my best to present both clearly. And whatever we choose, we should take responsibility as a team." },
            { who: 'Tom', text: "Agreed. Let's make a call with them on Thursday." },
          ],
        },
        { kind: 'choice', prompt: 'What decision must they make?', options: ['Launch date: May or June', 'Which country', 'Who to hire', 'Which framework'], answer: 0 },
        { kind: 'choice', prompt: 'What still makes mistakes under load?', options: ['The SAP connector', 'The UI', 'The cache', 'The phones'], answer: 0 },
        { kind: 'choice', prompt: 'What would one more month allow?', options: ['A proper load test and more robust retries', 'A holiday', 'A new design', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: "What is Arjun's view?", options: ['A failed launch does more harm than a delay', 'Launch now no matter what', 'Cancel the project', 'Ask Ken'], answer: 0 },
        { kind: 'choice', prompt: 'What will they do on Thursday?', options: ['Call the client with both options', 'Launch', 'Vote', 'Nothing'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: verb + noun collocations',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'make vs do',
          body:
            'In Russian we say «делать» for both, but English splits them. These pairs must be **learned together**, like one word.\n\n' +
            '**make** — create, produce, cause a result: *make a decision, make a mistake, make progress, make a difference, make a change, make an effort, make sure, make a call, make it clear, make money, make sense*.\n' +
            '**do** — activities, work, tasks, general actions: *do a test, do research, do your best, do business, do a favour, do harm, do damage, do the work, do a review*.',
          table: [
            ['make', 'do'],
            ['a decision', 'a test / testing'],
            ['a mistake', 'research'],
            ['progress', 'your best'],
            ['a difference', 'harm / damage'],
            ['an effort', 'business with'],
            ['sure / it clear', 'a favour'],
            ['a call (= decide)', 'a code review'],
          ],
        },
        {
          kind: 'theory',
          title: 'take, have, give, pay',
          body:
            '**take**: *take a risk, take responsibility, take a moment, take a break, take notes, take action, take into account, take part in, take time*\n' +
            '**have**: *have a meeting, have a look, have a vote, have a chat, have an impact, have a problem with*\n' +
            '**give**: *give feedback, give a presentation, give an example, give someone an option, give priority to*\n' +
            '**pay**: *pay attention to, pay a visit, pay off (debt), pay the price*',
          pitfalls: [
            { wrong: 'do a decision', right: 'make a decision' },
            { wrong: 'make a test', right: 'do a test / run a test' },
            { wrong: 'make a risk', right: 'take a risk' },
            { wrong: 'make attention', right: 'pay attention' },
            { wrong: 'do a mistake', right: 'make a mistake' },
          ],
        },
        { kind: 'choice', prompt: 'We need to ___ a decision today.', options: ['do', 'make', 'take on', 'have done'], answer: 1 },
        { kind: 'choice', prompt: "We've ___ a lot of testing.", options: ['made', 'done', 'taken', 'had'], answer: 1 },
        { kind: 'choice', prompt: 'If we wait, we ___ the risk of losing their trust.', options: ['make', 'do', 'take', 'give'], answer: 2 },
        { kind: 'choice', prompt: 'A failed launch ___ more harm than a delay.', options: ['makes', 'does', 'takes', 'has'], answer: 1 },
        { kind: 'choice', prompt: "Let's ___ attention to their reaction.", options: ['make', 'give', 'pay', 'take'], answer: 2 },
        { kind: 'choice', prompt: 'One more month would ___ a big difference.', options: ['do', 'make', 'take', 'give'], answer: 1 },
        { kind: 'choice', prompt: "I'll ___ my best to present both options.", options: ['make', 'do', 'give', 'take'], answer: 1 },
        { kind: 'choice', prompt: 'We should ___ responsibility as a team.', options: ['make', 'do', 'take', 'pay'], answer: 2 },
        { kind: 'gap', text: 'Everyone ___ mistakes. Learn from them. (Present)', answers: ['makes'] },
        { kind: 'gap', text: "Let's ___ a quick look at the logs.", answers: ['have', 'take'] },
        { kind: 'gap', text: 'Could you ___ me a favour and review this today?', answers: ['do'] },
        { kind: 'gap', text: 'Please ___ notes during the call.', answers: ['take'] },
        { kind: 'gap', text: 'The new cache ___ a big impact on speed. (Past)', answers: ['had'] },
        { kind: 'gap', text: 'Arjun will ___ a presentation about the event bus.', answers: ['give'] },
        { kind: 'gap', text: 'We are ___ good progress on the connector. (Present Continuous)', answers: ['making'] },
        { kind: 'gap', text: 'We must ___ the time difference into account.', answers: ['take'] },
        { kind: 'transform', instruction: 'Use a collocation with make', source: 'We decided to launch in June.', answers: ['We made the decision to launch in June.', 'We made a decision to launch in June.'] },
        { kind: 'transform', instruction: 'Use a collocation with pay', source: 'Please listen carefully to the client.', answers: ['Please pay attention to the client.'] },
        { kind: 'transform', instruction: 'Use a collocation with take', source: 'He is responsible for the mistake and admits it.', answers: ['He takes responsibility for the mistake.'] },
        { kind: 'transform', instruction: 'Use a collocation with give', source: 'Can you tell me what you think about my PR?', answers: ['Can you give me feedback on my PR?', 'Can you give me some feedback on my PR?'] },
        { kind: 'fix', sentence: 'We did a big mistake.', answers: ['We made a big mistake.'] },
        { kind: 'fix', sentence: 'Lena made the load test yesterday.', answers: ['Lena did the load test yesterday.', 'Lena ran the load test yesterday.'] },
        { kind: 'fix', sentence: "Don't make risks with production.", answers: ["Don't take risks with production."] },
        { kind: 'fix', sentence: 'Please make attention to the details.', answers: ['Please pay attention to the details.'] },
        { kind: 'fix', sentence: 'We need to do a decision.', answers: ['We need to make a decision.'] },
        { kind: 'order', words: ["Let's", 'make', 'a', 'decision', '.'], ru: 'Давайте примем решение.' },
        { kind: 'order', words: ['We', 'take', 'the', 'risk', '.'], ru: 'Мы идём на риск.' },
        { kind: 'order', words: ['Pay', 'attention', 'to', 'the', 'details', '.'], ru: 'Обратите внимание на детали.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: decisions',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'make a call', ru: 'принять решение (разг.)', example: "Let's make a call on Thursday." },
            { chunk: 'make it clear', ru: 'ясно дать понять', example: 'Please make it clear in the email.' },
            { chunk: 'do harm', ru: 'навредить', example: 'A small delay will not do harm.' },
            { chunk: 'take into account', ru: 'учитывать', example: 'We must take into account the German holidays.' },
            { chunk: 'robust', ru: 'надёжный, устойчивый', example: 'Make the retries more robust.' },
            { chunk: 'proper', ru: 'нормальный, полноценный', example: 'We need a proper load test.' },
            { chunk: 'go/no-go decision', ru: 'решение запускать или нет', example: 'The go/no-go decision is on Thursday.' },
            { chunk: 'weigh the options', ru: 'взвесить варианты', example: "Let's weigh the options." },
            { chunk: 'trade-off', ru: 'компромисс', example: 'Speed vs. stability is a trade-off.' },
            { chunk: 'losing their trust', ru: 'потерять их доверие', example: 'We risk losing their trust.' },
            { chunk: 'whatever we choose', ru: 'что бы мы ни выбрали', example: 'Whatever we choose, we do it together.' },
            { chunk: 'have a vote', ru: 'проголосовать', example: "Let's have a vote." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['weigh the options', 'взвесить варианты'],
            ['take into account', 'учитывать'],
            ['robust', 'надёжный'],
            ['make a call', 'принять решение'],
            ['do harm', 'навредить'],
          ],
        },
        { kind: 'gap', text: "Let's ___ the options before we decide.", answers: ['weigh'] },
        { kind: 'gap', text: 'We need a ___ load test, not a quick one.', answers: ['proper'] },
        { kind: 'gap', text: 'The retries must be more ___ .', answers: ['robust'] },
        { kind: 'gap', text: 'The client has made it ___ that they want May.', answers: ['clear'] },
        { kind: 'gap', text: '___ we choose, we will support the decision.', answers: ['Whatever'] },
        { kind: 'choice', prompt: 'Which is correct?', options: ['make a decision / do research', 'do a decision / make research', 'make research / make a decision', 'do a decision / do research'], answer: 0 },
        { kind: 'choice', prompt: '"Make a call" in a meeting usually means…', options: ['make a decision', 'phone someone only', 'shout', 'cancel the meeting'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'We need to make a decision today.' },
        { kind: 'dictation', text: "Let's take a moment to look at the facts." },
        { kind: 'dictation', text: "We've done a lot of testing." },
        { kind: 'dictation', text: 'How much difference would one more month make?' },
        { kind: 'dictation', text: 'A failed launch does more harm than a delay.' },
        { kind: 'dictation', text: "Let's pay attention to their reaction." },
        { kind: 'dictation', text: "I'll do my best to present both options." },
        { kind: 'dictation', text: 'We should take responsibility as a team.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: weigh a decision',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "We need to make a decision today, so let's take a moment to look at the facts." },
        { kind: 'shadow', text: 'If we wait, we take the risk of losing their trust.' },
        { kind: 'shadow', text: 'A failed launch does more harm than a delay.' },
        { kind: 'shadow', text: "Whatever we choose, we'll take responsibility as a team." },
        {
          kind: 'speak',
          situation: 'Argue for one option (launch now or wait) using at least four collocations from this lesson.',
          keywords: ['made good progress', 'take a big risk', 'do a lot of harm'],
          sample: "I think we should wait. We've made good progress, but we haven't done a proper load test. If we launch now, we take a big risk, and a failure would do a lot of harm.",
        },
        {
          kind: 'speak',
          situation: 'Describe a hard decision you made in your career and what you took into account.',
          keywords: ['made a decision', 'took into account'],
          sample: "Last year I made a decision to change teams. I took into account the learning opportunities and the commute, and it made a big difference to my growth.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: decision memo',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a short decision memo for the client: two launch options (May / June), risks of each, your recommendation. Use at least eight collocations with make, do, take, have, give or pay.',
          checklist: [
            'make a decision / a difference / progress',
            'do testing / harm / our best',
            'take a risk / into account / responsibility',
            'pay attention / give an option',
          ],
          minWords: 70,
          sample:
            "Germany launch: decision memo\nWe need to make a decision about the launch date. Option A: May 1st. We have made good progress and done a lot of testing, but the SAP connector still makes mistakes under load, so we would take a significant risk. Option B: June 1st. One more month would make a big difference: we could do a proper load test and make the retries more robust.\nTaking everything into account, we recommend June: a failed launch would do more harm than a short delay. We will do our best to support either option and take full responsibility for the result.",
        },
      ],
    },
  ],
};

export default lesson;
