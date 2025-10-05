import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Digital Merketing Website",
    description:
      "Developed a digital Marketting website to showcase my full-stack web development skills, featuring responsive design, SEO Optimization and analytics tracking.",
    image: "/images/dgm.png", // replace with your image
    tech: ["HTML5", "CSS3", "Javascript", "MySQL", "PHP", "Git"],
    link: "#",
    reverse: false,
  },
  {
    title: "Hospital OPD Website",
    description:
      " Designed and developed a comprehensive OPD (Outpatient Department) website, focusing on appointment scheduling, patient management, and seamless user experience.",
    image: "/images/hospital.png", // replace with your image
    tech: [
      "React",
      "Javascript",
      "Mongo DB",
      "Tailwindcss",
      "Node.js",
      "Express.js",
      "Git",
    ],
    link: "#",
    reverse: true,
  },
  {
    title: "Power BI Dashboard",
    description:
      "Designed and developed an interactive Power BI dashboard to visualize and analyze data trends effectively. The dashboard includes slicers, filters,KPIs, charts, and custom visuals for real time insights.",
    image: "/images/dashboard.png", // replace with your image
    tech: ["Power BI", "Excel (For Data Preprocessing)", "DAX", "Power Query"],
    link: "#",
    reverse: false,
  },
  {
    title: "Gemini Clone",
    description:
      "  Built a Gemini clone using the MERN stack as part of my industrial training project, focusing on advanced AI-driven features and seamless user experience.",
    image: "/images/Gemni.png", // replace with your image
    tech: [
      "Mongo DB",
      "JavaScript",
      "Express.js",
      "React.js",
      "Next.js",
      "API Integration",
      "Git",
    ],
    link: "#",
    reverse: true,
  },
];

const Work = () => {
  return (
    <div className="pb-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-600 px-4 py-1 rounded-full text-sm font-medium">
          Work
        </span>
        <h2 className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Some of the noteworthy projects I have built:
        </h2>
      </div>

      <div className="mt-12 space-y-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${
              project.reverse ? "md:grid-flow-col-dense" : ""
            }`}
          >
            {/* Always show image first on mobile */}
            <img
              src={project.image}
              alt={project.title}
              className={`rounded-lg shadow-lg block md:hidden`}
            />

            {/* Original Image (non-reverse) for desktop */}
            {!project.reverse && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg hidden md:block"
              />
            )}

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Visit Project
              </a> */}
            </div>

            {/* Original Image (reverse) for desktop */}
            {project.reverse && (
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg hidden md:block"
              />
            )}
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="mt-12 text-center">
        <a
          href="/projects" // replace with your page link
          className="px-6 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 text-white rounded-full shadow hover:bg-gray-900 transition inline-block transition-transform duration-300 hover:scale-105"
        >
          Explore More Projects
        </a>
      </div>
    </div>
  );
};

export default Work;
