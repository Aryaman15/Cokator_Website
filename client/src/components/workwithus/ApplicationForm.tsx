import { useState } from 'react';
import axios from 'axios';
import Button from '../shared/Button';

const initialState = {
  name: '',
  email: '',
  phone: '',
  location: '',
  roles: '' as string | string[],
  experienceYears: '',
  tools: '',
  domains: '',
  portfolioUrls: '',
  linkedinUrl: '',
  availability: 'Freelance',
  message: '',
};

const ApplicationForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus('Name and email are required.');
      return;
    }
    try {
      await axios.post('/api/applications', {
        ...form,
        roles: typeof form.roles === 'string' ? form.roles.split(',').map((r) => r.trim()) : form.roles,
        tools: form.tools.split(',').map((t) => t.trim()),
        domains: form.domains.split(',').map((d) => d.trim()),
        portfolioUrls: form.portfolioUrls.split(',').map((p) => p.trim()),
      });
      setStatus('Application submitted. Thank you!');
      setForm(initialState);
    } catch (error) {
      setStatus('Unable to submit right now.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-white p-6 shadow-card">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="input" placeholder="Name*" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="input" placeholder="Email*" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input className="input" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <input className="input" placeholder="Location / Time Zone" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        <input className="input" placeholder="Role(s) e.g. Typesetter, Illustrator" value={form.roles as string} onChange={(e) => setForm({ ...form, roles: e.target.value })} />
        <input className="input" placeholder="Experience (years)" value={form.experienceYears} onChange={(e) => setForm({ ...form, experienceYears: e.target.value })} />
        <input className="input" placeholder="Tools (comma separated)" value={form.tools} onChange={(e) => setForm({ ...form, tools: e.target.value })} />
        <input className="input" placeholder="Domains comfortable with" value={form.domains} onChange={(e) => setForm({ ...form, domains: e.target.value })} />
        <input className="input" placeholder="Portfolio URL(s)" value={form.portfolioUrls} onChange={(e) => setForm({ ...form, portfolioUrls: e.target.value })} />
        <input className="input" placeholder="LinkedIn URL" value={form.linkedinUrl} onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })} />
        <select className="input" value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })}>
          <option>Freelance</option>
          <option>Part-time</option>
          <option>Full-time</option>
        </select>
        <textarea className="input md:col-span-2" rows={4} placeholder="Message / Additional notes" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <Button type="submit">Submit Application</Button>
      {status && <p className="text-sm text-slate-700">{status}</p>}
    </form>
  );
};

export default ApplicationForm;
