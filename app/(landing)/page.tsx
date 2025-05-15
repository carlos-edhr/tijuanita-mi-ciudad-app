import Image from "next/image";
import AnimatedCounter from "./_components/secondary/animated-counter";
import AppShowcase from "./_components/sections/showcase";
import Navbar from "./_components/sections/navbar";
import LogoShowcase from "./_components/sections/logos-showcase";
import FeatureCards from "./_components/sections/feature-cards";
import Experience from "./_components/sections/experience-timeline";
import TechStack from "./_components/sections/tech-stack";
import Testimonials from "./_components/sections/testimonials";
import Contact from "./_components/sections/contact";
import { Footer } from "./_components/sections/footer";
import { HeroSection } from "./_components/sections/hero";
import { MissionSection } from "./_components/sections/mission-section";
import { ActivitiesSection } from "./_components/sections/activities-section";
import { NextEventsSection } from "./_components/sections/next-events-section";
import { GallerySection } from "./_components/sections/gallery-section";

export default function Home() {
  return (
    <div className="">
      {/* <h1 className="bg-azulAstro underline">3d portfolio</h1> */}
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ActivitiesSection />
      <NextEventsSection />
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
