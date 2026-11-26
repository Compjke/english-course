import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-07',
  level: 'B2',
  title: "Day 67: It's high time we refactored this",
  grammar: "It's (high) time + past, would rather + past, as if / as though, suppose / imagine",
  scene: 'Технический долг накопился. Ты убеждаешь Maya выделить спринт на рефакторинг.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the tech debt talk',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: '1:1 with Maya',
          format: 'call',
          lines: [
            { who: 'You', text: "Maya, it's high time we refactored the sync module. Every new feature takes twice as long because of it." },
            { who: 'Maya', text: "I hear you. But the client wants the German features. I'd rather we finished those first." },
            { who: 'You', text: "I understand. But the code looks as if five different people wrote it in a hurry. Which is basically what happened." },
            { who: 'Maya', text: "Ha. Suppose we gave you one sprint. What would you do?" },
            { who: 'You', text: "Split the module, add tests, and remove the old retry logic. Imagine if new features took three days instead of six." },
            { who: 'Maya', text: "Tempting. But I'd rather you didn't stop everything. What if half the team refactored and half built features?" },
            { who: 'You', text: "That could work. I'd rather Nina joined the refactoring, it's a great learning opportunity." },
            { who: 'Maya', text: "OK. It's about time someone took ownership of it. Write a short plan and I'll pitch it to Tom." },
            { who: 'You', text: "Thanks! You talk as though you'd already decided." },
            { who: 'Maya', text: "Let's say I'd been thinking about it too." },
          ],
        },
        { kind: 'choice', prompt: 'What do you want to refactor?', options: ['The sync module', 'The login page', 'The design', 'The CI'], answer: 0 },
        { kind: 'choice', prompt: 'What would Maya rather do first?', options: ['Finish the German features', 'Refactor everything', 'Hire people', 'Take a holiday'], answer: 0 },
        { kind: 'choice', prompt: 'What does the code look like?', options: ['As if five people wrote it in a hurry', 'Perfect', 'As if nobody wrote it', 'Very simple'], answer: 0 },
        { kind: 'choice', prompt: 'What is the compromise?', options: ['Half the team refactors, half builds features', 'Stop everything', 'No refactoring', 'Only Nina works'], answer: 0 },
        { kind: 'choice', prompt: 'Who would you rather join the refactoring?', options: ['Nina', 'Tom', 'Ken', 'The client'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: past forms with present meaning',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: "It's (high/about) time + Past Simple",
          body:
            "*It’s time + Past Simple* means **something should happen now, and it is even a bit late**: *It’s high time we **refactored** the sync module.* (We should have done it already.)\n\n" +
            '*high time* and *about time* make it stronger, sometimes with irritation: *It’s about time someone **took** ownership.*\n\n' +
            'Compare: *It’s time **to go*** (neutral, just the right moment).',
        },
        {
          kind: 'theory',
          title: 'would rather',
          body:
            '**would rather + infinitive** — your own preference: *I’d rather finish the features first.*\n**would rather + someone + Past Simple** — what you want **another person** to do (now or in future): *I’d rather **we finished** those first. I’d rather **you didn’t** stop everything.*\n\n' +
            'Compare: *would prefer + to*: *I’d prefer you to finish first.*',
          table: [
            ['Structure', 'Example'],
            ["It's high time + past", "It's high time we **refactored** it."],
            ['would rather + V', "I'd rather **wait**."],
            ['would rather + sb + past', "I'd rather **you didn't** stop everything."],
            ['as if / as though + past (unreal)', 'You talk **as though** you **had** already decided.'],
            ['suppose / imagine + past', '**Suppose** we **gave** you a sprint…'],
            ['what if + past', '**What if** half the team **refactored**?'],
          ],
        },
        {
          kind: 'theory',
          title: 'as if / as though, suppose, imagine',
          body:
            '**as if / as though** — comparison. With a **real** possibility, use a normal tense: *It looks as if it’s going to rain.* With an **unreal** comparison, use past: *He talks as if he **were** the CEO.* (he isn’t)\n\n' +
            '**Suppose / Imagine / What if + Past** — imaginary situation: *Suppose we **gave** you one sprint. What if new features **took** three days?*',
          pitfalls: [
            { wrong: "It's high time we refactor it.", right: "It's high time we refactored it." },
            { wrong: "I'd rather you don't stop everything.", right: "I'd rather you didn't stop everything." },
            { wrong: "I'd rather to finish first.", right: "I'd rather finish first." },
            { wrong: 'He acts as if he is the boss. (he is not)', right: 'He acts as if he were the boss.' },
          ],
        },
        { kind: 'choice', prompt: "It's high time we ___ the sync module.", options: ['refactor', 'refactored', 'will refactor', 'have refactored'], answer: 1 },
        { kind: 'choice', prompt: "I'd rather we ___ the German features first.", options: ['finish', 'finished', 'will finish', 'to finish'], answer: 1 },
        { kind: 'choice', prompt: "I'd rather ___ the features first. (my preference)", options: ['finish', 'finished', 'to finish', 'finishing'], answer: 0 },
        { kind: 'choice', prompt: "I'd rather you ___ stop everything.", options: ["don't", "didn't", "won't", 'not'], answer: 1 },
        { kind: 'choice', prompt: 'The code looks as if five people ___ it in a hurry.', options: ['write', 'wrote', 'had wrote', 'writing'], answer: 1 },
        { kind: 'choice', prompt: '___ we gave you one sprint. What would you do?', options: ['Suppose', 'Supposed', 'If suppose', 'Supposing that if'], answer: 0 },
        { kind: 'choice', prompt: "It's about time someone ___ ownership of it.", options: ['takes', 'took', 'take', 'taken'], answer: 1 },
        { kind: 'choice', prompt: 'He talks as if he ___ the CTO. (he is not)', options: ['is', 'were', 'be', 'has been'], answer: 1 },
        { kind: 'gap', text: "It's time we ___ (update) the dependencies. They are two years old.", answers: ['updated'] },
        { kind: 'gap', text: "I'd rather you ___ (not / push) to main directly.", answers: ["didn't push", 'did not push'] },
        { kind: 'gap', text: "I'd ___ work late today than tomorrow.", answers: ['rather'] },
        { kind: 'gap', text: 'What ___ we split the team in two?', answers: ['if'] },
        { kind: 'gap', text: 'Imagine if every build ___ (take) one minute.', answers: ['took'] },
        { kind: 'gap', text: 'It looks as ___ it is going to rain. (real possibility)', answers: ['if', 'though'] },
        { kind: 'gap', text: "It's high time the client ___ (sign) the contract.", answers: ['signed'] },
        { kind: 'transform', instruction: "Rewrite with It's high time", source: 'We should hire a QA engineer now. It is late already.', answers: ["It's high time we hired a QA engineer.", 'It is high time we hired a QA engineer.'] },
        { kind: 'transform', instruction: "Rewrite with I'd rather + person + past", source: 'I prefer that you send it tomorrow.', answers: ["I'd rather you sent it tomorrow.", 'I would rather you sent it tomorrow.'] },
        { kind: 'transform', instruction: 'Rewrite with "as if" (unreal)', source: "He behaves like the owner, but he isn't.", answers: ['He behaves as if he were the owner.', 'He behaves as if he was the owner.', 'He behaves as though he were the owner.'] },
        { kind: 'transform', instruction: 'Rewrite with "Suppose"', source: 'Imagine the client cancels the project. What would we do?', answers: ['Suppose the client cancelled the project. What would we do?', 'Suppose the client canceled the project. What would we do?'] },
        { kind: 'fix', sentence: "It's high time we start writing tests.", answers: ["It's high time we started writing tests."] },
        { kind: 'fix', sentence: "I'd rather you don't call me after 8 pm.", answers: ["I'd rather you didn't call me after 8 pm."] },
        { kind: 'fix', sentence: "I'd rather to work from home.", answers: ["I'd rather work from home."] },
        { kind: 'fix', sentence: 'She talks as if she is my boss. (she is not)', answers: ['She talks as if she were my boss.', 'She talks as if she was my boss.'] },
        { kind: 'fix', sentence: 'Suppose we will lose the client. What then?', answers: ['Suppose we lost the client. What then?', 'Suppose we lose the client. What then?'] },
        { kind: 'order', words: ["It's", 'high', 'time', 'we', 'refactored', 'it', '.'], ru: 'Давно пора это отрефакторить.' },
        { kind: 'order', words: ["I'd", 'rather', 'you', "didn't", 'stop', 'everything', '.'], ru: 'Я бы предпочла, чтобы ты не останавливал всё.' },
        { kind: 'order', words: ['It', 'looks', 'as', 'if', 'it', 'was', 'rushed', '.'], ru: 'Выглядит так, будто это делали в спешке.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: technical debt',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'tech debt', ru: 'технический долг', example: 'We have too much tech debt.' },
            { chunk: 'refactoring', ru: 'рефакторинг', example: 'Refactoring takes one sprint.' },
            { chunk: 'in a hurry', ru: 'в спешке', example: 'It was written in a hurry.' },
            { chunk: 'take ownership', ru: 'взять ответственность', example: 'Someone has to take ownership.' },
            { chunk: 'tempting', ru: 'заманчиво', example: 'Three days instead of six? Tempting.' },
            { chunk: 'pitch it to', ru: 'предложить, «продать» кому-то', example: "I'll pitch it to Tom." },
            { chunk: 'learning opportunity', ru: 'возможность научиться', example: "It's a great learning opportunity." },
            { chunk: 'I hear you', ru: 'я тебя понимаю', example: 'I hear you, but the client is waiting.' },
            { chunk: 'slow us down', ru: 'тормозить нас', example: 'Old code can slow us down.' },
            { chunk: 'pay off', ru: 'погасить (долг); окупиться', example: "Let's pay off some debt this sprint." },
            { chunk: 'maintainability', ru: 'поддерживаемость', example: 'This improves maintainability.' },
            { chunk: 'business case', ru: 'обоснование для бизнеса', example: 'Write a business case for it.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['pay off', 'погасить'],
            ['maintainability', 'поддерживаемость'],
            ['business case', 'обоснование для бизнеса'],
            ['tempting', 'заманчиво'],
            ['I hear you', 'я тебя понимаю'],
          ],
        },
        { kind: 'gap', text: "Let's pay ___ some tech debt this quarter.", answers: ['off'] },
        { kind: 'gap', text: 'Old code slows us ___ .', answers: ['down'] },
        { kind: 'gap', text: 'Write a business ___ so Tom can approve it.', answers: ['case'] },
        { kind: 'gap', text: "I'll ___ it to the management on Monday.", answers: ['pitch'] },
        { kind: 'gap', text: 'Someone needs to take ___ of the sync module.', answers: ['ownership'] },
        { kind: 'choice', prompt: 'How to sell refactoring to business people:', options: ['Show how it speeds up future features and reduces bugs', 'Say the code is ugly', 'Say developers are bored', "Don't explain"], answer: 0 },
        { kind: 'choice', prompt: '"I hear you" means…', options: ['I understand your point', 'I can hear you well', 'Speak louder', 'I agree 100%'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "It's high time we refactored the sync module." },
        { kind: 'dictation', text: "I'd rather we finished those first." },
        { kind: 'dictation', text: 'The code looks as if five people wrote it in a hurry.' },
        { kind: 'dictation', text: 'Suppose we gave you one sprint.' },
        { kind: 'dictation', text: "I'd rather you didn't stop everything." },
        { kind: 'dictation', text: "It's about time someone took ownership of it." },
        { kind: 'dictation', text: 'Tech debt slows us down.' },
        { kind: 'dictation', text: "I'll pitch it to Tom." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: push for change',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "It's high time we refactored the sync module." },
        { kind: 'shadow', text: "I'd rather we finished the features first." },
        { kind: 'shadow', text: 'Suppose we gave you one sprint. What would you do?' },
        { kind: 'shadow', text: "It's about time someone took ownership of it." },
        {
          kind: 'speak',
          situation: 'Convince your manager that it is time to fix something (old library, slow CI, missing docs).',
          keywords: ["it's high time", 'imagine if'],
          sample: "It's high time we upgraded React. We're three versions behind. Imagine if every new library just worked without hacks.",
        },
        {
          kind: 'speak',
          situation: 'A colleague wants to start a big change today. Say politely what you would rather they did.',
          keywords: ["I'd rather you", 'what if'],
          sample: "I'd rather you didn't start the migration today, it's Friday. What if we started on Monday morning, with Ken online?",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: refactoring pitch',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a short pitch for Tom: why it is time to refactor the sync module, what you would rather do, an imaginary "suppose" scenario, and the business benefit.',
          checklist: [
            "*It's (high) time + past*",
            "*I'd rather + (person) + past*",
            '*Suppose / Imagine / What if + past*',
            'A clear business benefit',
          ],
          minWords: 60,
          sample:
            "Proposal: sync module refactoring\nIt's high time we refactored the sync module: every new feature takes twice as long because of it. I'd rather we didn't stop feature work completely, so I suggest that half the team refactors while the other half builds the German features. Suppose we gave this one sprint: new features would take three days instead of six, and we would have far fewer sync bugs. Imagine if the next country launch took weeks instead of months.",
        },
      ],
    },
  ],
};

export default lesson;
