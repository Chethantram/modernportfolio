"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { ArrowLeft, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import projects from "../../lib/projectsData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ project, index }) => {
  const itemRef = useRef(null);
  const isReversed = index % 2 !== 0;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      itemRef.current.querySelector(".project-image"),
      { x: isReversed ? 120 : -120, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    ).fromTo(
      itemRef.current.querySelector(".project-info"),
      { x: isReversed ? -120 : 120, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative grid items-center gap-10 py-10 md:grid-cols-2 ${
        isReversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="rounded-2xl object-cover shadow-lg"
        />
      </div>

      {/* Info */}
      <div className="project-info space-y-5">
        <h3 className="text-2xl font-semibold text-blue-500 dark:text-cyan-400">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.split(",").map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-700 dark:text-cyan-300"
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-2">
          {project.github && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={project.github}
                  target="_blank"
                  className="rounded-full border p-2 hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  <Github size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          )}

          {project.demo && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={project.demo}
                  target="_blank"
                  className="rounded-full border p-2 hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  <Play size={18} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>Live Demo</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};

const AllProjects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4">
      {/* Header */}
      <div className="mb-20 flex items-center gap-4">
        <Link href="/">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full border border-gray-300 dark:border-white/20"
          >
            <ArrowLeft size={16} />
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-blue-500 dark:text-cyan-400">
          All Projects
        </h1>
      </div>

      {/* Projects */}
      <div className="">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
