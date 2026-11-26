import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-19',
  level: 'B2',
  title: 'Day 79: What if we dropped the reports?',
  grammar: 'Negotiation language: tentative suggestions, conditions, trade-offs (would / could / if we were to…)',
  scene: 'Клиент хочет ещё 5 функций в тот же срок. Ты договариваешься о скоупе.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: scope negotiation',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Negotiation with Anna',
          format: 'call',
          lines: [
            { who: 'Client', text: "Our board wants five more features by the end of the quarter: chat, photo proof, reports, ratings and dark mode." },
            { who: 'You', text: "I understand the pressure. To be honest, delivering all five by then wouldn't be realistic without hurting quality." },
            { who: 'Client', text: "Which ones could you do?" },
            { who: 'You', text: "If we were to focus on photo proof and chat, we could deliver both by the deadline. They have the biggest impact on drivers." },
            { who: 'Client', text: "And the reports? The board loves reports." },
            { who: 'You', text: "What if we provided a simple CSV export now and full reports next quarter? That way the board gets data, and we keep the timeline." },
            { who: 'Client', text: "Hmm. And ratings and dark mode?" },
            { who: 'You', text: "Those would have to wait, I'm afraid. Unless, of course, you'd be open to extending the budget for a second team." },
            { who: 'Client', text: "That's unlikely this year. OK, I could live with photo proof, chat and a CSV export. Would you be able to confirm that in writing?" },
            { who: 'You', text: "Absolutely. I'll send a summary today, and we can review it together on Monday." },
          ],
        },
        { kind: 'choice', prompt: 'How many features does the board want?', options: ['Two', 'Three', 'Five', 'Ten'], answer: 2 },
        { kind: 'choice', prompt: 'Which two can be delivered by the deadline?', options: ['Photo proof and chat', 'Ratings and dark mode', 'Reports and ratings', 'All five'], answer: 0 },
        { kind: 'choice', prompt: 'What is your offer for reports?', options: ['A CSV export now, full reports next quarter', 'No reports ever', 'Full reports now', 'Reports instead of chat'], answer: 0 },
        { kind: 'choice', prompt: 'What could make ratings and dark mode possible?', options: ['A bigger budget for a second team', 'Working at night', 'Skipping tests', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: 'What is the final agreement?', options: ['Photo proof, chat and a CSV export', 'All five features', 'Nothing', 'Only dark mode'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: tentative language for negotiation',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Sounding flexible but firm',
          body:
            'In negotiation, **tentative** (hypothetical) language makes offers sound like options, not demands. It keeps the conversation open.\n\n' +
            '**would / could** instead of *will / can*: *That **wouldn’t** be realistic. We **could** deliver both.*\n' +
            '**If we were to + infinitive** — a very polite, hypothetical condition: ***If we were to focus** on two features, we could…*\n' +
            '**What if we + past** — a soft suggestion: ***What if we provided** a CSV export?*\n' +
            '**Would you be open to / willing to…?** — testing the other side: *Would you be open to extending the budget?*\n' +
            '**Unless** — exception: *Those would have to wait, **unless** you extended the budget.*',
          table: [
            ['Direct', 'Tentative'],
            ["We can't do all five.", "Delivering all five **wouldn't be** realistic."],
            ['We will do two.', '**If we were to** focus on two, we **could** deliver both.'],
            ['Take a CSV export.', '**What if we provided** a CSV export?'],
            ['Pay for a second team.', '**Would you be open to** extending the budget?'],
            ['Agreed.', 'I **could live with** that.'],
          ],
        },
        {
          kind: 'theory',
          title: 'Trade-offs and conditions',
          body:
            '*That way, …* — explaining the benefit of your offer.\n*In return / In exchange, …* — what you ask for.\n*As long as / Provided that…* — your condition.\n*I’m afraid … would have to wait.* — a polite "no".\n*Let’s meet halfway.* — compromise.\n\n' +
            'Remember the grammar of the hypothetical: *If we were to focus…, we would/could…* (both parts hypothetical).',
          pitfalls: [
            { wrong: 'If we would focus on two, we could deliver.', right: 'If we were to focus on two, we could deliver. / If we focused…' },
            { wrong: 'What if we provide a CSV export? (very direct)', right: 'What if we provided a CSV export? (softer)' },
            { wrong: 'Would you be open to extend the budget?', right: 'Would you be open to extending the budget?' },
            { wrong: 'I could live that.', right: 'I could live with that.' },
          ],
        },
        { kind: 'choice', prompt: 'Delivering all five ___ realistic.', options: ["won't be", "wouldn't be", "isn't to be", "not would be"], answer: 1 },
        { kind: 'choice', prompt: 'If we ___ focus on two features, we could deliver both.', options: ['would', 'were to', 'will', 'are to'], answer: 1 },
        { kind: 'choice', prompt: 'What if we ___ a CSV export now?', options: ['provide will', 'provided', 'would provide to', 'providing'], answer: 1 },
        { kind: 'choice', prompt: 'Would you be open to ___ the budget?', options: ['extend', 'extending', 'extended', 'to extend'], answer: 1 },
        { kind: 'choice', prompt: 'Those features would have to wait, ___ you extended the budget.', options: ['if', 'unless', 'provided', 'because'], answer: 1 },
        { kind: 'choice', prompt: 'I could live ___ that.', options: ['with', 'by', 'on', '— (nothing)'], answer: 0 },
        { kind: 'choice', prompt: '___ way, the board gets data, and we keep the timeline.', options: ['That', 'This the', 'Such', 'So'], answer: 0 },
        { kind: 'choice', prompt: 'A polite "no" in negotiation:', options: ["I'm afraid that would have to wait.", 'No way.', 'Forget it.', 'Impossible, stop asking.'], answer: 0 },
        { kind: 'gap', text: 'If we were ___ add chat, we would need two more weeks.', answers: ['to'] },
        { kind: 'gap', text: 'What ___ we moved dark mode to the next quarter?', answers: ['if'] },
        { kind: 'gap', text: 'We ___ deliver both by the deadline. (possibility, tentative)', answers: ['could'] },
        { kind: 'gap', text: 'Would you be ___ to a phased delivery? (willing)', answers: ['open'] },
        { kind: 'gap', text: "Let's meet ___ : three features now, two next quarter.", answers: ['halfway'] },
        { kind: 'gap', text: 'In ___ , we would need the designs by Friday.', answers: ['return', 'exchange'] },
        { kind: 'gap', text: "Ratings would have to wait, I'm ___ .", answers: ['afraid'] },
        { kind: 'transform', instruction: 'Make it tentative with "wouldn\'t"', source: "We can't deliver everything by June.", answers: ["Delivering everything by June wouldn't be realistic.", "It wouldn't be realistic to deliver everything by June.", "We wouldn't be able to deliver everything by June."] },
        { kind: 'transform', instruction: 'Rewrite with "If we were to…"', source: 'If we skip reports, we can deliver chat.', answers: ['If we were to skip reports, we could deliver chat.'] },
        { kind: 'transform', instruction: 'Rewrite as a soft suggestion with "What if…"', source: 'Let\'s release dark mode later.', answers: ['What if we released dark mode later?'] },
        { kind: 'transform', instruction: 'Ask with "Would you be open to…"', source: 'Can you accept a later deadline?', answers: ['Would you be open to a later deadline?', 'Would you be open to accepting a later deadline?'] },
        { kind: 'fix', sentence: 'If we would focus on chat, we could finish.', answers: ['If we were to focus on chat, we could finish.', 'If we focused on chat, we could finish.'] },
        { kind: 'fix', sentence: 'Would you be open to move the deadline?', answers: ['Would you be open to moving the deadline?'] },
        { kind: 'fix', sentence: 'I could live that compromise.', answers: ['I could live with that compromise.'] },
        { kind: 'fix', sentence: 'What if we will drop ratings?', answers: ['What if we dropped ratings?', 'What if we drop ratings?'] },
        { kind: 'fix', sentence: 'If we were focus on two, we could deliver.', answers: ['If we were to focus on two, we could deliver.'] },
        { kind: 'order', words: ['What', 'if', 'we', 'provided', 'a', 'CSV', 'export', '?'], ru: 'А что если мы сделаем экспорт в CSV?' },
        { kind: 'order', words: ['I', 'could', 'live', 'with', 'that', '.'], ru: 'Меня это устроит.' },
        { kind: 'order', words: ['Would', 'you', 'be', 'open', 'to', 'that', '?'], ru: 'Вы были бы готовы к этому?' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: scope and negotiation',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'scope', ru: 'объём работ', example: "Let's agree on the scope." },
            { chunk: 'scope creep', ru: 'расползание требований', example: 'Five new features is scope creep.' },
            { chunk: 'photo proof', ru: 'фото-подтверждение (доставки)', example: 'Photo proof is the top priority.' },
            { chunk: 'hurting quality', ru: 'в ущерб качеству', example: 'Not without hurting quality.' },
            { chunk: 'biggest impact', ru: 'наибольший эффект', example: 'Chat has the biggest impact.' },
            { chunk: 'keep the timeline', ru: 'сохранить сроки', example: 'This way we keep the timeline.' },
            { chunk: 'meet halfway', ru: 'пойти на компромисс', example: "Let's meet halfway." },
            { chunk: 'in writing', ru: 'письменно', example: 'Please confirm it in writing.' },
            { chunk: 'nice-to-have', ru: 'желательно, но не обязательно', example: 'Dark mode is a nice-to-have.' },
            { chunk: 'must-have', ru: 'обязательное', example: 'Photo proof is a must-have.' },
            { chunk: 'MVP', ru: 'минимально жизнеспособный продукт', example: 'Reports are not part of the MVP.' },
            { chunk: 'push back on', ru: 'возразить, не согласиться с', example: 'I had to push back on the deadline.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['scope creep', 'расползание требований'],
            ['nice-to-have', 'желательно, но не обязательно'],
            ['must-have', 'обязательное'],
            ['meet halfway', 'пойти на компромисс'],
            ['push back on', 'возразить'],
          ],
        },
        { kind: 'gap', text: 'Ratings are a nice-to-___ , not a must-have.', answers: ['have'] },
        { kind: 'gap', text: 'Adding features every week is classic scope ___ .', answers: ['creep'] },
        { kind: 'gap', text: 'Could you confirm the agreement in ___ ?', answers: ['writing'] },
        { kind: 'gap', text: 'I had to push ___ on the new deadline.', answers: ['back'] },
        { kind: 'gap', text: 'Chat has the biggest ___ on drivers.', answers: ['impact'] },
        { kind: 'choice', prompt: 'MoSCoW prioritisation means…', options: ['Must have, Should have, Could have, Won’t have', 'Moscow office tasks', 'Monday-Sunday-Work', 'a type of database'], answer: 0 },
        { kind: 'choice', prompt: 'A good negotiation move:', options: ['Offer options with clear trade-offs', 'Say yes to everything', 'Say no to everything', 'Stop answering emails'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "Delivering all five wouldn't be realistic without hurting quality." },
        { kind: 'dictation', text: 'If we were to focus on photo proof and chat, we could deliver both.' },
        { kind: 'dictation', text: 'What if we provided a simple CSV export now?' },
        { kind: 'dictation', text: "That way the board gets data, and we keep the timeline." },
        { kind: 'dictation', text: "Those would have to wait, I'm afraid." },
        { kind: 'dictation', text: "Would you be open to extending the budget?" },
        { kind: 'dictation', text: 'I could live with that.' },
        { kind: 'dictation', text: 'Would you be able to confirm that in writing?' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: negotiate',
      minutes: 12,
      items: [
        { kind: 'shadow', text: "Delivering all five wouldn't be realistic without hurting quality." },
        { kind: 'shadow', text: 'If we were to focus on two features, we could deliver both.' },
        { kind: 'shadow', text: 'What if we provided a CSV export now and full reports later?' },
        { kind: 'shadow', text: "Would you be open to extending the budget?" },
        {
          kind: 'speak',
          situation: 'Your manager wants a feature in one week. You need three. Say no tentatively and offer a smaller version.',
          keywords: ["wouldn't be realistic", 'if we were to'],
          sample: "One week wouldn't be realistic for the full feature. If we were to build only the basic version, we could deliver it in a week and add the rest later.",
        },
        {
          kind: 'speak',
          situation: 'Offer a trade-off to a client: you add their urgent feature, they accept moving another one.',
          keywords: ['what if we', 'in return'],
          sample: "What if we added photo proof this sprint? In return, we would move dark mode to next quarter. That way, the deadline stays the same.",
        },
        {
          kind: 'speak',
          situation: 'Close the negotiation: accept the compromise and ask for confirmation in writing.',
          keywords: ['could live with', 'in writing'],
          sample: "I think we could live with that. Would you be able to confirm it in writing, so we're all on the same page?",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: scope agreement summary',
      minutes: 10,
      items: [
        {
          kind: 'write',
          task: 'Write the summary email after the negotiation: what was requested, what you agreed to deliver, what moved, why, and what needs confirmation.',
          checklist: [
            'Tentative language: *would, could, if we were to*',
            'Clear list of in-scope and out-of-scope items',
            'Reason for each decision (*That way…*)',
            'Request for written confirmation',
          ],
          minWords: 70,
          sample:
            "Dear Anna,\nThank you for today's discussion. Your board requested five new features by the end of the quarter. As discussed, delivering all five would not be realistic without hurting quality.\nAgreed scope for this quarter: photo proof, in-app chat, and a simple CSV export of delivery data. That way, the board gets the key data, and we keep the timeline.\nMoved to next quarter: full reports, driver ratings and dark mode, unless the budget for a second team is extended.\nCould you please confirm this scope in writing by Friday? We can review it together on Monday.\nBest regards,\nAlex",
        },
      ],
    },
  ],
};

export default lesson;
