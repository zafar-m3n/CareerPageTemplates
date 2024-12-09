import React from "react";
import Header from "@/components/template1/Header";
import HeroSection from "@/components/template1/HeroSection";
import WhoWeAreSection from "@/components/template1/WhoWeAreSection";
import WhatWeOfferSection from "@/components/template1/WhatWeOfferSection";
import HowToJoin from "@/components/template1/HowToJoin";
import Footer from "@/components/template1/Footer";

const Template1 = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeOfferSection />
      <HowToJoin />
      <Footer />
    </div>
  );
};

export default Template1;
