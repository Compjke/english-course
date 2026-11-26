import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'a2-14',
  level: 'A2',
  title: 'Day 14: Writing the setup guide',
  grammar: 'Повелительное наклонение, наречия частоты',
  scene: 'Maya просит тебя обновить инструкцию по настройке проекта для следующего новичка.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the old guide',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Chat with Maya',
          format: 'chat',
          lines: [
            { who: 'Maya', text: 'Hi! A new developer joins us next month. Can you update the setup guide? You remember the pain.' },
            { who: 'You', text: "Yes, I do! The old guide is never clear. People always ask Ken about the env file." },
            { who: 'Maya', text: 'Exactly. Write short steps. Start every step with a verb.' },
            { who: 'You', text: 'OK. Step one: install Node 22. Step two: clone the repo. Step three: copy .env.example to .env.' },
            { who: 'Maya', text: "Good. And add warnings. For example: don't commit the .env file." },
            { who: 'You', text: 'Sure. I also want to add a note: run the tests before every push. People sometimes forget.' },
            { who: 'Maya', text: 'Perfect. How often do you update docs, by the way?' },
            { who: 'You', text: "Honestly? Hardly ever. I usually update the README only when something breaks." },
            { who: 'Maya', text: "Ha, like everyone. Let's change that. Please send me the draft by Friday." },
          ],
        },
        { kind: 'choice', prompt: 'Why does Maya want a new guide?', options: ['A new developer joins next month.', 'The project is new.', 'Ken left.', 'The client asked.'], answer: 0 },
        { kind: 'choice', prompt: 'What do people always ask Ken about?', options: ['The VPN', 'The env file', 'The tests', 'Node version'], answer: 1 },
        { kind: 'choice', prompt: 'How should every step start?', options: ['With "Please"', 'With a verb', 'With a number only', 'With a warning'], answer: 1 },
        { kind: 'choice', prompt: 'What must you never commit?', options: ['The README', 'The .env file', 'The tests', 'package.json'], answer: 1 },
        { kind: 'choice', prompt: 'How often do you update docs?', options: ['Every day', 'Often', 'Hardly ever', 'Always'], answer: 2 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: instructions & frequency',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Повелительное наклонение (imperative)',
          body:
            'Инструкции, шаги и просьбы начинаются **с глагола в начальной форме**, без подлежащего: *Install Node. Clone the repo. Run the tests.*\n\n' +
            'Запрет: **Don’t + глагол**: *Don’t commit the .env file.* Для акцента: *Never push to main directly.*\n\n' +
            'Чтобы звучало вежливее, добавь *please* или используй *Could you…?* Для совместного действия есть *Let’s*: *Let’s check the logs.*\n\n' +
            'Связки для шагов: *First, … Then, … After that, … Finally, …*',
          examples: ['Install Node 22.', 'Copy .env.example to .env.', "Don't commit secrets.", 'First, clone the repo. Then, install the dependencies.'],
          pitfalls: [
            { wrong: 'You must to install Node.', right: 'Install Node.' },
            { wrong: 'Not commit the env file.', right: "Don't commit the env file." },
            { wrong: 'To run the tests.', right: 'Run the tests.', note: 'В инструкции без to.' },
          ],
        },
        {
          kind: 'theory',
          title: 'Наречия частоты: где их ставить',
          body:
            'Шкала: **always** (100%) → **usually** → **often** → **sometimes** → **rarely / hardly ever** → **never** (0%).\n\n' +
            'Место в предложении:\n**перед основным глаголом**: *I usually update the README. People sometimes forget.*\n**после to be**: *The guide is never clear. He is always online.*\n**после вспомогательного или модального**: *You should always run tests. I don’t often deploy.*\n\n' +
            '*Sometimes* и *usually* можно поставить и в начало: *Sometimes the build fails.* Выражения *every day, once a week, twice a month* ставят в конец.',
          table: [
            ['Тип', 'Пример'],
            ['обычный глагол', 'I **usually** check the logs.'],
            ['to be', 'The CI is **always** slow on Mondays.'],
            ['с модальным', 'You should **never** push to main.'],
            ['фраза частоты', 'We deploy **twice a week**.'],
          ],
          pitfalls: [
            { wrong: 'I check usually the logs.', right: 'I usually check the logs.' },
            { wrong: 'He always is online.', right: 'He is always online.' },
            { wrong: "I don't never deploy on Fridays.", right: 'I never deploy on Fridays.', note: 'never уже отрицание.' },
          ],
        },
        { kind: 'choice', prompt: '___ the .env file to Git. It has secrets.', options: ["Don't commit", 'Not commit', 'No commit', "Doesn't commit"], answer: 0 },
        { kind: 'choice', prompt: 'Step 1: ___ Node 22.', options: ['Installing', 'To install', 'Install', 'You install'], answer: 2 },
        { kind: 'choice', prompt: 'Выбери правильный порядок слов:', options: ['I update usually the docs.', 'I usually update the docs.', 'Usually I the docs update.', 'I update the docs usually always.'], answer: 1 },
        { kind: 'choice', prompt: 'Выбери правильный порядок слов:', options: ['The build always is slow.', 'The build is always slow.', 'Always the build slow is.', 'The always build is slow.'], answer: 1 },
        { kind: 'choice', prompt: 'Ken checks the alerts ___ . (каждое утро)', options: ['every morning', 'always morning', 'in every morning', 'morning every'], answer: 0 },
        { kind: 'choice', prompt: '«Почти никогда»:', options: ['hardly ever', 'hard ever', 'never ever', 'rarely never'], answer: 0 },
        { kind: 'choice', prompt: "Let's ___ the logs together.", options: ['to check', 'check', 'checking', 'checks'], answer: 1 },
        { kind: 'gap', text: '___ , clone the repository. (Сначала)', answers: ['First'] },
        { kind: 'gap', text: "___ push directly to main. (никогда)", answers: ['Never'] },
        { kind: 'gap', text: "___ forget to run the tests. (Не)", answers: ["Don't", 'Do not'] },
        { kind: 'gap', text: 'People ___ forget this step. (иногда)', answers: ['sometimes'] },
        { kind: 'gap', text: 'The old guide is ___ clear. (никогда)', answers: ['never'] },
        { kind: 'gap', text: 'We deploy ___ a week, on Tuesday and Thursday.', answers: ['twice'] },
        { kind: 'gap', text: '___ , open http://localhost:5173 in your browser. (Наконец)', answers: ['Finally'] },
        { kind: 'transform', instruction: 'Поставь наречие в правильное место', source: 'I forget to update the docs. (often)', answers: ['I often forget to update the docs.'] },
        { kind: 'transform', instruction: 'Поставь наречие в правильное место', source: 'Ken is online at 9. (always)', answers: ['Ken is always online at 9.'] },
        { kind: 'transform', instruction: 'Сделай запрет', source: 'Push to main directly.', answers: ["Don't push to main directly.", 'Do not push to main directly.', 'Never push to main directly.'] },
        { kind: 'transform', instruction: 'Перепиши как инструкцию (imperative)', source: 'You need to copy the example file.', answers: ['Copy the example file.'] },
        { kind: 'fix', sentence: 'Not share your password.', answers: ["Don't share your password.", 'Do not share your password.', 'Never share your password.'] },
        { kind: 'fix', sentence: 'I check always my PRs twice.', answers: ['I always check my PRs twice.'] },
        { kind: 'fix', sentence: 'To install the dependencies.', answers: ['Install the dependencies.'] },
        { kind: 'fix', sentence: "We don't never deploy on Fridays.", answers: ['We never deploy on Fridays.', "We don't ever deploy on Fridays."] },
        { kind: 'fix', sentence: 'Lena usually is in the office on Tuesday.', answers: ['Lena is usually in the office on Tuesday.'] },
        { kind: 'order', words: ["Don't", 'commit', 'the', '.env', 'file', '.'], ru: 'Не коммить файл .env.' },
        { kind: 'order', words: ['I', 'hardly', 'ever', 'update', 'the', 'docs', '.'], ru: 'Я почти никогда не обновляю документацию.' },
        { kind: 'order', words: ['First', ',', 'clone', 'the', 'repo', '.'], ru: 'Сначала клонируй репозиторий.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: setup & docs',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'setup guide', ru: 'инструкция по настройке', example: 'Can you update the setup guide?' },
            { chunk: 'clone the repo', ru: 'клонировать репозиторий', example: 'Step two: clone the repo.' },
            { chunk: 'install the dependencies', ru: 'установить зависимости', example: 'Then install the dependencies.' },
            { chunk: 'env file', ru: 'файл переменных окружения', example: 'People always ask about the env file.' },
            { chunk: 'draft', ru: 'черновик', example: 'Send me the draft by Friday.' },
            { chunk: 'step by step', ru: 'шаг за шагом', example: 'Explain it step by step.' },
            { chunk: 'warning', ru: 'предупреждение', example: 'Add a warning about secrets.' },
            { chunk: 'by the way', ru: 'кстати', example: 'By the way, how often do you update docs?' },
            { chunk: 'honestly', ru: 'честно говоря', example: 'Honestly? Hardly ever.' },
            { chunk: 'remember the pain', ru: 'помнишь, как это было больно', example: 'You were new recently, you remember the pain.' },
            { chunk: 'make sure', ru: 'убедись', example: 'Make sure the tests pass.' },
            { chunk: 'exactly', ru: 'именно, точно', example: 'Exactly, that is the problem.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['draft', 'черновик'],
            ['make sure', 'убедись'],
            ['by the way', 'кстати'],
            ['step by step', 'шаг за шагом'],
            ['warning', 'предупреждение'],
          ],
        },
        { kind: 'gap', text: 'Make ___ you use Node 22, not 18.', answers: ['sure'] },
        { kind: 'gap', text: 'By the ___ , do you know where the docs are?', answers: ['way'] },
        { kind: 'gap', text: 'First, clone the ___ . Then install the dependencies.', answers: ['repo'] },
        { kind: 'gap', text: "Here's the first ___ of the guide. Comments are welcome!", answers: ['draft'] },
        { kind: 'gap', text: "Run npm install to install the ___ .", answers: ['dependencies'] },
        { kind: 'choice', prompt: 'Как начать каждый шаг инструкции?', options: ['With a verb: Install, Run, Copy…', 'With "You must to…"', 'With "Maybe you…"', 'With "It is needed to…"'], answer: 0 },
        { kind: 'choice', prompt: '«Честно говоря» в начале фразы:', options: ['Honestly,', 'Honest,', 'In honest,', 'Honestly to say,'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'Start every step with a verb.' },
        { kind: 'dictation', text: 'Install Node and clone the repo.' },
        { kind: 'dictation', text: "Don't commit the env file." },
        { kind: 'dictation', text: 'People sometimes forget.' },
        { kind: 'dictation', text: 'I usually update the README only when something breaks.' },
        { kind: 'dictation', text: 'Please send me the draft by Friday.' },
        {
          kind: 'theory',
          title: 'Spelling: частые ошибки в документации',
          body: '**dependency / dependencies** (*-ency*, не *-ancy*), **environment**, **repository**, **separate** (не *seperate*), **necessary** (одна *c*, две *s*), **guide** (*u* после *g*).',
        },
        { kind: 'dictation', text: 'Install the dependencies first.' },
        { kind: 'dictation', text: 'Make sure the environment is separate.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: explain a setup',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'First, clone the repo. Then, install the dependencies.' },
        { kind: 'shadow', text: "Don't commit the env file. Never." },
        { kind: 'shadow', text: 'Make sure the tests pass before every push.' },
        { kind: 'shadow', text: 'Honestly, I hardly ever update the docs.' },
        {
          kind: 'speak',
          situation: 'Новичок спрашивает, как запустить проект. Объясни 3–4 шага со связками first / then / finally.',
          keywords: ['first', 'then', 'finally'],
          sample: 'First, clone the repo. Then, copy the env example and install the dependencies. Finally, run npm run dev and open localhost.',
        },
        {
          kind: 'speak',
          situation: 'Расскажи о своих рабочих привычках: что ты делаешь всегда, что обычно, а что почти никогда.',
          keywords: ['always', 'usually', 'hardly ever'],
          sample: 'I always run the tests before a push. I usually review PRs in the morning. I hardly ever work at night.',
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: setup guide',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши раздел «Getting started» для README: 5–7 шагов запуска проекта и 2 предупреждения. Каждый шаг начинай с глагола.',
          checklist: [
            'Каждый шаг начинается с глагола (*Install, Clone, Run…*)',
            'Есть запрет: *Don’t / Never…*',
            'Есть *Make sure…*',
            'Есть связки *First / Then / Finally* или нумерация',
          ],
          minWords: 40,
          sample:
            "Getting started\n1. Install Node 22 and Git.\n2. Clone the repo: git clone <url>.\n3. Copy .env.example to .env and ask Ken for the keys.\n4. Install the dependencies: npm install.\n5. Run npm run dev and open http://localhost:5173.\n6. Run npm test before every push.\nWarnings: Don't commit the .env file. Never push directly to main. Make sure your branch name starts with feature/ or fix/.",
        },
      ],
    },
  ],
};

export default lesson;
