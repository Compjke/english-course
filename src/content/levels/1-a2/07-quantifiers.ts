import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'a2-07',
  level: 'A2',
  title: 'Day 7: How much time do we have?',
  grammar: 'Исчисляемые / неисчисляемые, much / many / some / any',
  scene: 'Планирование спринта: Tom хочет много фич, а времени мало.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: sprint planning',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Sprint planning',
          format: 'call',
          lines: [
            { who: 'Tom', text: 'We have a lot of requests from customers this sprint. Can we take the map, the PDF export and some UI fixes?' },
            { who: 'Maya', text: "That's too much work. How many developers do we have this sprint?" },
            { who: 'Arjun', text: "Three. But I'm on holiday for a few days, so we don't have much time." },
            { who: 'Tom', text: 'How much time does the map need?' },
            { who: 'Arjun', text: 'A lot. There are many unknowns, and we have little information about the GPS data.' },
            { who: 'You', text: 'I can take some UI fixes. Are there any designs for them?' },
            { who: 'Sofia', text: "Yes, there are some designs in Figma. There isn't any new research, but the changes are small." },
            { who: 'Maya', text: 'OK. Let’s take the map and a few UI fixes. The PDF export waits for the next sprint.' },
            { who: 'Tom', text: 'Fine. But we get a lot of feedback about the export, so it’s the first item next time.' },
            { who: 'Maya', text: 'Deal. Any other questions? No? Great, thanks, everyone.' },
          ],
        },
        { kind: 'choice', prompt: 'What does Tom want this sprint?', options: ['Only the map', 'The map, the PDF export and UI fixes', 'Only UI fixes', 'Nothing new'], answer: 1 },
        { kind: 'choice', prompt: 'Why doesn’t the team have much time?', options: ['Arjun is on holiday for a few days.', 'Maya is sick.', 'The CI is broken.', 'There are no designs.'], answer: 0 },
        { kind: 'choice', prompt: 'What is the problem with the map?', options: ['No designs', 'Many unknowns and little information about GPS data', 'No customers want it', 'It is finished'], answer: 1 },
        { kind: 'choice', prompt: 'What waits for the next sprint?', options: ['The map', 'The UI fixes', 'The PDF export', 'The research'], answer: 2 },
        {
          kind: 'choice',
          prompt: 'Почему «How **much** time», но «How **many** developers»?',
          options: ['time неисчисляемое, developers исчисляемые', 'Это одно и то же', 'much для вопросов, many для утверждений', 'many только для людей'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: countable & uncountable',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Исчисляемые и неисчисляемые',
          body:
            '**Исчисляемые** (countable) можно посчитать: *a bug, two bugs, a server, three servers*. У них есть множественное число.\n\n' +
            '**Неисчисляемые** (uncountable) нельзя посчитать штуками: *time, information, feedback, data, software, code, advice, work, money, research*. У них **нет a/an** и **нет -s**: *some information*, а не *an information / informations*.\n\n' +
            'Ловушка для русскоязычных: *information, advice, feedback, research, software, equipment* в русском бывают во множественном числе («информации», «советы»), а в английском они неисчисляемые! Чтобы посчитать, используют «штуки»: *a piece of advice, a piece of feedback*.',
          pitfalls: [
            { wrong: 'informations', right: 'information', note: 'Без -s.' },
            { wrong: 'an advice', right: 'some advice / a piece of advice' },
            { wrong: 'a lot of feedbacks', right: 'a lot of feedback' },
            { wrong: 'many software', right: 'a lot of software' },
          ],
        },
        {
          kind: 'theory',
          title: 'much / many / a lot of / some / any / a few / a little',
          table: [
            ['', 'Исчисляемые (bugs)', 'Неисчисляемые (time)'],
            ['много', '**many** bugs', '**much** time'],
            ['много (в утверждениях)', '**a lot of** bugs', '**a lot of** time'],
            ['немного, несколько', '**a few** bugs', '**a little** time'],
            ['мало (недостаточно)', '**few** bugs', '**little** time'],
            ['сколько?', '**How many** bugs?', '**How much** time?'],
          ],
          body:
            '**much / many** чаще используют в вопросах и отрицаниях: *We don’t have much time. How many tickets?* В утверждениях естественнее **a lot of**: *We have a lot of bugs.*\n\n' +
            '**some** ставят в утверждениях и в просьбах или предложениях: *I have some questions. Can I have some coffee?*\n**any** ставят в вопросах и отрицаниях: *Are there any designs? There isn’t any research.*\n\n' +
            'Обрати внимание: **a few / a little** значит «немного, но есть» (позитивно), а **few / little** значит «мало, почти нет» (негативно).',
        },
        { kind: 'choice', prompt: 'How ___ time does the map need?', options: ['many', 'much', 'a few', 'lot'], answer: 1 },
        { kind: 'choice', prompt: 'How ___ developers do we have?', options: ['much', 'many', 'a little', 'lot of'], answer: 1 },
        { kind: 'choice', prompt: 'We get a lot of ___ about the export.', options: ['feedbacks', 'feedback', 'a feedback', 'feedbackes'], answer: 1 },
        { kind: 'choice', prompt: 'Are there ___ designs for the UI fixes?', options: ['some', 'any', 'much', 'a little'], answer: 1 },
        { kind: 'choice', prompt: 'I have ___ questions about the API.', options: ['any', 'much', 'some', 'a little'], answer: 2 },
        { kind: 'choice', prompt: 'Can you give me ___ advice?', options: ['an', 'some', 'many', 'a few'], answer: 1 },
        { kind: 'choice', prompt: "I'm on holiday for ___ days.", options: ['a few', 'a little', 'much', 'any'], answer: 0 },
        { kind: 'choice', prompt: 'We have ___ information about the GPS data, so it’s risky.', options: ['few', 'little', 'many', 'a few'], answer: 1 },
        { kind: 'gap', text: "We don't have ___ time before the release.", answers: ['much'] },
        { kind: 'gap', text: 'How ___ tickets are in the sprint?', answers: ['many'] },
        { kind: 'gap', text: 'There is ___ new research for this feature. Nothing at all.', answers: ['no'], hint: 'одно слово: «нет никакого» (= not any)', explain: '*There is no research* = *There isn’t any research*.' },
        { kind: 'gap', text: 'Do you have ___ questions? (вопрос)', answers: ['any'] },
        { kind: 'gap', text: 'I need a ___ help with Docker, just five minutes.', answers: ['little'] },
        { kind: 'gap', text: 'We fixed a ___ bugs yesterday, three or four.', answers: ['few'] },
        { kind: 'gap', text: 'The app has a ___ of users in Poland.', answers: ['lot'] },
        { kind: 'transform', instruction: 'Сделай отрицание (используй any)', source: 'There are some bugs in this release.', answers: ["There aren't any bugs in this release.", 'There are not any bugs in this release.'] },
        { kind: 'transform', instruction: 'Задай вопрос How much / How many', source: 'We need **two** servers.', answers: ['How many servers do we need?'] },
        { kind: 'transform', instruction: 'Задай вопрос How much / How many', source: 'The task needs **a lot of** time.', answers: ['How much time does the task need?'] },
        { kind: 'fix', sentence: 'Thanks for the informations.', answers: ['Thanks for the information.'] },
        { kind: 'fix', sentence: 'Can I give you an advice?', answers: ['Can I give you some advice?', 'Can I give you a piece of advice?'] },
        { kind: 'fix', sentence: 'How much bugs do we have?', answers: ['How many bugs do we have?'] },
        { kind: 'fix', sentence: "We don't have some time.", answers: ["We don't have any time.", 'We do not have any time.'] },
        { kind: 'fix', sentence: 'We got many feedbacks from users.', answers: ['We got a lot of feedback from users.', 'We got much feedback from users.'] },
        { kind: 'order', words: ['How', 'much', 'time', 'do', 'we', 'have', '?'], ru: 'Сколько у нас времени?' },
        { kind: 'order', words: ['Are', 'there', 'any', 'designs', 'for', 'this', '?'], ru: 'Есть ли дизайны для этого?' },
        { kind: 'order', words: ['I', 'have', 'a', 'few', 'questions', '.'], ru: 'У меня есть несколько вопросов.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: planning',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'sprint planning', ru: 'планирование спринта', example: 'Sprint planning is on Monday.' },
            { chunk: 'too much work', ru: 'слишком много работы', example: "That's too much work for one sprint." },
            { chunk: 'on holiday', ru: 'в отпуске', example: "Arjun is on holiday next week." },
            { chunk: 'unknowns', ru: 'неизвестные моменты', example: 'There are many unknowns in this task.' },
            { chunk: 'feedback', ru: 'отзывы, обратная связь', example: 'We get a lot of feedback about the export.' },
            { chunk: 'requests', ru: 'запросы, просьбы', example: 'Customers send a lot of requests.' },
            { chunk: 'UI fixes', ru: 'исправления интерфейса', example: 'I can take some UI fixes.' },
            { chunk: 'next sprint', ru: 'следующий спринт', example: 'The export waits for the next sprint.' },
            { chunk: 'deal', ru: 'договорились', example: 'Deal. Let’s do it.' },
            { chunk: 'a piece of advice', ru: 'один совет', example: 'Let me give you a piece of advice.' },
            { chunk: 'research', ru: 'исследование', example: "There isn't any new research." },
            { chunk: 'first item', ru: 'первый пункт', example: "It's the first item next time." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['feedback', 'обратная связь'],
            ['unknowns', 'неизвестные моменты'],
            ['on holiday', 'в отпуске'],
            ['deal', 'договорились'],
            ['research', 'исследование'],
          ],
        },
        { kind: 'gap', text: "Ken is on ___ until Monday.", answers: ['holiday'] },
        { kind: 'gap', text: "That's too ___ work for two days.", answers: ['much'] },
        { kind: 'gap', text: 'The PDF export is the first ___ on the list.', answers: ['item'] },
        { kind: 'gap', text: '— Let’s split the task. — ___ !', answers: ['Deal'] },
        { kind: 'gap', text: 'Let me give you a piece of ___ : always write tests.', answers: ['advice'] },
        { kind: 'choice', prompt: 'Какое слово неисчисляемое?', options: ['bug', 'server', 'software', 'ticket'], answer: 2 },
        { kind: 'choice', prompt: 'Какое слово исчисляемое?', options: ['information', 'feedback', 'request', 'advice'], answer: 2 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "That's too much work." },
        { kind: 'dictation', text: 'How many developers do we have?' },
        { kind: 'dictation', text: "We don't have much time." },
        { kind: 'dictation', text: 'Are there any designs for them?' },
        { kind: 'dictation', text: 'We get a lot of feedback about the export.' },
        { kind: 'dictation', text: 'I can take a few UI fixes.' },
        {
          kind: 'theory',
          title: 'Связная речь: a lot of',
          body: 'В быстрой речи *a lot of* звучит как одно слово [əˈlɒtəv] или даже «элоре». *Lots of* тоже часто встречается. Слушай внимательно, в диктанте пиши полностью: **a lot of**.',
        },
        { kind: 'dictation', text: 'There are a lot of unknowns.' },
        { kind: 'dictation', text: 'Can you give me some advice?' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: discuss capacity',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "That's too much work for one sprint." },
        { kind: 'shadow', text: 'How much time does the map need?' },
        { kind: 'shadow', text: 'There are many unknowns, and we have little information.' },
        { kind: 'shadow', text: "Deal. Let's take a few UI fixes." },
        {
          kind: 'speak',
          situation: 'Tom хочет добавить ещё две фичи в спринт. Объясни, что работы слишком много, а времени мало.',
          keywords: ['too much work', "don't have much time"],
          sample: "Sorry Tom, that's too much work. We don't have much time this sprint, because Arjun is on holiday.",
        },
        {
          kind: 'speak',
          situation: 'Спроси у Sofia, есть ли дизайны, сколько экранов и нужна ли ещё какая-то информация.',
          keywords: ['are there any', 'how many', 'information'],
          sample: 'Are there any designs for the new page? How many screens are there? Do you need any information from me?',
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: planning summary',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши краткое резюме планирования для Slack: что команда берёт в спринт, что переносится и почему (мало времени, много неизвестных).',
          checklist: [
            'Есть *much / many / a lot of*',
            'Есть *some* в утверждении и *any* в отрицании или вопросе',
            'Неисчисляемые без -s (*feedback, information*)',
            'Есть причина: *because…*',
          ],
          minWords: 35,
          sample:
            "Sprint planning summary: this sprint we take the delivery map and a few UI fixes. The PDF export moves to the next sprint, because we don't have much time: Arjun is on holiday for a few days. The map has a lot of unknowns, and we need more information about the GPS data. We get a lot of feedback about the export, so it is the first item next time.",
        },
      ],
    },
  ],
};

export default lesson;
