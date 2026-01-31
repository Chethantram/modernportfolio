"use client";

import React, { useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageDown, Award } from "lucide-react";
import ViewCetificate from "./ViewCetificate";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATIONS = [
  {
    id: 1,
    title: "ReactJS",
    issuer: "HackerRank",
    date: "Jun 2025",
    description:
      "Learned core React concepts including hooks, state management, and reusable component architecture.",
    link: "/certificates/reactjs.png",
  },
  {
    id: 2,
    title: "OOPs with Java",
    issuer: "Scaler",
    date: "Jul 2024",
    description:
      "Mastered object-oriented principles such as inheritance, polymorphism, encapsulation, and abstraction.",
    link: "/certificates/oops in java.png",
  },
  {
    id: 3,
    title: "Python Essentials",
    issuer: "Cisco",
    date: "Dec 2025",
    description:
      "Covered Python fundamentals, control flow, functions, and problem-solving techniques.",
    link: "/certificates/python.png",
  },
  {
    id: 4,
    title: "SQL",
    issuer: "HackerRank",
    date: "Jul 2025",
    description:
      "Gained hands-on experience with SQL queries, joins, filtering, and database operations.",
    link: "/certificates/sql.png",
  },
  {
    id: 5,
    title: "Cyber Security Basics",
    issuer: "Udemy",
    date: "Dec 2024",
    description:
      "Learned foundational security concepts, threats, vulnerabilities, and safe practices.",
    link: "/certificates/cybercertificate.png",
  },
  {
    id: 6,
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    date: "Aug 2025",
    description:
      "Worked through real-world tech problem simulations and decision-making scenarios.",
    link: "/certificates/simulation.png",
  },
  {
    id: 7,
    title: "Time Management",
    issuer: "Infosys",
    date: "Jun 2025",
    description:
      "Learned task prioritization and productivity techniques for professional environments.",
    link: "/certificates/timemanagement.png",
  },
  {
    id: 8,
    title: "Email Writing",
    issuer: "Infosys",
    date: "Jun 2025",
    description:
      "Developed skills for clear, structured, and professional workplace communication.",
    link: "/certificates/emailwriting.png",
  },
];

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useGSAP(() => {
    q(".cert-card").forEach((card, i) => {
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
            delay: i * 0.06,
            ease: "power3.out",
          }
        )
        .fromTo(
          card.querySelectorAll(".cert-animate"),
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
      id="certificate"
      className="relative mx-auto max-w-6xl px-4 py-28"
    >
      {/* Header */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-blue-500 dark:text-cyan-400">
          Certifications
        </h2>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Continuous learning & professional development
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((c) => (
          <Card
            key={c.id}
            className="cert-card relative overflow-hidden rounded-2xl border shadow-lg hover:scale-105 bg-transparent  transition  hover:shadow-xl"
          >
            {/* Accent rail */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-500" />

            <CardContent className="space-y-4 p-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="cert-animate flex items-center gap-2">
                  <Award className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                    {c.title}
                  </h3>
                </div>

                <span className="cert-animate rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-700 dark:text-cyan-300">
                  {c.date}
                </span>
              </div>

              {/* Issuer */}
              <span className="cert-animate inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-300">
                {c.issuer}
              </span>

              {/* Description */}
              <p className="cert-animate text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-4">
                {c.description}
              </p>

              {/* Action */}
              <div className="pt-2">
                {c.link && (
                  <Button
                    size="sm"
                    onClick={() => {
                      setSelected(c);
                      setModalOpen(true);
                    }}
                    className="cert-animate gap-2 rounded-full border border-cyan-500/40 bg-transparent text-gray-700 hover:bg-cyan-500/10 dark:text-gray-200"
                  >
                    <ImageDown size={16} />
                    View Certificate
                  </Button>
                )}
              </div>
            </CardContent>
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
        title={`${selected?.title || ""} — ${selected?.issuer || ""}`}
        description={selected?.description}
      />
    </section>
  );
};

export default Certifications;
