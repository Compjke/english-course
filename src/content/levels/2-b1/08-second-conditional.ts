import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-08',
  level: 'B1',
  title: 'Day 23: If we had more time…',
  grammar: 'Second Conditional, If I were you',
  scene: 'Демо прошло хорошо. Пицца, и команда мечтает: «а что если бы…»',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: pizza Friday',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Pizza Friday (team call)',
          format: 'call',
          lines: [
            { who: 'Maya', text: 'Great demo, everyone! The client loved the map. Now, a fun question: if you could change one thing in our stack, what would it be?' },
            { who: 'Arjun', text: "If I had the time, I'd rewrite the tracking service in Go. It would be much faster." },
            { who: 'Ken', text: "If we moved everything to one cloud provider, I'd sleep better. Two providers are a nightmare." },
            { who: 'You', text: "I'd add end-to-end tests for the map. If we had them, we wouldn't be so nervous before demos." },
            { who: 'Lena', text: 'Agreed! If I were the boss, I would block every release without e2e tests.' },
            { who: 'Tom', text: "And if the client paid for it, I'd build the delivery estimate tomorrow." },
            { who: 'Sofia', text: "If I were you, Tom, I'd ask them. They looked very excited." },
            { who: 'Maya', text: "OK, realistic version: we can't rewrite everything. But what would you do first if you were me?" },
            { who: 'Arjun', text: "If I were you, I'd start with the e2e tests. They'd save time for everyone." },
          ],
        },
        { kind: 'choice', prompt: 'What would Arjun do if he had the time?', options: ['Add e2e tests', 'Rewrite the tracking service in Go', 'Move to one cloud', 'Build the estimate'], answer: 1 },
        { kind: 'choice', prompt: "Why does Ken want one cloud provider?", options: ["It's cheaper.", "Two providers are a nightmare.", "The client asked.", "It's faster."], answer: 1 },
        { kind: 'choice', prompt: 'What would you add?', options: ['A new design', 'End-to-end tests for the map', 'A Go service', 'More meetings'], answer: 1 },
        { kind: 'choice', prompt: "What does Sofia advise Tom?", options: ['To ask the client to pay for the estimate', 'To wait', 'To rewrite the API', 'To hire people'], answer: 0 },
        { kind: 'choice', prompt: 'What would Arjun start with if he were Maya?', options: ['The Go rewrite', 'The e2e tests', 'The cloud migration', 'Pizza'], answer: 1 },
        {
          kind: 'choice',
          prompt: '«If I **had** the time, I**’d rewrite**…» — время у Arjun есть?',
          options: ['Нет. Это воображаемая ситуация в настоящем', 'Да, было в прошлом', 'Будет завтра', 'Неизвестно, это прошедшее время'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: unreal present',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Second Conditional: воображаемое «сейчас»',
          body:
            '**If + Past Simple, would + глагол** описывает **нереальную или маловероятную** ситуацию в настоящем или будущем: *If I had the time, I’d rewrite it in Go* (но времени нет).\n\n' +
            'Past Simple здесь **не означает прошлое**: это знак «нереальности». По-русски это «если бы … , то …бы».\n\n' +
            '*would* часто сокращается: *I’d, we’d, it’d*. Вместо would можно поставить **could** (мог бы) или **might** (может быть, мог бы).\n\n' +
            'Сравни:\n*If it rains tomorrow, I’ll stay home* (реально, First).\n*If I won a million, I’d travel* (мечта, Second).',
          table: [
            ['First (реально)', 'Second (нереально)'],
            ["If we **have** time, we**'ll add** tests.", "If we **had** time, we**'d add** tests."],
            ['вполне возможно', 'маловероятно или невозможно сейчас'],
          ],
        },
        {
          kind: 'theory',
          title: 'If I were you: совет',
          body:
            'В Second Conditional после *if* для всех лиц можно использовать **were**: *If I were the boss… If he were here…* (в разговоре встречается и *was*, но *were* — правильный и более «рабочий» вариант).\n\n' +
            '**If I were you, I’d…** — классическая вежливая форма совета: «На твоём месте я бы…»: *If I were you, I’d ask the client.*',
          pitfalls: [
            { wrong: 'If I would have time, I would help.', right: "If I had time, I'd help." },
            { wrong: 'If I am you, I will ask.', right: "If I were you, I'd ask." },
            { wrong: 'If we had more people, we will finish.', right: "If we had more people, we'd finish." },
            { wrong: 'I would rewrite it if I can.', right: 'I would rewrite it if I could.' },
          ],
        },
        { kind: 'choice', prompt: "If I ___ more time, I'd rewrite the service.", options: ['have', 'had', 'would have', 'will have'], answer: 1 },
        { kind: 'choice', prompt: 'If we had e2e tests, we ___ so nervous.', options: ["won't be", "wouldn't be", "aren't", "weren't"], answer: 1 },
        { kind: 'choice', prompt: "If I ___ you, I'd ask the client.", options: ['am', 'were', 'would be', 'be'], answer: 1 },
        { kind: 'choice', prompt: "What ___ you do if you were the CTO?", options: ['will', 'would', 'do', 'did'], answer: 1 },
        { kind: 'choice', prompt: 'If the client ___ for it, we would build it tomorrow.', options: ['pays', 'paid', 'would pay', 'will pay'], answer: 1 },
        { kind: 'choice', prompt: "If it rains tomorrow, I ___ work from home. (реально)", options: ["'d", "'ll", 'would', 'worked'], answer: 1 },
        { kind: 'choice', prompt: "I'd help you if I ___ . But I can't.", options: ['can', 'could', 'would can', 'will'], answer: 1 },
        { kind: 'gap', text: 'If we ___ (move) to one cloud, Ken would sleep better.', answers: ['moved'] },
        { kind: 'gap', text: "If I had the budget, I ___ (hire) two more QA engineers.", answers: ['would hire', "'d hire"] },
        { kind: 'gap', text: "If I ___ (be) you, I'd take a day off.", answers: ['were'] },
        { kind: 'gap', text: 'What would you do if the server ___ (crash) during the demo?', answers: ['crashed'] },
        { kind: 'gap', text: "We ___ (finish) faster if we didn't have so many meetings.", answers: ['would finish', "'d finish"] },
        { kind: 'gap', text: "If Arjun ___ (not / be) here, nobody would understand the old code.", answers: ["weren't", "wasn't", 'were not', 'was not'] },
        { kind: 'gap', text: 'If I knew the answer, I ___ tell you.', answers: ['would', "'d"] },
        { kind: 'transform', instruction: 'Перепиши в Second Conditional', source: "We don't have tests, so we're nervous.", answers: ["If we had tests, we wouldn't be nervous.", 'If we had tests, we would not be nervous.'] },
        { kind: 'transform', instruction: 'Дай совет: If I were you…', source: 'You should talk to Maya.', answers: ["If I were you, I'd talk to Maya.", 'If I were you, I would talk to Maya.'] },
        { kind: 'transform', instruction: 'Перепиши в Second Conditional', source: "I don't know Go, so I can't help with the rewrite.", answers: ['If I knew Go, I could help with the rewrite.', "If I knew Go, I'd help with the rewrite.", 'If I knew Go, I would help with the rewrite.'] },
        { kind: 'fix', sentence: 'If I would know the answer, I would tell you.', answers: ['If I knew the answer, I would tell you.', "If I knew the answer, I'd tell you."] },
        { kind: 'fix', sentence: 'If I am you, I will ask for a raise.', answers: ["If I were you, I'd ask for a raise.", 'If I were you, I would ask for a raise.'] },
        { kind: 'fix', sentence: 'If we had more developers, we will finish on time.', answers: ['If we had more developers, we would finish on time.', "If we had more developers, we'd finish on time."] },
        { kind: 'fix', sentence: "I'd refactor it if I can.", answers: ["I'd refactor it if I could.", 'I would refactor it if I could.'] },
        { kind: 'fix', sentence: 'What you would do if you were the boss?', answers: ['What would you do if you were the boss?'] },
        { kind: 'order', words: ['If', 'I', 'were', 'you', ',', "I'd", 'ask', 'them', '.'], ru: 'На твоём месте я бы их спросил.' },
        { kind: 'order', words: ['What', 'would', 'you', 'do', 'if', 'you', 'were', 'me', '?'], ru: 'Что бы ты сделал на моём месте?' },
        { kind: 'order', words: ['If', 'we', 'had', 'tests', ',', 'we', "wouldn't", 'worry', '.'], ru: 'Если бы у нас были тесты, мы бы не волновались.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: opinions & wishes',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'stack', ru: 'технологический стек', example: 'What would you change in our stack?' },
            { chunk: 'rewrite', ru: 'переписать', example: "I'd rewrite the service in Go." },
            { chunk: 'cloud provider', ru: 'облачный провайдер', example: 'We use two cloud providers.' },
            { chunk: 'nightmare', ru: 'кошмар', example: 'Two providers are a nightmare.' },
            { chunk: 'nervous', ru: 'нервный, волнующийся', example: "We wouldn't be so nervous." },
            { chunk: 'agreed', ru: 'согласен', example: 'Agreed! Tests first.' },
            { chunk: 'realistic', ru: 'реалистичный', example: 'OK, the realistic version.' },
            { chunk: 'save time', ru: 'сэкономить время', example: "They'd save time for everyone." },
            { chunk: 'excited', ru: 'воодушевлённый', example: 'The client looked very excited.' },
            { chunk: 'loved the map', ru: 'в восторге от карты', example: 'The client loved the map.' },
            { chunk: 'tech debt', ru: 'технический долг', example: 'We have too much tech debt.' },
            { chunk: 'in an ideal world', ru: 'в идеальном мире', example: "In an ideal world, we'd have 100% coverage." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['tech debt', 'технический долг'],
            ['nightmare', 'кошмар'],
            ['agreed', 'согласен'],
            ['stack', 'технологический стек'],
            ['excited', 'воодушевлённый'],
          ],
        },
        { kind: 'gap', text: "In an ideal ___ , we'd have no tech debt.", answers: ['world'] },
        { kind: 'gap', text: 'Automated tests save ___ for everyone.', answers: ['time'] },
        { kind: 'gap', text: 'Our legacy code is a real ___ .', answers: ['nightmare'] },
        { kind: 'gap', text: "We need a sprint to pay off our tech ___ .", answers: ['debt'] },
        { kind: 'gap', text: '— Tests first? — ___ !', answers: ['Agreed'] },
        { kind: 'choice', prompt: 'Как вежливо дать совет коллеге?', options: ["If I were you, I'd talk to Maya.", 'You must talk to Maya.', 'Go to Maya.', 'Maya. Talk.'], answer: 0 },
        { kind: 'choice', prompt: '«Технический долг»:', options: ['tech debt', 'tech loan', 'tech credit', 'tech duty'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'If you could change one thing, what would it be?' },
        { kind: 'dictation', text: "If I had the time, I'd rewrite it in Go." },
        { kind: 'dictation', text: "If we had them, we wouldn't be so nervous." },
        { kind: 'dictation', text: "If I were you, I'd ask them." },
        { kind: 'dictation', text: 'Two providers are a nightmare.' },
        { kind: 'dictation', text: "They'd save time for everyone." },
        {
          kind: 'theory',
          title: "'d = would или had?",
          body: '*I’d* может означать **I would** (*I’d rewrite*) или **I had** (*I’d finished*, это B1+). Подсказка: после *would* идёт **начальная форма** (*I’d go*), а после *had* — **третья форма** (*I’d gone*).',
        },
        { kind: 'dictation', text: "In an ideal world, we'd have no tech debt." },
        { kind: 'dictation', text: 'What would you do if you were me?' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: what would you do?',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "If I had the time, I'd rewrite the service in Go." },
        { kind: 'shadow', text: "If we had e2e tests, we wouldn't be so nervous." },
        { kind: 'shadow', text: "If I were you, I'd start with the tests." },
        { kind: 'shadow', text: 'What would you do if you were the CTO?' },
        {
          kind: 'speak',
          situation: 'Ответь на вопрос Maya: «If you could change one thing in our stack or process, what would it be and why?»',
          keywords: ['if I could', "I'd", 'because'],
          sample: "If I could change one thing, I'd add end-to-end tests, because we would catch bugs before the demos.",
        },
        {
          kind: 'speak',
          situation: 'Коллега жалуется, что перегружен и работает по вечерам. Дай совет в форме «If I were you…».',
          keywords: ['if I were you', "I'd"],
          sample: "If I were you, I'd talk to Maya about the workload. And I'd stop answering Slack after 7 pm.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: ideal team',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши пост в канал #random: «If I were the CTO for a week…». Что бы ты изменил(а) в стеке, процессах и культуре и почему. Не меньше трёх условных предложений.',
          checklist: [
            'Second Conditional: *If + Past, would*',
            '*If I were…*',
            'Хотя бы одно *could* или *might*',
            'Объяснение причин (*because / so*)',
          ],
          minWords: 50,
          sample:
            "If I were the CTO for a week, I'd start with tests: every team would add end-to-end tests for their main flows, because we lose too much time on manual checks. If we moved to one cloud provider, Ken could finally sleep at night. I would also cancel half of the meetings. If people had more focus time, they might finish features faster. And if I had a big budget, I'd buy everyone a second monitor.",
        },
      ],
    },
  ],
};

export default lesson;
