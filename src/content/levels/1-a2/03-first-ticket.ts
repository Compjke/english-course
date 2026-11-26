import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'a2-03',
  level: 'A2',
  title: 'Day 3: My first ticket',
  grammar: 'Present Continuous vs Present Simple',
  scene: 'Ты берёшь первый тикет, а Maya спрашивает, как идут дела.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: what are you doing?',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: '#delivery-team, Slack',
          format: 'chat',
          lines: [
            { who: 'Maya', text: 'Hey! How is it going? What are you working on right now?' },
            { who: 'You', text: "Hi Maya! I'm working on my first ticket, BL-142. I'm fixing the date format on the tracking page." },
            { who: 'Maya', text: 'Nice. Is Arjun helping you?' },
            { who: 'You', text: "Not right now. He's having lunch. But he usually answers my questions very quickly." },
            { who: 'Lena', text: "I'm testing the staging build at the moment. The tracking page is loading very slowly today." },
            { who: 'You', text: "Oh, I see the same thing. Ken is updating the servers today, I think." },
            { who: 'Ken', text: "Correct. I'm migrating staging to the new cluster. It usually takes an hour. Sorry for that!" },
            { who: 'Maya', text: "No problem. We aren't releasing today anyway. Our releases happen on Thursdays." },
            { who: 'You', text: "Great. I'm writing the unit tests now. I always write tests before I open a PR." },
          ],
        },
        { kind: 'choice', prompt: 'What is the ticket about?', options: ['The login page', 'The date format on the tracking page', 'The servers', 'Unit tests for the API'], answer: 1 },
        { kind: 'choice', prompt: 'Why can’t Arjun help right now?', options: ["He's in a meeting.", "He's having lunch.", "He's on holiday.", "He's testing."], answer: 1 },
        { kind: 'choice', prompt: 'Why is staging slow?', options: ['Lena is testing it.', 'Ken is migrating it to a new cluster.', 'The release is today.', 'The code has a bug.'], answer: 1 },
        { kind: 'choice', prompt: 'When do releases happen?', options: ['Today', 'Every day', 'On Thursdays', 'On Fridays'], answer: 2 },
        {
          kind: 'choice',
          prompt: 'В каком предложении описано действие **прямо сейчас**?',
          options: ['He usually answers my questions.', "I'm writing the unit tests now.", 'Our releases happen on Thursdays.', 'I always write tests.'],
          answer: 1,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: now vs usually',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Present Continuous: am / is / are + -ing',
          body:
            'Present Continuous описывает то, что происходит **сейчас, в момент речи** или **в этот период** (сегодня, на этой неделе): *I’m fixing a bug. Ken is updating the servers today.*\n\n' +
            'Формула: **am / is / are + глагол-ing**. Отрицание: *isn’t / aren’t + -ing*. Вопрос: *Is he working? What are you doing?*\n\n' +
            'Сигнальные слова: *now, right now, at the moment, today, this week, Look!*',
          table: [
            ['', 'Present Simple (обычно)', 'Present Continuous (сейчас)'],
            ['Смысл', 'привычка, расписание, факт', 'процесс сейчас или в этот период'],
            ['Пример', 'He **answers** questions quickly.', "He's **having** lunch now."],
            ['Сигналы', 'usually, always, every day, on Thursdays', 'now, at the moment, today, this week'],
          ],
          examples: ["I'm working on BL-142.", "Lena isn't testing the API right now.", 'What are you working on?', 'Is the page loading slowly?'],
          pitfalls: [
            { wrong: 'I working on the ticket.', right: "I'm working on the ticket.", note: 'Нужен am/is/are.' },
            { wrong: 'What do you do now?', right: 'What are you doing now?', note: 'Про «сейчас» используй Continuous.' },
            { wrong: 'We are releasing on Thursdays usually.', right: 'We usually release on Thursdays.', note: 'Регулярное действие: Present Simple.' },
          ],
        },
        {
          kind: 'theory',
          title: 'Глаголы состояния обычно без -ing',
          body:
            'Глаголы, которые описывают **состояние, а не действие**, обычно не ставят в Continuous: **know, understand, need, want, like, believe, mean, own, seem**.\n\n' +
            'Говорят *I understand the problem now*, а не *I’m understanding*. И *I need help*, а не *I’m needing help*.\n\n' +
            'Правописание -ing: *write → writing* (немая e уходит), *run → running*, *stop → stopping* (согласная удваивается после короткой ударной гласной), *fix → fixing*.',
        },
        { kind: 'choice', prompt: 'Arjun ___ lunch right now.', options: ['has', 'is having', 'have', 'having'], answer: 1 },
        { kind: 'choice', prompt: 'We usually ___ on Thursdays.', options: ['are releasing', 'release', 'releasing', 'releases'], answer: 1 },
        { kind: 'choice', prompt: 'Look! The build ___ again.', options: ['fails', 'is failing', 'fail', 'failing'], answer: 1 },
        { kind: 'choice', prompt: 'I ___ what you mean.', options: ['am understanding', 'understand', 'understanding', 'am understand'], answer: 1 },
        { kind: 'choice', prompt: '— What ___ ? — I’m reviewing Lena’s PR.', options: ['do you do', 'are you doing', 'you doing', 'you do'], answer: 1 },
        { kind: 'choice', prompt: 'Ken ___ the servers this week.', options: ['updates', 'is updating', 'update', 'updating'], answer: 1 },
        { kind: 'choice', prompt: 'I ___ help with this ticket.', options: ['am needing', 'need', 'needing', 'am need'], answer: 1 },
        { kind: 'gap', text: 'I ___ (write) the unit tests at the moment.', answers: ["'m writing", 'am writing'] },
        { kind: 'gap', text: 'Lena ___ (test) the staging build now.', answers: ["'s testing", 'is testing'] },
        { kind: 'gap', text: 'The page ___ (load) very slowly today.', answers: ["'s loading", 'is loading'] },
        { kind: 'gap', text: 'We ___ (not / release) anything today.', answers: ["aren't releasing", 'are not releasing', "'re not releasing"] },
        { kind: 'gap', text: 'Arjun usually ___ (answer) questions quickly.', answers: ['answers'] },
        { kind: 'gap', text: 'Ken ___ (run) the migration right now.', answers: ["'s running", 'is running'] },
        { kind: 'gap', text: 'Who ___ (work) on the payment bug this week?', answers: ['is working', "'s working"] },
        { kind: 'gap', text: 'I ___ (know) the answer.', answers: ['know'] },
        { kind: 'transform', instruction: 'Сделай вопрос', source: 'Maya is talking to the client.', answers: ['Is Maya talking to the client?'] },
        {
          kind: 'transform',
          instruction: 'Сделай отрицание',
          source: "I'm working on the backend.",
          answers: ["I'm not working on the backend.", 'I am not working on the backend.'],
        },
        { kind: 'transform', instruction: 'Задай вопрос What…?', source: 'You are doing **something** now.', answers: ['What are you doing now?', 'What are you doing?'] },
        { kind: 'transform', instruction: 'Перепиши про «сейчас» (now)', source: 'Lena tests the app.', answers: ['Lena is testing the app now.', "Lena's testing the app now."] },
        { kind: 'fix', sentence: 'I working on BL-142 now.', answers: ["I'm working on BL-142 now.", 'I am working on BL-142 now.'] },
        { kind: 'fix', sentence: 'Are you understanding the task?', answers: ['Do you understand the task?'] },
        { kind: 'fix', sentence: 'What do you do right now?', answers: ['What are you doing right now?'] },
        { kind: 'fix', sentence: 'The tests are runing.', answers: ['The tests are running.'] },
        { kind: 'fix', sentence: 'She is wanting a new laptop.', answers: ['She wants a new laptop.'] },
        { kind: 'order', words: ['What', 'are', 'you', 'working', 'on', '?'], ru: 'Над чем ты работаешь?' },
        { kind: 'order', words: ['Ken', 'is', 'updating', 'the', 'servers', 'today', '.'], ru: 'Ken сегодня обновляет серверы.' },
        { kind: 'order', words: ['We', 'usually', 'release', 'on', 'Thursdays', '.'], ru: 'Обычно мы релизимся по четвергам.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: tickets and status',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'how is it going', ru: 'как дела, как продвигается', example: 'Hey! How is it going with the ticket?' },
            { chunk: 'working on', ru: 'работаю над (work on)', example: "I'm working on BL-142." },
            { chunk: 'at the moment', ru: 'в данный момент', example: "I'm testing staging at the moment." },
            { chunk: 'ticket', ru: 'задача в трекере', example: 'My first ticket is about dates.' },
            { chunk: 'staging', ru: 'тестовое окружение', example: 'The staging build is ready.' },
            { chunk: 'loading slowly', ru: 'медленно грузится', example: 'The page is loading slowly.' },
            { chunk: 'unit tests', ru: 'модульные тесты', example: "I'm writing unit tests now." },
            { chunk: 'open a PR', ru: 'открыть пулл-реквест', example: 'I always write tests before I open a PR.' },
            { chunk: 'anyway', ru: 'всё равно, в любом случае', example: "We aren't releasing today anyway." },
            { chunk: 'I see the same thing', ru: 'у меня то же самое', example: 'Oh, I see the same thing on my laptop.' },
            { chunk: 'sorry for that', ru: 'извините за это', example: 'Staging is down for an hour, sorry for that.' },
            { chunk: 'date format', ru: 'формат даты', example: 'The date format is wrong on the page.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['at the moment', 'в данный момент'],
            ['anyway', 'всё равно'],
            ['staging', 'тестовое окружение'],
            ['open a PR', 'открыть пулл-реквест'],
            ['how is it going', 'как продвигается'],
          ],
        },
        { kind: 'gap', text: "What are you working ___ ?", answers: ['on'] },
        { kind: 'gap', text: "I'm busy at the ___ . Can I call you later?", answers: ['moment'] },
        { kind: 'gap', text: 'Please open a ___ when the tests are green.', answers: ['PR'] },
        { kind: 'gap', text: 'The new build is on ___ , please test it there.', answers: ['staging'] },
        { kind: 'gap', text: "It's late, and we aren't deploying today ___ .", answers: ['anyway'] },
        { kind: 'choice', prompt: 'Коллега пишет «The page is down for me». Ты видишь то же. Ответ:', options: ['I see the same thing.', 'I look the same.', 'Me too see.', 'Same see.'], answer: 0 },
        { kind: 'choice', prompt: '«Как продвигается задача?» Лучший вариант:', options: ['How is it going with the task?', 'How goes the task?', 'What is with the task?', 'How the task?'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "I'm working on my first ticket." },
        { kind: 'dictation', text: "He's having lunch right now." },
        { kind: 'dictation', text: 'The page is loading very slowly today.' },
        { kind: 'dictation', text: "We aren't releasing today anyway." },
        { kind: 'dictation', text: 'What are you working on?' },
        { kind: 'dictation', text: 'Ken is running the migration.' },
        {
          kind: 'theory',
          title: 'Spelling: -ing',
          body: '**write → writing, make → making** (e исчезает).\n**run → running, stop → stopping, plan → planning** (удвоение).\n**fix → fixing, deploy → deploying, test → testing** (без изменений).',
        },
        { kind: 'dictation', text: 'We are planning the next sprint.' },
        { kind: 'dictation', text: 'Lena is writing a bug report.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: give a status update',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "I'm working on BL-142 at the moment." },
        { kind: 'shadow', text: "Arjun is having lunch, but he usually answers quickly." },
        { kind: 'shadow', text: "We aren't releasing today anyway." },
        { kind: 'shadow', text: 'What are you working on right now?' },
        {
          kind: 'speak',
          situation: 'Maya пишет: «What are you doing right now?» Скажи, над каким тикетом работаешь и что делаешь в этот момент.',
          keywords: ["I'm working on", 'at the moment'],
          sample: "I'm working on BL-142. At the moment I'm writing unit tests for the date format.",
        },
        {
          kind: 'speak',
          situation: 'Сравни: что ты обычно делаешь по утрам на работе, и что делаешь сегодня (сегодня всё иначе).',
          keywords: ['usually', 'today'],
          sample: "I usually check my emails and review PRs in the morning. But today I'm helping Lena with testing.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: status in Slack',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Maya просит короткий статус в Slack. Напиши, над чем работаешь сейчас, что уже понятно, что мешает (staging медленный) и что ты обычно делаешь перед открытием PR.',
          checklist: [
            'Есть Present Continuous про «сейчас» (*I’m working on…*)',
            'Есть Present Simple про привычку (*I usually / always…*)',
            'Глаголы состояния без -ing (*I understand, I need*)',
            'Есть упоминание тикета (BL-142)',
          ],
          minWords: 35,
          sample:
            "Status update: I'm working on BL-142 at the moment. I understand the problem: the tracking page shows the date in the wrong format. I'm writing unit tests now. Staging is loading slowly today because Ken is migrating it, so I'm testing locally. I always run all tests before I open a PR, so I need about two more hours.",
        },
      ],
    },
  ],
};

export default lesson;
