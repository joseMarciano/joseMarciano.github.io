// Central content model. Everything the page says lives here.

export const profile = {
  name: 'José Marciano',
  initials: 'JM',
  role: 'Senior Software Engineer',
  eyebrow: 'Senior Software Engineer · Go · Commerce & Financial Systems',
  location: 'Criciúma, Brazil',
  tagline: 'I design Go services for commerce and financial systems and lead frontend delivery when needed.',
  email: 'marcianojosepaulo@gmail.com',
  resume: '/resume/jose-marciano-resume.pdf',
  links: {
    github: 'https://github.com/joseMarciano',
    linkedin: 'https://www.linkedin.com/in/marciano-josepaulo',
    medium: 'https://medium.com/@marcianojosepaulo',
  },
} as const;

export const about = {
  bio: `I design Go services and deliver frontend work across commerce and financial systems. At McGraw Hill, I develop the EDOMS offer-pricing service in Go on AWS, integrate it with other company systems, and set the Go practices the team follows. At BTG Pactual, I moved Java risk services to Go, cutting their memory use by 40%. I use GitHub Copilot and Claude in my development workflow, and I like code that the next engineer can maintain.`,
  focus: [
    { title: 'Commerce platforms', note: 'Go pricing services & frontend delivery' },
    { title: 'Go engineering', note: 'Service design, Java → Go, performance' },
    { title: 'Financial systems', note: 'Risk, transaction limits & messaging' },
  ],
  highlights: [
    { value: '2020', note: 'building software since' },
    { value: '−40%', note: 'memory, Java → Go' },
    { value: 'Go', note: 'team reference at McGraw Hill' },
  ],
} as const;

// Grouped tech: minimal chips, our palette.
export const stack = [
  { group: 'Languages', items: ['Go', 'TypeScript', 'JavaScript', 'Java', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Angular'] },
  { group: 'Messaging & RPC', items: ['gRPC', 'NATS', 'RabbitMQ', 'ActiveMQ'] },
  { group: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'Cloud & IaC', items: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
  { group: 'AI tooling', items: ['GitHub Copilot', 'Claude'] },
  { group: 'Observability', items: ['Datadog', 'New Relic', 'Grafana', 'Kibana'] },
] as const;

// Reverse-chronological. `current` flags the active role.
export const experience = [
  {
    company: 'McGraw Hill',
    role: 'Senior Software Engineer',
    place: 'New York, US · Remote',
    period: 'Jul 2024 - Present',
    current: true,
    description: `I develop the offer-pricing service for EDOMS, McGraw Hill's commerce platform, implementing Dynamic Offers in Go on AWS and integrating it with other company systems. I led the EDOMS frontend work and shipped its first MVP two weeks early. I set Go patterns and reviewed code for the team, becoming its reference for Go development.`,
  },
  {
    company: 'BTG Pactual',
    role: 'Senior Software Engineer',
    place: 'São Paulo, Brazil',
    period: 'Oct 2022 - Jul 2024',
    current: false,
    description: `At BTG Pactual, I migrated legacy Java risk services to Go APIs, cutting memory use by 40% and shortening startup time. I built risk-calculation and transaction-limit checks for trading flows with risk and compliance teams. I also wrote a library to move data from Redis Streams to RabbitMQ, reducing Redis memory use by 40%.`,
  },
  {
    company: 'Betha Sistemas',
    role: 'Full Stack Software Engineer',
    place: 'Santa Catarina, Brazil',
    period: 'Jun 2020 - Oct 2022',
    current: false,
    description: `At Betha Sistemas, I built full-stack features for a public-sector HR platform, delivering more than 20 on schedule. I designed REST APIs and Java/Spring services backed by PostgreSQL, MongoDB, and ActiveMQ, and supported junior developers through production incidents.`,
  },
] as const;

export const education = [
  { title: 'Postgraduate Degree, Go', org: 'Faculdade Brasília', year: '2024' },
  { title: 'BSc, Computer Engineering', org: 'SATC', year: '2023' },
] as const;

export const meta = {
  title: 'José Marciano · Senior Software Engineer · Go & Commerce Platforms',
  description:
    'Go services, frontend delivery and commerce platforms. I build pricing systems at McGraw Hill and previously developed financial risk systems at BTG Pactual.',
  url: 'https://josemarciano.github.io',
} as const;
