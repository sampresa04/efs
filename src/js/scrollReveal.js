import { useEffect, useRef } from "react";

/**
 * Lógica de animación al hacer scroll (equivalente a js/main.js).
 * Observa un elemento y le agrega la clase "is-visible" cuando entra
 * en el viewport, disparando las transiciones definidas en styles.css.
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Efecto de contador animado usado en la sección de cobertura/estadísticas.
 */
export function animateCount(el, target, duration = 1400) {
  if (!el) return;
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toString();
  };
  requestAnimationFrame(step);
}