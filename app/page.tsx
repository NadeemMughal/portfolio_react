import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechCarousel from "@/components/TechCarousel";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import VoiceAgent from "@/components/VoiceAgent";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <Hero />
      <TechCarousel />
      <About />
      <FeaturedWork />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />

      {/* AI Widgets */}
      <ChatWidget />
      <VoiceAgent />
    </main>
  );
}
