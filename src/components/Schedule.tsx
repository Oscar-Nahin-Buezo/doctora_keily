"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Phone } from "lucide-react";

const schedule = [
  { day: "Lunes", hours: "8:00 AM – 12:00 PM / 2:00 PM – 6:00 PM", available: true },
  { day: "Martes", hours: "8:00 AM – 12:00 PM / 2:00 PM – 6:00 PM", available: true },
  { day: "Miércoles", hours: "8:00 AM – 12:00 PM / 2:00 PM – 6:00 PM", available: true },
  { day: "Jueves", hours: "8:00 AM – 12:00 PM / 2:00 PM – 6:00 PM", available: true },
  { day: "Viernes", hours: "8:00 AM – 12:00 PM / 2:00 PM – 5:00 PM", available: true },
  { day: "Sábado", hours: "8:00 AM – 1:00 PM", available: true },
  { day: "Domingo", hours: "Cerrado", available: false },
];

const today = new Date().toLocaleDateString("es-ES", { weekday: "long" });
const todayName = today.charAt(0).toUpperCase() + today.slice(1);

export default function Schedule() {
  return (
    <section
      id="horarios"
      className="py-20 md:py-28 bg-white"
      aria-label="Horarios de atención"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4">
            Horarios
          </span>
          <h2 className="section-title mb-3">Horarios de Atención</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Estamos disponibles para atenderte en los siguientes horarios.
            Agenda tu cita con anticipación.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Schedule table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center gap-3">
                <Calendar size={20} className="text-white/80" />
                <h3 className="font-semibold text-white">
                  Agenda Semanal
                </h3>
              </div>
              <div className="divide-y divide-slate-50">
                {schedule.map((item, i) => {
                  const isToday =
                    item.day.toLowerCase() === todayName.toLowerCase();
                  return (
                    <motion.div
                      key={item.day}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex items-center justify-between px-6 py-4 transition-colors ${
                        isToday ? "bg-blue-50" : "hover:bg-slate-50"
                      }`}
                      aria-current={isToday ? "date" : undefined}
                    >
                      <div className="flex items-center gap-3">
                        {isToday && (
                          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                        )}
                        <span
                          className={`font-semibold text-sm w-24 ${
                            isToday ? "text-blue-700" : "text-slate-700"
                          }`}
                        >
                          {item.day}
                          {isToday && (
                            <span className="ml-2 text-xs font-normal text-blue-500">
                              (Hoy)
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.available ? (
                          <>
                            <Clock size={14} className="text-slate-400" />
                            <span className="text-sm text-slate-600">
                              {item.hours}
                            </span>
                          </>
                        ) : (
                          <span className="text-sm font-medium text-red-400 bg-red-50 px-3 py-1 rounded-full">
                            Cerrado
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="card border border-slate-100 flex-1">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Phone size={20} className="text-emerald-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Citas con anticipación
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Te recomendamos agendar con 24 horas de anticipación para
                garantizar tu espacio.
              </p>
            </div>

            <div className="card border border-slate-100 flex-1">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Clock size={20} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                Urgencias
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Para casos urgentes, contáctanos directamente por WhatsApp y
                te atenderemos lo antes posible.
              </p>
            </div>

            <a
              href="https://wa.me/50000000000?text=Hola%20Doctora%20Keily%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center text-sm"
              aria-label="Agendar cita por WhatsApp"
            >
              Agendar ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
