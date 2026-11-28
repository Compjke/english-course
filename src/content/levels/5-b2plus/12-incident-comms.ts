import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2p-12',
  level: 'B2+',
  title: 'Day 97: Incident commander',
  grammar: 'Incident communication: status updates, clear roles, impact statements, ETA language',
  scene: 'Ты — incident commander во время крупного сбоя. Нужно координировать людей и информировать клиента.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: SEV-1',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Incident bridge call',
          format: 'call',
          lines: [
            { who: 'Ken', text: "Alerts everywhere: the tracking API is returning 500s in all regions." },
            { who: 'You', text: "OK, I'm declaring a SEV-1 and taking the incident commander role. Ken, you're on investigation. Arjun, you're on mitigation. Lena, you handle communication. Please confirm." },
            { who: 'Ken', text: "Confirmed, investigating." },
            { who: 'You', text: "Lena, first customer update in ten minutes, please. Impact first, no speculation." },
            { who: 'Lena', text: "Draft: 'We are investigating an issue affecting parcel tracking for all customers since 14:05 CET. Next update at 14:40.'" },
            { who: 'You', text: "Good. Ken, what do we know so far?" },
            { who: 'Ken', text: "A config change at 14:02 broke the database connection string." },
            { who: 'You', text: "Arjun, can we roll it back?" },
            { who: 'Arjun', text: "Rolling back now. Should take about five minutes." },
            { who: 'You', text: "Thanks. Let's not jump to conclusions about the cause until we confirm. Lena, next update: 'We have identified a likely cause and are applying a fix.'" },
            { who: 'Arjun', text: "Rollback complete. Error rate is back to normal." },
            { who: 'You', text: "Great work. Let's monitor for thirty minutes before we resolve it. I'll schedule the postmortem for tomorrow." },
          ],
        },
        { kind: 'choice', prompt: 'What severity did you declare?', options: ['SEV-1', 'SEV-3', 'No incident', 'SEV-5'], answer: 0 },
        { kind: 'choice', prompt: 'Who handles communication?', options: ['Lena', 'Ken', 'Arjun', 'You'], answer: 0 },
        { kind: 'choice', prompt: 'What caused the outage?', options: ['A config change broke the DB connection string', 'A hacker', 'A power cut', 'Nobody knows'], answer: 0 },
        { kind: 'choice', prompt: 'What is the rule for updates?', options: ['Impact first, no speculation', 'Long technical details', 'Blame someone', 'No updates'], answer: 0 },
        { kind: 'choice', prompt: 'What happens after the rollback?', options: ['Monitor for thirty minutes before resolving', 'Close immediately', 'Deploy again', 'Go home'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Language: incident communication',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'On the bridge call: short and clear',
          body:
            'During an incident, language must be **short, explicit and unambiguous**.\n\n' +
            '**Roles** (Present Simple / you’re on): *I’m taking the IC role. Ken, you’re on investigation. Arjun, you’re on mitigation.*\n' +
            '**Confirmation**: *Please confirm. — Confirmed.*\n' +
            '**Status** (Present Continuous for ongoing work): *Rolling back now. We are investigating…*\n' +
            '**Facts vs guesses**: *What do we know so far? / Let’s not jump to conclusions. / This is a hypothesis, not confirmed.*\n' +
            '**ETA with hedging**: *Should take about five minutes. / We expect… / No ETA yet.*',
        },
        {
          kind: 'theory',
          title: 'Customer-facing updates',
          table: [
            ['Stage', 'Template'],
            ['Investigating', 'We are investigating an issue affecting [what] for [who] since [time]. Next update at [time].'],
            ['Identified', 'We have identified the cause and are applying a fix.'],
            ['Monitoring', 'A fix has been applied. We are monitoring the results.'],
            ['Resolved', 'The issue has been resolved. [what] has been working normally since [time]. We apologise for the disruption.'],
          ],
          body:
            'Rules: **impact first** (what doesn’t work, for whom, since when), **no speculation** about the cause, **always give the next update time**, use **Present Perfect** for completed steps (*has been resolved, have identified*).',
          pitfalls: [
            { wrong: 'Maybe it is the database, maybe the network, we do not know.', right: 'We are investigating the cause. Next update at 14:40.' },
            { wrong: 'The issue is resolved since 15:10.', right: 'Tracking has been working normally since 15:10.' },
            { wrong: 'Ken, you do investigation?', right: "Ken, you're on investigation. Please confirm." },
            { wrong: 'We identified the cause and apply a fix.', right: 'We have identified the cause and are applying a fix.' },
          ],
        },
        { kind: 'choice', prompt: 'Assigning a role:', options: ["Ken, you're on investigation. Please confirm.", 'Ken, maybe look at it?', 'Someone check it.', 'Who wants to help?'], answer: 0 },
        { kind: 'choice', prompt: 'First customer update:', options: ['We are investigating an issue affecting tracking since 14:05. Next update at 14:40.', 'Everything is broken!', 'The database died, sorry.', 'No comment.'], answer: 0 },
        { kind: 'choice', prompt: 'We have identified the cause and ___ a fix.', options: ['apply', 'are applying', 'applied', 'will applying'], answer: 1 },
        { kind: 'choice', prompt: 'Tracking ___ normally since 15:10.', options: ['works', 'is working', 'has been working', 'worked'], answer: 2 },
        { kind: 'choice', prompt: 'Avoiding speculation:', options: ["Let's not jump to conclusions until we confirm.", "It's definitely the network.", 'Ken broke it.', 'It must be Apple.'], answer: 0 },
        { kind: 'choice', prompt: 'Giving an uncertain ETA:', options: ['Should take about five minutes.', 'Exactly 4 minutes 30 seconds.', 'Never.', 'Soon, I think, maybe.'], answer: 0 },
        { kind: 'choice', prompt: 'Every customer update must include…', options: ['the next update time', 'the engineer’s name', 'the root cause guess', 'a joke'], answer: 0 },
        { kind: 'choice', prompt: 'Final update phrase:', options: ['The issue has been resolved. We apologise for the disruption.', 'Fixed lol.', 'It works now, bye.', 'Done.'], answer: 0 },
        { kind: 'gap', text: "I'm declaring a SEV-1 and ___ the incident commander role.", answers: ['taking'] },
        { kind: 'gap', text: 'What do we know so ___ ?', answers: ['far'] },
        { kind: 'gap', text: '___ back now. (We are rolling…)', answers: ['Rolling'] },
        { kind: 'gap', text: 'Next ___ at 14:40.', answers: ['update'] },
        { kind: 'gap', text: 'A fix has been applied. We are ___ the results.', answers: ['monitoring'] },
        { kind: 'gap', text: 'We apologise for the ___ .', answers: ['disruption', 'inconvenience'] },
        { kind: 'gap', text: 'No ETA ___ , but we will update you in 30 minutes.', answers: ['yet'] },
        { kind: 'transform', instruction: 'Write an "investigating" update', source: 'Login broken, all drivers, from 9:10. Next update 9:45.', answers: ['We are investigating an issue affecting login for all drivers since 9:10. Next update at 9:45.'] },
        { kind: 'transform', instruction: 'Write a "resolved" update', source: 'Login OK again from 10:05.', answers: ['The issue has been resolved. Login has been working normally since 10:05.', 'The issue has been resolved. Login has been working normally since 10:05. We apologise for the disruption.'] },
        { kind: 'transform', instruction: 'Assign a role clearly', source: 'Lena, can you maybe write to customers?', answers: ["Lena, you're on communication. Please confirm.", 'Lena, you handle communication. Please confirm.'] },
        { kind: 'fix', sentence: 'The service is working normally since 15:00.', answers: ['The service has been working normally since 15:00.'] },
        { kind: 'fix', sentence: 'We identified the cause and apply the fix now.', answers: ['We have identified the cause and are applying a fix.', 'We have identified the cause and are applying the fix now.'] },
        { kind: 'fix', sentence: 'The issue is resolved since one hour.', answers: ['The issue has been resolved for an hour.', 'The issue was resolved an hour ago.'] },
        { kind: 'fix', sentence: 'We apologise for the disrupt.', answers: ['We apologise for the disruption.'] },
        { kind: 'fix', sentence: 'Next update in 14:40.', answers: ['Next update at 14:40.'] },
        { kind: 'order', words: ['What', 'do', 'we', 'know', 'so', 'far', '?'], ru: 'Что нам известно на данный момент?' },
        { kind: 'order', words: ['Next', 'update', 'at', '14:40', '.'], ru: 'Следующее обновление в 14:40.' },
        { kind: 'order', words: ['The', 'issue', 'has', 'been', 'resolved', '.'], ru: 'Проблема устранена.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: incident management',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'incident commander', ru: 'руководитель инцидента', example: "I'm the incident commander." },
            { chunk: 'SEV-1', ru: 'инцидент высшей серьёзности', example: "We're declaring a SEV-1." },
            { chunk: 'bridge call', ru: 'общий созвон по инциденту', example: 'Join the bridge call now.' },
            { chunk: 'mitigation', ru: 'смягчение последствий', example: 'Arjun is on mitigation.' },
            { chunk: 'jump to conclusions', ru: 'делать поспешные выводы', example: "Let's not jump to conclusions." },
            { chunk: 'status page', ru: 'страница статуса', example: 'Update the status page.' },
            { chunk: 'disruption', ru: 'нарушение работы', example: 'We apologise for the disruption.' },
            { chunk: 'roll back', ru: 'откатить', example: 'We need to roll back the config.' },
            { chunk: 'all clear', ru: 'отбой тревоги', example: 'We gave the all clear at 15:40.' },
            { chunk: 'war room', ru: '«штаб» на время кризиса', example: 'We opened a war room.' },
            { chunk: 'customer impact', ru: 'влияние на клиентов', example: 'Describe the customer impact first.' },
            { chunk: 'time to resolve', ru: 'время до устранения', example: 'Our time to resolve was 35 minutes.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['mitigation', 'смягчение последствий'],
            ['all clear', 'отбой тревоги'],
            ['bridge call', 'созвон по инциденту'],
            ['jump to conclusions', 'делать поспешные выводы'],
            ['war room', 'кризисный штаб'],
          ],
        },
        { kind: 'gap', text: 'Please join the ___ call immediately.', answers: ['bridge'] },
        { kind: 'gap', text: 'Our time to ___ was 35 minutes.', answers: ['resolve'] },
        { kind: 'gap', text: 'Describe the customer ___ first.', answers: ['impact'] },
        { kind: 'gap', text: 'We gave the all ___ at 15:40.', answers: ['clear'] },
        { kind: 'gap', text: 'Update the status ___ every 30 minutes.', answers: ['page'] },
        { kind: 'choice', prompt: 'Main job of the incident commander:', options: ['coordinate people and communication, not fix everything personally', 'write all the code', 'find who to blame', 'stay silent'], answer: 0 },
        { kind: 'choice', prompt: 'What should a customer update NOT contain?', options: ['speculation about the cause', 'the impact', 'the next update time', 'an apology'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: "I'm declaring a SEV-1 and taking the incident commander role." },
        { kind: 'dictation', text: "Ken, you're on investigation. Please confirm." },
        { kind: 'dictation', text: 'Impact first, no speculation.' },
        { kind: 'dictation', text: 'We are investigating an issue affecting parcel tracking.' },
        { kind: 'dictation', text: "Let's not jump to conclusions until we confirm." },
        { kind: 'dictation', text: 'Rolling back now. Should take about five minutes.' },
        { kind: 'dictation', text: 'We have identified a likely cause and are applying a fix.' },
        { kind: 'dictation', text: 'The issue has been resolved. We apologise for the disruption.' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: lead the bridge call',
      minutes: 14,
      items: [
        { kind: 'shadow', text: "I'm declaring a SEV-1 and taking the incident commander role." },
        { kind: 'shadow', text: "Ken, you're on investigation. Arjun, you're on mitigation. Please confirm." },
        { kind: 'shadow', text: "What do we know so far? Let's not jump to conclusions." },
        { kind: 'shadow', text: "Let's monitor for thirty minutes before we resolve it." },
        {
          kind: 'speak',
          situation: 'Payments are failing. Open the incident: declare it, assign three roles, ask for confirmation.',
          keywords: ["I'm declaring", "you're on", 'confirm'],
          sample: "I'm declaring a SEV-1 for payments and taking the IC role. Ken, you're on investigation. Arjun, you're on mitigation. Lena, you're on communication. Please confirm.",
        },
        {
          kind: 'speak',
          situation: 'Read the first customer update aloud: payments failing for all users since 11:20, next update at 11:50.',
          keywords: ['we are investigating', 'next update'],
          sample: "We are investigating an issue affecting payments for all customers since 11:20 CET. Next update at 11:50.",
        },
        {
          kind: 'speak',
          situation: 'The fix is deployed. Give the final internal message and the customer "resolved" update.',
          keywords: ['has been resolved', 'since', 'postmortem'],
          sample: "Great work, everyone. Internally: we'll monitor for thirty minutes and I'll schedule the postmortem. For customers: the issue has been resolved, and payments have been working normally since 12:05.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: status page updates',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write the four status page updates for the tracking outage (Investigating, Identified, Monitoring, Resolved), with times, plus a one-line internal summary for leadership.',
          checklist: [
            'Impact first: what, who, since when',
            'Next update time in each message',
            'No speculation; Present Perfect for completed steps',
            'Short internal summary',
          ],
          minWords: 80,
          sample:
            "14:15 Investigating: We are investigating an issue affecting parcel tracking for all customers since 14:05 CET. Next update at 14:40.\n14:35 Identified: We have identified the cause and are applying a fix. Next update at 15:00.\n14:50 Monitoring: A fix has been applied, and tracking is working again. We are monitoring the results. Next update at 15:20.\n15:20 Resolved: The issue has been resolved. Parcel tracking has been working normally since 14:45. We apologise for the disruption.\nInternal summary: SEV-1, 40 minutes, caused by a config change; rolled back; postmortem tomorrow at 10:00.",
        },
      ],
    },
  ],
};

export default lesson;
