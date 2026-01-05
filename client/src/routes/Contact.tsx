import ContactForm from '../components/contact/ContactForm';
import GlobePanel from '../components/contact/GlobePanel';
import SectionHeading from '../components/shared/SectionHeading';

const Contact = () => (
  <div className="space-y-8 py-10">
    <SectionHeading title="Contact / Get a Quote" subtitle="Share your upcoming titles or digital program" />
    <div className="grid gap-6 lg:grid-cols-2">
      <ContactForm />
      <GlobePanel />
    </div>
    <div className="rounded-2xl bg-white p-6 text-sm text-slate-700 shadow-card dark:bg-slate-900 dark:text-slate-200">
      Email: Kuldeep.rawat.ips@gmail.com · India: +91-9999343638 
    </div>
  </div>
);

export default Contact;
