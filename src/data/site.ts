// Central content model. Everything the page says lives here.

export const profile = {
  name: 'José Marciano',
  initials: 'JM',
  role: 'Senior Software Engineer',
  eyebrow: 'Senior Software Engineer · Fintech · Go',
  location: 'Criciúma, Brazil',
  tagline: 'I build the backends that move money, and keep them fast without losing the safe part.',
  email: 'marcianojosepaulo@gmail.com',
  resume: '/resume/jose-marciano-resume.pdf',
  links: {
    github: 'https://github.com/joseMarciano',
    linkedin: 'https://www.linkedin.com/in/marciano-josepaulo',
    medium: 'https://medium.com/@marcianojosepaulo',
  },
} as const;

export const about = {
  bio: `I'm a backend engineer, seven years in, and most of that has been fintech: risk and transaction-limit engines, pricing, and the rails that move crypto and stablecoins around. A lot of my work is taking heavy Java services and rewriting them in Go. At BTG Pactual that cut one service's memory by 40% and got it starting faster. I lean toward event-driven systems you can actually observe and recover when something breaks at 2am, and I like the low-level work a lot of people skip: reading pprof output and chasing the slow tail of a latency graph.`,
  focus: [
    { title: 'Fintech infrastructure', note: 'Risk, limits & money movement' },
    { title: 'Go performance', note: 'Java → Go, profiling, low tail latency' },
    { title: 'Distributed systems', note: 'Event-driven, gRPC, observability' },
  ],
  highlights: [
    { value: '7 yrs', note: 'shipping backend' },
    { value: '−40%', note: 'memory, Java → Go' },
    { value: '100%', note: 'on-time SDK deploys' },
  ],
} as const;

// Grouped tech: minimal chips, our palette.
export const stack = [
  { group: 'Languages', items: ['Go', 'Java', 'Spring Boot', 'TypeScript'] },
  { group: 'Messaging & RPC', items: ['gRPC', 'NATS', 'RabbitMQ', 'ActiveMQ'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'Cloud & IaC', items: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
  { group: 'Observability', items: ['Datadog', 'New Relic', 'Grafana', 'Kibana'] },
] as const;

// Reverse-chronological. `current` flags the active role.
export const experience = [
  {
    company: 'zerohash',
    role: 'Senior Software Engineer',
    place: 'Chicago, US · Remote',
    period: '2025 - Present',
    current: true,
    description: `I work on the backend of fund-sdk, the toolkit partners use to move money instantly across crypto and stablecoin rails. Releases go out on tight deadlines, and every SDK update has shipped on time so far. Most of my work is designing new services and tuning the ones already in production, then explaining the tradeoffs to people who don't read Go.`,
  },
  {
    company: 'McGraw Hill',
    role: 'Senior Software Engineer',
    place: 'New York, US · Remote',
    period: '2024 - 2025',
    current: false,
    description: `I built and ran the offer-pricing-service in the EDOMS commerce platform, a Go implementation of Dynamic Offers on AWS that plugged into the rest of McGraw Hill's systems. Over time I became the Go reference on the team, the person who set the patterns and reviewed with the next maintainer in mind. I also took over the EDOMS frontend transition and shipped the first MVP two weeks early.`,
  },
  {
    company: 'BTG Pactual',
    role: 'Senior Software Engineer',
    place: 'São Paulo, Brazil',
    period: '2022 - 2024',
    current: false,
    description: `At BTG, Latin America's largest investment bank, I moved a set of legacy Java services onto Go APIs and cut their memory footprint by about 40%, with faster startups as a bonus. I wrote the algorithms behind risk calculation and transaction-limit checks for trading flows, the kind of code that has to stay correct when real money and real volume are on the line. I shipped it tested and on schedule, and built a few proofs of concept along the way.`,
  },
  {
    company: 'Betha Sistemas',
    role: 'Full Stack Software Engineer',
    place: 'Santa Catarina, Brazil',
    period: '2019 - 2022',
    current: false,
    description: `This was a public-sector HR platform used by hundreds of organizations, and I shipped more than 20 features for it without missing the deadlines that came with each one. I designed and built the APIs end to end. Most days also meant pairing with other engineers, which is where a lot of the debugging and code review actually happened.`,
  },
] as const;

export const education = [
  { title: 'MBA in Golang', org: 'Universidade de Brasília', year: '2024' },
  { title: 'BSc, Computer Engineering', org: 'Universidade SATC', year: '2023' },
] as const;

export const meta = {
  title: 'José Marciano · Senior Backend Engineer · Fintech & Go',
  description:
    'Backend engineer focused on fast, high-concurrency systems for fintech. I migrate Java services to Go and build the distributed infrastructure behind money movement.',
  url: 'https://josemarciano.github.io',
} as const;
