"use client";

import { motion } from "framer-motion";
import { UserCheck, Microscope, BadgeCheck, RefreshCw, Heart } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Atención Personalizada",
    description:
      "Cada paciente es único. Adapto mi atención a tus necesidades específicas con tiempo y dedicación.",
    color: "text-blue-600",
    bg: "bg-blue-600",
  },
  {
    icon: Microscope,
    title: "Diagnóstico Profesional",
    description:
      "Aplico métodos clínicos modernos y evidencia científica para diagnósticos precisos y confiables.",
    color: "text-emerald-600",
    bg: "bg-emerald-600",
  },
  {
    icon: BadgeCheck,
    title: "Experiencia Comprobada",
    description:
      "Con más de 10 años en medicina general, cuento con la experiencia necesaria para atender tu caso.",
    color: "text-violet-600",
    bg: "bg-violet-600",
  },
  {
    icon: RefreshCw,
    title: "Seguimiento Continuo",
    description:
      "No te dejo solo. Monitoreamos tu evolución y ajustamos tu tratamiento cuando sea necesario.",
    color: "text-amber-600",
    bg: "bg-amber-600",
  },
  {
    icon: Heart,
    title: "Atención Humana",
    description:
      "La empatía y el respeto son fundamentales en mi práctica. Te trato como mereces: con calidez y profesionalismo.",
    color: "text-rose-600",
    bg: "bg-rose-600",
  },
];

export default function Benefits() {
  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 relative overflow-hidden"
      aria-label="Por qué elegirnos"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-1.5 rounded-full mb-4">
            ¿Por qué elegirme?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Mi compromiso con tu bienestar
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Estos son los valores que guían cada consulta y que me distinguen
            como tu médico de confianza.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`w-12 h-12 ${benefit.bg} bg-opacity-20 rounded-xl flex items-center justify-center mb-5`}
              >
                <benefit.icon size={24} className={benefit.color} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
