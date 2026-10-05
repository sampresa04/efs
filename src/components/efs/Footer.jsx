import React from "react";
import { Phone, Mail, MapPin, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white text-[#143322] border-t border-slate-200">
      {/* Franja superior con degradado institucional */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#143322] via-[#2A6644] to-[#7BC142]" />
      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 2xl:px-20 pt-8 pb-6 lg:pt-10 lg:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* COLUMNA 1: LOGO E INFORMACIÓN GENERAL */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center">
              <img
                src="/logos/logo2.png"
                alt="EFS Electrical & Fire Systems"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              Ingeniería, mantenimiento y diagnóstico de sistemas eléctricos y
              protección contra incendios en la República Mexicana.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7F0] border border-[#7BC142]/30 text-[#143322] text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#7BC142] animate-pulse" />
              Desde Durango para México
            </div>
          </div>

          {/* COLUMNA 2: ATENCIÓN INMEDIATA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#143322]/80">
              Atención Inmediata
            </h4>

            <div className="space-y-3 text-sm font-medium">
              <a
                href="tel:6182171072"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#7BC142] hover:bg-[#EEF7F0]/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#143322] group-hover:text-[#7BC142] transition-colors shrink-0 shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[#143322] font-bold group-hover:text-[#2A6644] transition-colors">
                  618 217 1072
                </span>
              </a>

              <a
                href="mailto:ventas@electricalfs.com"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#7BC142] hover:bg-[#EEF7F0]/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#143322] group-hover:text-[#7BC142] transition-colors shrink-0 shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-slate-700 font-medium group-hover:text-[#143322] transition-colors truncate">
                  ventas@electricalfs.com
                </span>
              </a>

              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#143322] shrink-0 shadow-xs">
                  <MapPin className="w-4 h-4 text-[#7BC142]" />
                </div>
                <span className="text-slate-600 text-xs font-medium leading-snug">
                  Atención en gran parte de la República Mexicana
                </span>
              </div>
            </div>
          </div>

          {/* COLUMNA 3: ACREDITACIONES */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#143322]/80">
              Acreditaciones
            </h4>

            <div className="space-y-3">
              {/* Tarjeta DUNS */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#7BC142]/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#EEF7F0] border border-[#7BC142]/30 flex items-center justify-center text-[#143322] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#7BC142]" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                    NÚMERO DUNS
                  </span>
                  <span className="text-sm font-black text-[#143322]">
                    951568189
                  </span>
                </div>
              </div>

              {/* Tarjeta NFPA */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#7BC142]/60 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#EEF7F0] border border-[#7BC142]/30 flex items-center justify-center text-[#7BC142] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                    MEMBRESÍA NFPA
                  </span>
                  <span className="text-sm font-black text-[#143322]">
                    No. 3405623
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REDES SOCIALES (Logos directos) */}
        <div className="pt-6 mt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center">
          <span className="text-xs font-bold text-[#143322] uppercase tracking-wider">
            Síguenos en redes
          </span>

          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1EmnJNVtSS/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-sm"
            >
              <img
                src="/logos/face.png"
                alt="Facebook"
                className="w-full h-full object-cover"
              />
            </a>

            {/* TikTok  */}
            <a
              href="https://www.tiktok.com/@electricalandfiresystems?_r=1&_t=ZS-9AJE3YTc2T6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center transition-transform duration-200 hover:scale-110 shadow-sm"
            >
              <img
                src="/logos/tiktok.png"
                alt="Instagram"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>{" "}
      {/* Fin del contenedor max-w-[1600px] */}
      {/* PIE INFERIOR (COPYRIGHT) */}
      <div className="w-full bg-gradient-to-r from-[#143322] via-[#2A6644] to-[#7BC142]">
        <div className="max-w-[1600px] mx-auto px-6 py-5 flex flex-col items-center justify-center gap-1 text-center text-xs font-medium text-white">
          <p>© EFS Electrical & Fire Systems. Todos los derechos reservados.</p>
          <p>Durango, Dgo., México</p>
        </div>
      </div>
    </footer>
  );
}
