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
    <div className="">
      <div className="pt-4 md:pt-8">
        <div className="relative p-3 md:p-5 border-2 border-gray-500 shadow-md shadow-white/20 rounded-xl flex justify-between  items-center ">
          <Link href={'/'}>
            <span className="relative inline-block">
              <h1 ref={chethanRef} className="text-md dark:text-white font-medium  relative z-10">CHETHAN</h1>
              <span
                ref={underlineRef}
                className="absolute left-0 bottom-0 h-[3px] w-8 rounded-full bg-gradient-to-r from-gray-800/0 dark:from-white/0 via-gray-800 dark:via-white to-gray-800/0 dark:to-white/0 blur-[2px] z-0 pointer-events-none"
                style={{ transition: 'none' }}
              />
            </span>
          </Link>
          <div className="hidden sm:block">
            <ul className="flex items-center gap-5 text-sm font-medium">
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
                className={`hover:border-2 hover:border-gray-500/50 hover:px-2 hover:rounded-4xl ${
                  menu === "About" ? "border-2 border-gray-800/80 dark:border-gray-400/80 px-2 rounded-4xl" : ""
                }`}
                onClick={() => setMenu("About")}
              >
                About
              </Link>
              <Link
                href="#services"
                className={`hover:border-2 hover:border-gray-500/50 hover:px-2 hover:rounded-4xl ${
                  menu === "Services" ? "border-2 border-gray-800/80 dark:border-gray-400/80 px-2 rounded-4xl" : ""
                }`}
                onClick={() => setMenu("Services")}
              >
                Services
              </Link>
              <Link
                href="#experience"
                className={`hover:border-2 hover:border-gray-500/50 hover:px-2 hover:rounded-4xl ${
                  menu === "Experience" ? "border-2 border-gray-800/80 dark:border-gray-400/80 px-2 rounded-4xl" : ""
                }`}
                onClick={() => setMenu("Experience")}
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className={`hover:border-2 hover:border-gray-500/50 hover:px-2 hover:rounded-4xl ${
                  menu === "Projects" ? "border-2 border-gray-800/80 dark:border-gray-400/80 px-2 rounded-4xl" : ""
                }`}
                onClick={() => setMenu("Projects")}
              >
                Projects
              </Link>
              <Link
                href="#certificate"
                className={`hover:border-2 hover:border-gray-500/50 hover:px-2 hover:rounded-4xl ${
                  menu === "Certificate" ? "border-2 border-gray-800/80 dark:border-gray-400/80 px-2 rounded-4xl" : ""
                }`}
                onClick={() => setMenu("Certificate")}
              >
                Certificate
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-2 flex-row-reverse md:block">
                  {/* mobile navbar */}
          <div className="block sm:hidden">
            <Sheet open={open} onOpenChange={setOpen} >
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className={"dark:bg-[#0E0425] dark:text-gray-300 w-[200px]"}>
                <SheetHeader>
                  <SheetTitle className={"dark:text-gray-300 font-medium"}>
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="p-5 ">
                  <ul className="flex flex-col items-start  gap-3 text-sm font-medium">
                    {/* <Link
                      href="#home"
                      className={`hover:text-blue-500 ${
                        menu === "Home" ? "text-blue-600" : ""
                      }`}
                      onClick={() => {
                        setOpen(false);
                        setMenu("Home");
                      }}
                    >
                      Home
                    </Link> */}
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
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className=" mt-2 md:mt-0  md:flex items-center gap-2">
            <ModeToggle />
          </div>
          </div>

          

          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
