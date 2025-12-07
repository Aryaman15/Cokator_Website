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

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
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
