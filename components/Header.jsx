"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const container = useRef();
  const text = "Hi,I'm Chethan";
  const letters = text.split("");

  useGSAP(
    () => {
      gsap.from(".letter", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.out",
        repeat: -1,
        repeatDelay: 2,
      });
    },
    { scope: container }
  );

  return (
    <div
      id="home"
      ref={container}
      className="relative mt-10 flex-row-reverse lg:flex md:justify-between items-center space-y-10 md:space-y-0   lg:mx-7"
    >
      
      <div className="relative w-[330px] h-[340px] md:w-[350px] md:h-[340px] lg:w-[400px] lg:h-[410px] xl:w-[412px]  xl:h-[432px]  mx-auto   lg:mx-0 rounded-full p-1.5 bg-[#82C0CC] dark:bg-blue-400  ">
        <img
          src="/photo1.png"
          className="absolute object-cover w-[320px] h-[328px] md:w-[340px]  md:h-[330px] lg:w-[390px] lg:h-[400px] xl:w-[400px] xl:h-[420px] rounded-full border-2 border-white bg-gray-100 dark:bg-gray-100"
          alt="photo"
        />
      </div>
      <div className="flex lg:block flex-col items-center mx-4 md:mx-0 z-10 md:mt-10 lg:mt-0">
        <h1 className="text-4xl md:text-6xl lg:text-5xl  xl:text-7xl text-blue-500 dark:text-cyan-100 font-bold">
          {letters.map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ display: "inline-block" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>
        <h3 className="text-2xl  md:text-4xl mt-2 font-bold text-slate-500 dark:text-cyan-400">
          Software Developer
        </h3>
        <p className="text-[#495057] dark:text-gray-300 font-medium mt-7 max-w-[330px]  md:max-w-[500px] xl:max-w-[500px] lg:max-w-[400px]">
          Led end-to-end project delivery from requirements analysis to deployment, including database management and API integration.
        </p>
        <div className="mt-10 flex items-center gap-5 ">
          <a href="#contact">
            <Button
              className={
                "px-10 rounded-4xl   py-5 text-md border  shadow-2xl shadow-gray-800/20 dark:shadow-cyan-500/20  font-semibold text-white hover:scale-105 hover:bg-blue-600 bg-blue-500 dark:bg-cyan-400 transition duration-300"
              }
            >
              Contact
            </Button>
          </a>
          <Button
            className={
              "px-10 py-5 shadow-md shadow-black/30 hover:scale-105 rounded-4xl bg-transparent dark:hover:bg-black/80 hover:bg-gray-200 border-2 text-black dark:text-white border-gray-800 dark:border-cyan-100/50 transition-all duration-300"
            }
          >
            <a target="_blank" href="https://drive.google.com/drive/folders/1Yw2FrCxNpCgayDDt8T31iRd3cyJvQcTx?usp=drive_link">
              My Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
