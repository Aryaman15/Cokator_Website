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
            className="flex max-h-[82vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div>
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.client} · {item.domain}</p>
              </div>
              <button aria-label="Close" onClick={onClose} className="text-xl font-bold text-slate-500">×</button>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 overflow-y-auto bg-slate-50 p-6 md:grid-cols-[2fr,1fr]">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <object
                  data={item.pdfUrl}
                  type="application/pdf"
                  className="h-[70vh] w-full"
                >
                  <div className="flex h-[70vh] items-center justify-center px-6 text-center text-sm text-slate-600">
                    Unable to display PDF.{' '}
                    <a href={item.pdfUrl} target="_blank" rel="noreferrer" className="ml-1 text-accent underline">
                      Download instead
                    </a>
                    .
                  </div>
                </object>
              </div>
              <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                <p className="font-semibold text-primary">Included services</p>
                <p>{item.services.join(', ')}</p>
                <p className="text-xs text-slate-500">
                  Scroll the preview on the left to view the sample PDF. Full projects and additional deliverables are available on request.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PdfModal;
