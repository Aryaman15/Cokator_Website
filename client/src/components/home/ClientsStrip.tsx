import { clients } from '../../data/clients';

const ClientsStrip = () => {
  return (
    <div className="my-6 rounded-full bg-white/80 p-4 shadow-card">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Trusted by publishers such as</p>
        <div className="flex flex-1 items-center gap-6 overflow-x-auto pb-2">
          {clients.map((client) => (
            <div key={client.name} className="flex shrink-0 items-center gap-2 rounded-full bg-slate-50 px-3 py-2 shadow-sm">
              <img src={client.logo} alt={`${client.name} logo`} className="h-8 w-auto" />
              <span className="text-xs text-slate-600">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsStrip;
