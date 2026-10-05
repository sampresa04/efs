import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/js/scrollReveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section
      id="contacto"
      className="efs-section relative w-full overflow-hidden bg-gradient-to-b from-white via-[#EEF7F0]/50 to-white py-12 sm:py-16 lg:py-24 text-[#143322] border-t border-slate-200/80"
    >
      {/* Fondo ambiental decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#7BC142]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#143322]/5 rounded-full blur-[120px]" />
      </div>

      <div
        ref={ref}
        className="efs-reveal relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 2xl:px-20 grid lg:grid-cols-12 gap-8 lg:gap-14 items-start"
      >
        {/* COLUMNA IZQUIERDA: Mensaje y Formulario */}
        <div className="lg:col-span-7 space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="w-full flex flex-col items-center sm:items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7F0] border border-[#7BC142]/30 text-[#143322] text-xs font-bold tracking-wider uppercase mb-4 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7BC142] animate-ping" />
              Hablemos
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#143322] tracking-tight ">
              ¿Qué necesitas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#143322] via-[#2A6644] to-[#7BC142]">
                proteger hoy?
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl mt-5 ">
              Cuéntanos qué instalación, equipo o sistema necesitas mantener,
              diagnosticar o construir. Un especialista te contactará a la
              brevedad.
            </p>
          </div>

          {/* Formulario conectado */}
          <div className="w-full text-left">
            <ContactForm />
          </div>
        </div>

        {/* COLUMNA DERECHA: Directorio Directo y Mapa */}
        <div className="w-full lg:col-span-5 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl shadow-[#143322]/5 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-200/80">
            <div>
              <h3 className="text-xl font-black text-[#143322]">Directorio</h3>
              <p className="text-slate-500 text-xs font-medium">
                Canales de atención
              </p>
            </div>
          </div>

          <div className="space-y-3.5">
            {/* Teléfono Ventas */}
            <a
              href="tel:6182171072"
              className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#7BC142] hover:bg-[#EEF7F0]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#143322] group-hover:text-[#7BC142] transition-colors shrink-0 shadow-xs">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                  Ventas
                </p>
                <p className="text-[#143322] font-black text-sm group-hover:text-[#2A6644] transition-colors">
                  618 217 1072
                </p>
              </div>
            </a>

            <a
              href="tel:6183405680"
              className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#7BC142] hover:bg-[#EEF7F0]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#143322] group-hover:text-[#7BC142] transition-colors shrink-0 shadow-xs">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                  Oficina
                </p>
                <p className="text-[#143322] font-black text-sm group-hover:text-[#2A6644] transition-colors">
                  618 340 5680
                </p>
              </div>
            </a>

            {/* Correo Ventas General */}
            <a
              href="mailto:ventas@electricalfs.com"
              className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#7BC142] hover:bg-[#EEF7F0]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#143322] group-hover:text-[#7BC142] transition-colors shrink-0 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                  Correo de Ventas
                </p>
                <p className="text-[#143322] font-bold text-sm group-hover:text-[#2A6644] transition-colors truncate">
                  ventas@electricalfs.com
                </p>
              </div>
            </a>

            {/* Correo Ventas Monterrey */}
            <a
              href="mailto:ventasmty@electricalfs.com"
              className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#7BC142] hover:bg-[#EEF7F0]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#143322] group-hover:text-[#7BC142] transition-colors shrink-0 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                  Correo de Ventas Monterrey
                </p>
                <p className="text-[#143322] font-bold text-sm group-hover:text-[#2A6644] transition-colors truncate">
                  ventasmty@electricalfs.com
                </p>
              </div>
            </a>

            {/* Correo Operaciones */}
            <a
              href="mailto:operaciones@electricalfs.com"
              className="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#7BC142] hover:bg-[#EEF7F0]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#143322] group-hover:text-[#7BC142] transition-colors shrink-0 shadow-xs">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                  Correo de Operaciones
                </p>
                <p className="text-[#143322] font-bold text-sm group-hover:text-[#2A6644] transition-colors truncate">
                  operaciones@electricalfs.com
                </p>
              </div>
            </a>

            {/* Ubicación Oficina */}
            <div className="flex items-start gap-4 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#7BC142] shrink-0 shadow-xs">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-wider">
                  Oficina Principal
                </p>
                <p className="text-[#143322] font-bold text-xs sm:text-sm leading-snug">
                  Calle Salvador Nava Rodríguez #611 Ote, Durango, Dgo., C. P.
                  34000. Horario de atención: 9:00am-18:00pm
                </p>
              </div>
            </div>

            {/* Mapa Google embedded */}
            <div className="pt-2 w-full h-52 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs relative">
              <iframe
                title="Ubicación Oficina"
                src="https://maps.google.com/maps?q=Calle%20Salvador%20Nava%20Rodr%C3%ADguez%20611%20Ote%20Durango%20Dgo&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 opacity-95 hover:opacity-100 transition-opacity"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
