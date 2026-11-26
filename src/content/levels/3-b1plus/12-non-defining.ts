import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1p-12',
  level: 'B1+',
  title: 'Day 52: Nina, who joined in autumn, …',
  grammar: 'Non-defining relative clauses, which referring to a whole sentence',
  scene: 'Ты пишешь новостную заметку о driver app для внутреннего блога.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: blog post review',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Blog post draft',
          format: 'doc',
          lines: [
            { who: 'You', text: 'The driver app, which we started in December, is now used by 300 drivers.' },
            { who: 'You', text: "Nina, who joined us as an intern in autumn, built the GPS filter, which fixed the 'jumping driver' bug." },
            { who: 'You', text: 'The first tests took place in Kraków, where Lena spent a week riding with drivers.' },
            { who: 'You', text: 'Drivers can now work offline, which was the most requested feature.' },
            { who: 'Kate', text: "Lovely post! Small thing: 'The app which we started in December' needs commas, because there is only one driver app." },
            { who: 'You', text: "Right. And should I use 'that' anywhere?" },
            { who: 'Kate', text: "Not in these sentences. 'That' can't be used with commas. Also, maybe mention Arjun, whose backend made offline mode possible." },
            { who: 'You', text: "Good idea. I'll add: 'Arjun, whose event bus handles 50,000 events a minute, designed the sync logic.'" },
          ],
        },
        { kind: 'choice', prompt: 'When did the team start the driver app?', options: ['In December', 'In autumn', 'In Kraków', 'Last year'], answer: 0 },
        { kind: 'choice', prompt: 'What did Nina build?', options: ['The GPS filter', 'The backend', 'The design', 'The blog'], answer: 0 },
        { kind: 'choice', prompt: 'Where did Lena spend a week?', options: ['In Kraków, riding with drivers', 'On holiday', 'In Toronto', 'At home'], answer: 0 },
        { kind: 'choice', prompt: 'What was the most requested feature?', options: ['Dark mode', 'Working offline', 'Chat', 'Music'], answer: 1 },
        { kind: 'choice', prompt: "Why can't 'that' be used in these sentences?", options: ["'That' can't be used with commas", "'That' is only for people", "'That' is informal", 'It can be used'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: extra information',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Defining vs non-defining',
          body:
            '**Defining** clauses (B1) tell us **which one** we mean. They are necessary and have **no commas**: *The developer **who built the filter** is Nina.*\n\n' +
            '**Non-defining** clauses add **extra information** about something we already know. If you remove them, the sentence still makes sense. They have **commas**: *Nina, **who joined in autumn**, built the filter.*\n\n' +
            'Rules for non-defining clauses:\n**commas** before (and after) the clause;\n**no "that"**: use *who, which, whose, where, when*;\nthe relative pronoun **can’t be omitted**.\n\n' +
            'They are very common in written English: blogs, reports, documentation.',
          table: [
            ['Defining (which one?)', 'Non-defining (extra info)'],
            ['The app **that** we built crashed.', 'Our app, **which** we built in 2024, crashed.'],
            ['no commas', 'commas'],
            ['that / who / which', 'who / which (never that)'],
            ['pronoun can be dropped (as object)', 'pronoun is always needed'],
          ],
        },
        {
          kind: 'theory',
          title: 'which = "and this" (about a whole sentence)',
          body:
            '**, which** can refer to the **whole previous idea**, not just one noun: *Drivers can now work offline, **which** was the most requested feature.* (= and this fact was…)\n\n' +
            'Very useful for commenting: *The tests passed, which was a surprise. The client paid on time, which is rare.*\n\n' +
            'Don’t use *what* here: *…, what was a surprise* is a typical mistake.',
          pitfalls: [
            { wrong: 'The driver app, that we started in December, is popular.', right: 'The driver app, which we started in December, is popular.' },
            { wrong: 'Nina who joined in autumn built the filter.', right: 'Nina, who joined in autumn, built the filter.' },
            { wrong: 'The tests passed, what was a surprise.', right: 'The tests passed, which was a surprise.' },
            { wrong: 'Arjun, his backend is fast, designed the sync.', right: 'Arjun, whose backend is fast, designed the sync.' },
          ],
        },
        { kind: 'choice', prompt: 'The driver app, ___ we started in December, is used by 300 drivers.', options: ['that', 'which', 'what', 'who'], answer: 1 },
        { kind: 'choice', prompt: 'Nina, ___ joined in autumn, built the filter.', options: ['which', 'that', 'who', 'whose'], answer: 2 },
        { kind: 'choice', prompt: 'Drivers can work offline, ___ was the most requested feature.', options: ['what', 'that', 'which', 'it'], answer: 2 },
        { kind: 'choice', prompt: 'Arjun, ___ backend made offline mode possible, designed the sync.', options: ['who', "who's", 'whose', 'which'], answer: 2 },
        { kind: 'choice', prompt: 'The tests took place in Kraków, ___ Lena spent a week.', options: ['which', 'where', 'when', 'that'], answer: 1 },
        { kind: 'choice', prompt: 'Which sentence needs commas?', options: ['The person who wrote this is Ken.', 'My manager who is called Maya is great.', 'The app that crashed was old.', 'The day when we launched was cold.'], answer: 1, explain: 'You have only one manager, so it is extra information: *My manager, who is called Maya, is great.*' },
        { kind: 'choice', prompt: 'The client paid on time, ___ is quite rare.', options: ['that', 'what', 'which', 'it'], answer: 2 },
        { kind: 'gap', text: 'Kraków, ___ our first pilot started, is a big city.', answers: ['where'] },
        { kind: 'gap', text: 'Maya, ___ has managed the team for three years, is on holiday.', answers: ['who'] },
        { kind: 'gap', text: 'The release was delayed, ___ annoyed the client.', answers: ['which'] },
        { kind: 'gap', text: 'Sofia, ___ designs are loved by drivers, won an award.', answers: ['whose'] },
        { kind: 'gap', text: 'In March, ___ the client has its annual meeting, we will present the app.', answers: ['when'] },
        { kind: 'gap', text: 'Our CI, ___ used to take 25 minutes, now takes 8.', answers: ['which'] },
        { kind: 'gap', text: 'Lena tested it on ten devices, ___ took two days.', answers: ['which'] },
        { kind: 'transform', instruction: 'Join with a non-defining clause (who)', source: 'Arjun designed the sync logic. Arjun has worked here for five years.', answers: ['Arjun, who has worked here for five years, designed the sync logic.'] },
        { kind: 'transform', instruction: 'Join with a non-defining clause (which)', source: 'The light mode is now default. It was released in autumn.', answers: ['The light mode, which was released in autumn, is now default.'] },
        { kind: 'transform', instruction: "Comment on the whole sentence with ', which'", source: 'The demo went perfectly. That surprised everyone.', answers: ['The demo went perfectly, which surprised everyone.'] },
        { kind: 'transform', instruction: 'Join with whose', source: 'Ken fixed the outage. His phone was on silent.', answers: ['Ken, whose phone was on silent, fixed the outage.'] },
        { kind: 'fix', sentence: 'React Native, that we chose in December, works well.', answers: ['React Native, which we chose in December, works well.'] },
        { kind: 'fix', sentence: 'The build failed again, what made Arjun angry.', answers: ['The build failed again, which made Arjun angry.'] },
        { kind: 'fix', sentence: 'Tom, he is our PM, will join the call.', answers: ['Tom, who is our PM, will join the call.'] },
        { kind: 'fix', sentence: 'Lena, who her tests found the bug, got a bonus.', answers: ['Lena, whose tests found the bug, got a bonus.'] },
        { kind: 'fix', sentence: 'Kraków which is in Poland has many depots.', answers: ['Kraków, which is in Poland, has many depots.'] },
        { kind: 'order', words: ['Nina', ',', 'who', 'joined', 'in', 'autumn', ',', 'built', 'it', '.'], ru: 'Nina, которая пришла осенью, сделала это.' },
        { kind: 'order', words: ['The', 'tests', 'passed', ',', 'which', 'was', 'a', 'surprise', '.'], ru: 'Тесты прошли, что было сюрпризом.' },
        { kind: 'order', words: ['Kraków', ',', 'where', 'we', 'tested', 'it', ',', 'is', 'big', '.'], ru: 'Краков, где мы это тестировали, большой.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: writing news',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'blog post', ru: 'пост в блоге', example: 'I wrote a blog post about the app.' },
            { chunk: 'took place', ru: 'состоялся, прошёл', example: 'The first tests took place in Kraków.' },
            { chunk: 'most requested feature', ru: 'самая запрашиваемая функция', example: 'Offline mode was the most requested feature.' },
            { chunk: 'made it possible', ru: 'сделал это возможным', example: 'His backend made it possible.' },
            { chunk: 'riding with drivers', ru: 'ездить с водителями', example: 'Lena spent a week riding with drivers.' },
            { chunk: 'handles', ru: 'обрабатывает', example: 'It handles 50,000 events a minute.' },
            { chunk: 'milestone reached', ru: 'веха достигнута', example: 'Milestone reached: 300 drivers!' },
            { chunk: 'shout-out', ru: 'благодарность (публичная)', example: 'Big shout-out to Nina!' },
            { chunk: 'behind the scenes', ru: 'за кулисами', example: 'Here is what happened behind the scenes.' },
            { chunk: 'lovely', ru: 'прекрасный, милый', example: 'Lovely post!' },
            { chunk: 'is now used by', ru: 'теперь используется', example: 'The app is now used by 300 drivers.' },
            { chunk: 'feedback from', ru: 'отзывы от', example: 'Feedback from drivers is very positive.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['shout-out', 'публичная благодарность'],
            ['behind the scenes', 'за кулисами'],
            ['took place', 'состоялся'],
            ['lovely', 'прекрасный'],
            ['handle', 'обрабатывать'],
          ],
        },
        { kind: 'gap', text: 'Big ___ -out to Lena for the field testing!', answers: ['shout'] },
        { kind: 'gap', text: 'The workshop took ___ in Warsaw.', answers: ['place'] },
        { kind: 'gap', text: 'Here is what happened behind the ___ .', answers: ['scenes'] },
        { kind: 'gap', text: 'His work made offline mode ___ .', answers: ['possible'] },
        { kind: 'gap', text: 'The app is now ___ by 300 drivers.', answers: ['used'] },
        { kind: 'choice', prompt: 'Good start of an internal news post:', options: ['Big news: the driver app, which we started in December, now has 300 users!', 'hi. app. users.', 'NEWS!!!!!!', 'Nothing new.'], answer: 0 },
        { kind: 'choice', prompt: 'Thanking someone publicly in Slack:', options: ['Big shout-out to Nina for the GPS filter!', 'Nina, thanks I guess.', 'Nina did a thing.', 'OK.'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'The driver app, which we started in December, is now used by 300 drivers.' },
        { kind: 'dictation', text: 'Nina, who joined us in autumn, built the GPS filter.' },
        { kind: 'dictation', text: 'Drivers can now work offline, which was the most requested feature.' },
        { kind: 'dictation', text: 'The first tests took place in Kraków.' },
        { kind: 'dictation', text: 'Arjun, whose backend made it possible, designed the sync.' },
        {
          kind: 'theory',
          title: 'Hearing the commas',
          body: 'In speech, commas around a non-defining clause sound like **small pauses** and a slightly **lower, faster voice**: *Nina | who joined in autumn | built the filter.* When you read your blog post aloud, make those pauses. It helps listeners follow you.',
        },
        { kind: 'dictation', text: 'The tests passed, which was a surprise.' },
        { kind: 'dictation', text: 'Big shout-out to Lena!' },
        { kind: 'dictation', text: 'Here is what happened behind the scenes.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: add extra information',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'The driver app, which we started in December, now has 300 users.' },
        { kind: 'shadow', text: 'Nina, who joined us in autumn, built the GPS filter.' },
        { kind: 'shadow', text: 'Drivers can now work offline, which was the most requested feature.' },
        { kind: 'shadow', text: 'Big shout-out to Lena, whose field tests found three bugs.' },
        {
          kind: 'speak',
          situation: 'Introduce two people from your team to a new colleague, adding extra information with who / whose.',
          keywords: [', who', 'whose'],
          sample: "This is Arjun, who leads our backend. And this is Sofia, whose designs you've probably seen in the app.",
        },
        {
          kind: 'speak',
          situation: 'Tell some news about your project and comment on it with ", which…".',
          keywords: ['which'],
          sample: "We finished the migration two days early, which was a nice surprise. The CI is now twice as fast, which makes everyone happy.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: internal news post',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a short internal blog post about the driver app milestone (300 drivers). Thank at least three people and add extra information with non-defining clauses.',
          checklist: [
            'Commas around non-defining clauses',
            '*who / which / whose / where* (no *that*)',
            'At least one *, which* about a whole sentence',
            'A friendly, positive tone',
          ],
          minWords: 60,
          sample:
            "Milestone reached: 300 drivers!\nThe driver app, which we started in December, is now used by 300 drivers in Kraków and Warsaw. Nina, who joined us as an intern in autumn, built the GPS filter, which fixed the famous 'jumping driver' bug. The first tests took place in Kraków, where Lena spent a week riding with drivers. Arjun, whose event bus handles 50,000 events a minute, designed the sync logic. Drivers can now work offline, which was their most requested feature. Big shout-out to the whole team!",
        },
      ],
    },
  ],
};

export default lesson;
