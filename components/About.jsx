import React from "react";

const About = () => {
  return (
    <div id="about" className=" py-20 md:py-32 max-w-3xl mx-1 md:mx-auto">
      <h1 className="text-center text-2xl md:text-3xl font-bold dark:bg-gradient-to-b from-pink-400 via-cyan-500 to-blue-500 bg-clip-text dark:text-transparent">
        About
      </h1>
      <div className="mt-5">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium  ">
          I am Chethan T, a passionate software developer currently pursuing a
          Bachelor of Technology in Computer Science with a strong academic
          record and hands-on experience in full-stack development. I specialize
          in building scalable and user-centric web applications using modern
          technologies such as React.js, Next.js, Node.js, and MongoDB. <br className="mb-6" /> 
          With a solid foundation in programming languages like Java, Python,
          and JavaScript, I focus on writing clean, maintainable code and
          delivering solutions that enhance user experience. My recent projects
          include AI-powered platforms, real-time budgeting apps, and
          educational tools that demonstrate my proficiency in machine learning,
          computer vision, and cloud technologies. <br className="mb-6"/>I thrive in
          collaborative environments, leveraging leadership and problem-solving
          skills to drive project success and continuous learning. I am eager to
          contribute to impactful projects and advance my expertise in software
          engineering.
        </p>
      </div>
    </div>
  );
};

export default About;
