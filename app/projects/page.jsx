"use client";
import Image from "next/image";
import React from "react";
import githubImg from "../../images/github.png";
import wealthThumb from "../../images/wealth.png";
import lmsThumb from "../../images/lms.png";
import blogThumb from "../../images/blog.png";
import quizThumb from "../../images/quiz.png";
import foodThumb from "../../images/fooddelivary.png";
import fashionThumb from "../../images/fashion.png";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ArrowLeft, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AllProjects = () => {
  const sectionRef = useRef();
  const q = gsap.utils.selector(sectionRef);

  useGSAP(() => {
    const projects = [
      {
        img: ".project-img-left",
        info: ".project-info-right",
        xImg: -120,
        xInfo: 120,
      },
      {
        img: ".project-img-right",
        info: ".project-info-left",
        xImg: 120,
        xInfo: -120,
      },
      {
        img: ".project-img-left-2",
        info: ".project-info-right-2",
        xImg: -120,
        xInfo: 120,
      },
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
    <div id="projects" ref={sectionRef} className="mt-5 md:mt-5 mb-10">
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <Button
            size={"icon"}
            variant={"ghost"}
            className={
              "border-2 border-gray-800/50 dark:border-white/40 rounded-full hover:bg-black/20"
            }
          >
            {" "}
            <ArrowLeft className="size-4" />
          </Button>
        </Link>

        <h1 className="my-5 text-2xl md:text-3xl font-bold dark:bg-gradient-to-tl from-pink-500 via-cyan-500  to-blue-500 bg-clip-text dark:text-transparent">
          All Projects
        </h1>
      </div>
      {/* Project 0: Image left, Info Right */}
      <div className="relative md:flex  md:flex-row-reverse items-center md:justify-between lg:justify-evenly gap-4 mt-10 md:mt-20 border-2 border-gray-900/70 dark:border-white/60 md:border-none  md:p-0 rounded-xl md:rounded-none bg-gray-700/20 md:bg-transparent">
        <div className="absolute top-0  z-0 w-full h-[450px] lg:h-[200px] md:h-[300px]   bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-15 "></div>
        <div className="project-img-right">
          <Image
            src={fashionThumb}
            alt="thumbnail"
            width={200}
            height={200}
            className="object-cover mx-auto w-[450px] h-[180px] md:h-[230px] overflow-hidden rounded-t-xl md:rounded-xl sm:mt-3 md:mt-0 md:p-2 md:border-2 border-gray-300/40 md:bg-gray-100 dark:md:bg-gray-800/50"
          />
        </div>
        <div className="project-info-left mt-2 md:mt-0 mx-3 md:mx-0 md:w-[650px] space-y-3 md:space-y-5 p-1 md:p-0">
          <h1 className="text-xl font-medium text-[#007595] dark:text-blue-400">
            1. Personalized Fashion Styling Engine with Image-Based Virtual Fitting
          </h1>
          <p className="md:p-5 text-gray-600 dark:text-gray-400 md:bg-gray-100 dark:md:bg-gray-800/50 rounded-2xl text-sm font-medium line-clamp-3 md:line-clamp-none">
            Developed an AI-powered virtual fashion stylist that provides
            personalized outfit recommendations based on user preferences and
            images. The app uses machine learning, natural language processing,
            and computer vision to analyze styles and suggest outfits. Built
            with the MERN stack and FastAPI, it offers a responsive and
            user-friendly interface with features like style matching, trend
            analysis, and feedback-based recommendation refinement.
            <br />
            <br />
            <strong className="text-blue-500">Tech Stack : </strong>{" "}
            <span className="italic">
              React.js, Node.js, Express.js, MongoDB, Python, FastAPI, Hugging
              Face Model, Scikit-Learn, Tailwind CSS.
            </span>
          </p>
          <div className="flex items-center gap-5 ml-5">
            <Link
              href="https://github.com/Chethantram/FashionStylist"
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
            {/* <Link
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
            </Link> */}
          </div>
        </div>
      </div>
      {/* Project 1: Image right, Info left */}
      <div className="relative flex flex-col-reverse md:flex-row-reverse items-center md:justify-between lg:justify-evenly gap-4 mt-4 md:mt-20 border-2 border-gray-900/70 dark:border-white/60 md:border-none  md:p-0 rounded-xl md:rounded-none bg-gray-700/20 md:bg-transparent">
        <div className="absolute top-0  z-0 w-full h-[300px] lg:h-[200px] md:h-[300px]  bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-15 "></div>
        <div className="project-info-right mx-3 md:mx-0 md:w-[650px] space-y-3 md:space-y-5 p-1 md:p-0 ">
          <h1 className="text-xl font-medium text-[#007595] dark:text-blue-400 ">
            2.AI WealthTrack – Personal Finance Tracker Web Application
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
            <br />
            <br />
            <strong className="text-blue-500">Tech Stack : </strong>{" "}
            <span className="italic">
              Next.js, Node.js, Express.js, MongoDB, Arcjet, Inngest, Prisma
              ORM, Supabase, Tailwind CSS, Recharts, Resend.
            </span>
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
            src={quizThumb}
            alt="thumbnail"
            width={200}
            height={200}
            className="object-cover mx-auto w-[450px] h-[180px] md:h-[230px] overflow-hidden rounded-t-xl md:rounded-xl sm:mt-3 md:mt-0 md:p-2 md:border-2 border-gray-300/40 md:bg-gray-100 dark:md:bg-gray-800/50"
          />
        </div>
        <div className="project-info-left mt-2 md:mt-0 mx-3 md:mx-0 md:w-[650px] space-y-3 md:space-y-5 p-1 md:p-0">
          <h1 className="text-xl font-medium text-[#007595] dark:text-blue-400">
            3. Smart Educational Assessment Tool with Firebase Authentication and
            Cloud Storage
          </h1>
          <p className="md:p-5 text-gray-600 dark:text-gray-400 md:bg-gray-100 dark:md:bg-gray-800/50 rounded-2xl text-sm font-medium line-clamp-3 md:line-clamp-none">
            Developed an AI-driven quiz generator that automatically converts
            PDFs into customizable quizzes with adjustable difficulty, language
            options, and question count. The system employs natural language
            processing and machine learning to extract key information and
            generate diverse question types such as multiple-choice, true/false,
            and short answers. Integrated Firebase Authentication and Cloud
            Storage for secure user login, profile management, and real-time
            quiz performance tracking. The application is deployed on Vercel
            ensuring fast and seamless access across devices.
            <br />
            <br />
            <strong className="text-blue-500">Tech Stack : </strong>
            <span className="italic">
              Next.js, Firebase, Gemini API, MongoDB, Tailwind CSS.
            </span>
          </p>
          <div className="flex items-center gap-5 ml-5">
            <Link
              href="https://github.com/Chethantram/quiz-forge-ai"
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
            <Link href="https://quiz-forge-ai-ten.vercel.app/" target="_blank">
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
          <h1 className="text-xl font-medium text-[#007595] dark:text-blue-400">
            4. E-LearnHub – Full-Stack Learning Management System
          </h1>
          <p className="md:p-5 text-gray-600 dark:text-gray-400 md:bg-gray-100 dark:md:bg-gray-800/50 rounded-2xl text-sm font-medium line-clamp-3 md:line-clamp-none">
            Developed a full-stack Learning Management System (LMS) enabling
            instructors to create and manage online courses, and students to
            enroll, track progress, and access learning content. Implemented
            secure user authentication and role-based authorization, integrated
            Stripe for seamless payment processing, and used Cloudinary for
            dynamic media uploads. Built with Node.js, MongoDB, and Express.js
            for backend operations, and employed responsive design principles to
            ensure optimal user experience across devices. The application
            features real-time progress tracking, course dashboards, and robust
            backend architecture for scalability.
            <br />
            <br />
            <strong className="text-blue-500">Tech Stack : </strong>{" "}
            <span className="italic">
              React.js, Node.js, Express.js, MongoDB, Redux, Stripe, Cloudinary,
              Tailwind CSS.
            </span>
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
      {/* Projects 4 : Image Left,Info right */}
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
          <h1 className="text-xl font-medium text-[#007595] dark:text-blue-400">
            5. BlogSphere – Full-Stack Blogging Platform
          </h1>
          <p className="md:p-5 text-gray-600 dark:text-gray-400 md:bg-gray-100 dark:md:bg-gray-800/50 rounded-2xl text-sm font-medium line-clamp-3 md:line-clamp-none">
            Built a responsive blogging platform using Next.js, MongoDB, Clerk,
            and Tailwind CSS.Integrated user authentication with Clerk and
            implemented category-based blog filtering.Developed RESTful APIs to
            fetch and display blog content dynamically with detailed
            views.Designed a mobile-friendly UI with reusable components for
            scalable and clean architecture.
            <br />
            <br />
            <strong className="text-blue-500">Tech Stack : </strong>{" "}
            <span className="italic">
              Next.js, Node.js, Express.js, MongoDB, Tailwind CSS.
            </span>
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
            <Link href="https://blog-sphere-orpin.vercel.app/" target="_blank">
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

      {/* Project 5 : Image right,Info left */}
      <div className="relative flex flex-col-reverse md:flex-row-reverse items-center md:justify-between lg:justify-evenly gap-4 mt-10 md:mt-20 border-2 border-gray-900/70 dark:border-white/60 md:border-none  md:p-0 rounded-xl md:rounded-none bg-gray-700/20 md:bg-transparent">
        <div className="absolute top-0  z-0 w-full h-[300px] lg:h-[200px] md:h-[300px]  bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-15 "></div>
        <div className="project-info-right-2 mx-3 md:mx-0 md:w-[650px] space-y-3 md:space-y-5 p-1 md:p-0">
          <h1 className="text-xl font-medium text-[#007595] dark:text-blue-400">
            6. QuickBite – Food Delivery Web Application
          </h1>
          <p className="md:p-5 text-gray-600 dark:text-gray-400 md:bg-gray-100 dark:md:bg-gray-800/50 rounded-2xl text-sm font-medium line-clamp-3 md:line-clamp-none">
            Designed and developed a full-stack food delivery platform with
            Stripe integration for secure online payments.Built a dedicated
            admin panel to add/delete menu items, manage orders, and monitor
            platform activity.Implemented backend using Node.js and Express,
            with MongoDB for data storage and order tracking.Delivered a fully
            responsive UI to ensure a seamless experience for users and admins
            across devices.
             <br />
            <br />
            <strong className="text-blue-500">Tech Stack : </strong>{" "}
            <span className="italic">
              React.js, Node.js, Express.js, MongoDB, Stripe, Tailwind CSS.
            </span>
          </p>
          <div className="flex items-center gap-5 ml-5">
            <Link
              href="https://github.com/Chethantram/FoodDelivary"
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
            src={foodThumb}
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

export default AllProjects;
