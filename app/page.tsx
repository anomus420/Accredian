import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import AccredianEdge from "@/components/sections/AccredianEdge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import CATFramework from "@/components/sections/CATFramework";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/EnquireModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CATFramework />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <EnquireModal />
    </>
  );
}
