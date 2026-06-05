import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Keily | Médico General - Atención Profesional y Personalizada",
  description:
    "Consulta médica general con la Dra. Keily. Atención personalizada, diagnóstico profesional y seguimiento continuo. Agenda tu cita hoy.",
  keywords: [
    "doctora keily",
    "médico general",
    "consulta médica",
    "atención médica",
    "salud",
    "medicina preventiva",
  ],
  authors: [{ name: "Dra. Keily" }],
  openGraph: {
    title: "Dra. Keily | Médico General",
    description:
      "Atención médica profesional y personalizada. Agenda tu cita hoy.",
    type: "website",
    locale: "es_ES",
    siteName: "Consultorio Dra. Keily",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Keily | Médico General",
    description:
      "Atención médica profesional y personalizada. Agenda tu cita hoy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
