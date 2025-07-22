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

const ProjectNavbar = () => {
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
          
          <div className="flex items-center gap-2 flex-row-reverse md:block">
                  {/* mobile navbar */}
          
          <div className=" mt-2 md:mt-0  md:flex items-center gap-2">
            <ModeToggle />
          </div>
          </div>

          

          
        </div>
      </div>
    </div>
  );
};

export default ProjectNavbar;
