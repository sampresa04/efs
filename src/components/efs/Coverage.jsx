import React, { useState } from "react";
import { MapPin, MousePointerClick } from "lucide-react";
import { useScrollReveal } from "@/js/scrollReveal";
import MexicoMap from "./MexicoMap";

const COVERAGE_STATES = [
  { id: "MX-AGU", name: "Aguascalientes" },
  { id: "MX-CHH", name: "Chihuahua" },
  { id: "MX-DUR", name: "Durango" },
  { id: "MX-GUA", name: "Guanajuato" },
  { id: "MX-HID", name: "Hidalgo" },
  { id: "MX-NLE", name: "Nuevo León" },
  { id: "MX-MIC", name: "Michoacán" },
  { id: "MX-OAX", name: "Oaxaca" },
  { id: "MX-QUE", name: "Querétaro" },
  { id: "MX-SLP", name: "San Luis Potosí" },
  { id: "MX-SIN", name: "Sinaloa" },
  { id: "MX-VER", name: "Veracruz" },
  { id: "MX-ZAC", name: "Zacatecas" },
];

// Helper flexible para hacer match entre IDs del mapa y los de la lista
const findState = (query) => {
  if (!query) return null;
  const clean = query.toString().toLowerCase().trim().replace(/^mx-/, "");
  return COVERAGE_STATES.find(
    (s) =>
      s.id.toLowerCase().replace(/^mx-/, "") === clean ||
      s.name.toLowerCase() === clean ||
      s.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase() === clean,
  );
};

export default function Coverage() {
  const [selectedStateId, setSelectedStateId] = useState("MX-DUR"); // Durango por defecto
  const headRef = useScrollReveal();
  const mapRef = useScrollReveal();

  const activeStateObj = findState(selectedStateId) || COVERAGE_STATES[2];

  const handleSelectState = (keyOrName) => {
    const match = findState(keyOrName);
    if (match) {
      setSelectedStateId(match.id);
    }
  };

  return (
    <section
      id="cobertura"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#EEF7F0]/40 to-white py-16 lg:py-28 text-[#143322]"
    >
      {/* Luz ambiental de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] bg-[#7BC142]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -right-40 w-[500px] h-[500px] bg-[#143322]/5 rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 2xl:px-20 max-w-[1600px] mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* COLUMNA IZQUIERDA: INFORMACIÓN Y OPCIONES */}
          <div ref={headRef} className="efs-reveal lg:col-span-6 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EEF7F0] border border-[#7BC142]/30 text-[#143322] text-xs md:text-sm font-bold tracking-wide shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7BC142] animate-ping" />
              PRESENCIA NACIONAL
            </div>

            {/* Título Principal */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#143322] leading-[1.05] tracking-tight">
              Nuestra presencia{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#143322] via-[#2A6644] to-[#7BC142]">
                hace la diferencia
              </span>
            </h2>

            {/* Descripción */}
            <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed font-normal">
              <strong className="font-extrabold text-[#143322]">
                13 estados
              </strong>{" "}
              de la República Mexicana ya confían en EFS para la operación
              segura de sus instalaciones.
            </p>

            {/* Indicador interactivo */}
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#7BC142]">
              <MousePointerClick className="w-4 h-4 text-[#7BC142] animate-bounce" />
              <span>Selecciona un estado de la lista o en el mapa</span>
            </div>

            {/* OPCIONES DE ESTADOS */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {COVERAGE_STATES.map((st) => {
                const isSelected = activeStateObj.id === st.id;
                return (
                  <button
                    key={st.id}
                    onClick={() => handleSelectState(st.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer shadow-xs border ${
                      isSelected
                        ? "bg-[#143322] text-white border-[#143322] shadow-md scale-105"
                        : "bg-white text-[#143322] border-slate-200/90 hover:border-[#7BC142] hover:bg-[#EEF7F0]/60"
                    }`}
                  >
                    <MapPin
                      className={`w-3.5 h-3.5 ${
                        isSelected ? "text-[#7BC142]" : "text-slate-400"
                      }`}
                    />
                    <span>{st.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA INTERACTIVO */}
          <div
            ref={mapRef}
            className="efs-reveal lg:col-span-6 relative flex items-center justify-center"
          >
            <div className="relative w-full bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-2xl shadow-[#143322]/10 overflow-hidden group">
              <div className="relative z-10 w-full min-h-[380px] sm:min-h-[460px] flex items-center justify-center">
                <MexicoMap
                  selectedState={activeStateObj.id}
                  onSelectState={(clickedKey) => handleSelectState(clickedKey)}
                />
              </div>

              {/* Leyenda */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-[#7BC142] shadow-xs" />
                  <span>Cobertura Activa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md bg-[#143322]" />
                  <span>Estado Seleccionado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
