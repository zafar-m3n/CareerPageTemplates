import React from "react";
import Header from "@/components/template3/Header";
import Footer from "@/components/template3/Footer";
import HeroSection from "@/components/template3/HeroSection";
import OurValues from "@/components/template3/OurValues";

const Template3 = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <OurValues />
      <Footer />
    </div>
  );
};

export default Template3;
