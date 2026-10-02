import React, { useMemo } from "react";
import { MAP_W, MAP_H, buildStates } from "@/js/mexicoGeo";

// Diccionario de equivalencias entre nombres y claves ISO/GEO
const STATE_ALIASES = {
  aguascalientes: ["agu", "ags", "mx-agu", "mx-ags", "01", "1"],
  chihuahua: ["chh", "mx-chh", "08", "8"],
  durango: ["dur", "mx-dur", "10"],
  guanajuato: ["gua", "mx-gua", "11"],
  hidalgo: ["hid", "mx-hid", "13"],
  "nuevo leon": ["nle", "mx-nle", "19"],
  michoacan: ["mic", "mx-mic", "16"],
  oaxaca: ["oax", "mx-oax", "20"],
  queretaro: ["que", "mx-que", "22"],
  "san luis potosi": ["slp", "mx-slp", "24"],
  sinaloa: ["sin", "mx-sin", "25"],
  veracruz: ["ver", "mx-ver", "30"],
  zacatecas: ["zac", "mx-zac", "32"],
};

// Limpia acentos, prefijos "mx-", espacios y guiones
const cleanString = (str) => {
  if (!str) return "";
  return str
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Quita acentos (ó -> o, é -> e)
    .replace(/^mx-/, "") // Quita prefijo MX-
    .replace(/[^a-z0-9]/g, "") // Quita espacios y guiones
    .trim();
};

export default function MexicoMap({
  selected,
  selectedState,
  onSelect,
  onSelectState,
}) {
  const { efsStates, dimPath } = useMemo(() => buildStates(), []);

  const currentSelected = selectedState || selected;
  const handleSelect = onSelectState || onSelect;

  const cleanSelectedVal = cleanString(currentSelected);

  return (
    <svg
      viewBox={`0 0 ${MAP_W} ${MAP_H}`}
      className="w-full h-auto select-none drop-shadow-md"
      role="img"
      aria-label="Mapa interactivo de México con presencia de EFS"
    >
      <defs>
        <filter id="efs-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#143322"
            floodOpacity="0.5"
          />
        </filter>
      </defs>

      {/* ESTADOS SIN PRESENCIA EFS (Fondo Gris) */}
      <path
        d={dimPath}
        className="transition-colors duration-300"
        fill="#E2E8F0"
        stroke="#CBD5E1"
        strokeWidth="1"
      />

      {/* ESTADOS CON PRESENCIA EFS */}
      {efsStates.map((s) => {
        const cleanKey = cleanString(s.key);
        const cleanName = cleanString(s.name);

        let isSelected = false;

        if (cleanSelectedVal) {
          // 1. Coincidencia directa
          if (cleanSelectedVal === cleanKey || cleanSelectedVal === cleanName) {
            isSelected = true;
          } else {
            // 2. Coincidencia por alias en el diccionario
            for (const [groupName, aliases] of Object.entries(STATE_ALIASES)) {
              const cleanGroup = cleanString(groupName);
              const cleanAliases = aliases.map(cleanString);

              const selectedInGroup =
                cleanSelectedVal === cleanGroup ||
                cleanAliases.includes(cleanSelectedVal);
              const stateInGroup =
                cleanKey === cleanGroup ||
                cleanAliases.includes(cleanKey) ||
                cleanName === cleanGroup ||
                cleanAliases.includes(cleanName);

              if (selectedInGroup && stateInGroup) {
                isSelected = true;
                break;
              }
            }
          }
        }

        return (
          <path
            key={s.key}
            d={s.d}
            data-state={s.key}
            onClick={() => {
              if (handleSelect) {
                // Al hacer clic en el mapa, manda el nombre si existe o la clave
                handleSelect(s.name || s.key);
              }
            }}
            filter={isSelected ? "url(#efs-glow)" : undefined}
            className={`cursor-pointer transition-all duration-300 ease-out origin-center ${
              isSelected
                ? "fill-[#143322] stroke-[#143322] stroke-[2]"
                : "fill-[#7BC142] hover:fill-[#143322]/80 stroke-white stroke-[1.2]"
            }`}
          />
        );
      })}
    </svg>
  );
}
