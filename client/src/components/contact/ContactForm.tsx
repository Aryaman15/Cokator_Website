import { useState } from 'react';
import axios from 'axios';
import Button from '../shared/Button';

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  projectType: 'Book Composition',
  volume: '',
  message: '',
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus('Please provide name and email.');
      return;
    }
    try {
      await axios.post('/api/contact', form);
      setStatus('Thank you! We will reach out shortly.');
      setForm(initialState);
    } catch (error) {
      setStatus('Unable to submit right now.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-card">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="input" placeholder="Name*" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="input" placeholder="Company / Organization" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        <input className="input" type="email" placeholder="Email*" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="input" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input className="input" placeholder="Country / Time Zone" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
        <select className="input" value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })}>
          <option>Book Composition</option>
          <option>Illustrations</option>
          <option>eBook Publishing</option>
          <option>Editorial</option>
          <option>Multiple Services</option>
          <option>Other</option>
        </select>
        <input className="input md:col-span-2" placeholder="Estimated Volume" value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })} />
        <textarea className="input md:col-span-2" rows={4} placeholder="Project details" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <Button type="submit">Submit</Button>
      {status && <p className="text-sm text-slate-600">{status}</p>}
    </form>
  );
};

export default ContactForm;
