import React from "react";
import Header from "@/components/template3/Header";
import Footer from "@/components/template3/Footer";
import HeroSection from "@/components/template3/HeroSection";
import OurValues from "@/components/template3/OurValues";
import InterviewProcess from "@/components/template3/InterviewProcess";
import Testimonials from "@/components/template3/Testimonials";
import JobsSection from "@/components/template3/JobsSection";

const Template3 = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <HeroSection />
      <OurValues />
      <InterviewProcess />
      <JobsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Template3;
