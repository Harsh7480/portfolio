import React, { useState, useEffect } from 'react';
import Header from '../../pages/Header';
import Footer from '../../pages/Footer';

function ProjectHero() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Gemini Clone',
      description: 'A responsive Gemini clone offering intelligent chat, instant responses, and interactive user experience.',
      image: '/images/Gemni.png',
      tags: ['Mongo DB', 'Java Script', 'Express.js', 'React.js', 'API Integration'],
      link: '#',
      featured: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'SEO India Tech',
      description: 'A digital marketing platform offering SEO tools, analytics, and strategies to boost online presence.',
      image: '/images/Seoindiatech.png',
      tags: ['MongoDB', 'Express', 'React.js', 'Next.js', 'Node.js'],
      link: 'https://www.seoindiatech.com/',
      featured: true,
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A real-time weather forecasting app with interactive maps and detailed climate data.',
      image: '/images/Weather-app.png',
      tags: ['HTML', 'CSS', 'Java Script', 'React'],
      link: '#',
      featured: false,
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
      title: 'Hospital OPD Website',
      description: 'A responsive hospital OPD website simplifying appointment booking, patient management, and doctor scheduling efficiently.',
      image: '/images/hospital.png',
      tags: ['MongoDB', 'Express', 'React.js', 'Node.js'],
      link: '#',
      featured: false,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 5,
      title: 'Power BI Dashboard',
      description: 'Designed an interactive Power BI dashboard with KPIs, charts, slicers, and filters for real-time insights.',
      image: '/images/dashboard.png',
      tags: ["Power BI", "Excel (For Data Preprocessing)", "DAX", "Power Query"],
      link: '#',
      featured: false,
      gradient: 'from-indigo-500 to-violet-600'
    },
    {
      id: 6,
      title: 'Digital Marketting Website',
      description: 'Developed a responsive digital marketing website offering SEO tools, analytics, and strategies to boost online presence.',
      image: '/images/dgm.png',
      tags: ["HTML5", "CSS3", "Javascript", "MySQL", "PHP", "Git"],
      link: '#',
      featured: false,
      gradient: 'from-red-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="pt-18 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-sm font-medium text-gray-500 tracking-wider bg-gray-100 py-1 px-3 rounded-full dark:text-gray-200 dark:bg-gray-600">
            My Projects
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-white/20 dark:bg-white/10 px-3 py-1 rounded-full text-white text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  View Project{' '}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectHero;
