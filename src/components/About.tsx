"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Users, Heart } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    icon: GraduationCap,
    title: "Licenciatura en Medicina",
    subtitle: "Universidad Nacional, 2010–2016",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Award,
    title: "Especialización en Medicina General",
    subtitle: "Hospital Central, 2016–2018",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Award,
    title: "Certificación Médica Nacional",
    subtitle: "Colegio Médico, 2018",
    color: "bg-purple-100 text-purple-600",
  },
];

const stats = [
  { icon: Users, value: "5,000+", label: "Pacientes atendidos" },
  { icon: Award, value: "10+", label: "Años de experiencia" },
  { icon: Heart, value: "98%", label: "Satisfacción" },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-20 md:py-28 bg-white"
      aria-label="Sobre la doctora"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=750&fit=crop&crop=face"
                alt="Dra. Keily en consulta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>

            {/* Stats floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-5 grid grid-cols-3 gap-4 border border-slate-100">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl font-bold text-blue-600">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 leading-tight mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pt-6 md:pt-0"
          >
            <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
              Sobre Mí
            </span>

            <h2 className="section-title mb-4">
              Más de una década cuidando tu salud
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Soy la{" "}
              <strong className="text-slate-800">Dra. Keily</strong>, médico
              general con más de 10 años de experiencia brindando atención
              médica integral a pacientes de todas las edades. Mi compromiso es
              ofrecerte un diagnóstico preciso y un trato humano y cercano.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              Creo firmemente que una buena relación médico-paciente es la base
              de un tratamiento efectivo. Por eso, en cada consulta dedico el
              tiempo necesario para escucharte, entenderte y ofrecerte la mejor
              atención posible.
            </p>

            {/* Credentials */}
            <div className="space-y-3">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cred.color}`}
                  >
                    <cred.icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">
                      {cred.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {cred.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
