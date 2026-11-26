import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-07',
  level: 'B1',
  title: 'Day 22: If the demo fails…',
  grammar: 'Zero & First Conditional, unless, as soon as',
  scene: 'Репетиция демо: команда продумывает план Б на все случаи.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: what if?',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Demo rehearsal',
          format: 'call',
          lines: [
            { who: 'Maya', text: "Let's think about risks. What happens if staging goes down during the demo?" },
            { who: 'Ken', text: "If staging goes down, I'll switch the DNS to the backup in two minutes." },
            { who: 'You', text: "And if the map doesn't load, I'll show the recorded video. I'm going to record it tonight." },
            { who: 'Lena', text: 'Good idea. By the way, if you open the app in Safari, the clusters look strange. It always happens.' },
            { who: 'You', text: "Right. If you use Safari, WebGL works differently. So I'll use Chrome. Unless the client asks for Safari." },
            { who: 'Tom', text: "If the client asks about the delivery estimate, I'll say it's coming next month." },
            { who: 'Arjun', text: "Don't promise a date unless we're sure. If we miss it, they'll be disappointed." },
            { who: 'Tom', text: "Fair point. I'll say 'soon' and send details as soon as we know more." },
            { who: 'Maya', text: "Great. If everything goes well, we'll celebrate on Friday. Pizza is on me." },
          ],
        },
        { kind: 'choice', prompt: 'What will Ken do if staging goes down?', options: ['Restart everything', 'Switch the DNS to the backup', 'Cancel the demo', 'Call the client'], answer: 1 },
        { kind: 'choice', prompt: "What will you do if the map doesn't load?", options: ['Show a recorded video', 'Use Safari', 'Draw on a whiteboard', 'Apologize and stop'], answer: 0 },
        { kind: 'choice', prompt: 'What always happens in Safari?', options: ['The app crashes', 'The clusters look strange', 'Nothing', 'It is faster'], answer: 1 },
        { kind: 'choice', prompt: "What is Arjun's advice?", options: ["Don't promise a date unless we're sure.", 'Promise next week.', 'Say nothing.', 'Show the estimate anyway.'], answer: 0 },
        { kind: 'choice', prompt: 'What will happen if everything goes well?', options: ['A day off', 'A pizza celebration on Friday', 'A bonus', 'A new project'], answer: 1 },
        {
          kind: 'choice',
          prompt: '«**If** staging **goes** down, I**’ll switch**…» — почему после if нет will?',
          options: ['После if в условии используют Present Simple, а will — в результате', 'Это ошибка', 'Это прошедшее время', 'will после if — только в вопросах'],
          answer: 0,
        },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: real conditionals',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Zero Conditional: всегда так',
          body:
            '**If + Present Simple, Present Simple** — общие истины, правила, то, что **всегда происходит**: *If you open it in Safari, the clusters look strange. If you push to main, the pipeline runs.*\n\n' +
            'Здесь *if* можно заменить на *when*: смысл не изменится.',
          examples: ['If you use Safari, WebGL works differently.', 'If the tests fail, the merge button is disabled.', 'If you heat water to 100°C, it boils.'],
        },
        {
          kind: 'theory',
          title: 'First Conditional: реальная возможность в будущем',
          body:
            '**If + Present Simple, will + глагол** описывает конкретную ситуацию в будущем, которая **вполне может случиться**: *If staging goes down, I’ll switch the DNS.*\n\n' +
            'Главное правило: **после if нет will**, даже если по-русски «если упадёт». Говорим *If it goes down*, а не *If it will go down*.\n\n' +
            'Вместо *will* можно поставить модальный глагол или повелительное наклонение: *If you see an error, call me. If we miss it, they might be disappointed.*\n\n' +
            'Части можно менять местами. Если *if* стоит в начале, нужна запятая; если в середине, запятая не нужна: *I’ll switch the DNS if staging goes down.*',
        },
        {
          kind: 'theory',
          title: 'unless, as soon as, when, until, before',
          body:
            '**unless** = *if … not* («если не», «разве что»): *Don’t promise unless we’re sure* (= if we aren’t sure). После unless глагол стоит в утвердительной форме!\n' +
            '**as soon as** — как только: *I’ll send details as soon as we know.*\n' +
            '**when / until / before / after** работают так же: после них **Present**, не will. *I’ll call you when I finish. Wait until the build passes.*',
          table: [
            ['Тип', 'Схема', 'Пример'],
            ['Zero', 'If + Present, Present', 'If you **push**, CI **runs**.'],
            ['First', 'If + Present, will', 'If it **fails**, I**’ll show** the video.'],
            ['unless', 'unless + Present (= if not)', "Don't merge **unless** the tests **pass**."],
            ['time', 'when / as soon as + Present', "I'll ping you **as soon as** it's **done**."],
          ],
          pitfalls: [
            { wrong: 'If it will fail, I will show a video.', right: "If it fails, I'll show a video." },
            { wrong: "Unless you don't hurry, we'll be late.", right: "Unless you hurry, we'll be late.", note: 'unless уже содержит отрицание.' },
            { wrong: 'I will call you when I will finish.', right: "I'll call you when I finish." },
            { wrong: 'As soon as it will be ready…', right: "As soon as it's ready…" },
          ],
        },
        { kind: 'choice', prompt: 'If staging ___ down, Ken will switch the DNS.', options: ['will go', 'goes', 'went', 'go'], answer: 1 },
        { kind: 'choice', prompt: "If the map doesn't load, I ___ the video.", options: ['show', "'ll show", 'showed', 'would show'], answer: 1 },
        { kind: 'choice', prompt: 'If you open the app in Safari, the clusters ___ strange. (всегда)', options: ['will look', 'look', 'looked', 'would look'], answer: 1 },
        { kind: 'choice', prompt: "Don't merge ___ the tests pass.", options: ['if', 'unless', 'when', 'as'], answer: 1 },
        { kind: 'choice', prompt: "I'll send details as soon as we ___ more.", options: ['will know', 'know', 'knew', 'are knowing'], answer: 1 },
        { kind: 'choice', prompt: "We'll be late ___ we leave now.", options: ['if', 'unless', 'when', 'as soon as'], answer: 1 },
        { kind: 'choice', prompt: 'Wait ___ the build finishes, then deploy.', options: ['until', 'unless', 'if', 'while'], answer: 0 },
        { kind: 'gap', text: 'If the client ___ (ask) about the estimate, Tom will answer.', answers: ['asks'] },
        { kind: 'gap', text: "If we miss the date, they ___ (be) disappointed.", answers: ["'ll be", 'will be'] },
        { kind: 'gap', text: "I'll call you when the deploy ___ (finish).", answers: ['finishes'] },
        { kind: 'gap', text: "Don't promise a date ___ you're sure.", answers: ['unless'] },
        { kind: 'gap', text: 'If you press Ctrl+C, the server ___ (stop). It always works like that.', answers: ['stops'] },
        { kind: 'gap', text: 'As ___ as I get access, I’ll start.', answers: ['soon'] },
        { kind: 'gap', text: "If you ___ (not / hurry), you'll miss the train.", answers: ["don't hurry", 'do not hurry'] },
        { kind: 'gap', text: "I won't deploy ___ Lena approves it. (пока не)", answers: ['until', 'unless'] },
        { kind: 'transform', instruction: 'Соедини в First Conditional', source: 'The tests pass. We merge the PR.', answers: ['If the tests pass, we will merge the PR.', "If the tests pass, we'll merge the PR.", "We'll merge the PR if the tests pass.", 'We will merge the PR if the tests pass.'] },
        { kind: 'transform', instruction: 'Перепиши с unless', source: "If you don't fix the config, the app will crash.", answers: ['Unless you fix the config, the app will crash.', "Unless you fix the config, the app'll crash.", 'The app will crash unless you fix the config.'] },
        { kind: 'transform', instruction: 'Перепиши с as soon as', source: 'The build will finish. Then I will tell you.', answers: ["I'll tell you as soon as the build finishes.", 'I will tell you as soon as the build finishes.', "As soon as the build finishes, I'll tell you.", 'As soon as the build finishes, I will tell you.'] },
        { kind: 'fix', sentence: 'If it will rain, we will stay inside.', answers: ["If it rains, we will stay inside.", "If it rains, we'll stay inside."] },
        { kind: 'fix', sentence: "Unless you don't save the file, you'll lose your changes.", answers: ["Unless you save the file, you'll lose your changes.", 'Unless you save the file, you will lose your changes.', "If you don't save the file, you'll lose your changes."] },
        { kind: 'fix', sentence: "I'll start as soon as I will get the keys.", answers: ["I'll start as soon as I get the keys.", 'I will start as soon as I get the keys.'] },
        { kind: 'fix', sentence: 'If you will need help, call me.', answers: ['If you need help, call me.'] },
        { kind: 'fix', sentence: "We'll wait until the tests will pass.", answers: ["We'll wait until the tests pass.", 'We will wait until the tests pass.'] },
        { kind: 'order', words: ['If', 'staging', 'goes', 'down', ',', "I'll", 'switch', 'the', 'DNS', '.'], ru: 'Если staging упадёт, я переключу DNS.' },
        { kind: 'order', words: ["Don't", 'merge', 'unless', 'the', 'tests', 'pass', '.'], ru: 'Не мержи, пока тесты не пройдут.' },
        { kind: 'order', words: ["I'll", 'ping', 'you', 'as', 'soon', 'as', "it's", 'ready', '.'], ru: 'Напишу тебе, как только будет готово.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: risks',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'goes down', ru: 'падает, перестаёт работать', example: 'What if staging goes down?' },
            { chunk: 'backup', ru: 'резервный вариант, копия', example: 'Switch to the backup server.' },
            { chunk: 'recorded video', ru: 'записанное видео', example: "I'll show the recorded video." },
            { chunk: 'risks', ru: 'риски', example: "Let's think about risks." },
            { chunk: 'fair point', ru: 'справедливое замечание', example: "Fair point, I'll be careful." },
            { chunk: 'disappointed', ru: 'разочарованы', example: 'If we miss it, they will be disappointed.' },
            { chunk: 'goes well', ru: 'пройдёт хорошо', example: 'If everything goes well, we celebrate.' },
            { chunk: 'is on me', ru: 'за мой счёт, я угощаю', example: 'Pizza is on me!' },
            { chunk: 'just in case', ru: 'на всякий случай', example: "I'll record a video, just in case." },
            { chunk: 'worst case', ru: 'в худшем случае', example: "Worst case, we'll show screenshots." },
            { chunk: 'promise a date', ru: 'обещать дату', example: "Don't promise a date unless you're sure." },
            { chunk: 'fallback', ru: 'запасной вариант', example: 'The video is our fallback.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['just in case', 'на всякий случай'],
            ['worst case', 'в худшем случае'],
            ['fallback', 'запасной вариант'],
            ['fair point', 'справедливое замечание'],
            ['is on me', 'я угощаю'],
          ],
        },
        { kind: 'gap', text: "I'll bring an extra adapter, just in ___ .", answers: ['case'] },
        { kind: 'gap', text: 'Worst ___ , we postpone the demo by a day.', answers: ['case'] },
        { kind: 'gap', text: 'If the API fails, the cached data is our ___ .', answers: ['fallback'] },
        { kind: 'gap', text: 'Fair ___ . Let’s not promise anything yet.', answers: ['point'] },
        { kind: 'gap', text: 'The coffee is ___ me today!', answers: ['on'] },
        { kind: 'choice', prompt: 'Тебе сделали справедливое замечание. Ответ:', options: ['Fair point.', 'Right point.', 'Just point.', 'Good pointed.'], answer: 0 },
        { kind: 'choice', prompt: '«Сервер упал»:', options: ['The server went down.', 'The server fell.', 'The server dropped down.', 'The server is fallen.'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'What happens if staging goes down?' },
        { kind: 'dictation', text: "If the map doesn't load, I'll show the video." },
        { kind: 'dictation', text: "Don't promise a date unless we're sure." },
        { kind: 'dictation', text: "I'll send details as soon as we know more." },
        { kind: 'dictation', text: "If everything goes well, we'll celebrate." },
        { kind: 'dictation', text: 'Pizza is on me.' },
        { kind: 'dictation', text: "I'll record a video, just in case." },
        { kind: 'dictation', text: "Worst case, we'll show screenshots." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: plan B',
      minutes: 10,
      items: [
        { kind: 'shadow', text: "If staging goes down, I'll switch to the backup." },
        { kind: 'shadow', text: "Don't promise a date unless we're sure." },
        { kind: 'shadow', text: "I'll send the details as soon as we know more." },
        { kind: 'shadow', text: "Worst case, we'll show the recorded video." },
        {
          kind: 'speak',
          situation: 'Назови два риска для своего ближайшего релиза и что ты сделаешь в каждом случае.',
          keywords: ['if', "I'll"],
          sample: "If the migration fails, I'll roll back immediately. If users report bugs, I'll fix them before the weekend.",
        },
        {
          kind: 'speak',
          situation: 'Клиент спрашивает, когда будет фича. Ответь осторожно: не обещай дату, пока не уверен(а), и пообещай написать, как только будет ясно.',
          keywords: ['unless', 'as soon as'],
          sample: "I don't want to promise a date unless we're sure. I'll send you an update as soon as we finish the analysis.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: risk plan',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши «Demo risk plan» для Confluence: 4–5 рисков в формате «If X happens, we’ll do Y». Добавь хотя бы одно unless и одно as soon as.',
          checklist: [
            'First Conditional: *If + Present, will*',
            'Нет will после *if / when / as soon as*',
            'Есть *unless*',
            'Есть *as soon as / when*',
          ],
          minWords: 45,
          sample:
            "Demo risk plan\n1. If staging goes down, Ken will switch the DNS to the backup.\n2. If the map doesn't load, Alex will show the recorded video.\n3. If the client asks about the delivery estimate, Tom will call it a preview. We won't promise a date unless we're sure.\n4. If the Wi-Fi fails, we'll use a phone hotspot.\n5. Tom will send the follow-up email as soon as the demo ends.",
        },
      ],
    },
  ],
};

export default lesson;
