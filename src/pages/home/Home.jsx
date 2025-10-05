import React, { useEffect } from 'react'
import Hero from '../../component/homepage/Hero'
import About from '../../component/homepage/About'
import Skills from '../../component/homepage/Skills'
import Certifications from '../../component/homepage/Certification'
import Work from '../../component/homepage/Projects'
import Testimonials from '../../component/homepage/Testimonials'
import Footer from '../Footer'
import Header from '../Header'
import { Link } from 'react-router'

function Home() {
  useEffect(() => {
    // Auto-scroll to hash on page load (e.g., from nav on other pages)
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className='dark:bg-gray-900'>
      {/* <Navbar/> */}
      <Header />
      <Hero />
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
    <section className="px-4">
  <div className="max-w-6xl mx-auto">
    <div className="bg-gradient-to-r from-gray-400/40 to-gray-600/60 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-800/80 rounded-2xl shadow-lg border border-gray-800 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">

      {/* Text */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left text-gray-600 dark:text-gray-100 mb-4 md:mb-0">
        Let’s Create Something Amazing <br className="hidden md:block" /> Together!
      </h2>

      {/* Button */}
      <Link
        to="/contact"
        className="bg-gradient-to-r from-blue-600 to-indigo-600  dark:from-gray-800 dark:to-gray-700 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-full flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
      >
        <span>Contact Me</span>
      </Link>
    </div>
  </div>
</section>


      <Skills />
      <Certifications />
      <Work />
      
      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>
      <Footer />
    </div>
  )
}

export default Home