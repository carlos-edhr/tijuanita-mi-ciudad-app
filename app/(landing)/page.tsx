import Navbar from "./_components/sections/navbar";

import { Footer } from "./_components/sections/footer";
// import { HeroSection } from "./_components/sections/hero";
import { QueEsSection } from "./_components/sections/que-es-section";
import { QuienesSomosSection } from "./_components/sections/quienes-somos-section";
import { NextEventsSection } from "./_components/sections/next-events-section";
import { GallerySection } from "./_components/sections/gallery-section";
import { HeroAlternativeSection } from "./_components/sections/hero-alternative";

export default function Home() {
  return (
    <div className="">
      {/* <h1 className="bg-azulAstro underline">3d portfolio</h1> */}
      <Navbar />
      <HeroAlternativeSection />
      <QueEsSection />
      <QuienesSomosSection />
      {/* <NextEventsSection /> */}
      <GallerySection />
      <Footer />
      {/* <AppShowcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience /> */}
      {/* <TechStack /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}
