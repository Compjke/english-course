import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'a2-02',
  level: 'A2',
  title: 'Day 2: How we work',
  grammar: 'Present Simple',
  scene: 'Arjun рассказывает, как устроен рабочий процесс команды.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the team process',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Slack huddle, 11:00 am',
          format: 'call',
          lines: [
            { who: 'You', text: 'Arjun, can you tell me how the team works? What happens every day?' },
            { who: 'Arjun', text: 'Sure. We have a standup at ten every morning. It takes fifteen minutes.' },
            { who: 'You', text: 'Does everyone join the standup?' },
            { who: 'Arjun', text: "Yes, everyone joins, but Tom doesn't speak much. He usually just listens." },
            { who: 'Arjun', text: 'We work in two-week sprints. Maya plans the sprint with Tom on Monday.' },
            { who: 'You', text: 'And how do you review code?' },
            { who: 'Arjun', text: 'Every pull request needs two approvals. Lena tests every feature before the release.' },
            { who: 'You', text: 'How often do you release?' },
            { who: 'Arjun', text: "We release on Thursdays. We never deploy on Fridays. Ken doesn't like weekend incidents!" },
            { who: 'You', text: 'That makes sense. Do you write tests for everything?' },
            { who: 'Arjun', text: 'Not for everything, but we always test the business logic. The CI runs the tests on every commit.' },
          ],
        },
        { kind: 'choice', prompt: 'When is the standup?', options: ['At nine', 'At ten every morning', 'On Mondays', 'After lunch'], answer: 1 },
        { kind: 'choice', prompt: 'What does Tom usually do at the standup?', options: ['He speaks a lot.', 'He just listens.', "He doesn't join.", 'He plans the sprint.'], answer: 1 },
        { kind: 'choice', prompt: 'How many approvals does a pull request need?', options: ['One', 'Two', 'Three', 'None'], answer: 1 },
        { kind: 'choice', prompt: 'When does the team release?', options: ['On Fridays', 'Every day', 'On Thursdays', 'On Mondays'], answer: 2 },
        { kind: 'choice', prompt: 'What runs the tests on every commit?', options: ['Lena', 'The CI', 'Ken', 'Maya'], answer: 1 },
        {
          kind: 'choice',
          prompt: 'Почему в диалоге «Tom **doesn’t** speak», а не «Tom don’t speak»?',
          options: ['Tom — это «он» (3-е лицо, ед. ч.)', 'Это прошедшее время', 'Это ошибка', 'Потому что это вопрос'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: Present Simple',
      minutes: 20,
      items: [
        {
          kind: 'theory',
          title: 'Present Simple: регулярные действия и факты',
          body:
            'Present Simple описывает то, что происходит **регулярно** (привычки, процессы, расписание), и **факты**. Сигнальные слова: *every day, usually, always, often, never, on Mondays*.\n\n' +
            'Главное правило: с **he / she / it** (а также с одним человеком или предметом: *Maya, the CI, the app*) к глаголу добавляется **-s**: *she works, the CI runs, Ken likes*.\n\n' +
            'В отрицаниях и вопросах нужен вспомогательный глагол **do / does**. После него глагол идёт **без -s**: *She doesn’t work*, а не *She doesn’t works*.',
          table: [
            ['', 'I / you / we / they', 'he / she / it'],
            ['+', 'We **release** on Thursdays.', 'Lena **tests** every feature.'],
            ['−', "We **don't** deploy on Fridays.", "Tom **doesn't** speak much."],
            ['?', '**Do** you write tests?', '**Does** the CI run the tests?'],
          ],
          examples: ['The standup takes fifteen minutes.', 'Every pull request needs two approvals.', "Ken doesn't like weekend incidents.", 'How often do you release?'],
          pitfalls: [
            { wrong: 'She work from home.', right: 'She works from home.', note: 'he/she/it → **-s**.' },
            { wrong: "He doesn't works on Fridays.", right: "He doesn't work on Fridays.", note: 'После does глагол без -s: окончание уже «ушло» в does.' },
            { wrong: 'You use Docker?', right: 'Do you use Docker?', note: 'Вопрос строится через do/does.' },
            { wrong: 'Where you work?', right: 'Where do you work?' },
          ],
        },
        {
          kind: 'theory',
          title: 'Правописание -s',
          body:
            'Обычно просто **-s**: *runs, needs, deploys*.\n' +
            'После **-s, -sh, -ch, -x, -o** пишем **-es**: *pushes, fixes, watches, does, goes*.\n' +
            'Согласная + **y** → **-ies**: *try → tries, copy → copies*. Но после гласной + y пишем просто -s: *deploys, plays*.\n' +
            'Неправильный глагол: **have → has**.',
        },
        { kind: 'choice', prompt: 'Lena ___ every feature before the release.', options: ['test', 'tests', 'testes', 'is test'], answer: 1 },
        { kind: 'choice', prompt: 'We ___ on Fridays.', options: ["doesn't deploy", "don't deploy", 'not deploy', "don't deploys"], answer: 1 },
        { kind: 'choice', prompt: '___ Maya plan the sprint?', options: ['Do', 'Is', 'Does', 'Are'], answer: 2 },
        { kind: 'choice', prompt: 'The CI ___ the tests on every commit.', options: ['run', 'runs', 'running', 'is run'], answer: 1 },
        { kind: 'choice', prompt: 'Ken ___ weekend incidents.', options: ["don't like", "doesn't likes", "doesn't like", 'not likes'], answer: 2 },
        { kind: 'choice', prompt: 'Arjun ___ bugs very fast.', options: ['fixs', 'fixes', 'fixies', 'fix'], answer: 1 },
        { kind: 'gap', text: 'Tom usually ___ (listen) at the standup.', answers: ['listens'] },
        { kind: 'gap', text: 'Our app ___ (have) two million users.', answers: ['has'] },
        { kind: 'gap', text: 'Ken ___ (push) the release tag on Thursday.', answers: ['pushes'] },
        { kind: 'gap', text: 'The script ___ (copy) the files to the server.', answers: ['copies'] },
        { kind: 'gap', text: 'Our bot ___ (deploy) the frontend automatically.', answers: ['deploys'] },
        { kind: 'gap', text: 'I ___ (not / use) Windows at work.', answers: ["don't use", 'do not use'] },
        { kind: 'gap', text: 'Sofia ___ (not / write) code. She is a designer.', answers: ["doesn't write", 'does not write'] },
        { kind: 'gap', text: '___ you work on weekends?', answers: ['Do'] },
        { kind: 'gap', text: 'What time ___ the standup start?', answers: ['does'] },
        {
          kind: 'transform',
          instruction: 'Сделай отрицание',
          source: 'Lena works on the backend.',
          answers: ["Lena doesn't work on the backend.", 'Lena does not work on the backend.'],
        },
        { kind: 'transform', instruction: 'Сделай вопрос (Yes/No)', source: 'The app supports dark mode.', answers: ['Does the app support dark mode?'] },
        { kind: 'transform', instruction: 'Сделай вопрос (Yes/No)', source: 'You use TypeScript.', answers: ['Do you use TypeScript?'] },
        { kind: 'transform', instruction: 'Поставь he вместо I', source: 'I fix bugs and write tests.', answers: ['He fixes bugs and writes tests.'] },
        { kind: 'transform', instruction: 'Задай вопрос к выделенному, начни с How often', source: 'We release **every two weeks**.', answers: ['How often do you release?'] },
        { kind: 'fix', sentence: 'She work from home on Fridays.', answers: ['She works from home on Fridays.'] },
        { kind: 'fix', sentence: "Arjun doesn't writes frontend code.", answers: ["Arjun doesn't write frontend code.", 'Arjun does not write frontend code.'] },
        { kind: 'fix', sentence: 'You use Jira?', answers: ['Do you use Jira?'] },
        { kind: 'fix', sentence: 'The build take ten minutes.', answers: ['The build takes ten minutes.'] },
        { kind: 'fix', sentence: 'Where you keep the API keys?', answers: ['Where do you keep the API keys?'] },
        { kind: 'fix', sentence: 'Does Tom speaks at the standup?', answers: ['Does Tom speak at the standup?'] },
        { kind: 'order', words: ['How', 'often', 'do', 'you', 'release', '?'], ru: 'Как часто вы релизитесь?' },
        { kind: 'order', words: ['Every', 'pull', 'request', 'needs', 'two', 'approvals', '.'], ru: 'Каждому PR нужно два апрува.' },
        { kind: 'order', words: ['We', "don't", 'deploy', 'on', 'Fridays', '.'], ru: 'Мы не деплоим по пятницам.' },
        { kind: 'order', words: ['Does', 'the', 'CI', 'run', 'the', 'tests', '?'], ru: 'CI запускает тесты?' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: team process',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'standup', ru: 'ежедневная короткая встреча', example: 'We have a standup at ten.' },
            { chunk: 'sprint', ru: 'спринт (итерация)', example: 'We work in two-week sprints.' },
            { chunk: 'pull request', ru: 'запрос на слияние (PR)', example: 'Please review my pull request.' },
            { chunk: 'approvals', ru: 'одобрения ревьюеров', example: 'Every PR needs two approvals.' },
            { chunk: 'release', ru: 'релиз; выпускать', example: 'We release on Thursdays.' },
            { chunk: 'deploy', ru: 'развернуть на сервере', example: 'We never deploy on Fridays.' },
            { chunk: 'business logic', ru: 'бизнес-логика', example: 'We always test the business logic.' },
            { chunk: 'on every commit', ru: 'на каждый коммит', example: 'The CI runs the tests on every commit.' },
            { chunk: 'takes fifteen minutes', ru: 'занимает 15 минут', example: 'The standup takes fifteen minutes.' },
            { chunk: 'that makes sense', ru: 'логично, понятно', example: 'Oh, that makes sense. Thanks!' },
            { chunk: 'how often', ru: 'как часто', example: 'How often do you release?' },
            { chunk: 'weekend incidents', ru: 'аварии в выходные', example: 'Nobody likes weekend incidents.' },
          ],
        },
        {
          kind: 'match',
          prompt: 'Сопоставь термин и значение',
          pairs: [
            ['standup', 'короткая ежедневная встреча'],
            ['sprint', 'итерация в 1–2 недели'],
            ['approval', 'одобрение ревьюера'],
            ['deploy', 'выкатить на сервер'],
            ['incident', 'авария в проде'],
          ],
        },
        { kind: 'gap', text: 'Please review my pull ___ when you have a minute.', answers: ['request'] },
        { kind: 'gap', text: 'The release ___ two approvals.', answers: ['needs'] },
        { kind: 'gap', text: 'How ___ do you have retros?', answers: ['often'] },
        { kind: 'gap', text: 'The build ___ about ten minutes.', answers: ['takes'] },
        { kind: 'gap', text: 'Oh, I see. That ___ sense.', answers: ['makes'] },
        { kind: 'gap', text: 'The CI runs the linter on every ___ .', answers: ['commit'] },
        { kind: 'choice', prompt: '«Выкатить на прод» по-английски:', options: ['deploy to production', 'put in prod', 'roll on production', 'send to prod server'], answer: 0 },
        { kind: 'choice', prompt: 'Какое слово НЕ относится к процессу Scrum?', options: ['sprint', 'standup', 'retro', 'laptop'], answer: 3 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'We have a standup at ten every morning.' },
        { kind: 'dictation', text: "Tom doesn't speak much." },
        { kind: 'dictation', text: 'Every pull request needs two approvals.' },
        { kind: 'dictation', text: 'We never deploy on Fridays.' },
        { kind: 'dictation', text: 'How often do you release?' },
        { kind: 'dictation', text: 'The CI runs the tests on every commit.' },
        {
          kind: 'theory',
          title: 'Произношение окончания -s',
          body:
            'Окончание -s звучит по-разному:\n' +
            '**/s/** после глухих звуков: *works, tests, takes*.\n' +
            '**/z/** после звонких и гласных: *runs, needs, deploys*.\n' +
            '**/ɪz/** после шипящих: *pushes, fixes, watches*. Это дополнительный слог, произноси его обязательно!',
        },
        { kind: 'dictation', text: 'Arjun fixes bugs and Lena tests them.' },
        { kind: 'dictation', text: 'Does the app support dark mode?' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: describe your process',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'We have a standup at ten every morning.' },
        { kind: 'shadow', text: 'Every pull request needs two approvals.' },
        { kind: 'shadow', text: 'Ken pushes the release, and Lena tests it.' },
        { kind: 'shadow', text: 'How often do you release?' },
        {
          kind: 'speak',
          situation: 'Друг спрашивает, как устроена твоя работа. Расскажи, когда у вас стендап, сколько длится спринт и как часто вы релизитесь.',
          keywords: ['standup', 'sprints', 'release'],
          sample: 'We have a standup every morning at ten. We work in two-week sprints, and we release every Thursday.',
        },
        {
          kind: 'speak',
          situation: 'Задай Arjun три вопроса о процессе: используют ли они TypeScript, кто делает ревью кода, как часто они деплоят.',
          keywords: ['do you use', 'who reviews', 'how often do you deploy'],
          sample: 'Do you use TypeScript? Who reviews the code? And how often do you deploy?',
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: onboarding notes',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши заметку в свой onboarding-документ «How the team works»: 5–6 предложений о процессе команды (стендап, спринты, ревью, релизы, тесты). Хотя бы дважды напиши про he/she.',
          checklist: [
            'У глаголов с he/she/it есть -s (Lena **tests**, the CI **runs**)',
            'Есть хотя бы одно отрицание с **don’t / doesn’t**',
            'Есть слова частоты: every, usually, always, never',
            'После **doesn’t** глагол без -s',
          ],
          minWords: 40,
          sample:
            "How the team works\nWe have a standup every day at 10:00. It usually takes fifteen minutes. We work in two-week sprints, and Maya plans each sprint with Tom on Monday. Every pull request needs two approvals. Lena tests every feature before the release. We release on Thursdays and we never deploy on Fridays. The CI runs the tests on every commit, so we don't merge red builds.",
        },
      ],
    },
  ],
};

export default lesson;
