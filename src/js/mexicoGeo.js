import MEXICO from "@/data/mexico-states.json";

export const EFS_KEYS = [
  "AGUASCALIENTES", "CHIHUAHUA", "DURANGO", "GUANAJUATO", "HIDALGO", "NUEVO LEON",
  "MICHOACAN", "OAXACA", "QUERETARO", "SAN LUIS POTOSI", "SINALOA", "VERACRUZ", "ZACATECAS",
];

export function normKey(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

const B = { minLon: -118.37, maxLon: -86.72, minLat: 14.53, maxLat: 32.73 };
export const MAP_W = 900;
export const MAP_H = Math.ceil((B.maxLat - B.minLat) * (MAP_W / (B.maxLon - B.minLon)));

const px = (lon) => (lon - B.minLon) * (MAP_W / (B.maxLon - B.minLon));
const py = (lat) => (B.maxLat - lat) * (MAP_W / (B.maxLon - B.minLon));

function ringPath(ring) {
  let d = `M${px(ring[0][0]).toFixed(1)},${py(ring[0][1]).toFixed(1)}`;
  for (let i = 1; i < ring.length; i++) {
    d += `L${px(ring[i][0]).toFixed(1)},${py(ring[i][1]).toFixed(1)}`;
  }
  return d + "Z";
}

function featurePath(f) {
  const parts = [];
  if (f.geometry.type === "Polygon") {
    f.geometry.rings.forEach((r) => parts.push(ringPath(r)));
  } else {
    f.geometry.polys.forEach((rings) => rings.forEach((r) => parts.push(ringPath(r))));
  }
  return parts.join("");
}

/** Agrupa los rasgos geográficos en estados con presencia EFS y un fondo con el resto. */
export function buildStates() {
  const efs = new Map();
  let dimPath = "";
  for (const f of MEXICO.features) {
    const key = EFS_KEYS.find((k) => normKey(f.name).startsWith(k));
    const d = featurePath(f);
    if (key) efs.set(key, (efs.get(key) || "") + d);
    else dimPath += d;
  }
  return {
    efsStates: [...efs.entries()].map(([key, d]) => ({ key, d })),
    dimPath,
  };
}