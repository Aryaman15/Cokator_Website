import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Services from './routes/Services';
import Portfolio from './routes/Portfolio';
import Domains from './routes/Domains';
import About from './routes/About';
import Contact from './routes/Contact';
import WorkWithUs from './routes/WorkWithUs';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PageWrapper from './components/layout/PageWrapper';
import ScrollProgress from './components/shared/ScrollProgress';
import { useTheme } from './components/layout/ThemeProvider';

function App() {
  const { theme } = useTheme();

  return (
    <div
      data-theme={theme}
      className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50"
    >
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-80 transition duration-500 dark:opacity-90"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#f9731615,transparent_38%),radial-gradient(circle_at_80%_0%,#0ea5e918,transparent_32%),radial-gradient(circle_at_80%_80%,#22c55e18,transparent_38%),radial-gradient(circle_at_10%_80%,#a855f718,transparent_36%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.22),transparent_36%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.24),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(168,85,247,0.24),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.55),rgba(255,255,255,0.35)),linear-gradient(0deg,rgba(15,23,42,0.03),rgba(15,23,42,0.03))] dark:bg-[linear-gradient(120deg,rgba(15,23,42,0.65),rgba(15,23,42,0.45)),linear-gradient(0deg,rgba(148,163,184,0.08),rgba(148,163,184,0.08))]" />
      </div>
      <ScrollProgress />
      <Header />
      <main className="pt-20">
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default App;
