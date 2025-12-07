import { PortfolioItem } from '../types';

const placeholder = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=60';
const page = 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=60';

export const portfolio: PortfolioItem[] = [
  { id: 'k12-math', title: 'Grade 6 Mathematics Workbook', client: 'NBT India', domain: 'K–12 / School', services: ['Composition', 'Illustrations'], thumbnail: placeholder, pages: [page, placeholder], pdfUrl: '#' },
  { id: 'nursing-text', title: 'Undergraduate Nursing Textbook', client: 'Cengage', domain: 'Medical & Nursing', services: ['Composition', 'Diagrams', 'Editorial'], thumbnail: placeholder, pages: [page, placeholder], pdfUrl: '#' },
  { id: 'eng-drawing', title: 'Engineering Drawing Manual', client: 'Macmillan', domain: 'Engineering & Technical', services: ['Composition', 'Technical Art'], thumbnail: placeholder, pages: [page, placeholder], pdfUrl: '#' },
  { id: 'business-case', title: 'Business Case Studies Anthology', client: 'SPI Global', domain: 'Business & Management', services: ['Composition', 'Editorial'], thumbnail: placeholder, pages: [page, placeholder], pdfUrl: '#' },
  { id: 'early-science', title: 'Early Science Activity Book', client: 'National Book Trust', domain: 'K–12 / School', services: ['Illustrations', 'Composition'], thumbnail: placeholder, pages: [page, placeholder], pdfUrl: '#' },
  { id: 'multilingual', title: 'Multilingual Language Workbook', client: 'Oxford University Press', domain: 'Multilingual & International', services: ['Localization', 'Composition'], thumbnail: placeholder, pages: [page, placeholder], pdfUrl: '#' },
  { id: 'ebook-stem', title: 'Interactive STEM eBook', client: 'Cengage', domain: 'Higher Education', services: ['eBook Production', 'Accessibility'], thumbnail: placeholder, pages: [page, placeholder], pdfUrl: '#' },
  { id: 'medical-handbook', title: 'Medical Procedures Handbook', client: 'SAGE', domain: 'Medical & Nursing', services: ['Illustrations', 'Editorial'], thumbnail: placeholder, pages: [page, placeholder], pdfUrl: '#' },
];
