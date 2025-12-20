"use client"
import React, { useRef, useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import ViewCetificate from "./ViewCetificate"
import { ImageDown } from "lucide-react"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const STATIC_CERTIFICATIONS = [
  {
    id: 1,
    title: "ReactJS",
    issuer: "Hackerrank",
    date: "06/2025",
    description:
      "I learned core React concepts such as components, hooks, state management, and building reusable UI components.",
    link: "/certificates/reactjs.png",
  },
  {
    id: 2,
    title: "OOPs with Java",
    issuer: "Scaler",
    date: "07/2024",
    description:
      "I learned object-oriented programming concepts including classes, inheritance, polymorphism, encapsulation, and abstraction using Java.",
    link: "/certificates/oops in java.png",
  },
  {
    id: 3,
    title: "Python Essentials",
    issuer: "Cisco",
    date: "12/2025",
    description:
      "I learned Python fundamentals such as variables, control structures, functions, and basic problem-solving techniques.",
    link: "/certificates/python.png",
  },
  {
    id: 4,
    title: "SQL",
    issuer: "Hackerrank",
    date: "7/2025",
    description:
      "I learned how to write SQL queries for data retrieval, filtering, joins, and basic database management operations.",
    link: "/certificates/sql.png",
  },
  {
    id: 5,
    title: "Cyber Security Basics",
    issuer: "Udemy",
    date: "12/2024",
    description:
      "I learned fundamental cybersecurity concepts like threats, vulnerabilities, basic security practices, and safe system usage.",
    link: "/certificates/cybercertificate.png",
  },
  {
    id: 6,
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    date: "08/2025",
    description:
      "I gained practical exposure to real-world technology tasks by simulating job-related problem-solving and decision-making scenarios.",
    link: "/certificates/simulation.png",
  },
  {
    id: 6,
    title: "Time Management",
    issuer: "Infosys",
    date: "06/2025",
    description:
      "I learned techniques to plan tasks effectively, prioritize work, and manage time efficiently to improve productivity.",
    link: "/certificates/timemanagement.png",
  },
  {
    id: 7,
    title: "Email Writing",
    issuer: "Infosys",
    date: "06/2025",
    description:
      "I learned how to write clear, professional, and structured emails for effective workplace communication.",
    link: "/certificates/emailwriting.png",
  },
]

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState(null)

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
    <section ref={experienceRef} id="certificate" className="space-y-6 py-12 md:py-20">
<h1 className="service-animate text-center text-2xl md:text-3xl font-bold dark:bg-gradient-to-b from-pink-400 via-cyan-500 to-blue-500 bg-clip-text dark:text-transparent">
        Certifications
      </h1>    

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {STATIC_CERTIFICATIONS.map((c) => (
          <Card key={c.id} className={' service-card border-2 border-gray-400 dark:border-cyan-200/40 rounded-2xl bg-gray-50 dark:bg-gray-700/20 service-card'}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-[#007595] dark:text-blue-400 service-animate">{c.title}</span>
                  <span className="text-sm text-muted-foreground service-animate">{c.issuer}</span>
                </div>
                <div className="text-xs text-muted-foreground service-animate">{c.date}</div>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground service-animate">{c.description}</p>
            </CardContent>

            <CardFooter>
              <div className="ml-auto flex gap-2">
                {c.link ? (
                  <Button
                    size="sm"
                    onClick={() => {
                      setSelected(c)
                      setModalOpen(true)
                    }}
                    className={
              "service-animate px-5 py-0 rounded-4xl text-gray-800 bg-transparent dark:hover:bg-black/80 hover:bg-gray-300 border-2  dark:text-white border-gray-800/30 dark:border-cyan-100/30"
            }
                  >
                   <ImageDown size={20}/> View
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" disabled>
                    No preview
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <ViewCetificate
        open={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setSelected(null)
        }}
        src={selected?.link}
        title={`${selected?.title || ""} — ${selected?.issuer || ""}`}
        description={selected?.description}
      />
    </section>
  )
}

export default Certifications