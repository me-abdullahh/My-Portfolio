/**
 * All site content lives here. Edit this file to update the portfolio —
 * anything in [SQUARE BRACKETS] is a placeholder to replace with real content.
 */

export const site = {
  name: 'Muhammad Abdullah',
  fullName: 'Muhammad Abdullah Sheikh',
  role: 'Full Stack Developer',
  location: 'Karachi, Pakistan',
  email: 'mabdullahitu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammadabdullah-sheikh',
  upwork: '#',
  cv: '#',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com',
  description:
    'Full Stack Developer in Karachi building fast, scalable web products with Next.js, React, Node.js, NestJS and TypeScript. Senior faculty at Aptech.',
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats: { label: string; to?: number; suffix?: string; text?: string }[] = [
  { to: 5, suffix: '+', label: 'Years of experience' },
  { text: '[XX]+', label: 'Projects shipped' },
  { text: '[XX]+', label: 'Students mentored' },
  { to: 3, label: 'Active roles today' },
]

export const marqueeTech = ['React', 'Next.js', 'Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'MongoDB', 'GSAP', 'Three.js']

export const services = [
  {
    title: 'Full-stack web apps',
    body: 'Next.js and React frontends with Node.js and NestJS backends, built as reusable, maintainable components that hold up in production.',
    tags: ['Next.js', 'React', 'NestJS', 'TypeScript'],
  },
  {
    title: '3D & motion',
    body: 'Scroll-driven GSAP timelines and Three.js scenes, tuned for performance.',
    tags: [],
  },
  {
    title: 'API & database design',
    body: 'Clean REST APIs with PostgreSQL and MongoDB, structured to scale.',
    tags: ['REST', 'PostgreSQL'],
  },
  {
    title: 'Training & mentoring',
    body: 'As Senior Faculty at Aptech I design learning paths, run code reviews and coach students through Git, REST APIs and deployment.',
    tags: [],
  },
]

export const stackGroups = [
  { title: 'Frontend', items: 'React · Next.js · TypeScript · React Native' },
  { title: 'Backend', items: 'Node.js · NestJS · Express · REST APIs' },
  { title: 'Databases', items: 'PostgreSQL · MongoDB · MySQL' },
  { title: 'Motion & 3D', items: 'GSAP · Three.js' },
]

/** Rings of the orbit diagram. angle = starting position in degrees. */
export const orbit = [
  { r: 120, dur: 60, reverse: false, items: [{ t: 'Next.js', a: -150 }, { t: 'React', a: 30 }] },
  { r: 190, dur: 80, reverse: true, items: [{ t: 'TypeScript', a: -90 }, { t: 'NestJS', a: 30 }, { t: 'Node.js', a: 150 }] },
  {
    r: 260,
    dur: 100,
    reverse: false,
    items: [{ t: 'PostgreSQL', a: -135 }, { t: 'MongoDB', a: -45 }, { t: 'GSAP', a: 45 }, { t: 'Three.js', a: 135 }],
  },
]

export const projects = [
  { title: '[PROJECT NAME]', body: '[One line on the problem solved and the measurable result.]', tags: ['Next.js', 'NestJS'], hue: 0, href: '#' },
  { title: '[PROJECT NAME]', body: '[One line on the problem solved and the measurable result.]', tags: ['React', 'MongoDB'], hue: 35, href: '#' },
  { title: '[PROJECT NAME]', body: '[One line on the problem solved and the measurable result.]', tags: ['Three.js', 'GSAP'], hue: -40, href: '#' },
]

export const featured = {
  title: '[PROJECT NAME]',
  body: '[Two sentences on the problem, your role and the stack you used.]',
  metrics: [
    { value: '[XX]%', label: '[Metric label]' },
    { value: '[XX]x', label: '[Metric label]' },
  ],
  href: '#work',
}

export const experience = [
  {
    date: 'Jan 2024 – Present',
    role: 'Senior Faculty, Web & Software Engineering',
    org: 'Aptech Learning',
    body: 'Teaching full-stack development and mentoring through real projects.',
  },
  {
    date: 'Jun 2024 – Present',
    role: 'Full Stack Developer',
    org: 'Upwork',
    body: 'Next.js, NestJS and TypeScript apps with PostgreSQL and MongoDB.',
  },
  {
    date: 'Dec 2024 – Present',
    role: 'Computer Lab Assistant',
    org: 'NUML Karachi Campus',
    body: 'Lab IT infrastructure, systems and network operations.',
  },
  {
    date: 'Jul 2021 – Aug 2023',
    role: 'MERN Stack Developer',
    org: 'Activex Solutions',
    body: 'Production web apps, APIs and reusable components.',
  },
]

export const testimonials = [
  { quote: '[CLIENT QUOTE — two or three sentences on the result they got.]', name: '[Name]', role: '[Role, Company]' },
  { quote: '[CLIENT QUOTE — two or three sentences on the result they got.]', name: '[Name]', role: '[Role, Company]' },
  { quote: '[STUDENT QUOTE — two or three sentences on what they learned.]', name: '[Name]', role: '[Student, Aptech]' },
]

export const insights = [
  { category: '[CATEGORY]', title: '[ARTICLE TITLE]', body: '[Two-line summary of the article.]', meta: '[Date] · [X] min read', href: '#' },
  { category: '[CATEGORY]', title: '[ARTICLE TITLE]', body: '', meta: '[Date] · [X] min read', href: '#' },
  { category: '[CATEGORY]', title: '[ARTICLE TITLE]', body: '', meta: '[Date] · [X] min read', href: '#' },
]

export const faqs = [
  {
    q: 'Are you available for remote work?',
    a: 'Yes. I’m open to remote full-stack roles and select freelance projects.',
  },
  {
    q: 'Which technologies do you work with?',
    a: 'Next.js, React, Node.js, NestJS and TypeScript, with PostgreSQL or MongoDB for data.',
  },
  {
    q: 'Do you also teach and mentor?',
    a: 'Yes. I’m Senior Faculty for Web & Software Engineering at Aptech and I mentor developers on fundamentals, code reviews and clean-code practices.',
  },
  {
    q: 'How do we start a project together?',
    a: 'Send me a message with what you’re building, your timeline and budget. I’ll reply with questions and next steps.',
  },
]
