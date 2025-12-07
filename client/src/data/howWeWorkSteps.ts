export type HowWeWorkStep = {
  title: string;
  description: string;
  visualTone: string;
};

export const howWeWorkSteps: HowWeWorkStep[] = [
  {
    title: 'Project Initiation & Briefing',
    description: 'Kick-off workshops to clarify goals, audiences, deliverables, and success metrics with your stakeholders.',
    visualTone: 'from-amber-300/40 via-orange-200/30 to-amber-100/50',
  },
  {
    title: 'Editorial & Design Planning',
    description: 'Editorial direction, art direction, and pacing plans that translate the brief into a confident creative roadmap.',
    visualTone: 'from-sky-300/40 via-cyan-200/30 to-blue-100/50',
  },
  {
    title: 'Sample Development & Approval',
    description: 'High-fidelity sample spreads and components to validate tone, hierarchy, and production approach early.',
    visualTone: 'from-emerald-300/40 via-teal-200/30 to-emerald-100/50',
  },
  {
    title: 'Full Production & Composition',
    description: 'Scalable workflows for layout, composition, and illustration so every chapter ships consistently.',
    visualTone: 'from-purple-300/40 via-indigo-200/30 to-purple-100/50',
  },
  {
    title: 'Quality Assurance & Corrections',
    description: 'Editorial QA, accessibility checks, and multi-round proofing to keep quality high before release.',
    visualTone: 'from-rose-300/40 via-pink-200/30 to-rose-100/50',
  },
  {
    title: 'Final Delivery & Ongoing Support',
    description: 'Packaging, handoff, and post-launch iterations so your team can ship confidently and keep improving.',
    visualTone: 'from-lime-300/40 via-green-200/30 to-lime-100/50',
  },
];
