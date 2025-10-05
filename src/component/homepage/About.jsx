import React from "react";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      {/* About Me Badge - Centered */}
      <div className="flex flex-col items-center justify-center mb-6">
        <span className="text-sm font-medium text-gray-500 tracking-wider bg-gray-100 dark:text-gray-200 dark:bg-gray-600 py-1 px-3 rounded-full">
          About me
        </span>
      </div>
      <h2 className="text-lg text-gray-600 mb-12 dark:text-gray-300 text-center">
        Curious about me? Here you have it:
      </h2>

      {/* Flex Layout for Image + Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:max-w-[90%] lg:max-w-full mx-auto">
        {/* Left Side - Image */}
        <div className="relative w-full sm:w-3/4 md:w-[45%] flex justify-center md:justify-start">
          {/* Shadow Layer */}
          <div className="absolute -bottom-6 -left-6 w-64 sm:w-72 md:w-80 h-64 sm:h-96 md:h-[420px] bg-gray-200 dark:bg-gray-700 hidden lg:block rounded-xl"></div>

          {/* Desktop / Laptop Image */}
          <img
            src="/images/my_image.jpg"
            alt="About me"
            className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-96 md:h-[420px] object-cover shadow-lg hidden sm:block rounded-xl"
          />

          {/* Mobile / Tablet Image */}
          <img
            src="/images/my_image.jpg"
            alt="About me mobile"
            className="relative w-24 h-24 sm:w-32 sm:h-32 object-cover shadow-lg sm:hidden rounded-full border-black border-1 dark:border-white"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-[55%] w-full text-center md:text-left">
          <div className="text-gray-600 dark:text-gray-300 space-y-2 leading-relaxed">
            <p>
              I’m a passionate{" "}
              <a href="#" className="text-blue-600 hover:underline">
                self-proclaimed designer
              </a>{" "}
              who specializes in full stack development (React.js & Node.js). I
              am very enthusiastic about bringing the technical and visual
              aspects of digital products to life. User experience, pixel
              perfect design, and writing clear, readable, highly performant
              code matters to me.
            </p>

            <p>
              I began my journey as a web developer in 2021, and since then, I’ve
              continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way. Now,
              in my thirties, 4 years after starting my web development journey,
              I’m building cutting-edge web applications using modern
              technologies such as Next.js, TypeScript, JavaScript, ReactJS, TailwindCSS
              and much more.
            </p>

            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>

            <p>
              When I’m not in full-on developer mode, you can find me hovering
              around on LinkedIn, witnessing the journey of
              early startups or enjoying some free time. You can follow me on{" "}
              <a href="https://www.linkedin.com/in/harsh-jaiswal-294940202/" className="text-blue-600 hover:underline">
                LinkedIn
              </a>{" "}
              where I share tech-related bites and build in public, or you can
              follow me on{" "}
              <a href="https://github.com/Harsh7480" className="text-blue-600 hover:underline">
                GitHub
              </a>
              .
            </p>

            <p className="mt-4 font-medium">Finally, some quick bits about me:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-200">
              <li>B.Tech in Computer Science</li>
              <li>Programmer</li>
            </ul>

            <p className="mt-4">
              One last thing, I’m available for freelance work, so feel free to
              reach out and say hello! I promise I don’t bite{" "}
              <span role="img" aria-label="smile">
                😊
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
