"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

export default function Location() {
  const address = "Tu Dirección, Ciudad, País";
  const mapsUrl = "https://maps.google.com/?q=Tu+Dirección+Ciudad+País";

  return (
    <section
      id="ubicacion"
      className="py-20 md:py-28 bg-white"
      aria-label="Ubicación del consultorio"
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
            Ubicación
          </span>
          <h2 className="section-title mb-3">Encuéntranos fácilmente</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Nuestro consultorio está estratégicamente ubicado para facilitar
            tu acceso y el de tu familia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="card border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    Dirección
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="card border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    Teléfono
                  </h3>
                  <a
                    href="tel:+50000000000"
                    className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    +500 0000-0000
                  </a>
                </div>
              </div>
            </div>

            <div className="card border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">
                    Horario
                  </h3>
                  <p className="text-sm text-slate-500">
                    Lun–Vie: 8AM–6PM
                  </p>
                  <p className="text-sm text-slate-500">Sáb: 8AM–1PM</p>
                </div>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors active:scale-95"
              aria-label="Abrir Google Maps para obtener direcciones"
            >
              <Navigation size={16} />
              Cómo llegar
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-80 md:h-96 bg-slate-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120000!2d-90.5328!3d14.6349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1a4f3457a63%3A0x3e1a48b4f8e30e19!2sGuatemala!5e0!3m2!1ses!2sgt!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del consultorio"
              aria-label="Mapa con la ubicación del consultorio"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
