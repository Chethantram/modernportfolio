import React from "react";

const About = () => {
  return (
    <div id="about" className=" py-20 md:py-32 max-w-3xl mx-1 md:mx-auto">
      <h1 className="text-center text-2xl md:text-3xl font-bold dark:bg-gradient-to-b from-pink-400 via-cyan-500 to-blue-500 bg-clip-text dark:text-transparent">
        About
      </h1>
      <div className="mt-5">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium  ">
          Hi, I'm Chethan — a Full Stack Developer who builds seamless,
          scalable, and stunning digital experiences. From crafting
          pixel-perfect UIs to engineering robust backends, I love turning ideas
          into reality through clean code and modern technology. Whether it's
          React, Node.js, or MongoDB, I blend creativity and logic to deliver
          high-performance web applications that users love and businesses
          trust.
        </p>
      </div>
    </div>
  );
};

export default About;
