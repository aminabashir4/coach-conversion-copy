import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import StatsSection from "./components/stats";
import ProblemSolutionSection from "./components/problem-solution";
import Services from "./components/services";
import Benefits from "./components/benefit";
import HowWork from "./components/how-work";
import Cta from "./components/cta";
import Testimonial from "./components/testimonial";
import Comparison from "./components/comparison";
import Guide from "./components/guide";
import Promo from "./components/promo";
import About from "./components/about";
import CTA from "./components/cta1";
import Footer from "./components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <StatsSection />
      <ProblemSolutionSection />
      <Services />
      <div className="min-h-screen font-sans overflow-x-hidden bg-white">
        <Benefits />
        <HowWork/>
        <Cta/>
        <Testimonial/>
        <Comparison/>
        <Guide/>
        <Promo/>
        <About/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  );
};

export default page;
