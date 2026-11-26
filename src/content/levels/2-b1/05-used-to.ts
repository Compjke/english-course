import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-05',
  level: 'B1',
  title: 'Day 20: How things used to be',
  grammar: 'used to / would / be used to',
  scene: 'Обед с командой: Arjun и Ken вспоминают, как всё было в компании раньше.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: team lunch',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Team lunch (video call)',
          format: 'call',
          lines: [
            { who: 'You', text: 'Arjun, you’ve been here for five years. Was Brightloop very different then?' },
            { who: 'Arjun', text: 'Totally. We used to deploy once a month, on Saturday nights. Everybody hated it.' },
            { who: 'Ken', text: "I remember. We would stay in the office until 3 am and eat cold pizza. There didn't use to be any CI at all." },
            { who: 'You', text: 'No CI? How did you test things?' },
            { who: 'Arjun', text: 'By hand. Lena’s predecessor used to click through the whole app before every release. It took two days.' },
            { who: 'Lena', text: "And now I'm used to automated tests. I can't imagine going back." },
            { who: 'You', text: "I'm still getting used to your code review culture. At my last job nobody used to comment on PRs." },
            { who: 'Maya', text: "Did you use to work remotely there?" },
            { who: 'You', text: "No, I didn't. I used to commute for an hour every day. Now I'm used to working from home." },
            { who: 'Ken', text: 'Same here. I would never go back to the office five days a week.' },
          ],
        },
        { kind: 'choice', prompt: 'How often did they use to deploy?', options: ['Every day', 'Once a month', 'Twice a week', 'Never'], answer: 1 },
        { kind: 'choice', prompt: 'What would they eat during night deploys?', options: ['Sushi', 'Cold pizza', 'Nothing', 'Salad'], answer: 1 },
        { kind: 'choice', prompt: 'How did they use to test?', options: ['With CI', 'By hand', 'They didn’t', 'With AI'], answer: 1 },
        { kind: 'choice', prompt: 'What are you still getting used to?', options: ['Remote work', 'The code review culture', 'Cold pizza', 'Night deploys'], answer: 1 },
        { kind: 'choice', prompt: 'What did you use to do every day at your last job?', options: ['Work from home', 'Commute for an hour', 'Deploy', 'Review PRs'], answer: 1 },
        {
          kind: 'choice',
          prompt: '«I **used to** commute» vs «I’m **used to** working from home». Разница?',
          options: ['Первое — раньше так было (сейчас нет); второе — я привык', 'Одно и то же', 'Первое — привык, второе — раньше было', 'Второе — ошибка'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: past habits',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'used to: раньше было, теперь нет',
          body:
            '**used to + глагол** описывает привычки и состояния в прошлом, **которых больше нет**: *We used to deploy once a month* (сейчас иначе). По-русски это «раньше…», «бывало…».\n\n' +
            'Отрицание и вопрос строятся через **did**, и тогда пишется **use to** (без d): *There didn’t use to be any CI. Did you use to work remotely?*\n\n' +
            'Для настоящего времени этой конструкции нет. «Обычно» в настоящем — это Present Simple + *usually*.',
          examples: ['We used to deploy on Saturday nights.', "There didn't use to be any CI.", 'Did you use to work in an office?'],
        },
        {
          kind: 'theory',
          title: 'would: повторявшиеся действия в рассказе',
          body:
            '**would + глагол** тоже описывает **повторяющиеся действия** в прошлом, обычно в рассказе-воспоминании: *We would stay until 3 am and eat cold pizza.*\n\n' +
            'Но **would не используют для состояний** (*be, have* в значении «иметь», *know, like, live*): *I used to have a desktop PC*, а не *I would have a desktop PC*.\n\n' +
            'Обычно рассказ начинают с *used to*, а продолжают с *would*.',
        },
        {
          kind: 'theory',
          title: 'be used to / get used to: привыкнуть',
          body:
            '**be used to + существительное / V-ing** значит «привык (уже)»: *I’m used to automated tests. I’m used to working from home.*\n' +
            '**get used to + существительное / V-ing** значит «привыкать» (процесс): *I’m getting used to the code review culture.*\n\n' +
            'После *be / get used to* стоит **-ing**, а не начальная форма: *I’m used to work**ing***, а не *I’m used to work*.',
          table: [
            ['Конструкция', 'Значение', 'Пример'],
            ['used to + V', 'раньше было', 'I **used to commute**.'],
            ['would + V', 'бывало (повтор)', 'We **would stay** late.'],
            ['be used to + V-ing', 'привык', "I'**m used to working** remotely."],
            ['get used to + V-ing', 'привыкаю, привыкну', "I'**m getting used to** it."],
          ],
          pitfalls: [
            { wrong: 'I use to work in an office.', right: 'I used to work in an office.' },
            { wrong: 'Did you used to work there?', right: 'Did you use to work there?' },
            { wrong: "I'm used to work remotely.", right: "I'm used to working remotely." },
            { wrong: 'I would have a beard.', right: 'I used to have a beard.', note: 'Состояние: только used to.' },
            { wrong: 'I used to drink coffee every morning. (и сейчас пью)', right: 'I usually drink coffee every morning.' },
          ],
        },
        { kind: 'choice', prompt: 'We ___ deploy once a month. Now we deploy daily.', options: ['use to', 'used to', 'are used to', 'would to'], answer: 1 },
        { kind: 'choice', prompt: '___ you use to work remotely?', options: ['Do', 'Did', 'Were', 'Are'], answer: 1 },
        { kind: 'choice', prompt: "There ___ be any CI at all.", options: ["didn't used to", "didn't use to", "wasn't used to", "used not"], answer: 1 },
        { kind: 'choice', prompt: "I'm used to ___ from home.", options: ['work', 'working', 'worked', 'works'], answer: 1 },
        { kind: 'choice', prompt: "I ___ getting used to the new IDE. It's hard.", options: ['used', 'am', 'was used', 'use'], answer: 1 },
        { kind: 'choice', prompt: 'Every Saturday we ___ stay in the office until 3 am.', options: ['would', 'were used to', 'use to', 'are used'], answer: 0 },
        { kind: 'choice', prompt: 'I ___ a desktop PC at my old job. (состояние)', options: ['would have', 'used to have', 'was used to have', 'use to have'], answer: 1 },
        { kind: 'choice', prompt: "Lena can't imagine testing by hand now. She ___ automated tests.", options: ['used to', 'is used to', 'uses to', 'would'], answer: 1 },
        { kind: 'gap', text: 'I ___ to commute for an hour every day.', answers: ['used'] },
        { kind: 'gap', text: "Did you ___ to write tests at your last job?", answers: ['use'] },
        { kind: 'gap', text: "I'm not used to ___ (speak) English in meetings yet.", answers: ['speaking'] },
        { kind: 'gap', text: "It took me a month to get ___ to the new process.", answers: ['used'] },
        { kind: 'gap', text: 'Back then, Ken ___ fix servers at night and sleep all morning.', answers: ['would', 'used to'] },
        { kind: 'gap', text: "We didn't ___ to have code reviews.", answers: ['use'] },
        { kind: 'gap', text: "Are you used ___ the time difference with Toronto?", answers: ['to'] },
        { kind: 'transform', instruction: 'Перепиши с used to', source: 'In the past we deployed on Saturdays. We don’t do it now.', answers: ['We used to deploy on Saturdays.'] },
        { kind: 'transform', instruction: 'Сделай вопрос', source: 'You used to work in an office.', answers: ['Did you use to work in an office?'] },
        { kind: 'transform', instruction: 'Сделай отрицание', source: 'We used to have a QA team.', answers: ["We didn't use to have a QA team.", 'We did not use to have a QA team.'] },
        { kind: 'transform', instruction: 'Перепиши с be used to', source: 'Working remotely is normal for me now.', answers: ["I'm used to working remotely.", 'I am used to working remotely.'] },
        { kind: 'fix', sentence: 'I use to play guitar when I was a student.', answers: ['I used to play guitar when I was a student.'] },
        { kind: 'fix', sentence: 'Did they used to test by hand?', answers: ['Did they use to test by hand?'] },
        { kind: 'fix', sentence: "I'm used to work at night.", answers: ["I'm used to working at night.", 'I am used to working at night.'] },
        { kind: 'fix', sentence: 'I would live in Minsk.', answers: ['I used to live in Minsk.'] },
        { kind: 'fix', sentence: "I'm getting use to the new laptop.", answers: ["I'm getting used to the new laptop.", 'I am getting used to the new laptop.'] },
        { kind: 'order', words: ['We', 'used', 'to', 'deploy', 'once', 'a', 'month', '.'], ru: 'Раньше мы деплоили раз в месяц.' },
        { kind: 'order', words: ["I'm", 'used', 'to', 'working', 'from', 'home', '.'], ru: 'Я привык работать из дома.' },
        { kind: 'order', words: ['Did', 'you', 'use', 'to', 'work', 'remotely', '?'], ru: 'Ты раньше работал удалённо?' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: work culture',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'totally', ru: 'совершенно, полностью', example: 'It was totally different.' },
            { chunk: 'commute', ru: 'дорога на работу', example: 'I used to commute for an hour.' },
            { chunk: 'work remotely', ru: 'работать удалённо', example: 'Do you work remotely?' },
            { chunk: 'predecessor', ru: 'предшественник', example: "Lena's predecessor tested by hand." },
            { chunk: 'click through', ru: 'прокликать', example: 'He used to click through the whole app.' },
            { chunk: 'automated tests', ru: 'автотесты', example: "I'm used to automated tests." },
            { chunk: "can't imagine", ru: 'не могу представить', example: "I can't imagine going back." },
            { chunk: 'code review culture', ru: 'культура код-ревью', example: 'I like our code review culture.' },
            { chunk: 'same here', ru: 'у меня так же', example: 'Same here, I love it.' },
            { chunk: 'back then', ru: 'тогда, в те времена', example: 'Back then, there was no CI.' },
            { chunk: 'hybrid', ru: 'гибридный (офис + удалёнка)', example: 'Our office is hybrid now.' },
            { chunk: 'go back', ru: 'вернуться', example: 'I would never go back to the office.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['commute', 'дорога на работу'],
            ['predecessor', 'предшественник'],
            ['back then', 'в те времена'],
            ['same here', 'у меня так же'],
            ['hybrid', 'гибридный формат'],
          ],
        },
        { kind: 'gap', text: 'Back ___ , we had only one server.', answers: ['then'] },
        { kind: 'gap', text: '— I love remote work. — Same ___ !', answers: ['here'] },
        { kind: 'gap', text: 'My ___ takes 40 minutes by tram.', answers: ['commute'] },
        { kind: 'gap', text: "I can't ___ working without Git.", answers: ['imagine'] },
        { kind: 'gap', text: 'He used to click ___ the whole app before every release.', answers: ['through'] },
        { kind: 'choice', prompt: '«Я работаю удалённо»:', options: ['I work remotely.', 'I work distantly.', 'I work far.', 'I work on remote.'], answer: 0 },
        { kind: 'choice', prompt: 'Формат «2 дня в офисе, 3 дома»:', options: ['hybrid', 'mixed office', 'half remote', 'part office'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'We used to deploy once a month.' },
        { kind: 'dictation', text: "There didn't use to be any CI at all." },
        { kind: 'dictation', text: 'We would stay in the office until 3 am.' },
        { kind: 'dictation', text: "I'm used to automated tests." },
        { kind: 'dictation', text: "I'm still getting used to it." },
        { kind: 'dictation', text: 'Did you use to work remotely?' },
        {
          kind: 'theory',
          title: 'used to звучит как «юста»',
          body: '*used to* произносится [ˈjuːstə], с глухим **s**, а не «юзд ту». *use to* в вопросе звучит точно так же. Отличить их на слух нельзя, поэтому пиши по грамматике: после *did* идёт **use to**.',
        },
        { kind: 'dictation', text: 'Back then, Ken would fix servers at night.' },
        { kind: 'dictation', text: 'Same here. I would never go back.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: then and now',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'We used to deploy once a month, on Saturday nights.' },
        { kind: 'shadow', text: 'We would stay in the office until 3 am.' },
        { kind: 'shadow', text: "I'm used to working from home now." },
        { kind: 'shadow', text: "I'm still getting used to the code review culture." },
        {
          kind: 'speak',
          situation: 'Сравни свою работу раньше и сейчас: что ты раньше делал(а) иначе (used to), и к чему ты привык(ла) теперь (be used to).',
          keywords: ['used to', "I'm used to"],
          sample: "I used to work in an office and commute every day. Now I'm used to working remotely, and I'm used to long video calls.",
        },
        {
          kind: 'speak',
          situation: 'Расскажи, как раньше в IT всё было устроено (по твоему опыту или как ты думаешь): деплой, тестирование, инструменты.',
          keywords: ['used to', 'would', "didn't use to"],
          sample: "Developers used to upload files by FTP. They would test everything by hand, and there didn't use to be any CI.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: then vs now',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши пост для внутреннего блога «How our team has changed»: как было раньше (used to / would) и как сейчас, к чему все привыкли (be used to).',
          checklist: [
            '*used to* для прошлых привычек и состояний',
            '*would* для повторяющихся действий в рассказе',
            '*be used to / get used to + -ing*',
            'Есть сравнение с настоящим (Present Simple)',
          ],
          minWords: 50,
          sample:
            "How our team has changed\nFive years ago Brightloop used to deploy once a month. The team would stay in the office until 3 am on Saturday and eat cold pizza. There didn't use to be any CI, and QA would click through the whole app by hand. Today we deploy every week, and we're used to automated tests and code reviews. New people sometimes need a month to get used to our review culture, but nobody wants to go back.",
        },
      ],
    },
  ],
};

export default lesson;
