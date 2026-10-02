import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Clientes", href: "#clientes" },
  { label: "Cobertura", href: "#cobertura" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F0EA]/95 backdrop-blur-md py-2 shadow-md shadow-black/5"
          : "bg-[#F4F0EA] py-6"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 2xl:px-20 flex items-center justify-between">
        {/* LOGO MÁS GRANDE E IDENTIDAD */}
        <button
          onClick={() => go("#top")}
          className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none py-1"
        >
          {/* Icono */}
          <img
            src="/logos/logo1.png"
            alt="EFS Logo"
            className="h-16 w-auto object-contain"
          />

          {/* Texto con borde izquierdo como divisoria */}
          <div className="flex flex-col justify-center pl-1 py-1 h-16">
            <span className="text-[30px] font-black text-[#143322] leading-none">
              EFS
            </span>
            <span className="text-[17px] font-extrabold text-[#143322] uppercase mt-1 leading-none">
              ELECTRICAL & FIRE SYSTEMS
            </span>
          </div>
        </button>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-sm uppercase tracking-widest font-extrabold text-[#143322] hover:text-[#7BC142] transition-all duration-200 cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#7BC142] hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => go("#contacto")}
            className="group relative inline-flex items-center gap-2 bg-[#7BC142] hover:bg-[#88d24b] text-[#000000] font-black text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-[#7BC142]/20 hover:shadow-lg hover:shadow-[#7BC142]/30 cursor-pointer"
          >
            <span>Solicitar Cotización</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </nav>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          className="lg:hidden p-2 rounded-xl bg-[#143322]/5 border border-[#143322]/10 text-[#143322] hover:text-[#7BC142] hover:bg-[#143322]/10 transition-all cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? (
            <X className="w-6 h-6 text-[#7BC142]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="lg:hidden bg-[#F4F0EA] border-t border-[#7BC142]/20 px-6 py-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-left text-sm font-extrabold uppercase tracking-widest text-[#143322] hover:text-[#7BC142] hover:bg-[#143322]/5 px-4 py-3 rounded-xl transition-all cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#143322]/10">
            <button
              onClick={() => go("#contacto")}
              className="w-full flex items-center justify-center gap-2 bg-[#7BC142] hover:bg-[#88d24b] text-[#000000] font-black text-xs uppercase tracking-wider py-3.5 px-5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <span>Solicitar Cotización</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
