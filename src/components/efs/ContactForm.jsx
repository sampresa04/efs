import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "", // Inicia vacío para obligar a seleccionar una opción
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validación para el teléfono: Filtra y permite SOLO números (máximo 10 dígitos)
    if (name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      if (onlyNums.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: onlyNums }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mapeo completo de variables para EmailJS
    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      from_email: formData.email,
      email: formData.email,
      reply_to: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams, // <-- Se pasa templateParams correctamente corregido
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          alert(
            "Error al enviar el formulario. Verifica tus credenciales de EmailJS.",
          );
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (isSent) {
    return (
      <div className="p-8 bg-[#EEF7F0] border border-[#7BC142]/40 rounded-2xl text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-[#7BC142] mx-auto" />
        <h3 className="text-xl font-bold text-[#143322]">
          ¡Solicitud enviada con éxito!
        </h3>
        <p className="text-sm text-slate-600">
          Hemos recibido tu mensaje. Nos pondremos en contacto contigo a la
          brevedad.
        </p>
        <button
          onClick={() => setIsSent(false)}
          className="mt-2 px-6 py-2.5 bg-[#143322] hover:bg-[#2A6644] text-white rounded-xl text-sm font-bold transition-colors cursor-pointer"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#143322]">
          Enviarnos un Mensaje
        </h3>
        <p className="text-slate-500 text-sm mt-1">
          Completa los campos a continuación y te responderemos a la brevedad.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-5">
          {/* NOMBRE (Obligatorio) */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#143322] mb-2 tracking-wide">
              NOMBRE *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] bg-[#F4F7F5] focus:bg-white focus:outline-none focus:border-[#7BC142] text-sm text-[#143322] placeholder-slate-400 font-medium transition-all"
            />
          </div>

          {/* CORREO (Obligatorio + formato email) */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#143322] mb-2 tracking-wide">
              CORREO *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="tu@correo.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] bg-[#F4F7F5] focus:bg-white focus:outline-none focus:border-[#7BC142] text-sm text-[#143322] placeholder-slate-400 font-medium transition-all"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* TELÉFONO (Obligatorio + Solo 10 Números) */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#143322] mb-2 tracking-wide">
              TELÉFONO *
            </label>
            <input
              type="tel"
              name="phone"
              required
              minLength={10}
              maxLength={10}
              pattern="[0-9]{10}"
              title="Por favor ingresa un número de 10 dígitos"
              placeholder="6180000000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] bg-[#F4F7F5] focus:bg-white focus:outline-none focus:border-[#7BC142] text-sm text-[#143322] placeholder-slate-400 font-medium transition-all"
            />
          </div>

          {/* SERVICIO DE INTERÉS (Obligatorio) */}
          <div>
            <label className="block text-xs font-bold uppercase text-[#143322] mb-2 tracking-wide">
              SERVICIO DE INTERÉS *
            </label>
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] bg-[#F4F7F5] focus:bg-white focus:outline-none focus:border-[#7BC142] text-sm text-[#143322] font-medium transition-all cursor-pointer"
            >
              <option value="" disabled>
                *Selecciona un servicio
              </option>
              <option value="Mantenimiento eléctrico">
                Mantenimiento eléctrico
              </option>
              <option value="Sistemas contra incendio">
                Sistemas contra incendio
              </option>
              <option value="Obra Civil e Industrial">
                Obra Civil e Industrial
              </option>
              <option value="Buceo Industrial">Buceo Industrial</option>

              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>

        {/* MENSAJE (Obligatorio) */}
        <div>
          <label className="block text-xs font-bold uppercase text-[#143322] mb-2 tracking-wide">
            MENSAJE *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Ej. Instalación eléctrica para una planta industrial"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-[#E2E8F0] bg-[#F4F7F5] focus:bg-white focus:outline-none focus:border-[#7BC142] text-sm text-[#143322] placeholder-slate-400 font-medium transition-all resize-none"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#143322] hover:bg-[#1C452E] text-white font-bold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer shadow-md disabled:opacity-50"
          >
            {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
            <Send className="w-4 h-4 text-[#7BC142]" />
          </button>
        </div>
      </form>
    </div>
  );
}
