"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ShieldCheck } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 relative overflow-hidden"
      aria-label="Llamado a la acción"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-10" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <ShieldCheck size={14} className="text-emerald-300" />
            <span className="text-sm font-medium text-white/90">
              Atención médica de calidad
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Agenda tu cita hoy y recibe atención médica profesional
          </h2>

          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            No esperes más para cuidar tu salud. Estamos listos para atenderte
            con la calidad y el profesionalismo que mereces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/50000000000?text=Hola%20Doctora%20Keily%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-green-900/30 transition-colors"
              aria-label="Agendar cita por WhatsApp"
            >
              <MessageCircle size={22} />
              Agendar por WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+50000000000"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border border-white/30 transition-colors"
              aria-label="Llamar ahora"
            >
              <Phone size={22} />
              Llamar ahora
            </motion.a>
          </div>

          <p className="text-white/50 text-sm mt-8">
            Sin compromisos • Respuesta inmediata • Atención personalizada
          </p>
        </motion.div>
      </div>
    </section>
  );
}
