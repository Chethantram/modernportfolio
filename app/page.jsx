import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experineces";
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
        <Experiences/>
        <Projects />
        <Certifications/>
        <Contact />
      </div>
    </div>
  );
};

export default page;
