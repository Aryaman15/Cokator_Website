export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  details: string;
  bullets: string[];
  icon: string;
};

export type Domain = {
  title: string;
  description: string;
  examples: string[];
  sampleIds: string[];
};

export type ClientLogo = {
  name: string;
  logo: string;
  tagline: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  domain: string;
  services: string[];
  thumbnail: string;
  pages: string[];
  pdfUrl: string;
};

export type Stat = {
  label: string;
  value: string;
  description: string;
};
