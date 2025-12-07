import SectionHeading from '../components/shared/SectionHeading';
import Card from '../components/shared/Card';

const values = [
  { title: 'Quality', desc: 'Peer review, multi-level QA, and accessibility-first outputs.' },
  { title: 'Reliability', desc: 'Schedules honored with transparent status reporting.' },
  { title: 'Partnership', desc: 'Collaborative with publisher teams, SMEs, and authors.' },
  { title: 'Innovation', desc: 'Digital-first workflows, templates, and automation aids.' },
];

const About = () => {
  return (
    <div className="space-y-8 py-10">
      <SectionHeading title="About CoKrator" subtitle="Digital content partner for publishers and eLearning organizations" />
      <p className="text-sm text-slate-700">
        We specialize in STEM, medical, and academic publishing across print and digital formats. Our teams deliver composition,
        art, editorial, eBook production, and project management with clear SLAs and structured communication.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {values.map((value) => (
          <Card key={value.title}>
            <h4 className="text-lg font-semibold text-primary">{value.title}</h4>
            <p className="mt-2 text-sm text-slate-700">{value.desc}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h4 className="text-lg font-semibold text-primary">Process Recap</h4>
        <p className="mt-2 text-sm text-slate-700">
          Initiation → Planning → Sample → Production → QA → Delivery. Project managers coordinate schedules, SMEs, and creative teams across time zones.
        </p>
      </Card>
      <Card>
        <h4 className="text-lg font-semibold text-primary">Global Reach</h4>
        <p className="mt-2 text-sm text-slate-700">India operations with dedicated contacts for US & Canada publishers.</p>
      </Card>
    </div>
  );
};

export default About;
