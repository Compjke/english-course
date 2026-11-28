import type { Lesson } from '../../../engine/types';

const lesson: Lesson = {
  id: 'b2p-08',
  level: 'B2+',
  title: 'Day 93: What happens if this node goes down?',
  grammar: 'System design talk 2: scaling, failure scenarios, bottlenecks — conditionals and hypotheticals',
  scene: 'Вторая часть пробного интервью: масштабирование и отказоустойчивость.',
  stages: [
    {
      kind: 'episode',
      title: 'Episode: scaling and failures',
      minutes: 10,
      items: [
        {
          kind: 'dialogue',
          title: 'Mock system design, part 2',
          format: 'call',
          lines: [
            { who: 'Arjun', text: "Your design handles today's load. What happens if traffic grows ten times?" },
            { who: 'You', text: "The first bottleneck would probably be the database writes. I'd shard the status table by parcel ID, so writes are spread across several nodes." },
            { who: 'Arjun', text: "And the cache?" },
            { who: 'You', text: "The cache scales horizontally; we'd just add nodes. The real risk is a cache stampede: if a popular key expires, thousands of requests hit the database at once. To prevent that, I'd add request coalescing or slightly randomised expiry times." },
            { who: 'Arjun', text: "Nice. What happens if the queue goes down?" },
            { who: 'You', text: "Drivers' updates would be buffered on the phones, since the app already works offline. Once the queue is back, they'd be replayed. We'd lose freshness, but not data." },
            { who: 'Arjun', text: "And if a whole region goes down?" },
            { who: 'You', text: "Then we'd fail over to a second region. Writes would pause for a few minutes during the switch. Whether that's acceptable depends on the business: for parcel tracking, I'd say it is." },
            { who: 'Arjun', text: "Last question: how would you know something is wrong?" },
            { who: 'You', text: "I'd monitor queue lag, error rates and p99 latency, with alerts on each. If the queue lag exceeded one minute, the on-call engineer would be paged." },
          ],
        },
        { kind: 'choice', prompt: 'What would be the first bottleneck at 10× traffic?', options: ['Database writes', 'The UI', 'The cache', 'DNS'], answer: 0 },
        { kind: 'choice', prompt: 'How would you scale writes?', options: ['Shard the status table by parcel ID', 'Buy one big server', 'Delete old data', 'Stop writing'], answer: 0 },
        { kind: 'choice', prompt: 'What is a cache stampede?', options: ['Many requests hit the DB when a popular key expires', 'A slow cache', 'A cache with no data', 'A broken server'], answer: 0 },
        { kind: 'choice', prompt: 'What happens if the queue goes down?', options: ['Updates are buffered on phones and replayed later', 'All data is lost', 'The app crashes', 'Nothing works forever'], answer: 0 },
        { kind: 'choice', prompt: 'What would you monitor?', options: ['Queue lag, error rates and p99 latency', 'Only CPU', 'Nothing', 'The office temperature'], answer: 0 },
      ],
    },
    {
      kind: 'grammar',
      title: 'Language: hypotheticals in design',
      minutes: 22,
      items: [
        {
          kind: 'theory',
          title: 'Talking about failure scenarios',
          body:
            'System design discussions are full of **"what if"** situations. Use the right conditional:\n\n' +
            '**First conditional** (realistic, likely): *If a popular key **expires**, thousands of requests **will hit** the database.*\n' +
            '**Second conditional** (hypothetical design, not built yet): *If traffic **grew** ten times, the database **would be** the bottleneck. I**’d shard** it.*\n' +
            '**would** alone for consequences in a hypothetical design: *Drivers’ updates **would be** buffered.*\n' +
            '**Once / as soon as + present**: *Once the queue **is** back, they’d be replayed.*\n' +
            '**Whether … depends on…**: *Whether that’s acceptable depends on the business.*',
          table: [
            ['Question', 'Answer pattern'],
            ['What happens if X goes down?', 'If X went down, … would… / …would be buffered.'],
            ['How would you scale it?', "I'd shard / replicate / add nodes, so that…"],
            ['What is the bottleneck?', 'The first bottleneck would probably be…'],
            ['How would you know?', "I'd monitor… with alerts on…"],
            ['Is that acceptable?', 'It depends on… / Whether… depends on…'],
          ],
        },
        {
          kind: 'theory',
          title: 'Precise verbs for scaling',
          body:
            '*scale horizontally / vertically, shard (partition), replicate, fail over, buffer, replay, throttle, degrade gracefully, page (the on-call engineer)*.\n\n' +
            '**degrade gracefully** — keep working with reduced features instead of failing completely: *If the map service fails, the app degrades gracefully to a list of stops.*',
          pitfalls: [
            { wrong: 'If traffic would grow, the DB would be slow.', right: 'If traffic grew, the DB would be slow.' },
            { wrong: 'Once the queue will be back, …', right: 'Once the queue is back, …' },
            { wrong: 'It depends of the business.', right: 'It depends on the business.' },
            { wrong: 'The bottleneck will be probably the DB.', right: 'The bottleneck would probably be the DB.' },
          ],
        },
        { kind: 'choice', prompt: 'If traffic ___ ten times, the database would be the bottleneck.', options: ['grows will', 'grew', 'would grow', 'has grown'], answer: 1 },
        { kind: 'choice', prompt: 'The first bottleneck ___ probably be the database writes.', options: ['would', 'will to', 'is', 'does'], answer: 0 },
        { kind: 'choice', prompt: "I'd shard the table ___ writes are spread across nodes.", options: ['so that', 'because of', 'despite', 'unless'], answer: 0 },
        { kind: 'choice', prompt: 'Once the queue ___ back, updates would be replayed.', options: ['will be', 'is', 'would be', 'was being'], answer: 1 },
        { kind: 'choice', prompt: 'Whether that is acceptable depends ___ the business.', options: ['of', 'on', 'from', 'at'], answer: 1 },
        { kind: 'choice', prompt: 'Keep working with fewer features when a part fails:', options: ['degrade gracefully', 'fail fast', 'crash', 'shard'], answer: 0 },
        { kind: 'choice', prompt: 'Switch to a second region:', options: ['fail over', 'fall down', 'fail out', 'over-fail'], answer: 0 },
        { kind: 'choice', prompt: 'If the queue lag exceeded one minute, the on-call engineer ___ paged.', options: ['would be', 'will', 'is be', 'would'], answer: 0 },
        { kind: 'gap', text: 'The cache scales ___ : we just add nodes.', answers: ['horizontally'] },
        { kind: 'gap', text: 'If a popular key ___ (expire), thousands of requests will hit the DB.', answers: ['expires'] },
        { kind: 'gap', text: "We'd lose freshness, but ___ data.", answers: ['not'] },
        { kind: 'gap', text: 'Updates would be ___ on the phones. (stored temporarily)', answers: ['buffered'] },
        { kind: 'gap', text: 'We would fail ___ to a second region.', answers: ['over'] },
        { kind: 'gap', text: "I'd monitor queue lag and p99 ___ .", answers: ['latency'] },
        { kind: 'gap', text: 'To prevent a cache ___ , use randomised expiry.', answers: ['stampede'] },
        { kind: 'transform', instruction: 'Answer with a second conditional', source: 'What if the database goes down? (read from replica)', answers: ['If the database went down, we would read from a replica.', "If the database went down, we'd read from a replica."] },
        { kind: 'transform', instruction: 'Describe graceful degradation', source: 'Map service fails → app shows a list of stops.', answers: ['If the map service failed, the app would degrade gracefully to a list of stops.', 'If the map service fails, the app degrades gracefully to a list of stops.'] },
        { kind: 'transform', instruction: 'Use "Whether … depends on…"', source: 'Is a 5-minute pause OK? The business decides.', answers: ['Whether a five-minute pause is acceptable depends on the business.', 'Whether a 5-minute pause is acceptable depends on the business.', 'Whether a five-minute pause is OK depends on the business.'] },
        { kind: 'fix', sentence: 'If the queue would go down, data would be lost.', answers: ['If the queue went down, data would be lost.'] },
        { kind: 'fix', sentence: 'Once the region will be back, we switch.', answers: ['Once the region is back, we switch.', "Once the region is back, we'll switch."] },
        { kind: 'fix', sentence: 'It depends of the traffic.', answers: ['It depends on the traffic.'] },
        { kind: 'fix', sentence: 'The bottleneck will be probably the network.', answers: ['The bottleneck would probably be the network.', 'The bottleneck will probably be the network.'] },
        { kind: 'fix', sentence: 'We would failover to another region.', answers: ['We would fail over to another region.'] },
        { kind: 'order', words: ['The', 'first', 'bottleneck', 'would', 'be', 'writes', '.'], ru: 'Первым узким местом стала бы запись.' },
        { kind: 'order', words: ["We'd", 'fail', 'over', 'to', 'a', 'second', 'region', '.'], ru: 'Мы бы переключились на второй регион.' },
        { kind: 'order', words: ['It', 'would', 'degrade', 'gracefully', '.'], ru: 'Система бы плавно деградировала.' },
      ],
    },
    {
      kind: 'vocab',
      title: 'Vocabulary: system design 2',
      minutes: 10,
      items: [
        {
          kind: 'vocabList',
          words: [
            { chunk: 'shard', ru: 'шардировать', example: "I'd shard the table by parcel ID." },
            { chunk: 'replica', ru: 'реплика', example: 'Reads go to a replica.' },
            { chunk: 'cache stampede', ru: 'лавина запросов при истечении кэша', example: 'A cache stampede can kill the database.' },
            { chunk: 'request coalescing', ru: 'объединение одинаковых запросов', example: 'Request coalescing prevents stampedes.' },
            { chunk: 'fail over', ru: 'переключиться на резерв', example: 'We fail over to a second region.' },
            { chunk: 'queue lag', ru: 'отставание очереди', example: 'Monitor the queue lag.' },
            { chunk: 'p99 latency', ru: 'задержка 99-го перцентиля', example: 'Our p99 latency is 300 ms.' },
            { chunk: 'page', ru: 'вызвать (дежурного)', example: 'The alert will page the on-call engineer.' },
            { chunk: 'degrade gracefully', ru: 'плавно деградировать', example: 'The app should degrade gracefully.' },
            { chunk: 'single region', ru: 'один регион', example: 'A single region is a risk.' },
            { chunk: 'eventual consistency', ru: 'согласованность в конечном счёте', example: 'Tracking can live with eventual consistency.' },
            { chunk: 'idempotent', ru: 'идемпотентный', example: 'Replays must be idempotent.' },
          ],
        },
        {
          kind: 'match',
          pairs: [
            ['idempotent', 'идемпотентный'],
            ['replica', 'реплика'],
            ['queue lag', 'отставание очереди'],
            ['eventual consistency', 'согласованность в конечном счёте'],
            ['page', 'вызвать дежурного'],
          ],
        },
        { kind: 'gap', text: 'Replayed updates must be ___ , so duplicates do no harm.', answers: ['idempotent'] },
        { kind: 'gap', text: 'Tracking can live with eventual ___ .', answers: ['consistency'] },
        { kind: 'gap', text: 'Our p99 ___ is 300 milliseconds.', answers: ['latency'] },
        { kind: 'gap', text: 'If the lag grows, the alert will ___ the on-call engineer.', answers: ['page'] },
        { kind: 'gap', text: 'Reads can go to a read ___ .', answers: ['replica'] },
        { kind: 'choice', prompt: '"p99 latency = 300 ms" means…', options: ['99% of requests are faster than 300 ms', 'average is 300 ms', '99 requests took 300 ms', 'the slowest request was 300 ms'], answer: 0 },
        { kind: 'choice', prompt: 'Why make replayed updates idempotent?', options: ['Processing the same update twice must not cause errors', 'To make them faster', 'To save money', 'No reason'], answer: 0 },
      ],
    },
    {
      kind: 'listening',
      title: 'Listening & spelling',
      minutes: 10,
      items: [
        { kind: 'dictation', text: 'What happens if traffic grows ten times?' },
        { kind: 'dictation', text: 'The first bottleneck would probably be the database writes.' },
        { kind: 'dictation', text: "I'd shard the status table by parcel ID." },
        { kind: 'dictation', text: 'If a popular key expires, thousands of requests hit the database.' },
        { kind: 'dictation', text: "Once the queue is back, they'd be replayed." },
        { kind: 'dictation', text: "Then we'd fail over to a second region." },
        { kind: 'dictation', text: "Whether that's acceptable depends on the business." },
        { kind: 'dictation', text: "I'd monitor queue lag, error rates and p99 latency." },
      ],
    },
    {
      kind: 'speaking',
      title: 'Speaking: scale and failure',
      minutes: 14,
      items: [
        { kind: 'shadow', text: "The first bottleneck would probably be the database. I'd shard it by parcel ID." },
        { kind: 'shadow', text: 'If the queue went down, updates would be buffered on the phones.' },
        { kind: 'shadow', text: "We'd lose freshness, but not data." },
        { kind: 'shadow', text: "Whether that's acceptable depends on the business." },
        {
          kind: 'speak',
          situation: '"What happens if your main database goes down?" Answer with a failure plan.',
          keywords: ['if', 'would', 'fail over'],
          sample: "If the primary database went down, we would fail over to a replica within a minute. Writes would pause during the switch, but reads would continue from the cache.",
        },
        {
          kind: 'speak',
          situation: '"How would you scale this to 100 times the load?" Name the bottleneck and the fix.',
          keywords: ['bottleneck would', "I'd"],
          sample: "At 100 times the load, the bottleneck would be the write path. I'd shard the database, add more queue partitions, and scale the consumers horizontally.",
        },
        {
          kind: 'speak',
          situation: '"How would you know the system is unhealthy?" Name metrics and alerts.',
          keywords: ["I'd monitor", 'alert'],
          sample: "I'd monitor error rates, p99 latency and queue lag. If any of them crossed a threshold for five minutes, an alert would page the on-call engineer.",
        },
      ],
    },
    {
      kind: 'writing',
      title: 'Writing: failure modes section',
      minutes: 8,
      items: [
        {
          kind: 'write',
          task: 'Write the "Scaling and failure modes" section of the tracking service design: 10× growth, cache stampede, queue outage, region outage, monitoring.',
          checklist: [
            'Second conditional for hypothetical scenarios',
            'Precise verbs: shard, fail over, buffer, degrade gracefully',
            '*Once / as soon as + present*',
            'Monitoring and alert thresholds',
          ],
          minWords: 90,
          sample:
            "Scaling and failure modes\n10× growth: the first bottleneck would be database writes. We would shard the status table by parcel ID and scale queue consumers horizontally.\nCache stampede: if a popular key expired, many requests would hit the database at once. We would use request coalescing and randomised expiry times.\nQueue outage: driver updates would be buffered on the phones. Once the queue is back, they would be replayed; updates are idempotent, so duplicates do no harm.\nRegion outage: we would fail over to a second region, with writes paused for a few minutes.\nMonitoring: queue lag, error rate and p99 latency, with alerts that page the on-call engineer if the lag exceeds one minute.",
        },
      ],
    },
  ],
};

export default lesson;
