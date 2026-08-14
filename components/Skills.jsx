'use client';

import React, { useRef } from "react";
import Image from "next/image";

import htmlImg from "../images/html.png";
import cssImg from "../images/css-3.png";
import jsImg from "../images/js.png";
import reactImg from "../images/react.png";
import tailwindImg from "../images/tailwind.png";
import nodeImg from "../images/nodejs.png";
import nextImg from "../images/nextjs.png";
import mongoImg from "../images/mongodb.png";
import pythonImg from "../images/python.png";
import mysqlImg from "../images/mysql.png";
import linuxImg from "../images/linux.png";
import gitImg from "../images/git.png";
import aws from "../images/aws.png";
import ml from "../images/ml.png";
import docker from "../images/docker.png";
import java from "../images/java.png";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { name: "ReactJs", img: reactImg },
  { name: "NextJs", img: nextImg },
  { name: "NodeJS", img: nodeImg },
  { name: "MongoDB", img: mongoImg },
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "JavaScript", img: jsImg },
  { name: "Tailwind CSS", img: tailwindImg },
  { name: "Linux", img: linuxImg },
  { name: "Java", img: java },
  { name: "Python", img: pythonImg },
  { name: "MySQL", img: mysqlImg },
  { name: "Git", img: gitImg },
  { name: "AWS", img: aws },
  { name: "Machine Learning", img: ml },
  { name: "Docker", img: docker },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useGSAP(() => {
    const icons = q(".skill-icon");

    icons.forEach((icon, i) => {
      gsap.set(icon, { y: 60, opacity: 0 });

      ScrollTrigger.create({
        trigger: icon,
        start: "top 85%",
        onEnter: () =>
          gsap.to(icon, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.06,
            ease: "power3.out",
          }),
        onLeaveBack: () =>
          gsap.to(icon, { y: 60, opacity: 0, duration: 0.3 }),
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-6xl py-20 px-4">
      {/* Header */}
      <div className="mb-14 text-center">
        <h1 className="text-3xl font-bold text-blue-500 dark:text-cyan-400">
          Skills
        </h1>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Technologies & tools I work with
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="skill-icon group flex flex-col items-center justify-center rounded-2xl  px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <Image
              src={skill.img}
              alt={skill.name}
              width={42}
              height={42}
              className="mb-2 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-xs font-medium tracking-wide text-gray-700 dark:text-gray-300 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
