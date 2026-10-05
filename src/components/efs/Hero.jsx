import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-white pt-20 sm:pt-24 lg:pt-20 pb-4 lg:pb-20 text-[#143322]"
    >
      {/* 1. FONDOS Y EFECTOS DE LUZ AMBIENTAL */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-30 -right-40 w-[700px] h-[700px] lg:w-[1000px] lg:h-[1000px] bg-[#7BC142]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] lg:w-[850px] lg:h-[850px] bg-[#143322]/5 rounded-full blur-[150px]" />
      </div>

      {/* 2. ESTRUCTURA PRINCIPAL */}
      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 2xl:px-20 max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* COLUMNA IZQUIERDA: CONTENIDO Y ACCIONES (7 COLUMNAS) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Badge superior */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-0.5 rounded-full bg-[#EEF7F0] border border-[#7BC142]/30 text-[#143322] text-xs md:text-sm font-bold tracking-wide w-fit mb-4 sm:mb-5 shadow-xs"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#7BC142] animate-ping" />
            ORGULLOSAMENTE DURANGUENSE
          </motion.div>

          {/* Título Principal con Colores y Degradados Exactos */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black text-[#143322] leading-[1.05] mb-5 tracking-tight"
          >
            Seguridad{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#143322] via-[#2A6644] to-[#7BC142]">
              Eléctrica
            </span>{" "}
            <br />y Protección <span className="text-[#7BC142]">Contra</span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7BC142] to-[#143322]">
              Incendio
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-normal"
          >
            Mantenimiento integral, instalación y diagnóstico de sistemas
            eléctricos y contra incendio, con personal certificado NFPA y
            respaldo FM Global en gran parte de la República Mexicana.
          </motion.p>

          {/* Botones de Acción */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <button
              onClick={() => scrollTo("#servicios")}
              className="px-8 py-4 rounded-xl bg-[#143322] hover:bg-[#1E4D33] text-white font-bold text-base md:text-lg transition-all duration-300 shadow-xl shadow-[#143322]/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              Explorar Capacidades
            </button>
            <button
              onClick={() => scrollTo("#contacto")}
              className="px-8 py-4 rounded-xl border border-slate-300 hover:border-[#7BC142] text-[#143322] font-bold text-base md:text-lg transition-all duration-300 bg-white hover:bg-[#EEF7F0]/50 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
            >
              Hablar con un especialista
            </button>
          </motion.div>

          {/* Certificaciones y Respaldos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200 text-xs md:text-sm font-semibold"
          >
            <div className="rounded-lg bg-[#7BC142]/15 text-[#12301F] px-4 py-3 text-center">
              Miembros NFPA
            </div>
            <div className="rounded-lg bg-[#7BC142]/15 text-[#12301F] px-4 py-3 text-center">
              FM Global Standard
            </div>
            <div className="rounded-lg bg-[#7BC142]/15 text-[#12301F] px-4 py-3 text-center">
              DUNS 951568189
            </div>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: FOTO DE PORTADA XL (5 COLUMNAS) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full flex justify-center items-center"
        >
          {/* Resplandor suave de fondo */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#7BC142]/20 to-[#143322]/10 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

          {/* Tarjeta contenedora de la foto */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl group">
            <div className="relative overflow-hidden h-[380px] sm:h-[480px] lg:h-[540px] 2xl:h-[600px] w-full">
              <img
                src="/img/portada.jpg"
                onError={(e) => {
                  e.currentTarget.src = "/portada.jpg";
                }}
                alt="Inspección de sistemas contra incendio EFS"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. BOTÓN DE SCROLL */}
      <div className="relative z-10 pt-6 flex justify-center">
        <motion.button
          onClick={() => scrollTo("#servicios")}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-slate-400 hover:text-[#7BC142] transition-colors p-2 rounded-full hover:bg-slate-100"
          aria-label="Desplazarse hacia servicios"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
}
