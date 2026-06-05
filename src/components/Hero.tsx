"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Star, Shield, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900"
      aria-label="Sección principal"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white order-2 md:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <Shield size={14} className="text-emerald-400" />
              <span className="text-sm font-medium text-white/90">
                Médico Certificado · Atención de Calidad
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Tu salud en{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-300">
                las mejores
              </span>{" "}
              manos
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-4 font-light">
              <span className="font-semibold text-white">Dra. Keily</span> —
              Médico General
            </p>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Brindamos atención médica personalizada con los más altos
              estándares de calidad. Tu bienestar y el de tu familia es nuestra
              prioridad.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: "10+", label: "Años de experiencia" },
                { value: "5,000+", label: "Pacientes atendidos" },
                { value: "4.9", label: "Calificación", icon: Star },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-white flex items-center gap-1">
                    {stat.value}
                    {stat.icon && (
                      <stat.icon
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    )}
                  </p>
                  <p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/50000000000?text=Hola%20Doctora%20Keily%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-xl shadow-lg shadow-green-900/30 active:scale-95 transition-all duration-200"
                aria-label="Agendar cita por WhatsApp"
              >
                <MessageCircle size={20} />
                Agendar por WhatsApp
              </a>
              <a
                href="tel:+50000000000"
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 active:scale-95 transition-all duration-200"
                aria-label="Llamar ahora"
              >
                <Phone size={20} />
                Llamar ahora
              </a>
            </div>
          </motion.div>

          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400 to-emerald-400 opacity-30 blur-xl scale-105" />

              {/* Image container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[480px] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=800&fit=crop&crop=face"
                  alt="Dra. Keily - Médico General"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Award size={20} className="text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Certificación</p>
                  <p className="text-sm font-bold text-slate-800">
                    Médico General
                  </p>
                </div>
              </motion.div>

              {/* Star rating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-800">4.9</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs">Descubre más</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
