import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'composition',
    title: 'Book Composition & Typesetting',
    shortDescription: 'Print-ready page layout in InDesign and LaTeX.',
    details: 'Structured page design, template creation, math & chemistry equation handling, and accessibility-minded layout across K–12 and higher education titles.',
    bullets: ['InDesign & LaTeX workflows', 'Complex math and chemistry', 'Template + style guide adherence', 'Print + digital outputs'],
    icon: 'book-open',
  },
  {
    id: 'illustrations',
    title: 'Illustrations & Art Studio',
    shortDescription: 'Technical, scientific, and children’s art.',
    details: 'Redrawing, diagramming, medical art, and playful children’s illustrations that stay faithful to pedagogical goals.',
    bullets: ['STEM diagrams', 'Medical and nursing visuals', 'Children’s illustration', 'Infographics & cover design'],
    icon: 'paint-brush',
  },
  {
    id: 'ebook',
    title: 'eBook & Digital Publishing',
    shortDescription: 'EPUB, MOBI, accessible PDFs, and interactive modules.',
    details: 'Responsive eBook production with media overlays, interactive assets, and accessibility tagging for modern reading platforms.',
    bullets: ['Reflowable & fixed-layout EPUB', 'QA on major devices', 'Accessibility tagging', 'HTML5 learning objects'],
    icon: 'device-tablet',
  },
  {
    id: 'editorial',
    title: 'Editorial & Language Services',
    shortDescription: 'Copyediting, proofreading, and localization.',
    details: 'Peer-reviewed copyediting, proofreading, fact-checking, and multilingual localization following publisher style guides.',
    bullets: ['Developmental editing', 'Copyediting & proofreading', 'SME reviews', 'Localization & translation'],
    icon: 'pencil',
  },
  {
    id: 'pm',
    title: 'Project Management',
    shortDescription: 'Structured oversight with transparent reporting.',
    details: 'Agile-ready project managers who oversee schedules, quality gates, and communication for multi-title programs.',
    bullets: ['Dedicated PMs', 'Risk logs & dashboards', 'Client-aligned SLAs', 'Rapid sample cycles'],
    icon: 'clipboard',
  },
  {
    id: 'web-seo',
    title: 'Website & SEO Content',
    shortDescription: 'Content strategy, SEO, and web-ready copy.',
    details: 'Research-driven web and SEO content for education and professional audiences, aligned to brand tone and conversion goals.',
    bullets: ['SEO articles & landing pages', 'Content design', 'Keyword research', 'On-page optimization'],
    icon: 'globe-alt',
  },
];
