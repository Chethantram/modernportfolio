'use client'
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
import prismaImg from "../images/prisma.png";
import mysqlImg from "../images/mysql.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef();
  const q = gsap.utils.selector(sectionRef);

  useGSAP(() => {
    const icons = q(".skill-icon");

    icons.forEach((icon, i) => {
      gsap.set(icon, { y: 80, opacity: 0 }); // Initial state
      ScrollTrigger.create({
        trigger: icon,
        start: "top 80%",
        onEnter: () => {
          gsap.to(icon, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(icon, { y: 80, opacity: 0, duration: 0.3 });
        },
        onLeave: () => {
          gsap.to(icon, { y: 80, opacity: 0, duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(icon, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
          });
        },
      });
    });
  }, []);

  return (
    <div ref={sectionRef} className="relative max-w-6xl mx-auto">
      <h1 className="text-center text-2xl md:text-3xl font-bold dark:bg-gradient-to-tl from-pink-500 via-cyan-500  to-blue-500 bg-clip-text dark:text-transparent">
        Skills
      </h1>
      <div className="absolute top-0  z-0 w-full h-[450px] md:h-[300px]  bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-15 "></div>

        <div className="mt-14 z-10 grid grid-cols-3 md:flex items-center gap-5 md:gap-16 md:max-w-[650px] mx-auto">
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={htmlImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">HTML</p>
          </div>
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={cssImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">CSS</p>
          </div>
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image src={jsImg} alt="html" width={40} height={40} className="" />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">JavaScript</p>
          </div>
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={reactImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">React Js</p>
          </div>
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={nextImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">Next Js</p>
          </div>
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={nodeImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">Node JS</p>
          </div>
        </div>
        <div className="mt-8 md:mt-14 z-10 grid grid-cols-3 md:flex items-center gap-5 md:gap-16 md:pl-5 md:max-w-[650px] mx-auto">
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={mongoImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">MongoDB</p>
          </div>
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={tailwindImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">
              Tailwind Css
            </p>
          </div>
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={pythonImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">Python</p>
          </div>
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={prismaImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">Prisma ORM</p>
          </div>
          <div className="flex flex-col items-center justify-center skill-icon">
            <Image
              src={mysqlImg}
              alt="html"
              width={40}
              height={40}
              className=""
            />
            <p className="text-gray-600 dark:text-gray-200 font-medium text-sm mt-1">MySql</p>
          </div>
        </div>
      
    </div>
  );
};

export default Skills;
