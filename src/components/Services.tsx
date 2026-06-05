"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  ShieldCheck,
  Activity,
  ClipboardList,
  FileText,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Consulta General",
    description:
      "Evaluación médica completa para diagnóstico, tratamiento y orientación de cualquier condición de salud.",
    color: "bg-blue-50 text-blue-600",
    border: "hover:border-blue-200",
  },
  {
    icon: ShieldCheck,
    title: "Atención Preventiva",
    description:
      "Chequeos periódicos y programas de prevención para mantener tu salud y detectar enfermedades a tiempo.",
    color: "bg-emerald-50 text-emerald-600",
    border: "hover:border-emerald-200",
  },
  {
    icon: Activity,
    title: "Control de Enfermedades Crónicas",
    description:
      "Manejo y seguimiento especializado de diabetes, hipertensión, enfermedades del corazón y más.",
    color: "bg-rose-50 text-rose-600",
    border: "hover:border-rose-200",
  },
  {
    icon: ClipboardList,
    title: "Evaluaciones Médicas",
    description:
      "Exámenes médicos completos para trabajo, deportes, escuela o cualquier evaluación requerida.",
    color: "bg-violet-50 text-violet-600",
    border: "hover:border-violet-200",
  },
  {
    icon: FileText,
    title: "Certificados Médicos",
    description:
      "Emisión de certificados médicos oficiales para reposo, aptitud física y otros fines legales.",
    color: "bg-amber-50 text-amber-600",
    border: "hover:border-amber-200",
  },
  {
    icon: HeartPulse,
    title: "Seguimiento de Pacientes",
    description:
      "Control y monitoreo continuo de tu evolución para garantizar el mejor resultado en tu tratamiento.",
    color: "bg-sky-50 text-sky-600",
    border: "hover:border-sky-200",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-20 md:py-28 bg-[#F8FAFC]"
      aria-label="Servicios médicos"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Servicios
          </span>
          <h2 className="section-title mb-3">
            Atención médica integral para ti
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos pensados para cuidar
            tu salud en cada etapa de la vida.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`card border border-slate-100 ${service.border} group cursor-default`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/50000000000?text=Hola%20Doctora%20Keily%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
            aria-label="Consultar servicios por WhatsApp"
          >
            Consultar disponibilidad
          </a>
        </motion.div>
      </div>
    </section>
  );
}
