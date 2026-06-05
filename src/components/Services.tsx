'use client';

import { motion } from 'framer-motion';
import {
  Stethoscope,
  ShieldCheck,
  Activity,
  ClipboardList,
  FileText,
  HeartPulse,
  MonitorSmartphone,
  Baby,
  Home,
  HeartHandshake,
  ClipboardCheck,
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Consulta General',
    description:
      'Atención médica integral para diagnóstico, tratamiento y seguimiento de diversas condiciones de salud.',
    color: 'bg-blue-50 text-blue-600',
    border: 'hover:border-blue-200',
  },
  {
    icon: MonitorSmartphone,
    title: 'Telemedicina',
    description:
      'Consultas médicas virtuales desde la comodidad de tu hogar con atención profesional y personalizada.',
    color: 'bg-cyan-50 text-cyan-600',
    border: 'hover:border-cyan-200',
  },
  {
    icon: Baby,
    title: 'Control Infantil y Prenatal',
    description:
      'Seguimiento del niño sano y control prenatal para cuidar la salud de la madre y el bebé.',
    color: 'bg-pink-50 text-pink-600',
    border: 'hover:border-pink-200',
  },
  {
    icon: Home,
    title: 'Atención a Domicilio',
    description:
      'Consultas médicas en casa para pacientes que requieren atención personalizada y mayor comodidad.',
    color: 'bg-emerald-50 text-emerald-600',
    border: 'hover:border-emerald-200',
  },
  {
    icon: HeartHandshake,
    title: 'Atención al Adulto Mayor',
    description:
      'Evaluación, control y seguimiento de la salud de adultos mayores con un enfoque humano y profesional.',
    color: 'bg-violet-50 text-violet-600',
    border: 'hover:border-violet-200',
  },
  {
    icon: ClipboardCheck,
    title: 'Procedimientos Médicos',
    description:
      'Aplicación de medicamentos y sueros, citologías, lavado de oído, suturas simples, retiro de puntos, DIU e Implanon.',
    color: 'bg-amber-50 text-amber-600',
    border: 'hover:border-amber-200',
  },
];

export default function Services() {
  return (
    <section
      id='servicios'
      className='py-20 md:py-28 bg-[#F8FAFC]'
      aria-label='Servicios médicos'
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-14'
        >
          <span className='inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4'>
            Servicios
          </span>
          <h2 className='section-title mb-3'>
            Atención médica integral para ti
          </h2>
          <p className='section-subtitle max-w-xl mx-auto'>
            Ofrecemos una amplia gama de servicios médicos pensados para cuidar
            tu salud en cada etapa de la vida.
          </p>
        </motion.div>

        {/* Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
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
                <service.icon size={24} aria-hidden='true' />
              </div>
              <h3 className='text-lg font-semibold text-slate-800 mb-2'>
                {service.title}
              </h3>
              <p className='text-slate-500 text-sm leading-relaxed'>
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
          className='text-center mt-12'
        >
          <a
            href='https://wa.me/50000000000?text=Hola%20Doctora%20Keily%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-whatsapp inline-flex'
            aria-label='Consultar servicios por WhatsApp'
          >
            Consultar disponibilidad
          </a>
        </motion.div>
      </div>
    </section>
  );
}
