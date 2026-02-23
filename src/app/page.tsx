import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Portfolio />
      <Services />
      <Testimonial />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}
