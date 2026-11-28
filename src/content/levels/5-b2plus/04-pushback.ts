import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2p-04',
  level: 'B2+',
  title: "Day 89: I'm not comfortable committing to that",
  grammar: 'Pushing back on estimates: tentative refusal, offering options, anchoring with data',
  scene: 'Директор по продукту хочет запуск Австрии через 4 недели. Реалистично — 8.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the impossible date',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Call with the Product Director',
          format: 'call',
          lines: [
            { who: 'Tom', text: "The board wants Austria live in four weeks. The platform is ready, so it's just configuration, right?" },
            { who: 'You', text: "I can see why it looks that way. But I'm not comfortable committing to four weeks. Based on Germany, each depot integration takes about two weeks, and Austria has six depots." },
            { who: 'Tom', text: "Can't you just put more people on it?" },
            { who: 'You', text: "Adding people would help a little, but not much. The bottleneck is the depots' IT teams, not ours. Realistically, we're looking at eight weeks." },
            { who: 'Tom', text: "Eight weeks is too long. The board won't accept that." },
            { who: 'You', text: "I understand. Let me suggest some options. Option one: we launch two depots in four weeks and the rest by week eight. Option two: all six in eight weeks. Option three: four weeks for all, but with manual data imports, which carries a high risk." },
            { who: 'Tom', text: "Option one sounds interesting. What would you need from us?" },
            { who: 'You', text: "Two things: the depot contacts by Friday, and a decision on option one by Monday. If we get those, I'm confident we can hit the four-week date for two depots." },
            { who: 'Tom', text: "OK, let me take this back to the board." },
          ],
        },
        { kind: 'choice', prompt: 'What does the board want?', options: ['Austria live in four weeks', 'Austria in a year', 'No Austria', 'Germany again'], answer: 0 },
        { kind: 'choice', prompt: 'What is the bottleneck?', options: ["The depots' IT teams", 'Our developers', 'The servers', 'Money'], answer: 0 },
        { kind: 'choice', prompt: 'What is a realistic time for all depots?', options: ['Four weeks', 'Six weeks', 'Eight weeks', 'Two weeks'], answer: 2 },
        { kind: 'choice', prompt: 'What is option one?', options: ['Two depots in four weeks, the rest by week eight', 'All in four weeks', 'Nothing', 'All in two weeks'], answer: 0 },
        { kind: 'choice', prompt: 'What do you need from Tom?', options: ['Depot contacts by Friday and a decision by Monday', 'More money', 'A new team', 'Nothing'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Language: saying no without saying no',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'The pushback formula',
          body:
            'A senior engineer rarely says a flat "No". Instead:\n' +
            '1. **Acknowledge** the goal: *I can see why it looks that way. / I understand the pressure.*\n' +
            '2. **State your position** tentatively: *I’m not comfortable committing to… / I don’t think that’s realistic.*\n' +
            '3. **Anchor with data**: *Based on Germany, each integration takes two weeks.*\n' +
            '4. **Offer options** with trade-offs: *Option one… Option two… Option three, which carries a high risk.*\n' +
            '5. **State your conditions**: *If we get X by Friday, I’m confident we can…*',
          table: [
            ['Step', 'Phrases'],
            ['acknowledge', 'I can see why… / I understand the pressure. / I appreciate the urgency.'],
            ['position', "I'm not comfortable committing to… / I don't think that's realistic. / Realistically, we're looking at…"],
            ['data', 'Based on… / Our experience with… shows… / The numbers suggest…'],
            ['options', 'Let me suggest some options. / What we could do is… / One alternative would be…'],
            ['conditions', "If we get…, I'm confident we can… / That depends on…"],
          ],
        },
        {
          kind: 'theory',
          title: 'Grammar notes',
          body:
            '**commit to + -ing / noun**: *I’m not comfortable committing **to** four weeks.* (to is a preposition)\n**Realistically, we’re looking at + period**: *we’re looking at eight weeks.*\n**would** for hypothetical options: *Adding people would help a little.*\n**which carries a risk** — non-defining relative clause commenting on the whole option.',
          pitfalls: [
            { wrong: "I'm not comfortable to commit four weeks.", right: "I'm not comfortable committing to four weeks." },
            { wrong: 'We look at eight weeks.', right: "Realistically, we're looking at eight weeks." },
            { wrong: 'Add more people will help a little.', right: 'Adding more people would help a little.' },
            { wrong: 'No. Impossible.', right: "I don't think that's realistic. Let me suggest some options." },
          ],
        },
        { kind: 'choice', prompt: 'Best pushback opening:', options: ["I can see why it looks that way, but I'm not comfortable committing to four weeks.", 'No way.', 'Are you crazy?', 'Fine, whatever.'], answer: 0 },
        { kind: 'choice', prompt: "I'm not comfortable ___ to four weeks.", options: ['to commit', 'committing', 'commit', 'committed'], answer: 1 },
        { kind: 'choice', prompt: "Realistically, we're ___ eight weeks.", options: ['looking at', 'looking for', 'seeing', 'watching'], answer: 0 },
        { kind: 'choice', prompt: '___ Germany, each integration takes two weeks.', options: ['Based on', 'Base of', 'Basing', 'On base'], answer: 0 },
        { kind: 'choice', prompt: 'Adding people ___ help a little, but not much.', options: ['will', 'would', 'is', 'was'], answer: 1 },
        { kind: 'choice', prompt: 'Option three is faster, ___ a high risk.', options: ['which carries', 'that carries it', 'what carries', 'who carries'], answer: 0 },
        { kind: 'choice', prompt: 'If we get the contacts by Friday, ___ hit the date.', options: ["I'm confident we can", 'we hit maybe', 'we would hit', 'we will hit surely'], answer: 0 },
        { kind: 'choice', prompt: 'Why give options?', options: ['So the decision maker can choose a trade-off', 'To confuse them', 'To delay', 'To avoid work'], answer: 0 },
        { kind: 'gap', text: 'I understand the ___ , but four weeks is not realistic. (urgency / pressure)', answers: ['pressure', 'urgency'] },
        { kind: 'gap', text: 'Let me ___ some options.', answers: ['suggest'] },
        { kind: 'gap', text: 'One ___ would be a phased launch.', answers: ['alternative', 'option'] },
        { kind: 'gap', text: 'That ___ on how fast the depots respond.', answers: ['depends'] },
        { kind: 'gap', text: 'The bottleneck is their IT teams, ___ ours.', answers: ['not'] },
        { kind: 'gap', text: 'Our experience with Germany ___ that two weeks per depot is realistic.', answers: ['shows', 'suggests'] },
        { kind: 'gap', text: "Let me take this ___ to the board.", answers: ['back'] },
        { kind: 'transform', instruction: 'Rewrite as a professional pushback', source: "No, we can't do it in four weeks.", answers: ["I'm not comfortable committing to four weeks.", "I don't think four weeks is realistic.", "I'm not comfortable committing to four weeks. Realistically, we're looking at eight weeks."] },
        { kind: 'transform', instruction: 'Anchor with data (Based on…)', source: 'It will take two weeks per depot. (We know this from Germany.)', answers: ['Based on Germany, each depot takes about two weeks.', 'Based on Germany, it will take two weeks per depot.', 'Based on our experience in Germany, each depot takes two weeks.'] },
        { kind: 'transform', instruction: 'State a condition with confidence', source: 'Send us the contacts by Friday and we will make it.', answers: ["If we get the contacts by Friday, I'm confident we can make it.", "If we get the contacts by Friday, I'm confident we can hit the date."] },
        { kind: 'fix', sentence: "I'm not comfortable to commit to that.", answers: ["I'm not comfortable committing to that."] },
        { kind: 'fix', sentence: 'Realistically, we look at six weeks.', answers: ["Realistically, we're looking at six weeks.", 'Realistically, we are looking at six weeks.'] },
        { kind: 'fix', sentence: 'Base on our data, it takes two weeks.', answers: ['Based on our data, it takes two weeks.'] },
        { kind: 'fix', sentence: 'Add more people would not help.', answers: ['Adding more people would not help.', "Adding more people wouldn't help."] },
        { kind: 'fix', sentence: 'Let me suggest you some options.', answers: ['Let me suggest some options.'] },
        { kind: 'order', words: ["I'm", 'not', 'comfortable', 'committing', 'to', 'that', '.'], ru: 'Я не готов брать на себя такое обязательство.' },
        { kind: 'order', words: ['Realistically', ',', "we're", 'looking', 'at', 'eight', 'weeks', '.'], ru: 'Реально — восемь недель.' },
        { kind: 'order', words: ['Let', 'me', 'suggest', 'some', 'options', '.'], ru: 'Позвольте предложить варианты.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: estimates and commitments',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'commit to', ru: 'взять обязательство', example: "I can't commit to four weeks." },
            { chunk: 'realistically', ru: 'реально, по-честному', example: "Realistically, it's eight weeks." },
            { chunk: 'anchor', ru: 'опорная точка (в переговорах)', example: 'Use data as an anchor.' },
            { chunk: 'phased launch', ru: 'поэтапный запуск', example: 'A phased launch reduces risk.' },
            { chunk: "Brooks's law", ru: 'закон Брукса', example: "Brooks's law: adding people to a late project makes it later." },
            { chunk: 'manual data imports', ru: 'ручной импорт данных', example: 'Manual data imports are risky.' },
            { chunk: 'take this back to', ru: 'передать это обратно (на обсуждение)', example: 'Let me take this back to the board.' },
            { chunk: 'push back', ru: 'возражать', example: 'Good leads push back with data.' },
            { chunk: 'confidence level', ru: 'уровень уверенности', example: 'Our confidence level is 80%.' },
            { chunk: 'padding', ru: 'запас в оценке', example: 'Add some padding to the estimate.' },
            { chunk: 'overcommit', ru: 'взять на себя слишком много', example: "Don't overcommit the team." },
            { chunk: 'it\'s just configuration', ru: 'это просто настройка', example: "He thought it's just configuration." },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['overcommit', 'взять слишком много'],
            ['padding', 'запас в оценке'],
            ['push back', 'возражать'],
            ['anchor', 'опорная точка'],
            ['confidence level', 'уровень уверенности'],
          ],
        },
        { kind: 'gap', text: "Don't ___ the team. We have only four people.", answers: ['overcommit'] },
        { kind: 'gap', text: 'Our ___ level for eight weeks is about 80%.', answers: ['confidence'] },
        { kind: 'gap', text: 'Good leads push ___ with data, not emotions.', answers: ['back'] },
        { kind: 'gap', text: 'Let me take this ___ to the team and confirm.', answers: ['back'] },
        { kind: 'gap', text: 'Add some ___ for testing and holidays.', answers: ['padding'] },
        { kind: 'choice', prompt: "Brooks's law says…", options: ['adding people to a late project makes it later', 'more people is always faster', 'deadlines are optional', 'never estimate'], answer: 0 },
        { kind: 'choice', prompt: 'The most professional reaction to an unrealistic deadline:', options: ['Acknowledge, show data, offer options with trade-offs', 'Agree and work nights', 'Refuse and leave', 'Say nothing'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "I'm not comfortable committing to four weeks." },
        { kind: 'dictation', text: 'Based on Germany, each integration takes about two weeks.' },
        { kind: 'dictation', text: "The bottleneck is the depots' IT teams, not ours." },
        { kind: 'dictation', text: "Realistically, we're looking at eight weeks." },
        { kind: 'dictation', text: 'Let me suggest some options.' },
        { kind: 'dictation', text: 'Option three carries a high risk.' },
        { kind: 'dictation', text: "If we get those, I'm confident we can hit the date." },
        { kind: 'dictation', text: 'Let me take this back to the board.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: push back professionally',
      minutes: 12,
      items: [
        { kind: 'shadow', text: "I can see why it looks that way, but I'm not comfortable committing to four weeks." },
        { kind: 'shadow', text: "Based on Germany, realistically, we're looking at eight weeks." },
        { kind: 'shadow', text: 'Let me suggest some options, each with a different trade-off.' },
        { kind: 'shadow', text: "If we get the contacts by Friday, I'm confident we can hit the date." },
        {
          kind: 'speak',
          situation: 'Your manager asks for a feature by Friday. It needs two weeks. Push back with the formula: acknowledge, position, data, options.',
          keywords: ["I'm not comfortable", 'based on', 'options'],
          sample: "I understand it's urgent, but I'm not comfortable committing to Friday. Based on similar features, it takes about two weeks. Let me suggest two options: a simple version by Friday, or the full feature in two weeks.",
        },
        {
          kind: 'speak',
          situation: 'Someone suggests "just add more developers". Explain why it won\'t help much.',
          keywords: ['would help', 'bottleneck'],
          sample: "More developers would help a little, but the bottleneck is the external API, not our code. New people would also need a week of onboarding.",
        },
        {
          kind: 'speak',
          situation: 'Close the negotiation: state your conditions and the next step.',
          keywords: ['if we get', 'confident'],
          sample: "If we get the final designs by Wednesday and a decision on scope today, I'm confident we can deliver the first version in two weeks.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: options memo',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a short options memo for the board about the Austria launch: the request, your realistic estimate with data, three options with trade-offs, your recommendation and conditions.',
          checklist: [
            'Acknowledge the goal',
            'Data-based estimate (*Based on…*)',
            'Three options with risks',
            'Recommendation + conditions (*If we get…*)',
          ],
          minWords: 80,
          sample:
            "Austria launch: options\nRequest: go live in all six Austrian depots within four weeks. We understand the urgency; however, based on our experience in Germany, each depot integration takes about two weeks, mainly because of the depots' IT teams. Realistically, a full launch requires eight weeks.\nOption 1: two depots in four weeks, the remaining four by week eight (recommended).\nOption 2: all six depots in eight weeks.\nOption 3: all six in four weeks with manual data imports, which carries a high risk of errors.\nConditions: if we receive the depot contacts by Friday and a decision by Monday, we are confident we can deliver Option 1 on time.",
        },
      ],
    },
  ],
};

export default lesson;
