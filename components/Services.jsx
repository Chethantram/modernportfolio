'use client';

import React, { useRef } from 'react';
import { Cloud, Code2, Database, LayoutDashboard, ServerCog } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: 'Full-Stack Development',
    description:
      'Delivering complete end-to-end solutions by seamlessly connecting frontend, backend, and databases.',
    icon: Code2,
  },
  {
    title: 'Frontend Development',
    description:
      'Building responsive, modern, and user-friendly interfaces with a focus on performance and clean design.',
    icon: LayoutDashboard,
  },
  {
    title: 'Backend & API Integration',
    description:
      'Developing secure, scalable backend systems and APIs to power reliable applications.',
    icon: ServerCog,
  },
  {
    title: 'Cloud & Deployment Services',
    description:
      'Deploying and managing applications on the cloud with optimized, production-ready setups.',
    icon: Cloud,
  },
  {
    title: 'Database Design & Management',
    description:
      'Designing and managing efficient databases to ensure performance, reliability, and data integrity.',
    icon: Database,
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useGSAP(() => {
    q('.service-card').forEach((card, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.08,
          ease: 'power3.out',
        }
      ).fromTo(
        card.querySelectorAll('.service-animate'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
        },
        '-=0.3'
      );
    });
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-4 py-20"
    >
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-blue-500 dark:text-cyan-400">
          Services
        </h2>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          What I can help you build
        </p>
      </div>

      {/* Background Glow */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-24 h-72 bg-gradient-to-r from-pink-500/20 via-cyan-500/20 to-blue-500/20 blur-3xl" /> */}

      {/* Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="service-card rounded-2xl  p-6 shadow-lg border dark:hover:shadow-white/10 transition hover:-translate-y-1 hover:shadow-xl "
          >
            <div className="service-animate mb-4 inline-flex items-center justify-center rounded-xl bg-cyan-500/10 p-3 text-blue-500 dark:text-cyan-400">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="service-animate text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>

            <p className="service-animate mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
