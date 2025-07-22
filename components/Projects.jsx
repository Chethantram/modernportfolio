'use client'
import Image from "next/image";
import projectThumb from "../images/dummyProject.jpg";
import wealthThumb from "../images/wealth.png";
import blogThumb from "../images/blog.png";
import lmsThumb from "../images/lms.png";
import githubImg from "../images/github.png";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { MoveRight, Triangle } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef();
  const q = gsap.utils.selector(sectionRef);

  useGSAP(() => {
    const projects = [
      { img: ".project-img-left", info: ".project-info-right", xImg: -120, xInfo: 120 },
      { img: ".project-img-right", info: ".project-info-left", xImg: 120, xInfo: -120 },
      { img: ".project-img-left-2", info: ".project-info-right-2", xImg: -120, xInfo: 120 },
    ];
    projects.forEach((proj, i) => {
      const imgEls = q(proj.img);
      const infoEls = q(proj.info);
      imgEls.forEach((imgEl) => {
        gsap.set(imgEl, { x: proj.xImg, opacity: 0 });
        ScrollTrigger.create({
          trigger: imgEl,
          start: "top 85%",
          onEnter: () => {
            gsap.to(imgEl, {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(imgEl, { x: proj.xImg, opacity: 0, duration: 0.3 });
          },
          onLeave: () => {
            gsap.to(imgEl, { x: proj.xImg, opacity: 0, duration: 0.3 });
          },
          onEnterBack: () => {
            gsap.to(imgEl, {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          },
        });
      });
      infoEls.forEach((infoEl) => {
        gsap.set(infoEl, { x: proj.xInfo, opacity: 0 });
        ScrollTrigger.create({
          trigger: infoEl,
          start: "top 85%",
          onEnter: () => {
            gsap.to(infoEl, {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(infoEl, { x: proj.xInfo, opacity: 0, duration: 0.3 });
          },
          onLeave: () => {
            gsap.to(infoEl, { x: proj.xInfo, opacity: 0, duration: 0.3 });
          },
          onEnterBack: () => {
            gsap.to(infoEl, {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            });
          },
        });
      });
    });
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="mt-20 md:mt-40">
      <h1 className="text-center text-2xl md:text-3xl font-bold dark:bg-gradient-to-tl from-blue-500 via-cyan-500  to-pink-500 bg-clip-text dark:text-transparent">
        Projects
      </h1>
      <div className="flex justify-end mr-3 md:mr-10 mt-5 md:mt-0 hover:underline hover:text-blue-500">
        <Link href={"/projects"} className="flex items-center gap-2">
          View all <MoveRight />
        </Link>
      </div>
      {/* Project 1: Image right, Info left */}
      <div className="relative flex flex-col-reverse md:flex-row-reverse items-center md:justify-between lg:justify-evenly gap-4 mt-4 md:mt-20 border-2 border-gray-900/70 dark:border-white/60 md:border-none  md:p-0 rounded-xl md:rounded-none bg-gray-700/20 md:bg-transparent">
        <div className="absolute top-0  z-0 w-full h-[300px] lg:h-[200px] md:h-[300px]  bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-15 "></div>
        <div className="project-info-right mx-3 md:mx-0 md:w-[650px] space-y-3 md:space-y-5 p-1 md:p-0 ">
          <h1 className="text-xl font-medium ">
            AI WealthTrack – Personal Finance Tracker Web Application
          </h1>
          <p className="md:p-5 text-gray-600 dark:text-gray-400  md:bg-gray-100 dark:md:bg-gray-800/50 rounded-2xl text-sm font-medium line-clamp-3 md:line-clamp-none">
            Designed and developed a full-stack personal finance tracker using
            Next.js 14, enabling users to manage and visualize their income,
            expenses, and budgets efficiently. Implemented Clerk for secure user
            authentication, Prisma ORM with Supabase for structured data
            handling, and Inngest to schedule background jobs like recurring
            payments and reminders. Enhanced UX with Sonner for real-time
            notifications and Tailwind CSS for responsive UI. Integrated Arcjet
            for edge-level security and Resend for email communication. The
            platform delivers a modern, secure, and responsive solution for
            personal financial planning.
          </p>
          <div className="flex items-center gap-5 ml-5">
            <Link
              href="https://github.com/Chethantram/personal-finance-tracker"
              target="_blank"
            >
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={githubImg}
                    alt="github"
                    width={30}
                    height={30}
                    className="bg-white/60 rounded-full -z-10"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github Link</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link
              href="https://ai-personal-finance-tracker-321r6a2wb.vercel.app/"
              target="_blank"
            >
              <Tooltip>
                <TooltipTrigger>
                  <span>
                    <Triangle className="size-6 bg-black/30 w-8 h-8 p-1.5 border-white/50 border-2 rounded-full" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Vercel Link</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
        </div>
        <div className="project-img-left">
          <Image
            src={wealthThumb}
            alt="thumbnail"
            width={200}
            height={200}
            className="object-cover mx-auto w-[450px] h-[180px] md:h-[230px]  overflow-hidden rounded-t-xl sm:mt-3 md:mt-0 md:rounded-xl md:p-2 md:border-2 border-gray-300/40 md:bg-gray-100 dark:md:bg-gray-800/50"
          />
        </div>
      </div>
      {/* Project 2: Image left, Info right */}
      <div className="relative md:flex  md:flex-row-reverse items-center md:justify-between lg:justify-evenly gap-4 mt-10 md:mt-20 border-2 border-gray-900/70 dark:border-white/60 md:border-none  md:p-0 rounded-xl md:rounded-none bg-gray-700/20 md:bg-transparent">
        <div className="absolute top-0  z-0 w-full h-[450px] lg:h-[200px] md:h-[300px]   bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-15 "></div>
        <div className="project-img-right">
          <Image
            src={blogThumb}
            alt="thumbnail"
            width={200}
            height={200}
            className="object-cover mx-auto w-[450px] h-[180px] md:h-[230px] overflow-hidden rounded-t-xl md:rounded-xl sm:mt-3 md:mt-0 md:p-2 md:border-2 border-gray-300/40 md:bg-gray-100 dark:md:bg-gray-800/50"
          />
        </div>
        <div className="project-info-left mt-2 md:mt-0 mx-3 md:mx-0 md:w-[650px] space-y-3 md:space-y-5 p-1 md:p-0">
          <h1 className="text-xl font-medium ">
            BlogSphere – Full-Stack Blogging Platform
          </h1>
          <p className="md:p-5 text-gray-600 dark:text-gray-400 md:bg-gray-100 dark:md:bg-gray-800/50 rounded-2xl text-sm font-medium line-clamp-3 md:line-clamp-none">
            Built a responsive blogging platform using Next.js, MongoDB, Clerk,
            and Tailwind CSS.Integrated user authentication with Clerk and
            implemented category-based blog filtering.Developed RESTful APIs to
            fetch and display blog content dynamically with detailed
            views.Designed a mobile-friendly UI with reusable components for
            scalable and clean architecture.
          </p>
          <div className="flex items-center gap-5 ml-5">
            <Link
              href="https://github.com/Chethantram/BlogSphere-"
              target="_blank"
            >
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={githubImg}
                    alt="github"
                    width={30}
                    height={30}
                    className="bg-white/60 rounded-full -z-10"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github Link</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            <Link
              href="https://blog-sphere-orpin.vercel.app/"
              target="_blank"
            >
              <Tooltip>
                <TooltipTrigger>
                  <span>
                    <Triangle className="size-6 bg-black/30 w-8 h-8 p-1.5 border-white/50 border-2 rounded-full" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Vercel Link</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
        </div>
      </div>
      {/* Project 3: Image right, Info left */}
      <div className="relative flex flex-col-reverse md:flex-row-reverse items-center md:justify-between lg:justify-evenly gap-4 mt-10 md:mt-20 border-2 border-gray-900/70 dark:border-white/60 md:border-none  md:p-0 rounded-xl md:rounded-none bg-gray-700/20 md:bg-transparent">
        <div className="absolute top-0  z-0 w-full h-[300px] lg:h-[200px] md:h-[300px]  bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-15 "></div>
        <div className="project-info-right-2 mx-3 md:mx-0 md:w-[650px] space-y-3 md:space-y-5 p-1 md:p-0">
          <h1 className="text-xl font-medium ">E-LearnHub – Full-Stack Learning Management System

</h1>
          <p className="md:p-5 text-gray-600 dark:text-gray-400 md:bg-gray-100 dark:md:bg-gray-800/50 rounded-2xl text-sm font-medium line-clamp-3 md:line-clamp-none">
            Developed a full-stack Learning Management System (LMS) enabling instructors to create and manage online courses, and students to enroll, track progress, and access learning content. Implemented secure user authentication and role-based authorization, integrated Stripe for seamless payment processing, and used Cloudinary for dynamic media uploads. Built with Node.js, MongoDB, and Express.js for backend operations, and employed responsive design principles to ensure optimal user experience across devices. The application features real-time progress tracking, course dashboards, and robust backend architecture for scalability.
          </p>
          <div className="flex items-center gap-5 ml-5">
            <Link
              href="https://github.com/Chethantram/lms-Elearning"
              target="_blank"
            >
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src={githubImg}
                    alt="github"
                    width={30}
                    height={30}
                    className="bg-white/60 rounded-full -z-10"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github Link</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
        </div>
        <div className="project-img-left-2">
          <Image
            src={lmsThumb}
            alt="thumbnail"
            width={200}
            height={200}
            className="object-cover mx-auto w-[450px] h-[180px] md:h-[230px] overflow-hidden rounded-t-xl md:rounded-xl sm:mt-3 md:mt-0  md:p-2 md:border-2 border-gray-300/40 md:bg-gray-100 dark:md:bg-gray-800/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
