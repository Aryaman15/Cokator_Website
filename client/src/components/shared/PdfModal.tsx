import { AnimatePresence, motion } from 'framer-motion';
import { PortfolioItem } from '../../types';

interface Props {
  item?: PortfolioItem | null;
  open: boolean;
  onClose: () => void;
}

const PdfModal = ({ item, open, onClose }: Props) => {
  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="max-h-[80vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div>
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.client} · {item.domain}</p>
              </div>
              <button aria-label="Close" onClick={onClose} className="text-xl font-bold text-slate-500">×</button>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto p-6 md:flex-row">
              <img src={item.thumbnail} alt={item.title} className="h-64 w-full rounded-lg object-cover md:w-1/2" />
              <div className="space-y-3 text-sm text-slate-700 md:w-1/2">
                <p>{item.services.join(', ')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {item.pages.map((page) => (
                    <img key={page} src={page} alt={`${item.title} sample`} className="h-28 w-full rounded-lg object-cover" />
                  ))}
                </div>
                <p className="text-xs text-slate-500">Curated preview. Full samples available on request.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PdfModal;
