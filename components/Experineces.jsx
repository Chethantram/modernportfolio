"use client";

import React, { useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { ImageDown } from "lucide-react";
import ViewCetificate from "./ViewCetificate";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "DNote",
    location: "Remote",
    start: "Sep 2025",
    end: "Oct 2025",
    description:
      "Designed secure database schemas using Supabase with Row Level Security. Built UI from Figma designs and developed a PDF editor supporting annotations, shapes, media, and zoom tools.",
    link: "/internshipdnote.jpg",
    tech: "React · Tailwind · Supabase · Database Design",
  },
];

const Experiences = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useGSAP(() => {
    q(".experience-card").forEach((card, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
        .fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.08,
            ease: "power3.out",
          }
        )
        .fromTo(
          card.querySelectorAll(".experience-animate"),
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.07,
            ease: "power3.out",
          },
          "-=0.3"
        );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative mx-auto max-w-6xl px-4 py-28"
    >
      {/* Header */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-blue-500 dark:text-cyan-400">
          Experience
        </h2>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Professional experience and real-world impact
        </p>
      </div>


      {/* Experience Cards */}
      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {EXPERIENCES.map((it) => (
          <Card
            key={it.id}
            className="experience-card group relative border overflow-hidden rounded-2xl dark:hover:shadow-white/10  shadow-sm transition hover:-translate-y-1 hover:shadow-lg bg-transparent"
          >
            {/* Accent rail */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />

            <CardHeader className="pl-6">
              <CardTitle className="space-y-1">
                <span className="experience-animate block text-sm font-semibold text-cyan-700 dark:text-cyan-400">
                  {it.role}
                </span>
                <span className="experience-animate block text-xs text-muted-foreground">
                  {it.company} • {it.location}
                </span>
                <span className="experience-animate block text-xs italic text-muted-foreground">
                  {it.start} — {it.end}
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className="pl-6">
              <p className="experience-animate text-sm leading-relaxed text-muted-foreground line-clamp-6">
                {it.description}
              </p>

              <div className="experience-animate mt-4 flex flex-wrap gap-2 text-xs">
                {it.tech.split(" · ").map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-700 dark:text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pl-6">
              {it.link && (
                <Button
                  size="sm"
                  onClick={() => {
                    setSelected(it);
                    setModalOpen(true);
                  }}
                  className="experience-animate mt-2 gap-2 rounded-full border border-cyan-500/40 bg-transparent text-gray-700 hover:bg-cyan-500/10 dark:text-gray-200"
                >
                  <ImageDown size={16} />
                  View Certificate
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal */}
      <ViewCetificate
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelected(null);
        }}
        src={selected?.link}
        title={`${selected?.role || ""} — ${selected?.company || ""}`}
        description={selected?.description}
      />
    </section>
  );
};

export default Experiences;
