import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useScrollReveal } from "@/js/scrollReveal";

export default function ServiceCard({
  index,
  tag,
  title,
  image,
  groups,
  variant,
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useScrollReveal();

  // Asegurar renderizado del Portal tras el montaje en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  // Bloquear scroll del body al abrir el modal y permitir cerrar con la tecla Escape
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Tema de colores según el servicio
  const getTheme = () => {
    if (variant) return variant;
    const lowerTitle = title?.toLowerCase() || "";
    if (lowerTitle.includes("incendio")) return "red";
    if (lowerTitle.includes("buceo")) return "blue";
    if (lowerTitle.includes("civil") || lowerTitle.includes("obra"))
      return "gray";
    return "green";
  };

  const themeKey = getTheme();

  const themeMap = {
    green: {
      text: "text-[#7BC142]",
      badgeBg: "bg-[#7BC142] text-[#143322]",
      badgeDot: "bg-[#143322]",
      heading: "text-[#143322]",
      headingIconBg: "bg-[#EEF7F0] text-[#7BC142]",
      bgBullet: "bg-[#7BC142]",
      cardBorderHover:
        "hover:border-[#7BC142] hover:shadow-2xl hover:shadow-[#7BC142]/15",
      btnBorderHover:
        "group-hover:border-[#7BC142] group-hover:bg-[#EEF7F0] group-hover:text-[#7BC142]",
      modalBorder: "border-slate-200/90 shadow-2xl shadow-[#143322]/40",
    },
    red: {
      text: "text-red-600",
      badgeBg: "bg-red-600 text-white",
      badgeDot: "bg-white",
      heading: "text-red-950",
      headingIconBg: "bg-red-50 text-red-600",
      bgBullet: "bg-red-500",
      cardBorderHover:
        "hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/15",
      btnBorderHover:
        "group-hover:border-red-500 group-hover:bg-red-50 group-hover:text-red-600",
      modalBorder: "border-red-200/90 shadow-2xl shadow-red-950/20",
    },
    blue: {
      text: "text-cyan-600",
      badgeBg: "bg-cyan-600 text-white",
      badgeDot: "bg-white",
      heading: "text-cyan-950",
      headingIconBg: "bg-cyan-50 text-cyan-600",
      bgBullet: "bg-cyan-500",
      cardBorderHover:
        "hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/15",
      btnBorderHover:
        "group-hover:border-cyan-500 group-hover:bg-cyan-50 group-hover:text-cyan-600",
      modalBorder: "border-cyan-200/90 shadow-2xl shadow-cyan-950/20",
    },
    gray: {
      text: "text-slate-700",
      badgeBg: "bg-slate-800 text-white",
      badgeDot: "bg-emerald-400",
      heading: "text-slate-900",
      headingIconBg: "bg-slate-100 text-slate-700",
      bgBullet: "bg-slate-600",
      cardBorderHover:
        "hover:border-slate-400 hover:shadow-2xl hover:shadow-slate-400/15",
      btnBorderHover:
        "group-hover:border-slate-400 group-hover:bg-slate-100 group-hover:text-slate-800",
      modalBorder: "border-slate-200/90 shadow-2xl shadow-slate-900/20",
    },
  };

  const colors = themeMap[themeKey] || themeMap.green;

  // Renderizado del Modal extraído al body vía Portal
  const renderModal = () => (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] bg-[#143322]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-hidden"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className={`relative max-w-3xl w-full max-h-[90vh] bg-slate-50 rounded-3xl border ${colors.modalBorder} flex flex-col overflow-hidden transition-all`}
          >
            {/* BOTÓN CERRAR CON GLASSMORPHISM */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/40 hover:bg-[#7BC142] hover:text-[#143322] text-white backdrop-blur-md transition-all duration-300 shadow-lg border border-white/20 flex items-center justify-center cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* CONTENEDOR INTERNO CON SCROLL Y ESTRUCTURA LIMPIA */}
            <div className="overflow-y-auto w-full h-full flex flex-col justify-between">
              <div>
                {/* BANNER / FOTO DE CABECERA CON GRADIENTE OSCURO */}
                <div className="relative h-64 sm:h-72 w-full bg-[#143322] shrink-0 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    fittingType="cover"
                  />
                  {/* Overlay gradiente oscuro para excelente legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#143322] via-[#143322]/50 to-transparent pointer-events-none" />

                  {/* Badge y Título sobre la foto */}
                  <div className="absolute bottom-5 left-6 right-16 space-y-2">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-black shadow-md ${colors.badgeBg}`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${colors.badgeDot} animate-pulse`}
                      />
                      {tag}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* CUERPO DEL MODAL CON TARJETAS AGRUPADAS */}
                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-5 bg-slate-50">
                  {groups?.map((g) => (
                    <div
                      key={g.heading}
                      className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col space-y-4"
                    >
                      <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                        <div
                          className={`p-2 rounded-xl ${colors.headingIconBg}`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <h4
                          className={`${colors.heading} font-black text-xs uppercase tracking-wider`}
                        >
                          {g.heading}
                        </h4>
                      </div>

                      <ul className="space-y-3">
                        {g.items?.map((it) => (
                          <li
                            key={it}
                            className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed"
                          >
                            <span
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.bgBullet} shrink-0`}
                            />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* PIE DE MODAL / GARANTÍA Y LLAMADA A LA ACCIÓN */}
              <div className="p-5 md:px-8 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#7BC142] shrink-0" />
                  <span>
                    Personal capacitado y cumplimiento de normativas vigentes.
                  </span>
                </div>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#143322] hover:bg-[#2A6644] text-white text-xs font-black tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg"
                >
                  SOLICITAR COTIZACIÓN
                  <ArrowRight className="w-4 h-4 text-[#7BC142]" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* TARJETA DE SERVICIO EN LA GRILLA */}
      <motion.div
        ref={ref}
        className={`efs-reveal bg-white rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-500 ${colors.cardBorderHover}`}
        style={{ transitionDelay: `${index * 90}ms` }}
        onClick={() => setOpen(true)}
        whileHover={{ y: -4 }}
      >
        <div className="relative h-64 md:h-72 overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            fittingType="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

          <span
            className={`absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-black shadow-md ${colors.badgeBg}`}
          >
            {tag}
          </span>
        </div>

        <div className="p-6 flex items-center justify-between bg-white border-t border-slate-100">
          <h3 className="text-xl md:text-2xl font-black text-[#143322] tracking-tight">
            {title}
          </h3>
          <span
            className={`w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-[#143322] ${colors.btnBorderHover} transition-all duration-300 shrink-0 shadow-xs`}
          >
            <Plus className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
          </span>
        </div>
      </motion.div>

      {/* RENDERIZADO DEL MODAL DIRECTAMENTE EN EL BODY MEDIANTE PORTAL */}
      {mounted && createPortal(renderModal(), document.body)}
    </>
  );
}
