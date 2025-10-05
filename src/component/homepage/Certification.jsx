import React, { useState, useEffect } from "react";

const Certifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certifications = [
    {
      title: "Fullstack Developer",
      issuer: "Promosys Technologies Pvt. Ltd.",
      logo: "/images/promosys.png",
      date: "January 2022 - July 2022",
      points: [
        "Completed Full Stack Web Development in PHP training from Promosys Academy.",
        "Gained hands-on experience through practical projects and real-world applications.",
      ],
    },
    {
      title: "Power BI Certification",
      issuer: "ICT Academy",
      logo: "/images/ict.jpg",
      date: "June 2024 - July 2024",
      points: [
        "Completed Soft Skills and Data Analytics in Power BI training program organized by ICT Academy.",
        "Enhanced analytical abilities and strengthened professional communication skills.",
      ],
    },
    {
      title: "MERN Stack Developer Certification",
      issuer: "IKIGAI School of AI",
      logo: "/images/ikigai.jpeg",
      date: "July 2023 - August 2023",
      points: [
        "Completed an 80-hour MERN Stack training program.",
        "Gain hands-on experience in frontend and backend development.",
      ],
    },
    {
      title: "C Programming",
      issuer: "freeCodeCamp",
      logo: "/images/udemy.png",
      date: "Jan 2020 - Mar 2020",
      points: [
        "Completed JavaScript Algorithms and Data Structures Certification.",
        "Built interactive web projects.",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="text-sm font-medium text-gray-500 tracking-wider bg-gray-100 dark:text-gray-200 dark:bg-gray-600 py-1 px-3 rounded-full">
            Certifications
          </span>
        </div>
        <h2 className="text-lg text-gray-600 mb-12 dark:text-gray-300">
          A quick summary of my most recent certification Cources
        </h2>

        {/* Mobile Slider */}
        <div className="md:hidden mt-12 max-w-6xl mx-auto relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {certifications.map((cert, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-16 h-16 object-contain mb-4 border-2 border-gray-300 bg-white"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic">
                    {cert.points.map((point, i) => (
                      <span key={i} className="block">• {point}</span>
                    ))}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop / Responsive Grid */}
        <div className="hidden md:grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-16 h-16 object-contain mb-4 border-2 border-gray-300 bg-white"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">{cert.issuer}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 italic">
                {cert.points.map((point, i) => (
                  <span key={i} className="block">• {point}</span>
                ))}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
