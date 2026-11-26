import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1p-10',
  level: 'B1+',
  title: 'Day 50: Someone must have deleted it',
  grammar: 'Modals of deduction (past): must have / can’t have / might have done',
  scene: 'Утром пропала тестовая база на staging. Кто и как?',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the missing database',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: '#incidents, Slack',
          format: 'chat',
          lines: [
            { who: 'Lena', text: "The staging test database is empty! All my test data is gone. What happened?" },
            { who: 'Nina', text: "Oh no. I ran the cleanup script yesterday… I might have chosen the wrong environment." },
            { who: 'You', text: "Don't panic. You can't have deleted it. The script only works on local databases." },
            { who: 'Ken', text: "Actually, it could have run on staging. I changed the default config last week." },
            { who: 'Arjun', text: "The logs show a DROP TABLE at 23:40. Nina must have logged off by then, right?" },
            { who: 'Nina', text: "Yes, I logged off at six. So it can't have been me!" },
            { who: 'Ken', text: "Hmm. The nightly reset job runs at 23:40. It must have used the new config. My fault, sorry." },
            { who: 'Lena', text: "OK, but I should have had a backup of my test data. Can we restore it?" },
            { who: 'Ken', text: "Yes, the backup from yesterday evening must have finished before the job. I'll restore it now." },
            { who: 'You', text: "Nina, you see? It wasn't you. But it was a good idea to say it might have been. That's honest." },
          ],
        },
        { kind: 'choice', prompt: 'What did Nina think at first?', options: ['She might have deleted the data', 'Ken deleted it', 'A hacker did it', 'Nothing happened'], answer: 0 },
        { kind: 'choice', prompt: 'When did the DROP TABLE happen?', options: ['At 18:00', 'At 23:40', 'At 9:00', 'At midnight'], answer: 1 },
        { kind: 'choice', prompt: "Why can't it have been Nina?", options: ['She logged off at six', 'She has no access', 'She was on holiday', 'She is an intern'], answer: 0 },
        { kind: 'choice', prompt: 'What really caused it?', options: ['The nightly reset job used the new config', 'Lena', 'Arjun', 'A virus'], answer: 0 },
        { kind: 'choice', prompt: 'Can they restore the data?', options: ['Yes, from yesterday evening’s backup', 'No', 'Only partly', 'They don’t know'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: guesses about the past',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'modal + have + past participle',
          body:
            'To make logical guesses about the **past**, add **have + past participle** after the modal:\n\n' +
            '**must have done** — I’m almost sure it happened: *The job must have used the new config.*\n' +
            '**might / may / could have done** — it’s possible that it happened: *I might have chosen the wrong environment.*\n' +
            '**can’t / couldn’t have done** — I’m almost sure it did NOT happen: *It can’t have been me.*\n\n' +
            'Be careful: **could have done** can also mean "it was possible, but it didn’t happen": *It could have run on staging* (there was a risk).\n\n' +
            'Compare with *should have done* (criticism or regret, next lessons): *I should have had a backup.*',
          table: [
            ['Certainty', 'Past form', 'Example'],
            ['~95% yes', 'must have + V3', 'It **must have used** the new config.'],
            ['~50%', 'might / may / could have + V3', 'I **might have chosen** the wrong env.'],
            ['~95% no', "can't / couldn't have + V3", "It **can't have been** me."],
            ['in progress', 'must have been + -ing', 'He **must have been sleeping**.'],
          ],
          pitfalls: [
            { wrong: 'Someone must deleted it.', right: 'Someone must have deleted it.' },
            { wrong: "It mustn't have been me.", right: "It can't have been me." },
            { wrong: 'She might has forgotten.', right: 'She might have forgotten.' },
            { wrong: 'He must have went home.', right: 'He must have gone home.' },
          ],
        },
        { kind: 'choice', prompt: 'The data is gone. Someone ___ it.', options: ['must delete', 'must have deleted', 'must deleted', 'must have delete'], answer: 1 },
        { kind: 'choice', prompt: 'I logged off at six, so it ___ me.', options: ["mustn't have been", "can't have been", 'might have been', 'must have been'], answer: 1 },
        { kind: 'choice', prompt: "I'm not sure. I ___ the wrong environment.", options: ['might have chosen', 'must choose', "can't have chosen", 'should choose'], answer: 0 },
        { kind: 'choice', prompt: 'The job ran at 23:40 with the new config. It ___ the staging DB.', options: ['must have dropped', 'might drop', "can't have dropped", 'must dropped'], answer: 0 },
        { kind: 'choice', prompt: "Arjun didn't answer last night. He ___ asleep.", options: ['must have been', 'must be', "can't have been", 'must had been'], answer: 0 },
        { kind: 'choice', prompt: "The backup ___ before the job, it started at 21:00.", options: ['must have finished', "can't finish", 'must finish', 'might finished'], answer: 0 },
        { kind: 'choice', prompt: '"It could have run on staging" can mean…', options: ['It was possible (there was a risk)', 'It definitely ran', 'It can run now', 'It never could run'], answer: 0 },
        { kind: 'gap', text: 'The file disappeared. Someone must have ___ (delete) it.', answers: ['deleted'] },
        { kind: 'gap', text: "Lena can't ___ seen my message, she was offline.", answers: ['have'] },
        { kind: 'gap', text: 'I can’t find my keys. I ___ have left them at the office. (maybe)', answers: ['might', 'may', 'could'] },
        { kind: 'gap', text: "He looks tired. He must ___ been working all night.", answers: ['have'] },
        { kind: 'gap', text: "The client hasn't replied. They might have ___ (miss) the email.", answers: ['missed'] },
        { kind: 'gap', text: "It ___ have been Ken; he was on a plane. (sure it wasn't)", answers: ["can't", "couldn't", 'cannot'] },
        { kind: 'gap', text: 'The CI was green, so the tests must have ___ (pass).', answers: ['passed'] },
        { kind: 'transform', instruction: 'Use must have', source: "I'm sure the job used the new config.", answers: ['The job must have used the new config.'] },
        { kind: 'transform', instruction: "Use can't have", source: "I'm sure Nina didn't delete it. She was offline.", answers: ["Nina can't have deleted it.", 'Nina cannot have deleted it.', "Nina couldn't have deleted it."] },
        { kind: 'transform', instruction: 'Use might have', source: 'Perhaps the client forgot about the meeting.', answers: ['The client might have forgotten about the meeting.', 'The client might have forgotten the meeting.'] },
        { kind: 'transform', instruction: 'Use must have been + -ing', source: "I'm sure he was driving when I called.", answers: ['He must have been driving when I called.'] },
        { kind: 'fix', sentence: 'She must forgot the password.', answers: ['She must have forgotten the password.'] },
        { kind: 'fix', sentence: "It mustn't have been Arjun, he was on holiday.", answers: ["It can't have been Arjun, he was on holiday.", "It couldn't have been Arjun, he was on holiday."] },
        { kind: 'fix', sentence: 'They might have went home already.', answers: ['They might have gone home already.'] },
        { kind: 'fix', sentence: 'He can have seen it. (maybe)', answers: ['He might have seen it.', 'He may have seen it.', 'He could have seen it.'] },
        { kind: 'fix', sentence: 'The build must have fail at night.', answers: ['The build must have failed at night.'] },
        { kind: 'order', words: ['Someone', 'must', 'have', 'deleted', 'it', '.'], ru: 'Кто-то, должно быть, удалил это.' },
        { kind: 'order', words: ['It', "can't", 'have', 'been', 'me', '.'], ru: 'Это не мог быть я.' },
        { kind: 'order', words: ['I', 'might', 'have', 'made', 'a', 'mistake', '.'], ru: 'Возможно, я ошибся.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: data loss',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'is gone', ru: 'пропало, исчезло', example: 'All my test data is gone.' },
            { chunk: 'cleanup script', ru: 'скрипт очистки', example: 'I ran the cleanup script.' },
            { chunk: 'wrong environment', ru: 'не то окружение', example: 'I chose the wrong environment.' },
            { chunk: 'default config', ru: 'конфиг по умолчанию', example: 'Ken changed the default config.' },
            { chunk: 'nightly job', ru: 'ночная задача', example: 'The nightly job runs at 23:40.' },
            { chunk: "don't panic", ru: 'без паники', example: "Don't panic, we have backups." },
            { chunk: 'my fault', ru: 'моя вина', example: 'It was my fault, sorry.' },
            { chunk: 'restore', ru: 'восстановить', example: "I'll restore it now." },
            { chunk: 'logged off', ru: 'вышел из системы', example: 'I logged off at six.' },
            { chunk: 'honest', ru: 'честный', example: "That's honest." },
            { chunk: 'safeguard', ru: 'защитная мера', example: 'We need a safeguard for production.' },
            { chunk: 'dry run', ru: 'пробный запуск', example: 'Always do a dry run first.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['dry run', 'пробный запуск'],
            ['safeguard', 'защитная мера'],
            ['my fault', 'моя вина'],
            ['is gone', 'пропало'],
            ['nightly job', 'ночная задача'],
          ],
        },
        { kind: 'gap', text: 'Run the script with --dry-___ first.', answers: ['run'] },
        { kind: 'gap', text: "Don't ___ , we have a backup from last night.", answers: ['panic'] },
        { kind: 'gap', text: 'We need a ___ so nobody can drop production tables.', answers: ['safeguard'] },
        { kind: 'gap', text: "It was my ___ . I'll fix the config.", answers: ['fault'] },
        { kind: 'gap', text: "Ken will ___ the database from the backup.", answers: ['restore'] },
        { kind: 'choice', prompt: 'You think you broke something. Honest message:', options: ['I might have caused this. Checking now.', 'Not me!', '...', 'Someone else did it.'], answer: 0 },
        { kind: 'choice', prompt: 'A "dry run" is…', options: ['a test run that changes nothing', 'running in the rain', 'a failed run', 'a fast run'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'I might have chosen the wrong environment.' },
        { kind: 'dictation', text: "You can't have deleted it." },
        { kind: 'dictation', text: 'It could have run on staging.' },
        { kind: 'dictation', text: 'It must have used the new config.' },
        { kind: 'dictation', text: "So it can't have been me!" },
        { kind: 'dictation', text: 'I should have had a backup.' },
        {
          kind: 'theory',
          title: "must've, might've, can't've",
          body: 'In speech, *have* after a modal is very weak: *must have* [ˈmʌstəv], *might have* [ˈmaɪtəv], *can’t have* [ˈkɑːntəv]. Listen for the past participle after it (*deleted, been, gone*).',
        },
        { kind: 'dictation', text: "He must've been sleeping." },
        { kind: 'dictation', text: 'Always do a dry run first.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: what happened?',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'Someone must have deleted it.' },
        { kind: 'shadow', text: "It can't have been me. I logged off at six." },
        { kind: 'shadow', text: 'I might have chosen the wrong environment.' },
        { kind: 'shadow', text: 'The job must have used the new config.' },
        {
          kind: 'speak',
          situation: 'You arrive at the office and your monitor is gone. Make three guesses about what happened.',
          keywords: ['must have', 'might have', "can't have"],
          sample: "IT must have taken it for repair. Or a colleague might have borrowed it. It can't have been stolen, because the office is locked at night.",
        },
        {
          kind: 'speak',
          situation: 'A colleague thinks they broke production. Calm them down with logic: it can’t have been them, and say what must have happened.',
          keywords: ["can't have", 'must have'],
          sample: "Don't worry, it can't have been your change, it isn't deployed yet. The error started at 3 am, so it must have been the nightly job.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: incident thread',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write an update in #incidents about the empty staging database: what must have happened, what can’t have happened, what might have happened, and the next steps.',
          checklist: [
            '*must have + V3*',
            "*can't have + V3*",
            '*might / could have + V3*',
            'Next steps and a safeguard',
          ],
          minWords: 50,
          sample:
            "Update: the staging test database was emptied at 23:40. It can't have been Nina's cleanup script, because she logged off at six. The nightly reset job must have used the new default config that Ken changed last week, so it dropped the tables on staging. Other jobs might have been affected too; we're checking. Ken is restoring yesterday's backup now. Safeguard: all scripts will require a dry run on staging.",
        },
      ],
    },
  ],
};

export default lesson;
