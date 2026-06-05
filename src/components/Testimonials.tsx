"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Paciente desde 2019",
    comment:
      "La Dra. Keily es extraordinaria. Siempre me escucha con atención y me explica todo claramente. Gracias a su seguimiento, he mejorado mucho mi salud.",
    stars: 5,
    avatar: "MG",
    color: "bg-blue-500",
  },
  {
    name: "Carlos Ramírez",
    role: "Paciente desde 2021",
    comment:
      "Excelente doctora. Su diagnóstico fue preciso y el tratamiento funcionó perfectamente. La atención es muy personalizada y profesional.",
    stars: 5,
    avatar: "CR",
    color: "bg-emerald-500",
  },
  {
    name: "Ana Martínez",
    role: "Paciente desde 2020",
    comment:
      "Me encanta la calidez humana de la doctora. Se nota que le importa el bienestar de sus pacientes. La recomiendo completamente.",
    stars: 5,
    avatar: "AM",
    color: "bg-violet-500",
  },
  {
    name: "Roberto Pérez",
    role: "Paciente desde 2022",
    comment:
      "Llevé a toda mi familia y quedamos muy satisfechos. La atención es rápida, eficiente y siempre con una sonrisa. ¡100% recomendada!",
    stars: 5,
    avatar: "RP",
    color: "bg-amber-500",
  },
  {
    name: "Laura Sánchez",
    role: "Paciente desde 2018",
    comment:
      "La doctora tiene un manejo excelente de enfermedades crónicas. Llevo años con ella y mi diabetes está perfectamente controlada.",
    stars: 5,
    avatar: "LS",
    color: "bg-rose-500",
  },
  {
    name: "Jorge Herrera",
    role: "Paciente desde 2023",
    comment:
      "Primera vez con ella y quedé impresionado. Muy profesional, puntual y sus diagnósticos son muy acertados. Ya es mi médico de cabecera.",
    stars: 5,
    avatar: "JH",
    color: "bg-sky-500",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrellas`}>
      {[...Array(count)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className="text-yellow-400 fill-yellow-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 md:py-28 bg-[#F8FAFC]"
      aria-label="Testimonios de pacientes"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="section-title mb-3">Lo que dicen mis pacientes</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            La satisfacción de mis pacientes es mi mayor logro. Estas son
            algunas de sus experiencias.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card border border-slate-100 relative"
            >
              <Quote
                size={32}
                className="absolute top-5 right-5 text-slate-100"
                aria-hidden="true"
              />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}
                  aria-hidden="true"
                >
                  <span className="text-white text-sm font-bold">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <StarRating count={t.stars} />
              <p className="text-slate-600 text-sm leading-relaxed mt-3">
                &ldquo;{t.comment}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-sm border border-slate-100 px-8 py-5">
            <div className="text-center">
              <p className="text-4xl font-bold text-slate-800">4.9</p>
              <div className="flex gap-0.5 mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-left">
              <p className="font-semibold text-slate-800">
                Calificación promedio
              </p>
              <p className="text-sm text-slate-500">Basada en +200 reseñas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
