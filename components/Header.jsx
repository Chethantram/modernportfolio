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
      <div className="absolute top-0 left-0  z-0 w-3/4 h-[500px] md:h-[700px] lg:h-[500px]  bg-gradient-to-r from-blue-500  to-pink-500 rounded-full blur-3xl opacity-10 "></div>
      <div className="relative w-[330px] h-[340px] md:w-[350px] md:h-[340px] lg:w-[400px] lg:h-[410px] xl:w-[412px]  xl:h-[432px]  mx-auto   lg:mx-0 rounded-full p-1.5 bg-gradient-to-r from-pink-500/80 via-cyan-500/80 to-blue-500/80  shadow-xl  shadow-pink-300/40 glow">
        <img
          src="/photo1.png"
          className="absolute object-cover w-[320px] h-[328px] md:w-[340px]  md:h-[330px] lg:w-[390px] lg:h-[400px] xl:w-[400px] xl:h-[420px] rounded-full border-2 border-white bg-gray-300 shadow-2xl"
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
        <h3 className="text-2xl  md:text-4xl mt-2 font-bold text-gray-800 dark:bg-gradient-to-r from-pink-400 via-cyan-500 to-blue-500 bg-clip-text dark:text-transparent">
          Full-Stack Developer
        </h3>
        <p className="text-gray-600 dark:text-gray-400 font-medium mt-7 max-w-[330px]  md:max-w-[500px] xl:max-w-[500px] lg:max-w-[400px]">
          I am an aspiring full-stack developer passionate about building web
          applications using modern technologies.
        </p>
        <div className="mt-10 flex items-center gap-5 ">
          <a href="#contact">
            <Button
              className={
                "px-10 rounded-4xl   py-5 text-md border-2 border-cyan-100/50 shadow-lg  font-semibold text-white  bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition duration-300"
              }
            >
              Contact
            </Button>
          </a>
          <Button
            className={
              "px-10 py-5 rounded-4xl bg-transparent dark:hover:bg-black/80 hover:bg-gray-300 border-2 text-black dark:text-white border-gray-800 dark:border-cyan-100/50"
            }
          >
            <a target="_blank" href="https://drive.google.com/file/d/1RCn82Z15BzAjZLlYGQpTK-oJfIzUaq_v/view?usp=sharing">
              My Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
