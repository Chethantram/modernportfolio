"use client"
import React, { useRef, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { ImageDown } from "lucide-react"
import ViewCetificate from "./ViewCetificate"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const STATIC_EXPERIENCES = [
  {
    id: 1,
    role: "Software Engineering Intern",
    company: "DNote",
    location: "Remote",
    start: "09/2025",
    end: "10/2025",
    current: false,
    description:
      "I worked as an SDE Intern at DNote, where I designed database tables in Supabase and implemented Row Level Security (RLS) for secure data access. I built the UI from Figma designs and developed a PDF editor feature that allows users to upload, view, and edit PDFs with tools like text, markers, shapes, highlighters, stamps, media, and zoom functionality.",
    link: "/internshipdnote.jpg",
    tech: "React · Tailwind · Supabase · Database Design",
  },
//   {
//     id: 2,
//     role: "Software Engineering Intern",
//     company: "BlueWave Technologies",
//     location: "Remote",
//     start: "01/2025",
//     end: "Present",
//     current: true,
//     description:
//       "Contributed to feature development and bug fixes across the web app. Implemented unit tests and improved CI pipeline.",
//     link: "",
//     tech: "Next.js · Node.js · Jest",
//   },
//   {
//     id: 3,
//     role: "Open Source Contributor",
//     company: "Various",
//     location: "Worldwide",
//     start: "09/2023",
//     end: "12/2024",
//     current: false,
//     description:
//       "Improved documentation and added localization support to community libraries.",
//     link: "",
//     tech: "JavaScript · Docs",
//   },
]

const Experineces = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState(null);
     const experienceRef = useRef();
      const q = gsap.utils.selector(experienceRef);
    
      useGSAP(() => {
        const cards = q('.service-card');
        cards.forEach((card, i) => {
          gsap.set(card, { y: 80, opacity: 0 });
          ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            onEnter: () => {
              gsap.to(card, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                delay: i * 0.1,
                ease: 'power3.out',
              });
              // Animate children
              const children = card.querySelectorAll('.service-animate');
              children.forEach((el, j) => {
                gsap.to(el, {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  delay: i * 0.1 + j * 0.07,
                  ease: 'power3.out',
                });
              });
            },
            onLeaveBack: () => {
              gsap.to(card, { y: 80, opacity: 0, duration: 0.3 });
              const children = card.querySelectorAll('.service-animate');
              children.forEach((el) => {
                gsap.to(el, { y: 40, opacity: 0, duration: 0.2 });
              });
            },
            onLeave: () => {
              gsap.to(card, { y: 80, opacity: 0, duration: 0.3 });
              const children = card.querySelectorAll('.service-animate');
              children.forEach((el) => {
                gsap.to(el, { y: 40, opacity: 0, duration: 0.2 });
              });
            },
            onEnterBack: () => {
              gsap.to(card, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                delay: i * 0.1,
                ease: 'power3.out',
              });
              const children = card.querySelectorAll('.service-animate');
              children.forEach((el, j) => {
                gsap.to(el, {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  delay: i * 0.1 + j * 0.07,
                  ease: 'power3.out',
                });
              });
            },
          });
          // Set initial state for children
          const children = card.querySelectorAll('.service-animate');
          children.forEach((el) => {
            gsap.set(el, { y: 40, opacity: 0 });
          });
        });
      }, []);

      
  return (
    <section ref={experienceRef} id="experience" className="space-y-6  py-20 md:py-32">
      <h1 className="service-animate text-center text-2xl md:text-3xl font-bold dark:bg-gradient-to-b from-pink-400 via-cyan-500 to-blue-500 bg-clip-text dark:text-transparent">
        Experience
      </h1>
      <div className="absolute top-0  z-0 w-full h-[450px] md:h-[300px]  bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur-3xl opacity-15 "></div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-20">
        {STATIC_EXPERIENCES.map((it) => (
          <Card key={it.id} className={' service-card border-2 border-cyan-700 dark:border-cyan-200/40 rounded-2xl bg-gray-50 dark:bg-gray-700/20'}>
            <CardHeader>
              <CardTitle className=" space-y-3">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#007595] dark:text-blue-400 service-animate">{it.role}</span>
                  <span className="text-sm text-muted-foreground service-animate">{it.company} • {it.location}</span>
                </div>
                <div className="text-xs italic text-muted-foreground service-animate">{it.start} {it.current ? "— Present" : it.end ? `— ${it.end}` : ""}</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground service-animate line-clamp-8">{it.description}</p>
              {it.tech && <div className="mt-2 text-[12px] text-muted-foreground service-animate"><strong className="text-blue-500">Tech:</strong> {it.tech}</div>}
            </CardContent>
            <CardFooter >
              <div className="flex gap-2 service-animate">
                {it.link && (
                  <Button onClick={() => { setSelected(it); setModalOpen(true); }} className={
              "px-5 py-0 rounded-4xl text-gray-800 bg-transparent dark:hover:bg-black/80 hover:bg-gray-300 border-2  dark:text-white border-gray-800/30 dark:border-cyan-100/30"
            } size="sm"><ImageDown size={20}/> View</Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Preview modal */}
      <ViewCetificate
        open={modalOpen}
        onClose={() => { setModalOpen(false); setSelected(null); }}
        src={selected?.link}
        title={`${selected?.role || ""} — ${selected?.company || ""}`}
        description={selected?.description}
      />
    </section>
  )
}

export default Experineces