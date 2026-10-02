import React, { useState } from "react";
import { Award, Building2 } from "lucide-react";
import { useScrollReveal } from "@/js/scrollReveal";

const ABOUT_PHOTOS = [
  {
    id: 1,
    title: "Instalación de sistemas contra incendio",
    tag: "Operación Activa",
    image: "/img/3.jpeg",
  },
  {
    id: 2,
    title: "Mantenimiento preventivo a válvula de control",
    tag: "Sistemas de Control",
    image: "/img/alarma2.jpg",
  },
  {
    id: 3,
    title: "Tendido e inspección de red subterránea",
    tag: "Infraestructura",
    image: "/incendio/incendio23.jpeg",
  },
];

const CERTIFICATIONS = [
  "Miembros certificados NFPA · Membresía No. 4001633",
  "DC-3: Seguridad en Trabajos Eléctricos",
  "NFPA 25: Inspección y mantenimiento de sistemas contra incendio",
  "Recomendaciones FM Global",
  "DC-3: Equipos de elevación, plataforma y manlift",
  "NFPA 72: Código nacional de alarmas de incendio",
  "DC-3: Etiquetado, candadeo, alturas y trabajos en caliente (LOTO)",
  "Diseño y programación de sistemas Notifier (Honeywell)",
  "Notifier By Honeywell Latin America",
];

export default function About() {
  const [activePhoto, setActivePhoto] = useState(ABOUT_PHOTOS[0]);
  const headRef = useScrollReveal();
  const cardsRef = useScrollReveal();
  const certsRef = useScrollReveal();

  return (
    <section
      id="nosotros"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#EEF7F0]/60 to-white py-18 lg:py-28 text-[#143322]"
    >
      {/* Fondo ambiental suave */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#7BC142]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-30 -left-40 w-[600px] h-[600px] bg-[#143322]/5 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 2xl:px-20 max-w-[1600px] mx-auto w-full space-y-16">
        {/* BLOQUE SUPERIOR: INFORMACIÓN Y TARJETA CON 3 FOTOS */}
        <div
          ref={headRef}
          className="efs-reveal grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Texto de Presentación */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EEF7F0] border border-[#7BC142]/30 text-[#143322] text-xs md:text-sm font-bold tracking-wide w-fit mb-5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7BC142] animate-ping" />
              ¿QUIÉNES SOMOS?
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#143322] leading-[1.05] tracking-tight">
              Alto rendimiento,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#143322] via-[#2A6644] to-[#7BC142]">
                respaldo certificado
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
              <strong className="font-extrabold text-[#143322]">EFS</strong> es
              una empresa de alto rendimiento dedicada a mantenimientos
              integrales de sistemas eléctricos y contra incendio, con personal
              altamente capacitado que garantiza la correcta operación de los
              equipos en instalaciones de máxima exigencia.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#143322] shadow-xs">
                <Building2 className="w-4 h-4 text-[#7BC142]" /> Cobertura
                Nacional
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#143322] shadow-xs">
                <Award className="w-4 h-4 text-[#7BC142]" /> Personal
                Certificado
              </span>
            </div>
          </div>

          {/* Tarjeta Visual con Fotografía Principal y 3 Miniaturas */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white border border-slate-200/90 p-3.5 shadow-2xl shadow-[#143322]/10 space-y-3">
              {/* Imagen Principal Activa */}
              <div className="relative h-[280px] sm:h-[340px] rounded-2xl overflow-hidden group">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143322]/90 via-[#143322]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#7BC142] text-[#143322] text-[10px] font-black tracking-wider uppercase mb-2">
                    {activePhoto.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black leading-snug">
                    {activePhoto.title}
                  </h3>
                </div>
              </div>

              {/* Tira de 3 Miniaturas Interactivas */}
              <div className="grid grid-cols-3 gap-2.5">
                {ABOUT_PHOTOS.map((photo) => {
                  const isActive = activePhoto.id === photo.id;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => setActivePhoto(photo)}
                      className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-[#7BC142] ring-2 ring-[#7BC142]/30 scale-[0.98]"
                          : "border-transparent opacity-60 hover:opacity-100 hover:scale-100"
                      }`}
                    >
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-[#143322]/20 border-2 border-[#7BC142] rounded-xl" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* BLOQUE MEDIO: MISIÓN Y VISIÓN */}
        <div ref={cardsRef} className="efs-reveal grid md:grid-cols-2 gap-10">
          <div className="border-l-2 border-[#7BC142] pl-6">
            <p className="text-sm font-bold uppercase tracking-widest text-[#143322]/100">
              Misión
            </p>
            <p className="mt-2 text-lg text-slate-700 leading-relaxed">
              Otorgar seguridad, confianza, agilidad y compromiso a nuestros
              clientes en cada servicio de mantenimiento integral.
            </p>
          </div>

          <div className="border-l-2 border-[#7BC142] pl-6">
            <p className="text-sm font-bold uppercase tracking-widest text-[#143322]/100">
              Visión
            </p>
            <p className="mt-2 text-lg text-slate-700 leading-relaxed">
              Ser una empresa líder en mantenimientos integrales en la región,
              satisfaciendo las necesidades del cliente con los más altos
              estándares.
            </p>
          </div>
        </div>

        {/* BLOQUE INFERIOR: CERTIFICACIONES Y ESTÁNDARES */}
        <div
          ref={certsRef}
          className="efs-reveal rounded-xl bg-[#143322]/95 border border-[#7BC142]/100 overflow-hidden grid lg:grid-cols-5"
        >
          {/* Foto */}
          <div className="relative lg:col-span-2 h-64 lg:h-auto min-h-[280px]">
            <img
              src="/incendio/about.jpg"
              alt="Equipo de EFS realizando pruebas en sitio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Contenido */}
          <div className="lg:col-span-3 p-6 md:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#FFFFFF]">
              Respaldo técnico
            </p>
            <h3 className="mt-2 text-2xl md:text-3xl font-black tracking-tight text-[#FFFFFF]">
              Certificaciones y respaldos oficiales
            </h3>

            <div className="mt-6 divide-y divide-[#7BC142]/80">
              {/* 1. STPS */}
              <div className="py-5 grid sm:grid-cols-3 gap-2 sm:gap-6">
                <div>
                  <p className="text-xl font-black text-[#FFFFFF] leading-none">
                    DC-3
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-[#FFFF]">
                    Seguridad laboral STPS
                  </p>
                </div>
                <ul className="sm:col-span-2 space-y-1.5 text-sm text-slate-700 text-white">
                  <li>Seguridad en trabajos eléctricos</li>
                  <li>
                    Etiquetado, candadeo, alturas y trabajos en caliente (LOTO)
                  </li>
                  <li>Equipos de elevación, plataforma y manlift</li>
                </ul>
              </div>

              {/* 2. NFPA */}
              <div className="py-5 grid sm:grid-cols-3 gap-2 sm:gap-6">
                <div>
                  <p className="text-xl font-black text-[#FFF] leading-none">
                    NFPA
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-[#ffff]">
                    Miembros · No. 3405623
                  </p>
                </div>
                <ul className="sm:col-span-2 space-y-1.5 text-sm text-slate-700 text-white">
                  <li>
                    NFPA 25: Inspección y mantenimiento de sistemas contra
                    incendio
                  </li>
                  <li>NFPA 72: Código nacional de alarmas de incendio</li>
                  <li>NFPA 70E: Seguridad eléctrica en el lugar de trabajo</li>
                </ul>
              </div>

              {/* 3. Notifier */}
              <div className="py-5 grid sm:grid-cols-3 gap-2 sm:gap-6">
                <div>
                  <p className="text-xl font-black text-[#FFF] leading-none">
                    Notifier
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-[#FFFF]">
                    by Honeywell
                  </p>
                </div>
                <ul className="sm:col-span-2 space-y-1.5 text-sm text-slate-700 text-white">
                  <li>Diseño y programación de sistemas Notifier</li>
                  <li>Notifier by Honeywell Latin America</li>
                  <li>Alineación a recomendaciones FM Global</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
