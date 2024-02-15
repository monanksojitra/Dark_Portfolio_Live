import React from "react";
import { Link } from "react-router-dom";
import AboutProject from "./AboutProject";
import ClientTestimonials from "./ClientTestimonials";
import Hero from "./Hero";
import Projects from "./Projects";
import ProssessToDesign from "./ProssessToDesign";
import Skilles from "./Skilles";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Skilles />
      <ProssessToDesign />
      <Projects />
      <ClientTestimonials />
      <AboutProject />
    </div>
  );
}

export default Home;
