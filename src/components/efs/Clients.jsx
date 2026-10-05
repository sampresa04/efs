import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  MousePointerClick,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useScrollReveal } from "@/js/scrollReveal";
import ClientModal from "./ClientModal";

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

const CLIENTS = [
  {
    name: "Bio-Pappel S.A.B. de C.V.",
    industry: "Manufactura de papel",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio de la fábrica. Mantenimiento preventivo y correctivo a sistema de alarma y detección.",
  },
  {
    name: "Arca Continental",
    industry: "Embotellador de bebidas",
    services:
      "Mantenimiento preventivo, correctivo a sistema contra incendio de la fábrica y venta de refacciones para el sistema.",
  },
  {
    name: "Grupo Armas",
    industry: "Construcción industrial",
    services:
      "Mantenimiento preventivo, correctivo a sistema contra incendio de la fábrica y venta de refacciones para el sistema.",
  },
  {
    name: "Johnson Controls",
    industry: "Sistemas de edificación",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio de la fábrica. Mantenimiento preventivo y correctivo a sistema de alarma y detección.",
  },
  {
    name: "Consejo de la Judicatura Federal",
    industry: "Institución federal",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio de la fábrica. Mantenimiento preventivo y correctivo a sistema de alarma y detección.",
  },
  {
    name: "Prysmian Group",
    industry: "Cables y energía",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio de la fábrica. Mantenimiento preventivo y correctivo a sistema de alarma y detección.",
  },
  {
    name: "IMSS",
    industry: "Salud",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio, venta de refacciones. Mantenimiento a sistema eléctrico en subestaciones, estudios eléctricos y refacciones.",
  },
  {
    name: "Coficab",
    industry: "Manufactura de cable",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio de la fábrica. Mantenimiento preventivo y correctivo a sistema de alarma y detección.",
  },
  {
    name: "Arauco",
    industry: "Forestal y madera",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio de la fábrica. Mantenimiento preventivo y correctivo a sistema de alarma y detección.",
  },
  {
    name: "Envases Universales",
    industry: "Envases metálicos",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio, venta de refacciones. Mantenimiento a sistema eléctrico en subestaciones, estudios eléctricos y refacciones.",
  },
  {
    name: "LS e-Mobility Solutions",
    industry: "Componentes automotrices",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio, venta de refacciones. Mantenimiento a sistema eléctrico en subestaciones, estudios eléctricos y refacciones.",
  },
  {
    name: "Grupo Minero Basis",
    industry: "Minería",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio, venta de refacciones. Mantenimiento a sistema eléctrico en subestaciones, estudios eléctricos y refacciones.",
  },
  {
    name: "Multipak",
    industry: "Empaques y packaging",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio, venta de refacciones. Mantenimiento a sistema eléctrico en subestaciones, estudios eléctricos y refacciones.",
  },
  {
    name: "ACI México",
    industry: "Concreto y construcción",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio, venta de refacciones. Mantenimiento a sistema eléctrico en subestaciones, estudios eléctricos y refacciones.",
  },
  {
    name: "LEONI",
    industry: "Sistemas de cableado automotriz",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio de la fábrica. Mantenimiento preventivo y correctivo a sistema de alarma y detección.",
  },
  {
    name: "ECOCABLE",
    industry: "Manufactura de cables eléctricos",
    services:
      "Mantenimiento preventivo, correctivo a sistema contra incendio de la fábrica y venta de refacciones para el sistema.",
  },
  {
    name: "Forestal Alfa",
    industry: "Industria forestal y maderera",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio, venta de refacciones. Mantenimiento a sistema eléctrico en subestaciones, estudios eléctricos y refacciones.",
  },
  {
    name: "ALCA Diseño y Construcción",
    industry: "Diseño y construcción",
    services:
      "Instalación de sistemas contra incendio. Instalación de sistemas de alarmas y detección de incendio.",
  },
  {
    name: "Corteva Agriscience",
    industry: "Agroquímica y semillas",
    services:
      "Mantenimiento preventivo y correctivo a sistema contra incendio de la fábrica. Mantenimiento preventivo y correctivo a sistema de alarma y detección.",
  },
];

const GALLERY_PROJECTS = [
  {
    id: 1,
    url: "/obra/obra_armado/obra4.png",
    photos: [
      "/obra/obra_armado/obra4.png",
      "/obra/obra_armado/obra1.png",
      "/obra/obra_armado/obra2.png",
      "/obra/obra_armado/obra3.png",
      "/obra/obra_armado/obra6.png",
      "/obra/obra_armado/obra10.png",
    ],
    title: "Armado de varilla y Cimentación estructural",
    tag: "Obra Civil",
  },
  {
    id: 2,
    url: "/img/2.jpeg",
    photos: [
      "/img/2.jpeg",
      "/incendio/tuberia/tuberia1.jpg",
      "/incendio/tuberia/tuberia2.jpg",
      "/incendio/tuberia/tuberia3.jpg",
      "/incendio/tuberia/incendio333.jpeg",
      "/img/mantenimiento/6.jpeg",
    ],
    title: "Instalación de tubería para sistemas contra incendio",
    tag: "Protección Activa",
  },
  {
    id: 3,
    url: "/img/mantenimiento/2.png",
    photos: [
      "/img/mantenimiento/1.png",
      "/img/mantenimiento/2.png",
      "/img/mantenimiento/incendio4.jpg",
      "/img/mantenimiento/incendio13.jpeg",
      "/img/mantenimiento/incendio15.jpeg",
      "/img/mantenimiento/main.jpg",
    ],
    title: "Mantenimiento a sistemas contra incendio",
    tag: "Sistemas de Control",
  },
  {
    id: 4,
    url: "/electrico/electrico4.jpeg",
    photos: [
      "/electrico/electrico4.jpeg",
      "/electrico/electrico2.jpg",
      "/electrico/electrico3.jpg",
      "/electrico/electrico7.jpeg",
      "/electrico/incendio.jpg",
      "/electrico/incendio2.jpg",
      "/electrico/incendio3.jpg",
      "/electrico/incendio10.jpeg",
      "/electrico/incendio12.jpeg",
      "/electrico/incendio26.jpeg",
      "/electrico/incendio27.jpeg",
      "/electrico/incendio28.jpeg",
      "/electrico/incendio33.jpeg",
      "/electrico/incendio36.jpeg",
    ],
    title: "Tendido de red subterránea en zanja",
    tag: "Tubería Subterránea",
  },
  {
    id: 5,
    url: "/img/5.jpg",
    photos: [
      "/img/5.jpg",
      "/incendio/aerea/incendio22.jpeg",
      "/incendio/aerea/incendio24.jpeg",
      "/incendio/aerea/incendio30.jpeg",
      "/incendio/aerea/incendio38.jpeg",
      "/incendio/aerea/incendio39.jpeg",
      "/incendio/aerea/incendio41.jpeg",
      "/incendio/aerea/incendio42.jpeg",
      "/incendio/aerea/incendio45.jpeg",
      "/incendio/aerea/incendio46.jpeg",
      "/incendio/aerea/incendio51.jpeg",
    ],
    title: "Soportería y Trayectorias aéreas",
    tag: "Canalización",
  },
  {
    id: 6,
    url: "obra/obra_vaciado/obra5.jpg",
    photos: [
      "obra/obra_vaciado/obra5.jpg",
      "/obra/obra_vaciado/obra7.jpg",
      "/obra/obra_vaciado/7.jpg",
    ],
    title: "Vaciado de concreto para cimentación",
    tag: "Obra Civil",
  },
];

// 2. MODAL SOLO DE FOTOS (SIN TEXTO)
function PurePhotoGalleryModal({ project, onClose }) {
  const photos = project.photos?.length ? project.photos : [project.url];
  const total = photos.length;
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + total) % total),
    [total],
  );

  // Teclado (Esc, ← →) y bloqueo de scroll
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && total > 1) go(1);
      else if (e.key === "ArrowLeft" && total > 1) go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [go, onClose, total]);

  // Gestos swipe en celulares
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null || total < 2) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Botón de Cierre */}
      <button
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all cursor-pointer shadow-lg backdrop-blur-sm"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Contenedor Principal de la Foto */}
      <div
        className="relative w-full max-w-6xl flex-1 flex items-center justify-center select-none my-auto"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Imagen Visible */}
        <img
          key={photos[index]}
          src={photos[index]}
          alt=""
          className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl transition-all duration-300"
        />

        {/* Flecha Izquierda */}
        {total > 1 && (
          <button
            onClick={() => go(-1)}
            aria-label="Anterior"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#7BC142] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/20 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Flecha Derecha */}
        {total > 1 && (
          <button
            onClick={() => go(1)}
            aria-label="Siguiente"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#7BC142] text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm border border-white/20 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Tira de Miniaturas Inferior (Solo si hay 2 o más fotos) */}
      {total > 1 && (
        <div
          className="flex gap-3 overflow-x-auto max-w-full p-2 select-none z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {photos.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setIndex(i)}
              className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                i === index
                  ? "border-[#7BC142] scale-105 opacity-100 shadow-xl ring-2 ring-[#7BC142]/50"
                  : "border-transparent opacity-40 hover:opacity-80"
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 3. COMPONENTE PRINCIPAL
export default function Clients() {
  const ref = useScrollReveal();
  const galleryRef = useScrollReveal();
  const [selected, setSelected] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section
      id="clientes"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#EEF7F0]/30 to-white py-4 lg:py-22 text-[#143322]"
    >
      {/* 1. SECCIÓN CLIENTES */}
      <div className="relative z-10 max-w-[1600px] mx-auto w-full space-y-10">
        <div
          ref={ref}
          className="efs-reveal max-w-3xl px-6 md:px-12 mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF7F0] border border-[#7BC142]/30 text-[#143322] text-xs md:text-sm font-bold tracking-wide shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7BC142] animate-ping" />
            CONFIANZA COMPROBADA
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#143322] leading-[1.05] tracking-tight">
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#143322] via-[#2A6644] to-[#7BC142]">
              Clientes
            </span>
          </h2>

          <p className="text-slate-600 text-sm md:text-base font-normal flex items-center justify-center gap-2">
            <MousePointerClick className="w-4 h-4 text-[#7BC142] animate-bounce" />
            Empresas e instituciones que respaldan la trayectoria de EFS
          </p>
        </div>

        <div className="w-full overflow-hidden py-6 border-y border-slate-200/80 bg-white/70 backdrop-blur-sm shadow-xs">
          <div className="efs-marquee-track flex items-center gap-6">
            {loop.map((c, i) => (
              <button
                key={c.name + i}
                onClick={() => setSelected(c)}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#EEF7F0]/50 hover:bg-[#EEF7F0] border border-slate-200/80 hover:border-[#7BC142]/50 transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 shadow-xs hover:shadow-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#7BC142] group-hover:scale-125 transition-transform" />
                <span className="text-base sm:text-lg font-black text-[#143322] group-hover:text-[#2A6644] transition-colors">
                  {c.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <ClientModal client={selected} onClose={() => setSelected(null)} />

      {/* 2. SECCIÓN GALERÍA DE TRABAJOS EJECUTADOS */}
      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 2xl:px-20 max-w-[1600px] mx-auto w-full pt-20 space-y-12">
        <div
          ref={galleryRef}
          className="efs-reveal max-w-3xl mx-auto text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF7F0] border border-[#7BC142]/30 text-[#143322] text-xs md:text-sm font-bold tracking-wide shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#7BC142] animate-ping" />
            EVIDENCIA EN CAMPO
          </div>

          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#143322] leading-[1.05] tracking-tight">
            Galería de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#143322] via-[#2A6644] to-[#7BC142]">
              Trabajos Ejecutados
            </span>
          </h3>

          <p className="flex items-center justify-center gap-2 text-slate-600 text-sm md:text-base font-normal">
            <MousePointerClick className="w-4 h-4 shrink-0 text-[#7BC142] animate-bounce" />
            <span>
              Haz clic sobre cualquier fotografía para visualizar más contenido.
            </span>
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GALLERY_PROJECTS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-lg shadow-[#143322]/5 hover:shadow-2xl hover:border-[#7BC142]/60 transition-all duration-500 flex flex-col h-[340px] cursor-pointer"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#143322]/95 via-[#143322]/40 to-transparent transition-opacity duration-300" />

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#143322] text-[11px] font-black tracking-wider uppercase shadow-xs border border-slate-200/50">
                  {photo.tag}
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#143322] group-hover:text-[#7BC142] flex items-center justify-center shadow-xs transition-colors">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-lg font-extrabold text-white group-hover:text-[#7BC142] transition-colors leading-snug drop-shadow-xs">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal visor de fotos pura (sin texto) */}
      {selectedPhoto && (
        <PurePhotoGalleryModal
          project={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </section>
  );
}
