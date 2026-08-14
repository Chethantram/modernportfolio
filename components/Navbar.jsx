"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Home, Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [open, setOpen] = useState(false);
  const chethanRef = useRef();
  const underlineRef = useRef();

  useGSAP(() => {
    if (!chethanRef.current || !underlineRef.current) return;
    const textWidth = chethanRef.current.offsetWidth;
    const underlineWidth = underlineRef.current.offsetWidth;
    const maxX = textWidth - underlineWidth;
    gsap.to(underlineRef.current, {
      x: maxX,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    setMenu("Home");
  }, [])
  return (
    <div className="fixed top-0 left-0 right-20  sm:right-0 justify-center sm:justify-start items-center sm:items-start max-w-xl sm:max-w-none z-50 px-5 md:px-12 lg:px-18 xl:px-40 pt-4 md:pt-8 bg-gradient-to-b from-white/95 dark:from-slate-900/80 to-transparent">
      <div className="relative p-3 md:p-5 border shadow-lg rounded-full flex justify-between items-center hover:shadow-xl dark:hover:shadow-white/10 transition-all duration-300 bg-white/90 dark:bg-slate-900/50 backdrop-blur-md">
          <Link href={'/'}>
            <span className="relative inline-block">
              <h1 ref={chethanRef} className="text-sm md:text-md dark:text-white font-medium  relative z-10">CHETHAN</h1>
              <span
                ref={underlineRef}
                className="absolute left-0 bottom-0 h-[3px] w-8 rounded-full bg-gradient-to-r from-gray-800/0 dark:from-white/0 via-gray-800 dark:via-white to-gray-800/0 dark:to-white/0 blur-[2px] z-0 pointer-events-none"
                style={{ transition: 'none' }}
              />
            </span>
          </Link>
          <div className="hidden sm:block">
            <ul className="flex  items-center gap-5 text-sm font-medium">
              {/* <Link
                href="#home"
                className={`hover:border-2 hover:border-gray-500/50 hover:px-2 hover:rounded-4xl ${
                  menu === "Home" ? "border-2 border-gray-800/80 dark:border-gray-400/80 px-2 rounded-4xl" : ""
                } `}
                onClick={() => setMenu("Home")}
              >
                Home
              </Link> */}
              <Link
                href="#about"
                className={`transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105  ${
                  menu === "About" ? "text-blue-600  dark:text-blue-400" : ""
                }`}
                onClick={() => setMenu("About")}
              >
                About
              </Link>
              <Link
                href="#services"
                className={`transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 ${
                  menu === "Services" ? "text-blue-600  dark:text-blue-400" : ""
                }`}
                onClick={() => setMenu("Services")}
              >
                Services
              </Link>
              <Link
                href="#experience"
                className={`transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 ${
                  menu === "Experience" ? "text-blue-600  dark:text-blue-400" : ""
                }`}
                onClick={() => setMenu("Experience")}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className={`transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 ${
                  menu === "Projects" ? "text-blue-600  dark:text-blue-400" : ""
                }`}
                onClick={() => setMenu("Projects")}
              >
                Projects
              </Link>
              <Link
                href="#certificate"
                className={`transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 ${
                  menu === "Certificate" ? "text-blue-600  dark:text-blue-400" : ""
                }`}
                onClick={() => setMenu("Certificate")}
              >
                Certificate
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-2 flex-row-reverse sm:flex-row">
                  {/* mobile navbar */}
          <div className="block sm:hidden">
            <Sheet  open={open} onOpenChange={setOpen} >
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className={"dark:bg-[#0E0425] dark:text-gray-300 w-[200px] sm:hidden"}>
                <SheetHeader>
                  <SheetTitle className={"dark:text-gray-300 font-medium"}>
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="p-5 ">
                  <ul className="flex flex-col items-start  gap-3 text-sm font-medium">
                    <li>
                      <Link
                        href="#about"
                        className={`hover:text-blue-500 ${
                          menu === "About" ? "text-blue-600" : ""
                        }`}
                        onClick={() => {
                          setOpen(false);
                          setMenu("About");
                        }}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#services"
                        className={`hover:text-blue-500 ${
                          menu === "Services" ? "text-blue-600" : ""
                        }`}
                        onClick={() => {
                          setMenu("Services");
                          setOpen(false);
                        }}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#experience"
                        className={`hover:text-blue-500 ${
                          menu === "Experience" ? "text-blue-600" : ""
                        }`}
                        onClick={() => {
                          setMenu("Experience");
                          setOpen(false);
                        }}
                      >
                        Experience
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#projects"
                        className={`hover:text-blue-500 ${
                          menu === "Projects" ? "text-blue-600" : ""
                        }`}
                        onClick={() => {
                          setMenu("Projects");
                          setOpen(false);
                        }}
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#certificate"
                        className={`hover:text-blue-500 ${
                          menu === "Certificate" ? "text-blue-600" : ""
                        }`}
                        onClick={() => {
                          setMenu("Certificate");
                          setOpen(false);
                        }}
                      >
                        Certificate
                      </Link>
                    </li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="md:flex items-center gap-2 ml-2 md:ml-0">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;