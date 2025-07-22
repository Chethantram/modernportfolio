import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative ">
        <Header />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default page;
