import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Schedule />
      <Testimonials />
      <Location />
      <SocialMedia />
      <Contact />
      <CTASection />
      <Footer />
    </main>
  );
}
