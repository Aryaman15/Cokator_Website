import { PortfolioItem } from '../types';

import placeholder from "../../public/assets/pdfThumbnail/Brochure_page-0001.jpg"
import samplePdf from "../../public/assets/pdf/Complete_Portfolio.pdf"
// const placeholder = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=60';
// const samplePdf = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

export const portfolio: PortfolioItem[] = [
  { id: 'k12-math', title: 'Grade 6 Mathematics Workbook', client: 'NBT India', domain: 'K–12 / School', services: ['Composition', 'Illustrations'], thumbnail: placeholder, pages: [], pdfUrl: samplePdf },
  { id: 'nursing-text', title: 'Undergraduate Nursing Textbook', client: 'Cengage', domain: 'Medical & Nursing', services: ['Composition', 'Diagrams', 'Editorial'], thumbnail: placeholder, pages: [], pdfUrl: samplePdf },
  { id: 'eng-drawing', title: 'Engineering Drawing Manual', client: 'Macmillan', domain: 'Engineering & Technical', services: ['Composition', 'Technical Art'], thumbnail: placeholder, pages: [], pdfUrl: samplePdf },
  { id: 'business-case', title: 'Business Case Studies Anthology', client: 'SPI Global', domain: 'Business & Management', services: ['Composition', 'Editorial'], thumbnail: placeholder, pages: [], pdfUrl: samplePdf },
  { id: 'early-science', title: 'Early Science Activity Book', client: 'National Book Trust', domain: 'K–12 / School', services: ['Illustrations', 'Composition'], thumbnail: placeholder, pages: [], pdfUrl: samplePdf },
  { id: 'multilingual', title: 'Multilingual Language Workbook', client: 'Oxford University Press', domain: 'Multilingual & International', services: ['Localization', 'Composition'], thumbnail: placeholder, pages: [], pdfUrl: samplePdf },
  { id: 'ebook-stem', title: 'Interactive STEM eBook', client: 'Cengage', domain: 'Higher Education', services: ['eBook Production', 'Accessibility'], thumbnail: placeholder, pages: [], pdfUrl: samplePdf },
  { id: 'medical-handbook', title: 'Medical Procedures Handbook', client: 'SAGE', domain: 'Medical & Nursing', services: ['Illustrations', 'Editorial'], thumbnail: placeholder, pages: [], pdfUrl: samplePdf },
];
