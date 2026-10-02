import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ClientModal({ client, onClose }) {
  return (
    <AnimatePresence>
      {client && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#143322]/50 backdrop-blur-sm flex items-center justify-center p-4 "
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white p-8 md:p-10 max-w-md w-full text-center rounded-3xl border-2 border-[#7BC142] shadow-[0_0_40px_rgba(123,193,66,0.35)"
          >
            {/* Botón de cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#EEF7F0] flex items-center justify-center text-[#143322] hover:bg-[#7BC142] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Etiqueta de la Industria */}
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#EEF7F0] border border-[#7BC142]/30 text-[#143322] text-sm font-bold uppercase tracking-wider">
                {client.industry}
              </span>
            </div>

            {/* Nombre del Cliente */}
            <h3 className="text-2xl md:text-3xl font-black text-[#143322] leading-snug pt-2">
              {client.name}
            </h3>

            {/* Subtexto Informativo */}
            {/* Detalle de servicios */}
            <div className="border-t border-slate-100 pt-4 space-y-4 text-left">
              {client.services && (
                <div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-[#7AB142] mb-1">
                    Servicios
                  </h4>
                  <p className="text-md text-slate-600 leading-relaxed">
                    {client.services}
                  </p>
                </div>
              )}

              {client.frequency && (
                <div>
                  <h4 className="text-md font-bold uppercase tracking-wider text-[#7AB142] mb-1">
                    Frecuencia
                  </h4>
                  <p className="text-md text-slate-600 leading-relaxed">
                    {client.frequency}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
