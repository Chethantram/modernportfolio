"use client";
import { Github, Locate, LocationEditIcon, Mail, Map } from "lucide-react";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef();
  const q = gsap.utils.selector(sectionRef);

  useGSAP(() => {
    // Animate left info panel
    const infoEls = q(".contact-info-left");
    infoEls.forEach((el) => {
      gsap.set(el, { x: -120, opacity: 0 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(el, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(el, { x: -120, opacity: 0, duration: 0.3 });
        },
        onLeave: () => {
          gsap.to(el, { x: -120, opacity: 0, duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(el, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });
    });
    // Animate right form panel
    const formEls = q(".contact-form-right");
    formEls.forEach((el) => {
      gsap.set(el, { x: 120, opacity: 0 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(el, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(el, { x: 120, opacity: 0, duration: 0.3 });
        },
        onLeave: () => {
          gsap.to(el, { x: 120, opacity: 0, duration: 0.3 });
        },
        onEnterBack: () => {
          gsap.to(el, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        },
      });
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB_FORM_ACCESS_API_KEY
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      // setResult("Form Submitted Successfully");
      toast.success("Send Message Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message || "Failed to send Message");
    }
  };
  return (
    <div id="contact" ref={sectionRef} className="py-20 md:py-40">
      <h1 className="text-center text-2xl md:text-3xl font-bold dark:bg-gradient-to-tl from-blue-500 via-cyan-500  to-pink-500 bg-clip-text dark:text-transparent">
        Contact
      </h1>
      <div className=" md:flex justify-between items-center gap-2 ">
        <div className="absolute top-0  z-0 w-full h-[450px] md:h-[400px]  bg-gradient-to-r from-pink-500/60 to-blue-500 rounded-full blur-3xl opacity-15 "></div>
        <div className="contact-info-left mx-3 md:mx-0 md:max-w-[40%] mt-5 md:mt-0">
          <h1 className="text-xl md:text-2xl font-bold text-white/80">
            Drop me a message
          </h1>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-4">
            Whether you're looking to collaborate on a project, hire a
            developer, or just want to say hi — I'm always open to new
            opportunities and meaningful conversations. Drop me a message below
            and I’ll get back to you as soon as possible!
          </p>
          <div>
            <span className="flex items-center text-sm font-medium mt-4 text-gray-600 dark:text-gray-300">
              <Mail className="w-7 h-7 mr-3 p-1 text-white dark:text-white bg-gray-800/80 dark:bg-gray-700/50 rounded-full" />
              chethant426@gmail.com
            </span>
            <span className="flex items-center text-sm font-medium mt-3 text-gray-600 dark:text-gray-300">
              <Locate className="w-7 h-7 mr-3 p-1 text-white dark:text-white bg-gray-800/80 dark:bg-gray-700/50 rounded-full" />
              Tiptur,Tumkur District,Karnataka
            </span>
          </div>
        </div>
        <div className="contact-form-right mt-6 z-10">
          <Card
            className={"bg-gray-200 dark:bg-gray-800/20 mx-3 md:mx-0 md:w-[350px] lg:w-[400px] dark:text-white border-gray-500/50 dark:border-white/50"}
          >
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-3">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    type="text"
                    required
                    name="name"
                    placeholder="Enter name"
                    className="px-4 py-2 bg-gray-700/20 text-gray-600 dark:text-white text-sm font-medium rounded-4xl outline-gray-600/40"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    name="email"
                    required
                    type="email"
                    placeholder="Enter email"
                    className="px-4 py-2 bg-gray-700/20 text-gray-600 dark:text-white text-sm font-medium rounded-4xl outline-gray-600/40"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    type="text"
                    required
                    name="message"
                    rows={2}
                    placeholder="Enter message"
                    className="px-4 py-2 bg-gray-700/20 text-gray-600 dark:text-white text-sm font-medium rounded-md outline-gray-600/40"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    className={
                      "px-10 rounded-4xl py-3 text-sm border-2 border-cyan-100/50   font-semibold text-white  bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition duration-300 w-full"
                    }
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
