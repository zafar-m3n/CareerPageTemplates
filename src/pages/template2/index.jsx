import React from "react";
import Header from "@/components/template2/Header";
import Footer from "@/components/template2/Footer";
import HeroSection from "@/components/template2/HeroSection";
import Benefits from "@/components/template2/Benefits";
import Testimonials from "@/components/template2/Testimonials";
import JobsSection from "@/components/template2/JobsSection";
import HowToApply from "@/components/template2/HowToApply";

const Template2 = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <Benefits />
      <JobsSection />
      <Testimonials />
      <HowToApply />
      <Footer />
    </div>
  );
};

export default Template2;
