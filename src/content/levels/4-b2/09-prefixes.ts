import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2-09',
  level: 'B2',
  title: 'Day 69: Unreliable, misconfigured, overloaded',
  grammar: 'Word formation 1: prefixes (un-, in-/im-/il-/ir-, dis-, mis-, re-, over-, under-, pre-, co-)',
  scene: 'Ревью конфигурации для Германии: всё ли настроено правильно?',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: config review',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Config review with Ken',
          format: 'call',
          lines: [
            { who: 'Ken', text: "I reviewed the German setup. Honestly, some parts are misconfigured." },
            { who: 'You', text: "Which ones?" },
            { who: 'Ken', text: "The queue is undersized. During the pilot it was overloaded twice. We need to resize it." },
            { who: 'You', text: "And the depot connector? It's been unreliable all week." },
            { who: 'Ken', text: "That's partly their fault. Their certificate was invalid for a day, and our retries were misaligned with their rate limit." },
            { who: 'You', text: "So we should reconfigure the retries and pre-check the certificate every morning." },
            { who: 'Ken', text: "Exactly. Also, the old Polish settings were copied over. Some of them are irrelevant in Germany." },
            { who: 'You', text: "I disagree slightly: the timeout settings are still relevant. But I'd remove the Polish holiday calendar." },
            { who: 'Ken', text: "Fair. Let's co-write the new config tomorrow and redeploy on Thursday." },
          ],
        },
        { kind: 'choice', prompt: 'What is wrong with the queue?', options: ['It is undersized and was overloaded', 'It is too big', 'It is deleted', 'Nothing'], answer: 0 },
        { kind: 'choice', prompt: 'What happened to the depot certificate?', options: ['It was invalid for a day', 'It was stolen', 'It was perfect', 'It was renewed early'], answer: 0 },
        { kind: 'choice', prompt: 'What will you do with the retries?', options: ['Reconfigure them', 'Remove them', 'Double them', 'Ignore them'], answer: 0 },
        { kind: 'choice', prompt: 'Which Polish setting should be removed?', options: ['The holiday calendar', 'The timeouts', 'The queue', 'The certificates'], answer: 0 },
        { kind: 'choice', prompt: 'When will they redeploy?', options: ['Tomorrow', 'On Thursday', 'Next week', 'Today'], answer: 1 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: prefixes',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Negative prefixes',
          body:
            'Prefixes change the meaning of a word. Knowing them lets you understand and build hundreds of words.\n\n' +
            '**un-** (most common): *reliable → unreliable, available → unavailable, expected → unexpected, stable → unstable*\n' +
            '**in-**: *valid → invalid, correct → incorrect, complete → incomplete, consistent → inconsistent*\n' +
            '**im-** (before p, m, b): *possible → impossible, mature → immature, balance → imbalance*\n' +
            '**il-** (before l): *legal → illegal, logical → illogical*\n' +
            '**ir-** (before r): *relevant → irrelevant, regular → irregular, responsible → irresponsible*\n' +
            '**dis-** (verbs and nouns): *agree → disagree, connect → disconnect, able → disable, advantage → disadvantage*',
        },
        {
          kind: 'theory',
          title: 'Meaning prefixes',
          table: [
            ['Prefix', 'Meaning', 'Examples'],
            ['mis-', 'wrongly', 'misconfigure, misunderstand, misalign, mislead'],
            ['re-', 'again', 'reconfigure, redeploy, restart, rewrite, resize'],
            ['over-', 'too much', 'overload, overestimate, overengineer, overwrite'],
            ['under-', 'too little', 'underestimate, undersized, underused'],
            ['pre-', 'before', 'pre-check, preview, preload, pre-release'],
            ['co-', 'together', 'co-write, co-author, co-founder'],
            ['multi- / cross-', 'many / across', 'multi-tenant, cross-platform'],
            ['de-', 'reverse / remove', 'deprecate, decouple, debug, deactivate'],
          ],
          body: 'In IT, *re-*, *over-* and *under-*, *mis-* and *de-* are everywhere. A hyphen is sometimes used with pre-, co- and re- (*pre-check, co-write, re-enter*). Check a dictionary if you are not sure.',
          pitfalls: [
            { wrong: 'unpossible', right: 'impossible' },
            { wrong: 'unlegal', right: 'illegal' },
            { wrong: 'inrelevant', right: 'irrelevant' },
            { wrong: 'disunderstand', right: 'misunderstand' },
          ],
        },
        { kind: 'choice', prompt: 'The connector has been ___ all week. (not reliable)', options: ['disreliable', 'unreliable', 'inreliable', 'misreliable'], answer: 1 },
        { kind: 'choice', prompt: 'Their certificate was ___ for a day.', options: ['unvalid', 'invalid', 'disvalid', 'imvalid'], answer: 1 },
        { kind: 'choice', prompt: 'Some settings are ___ in Germany. (not relevant)', options: ['unrelevant', 'inrelevant', 'irrelevant', 'disrelevant'], answer: 2 },
        { kind: 'choice', prompt: 'Some parts are ___ (configured wrongly).', options: ['disconfigured', 'misconfigured', 'unconfigured', 'overconfigured'], answer: 1 },
        { kind: 'choice', prompt: 'The queue was ___ twice. (too much load)', options: ['underloaded', 'overloaded', 'misloaded', 'reloaded'], answer: 1 },
        { kind: 'choice', prompt: 'We always ___ testing. It takes longer than we think.', options: ['overestimate', 'underestimate', 'misestimate', 'reestimate'], answer: 1 },
        { kind: 'choice', prompt: 'Tracking without consent is ___ in Germany.', options: ['unlegal', 'illegal', 'inlegal', 'dislegal'], answer: 1 },
        { kind: 'choice', prompt: "This API is old. We'll ___ it next year.", options: ['deprecate', 'misprecate', 'unprecate', 'reprecate'], answer: 0 },
        { kind: 'gap', text: "Let's ___ (deploy again) on Thursday.", answers: ['redeploy'] },
        { kind: 'gap', text: 'The server is ___ (not available) until 6 am.', answers: ['unavailable'] },
        { kind: 'gap', text: 'It is ___ (not possible) to finish by Monday.', answers: ['impossible'] },
        { kind: 'gap', text: 'I ___ (not agree) slightly with that point.', answers: ['disagree'] },
        { kind: 'gap', text: "Sorry, I ___ (understood wrongly) the task.", answers: ['misunderstood'] },
        { kind: 'gap', text: "Don't ___ (engineer too much) it. Keep it simple.", answers: ['overengineer'] },
        { kind: 'gap', text: 'The data is ___ (not consistent) between the two systems.', answers: ['inconsistent'] },
        { kind: 'gap', text: 'The new server is ___ (used too little). We can save money.', answers: ['underused'] },
        { kind: 'transform', instruction: 'Rewrite with a prefix', source: 'The results were not expected.', answers: ['The results were unexpected.'] },
        { kind: 'transform', instruction: 'Rewrite with a prefix', source: 'We need to write the module again.', answers: ['We need to rewrite the module.'] },
        { kind: 'transform', instruction: 'Rewrite with a prefix', source: 'The behaviour of the system is not logical.', answers: ['The behaviour of the system is illogical.'] },
        { kind: 'transform', instruction: 'Rewrite with a prefix', source: 'We need to separate these two services. (couple → ?)', answers: ['We need to decouple these two services.'] },
        { kind: 'fix', sentence: 'It is unpossible to deploy now.', answers: ['It is impossible to deploy now.'] },
        { kind: 'fix', sentence: 'This setting is inrelevant.', answers: ['This setting is irrelevant.'] },
        { kind: 'fix', sentence: 'I disunderstood your message.', answers: ['I misunderstood your message.'] },
        { kind: 'fix', sentence: 'The test results are uncorrect.', answers: ['The test results are incorrect.'] },
        { kind: 'fix', sentence: 'Storing it without consent is unlegal.', answers: ['Storing it without consent is illegal.'] },
        { kind: 'order', words: ['Some', 'parts', 'are', 'misconfigured', '.'], ru: 'Некоторые части неправильно настроены.' },
        { kind: 'order', words: ['The', 'queue', 'was', 'overloaded', 'twice', '.'], ru: 'Очередь дважды была перегружена.' },
        { kind: 'order', words: ['These', 'settings', 'are', 'irrelevant', '.'], ru: 'Эти настройки неактуальны.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: configuration',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'misconfigured', ru: 'неправильно настроенный', example: 'Some parts are misconfigured.' },
            { chunk: 'undersized', ru: 'слишком маленький', example: 'The queue is undersized.' },
            { chunk: 'resize', ru: 'изменить размер', example: 'We need to resize the queue.' },
            { chunk: 'certificate', ru: 'сертификат', example: 'The certificate was invalid.' },
            { chunk: 'misaligned', ru: 'несогласованный', example: 'Our retries were misaligned with their limit.' },
            { chunk: 'copied over', ru: 'перенесены копированием', example: 'Old settings were copied over.' },
            { chunk: 'co-write', ru: 'писать вместе', example: "Let's co-write the config." },
            { chunk: 'deprecate', ru: 'объявить устаревшим', example: 'We will deprecate the old API.' },
            { chunk: 'decouple', ru: 'развязать, разделить', example: 'Decouple the services.' },
            { chunk: 'overengineer', ru: 'переусложнить', example: "Don't overengineer it." },
            { chunk: 'environment variables', ru: 'переменные окружения', example: 'Check the environment variables.' },
            { chunk: 'default value', ru: 'значение по умолчанию', example: 'The default value is 30 seconds.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['deprecate', 'объявить устаревшим'],
            ['decouple', 'развязать'],
            ['overengineer', 'переусложнить'],
            ['undersized', 'слишком маленький'],
            ['default value', 'значение по умолчанию'],
          ],
        },
        { kind: 'gap', text: 'The ___ value for the timeout is 30 seconds.', answers: ['default'] },
        { kind: 'gap', text: 'The old Polish settings were copied ___ .', answers: ['over'] },
        { kind: 'gap', text: "Let's ___ the queue to handle double the load.", answers: ['resize'] },
        { kind: 'gap', text: 'The SSL ___ expired last night.', answers: ['certificate'] },
        { kind: 'gap', text: 'Check the environment ___ before you deploy.', answers: ['variables'] },
        { kind: 'choice', prompt: '"Deprecated" API means…', options: ['still works, but will be removed later', 'deleted', 'new', 'broken'], answer: 0 },
        { kind: 'choice', prompt: '"Don\'t overengineer it" means…', options: ['keep it simple', 'add more features', 'engineer it twice', 'use more servers'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'Some parts are misconfigured.' },
        { kind: 'dictation', text: 'The queue is undersized and was overloaded twice.' },
        { kind: 'dictation', text: "It's been unreliable all week." },
        { kind: 'dictation', text: 'Their certificate was invalid for a day.' },
        { kind: 'dictation', text: 'Some of them are irrelevant in Germany.' },
        { kind: 'dictation', text: "Let's co-write the new config and redeploy on Thursday." },
        {
          kind: 'theory',
          title: 'Spelling: double letters with prefixes',
          body: 'When the prefix ends with the same letter as the word starts, you get a double letter: **un + necessary = unnecessary**, **mis + spell = misspell**, **il + legal = illegal**, **ir + relevant = irrelevant**, **im + mature = immature**. Don’t drop a letter!',
        },
        { kind: 'dictation', text: 'This step is unnecessary.' },
        { kind: 'dictation', text: 'I misspelled the variable name.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: describe problems precisely',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'Some parts are misconfigured, and the queue is undersized.' },
        { kind: 'shadow', text: 'The connector has been unreliable all week.' },
        { kind: 'shadow', text: 'We should reconfigure the retries and redeploy.' },
        { kind: 'shadow', text: "Don't overengineer it. Keep it simple." },
        {
          kind: 'speak',
          situation: 'Describe a badly built system using at least four words with prefixes.',
          keywords: ['unreliable', 'misconfigured', 'overloaded'],
          sample: "The old admin panel was unreliable and often unavailable. Half of the settings were misconfigured, and the servers were overloaded every Monday.",
        },
        {
          kind: 'speak',
          situation: 'Say what you will do to fix a system, using re-, de- and pre- verbs.',
          keywords: ['rewrite', 'decouple', 'pre-check'],
          sample: "We'll rewrite the sync logic and decouple it from the UI. We'll also pre-check the certificates every morning, so nothing expires unexpectedly.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: config review summary',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write a config review summary for the German setup: problems found and actions. Use at least eight words with prefixes.',
          checklist: [
            'Negative prefixes: *un-, in-, ir-, il-, im-, dis-*',
            'Meaning prefixes: *mis-, re-, over-, under-, pre-, de-*',
            'Correct spelling (double letters!)',
            'Clear actions with owners',
          ],
          minWords: 55,
          sample:
            "German config review: summary\nProblems: the queue is undersized and was overloaded twice during the pilot. The depot connector has been unreliable, because their certificate was invalid for a day and our retries were misaligned with their rate limit. Several old Polish settings are irrelevant in Germany.\nActions: Ken will resize the queue; Alex will reconfigure the retries and add a pre-check for certificates; together we will co-write the new config and redeploy on Thursday. The Polish holiday calendar will be deactivated.",
        },
      ],
    },
  ],
};

export default lesson;
