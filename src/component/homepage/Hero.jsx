import React from "react";
import { MapPin, CheckCircle, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
   <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between max-w-5xl mx-auto px-6 pt-[30px] sm:pt-20 md:pt-40 pb-12">

  {/* Left Content */}
  <div className="md:w-3/5 text-center md:text-left">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
      Hi, I’m Harsh Jaiswal <span className="inline-block">👋</span>
    </h1>
    <p className="mt-4 text-gray-600 max-w-xl dark:text-gray-300">
      I’m a full stack developer (React.js & Node.js) with a focus on
      creating (and occasionally designing) exceptional digital experiences
      that are fast, accessible, visually appealing, and responsive. Even
      though I have been creating web applications for over 2 years, I still
      love it as if it was something new.
    </p>

    {/* Location & Availability */}
    <div className="mt-6 space-y-2">
      <div className="flex items-center justify-center md:justify-start text-gray-700 dark:text-gray-200">
        <MapPin className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-200" />
        Noida, India
      </div>
      <div className="flex items-center justify-center md:justify-start text-green-600">
        <CheckCircle className="w-5 h-5 mr-2" />
        Available for new projects
      </div>
    </div>

    {/* Social Links */}
    <div className="mt-6 flex items-center justify-center md:justify-start space-x-6 text-gray-600">
      <a
        href="https://github.com/Harsh7480"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/harsh-jaiswal-294940202/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 dark:text-gray-400"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:jaiswalharsh9625@gmail.com"
        className="hover:text-red-600 dark:text-gray-400"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  </div>

  {/* Right Image */}
  <div className="md:w-2/5 mt-8 md:mt-0 flex justify-center md:justify-end relative">
    <div className="relative inline-block mb-6 mt-6 md:mt-0 md:mb-0">
      <img
        src="/images/img4.jpg"
        alt="img"
        className="w-48 h-60 md:w-52 md:h-64 object-cover shadow-2xl rounded-2xl"
      />
      {/* Shadow Layer */}
      <div className="absolute top-3 left-3 w-full h-full bg-gray-200 dark:bg-gray-700 -z-10 rounded-xl"></div>
    </div>
  </div>
</section>


  );
};

export default Hero;
