import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import StatsSection from "./components/stats";
import ProblemSolutionSection from "./components/problem-solution";
import Services from "./components/services";
import Benefits from "./components/benefit";
import HowWork from "./components/how-work";
import Cta from "./components/cta";

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
      </div>
    </div>
  );
};

export default page;
