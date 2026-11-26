import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'a2-04',
  level: 'A2',
  title: 'Day 4: Asking the right questions',
  grammar: 'Вопросы: Wh-, вопросы к подлежащему',
  scene: 'Ты на встрече по требованиям с Tom и задаёшь вопросы о новой фиче.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the requirements call',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Requirements call with Tom',
          format: 'call',
          lines: [
            { who: 'Tom', text: 'So, the new feature is a delivery map. Customers see their parcel on a map in real time.' },
            { who: 'You', text: 'Sounds cool. Who uses this map? Only customers, or drivers too?' },
            { who: 'Tom', text: 'Only customers. Drivers have a separate mobile app.' },
            { who: 'You', text: 'How often does the position update?' },
            { who: 'Tom', text: 'Every thirty seconds. The backend sends the coordinates.' },
            { who: 'You', text: 'Which map library do we use? Google Maps or something open source?' },
            { who: 'Tom', text: "Good question. I don't know. Arjun decides on that." },
            { who: 'You', text: 'And what happens when the connection is lost?' },
            { who: 'Tom', text: 'The map shows the last known position and a small warning.' },
            { who: 'You', text: 'OK. When is the deadline, and who tests the feature?' },
            { who: 'Tom', text: 'The end of the sprint. Lena tests it, as always. Any other questions?' },
            { who: 'You', text: 'Just one: where can I find the designs?' },
            { who: 'Tom', text: 'In Figma. Sofia sends you the link today.' },
          ],
        },
        { kind: 'choice', prompt: 'Who uses the delivery map?', options: ['Drivers', 'Only customers', 'Customers and drivers', 'Only the team'], answer: 1 },
        { kind: 'choice', prompt: 'How often does the position update?', options: ['Every second', 'Every thirty seconds', 'Every minute', 'Once a day'], answer: 1 },
        { kind: 'choice', prompt: 'Who decides on the map library?', options: ['Tom', 'Sofia', 'Arjun', 'Lena'], answer: 2 },
        { kind: 'choice', prompt: 'What does the map show when the connection is lost?', options: ['An empty screen', 'The last known position and a warning', 'An error page', 'The driver’s phone number'], answer: 1 },
        { kind: 'choice', prompt: 'Where are the designs?', options: ['In Jira', 'In Figma', 'On Confluence', 'In the repo'], answer: 1 },
        {
          kind: 'choice',
          prompt: 'Почему в вопросе «Who **uses** this map?» нет do/does?',
          options: ['Who — это подлежащее (кто делает действие)', 'Это ошибка', 'Это прошедшее время', 'После who никогда не бывает does'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: questions',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Порядок слов в вопросе: QUASI',
          body:
            'Формула обычного вопроса: **Question word + Auxiliary + Subject + Infinitive + …** (QUASI).\n\n' +
            '*Where* **do** *you* *keep* the keys? / *How often* **does** *the position* *update*? / *What* **are** *you* *doing*?\n\n' +
            'Вспомогательный глагол (auxiliary) зависит от времени: **do/does** для Present Simple, **am/is/are** для Continuous и be.\n\n' +
            'Вопросительные слова: *what* (что), *which* (который, из вариантов), *who* (кто), *whose* (чей), *where* (где), *when* (когда), *why* (почему), *how* (как), *how often* (как часто), *how long* (как долго), *how many / how much* (сколько).',
          examples: ['Where do you keep the API keys?', 'Which library does Arjun prefer?', 'How long does the build take?', 'Why is the page slow?'],
        },
        {
          kind: 'theory',
          title: 'Вопрос к подлежащему: без do/does',
          body:
            'Когда **who / what** спрашивает о том, **кто или что делает действие** (о подлежащем), вспомогательный глагол не нужен, и порядок слов как в утверждении:\n\n' +
            '*Lena tests the feature.* → **Who tests** the feature? (а не *Who does test*)\n*Something breaks the build.* → **What breaks** the build?\n\n' +
            'Сравни с вопросом к дополнению: *Lena tests* **the feature**. → **What does Lena test?**',
          table: [
            ['Вопрос к…', 'Пример', 'Ответ'],
            ['подлежащему', '**Who reviews** the PRs?', 'Arjun reviews them.'],
            ['дополнению', '**Who does** Arjun **help**?', 'He helps the juniors.'],
            ['подлежащему', '**What happens** when the API is down?', 'The app shows a warning.'],
          ],
          pitfalls: [
            { wrong: 'Who does use this map?', right: 'Who uses this map?' },
            { wrong: 'What does happen next?', right: 'What happens next?' },
            { wrong: 'Where you keep the designs?', right: 'Where do you keep the designs?' },
            { wrong: 'How many users the app has?', right: 'How many users does the app have?' },
          ],
        },
        { kind: 'choice', prompt: '___ does the build take? — About ten minutes.', options: ['How often', 'How long', 'How many', 'When'], answer: 1 },
        { kind: 'choice', prompt: '___ tests the new features? — Lena.', options: ['Who', 'Who does', 'Whom does', 'What'], answer: 0 },
        { kind: 'choice', prompt: '___ library do we use, React Leaflet or Mapbox?', options: ['What', 'Which', 'Who', 'Whose'], answer: 1 },
        { kind: 'choice', prompt: 'Where ___ the designs?', options: ['I can find', 'can I find', 'I find', 'do I can find'], answer: 1 },
        { kind: 'choice', prompt: 'What ___ when the connection is lost?', options: ['does happen', 'happens', 'happen', 'is happen'], answer: 1 },
        { kind: 'choice', prompt: '___ laptop is this? — It’s Ken’s.', options: ['Who', 'Whose', "Who's", 'Which'], answer: 1 },
        { kind: 'choice', prompt: 'How many users ___ ?', options: ['the app has', 'does the app have', 'has the app', 'does the app has'], answer: 1 },
        { kind: 'gap', text: '___ often do you deploy? — Twice a week.', answers: ['How'] },
        { kind: 'gap', text: '___ is the deadline? — On Friday.', answers: ['When'] },
        { kind: 'gap', text: '___ is the page so slow? — Because of the big images.', answers: ['Why'] },
        { kind: 'gap', text: 'Where ___ Sofia keep the design files?', answers: ['does'] },
        { kind: 'gap', text: 'What ___ you working on right now?', answers: ['are'] },
        { kind: 'gap', text: 'Who ___ (decide) on the architecture?', answers: ['decides'] },
        { kind: 'gap', text: 'How ___ memory does the service need?', answers: ['much'] },
        {
          kind: 'transform',
          instruction: 'Задай вопрос к выделенному',
          source: '**Arjun** reviews the backend PRs.',
          answers: ['Who reviews the backend PRs?'],
        },
        {
          kind: 'transform',
          instruction: 'Задай вопрос к выделенному',
          source: 'Arjun reviews **the backend PRs**.',
          answers: ['What does Arjun review?'],
        },
        {
          kind: 'transform',
          instruction: 'Задай вопрос к выделенному',
          source: 'The backend sends the coordinates **every thirty seconds**.',
          answers: ['How often does the backend send the coordinates?'],
        },
        {
          kind: 'transform',
          instruction: 'Задай вопрос к выделенному',
          source: 'Ken keeps the secrets **in Vault**.',
          answers: ['Where does Ken keep the secrets?'],
        },
        {
          kind: 'transform',
          instruction: 'Задай вопрос к выделенному',
          source: '**The cache** breaks the build.',
          answers: ['What breaks the build?'],
        },
        { kind: 'fix', sentence: 'Who does approve the PRs?', answers: ['Who approves the PRs?'] },
        { kind: 'fix', sentence: 'Where you store the logs?', answers: ['Where do you store the logs?'] },
        { kind: 'fix', sentence: 'How long the tests take?', answers: ['How long do the tests take?'] },
        { kind: 'fix', sentence: 'What does happen after the release?', answers: ['What happens after the release?'] },
        { kind: 'fix', sentence: 'Why the page is slow?', answers: ['Why is the page slow?'] },
        { kind: 'order', words: ['Which', 'map', 'library', 'do', 'we', 'use', '?'], ru: 'Какую библиотеку карт мы используем?' },
        { kind: 'order', words: ['Who', 'tests', 'the', 'new', 'feature', '?'], ru: 'Кто тестирует новую фичу?' },
        { kind: 'order', words: ['How', 'long', 'does', 'the', 'build', 'take', '?'], ru: 'Сколько длится сборка?' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: requirements',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'feature', ru: 'функциональность, фича', example: 'The new feature is a delivery map.' },
            { chunk: 'in real time', ru: 'в реальном времени', example: 'Customers see the parcel in real time.' },
            { chunk: 'requirements', ru: 'требования', example: 'Tom explains the requirements.' },
            { chunk: 'deadline', ru: 'срок сдачи', example: 'The deadline is the end of the sprint.' },
            { chunk: 'decides on', ru: 'принимает решение о', example: 'Arjun decides on the library.' },
            { chunk: 'good question', ru: 'хороший вопрос', example: "Good question. I don't know yet." },
            { chunk: 'connection is lost', ru: 'соединение потеряно', example: 'What happens when the connection is lost?' },
            { chunk: 'last known position', ru: 'последнее известное положение', example: 'The map shows the last known position.' },
            { chunk: 'any other questions', ru: 'ещё вопросы?', example: 'Any other questions before we finish?' },
            { chunk: 'sends you the link', ru: 'пришлёт тебе ссылку', example: 'Sofia sends you the link today.' },
            { chunk: 'open source', ru: 'с открытым кодом', example: 'We prefer open source libraries.' },
            { chunk: 'separate', ru: 'отдельный', example: 'Drivers have a separate mobile app.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['deadline', 'срок сдачи'],
            ['requirements', 'требования'],
            ['in real time', 'в реальном времени'],
            ['separate', 'отдельный'],
            ['open source', 'с открытым кодом'],
          ],
        },
        { kind: 'gap', text: 'The map updates in real ___ .', answers: ['time'] },
        { kind: 'gap', text: 'Arjun decides ___ the database.', answers: ['on'] },
        { kind: 'gap', text: 'What is the ___ for this task? — Next Friday.', answers: ['deadline'] },
        { kind: 'gap', text: 'Any other ___ ? No? Then thanks, everyone!', answers: ['questions'] },
        { kind: 'gap', text: 'Drivers use a ___ app, not the web version.', answers: ['separate'] },
        { kind: 'choice', prompt: 'Тебе задали вопрос, ответа на который ты пока не знаешь. Лучший вариант:', options: ["Good question. Let me check and get back to you.", 'I not know.', 'No idea, sorry, bye.', 'It is not my problem.'], answer: 0 },
        { kind: 'choice', prompt: '«Требования» к фиче:', options: ['requirements', 'requests', 'acquirements', 'demands list'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'Who uses this map?' },
        { kind: 'dictation', text: 'How often does the position update?' },
        { kind: 'dictation', text: 'Which map library do we use?' },
        { kind: 'dictation', text: 'What happens when the connection is lost?' },
        { kind: 'dictation', text: 'Where can I find the designs?' },
        { kind: 'dictation', text: 'When is the deadline?' },
        {
          kind: 'theory',
          title: 'Интонация вопросов',
          body: 'В **Wh-вопросах** (what, where, how…) голос в конце обычно **понижается**: *Where can I find the designs ↘*\nВ вопросах **Yes/No** голос в конце **повышается**: *Is the build green ↗*\nПослушай примеры в диктанте и повтори с той же мелодией.',
        },
        { kind: 'dictation', text: 'Is the build green?' },
        { kind: 'dictation', text: 'Whose laptop is this?' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: clarify a task',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'Who uses this map? Only customers, or drivers too?' },
        { kind: 'shadow', text: 'What happens when the connection is lost?' },
        { kind: 'shadow', text: 'Good question. Let me check and get back to you.' },
        { kind: 'shadow', text: 'Where can I find the designs?' },
        {
          kind: 'speak',
          situation: 'Tom даёт тебе новую задачу: «экспорт отчёта в PDF». Задай три уточняющих вопроса: кто использует отчёт, когда дедлайн, что происходит, если отчёт очень большой.',
          keywords: ['who uses', 'when is the deadline', 'what happens'],
          sample: 'Who uses the report? When is the deadline? And what happens if the report is very big?',
        },
        {
          kind: 'speak',
          situation: 'Lena спрашивает: «Which browser do our customers use most?» Ты не знаешь. Ответь вежливо и пообещай уточнить.',
          keywords: ['good question', 'get back to you'],
          sample: "Good question. I'm not sure, let me check the analytics and get back to you.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: questions in a ticket',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Ты прочитал(а) тикет «Delivery map». Напиши комментарий в Jira для Tom с 4–5 вопросами по требованиям (кто, как часто, что происходит, где, когда).',
          checklist: [
            'Есть вопрос к подлежащему без do/does (*Who tests…?*)',
            'Есть вопросы с **do/does** по формуле QUASI',
            'Разные вопросительные слова: who, how often, what, where, when',
            'Вежливое начало и конец (*Hi Tom, … Thanks!*)',
          ],
          minWords: 35,
          sample:
            "Hi Tom, I have a few questions about the delivery map:\n1. Who uses the map? Only customers?\n2. How often does the backend send new coordinates?\n3. What happens when the connection is lost?\n4. Where can I find the final designs?\n5. When do you need the first version?\nThanks!",
        },
      ],
    },
  ],
};

export default lesson;
