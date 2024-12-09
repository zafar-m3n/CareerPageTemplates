import React from "react";
import Header from "@/components/template2/Header";
import Footer from "@/components/template2/Footer";
import HeroSection from "@/components/template2/HeroSection";
import Benefits from "@/components/template2/Benefits";

const Template2 = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Template2;
