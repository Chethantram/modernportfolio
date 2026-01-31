"use client";

import React, { useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const q = gsap.utils.selector(sectionRef);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    tl.fromTo(
      q(".contact-left"),
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    ).fromTo(
      q(".contact-right"),
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6",
    );
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB_FORM_ACCESS_API_KEY,
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message sent successfully");
      e.target.reset();
    } else {
      toast.error("Failed to send message");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative mx-auto max-w-6xl px-4 py-20"
    >
      {/* Header */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold text-blue-500 dark:text-cyan-400">
          Contact
        </h2>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Let’s build something meaningful together
        </p>
      </div>

      {/* Content */}
      <div className="relative grid gap-10 md:grid-cols-2">
        {/* Left Info */}
        <div className="contact-left space-y-6">
          <h3 className="text-xl font-semibold text-slate-500 dark:text-white">
            Drop me a message
          </h3>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Whether you’re looking to collaborate, hire a developer, or just say
            hi I’m always open to meaningful conversations.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-cyan-500" />
              <span className="text-gray-700 dark:text-gray-300">
                chethant426@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyan-500" />
              <span className="text-gray-700 dark:text-gray-300">
                Tiptur, Karnataka, India
              </span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-5">
            {/* GitHub */}
            <Link
              href="https://github.com/Chethantram"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-cyan-500 dark:hover:text-cyan-500 dark:text-gray-300"
            >
              <Github className="h-5 w-5" />
              GitHub
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/chethant"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-gray-600 transition dark:hover:text-cyan-500 hover:text-cyan-500 dark:text-gray-300"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Right Form */}
        <Card className="contact-right rounded-2xl bg-transparent border shadow-lg hover:shadow-2xl hover:scale-105 backdrop-blur transition-all duration-300">
          <CardContent className="p-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <Input
                name="name"
                required
                placeholder="Your name"
                className="rounded-xl"
              />

              <Input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="rounded-xl"
              />

              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your message"
                className="w-full rounded-xl border border-input bg-transparent px-4 py-3 text-sm focus:outline-none"
              />

              <Button
                type="submit"
                className="w-full gap-2 rounded-full border  shadow-2xl shadow-gray-800/20 dark:shadow-cyan-500/20  font-semibold text-white cursor-pointer hover:bg-blue-600 bg-blue-500 dark:bg-cyan-400 transition duration-300"
              >
                Send Message
                <Send size={16} />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
