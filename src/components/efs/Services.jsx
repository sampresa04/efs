const db = globalThis.__B44_DB__ || {
  auth: { isAuthenticated: async () => false, me: async () => null },
  entities: new Proxy(
    {},
    {
      get: () => ({
        filter: async () => [],
        get: async () => null,
        create: async () => ({}),
        update: async () => ({}),
        delete: async () => ({}),
      }),
    },
  ),
  integrations: { Core: { UploadFile: async () => ({ file_url: "" }) } },
};

import React from "react";
import ServiceCard from "./ServiceCard";
import { useScrollReveal } from "@/js/scrollReveal";

const SERVICES = [
  {
    tag: "01 · Núcleo eléctrico",
    title: "Sistemas Eléctricos",
    image: "/electrico/electrico6.png",
    groups: [
      {
        heading: "Mantenimiento y pruebas de diagnóstico",
        items: [
          "Generadores y motores eléctricos",
          "Transformadores y reactores",
          "Relevadores de protección",
          "Banco de baterías y filtros de armónicos",
          "Subestaciones eléctricas",
        ],
      },
      {
        heading: "Especialidades",
        items: [
          "Termografía infrarroja",
          "Estudio de calidad de la energía y corto circuito",
          "Estudio de Arc Flash",
          "Coordinación de protecciones",
          "Cálculo y medición de sistema de tierras",
          "Ingeniería y reingeniería eléctrica",
        ],
      },
      {
        heading: "Instalaciones eléctricas",
        items: [
          "Alta, media y baja tensión",
          "Gestión de trámites con CFE y UVIE",
          "Suministro de equipo eléctrico",
        ],
      },
    ],
  },
  {
    tag: "02 · Protección activa",
    title: "Sistemas Contra Incendio",
    image: "/incendio/incendio14.jpeg",
    groups: [
      {
        heading: "Mantenimiento, inspección y diagnóstico",
        items: [
          "Sistemas de supresión húmedo y seco",
          "Sistema de bombeo, motores diésel y bomba jockey",
          "Detección de humo, calor, infrarroja y gas",
          "Sistemas de CO₂ y agentes limpios",
          "Mantenimiento a bombas bipartidas",
        ],
      },
      {
        heading: "Proyectos e instalación",
        items: [
          "Instalación de detección de humo y gas, y alarmas",
          "Tubería, hidrantes y gabinetes con manguera",
          "Válvulas reductoras de presión y de poste indicador",
        ],
      },
      {
        heading: "Normativa aplicada",
        items: [
          "NFPA-13A · NFPA-14 · NFPA-25 · NFPA-70E · NFPA-72",
          "Recomendaciones FM Global",
        ],
      },
    ],
  },
  {
    tag: "03 · Servicio complementario",
    title: "Obra Civil",
    image: "/obra/obra_vaciado/obra5.jpg",
    groups: [
      {
        heading: "Alcance del servicio",
        items: [
          "Proyectos de rehabilitación y mantenimiento en general",
          "Obra civil eléctrica",
          "Obra civil contra incendio",
          "Proyectos y construcción de edificación",
        ],
      },
      {
        heading: "¿Por qué EFS?",
        items: [
          "Autosuficiencia total: un solo proveedor para todo el proyecto",
          "Cumplimiento con estándares y normas mexicanas de construcción",
        ],
      },
    ],
  },
  {
    tag: "04 · Especialidad técnica",
    title: "Buceo Industrial",
    image: "/img/buceo3.png",
    groups: [
      {
        heading: "Servicio",
        items: [
          "Inspección y limpieza interior de tanques y cisternas sin vaciar",
          "Almacenamiento de agua potable en gran volumen",
          "Certificación en buceo industrial",
        ],
      },
      {
        heading: "Frecuencia recomendada",
        items: [
          "Cada 6 meses para agua de consumo humano (NOM-012-SSA1-1993)",
          "Semianual para tanques de sistemas contra incendio (NFPA-25)",
        ],
      },
    ],
  },
];

export default function Services() {
  const headRef = useScrollReveal();

  return (
    <section
      id="servicios"
      className="relative w-full bg-white pt-16 lg:pt-28 pb-6 lg:pb-8"
    >
      {/* Luz ambiental sutil */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-[#7BC142]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-[#143322]/5 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 2xl:px-20 max-w-[1600px] mx-auto w-full">
        {/* Encabezado de Sección */}
        <div ref={headRef} className="efs-reveal max-w-4xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EEF7F0] border border-[#7BC142]/30 text-[#143322] text-xs md:text-sm font-bold tracking-wide w-fit mb-5 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7BC142] animate-ping" />
            LO QUE HACEMOS
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#143322] leading-[1.05] tracking-tight mb-6">
            Servicios diseñados para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#143322] via-[#2A6644] to-[#7BC142]">
              no fallar nunca
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
            Cuatro líneas de servicio que cubren el ciclo completo: diagnóstico,
            instalación, mantenimiento y construcción bajo normativa NFPA, FM
            Global y NOM.
          </p>
        </div>

        {/* Malla de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
