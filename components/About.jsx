import React from "react";

const About = () => {
  return (
    <section className="w-full  py-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-blue-500 dark:text-cyan-400">About Me</h2>
          <p className="mt-2 text-sm text-gray-500">My Introduction</p>
        </div>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-3xl  ">
          I’m a software developer focused on building reliable, scalable, and user-centric applications. With a strong foundation in modern web technologies, I transform complex requirements into clean, efficient solutions. I value performance, accessibility, and maintainable code, and I enjoy collaborating with teams to deliver impactful digital products.
        </p>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="px-2  py-7 border shadow-md hover:shadow-xl hover:scale-105 rounded-3xl  text-center">
            <h3 className="text-2xl text-blue-500 dark:text-cyan-400 font-bold">380+</h3>
            <p className="text-sm text-gray-500">DSA Problem</p>
          </div>
          <div className="px-2  py-7 border shadow-md hover:shadow-xl hover:scale-105 rounded-3xl  text-center">
            <h3 className="text-2xl font-bold text-blue-500 dark:text-cyan-400">06+</h3>
            <p className="text-sm text-gray-500">Completed projects</p>
          </div>
          <div className="px-2  py-7 border shadow-md hover:shadow-xl hover:scale-105 rounded-3xl  text-center">
            <h3 className="text-2xl font-bold text-blue-500 dark:text-cyan-400">02</h3>
            <p className="text-sm text-gray-500">Internship</p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;
