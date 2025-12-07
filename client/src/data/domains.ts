import { Domain } from '../types';

export const domains: Domain[] = [
  {
    title: 'K–12 / School',
    description: 'Activity books, practice workbooks, graded readers, STEM and language programs for early learners.',
    examples: ['Workbooks', 'Readers', 'Activity kits'],
    sampleIds: ['k12-math', 'early-science'],
  },
  {
    title: 'Higher Education',
    description: 'Undergraduate and graduate content with complex math, engineering, and professional case studies.',
    examples: ['STEM textbooks', 'Case studies', 'Lab manuals'],
    sampleIds: ['eng-drawing', 'business-case'],
  },
  {
    title: 'Medical & Nursing',
    description: 'Visual-first content with precise redraws, dosage tables, and accessibility.',
    examples: ['Nursing foundations', 'Anatomy diagrams', 'Clinical skills'],
    sampleIds: ['nursing-text'],
  },
  {
    title: 'Engineering & Technical',
    description: 'Detailed diagrams, schematics, and standards-driven layouts for technical education.',
    examples: ['Engineering drawing', 'Technical manuals'],
    sampleIds: ['eng-drawing'],
  },
  {
    title: 'Business & Management',
    description: 'MBA and professional programs with charts, cases, and multimedia-ready figures.',
    examples: ['Case study readers', 'Instructor guides'],
    sampleIds: ['business-case'],
  },
  {
    title: 'Multilingual & International',
    description: 'Parallel-language editions, right-to-left composition, and localized art.',
    examples: ['Dual language workbooks', 'Localized eBooks'],
    sampleIds: ['multilingual'],
  },
];
