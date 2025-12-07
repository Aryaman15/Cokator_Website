export type HowWeWorkStep = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const howWeWorkSteps: HowWeWorkStep[] = [
  {
    id: 1,
    title: 'Project Initiation & Briefing',
    description:
      'We align on objectives, timelines, delivery formats, and governance so every stakeholder shares the same playbook.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80&sat=-10',
  },
  {
    id: 2,
    title: 'Editorial & Design Planning',
    description:
      'Editors, designers, and production leads map out structure, accessibility targets, templates, and art direction for your list.',
    image:
      'https://images.unsplash.com/photo-1529333166433-2381beecbe01?auto=format&fit=crop&w=900&q=80&sat=-10',
  },
  {
    id: 3,
    title: 'Sample Development & Approval',
    description:
      'We craft pilot chapters, layouts, and interactive proofs to validate tone, fidelity, and platform readiness before scaling.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80&sat=-10',
  },
  {
    id: 4,
    title: 'Full Production & Composition',
    description:
      'Integrated pods drive manuscript cleanup, design, illustration, composition, XML/ePub build, and media production in parallel.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80&sat=-10',
  },
  {
    id: 5,
    title: 'Quality Assurance & Corrections',
    description:
      'Content, accessibility, and platform QA are baked into every sprint, with fast-turn corrections and reviewer feedback loops.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80&sat=-10',
  },
  {
    id: 6,
    title: 'Final Delivery & Ongoing Support',
    description:
      'We package validated assets for each channel, assist with ingestion, and stay on-call for updates and post-launch support.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80&sat=-10',
  },
];
