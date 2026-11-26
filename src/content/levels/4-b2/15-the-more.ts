import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-15',
  level: 'B2',
  title: 'Day 75: The more depots, the more risk',
  grammar: 'Advanced comparison: the more… the more, far/much/considerably, by far, twice as… as, getting better and better',
  scene: 'Ты сравниваешь результаты Германии и Польши для квартального отчёта.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: comparing markets',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Quarterly review prep',
          format: 'call',
          lines: [
            { who: 'Tom', text: "How does Germany compare with Poland after the first month?" },
            { who: 'You', text: "Germany is considerably more complex. The depot integrations take twice as long as in Poland." },
            { who: 'Tom', text: "And the drivers?" },
            { who: 'You', text: "German drivers are by far the most active users we've had. They open the app three times as often." },
            { who: 'Maya', text: "What about stability?" },
            { who: 'You', text: "It's getting better and better. Last week we had far fewer incidents than in the first week." },
            { who: 'Arjun', text: "But remember: the more depots we add, the more risk we take with SAP." },
            { who: 'Tom', text: "The client wants ten more depots next month." },
            { who: 'You', text: "Then the sooner we automate the connector setup, the better. Right now it's nowhere near as fast as it should be." },
            { who: 'Maya', text: "Good. Put these comparisons in the report. Numbers speak louder than words." },
          ],
        },
        { kind: 'choice', prompt: 'How much longer do German integrations take?', options: ['The same', 'Twice as long', 'Three times as long', 'Half as long'], answer: 1 },
        { kind: 'choice', prompt: 'How often do German drivers open the app?', options: ['Twice as often', 'Three times as often', 'Less often', 'The same'], answer: 1 },
        { kind: 'choice', prompt: 'How is stability?', options: ['Getting worse', 'Getting better and better', 'The same', 'Terrible'], answer: 1 },
        { kind: 'choice', prompt: "What is Arjun's warning?", options: ['The more depots, the more risk', 'Stop the project', 'Hire more people', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: 'What should be done as soon as possible?', options: ['Automate the connector setup', 'Add a new country', 'Rewrite the app', 'Change the design'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: advanced comparison',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Modifying comparatives',
          body:
            'To show **how big** the difference is, put a modifier before the comparative:\n' +
            '**big difference**: *much, far, a lot, considerably, significantly* → *considerably more complex, far fewer incidents*\n' +
            '**small difference**: *a bit, slightly, a little, marginally* → *slightly faster*\n' +
            'With superlatives: **by far / easily** → *by far the most active users*\n\n' +
            '**Multiples**: *twice as long as, three times as often as, half as fast as*\n**Negative comparison**: *not as fast as / nowhere near as fast as* (much less)\n**Gradual change**: *comparative + and + comparative*: *better and better, more and more stable, faster and faster*',
          table: [
            ['Pattern', 'Example'],
            ['far / much + comparative', '**far fewer** incidents'],
            ['by far + superlative', '**by far the most** active'],
            ['X times as … as', '**twice as long as** in Poland'],
            ['nowhere near as … as', '**nowhere near as fast as** it should be'],
            ['… and …', 'getting **better and better**'],
            ['the + comp., the + comp.', '**The more** depots, **the more** risk.'],
          ],
        },
        {
          kind: 'theory',
          title: 'The more…, the more…',
          body:
            'Two things change together: *The more depots we add, the more risk we take.* *The sooner we automate it, the better.*\n\n' +
            'Structure: **The + comparative (+ subject + verb), the + comparative (+ subject + verb)**. Short forms are common: *The bigger, the better. The sooner, the better.*\n\n' +
            'Remember: *fewer* is for countable nouns (*fewer incidents*), *less* is for uncountable (*less risk, less time*).',
          pitfalls: [
            { wrong: 'More depots we add, more risk we take.', right: 'The more depots we add, the more risk we take.' },
            { wrong: 'very more complex', right: 'much / far more complex' },
            { wrong: 'two times longer as', right: 'twice as long as / two times longer than' },
            { wrong: 'less incidents', right: 'fewer incidents' },
            { wrong: 'by far the more active', right: 'by far the most active' },
          ],
        },
        { kind: 'choice', prompt: 'Germany is ___ more complex than Poland.', options: ['very', 'considerably', 'by far', 'too'], answer: 1 },
        { kind: 'choice', prompt: 'Integrations take ___ in Poland.', options: ['two times as long', 'twice as long as', 'twice longer as', 'double long as'], answer: 1 },
        { kind: 'choice', prompt: 'German drivers are ___ the most active users.', options: ['much', 'by far', 'far', 'very'], answer: 1 },
        { kind: 'choice', prompt: 'Stability is getting ___ .', options: ['better and better', 'more better', 'good and good', 'best and best'], answer: 0 },
        { kind: 'choice', prompt: 'We had ___ incidents last week.', options: ['far less', 'far fewer', 'very fewer', 'much less of'], answer: 1 },
        { kind: 'choice', prompt: '___ depots we add, the more risk we take.', options: ['More', 'The more', 'Most', 'The most'], answer: 1 },
        { kind: 'choice', prompt: 'The sooner we automate it, ___ .', options: ['the better', 'better', 'the best', 'more good'], answer: 0 },
        { kind: 'choice', prompt: "It's ___ as fast as it should be. (much slower)", options: ['nowhere near', 'not much', 'far near', 'by far'], answer: 0 },
        { kind: 'gap', text: 'The new connector is ___ faster than the old one. (slightly)', answers: ['slightly', 'a bit', 'a little'] },
        { kind: 'gap', text: 'German drivers open the app three times as often ___ Polish drivers.', answers: ['as'] },
        { kind: 'gap', text: 'The ___ we test, the fewer bugs we ship.', answers: ['more'] },
        { kind: 'gap', text: 'The app is becoming more ___ more popular.', answers: ['and'] },
        { kind: 'gap', text: 'This is by far the ___ (difficult) integration we have done.', answers: ['most difficult'] },
        { kind: 'gap', text: 'We have ___ time than we thought. (uncountable, smaller amount)', answers: ['less'] },
        { kind: 'gap', text: 'The bigger the depot, the ___ (long) the integration takes.', answers: ['longer'] },
        { kind: 'gap', text: 'Our new CI is ___ as fast as the old one. (2×)', answers: ['twice'] },
        { kind: 'transform', instruction: 'Rewrite with "the more… the more"', source: 'If we add more features, we need more tests.', answers: ['The more features we add, the more tests we need.'] },
        { kind: 'transform', instruction: 'Rewrite with "twice as … as"', source: 'The German integration takes 4 weeks, the Polish one 2 weeks.', answers: ['The German integration takes twice as long as the Polish one.'] },
        { kind: 'transform', instruction: 'Rewrite with "by far"', source: 'No other depot is as big as Hamburg.', answers: ['Hamburg is by far the biggest depot.', 'Hamburg is by far the largest depot.'] },
        { kind: 'transform', instruction: 'Rewrite with "nowhere near as … as"', source: 'The old CI is much slower than the new one.', answers: ['The old CI is nowhere near as fast as the new one.'] },
        { kind: 'fix', sentence: 'More we wait, worse it gets.', answers: ['The more we wait, the worse it gets.', 'The longer we wait, the worse it gets.'] },
        { kind: 'fix', sentence: 'The app is very more stable now.', answers: ['The app is much more stable now.', 'The app is far more stable now.'] },
        { kind: 'fix', sentence: 'We had less incidents this week.', answers: ['We had fewer incidents this week.'] },
        { kind: 'fix', sentence: 'It is by far the more popular feature.', answers: ['It is by far the most popular feature.'] },
        { kind: 'fix', sentence: 'It takes two times as long than before.', answers: ['It takes twice as long as before.', 'It takes two times as long as before.', 'It takes two times longer than before.'] },
        { kind: 'order', words: ['The', 'more', 'depots', ',', 'the', 'more', 'risk', '.'], ru: 'Чем больше депо, тем больше риск.' },
        { kind: 'order', words: ["It's", 'getting', 'better', 'and', 'better', '.'], ru: 'Становится всё лучше и лучше.' },
        { kind: 'order', words: ['The', 'sooner', ',', 'the', 'better', '.'], ru: 'Чем раньше, тем лучше.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: reporting numbers',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'compare with', ru: 'сравнивать с', example: 'How does Germany compare with Poland?' },
            { chunk: 'considerably', ru: 'значительно', example: 'Germany is considerably more complex.' },
            { chunk: 'by far', ru: 'безусловно, с большим отрывом', example: 'This is by far the best result.' },
            { chunk: 'twice as long', ru: 'вдвое дольше', example: 'It takes twice as long.' },
            { chunk: 'far fewer', ru: 'гораздо меньше (исчисл.)', example: 'We had far fewer incidents.' },
            { chunk: 'nowhere near', ru: 'далеко не', example: "It's nowhere near as fast as it should be." },
            { chunk: 'automate', ru: 'автоматизировать', example: 'We should automate the setup.' },
            { chunk: 'quarterly report', ru: 'квартальный отчёт', example: 'Put it in the quarterly report.' },
            { chunk: 'year on year', ru: 'год к году', example: 'Usage grew 40% year on year.' },
            { chunk: 'increase by', ru: 'увеличиться на', example: 'Sessions will increase by 30%.' },
            { chunk: 'drop by', ru: 'упасть на', example: 'Errors can drop by half.' },
            { chunk: 'numbers speak louder than words', ru: 'цифры говорят сами за себя', example: 'Numbers speak louder than words.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['considerably', 'значительно'],
            ['nowhere near', 'далеко не'],
            ['year on year', 'год к году'],
            ['by far', 'с большим отрывом'],
            ['drop by', 'упасть на'],
          ],
        },
        { kind: 'gap', text: 'Errors dropped ___ 60% after the fix.', answers: ['by'] },
        { kind: 'gap', text: 'Revenue grew 25% year on ___ .', answers: ['year'] },
        { kind: 'gap', text: 'How does our app compare ___ the competitor?', answers: ['with', 'to'] },
        { kind: 'gap', text: 'Numbers speak ___ than words.', answers: ['louder'] },
        { kind: 'gap', text: 'We should ___ the connector setup.', answers: ['automate'] },
        { kind: 'choice', prompt: '"Usage increased by 30%" means…', options: ['it grew by 30 percent', 'it is 30% now', 'it fell by 30%', 'nothing changed'], answer: 0 },
        { kind: 'choice', prompt: 'Correct comparison:', options: ['fewer bugs, less time', 'less bugs, fewer time', 'fewer time, less bugs', 'less bugs, less time'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'Germany is considerably more complex than Poland.' },
        { kind: 'dictation', text: 'The integrations take twice as long.' },
        { kind: 'dictation', text: "They are by far the most active users we've had." },
        { kind: 'dictation', text: "It's getting better and better." },
        { kind: 'dictation', text: 'We had far fewer incidents than in the first week.' },
        { kind: 'dictation', text: 'The more depots we add, the more risk we take.' },
        { kind: 'dictation', text: 'The sooner we automate it, the better.' },
        { kind: 'dictation', text: 'Numbers speak louder than words.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: compare with numbers',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'Germany is considerably more complex than Poland.' },
        { kind: 'shadow', text: 'German drivers are by far the most active users.' },
        { kind: 'shadow', text: 'The more depots we add, the more risk we take.' },
        { kind: 'shadow', text: 'The sooner we automate it, the better.' },
        {
          kind: 'speak',
          situation: 'Compare two releases or two products you know, with modifiers and multiples.',
          keywords: ['much', 'twice as', 'by far'],
          sample: "The new version is much faster than the old one. It loads twice as fast on mobile, and the search is by far the most improved feature.",
        },
        {
          kind: 'speak',
          situation: 'Explain a general rule in your work with "the more… the more / the less…".',
          keywords: ['the more', 'the'],
          sample: "The more tests we write, the fewer bugs reach production. And the earlier we involve QA, the less time we spend fixing things later.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: quarterly comparison',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write the "Germany vs Poland" section of the quarterly report. Use at least six advanced comparison structures and numbers.',
          checklist: [
            'Modifiers: *much / far / considerably / slightly*',
            '*by far + superlative*',
            '*twice / three times as … as*',
            '*the more… the more* and *better and better*',
          ],
          minWords: 60,
          sample:
            "Germany vs Poland: first month\nGermany is considerably more complex than Poland: depot integrations take twice as long, mainly because of the old SAP systems. However, German drivers are by far the most active users we have had; they open the app three times as often as Polish drivers. Stability is getting better and better: last week we had far fewer incidents than in week one. Our main concern is scale: the more depots we add, the more risk we take with SAP. The sooner we automate the connector setup, the better.",
        },
      ],
    },
  ],
};

export default lesson;
