import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-13',
  level: 'B1',
  title: 'Day 28: The client said that…',
  grammar: 'Reported speech: say / tell, сдвиг времён',
  scene: 'Tom пропустил созвон с клиентом. Ты пересказываешь, что сказал клиент.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: what did they say?',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Chat with Tom',
          format: 'chat',
          lines: [
            { who: 'Tom', text: "Sorry I missed the client call! My train was late. What did they say?" },
            { who: 'You', text: "No problem. They said they were very happy with the map. Anna told us that the drivers loved the clusters." },
            { who: 'Tom', text: 'Great! Did they mention the delivery estimate?' },
            { who: 'You', text: "Yes. Anna said they needed it by March. She said their CEO was asking about it every week." },
            { who: 'Tom', text: 'Hmm. Did you promise anything?' },
            { who: 'You', text: "No. Maya told them we would check our capacity and send a plan next week." },
            { who: 'Tom', text: 'Good. Anything about bugs?' },
            { who: 'You', text: "Anna said the app had crashed twice on old Android phones. Lena said she would try to reproduce it." },
            { who: 'Tom', text: 'And did they say anything about the price?' },
            { who: 'You', text: "Only that they had a new budget for next year. Anna said she would tell us more in January." },
          ],
        },
        { kind: 'choice', prompt: 'What did the client say about the map?', options: ['They were very happy with it.', 'It was too slow.', 'They wanted a new design.', 'Nothing.'], answer: 0 },
        { kind: 'choice', prompt: 'When do they need the delivery estimate?', options: ['Next week', 'By March', 'In January', 'Now'], answer: 1 },
        { kind: 'choice', prompt: 'What did Maya tell them?', options: ['The estimate is ready.', 'The team would check capacity and send a plan.', 'It was impossible.', 'To call Tom.'], answer: 1 },
        { kind: 'choice', prompt: 'Where had the app crashed?', options: ['On iPhones', 'On old Android phones', 'On laptops', 'In Safari'], answer: 1 },
        { kind: 'choice', prompt: 'When will Anna tell more about the budget?', options: ['In January', 'In March', 'Next week', 'Tomorrow'], answer: 0 },
        {
          kind: 'choice',
          prompt: 'Anna сказала: «We **need** it by March». Ты пересказываешь: «She said they **needed** it». Почему need → needed?',
          options: ['В косвенной речи после said время сдвигается назад', 'Это ошибка', 'Потому что March в прошлом', 'needed — вежливая форма'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: reported speech',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'say vs tell',
          body:
            '**say (said)** — сказать (без указания, кому, или с *to*): *She said (that) they were happy. She said to me…*\n' +
            '**tell (told)** — сказать **кому-то**, после него обязательно стоит человек: *She told **us** (that) the drivers loved it.*\n\n' +
            'Нельзя: *She said me…* и *She told that…*\n\n' +
            '*that* после said/told часто опускают в речи: *She said they were happy.*',
          pitfalls: [
            { wrong: 'She said me that…', right: 'She told me that… / She said that…' },
            { wrong: 'He told that he was busy.', right: 'He said that he was busy. / He told us that he was busy.' },
          ],
        },
        {
          kind: 'theory',
          title: 'Сдвиг времён (backshift)',
          body:
            'Когда пересказываем после **said / told** (прошедшее время), глаголы обычно **сдвигаются на шаг назад**:',
          table: [
            ['Прямая речь', 'Косвенная речь'],
            ['"We **need** it."', 'She said they **needed** it.'],
            ['"I**’m working** on it."', 'He said he **was working** on it.'],
            ['"It **crashed** twice."', 'She said it **had crashed** twice.'],
            ['"We**’ve fixed** it."', 'They said they **had fixed** it.'],
            ['"I**’ll** check."', 'She said she **would** check.'],
            ['"I **can** help."', 'He said he **could** help.'],
            ['"We **must** finish."', 'They said they **had to** finish.'],
          ],
          examples: ['Anna said they needed it by March.', 'Maya told them we would send a plan.', 'Lena said she would try to reproduce it.'],
        },
        {
          kind: 'theory',
          title: 'Местоимения, время и место тоже меняются',
          body:
            '*I → he/she, we → they, my → his/her*: «**I**’ll call **you**» → *She said **she** would call **us**.*\n' +
            '*today → that day, tomorrow → the next day, yesterday → the day before, now → then, here → there, next week → the following week*.\n\n' +
            '**Когда сдвиг не обязателен**: если сказанное **всё ещё правда** или речь о только что сказанном, можно оставить время: *She said they need it by March* (им до сих пор нужно). В живой рабочей речи так говорят часто. Оба варианта правильные.',
          pitfalls: [
            { wrong: 'She said she will call tomorrow. (вчера сказала)', right: 'She said she would call the next day.' },
            { wrong: 'He said that I am late. (о себе)', right: 'He said that he was late.' },
          ],
        },
        { kind: 'choice', prompt: 'Anna ___ us that the drivers loved the clusters.', options: ['said', 'told', 'say', 'talked'], answer: 1 },
        { kind: 'choice', prompt: 'She ___ that they were happy.', options: ['told', 'said', 'told to', 'said me'], answer: 1 },
        { kind: 'choice', prompt: '"We need it by March." → She said they ___ it by March.', options: ['need', 'needed', 'will need', 'had need'], answer: 1 },
        { kind: 'choice', prompt: '"I\'ll check our capacity." → Maya said she ___ the capacity.', options: ['will check', 'would check', 'checks', 'checked'], answer: 1 },
        { kind: 'choice', prompt: '"The app crashed twice." → She said the app ___ twice.', options: ['crashes', 'had crashed', 'has crashed', 'will crash'], answer: 1 },
        { kind: 'choice', prompt: '"I can help." → Ken said he ___ help.', options: ['can', 'could', 'will', 'may'], answer: 1 },
        { kind: 'choice', prompt: '"I\'m working on it." → Arjun said he ___ on it.', options: ['is working', 'was working', 'worked', 'has worked'], answer: 1 },
        { kind: 'choice', prompt: '"I\'ll call you tomorrow." (сказано вчера) → She said she would call me ___ .', options: ['tomorrow', 'the next day', 'yesterday', 'the day before'], answer: 1 },
        { kind: 'gap', text: 'Lena ___ me that she had found a bug.', answers: ['told'] },
        { kind: 'gap', text: 'Ken ___ that the servers were fine.', answers: ['said'] },
        { kind: 'gap', text: '"I am tired." → Arjun said he ___ tired.', answers: ['was'] },
        { kind: 'gap', text: '"We have finished the designs." → Sofia said they ___ finished the designs.', answers: ['had'] },
        { kind: 'gap', text: '"I will send it." → Tom said he ___ send it.', answers: ['would'] },
        { kind: 'gap', text: '"We must fix it." → They said they ___ to fix it.', answers: ['had'] },
        { kind: 'gap', text: '"I don\'t know the answer." → She said she ___ know the answer.', answers: ["didn't", 'did not'] },
        { kind: 'transform', instruction: 'Перескажи (She said…)', source: 'Anna: "We are very happy with the map."', answers: ['She said they were very happy with the map.', 'She said that they were very happy with the map.', 'Anna said they were very happy with the map.', 'Anna said that they were very happy with the map.'] },
        { kind: 'transform', instruction: 'Перескажи (He told me…)', source: 'Arjun to me: "I will review your PR."', answers: ['He told me he would review my PR.', 'He told me that he would review my PR.', 'Arjun told me he would review my PR.', 'Arjun told me that he would review my PR.'] },
        { kind: 'transform', instruction: 'Перескажи (She said…)', source: 'Lena: "I found two bugs yesterday."', answers: ['She said she had found two bugs the day before.', 'She said that she had found two bugs the day before.', 'Lena said she had found two bugs the day before.', 'Lena said that she had found two bugs the day before.'] },
        { kind: 'transform', instruction: 'Перескажи (Ken said…)', source: 'Ken: "I can\'t restart the server now."', answers: ["Ken said he couldn't restart the server then.", 'Ken said that he could not restart the server then.', "Ken said that he couldn't restart the server then.", 'Ken said he could not restart the server then.'] },
        { kind: 'fix', sentence: 'She said me that the app was slow.', answers: ['She told me that the app was slow.', 'She told me the app was slow.', 'She said that the app was slow.', 'She said to me that the app was slow.'] },
        { kind: 'fix', sentence: 'He told that he was busy.', answers: ['He said that he was busy.', 'He said he was busy.', 'He told me that he was busy.', 'He told us that he was busy.'] },
        { kind: 'fix', sentence: 'Yesterday Maya said she will send the plan.', answers: ['Yesterday Maya said she would send the plan.'] },
        { kind: 'fix', sentence: 'Tom said that I am late. (Tom about himself)', answers: ['Tom said that he was late.', 'Tom said he was late.'] },
        { kind: 'order', words: ['She', 'told', 'us', 'that', 'the', 'drivers', 'loved', 'it', '.'], ru: 'Она сказала нам, что водителям понравилось.' },
        { kind: 'order', words: ['He', 'said', 'he', 'would', 'check', 'the', 'logs', '.'], ru: 'Он сказал, что проверит логи.' },
        { kind: 'order', words: ['They', 'said', 'they', 'needed', 'it', 'by', 'March', '.'], ru: 'Они сказали, что им это нужно к марту.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: client communication',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'missed the call', ru: 'пропустил созвон', example: 'Sorry, I missed the call.' },
            { chunk: 'happy with', ru: 'довольны', example: 'They are happy with the map.' },
            { chunk: 'mention', ru: 'упомянуть', example: 'Did they mention the price?' },
            { chunk: 'capacity', ru: 'ресурсы, возможности команды', example: 'We need to check our capacity.' },
            { chunk: 'promise anything', ru: 'обещать что-либо', example: "We didn't promise anything." },
            { chunk: 'budget', ru: 'бюджет', example: 'They have a new budget for next year.' },
            { chunk: 'follow-up', ru: 'последующее письмо, продолжение', example: "I'll send a follow-up email." },
            { chunk: 'feedback', ru: 'обратная связь', example: 'The client gave great feedback.' },
            { chunk: 'asking about it', ru: 'спрашивает об этом', example: 'Their CEO keeps asking about it.' },
            { chunk: 'tell us more', ru: 'расскажут подробнее', example: "They'll tell us more in January." },
            { chunk: 'meeting notes', ru: 'заметки со встречи', example: 'Here are the meeting notes.' },
            { chunk: 'action items', ru: 'задачи по итогам встречи', example: 'We have three action items.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['action items', 'задачи по итогам'],
            ['follow-up', 'последующее письмо'],
            ['capacity', 'ресурсы команды'],
            ['mention', 'упомянуть'],
            ['meeting notes', 'заметки со встречи'],
          ],
        },
        { kind: 'gap', text: "I'll send a ___ email with the details.", answers: ['follow-up'] },
        { kind: 'gap', text: 'We have three action ___ from the call.', answers: ['items'] },
        { kind: 'gap', text: 'Are they happy ___ the new version?', answers: ['with'] },
        { kind: 'gap', text: "We don't have the ___ for a new feature this sprint.", answers: ['capacity'] },
        { kind: 'gap', text: 'Did the client ___ the deadline?', answers: ['mention'] },
        { kind: 'choice', prompt: 'После созвона с клиентом отправляют:', options: ['a follow-up email with action items', 'nothing', 'a gift', 'a bill'], answer: 0 },
        { kind: 'choice', prompt: '«Они упомянули цену»:', options: ['They mentioned the price.', 'They mentioned about the price.', 'They said about the price.', 'They told about price.'], answer: 0, explain: 'После *mention* предлог не нужен: *mention something*.' },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'They said they were very happy with the map.' },
        { kind: 'dictation', text: 'Anna told us that the drivers loved the clusters.' },
        { kind: 'dictation', text: 'She said they needed it by March.' },
        { kind: 'dictation', text: 'Maya told them we would send a plan next week.' },
        { kind: 'dictation', text: 'She said the app had crashed twice.' },
        { kind: 'dictation', text: 'Lena said she would try to reproduce it.' },
        { kind: 'dictation', text: 'Did they mention the price?' },
        { kind: 'dictation', text: "I'll send a follow-up email." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: retell a meeting',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'They said they were very happy with the map.' },
        { kind: 'shadow', text: 'She told us that the drivers loved the clusters.' },
        { kind: 'shadow', text: 'Maya told them we would send a plan next week.' },
        { kind: 'shadow', text: 'Lena said she would try to reproduce it.' },
        {
          kind: 'speak',
          situation: 'Перескажи коллеге, что сказал клиент на созвоне: он доволен скоростью, хочет тёмную тему и спросил про сроки.',
          keywords: ['said', 'told', 'asked'],
          sample: 'The client said they were happy with the speed. They told us they wanted a dark theme, and they asked when it would be ready.',
        },
        {
          kind: 'speak',
          situation: 'Перескажи, что тебе сказали на последнем 1:1 (или придумай): что руководитель сказал о твоей работе и что пообещал.',
          keywords: ['she said', 'she told me', 'would'],
          sample: 'Maya said my work on the map was great. She told me I could lead the next feature, and she said she would help me with the planning.',
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: meeting notes',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши заметки после созвона с клиентом для тех, кто его пропустил: что сказал клиент, что ответила команда, какие action items.',
          checklist: [
            '*said / told + человек*',
            'Сдвиг времён (*needed, would, had crashed*)',
            'Местоимения изменены правильно',
            'Есть список action items',
          ],
          minWords: 50,
          sample:
            "Client call notes (for Tom)\nAnna said they were very happy with the map, and she told us the drivers loved the clusters. She said they needed the delivery estimate by March, because their CEO was asking about it every week. Maya told them we would check our capacity. Anna also said the app had crashed twice on old Android phones.\nAction items:\n- Lena: reproduce the Android crash.\n- Maya: send a plan next week.\n- Tom: follow up about the budget in January.",
        },
      ],
    },
  ],
};

export default lesson;
