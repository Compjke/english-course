import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-18',
  level: 'B2',
  title: 'Day 78: RFC: event-driven sync',
  grammar: 'Argumentation: claims, evidence, counterarguments, concessions (while, whereas, even though, provided)',
  scene: 'Ты пишешь RFC: перевести синхронизацию с SAP на события вместо опроса.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: defending the RFC',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'RFC review meeting',
          format: 'call',
          lines: [
            { who: 'You', text: "My RFC proposes replacing polling with events. Currently we ask each depot every 30 seconds, whereas events would arrive only when something changes." },
            { who: 'Arjun', text: "What's the evidence that polling is the problem?" },
            { who: 'You', text: "Our metrics show that 85% of polling requests return no changes. In other words, most of the load on SAP is wasted." },
            { who: 'Ken', text: "While I agree in principle, not all depots support webhooks." },
            { who: 'You', text: "That's a valid point. Even though only 60% support them today, the rest can stay on polling. It's a hybrid approach." },
            { who: 'Lena', text: "Testing two sync mechanisms is harder." },
            { who: 'You', text: "Admittedly, it adds complexity. However, the benefits outweigh the costs: SAP load drops by 85%, and updates become instant." },
            { who: 'Arjun', text: "What's the rollback plan?" },
            { who: 'You', text: "Provided that we keep the polling code, we can switch back per depot with a feature flag." },
            { who: 'Maya', text: "Convincing. Let's approve it with one condition: a two-depot pilot first." },
          ],
        },
        { kind: 'choice', prompt: 'What does the RFC propose?', options: ['Replacing polling with events', 'More polling', 'A new database', 'A new app'], answer: 0 },
        { kind: 'choice', prompt: 'What percentage of polling requests return no changes?', options: ['15%', '50%', '85%', '100%'], answer: 2 },
        { kind: 'choice', prompt: "What is Ken's counterargument?", options: ['Not all depots support webhooks', 'Events are expensive', 'Polling is better', 'SAP is fast'], answer: 0 },
        { kind: 'choice', prompt: 'What is the rollback plan?', options: ['Keep the polling code and use a feature flag per depot', 'No rollback', 'Delete everything', 'Call SAP'], answer: 0 },
        { kind: 'choice', prompt: 'What is the condition for approval?', options: ['A two-depot pilot first', 'No condition', 'A new budget', 'Ken must agree'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: building an argument',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Structure of a convincing argument',
          body:
            'A strong RFC (Request for Comments) or design proposal follows a pattern:\n' +
            '1. **Claim**: *I propose replacing polling with events.*\n' +
            '2. **Evidence**: *Our metrics show that 85% of requests return no changes.*\n' +
            '3. **Counterargument acknowledged**: *That’s a valid point. / Admittedly, it adds complexity.*\n' +
            '4. **Rebuttal**: *However, the benefits outweigh the costs.*\n' +
            '5. **Conditions / mitigation**: *Provided that we keep the polling code, we can roll back.*\n\n' +
            'Acknowledging the other side makes you **more** convincing, not less.',
        },
        {
          kind: 'theory',
          title: 'Contrast and condition linkers',
          body: 'These linkers help you compare options, admit weaknesses and set conditions. Pay attention to what follows each one: a clause (subject + verb) or a noun.',
          table: [
            ['Linker', 'Use', 'Example'],
            ['whereas / while', 'contrast two facts', 'We poll every 30 s, **whereas** events arrive on change.'],
            ['While / Although + clause', 'concession', '**While** I agree in principle, …'],
            ['Even though + clause', 'strong concession', '**Even though** only 60% support it, …'],
            ['Despite / In spite of + noun / -ing', 'concession', '**Despite** the complexity, …'],
            ['provided (that) / as long as', 'condition', '**Provided that** we keep the code, …'],
            ['outweigh', 'compare pros & cons', 'The benefits **outweigh** the costs.'],
          ],
          pitfalls: [
            { wrong: 'Despite it adds complexity, …', right: 'Even though it adds complexity, … / Despite the added complexity, …' },
            { wrong: 'Whereas I agree, it is risky.', right: 'While I agree, it is risky. / Although I agree, …' },
            { wrong: 'Provided we will keep the code, …', right: 'Provided (that) we keep the code, …' },
            { wrong: 'The costs outweigh to the benefits.', right: 'The costs outweigh the benefits.' },
          ],
        },
        { kind: 'choice', prompt: 'We poll every 30 seconds, ___ events arrive only on change.', options: ['whereas', 'despite', 'provided', 'unless'], answer: 0 },
        { kind: 'choice', prompt: '___ I agree in principle, not all depots support webhooks.', options: ['Despite', 'While', 'Whereas', 'Provided'], answer: 1 },
        { kind: 'choice', prompt: '___ only 60% support them, the rest can stay on polling.', options: ['Even though', 'Despite', 'In spite', 'Provided'], answer: 0 },
        { kind: 'choice', prompt: 'The benefits ___ the costs.', options: ['outweigh', 'outweigh to', 'overweigh', 'weigh out'], answer: 0 },
        { kind: 'choice', prompt: '___ that we keep the polling code, we can roll back.', options: ['Provided', 'Despite', 'Whereas', 'Even'], answer: 0 },
        { kind: 'choice', prompt: '___ the extra complexity, the RFC was approved.', options: ['Despite', 'Although', 'Even though', 'Whereas'], answer: 0 },
        { kind: 'choice', prompt: 'Best way to respond to a counterargument:', options: ["That's a valid point. However, …", 'You are wrong.', 'Whatever.', 'No.'], answer: 0 },
        { kind: 'gap', text: 'Our metrics ___ that 85% of requests return nothing. (show)', answers: ['show'] },
        { kind: 'gap', text: "That's a ___ point. However, the risk is small.", answers: ['valid', 'fair', 'good'] },
        { kind: 'gap', text: '___ , it adds complexity. (admit)', answers: ['Admittedly'] },
        { kind: 'gap', text: 'We can roll back as ___ as we keep the old code.', answers: ['long'] },
        { kind: 'gap', text: 'In spite ___ the risks, we recommend the change.', answers: ['of'] },
        { kind: 'gap', text: 'Polling is simple, ___ events are efficient.', answers: ['whereas', 'while'] },
        { kind: 'gap', text: 'I propose ___ (replace) polling with events.', answers: ['replacing'] },
        { kind: 'transform', instruction: 'Connect with "whereas"', source: 'Polling creates constant load. Events create load only on change.', answers: ['Polling creates constant load, whereas events create load only on change.', 'Whereas polling creates constant load, events create load only on change.'] },
        { kind: 'transform', instruction: 'Connect with "Even though"', source: 'Webhooks are not supported everywhere. We should start with them.', answers: ['Even though webhooks are not supported everywhere, we should start with them.'] },
        { kind: 'transform', instruction: 'Rewrite with "Despite + noun"', source: 'Although it is complex, the solution is worth it.', answers: ['Despite the complexity, the solution is worth it.', "Despite its complexity, the solution is worth it."] },
        { kind: 'transform', instruction: 'Rewrite with "provided that"', source: 'We can launch on Monday if the tests pass.', answers: ['We can launch on Monday provided that the tests pass.', 'Provided that the tests pass, we can launch on Monday.', 'We can launch on Monday provided the tests pass.'] },
        { kind: 'fix', sentence: 'Despite it is risky, we will do it.', answers: ['Even though it is risky, we will do it.', 'Although it is risky, we will do it.', 'Despite the risk, we will do it.'] },
        { kind: 'fix', sentence: 'Provided that we will get approval, we start Monday.', answers: ['Provided that we get approval, we start Monday.', 'Provided that we get approval, we will start Monday.'] },
        { kind: 'fix', sentence: 'The benefits outweigh over the costs.', answers: ['The benefits outweigh the costs.'] },
        { kind: 'fix', sentence: 'In spite the delays, the client is happy.', answers: ['In spite of the delays, the client is happy.', 'Despite the delays, the client is happy.'] },
        { kind: 'fix', sentence: 'I propose to replacing polling.', answers: ['I propose replacing polling.', 'I propose to replace polling.'] },
        { kind: 'order', words: ['The', 'benefits', 'outweigh', 'the', 'costs', '.'], ru: 'Преимущества перевешивают издержки.' },
        { kind: 'order', words: ["That's", 'a', 'valid', 'point', '.'], ru: 'Это справедливое замечание.' },
        { kind: 'order', words: ['I', 'propose', 'replacing', 'polling', 'with', 'events', '.'], ru: 'Предлагаю заменить опрос событиями.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: design proposals',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'RFC', ru: 'запрос на комментарии (документ-предложение)', example: 'My RFC proposes event-driven sync.' },
            { chunk: 'polling', ru: 'опрос (периодический)', example: 'Polling wastes most requests.' },
            { chunk: 'webhooks', ru: 'вебхуки', example: 'Not all depots support webhooks.' },
            { chunk: 'in principle', ru: 'в принципе', example: 'I agree in principle.' },
            { chunk: 'valid point', ru: 'справедливое замечание', example: "That's a valid point." },
            { chunk: 'hybrid approach', ru: 'гибридный подход', example: "It's a hybrid approach." },
            { chunk: 'outweigh', ru: 'перевешивать', example: 'The benefits outweigh the costs.' },
            { chunk: 'mitigation', ru: 'смягчение (риска)', example: 'Risk mitigation: a feature flag.' },
            { chunk: 'alternatives considered', ru: 'рассмотренные альтернативы', example: 'Add a section: alternatives considered.' },
            { chunk: 'convincing', ru: 'убедительный', example: 'Your argument is convincing.' },
            { chunk: 'with one condition', ru: 'с одним условием', example: "Let's approve it with one condition." },
            { chunk: 'wasted', ru: 'потраченный впустую', example: 'Most of the load is wasted.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['mitigation', 'смягчение риска'],
            ['in principle', 'в принципе'],
            ['outweigh', 'перевешивать'],
            ['polling', 'периодический опрос'],
            ['alternatives considered', 'рассмотренные альтернативы'],
          ],
        },
        { kind: 'gap', text: 'Every RFC should have a section called "Alternatives ___ ".', answers: ['considered'] },
        { kind: 'gap', text: 'Risk ___ : we keep a feature flag for each depot.', answers: ['mitigation'] },
        { kind: 'gap', text: 'I agree in ___ , but I have one concern.', answers: ['principle'] },
        { kind: 'gap', text: 'A ___ approach: events where possible, polling elsewhere.', answers: ['hybrid'] },
        { kind: 'gap', text: 'Your data makes the argument very ___ .', answers: ['convincing'] },
        { kind: 'choice', prompt: 'Typical RFC sections:', options: ['Context, Proposal, Alternatives, Risks, Rollout, Open questions', 'Introduction, Jokes, Gossip', 'Code only', 'Salary, Holidays'], answer: 0 },
        { kind: 'choice', prompt: 'What makes an argument stronger?', options: ['Evidence and acknowledging counterarguments', 'Speaking louder', 'Ignoring questions', 'Using more adjectives'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'My RFC proposes replacing polling with events.' },
        { kind: 'dictation', text: 'Our metrics show that 85% of requests return no changes.' },
        { kind: 'dictation', text: 'While I agree in principle, not all depots support webhooks.' },
        { kind: 'dictation', text: "That's a valid point." },
        { kind: 'dictation', text: 'Even though only 60% support them today, the rest can stay on polling.' },
        { kind: 'dictation', text: 'The benefits outweigh the costs.' },
        { kind: 'dictation', text: 'Provided that we keep the polling code, we can switch back.' },
        { kind: 'dictation', text: "Let's approve it with one condition." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: defend a proposal',
      minutes: 12,
      items: [
        { kind: 'shadow', text: 'I propose replacing polling with events.' },
        { kind: 'shadow', text: 'Our metrics show that 85% of requests return no changes.' },
        { kind: 'shadow', text: "That's a valid point. However, the benefits outweigh the costs." },
        { kind: 'shadow', text: 'Provided that we keep the old code, we can roll back.' },
        {
          kind: 'speak',
          situation: 'Propose a technical change you believe in. Give the claim and the evidence.',
          keywords: ['I propose', 'shows that'],
          sample: "I propose moving our tests to parallel jobs. Our CI data shows that developers wait 25 minutes per push, which is about an hour a day per person.",
        },
        {
          kind: 'speak',
          situation: 'Someone objects: "It will cost more." Acknowledge and rebut.',
          keywords: ['valid point', 'however', 'outweigh'],
          sample: "That's a valid point, it will cost about 200 euros more per month. However, we save around 40 developer hours, so the benefits clearly outweigh the costs.",
        },
        {
          kind: 'speak',
          situation: 'Add a safety condition to your proposal.',
          keywords: ['provided that'],
          sample: "Provided that we keep the old pipeline for two weeks, we can switch back at any time if something goes wrong.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: RFC summary',
      minutes: 10,
      items: [
        {
          kind: 'write',
          task: 'Write the summary of the RFC "Event-driven sync with depots": context, proposal, evidence, counterarguments with responses, rollback, and pilot.',
          checklist: [
            'Claim and evidence with numbers',
            '*whereas / while* for contrast',
            '*even though / despite* + acknowledgement',
            '*provided that* and *outweigh*',
          ],
          minWords: 80,
          sample:
            "RFC-007: Event-driven sync with depots\nContext: we currently poll every depot every 30 seconds. Our metrics show that 85% of these requests return no changes, so most of the load on SAP is wasted.\nProposal: replace polling with webhooks where depots support them. Polling sends constant traffic, whereas events arrive only when something changes.\nCounterarguments: not all depots support webhooks; even though only 60% do today, the others can stay on polling (hybrid approach). Admittedly, two mechanisms add testing complexity; however, the benefits outweigh the costs: SAP load drops by 85% and updates become instant.\nRollback: provided that we keep the polling code, we can switch back per depot with a feature flag.\nNext step: a two-depot pilot.",
        },
      ],
    },
  ],
};

export default lesson;
