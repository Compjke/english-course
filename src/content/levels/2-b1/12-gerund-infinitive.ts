import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b1-12',
  level: 'B1',
  title: 'Day 27: I enjoy solving problems',
  grammar: 'Gerund vs Infinitive: enjoy doing / want to do',
  scene: 'HR-интервью для внутреннего блога: что тебе нравится в работе и чего ты хочешь.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: the blog interview',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Interview for the company blog',
          format: 'call',
          lines: [
            { who: 'Kate', text: "Hi! Thanks for agreeing to do this interview. What do you enjoy doing at work?" },
            { who: 'You', text: "I enjoy solving tricky problems. And I love working with the designers. I learn a lot from Sofia." },
            { who: 'Kate', text: 'What did you decide to do when you joined?' },
            { who: 'You', text: 'I decided to learn the domain first. I wanted to understand how logistics works before writing code.' },
            { who: 'Kate', text: 'Is there anything you avoid doing?' },
            { who: 'You', text: "I try to avoid working late. I stopped answering Slack after 7 pm, and I feel much better." },
            { who: 'Kate', text: 'What do you hope to achieve this year?' },
            { who: 'You', text: "I hope to lead a small feature. I'm also thinking about taking an AWS course." },
            { who: 'Kate', text: 'Any advice for new developers?' },
            { who: 'You', text: "Don't be afraid of asking questions. And remember to take breaks. It's easy to forget to eat when you're debugging!" },
          ],
        },
        { kind: 'choice', prompt: 'What do you enjoy doing?', options: ['Writing docs', 'Solving tricky problems', 'Long meetings', 'Working late'], answer: 1 },
        { kind: 'choice', prompt: 'What did you decide to do first?', options: ['Write code', 'Learn the domain', 'Change the design', 'Take a course'], answer: 1 },
        { kind: 'choice', prompt: 'What did you stop doing?', options: ['Answering Slack after 7 pm', 'Writing tests', 'Asking questions', 'Eating'], answer: 0 },
        { kind: 'choice', prompt: 'What are you thinking about?', options: ['Leaving the company', 'Taking an AWS course', 'Buying a car', 'Working at night'], answer: 1 },
        { kind: 'choice', prompt: 'What is your advice?', options: ["Don't ask questions", "Don't be afraid of asking questions and take breaks", 'Work late', 'Avoid designers'], answer: 1 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Grammar: -ing or to?',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Глагол + -ing (gerund)',
          body:
            'После некоторых глаголов второй глагол стоит в форме **-ing**:\n**enjoy, avoid, finish, mind, suggest, keep, consider, practise, miss, can’t stand, give up, stop** (= перестать).\n*I enjoy solving problems. I avoid working late. Would you mind reviewing this?*\n\n' +
            'Также **-ing** ставится **после предлогов**: *thinking about taking, afraid of asking, good at debugging, instead of eating, before writing*. Это железное правило: после *of, about, at, for, without, before, after* всегда идёт -ing.\n\n' +
            '**-ing** может быть и **подлежащим**: *Debugging is fun. Writing tests saves time.*',
          examples: ['I enjoy solving tricky problems.', "I'm thinking about taking a course.", "Don't be afraid of asking questions.", 'Writing docs is boring but useful.'],
        },
        {
          kind: 'theory',
          title: 'Глагол + to + глагол (infinitive)',
          body:
            'После других глаголов нужен **to + глагол**:\n**want, decide, hope, plan, need, agree, promise, try, learn, forget, remember, offer, refuse, manage, would like**.\n*I decided to learn the domain. I hope to lead a feature. I’d like to ask a question.*\n\n' +
            'Инфинитив также выражает **цель** («чтобы»): *I stopped to drink coffee* (остановился, чтобы попить кофе).\n\n' +
            'После **like, love, hate, prefer, start, begin, continue** можно и так, и так: *I love working / to work with designers.*',
          table: [
            ['+ -ing', '+ to', 'оба варианта'],
            ['enjoy, avoid, finish', 'want, decide, hope', 'like, love, hate'],
            ['mind, suggest, keep', 'plan, need, agree', 'start, begin'],
            ['consider, practise', 'promise, learn, manage', 'continue, prefer'],
            ['предлог + -ing', "would like to", ''],
          ],
        },
        {
          kind: 'theory',
          title: 'Меняют смысл: stop, remember, forget, try',
          body:
            '**stop doing** — перестать: *I stopped answering Slack.*\n**stop to do** — остановиться, чтобы: *I stopped to answer a message.*\n\n' +
            '**remember doing** — помнить, что делал: *I remember deploying it.*\n**remember to do** — не забыть сделать: *Remember to take breaks.*\n\n' +
            '**forget to do** — забыть сделать: *I forgot to push.*\n**try to do** — пытаться; **try doing** — попробовать (как вариант): *Try restarting the server.*',
          pitfalls: [
            { wrong: 'I enjoy to solve problems.', right: 'I enjoy solving problems.' },
            { wrong: 'I decided learning the domain.', right: 'I decided to learn the domain.' },
            { wrong: "I'm thinking about to take a course.", right: "I'm thinking about taking a course." },
            { wrong: "Don't forget pushing your changes.", right: "Don't forget to push your changes." },
            { wrong: 'Would you mind to review this?', right: 'Would you mind reviewing this?' },
          ],
        },
        { kind: 'choice', prompt: 'I enjoy ___ tricky problems.', options: ['to solve', 'solving', 'solve', 'solved'], answer: 1 },
        { kind: 'choice', prompt: 'I decided ___ the domain first.', options: ['learning', 'to learn', 'learn', 'learned'], answer: 1 },
        { kind: 'choice', prompt: "I'm thinking about ___ an AWS course.", options: ['to take', 'take', 'taking', 'took'], answer: 2 },
        { kind: 'choice', prompt: 'Would you mind ___ my PR?', options: ['to review', 'reviewing', 'review', 'reviewed'], answer: 1 },
        { kind: 'choice', prompt: 'Remember ___ breaks!', options: ['taking', 'to take', 'take', 'took'], answer: 1 },
        { kind: 'choice', prompt: 'I stopped ___ Slack after 7 pm. Now I feel better.', options: ['to answer', 'answering', 'answer', 'answered'], answer: 1 },
        { kind: 'choice', prompt: "Don't be afraid of ___ questions.", options: ['ask', 'to ask', 'asking', 'asked'], answer: 2 },
        { kind: 'choice', prompt: 'The server is stuck. Try ___ it.', options: ['restarting', 'to restarting', 'restart', 'restarted'], answer: 0 },
        { kind: 'gap', text: 'I hope ___ (lead) a small feature this year.', answers: ['to lead'] },
        { kind: 'gap', text: 'We should avoid ___ (deploy) on Fridays.', answers: ['deploying'] },
        { kind: 'gap', text: 'I forgot ___ (push) my changes yesterday!', answers: ['to push'] },
        { kind: 'gap', text: "Arjun suggested ___ (use) clustering.", answers: ['using'] },
        { kind: 'gap', text: '___ (write) tests saves time in the long run.', answers: ['Writing'] },
        { kind: 'gap', text: "I'm good at ___ (find) bugs.", answers: ['finding'] },
        { kind: 'gap', text: "Ken agreed ___ (help) us with the migration.", answers: ['to help'] },
        { kind: 'gap', text: 'Have you finished ___ (review) the PR?', answers: ['reviewing'] },
        { kind: 'gap', text: 'I managed ___ (fix) it before the demo.', answers: ['to fix'] },
        { kind: 'transform', instruction: 'Перепиши с enjoy', source: 'I like it when I solve hard problems.', answers: ['I enjoy solving hard problems.'] },
        { kind: 'transform', instruction: 'Вежливая просьба: Would you mind…?', source: 'Please check my config.', answers: ['Would you mind checking my config?'] },
        { kind: 'transform', instruction: 'Перепиши с forget to', source: "I didn't update the README. I forgot.", answers: ['I forgot to update the README.'] },
        { kind: 'fix', sentence: 'I want learning Rust.', answers: ['I want to learn Rust.'] },
        { kind: 'fix', sentence: 'She is interested in to join the project.', answers: ['She is interested in joining the project.'] },
        { kind: 'fix', sentence: 'We discussed to move to AWS.', answers: ['We discussed moving to AWS.'] },
        { kind: 'fix', sentence: 'I look forward to work with you.', answers: ['I look forward to working with you.'], explain: '*look forward to* — здесь to предлог, поэтому дальше -ing.' },
        { kind: 'fix', sentence: 'He refused helping us.', answers: ['He refused to help us.'] },
        { kind: 'order', words: ['I', 'enjoy', 'working', 'with', 'designers', '.'], ru: 'Мне нравится работать с дизайнерами.' },
        { kind: 'order', words: ['I', 'decided', 'to', 'learn', 'the', 'domain', 'first', '.'], ru: 'Я решил сначала изучить предметную область.' },
        { kind: 'order', words: ['Would', 'you', 'mind', 'reviewing', 'this', '?'], ru: 'Не мог бы ты посмотреть это?' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: career & motivation',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'tricky', ru: 'каверзный, сложный', example: 'I enjoy solving tricky problems.' },
            { chunk: 'domain', ru: 'предметная область', example: 'Learn the domain first.' },
            { chunk: 'achieve', ru: 'достичь', example: 'What do you hope to achieve?' },
            { chunk: 'lead a feature', ru: 'вести фичу', example: 'I hope to lead a feature.' },
            { chunk: 'work-life balance', ru: 'баланс работы и жизни', example: 'Work-life balance is important to me.' },
            { chunk: 'look forward to', ru: 'ждать с нетерпением', example: 'I look forward to working with you.' },
            { chunk: 'be afraid of', ru: 'бояться', example: "Don't be afraid of asking." },
            { chunk: 'good at', ru: 'хорош в', example: "She's good at debugging." },
            { chunk: 'interested in', ru: 'интересуюсь', example: "I'm interested in cloud architecture." },
            { chunk: 'in the long run', ru: 'в долгосрочной перспективе', example: 'Tests save time in the long run.' },
            { chunk: 'thanks for agreeing', ru: 'спасибо, что согласились', example: 'Thanks for agreeing to help.' },
            { chunk: 'burnout', ru: 'выгорание', example: 'Working late leads to burnout.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['burnout', 'выгорание'],
            ['tricky', 'каверзный'],
            ['achieve', 'достичь'],
            ['domain', 'предметная область'],
            ['in the long run', 'в долгосрочной перспективе'],
          ],
        },
        { kind: 'gap', text: "I'm really interested ___ machine learning.", answers: ['in'] },
        { kind: 'gap', text: "She's very good ___ explaining complex things.", answers: ['at'] },
        { kind: 'gap', text: 'I look forward ___ hearing from you.', answers: ['to'] },
        { kind: 'gap', text: 'Too much overtime leads to ___ .', answers: ['burnout'] },
        { kind: 'gap', text: 'What do you want to ___ this year?', answers: ['achieve'] },
        { kind: 'choice', prompt: 'Конец делового письма:', options: ['I look forward to hearing from you.', 'I look forward to hear from you.', 'I wait your answer.', 'Answer me soon.'], answer: 0 },
        { kind: 'choice', prompt: '«Баланс работы и личной жизни»:', options: ['work-life balance', 'job-home balance', 'work-rest balance', 'life-work equal'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'I enjoy solving tricky problems.' },
        { kind: 'dictation', text: 'I decided to learn the domain first.' },
        { kind: 'dictation', text: 'I try to avoid working late.' },
        { kind: 'dictation', text: "I'm thinking about taking an AWS course." },
        { kind: 'dictation', text: "Don't be afraid of asking questions." },
        { kind: 'dictation', text: 'Remember to take breaks.' },
        { kind: 'dictation', text: 'I look forward to working with you.' },
        { kind: 'dictation', text: 'Would you mind reviewing my PR?' },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: about yourself',
      minutes: 10,
      items: [
        { kind: 'shadow', text: 'I enjoy solving tricky problems.' },
        { kind: 'shadow', text: "I'm thinking about taking an AWS course." },
        { kind: 'shadow', text: "Don't be afraid of asking questions." },
        { kind: 'shadow', text: 'I hope to lead a small feature this year.' },
        {
          kind: 'speak',
          situation: 'Ответь на вопрос интервью: «What do you enjoy and what do you avoid at work?»',
          keywords: ['I enjoy', 'I avoid'],
          sample: 'I enjoy building user interfaces and working with designers. I avoid writing code without tests, and I avoid long meetings.',
        },
        {
          kind: 'speak',
          situation: 'Расскажи о планах развития: что хочешь изучить, чего надеешься достичь, о чём думаешь.',
          keywords: ['I want to', 'I hope to', 'thinking about'],
          sample: "I want to learn more about cloud architecture. I hope to become a senior developer in two years. I'm thinking about getting an AWS certificate.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: blog profile',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Напиши свой профиль для внутреннего блога «Meet the team»: что тебе нравится в работе, чего ты избегаешь, что решил(а) или планируешь, совет новичкам.',
          checklist: [
            'Глаголы + -ing: *enjoy, avoid, consider…*',
            'Глаголы + to: *decide, hope, want, plan…*',
            'Предлог + -ing: *interested in, good at, about…*',
            'Совет с *remember to / don’t forget to*',
          ],
          minWords: 55,
          sample:
            "Meet the team: Alex, frontend developer\nI joined Brightloop four months ago. I enjoy solving tricky UI problems, and I love working with our designers. When I joined, I decided to learn the logistics domain before writing much code. I try to avoid working late, because I want to keep a good work-life balance. This year I hope to lead a small feature, and I'm thinking about taking an AWS course.\nMy advice: don't be afraid of asking questions, and remember to take breaks.",
        },
      ],
    },
  ],
};

export default lesson;
