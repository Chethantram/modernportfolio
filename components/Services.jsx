'use client'
import { Code2, LayoutDashboard, ServerCog } from 'lucide-react'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef();
  const q = gsap.utils.selector(sectionRef);

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
    <div id='services' ref={sectionRef} className='mt-32'>
        <h1 className="text-center text-2xl md:text-3xl font-bold dark:bg-gradient-to-tl from-blue-500 via-cyan-500  to-blue-500 bg-clip-text dark:text-transparent service-animate">
        Services
      </h1>
        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 lg:gap-2 xl:gap-10 mt-20 '>
          <div className="absolute top-0  z-0 w-full h-[450px] md:h-[400px] lg:h-[400px] xl:h-[200px]  bg-gradient-to-r from-pink-500/60 to-blue-500 rounded-full blur-3xl opacity-15 "></div>
            <div className='p-4 border-2 border-cyan-700 dark:border-cyan-200/40 rounded-2xl space-y-2 mx-5 md:mx-0 lg:mx-5 bg-gray-100 dark:bg-gray-700/20 service-card'>
                <span className='service-animate'><Code2 className='size-8'/></span>
                <h1 className='text-lg font-bold mt-2 text-cyan-700 dark:bg-gradient-to-r from-pink-500 via-cyan-300 to-blue-500 bg-clip-text dark:text-transparent service-animate'>Web Application Development</h1>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 service-animate'>End-to-end development of fully functional, scalable web apps — from frontend UI to backend logic and database integration.</p>
            </div>
            <div className='p-4 border-2 border-cyan-700 dark:border-cyan-200/40 rounded-2xl space-y-2 mx-5 md:mx-0 lg:mx-5 bg-gray-100 dark:bg-gray-700/20 service-card'>
                <span className='service-animate'><LayoutDashboard className='size-8'/></span>
                <h1 className='text-lg font-bold mt-2 text-cyan-700 dark:bg-gradient-to-r from-pink-500 via-cyan-300 to-blue-500 bg-clip-text dark:text-transparent service-animate'>Responsive Frontend & UI Design</h1>
                <p className='text-sm font-medium text-gray-600 dark:text-gray-400 service-animate'>Building sleek, modern, mobile-friendly interfaces using frameworks like React, Tailwind CSS, or Next.js.</p>
            </div>
            <div className='p-4 border-2 border-cyan-700 dark:border-cyan-200/40 rounded-2xl space-y-2 mx-5 md:mx-0 lg:mx-5 bg-gray-100 dark:bg-gray-700/20 service-card'>
                <span className='service-animate'><ServerCog className='size-8'/></span>
                <h1 className='text-lg font-bold mt-2 text-cyan-700 dark:bg-gradient-to-r from-pink-500 via-cyan-300 to-blue-500 bg-clip-text dark:text-transparent service-animate'>Backend & API Integration</h1>
                <p className='text-sm font-medium lg:line-clamp-6 xl:line-clamp-none text-gray-600 dark:text-gray-400 service-animate'>Creating robust servers, databases, and REST APIs using Node.js, Express, MongoDB, and cloud platforms.
Building scalable, secure backend systems.</p>
            </div>
            
        </div>

    </div>
  )
}

export default Services