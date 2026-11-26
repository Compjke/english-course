import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1p-11',
  level: 'B1+',
  title: "Day 51: By March we'll have finished",
  grammar: 'Future Continuous & Future Perfect',
  scene: 'Роадмап driver app: что будет происходить и что будет готово к каждой дате.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the roadmap',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Roadmap review',
          format: 'call',
          lines: [
            { who: 'Maya', text: "Let's go through the roadmap. Where will we be at the end of January?" },
            { who: 'You', text: "By the end of January, we'll have finished the core screens: login, route list and map." },
            { who: 'Arjun', text: "And the backend will have been migrated to the new event bus by then." },
            { who: 'Maya', text: 'What about February?' },
            { who: 'You', text: "In February we'll be working on offline mode. It's the hardest part, so we'll be testing it all month." },
            { who: 'Lena', text: "This time next month I'll be travelling with drivers in Kraków to test the app in real conditions." },
            { who: 'Tom', text: "By March, how many drivers will have used the beta?" },
            { who: 'You', text: "If the rollout goes to plan, about five hundred drivers will have installed it by March." },
            { who: 'Maya', text: "And will you be presenting it at the client's annual meeting?" },
            { who: 'You', text: "Yes, I'll be presenting on March 12th. By then we'll have collected real feedback, so the demo will be more convincing." },
          ],
        },
        { kind: 'choice', prompt: 'What will be finished by the end of January?', options: ['Offline mode', 'The core screens', 'The whole app', 'Nothing'], answer: 1 },
        { kind: 'choice', prompt: 'What will the team be working on in February?', options: ['Offline mode', 'Login', 'The website', 'A new client'], answer: 0 },
        { kind: 'choice', prompt: 'What will Lena be doing this time next month?', options: ['Travelling with drivers in Kraków', 'On holiday', 'Writing docs', 'Presenting'], answer: 0 },
        { kind: 'choice', prompt: 'How many drivers will have installed the beta by March?', options: ['Fifty', 'About five hundred', 'Five thousand', 'Nobody'], answer: 1 },
        { kind: 'choice', prompt: 'When will you be presenting?', options: ['On March 12th', 'In January', 'Next week', 'In April'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: future in progress & future completed',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Future Continuous: will be + -ing',
          body:
            '**Future Continuous** describes an action that will be **in progress** at a certain moment in the future:\n*This time next month I’ll be travelling with drivers.* *In February we’ll be working on offline mode.*\n\n' +
            'It also sounds polite when you ask about someone’s plans (it’s not a request, just a question about the plan): *Will you be presenting at the meeting?* *Will you be using the room after lunch?*\n\n' +
            'Form: *will be + -ing*. Negative: *won’t be + -ing*.',
          examples: ["This time tomorrow I'll be flying to Toronto.", "We'll be testing offline mode all February.", 'Will you be joining the call?'],
        },
        {
          kind: 'theory',
          title: 'Future Perfect: will have + V3',
          body:
            '**Future Perfect** describes an action that will be **finished before** a certain moment in the future. It often goes with **by** (= not later than) or **by the time**:\n*By the end of January we’ll have finished the core screens.* *By March, 500 drivers will have installed it.*\n\n' +
            'Passive: *will have been + V3*: *The backend will have been migrated by then.*\n\n' +
            'Remember: after *by the time / when / before*, use the **present**: *By the time you **arrive**, we’ll have started.*',
          table: [
            ['Tense', 'Form', 'Meaning', 'Example'],
            ['Future Continuous', 'will be + -ing', 'in progress at a future moment', "At 10 I'll **be presenting**."],
            ['Future Perfect', 'will have + V3', 'finished before a future moment', "By 10 I'll **have finished**."],
            ['Future Perfect Passive', 'will have been + V3', 'finished (passive)', "It'll **have been migrated**."],
          ],
          pitfalls: [
            { wrong: 'By March we will finish the screens. (completed before)', right: 'By March we will have finished the screens.' },
            { wrong: "By the time you will arrive, we'll have started.", right: "By the time you arrive, we'll have started." },
            { wrong: 'This time next week I will lie on a beach.', right: 'This time next week I will be lying on a beach.' },
            { wrong: 'We will have finish it by Friday.', right: 'We will have finished it by Friday.' },
          ],
        },
        { kind: 'choice', prompt: "By the end of January, we ___ the core screens.", options: ['will finish', "'ll have finished", "'ll be finishing", 'finish'], answer: 1 },
        { kind: 'choice', prompt: 'This time next month I ___ with drivers in Kraków.', options: ["'ll travel", "'ll be travelling", "'ll have travelled", 'travel'], answer: 1 },
        { kind: 'choice', prompt: 'In February we ___ on offline mode all month.', options: ["'ll be working", "'ll have worked", 'work', 'are worked'], answer: 0 },
        { kind: 'choice', prompt: 'By March, 500 drivers ___ the beta.', options: ['will install', 'will have installed', 'will be installing', 'install'], answer: 1 },
        { kind: 'choice', prompt: 'The backend ___ to the new bus by then.', options: ['will migrate', 'will have been migrated', 'will be migrating', 'will have migrated by itself'], answer: 1 },
        { kind: 'choice', prompt: '___ you be using the meeting room after lunch? (polite question about plans)', options: ['Will', 'Do', 'Are', 'Have'], answer: 0 },
        { kind: 'choice', prompt: "By the time you ___ , we'll have started the demo.", options: ['will arrive', 'arrive', 'will have arrived', 'arriving'], answer: 1 },
        { kind: 'gap', text: 'At 3 pm tomorrow I ___ (present) the roadmap. Please don’t call me.', answers: ["'ll be presenting", 'will be presenting'] },
        { kind: 'gap', text: 'By Friday we ___ (fix) all the critical bugs.', answers: ["'ll have fixed", 'will have fixed'] },
        { kind: 'gap', text: "Don't call at 9. We ___ (have) the standup.", answers: ["'ll be having", 'will be having'] },
        { kind: 'gap', text: 'By next year, Arjun ___ (work) here for six years.', answers: ["'ll have worked", 'will have worked'] },
        { kind: 'gap', text: 'By the time the client calls, we ___ (deploy) the fix.', answers: ["'ll have deployed", 'will have deployed'] },
        { kind: 'gap', text: 'Will you ___ (join) the retro tomorrow?', answers: ['be joining'] },
        { kind: 'gap', text: 'The old servers will have ___ (shut) down by April.', answers: ['been shut'] },
        { kind: 'transform', instruction: 'Use Future Perfect with "by"', source: 'We will finish the migration. The deadline is Friday.', answers: ["We'll have finished the migration by Friday.", 'We will have finished the migration by Friday.'] },
        { kind: 'transform', instruction: 'Use Future Continuous', source: 'Tomorrow from 10 to 12 I have the workshop. (at 11)', answers: ["At 11 tomorrow I'll be having the workshop.", "At 11 tomorrow I'll be doing the workshop.", "At 11 tomorrow I'll be in the workshop.", "Tomorrow at 11 I'll be having the workshop."] },
        { kind: 'transform', instruction: 'Ask politely with Future Continuous', source: 'Are you going to use the test phone today?', answers: ['Will you be using the test phone today?'] },
        { kind: 'fix', sentence: 'By June we will finish the whole app.', answers: ['By June we will have finished the whole app.', "By June we'll have finished the whole app."] },
        { kind: 'fix', sentence: 'This time tomorrow I will fly to Toronto.', answers: ['This time tomorrow I will be flying to Toronto.', "This time tomorrow I'll be flying to Toronto."] },
        { kind: 'fix', sentence: 'By the time you will read this, I will have left.', answers: ['By the time you read this, I will have left.', "By the time you read this, I'll have left."] },
        { kind: 'fix', sentence: 'We will have finish the tests by noon.', answers: ['We will have finished the tests by noon.'] },
        { kind: 'fix', sentence: 'The data will have migrated by Monday. (passive)', answers: ['The data will have been migrated by Monday.'] },
        { kind: 'order', words: ["We'll", 'have', 'finished', 'by', 'March', '.'], ru: 'К марту мы закончим.' },
        { kind: 'order', words: ["I'll", 'be', 'presenting', 'at', 'three', '.'], ru: 'В три я буду выступать.' },
        { kind: 'order', words: ['Will', 'you', 'be', 'joining', 'the', 'call', '?'], ru: 'Ты будешь на созвоне?' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: roadmaps',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'roadmap', ru: 'дорожная карта', example: "Let's go through the roadmap." },
            { chunk: 'core screens', ru: 'основные экраны', example: "We'll have finished the core screens." },
            { chunk: 'milestone', ru: 'веха, контрольная точка', example: 'The first milestone is in January.' },
            { chunk: 'real conditions', ru: 'реальные условия', example: 'We test it in real conditions.' },
            { chunk: 'goes to plan', ru: 'идёт по плану', example: 'If the rollout goes to plan…' },
            { chunk: 'annual meeting', ru: 'ежегодное собрание', example: "The client's annual meeting is in March." },
            { chunk: 'convincing', ru: 'убедительный', example: 'The demo will be more convincing.' },
            { chunk: 'by then', ru: 'к тому времени', example: "By then we'll have real feedback." },
            { chunk: 'this time next month', ru: 'в это время через месяц', example: "This time next month I'll be in Kraków." },
            { chunk: 'quarter', ru: 'квартал', example: 'The goals for this quarter.' },
            { chunk: 'deliverable', ru: 'результат, сдаваемая часть', example: 'The first deliverable is the login.' },
            { chunk: 'on schedule', ru: 'по графику', example: "We're on schedule." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['milestone', 'веха'],
            ['deliverable', 'сдаваемый результат'],
            ['by then', 'к тому времени'],
            ['convincing', 'убедительный'],
            ['on schedule', 'по графику'],
          ],
        },
        { kind: 'gap', text: 'The next ___ is the beta release on January 31st.', answers: ['milestone'] },
        { kind: 'gap', text: 'If everything goes to ___ , we finish in March.', answers: ['plan'] },
        { kind: 'gap', text: "We'll have tested it by ___ .", answers: ['then'] },
        { kind: 'gap', text: 'The first ___ for the client is the login screen.', answers: ['deliverable'] },
        { kind: 'gap', text: "We're on ___ , no delays so far.", answers: ['schedule'] },
        { kind: 'choice', prompt: 'A roadmap usually shows…', options: ['milestones and dates', 'only bugs', 'salaries', 'the office map'], answer: 0 },
        { kind: 'choice', prompt: '"By Friday" means…', options: ['not later than Friday', 'near Friday', 'after Friday', 'only on Friday'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "By the end of January, we'll have finished the core screens." },
        { kind: 'dictation', text: "In February we'll be working on offline mode." },
        { kind: 'dictation', text: "This time next month I'll be travelling with drivers." },
        { kind: 'dictation', text: 'The backend will have been migrated by then.' },
        { kind: 'dictation', text: 'Will you be presenting at the meeting?' },
        { kind: 'dictation', text: "By then we'll have collected real feedback." },
        { kind: 'dictation', text: "If the rollout goes to plan, we're on schedule." },
        { kind: 'dictation', text: 'The first milestone is in January.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: talk about the future',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "By the end of January we'll have finished the core screens." },
        { kind: 'shadow', text: "In February we'll be working on offline mode." },
        { kind: 'shadow', text: "This time next month I'll be travelling with drivers." },
        { kind: 'shadow', text: 'Will you be presenting at the annual meeting?' },
        {
          kind: 'speak',
          situation: 'Describe your life in one year: what you will be doing (in progress) and what you will have achieved by then.',
          keywords: ["I'll be", "I'll have"],
          sample: "This time next year I'll be working as a senior developer, I hope. By then I'll have finished my AWS certificate and I'll have led at least one big project.",
        },
        {
          kind: 'speak',
          situation: 'Present the plan of a project with two milestones: what will be done by each date and what the team will be doing in between.',
          keywords: ['by', 'will have', 'will be'],
          sample: "By the end of the month we'll have finished the design. In March we'll be building the API, and by April the beta will have been released.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: roadmap update',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a short roadmap update for the client: milestones for January, February and March. Use Future Perfect for completed results and Future Continuous for work in progress.',
          checklist: [
            '*will have + V3* with *by*',
            '*will be + -ing* for work in progress',
            'At least one Future Perfect passive',
            'Present tense after *by the time / when*',
          ],
          minWords: 55,
          sample:
            "Driver app roadmap\nBy the end of January, we'll have finished the core screens (login, route list and map), and the backend will have been migrated to the new event bus.\nIn February, we'll be working on offline mode, and Lena will be testing the app with drivers in Kraków.\nBy March 12th, about 500 drivers will have installed the beta. By the time we present at your annual meeting, we'll have collected real feedback.",
        },
      ],
    },
  ],
};

export default lesson;
