import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-02',
  level: 'B1',
  title: 'Day 17: How long has it been broken?',
  grammar: 'just / already / yet / for / since / How long',
  scene: 'Lena сообщает о баге в маркерах карты. Выясняем, как давно он появился.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the marker bug',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: '#map-project, Slack',
          format: 'chat',
          lines: [
            { who: 'Lena', text: "The markers on staging are in the wrong place. They've been wrong since this morning." },
            { who: 'You', text: "Oh no. I've just checked my last commit, it only changed the colours. Has anyone touched the API?" },
            { who: 'Arjun', text: "I've already looked at the API. It returns the same coordinates as yesterday." },
            { who: 'Lena', text: "How long have you had this bug on your local machine? Or haven't you seen it yet?" },
            { who: 'You', text: "I haven't seen it yet. My local version has worked fine for two days." },
            { who: 'Ken', text: "Wait. I've updated the staging config. The map projection setting has changed since the update." },
            { who: 'Arjun', text: "That's it! We've used EPSG:4326 for years. The new config uses another projection." },
            { who: 'Ken', text: "My bad. I've just reverted it. Can you check again?" },
            { who: 'Lena', text: "Yes, the markers are fine now. I've already closed the ticket. Thanks, everyone!" },
          ],
        },
        { kind: 'choice', prompt: 'Since when have the markers been wrong?', options: ['Since yesterday', 'Since this morning', 'For a week', 'For two days'], answer: 1 },
        { kind: 'choice', prompt: 'What did your last commit change?', options: ['The API', 'The colours', 'The projection', 'The config'], answer: 1 },
        { kind: 'choice', prompt: 'How long has your local version worked fine?', options: ['Since this morning', 'For two days', 'For years', 'For an hour'], answer: 1 },
        { kind: 'choice', prompt: 'What caused the bug?', options: ['Your commit', 'The API', 'A new staging config with another projection', 'Lena’s test'], answer: 2 },
        { kind: 'choice', prompt: 'What has Lena already done?', options: ['Reverted the config', 'Closed the ticket', 'Changed the API', 'Opened a new bug'], answer: 1 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: time words with Present Perfect',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'just / already / yet / ever / never',
          body:
            '**just** — только что: *I’ve just checked it.* Ставится между have и V3.\n' +
            '**already** — уже (раньше, чем ожидали): *I’ve already looked at the API.* Тоже между have и V3.\n' +
            '**yet** — уже? / ещё не. Только в **вопросах и отрицаниях**, ставится **в конец**: *Have you seen it yet? I haven’t seen it yet.*\n' +
            '**ever** — когда-либо (в вопросах): *Have you ever…?*  **never** — никогда: *I’ve never used Rust.*\n\n' +
            '**still** — всё ещё, с оттенком «а уже пора»: *I still haven’t received access.* Ставится перед haven’t.',
          examples: ["I've just reverted it.", "Arjun has already closed the ticket.", "Has the build finished yet?", "I still haven't got the keys."],
        },
        {
          kind: 'theory',
          title: 'for и since: как долго',
          body:
            'Present Perfect описывает ситуации, которые **начались в прошлом и длятся до сих пор**: *We’ve used this projection for years.* По-русски тут настоящее время («Мы **используем** её годами»), а в английском Present Perfect! Это одна из главных ошибок русскоязычных.\n\n' +
            '**for** + период: *for two days, for an hour, for years, for a long time*.\n**since** + точка начала: *since Monday, since 2020, since this morning, since the update, since I joined*.\n\n' +
            'Вопрос: **How long have you…?** Как давно / сколько времени?',
          table: [
            ['for (период)', 'since (точка начала)'],
            ['for two days', 'since Monday'],
            ['for three years', 'since 2023'],
            ['for an hour', 'since 10 am'],
            ['for a long time', 'since the release'],
          ],
          pitfalls: [
            { wrong: 'I work here since 2023.', right: "I've worked here since 2023.", note: 'Длится до сих пор → Present Perfect.' },
            { wrong: 'I know Arjun for two years.', right: "I've known Arjun for two years." },
            { wrong: 'since two days', right: 'for two days' },
            { wrong: 'How long do you work here?', right: 'How long have you worked here?' },
            { wrong: 'I have yet seen it.', right: "I haven't seen it yet." },
          ],
        },
        { kind: 'choice', prompt: "I've worked at Brightloop ___ October.", options: ['for', 'since', 'from', 'during'], answer: 1 },
        { kind: 'choice', prompt: "The tests have been red ___ three hours.", options: ['for', 'since', 'ago', 'during'], answer: 0 },
        { kind: 'choice', prompt: '___ have you known Arjun?', options: ['How much', 'How long', 'How often', 'Since when do'], answer: 1 },
        { kind: 'choice', prompt: "Has the deploy finished ___ ?", options: ['already', 'yet', 'just', 'still'], answer: 1 },
        { kind: 'choice', prompt: "I've ___ fixed it. Two minutes ago.", options: ['yet', 'just', 'ever', 'since'], answer: 1 },
        { kind: 'choice', prompt: 'We ___ this library since 2021.', options: ['use', 'are using', 'have used', 'used'], answer: 2 },
        { kind: 'choice', prompt: "I ___ haven't got access. It's been a week!", options: ['yet', 'still', 'already', 'ever'], answer: 1 },
        { kind: 'choice', prompt: "Wow, you've ___ finished? That was fast!", options: ['yet', 'already', 'ever', 'still'], answer: 1 },
        { kind: 'gap', text: "I've known Lena ___ I joined the company.", answers: ['since'] },
        { kind: 'gap', text: 'The service has been down ___ twenty minutes.', answers: ['for'] },
        { kind: 'gap', text: "Have you reviewed my PR ___ ?", answers: ['yet'] },
        { kind: 'gap', text: "I've ___ used Rust. Never!", answers: ['never'] },
        { kind: 'gap', text: "Have you ___ been on call at night?", answers: ['ever'] },
        { kind: 'gap', text: 'How long ___ you had this laptop?', answers: ['have'] },
        { kind: 'gap', text: 'We ___ (use) Jira for five years.', answers: ["'ve used", 'have used'] },
        { kind: 'gap', text: 'Arjun ___ (be) on the team since 2020.', answers: ["'s been", 'has been'] },
        { kind: 'transform', instruction: 'Перепиши с since (start: Monday)', source: 'The bug appeared on Monday. It is still there.', answers: ['The bug has been there since Monday.', "The bug's been there since Monday."] },
        { kind: 'transform', instruction: 'Перепиши с for', source: 'I started working with React three years ago, and I still work with it.', answers: ["I've worked with React for three years.", 'I have worked with React for three years.', "I've been working with React for three years.", 'I have been working with React for three years.'] },
        { kind: 'transform', instruction: 'Задай вопрос How long…?', source: 'You have worked here **for two years**.', answers: ['How long have you worked here?'] },
        { kind: 'transform', instruction: 'Сделай отрицание с yet', source: 'Lena has tested the fix.', answers: ["Lena hasn't tested the fix yet.", 'Lena has not tested the fix yet.'] },
        { kind: 'fix', sentence: 'I work here since March.', answers: ["I've worked here since March.", 'I have worked here since March.', "I've been working here since March.", 'I have been working here since March.'] },
        { kind: 'fix', sentence: 'We use Kotlin for two years.', answers: ["We've used Kotlin for two years.", 'We have used Kotlin for two years.', "We've been using Kotlin for two years.", 'We have been using Kotlin for two years.'] },
        { kind: 'fix', sentence: "The server is down since 10 am.", answers: ['The server has been down since 10 am.', "The server's been down since 10 am."] },
        { kind: 'fix', sentence: 'I have yet finished the task.', answers: ["I haven't finished the task yet.", 'I have not finished the task yet.'] },
        { kind: 'fix', sentence: 'How long do you know Sofia?', answers: ['How long have you known Sofia?'] },
        { kind: 'order', words: ['How', 'long', 'have', 'you', 'worked', 'here', '?'], ru: 'Как давно ты здесь работаешь?' },
        { kind: 'order', words: ["I've", 'just', 'reverted', 'it', '.'], ru: 'Я только что откатил это.' },
        { kind: 'order', words: ['It', 'has', 'been', 'broken', 'since', 'Monday', '.'], ru: 'Это сломано с понедельника.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: debugging together',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'in the wrong place', ru: 'не на своём месте', example: 'The markers are in the wrong place.' },
            { chunk: 'touched the API', ru: 'трогал(а) API, менял(а)', example: 'Has anyone touched the API?' },
            { chunk: 'worked fine', ru: 'работало нормально', example: 'It has worked fine for two days.' },
            { chunk: 'on my local machine', ru: 'на моей локальной машине', example: 'It works on my local machine.' },
            { chunk: "that's it", ru: 'вот оно! точно!', example: "That's it! It's the config." },
            { chunk: 'closed the ticket', ru: 'закрыл(а) тикет', example: "I've already closed the ticket." },
            { chunk: 'root cause', ru: 'первопричина', example: 'The root cause was the config.' },
            { chunk: 'reproduce', ru: 'воспроизвести', example: "I can't reproduce the bug." },
            { chunk: 'for years', ru: 'годами', example: "We've used it for years." },
            { chunk: 'check again', ru: 'проверить ещё раз', example: 'Can you check again, please?' },
            { chunk: 'setting', ru: 'настройка', example: 'The projection setting has changed.' },
            { chunk: 'it works on my machine', ru: 'у меня работает', example: '"It works on my machine" is not an answer.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['root cause', 'первопричина'],
            ['reproduce', 'воспроизвести'],
            ['setting', 'настройка'],
            ["that's it!", 'точно! вот оно!'],
            ['for years', 'годами'],
          ],
        },
        { kind: 'gap', text: 'What was the root ___ of the incident?', answers: ['cause'] },
        { kind: 'gap', text: "I can't ___ the bug. Can you send me the steps?", answers: ['reproduce'] },
        { kind: 'gap', text: 'It works on my local ___ , but not on staging.', answers: ['machine'] },
        { kind: 'gap', text: 'I fixed the config. Can you check ___ ?', answers: ['again'] },
        { kind: 'gap', text: "Has anyone ___ the database? The schema is different.", answers: ['touched'] },
        { kind: 'choice', prompt: 'Когда нашли причину бага, радостно говорят:', options: ["That's it!", "It's this.", 'This is.', 'Found it is.'], answer: 0 },
        { kind: 'choice', prompt: '«Первопричина» на постмортеме:', options: ['root cause', 'main reason why', 'first cause', 'basic problem'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "They've been wrong since this morning." },
        { kind: 'dictation', text: "I've just checked my last commit." },
        { kind: 'dictation', text: "I've already looked at the API." },
        { kind: 'dictation', text: "I haven't seen it yet." },
        { kind: 'dictation', text: 'My local version has worked fine for two days.' },
        { kind: 'dictation', text: "We've used it for years." },
        { kind: 'dictation', text: 'How long have you worked here?' },
        { kind: 'dictation', text: 'What was the root cause?' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: how long?',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "The markers have been wrong since this morning." },
        { kind: 'shadow', text: "I've already looked at the API. It's fine." },
        { kind: 'shadow', text: "We've used this projection for years." },
        { kind: 'shadow', text: "How long have you had this bug?" },
        {
          kind: 'speak',
          situation: 'Расскажи о себе: как давно ты работаешь в IT, как давно используешь свой основной язык или фреймворк, с какого года живёшь в своём городе.',
          keywords: ["I've worked", 'for', 'since'],
          sample: "I've worked in IT for four years. I've used React since 2021, and I've lived in Kraków for two years.",
        },
        {
          kind: 'speak',
          situation: 'Сообщи о проблеме: сервис лежит уже 20 минут, ты уже проверил(а) логи, но ещё не нашёл(ла) причину.',
          keywords: ['for twenty minutes', 'already', 'yet'],
          sample: "The service has been down for twenty minutes. I've already checked the logs, but I haven't found the root cause yet.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: bug status',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши комментарий в тикете бага: с какого момента он воспроизводится, что ты уже проверил(а), что ещё не проверено, и что ты сделал(а) только что.',
          checklist: [
            '*since / for* с Present Perfect',
            '*already / just / yet*',
            'Хотя бы одно действие в Past Simple с конкретным временем',
            'Есть следующий шаг',
          ],
          minWords: 40,
          sample:
            "The markers have been in the wrong place since this morning's deploy. I've already checked the API: it returns the same coordinates as yesterday. I haven't checked the staging config yet. Ken updated it at 9 am, so it's my next step. I've just asked Ken about the projection setting. I'll update this ticket in an hour.",
        },
      ],
    },
  ],
};

export default lesson;
