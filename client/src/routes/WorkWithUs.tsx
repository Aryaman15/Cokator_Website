import SectionHeading from '../components/shared/SectionHeading';
import Card from '../components/shared/Card';
import ApplicationForm from '../components/workwithus/ApplicationForm';

const roles = [
  { title: 'Typesetters / Compositors', desc: 'InDesign, LaTeX, math-heavy workflows, accessibility tagging.' },
  { title: 'Illustrators', desc: 'Scientific, medical, and children’s illustration with redraw expertise.' },
  { title: 'Editors & Proofreaders', desc: 'Copyediting, language polishing, and SME review coordination.' },
  { title: 'eBook Specialists', desc: 'EPUB, MOBI, interactive HTML5, accessibility QA.' },
  { title: 'Project Coordinators', desc: 'Schedule ownership, vendor management, and client comms.' },
];

const reasons = [
  'Work on global educational and professional titles.',
  'Long-term, structured collaborations.',
  'Exposure to print and digital workflows.',
  'Remote freelance and in-house opportunities.',
];

const steps = ['Share your profile', 'Screening & sample assignment', 'Onboarding to our vendor pool'];

const WorkWithUs = () => (
  <div className="space-y-10 py-10">
    <SectionHeading title="Work With CoKrator" subtitle="Collaborate with our production, art, editorial, and digital teams" />
    <div className="grid gap-4 md:grid-cols-2">
      {roles.map((role) => (
        <Card key={role.title}>
          <h4 className="text-lg font-semibold text-primary">{role.title}</h4>
          <p className="mt-2 text-sm text-slate-700">{role.desc}</p>
        </Card>
      ))}
    </div>
    <Card>
      <h4 className="text-lg font-semibold text-primary">Why Work With Us</h4>
      <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
        {reasons.map((reason) => (
          <li key={reason}>• {reason}</li>
        ))}
      </ul>
    </Card>
    <Card>
      <h4 className="text-lg font-semibold text-primary">Collaboration Process</h4>
      <div className="mt-3 flex flex-wrap gap-4">
        {steps.map((step, idx) => (
          <div key={step} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
            {idx + 1}. {step}
          </div>
        ))}
      </div>
    </Card>
    <ApplicationForm />
  </div>
);

export default WorkWithUs;
