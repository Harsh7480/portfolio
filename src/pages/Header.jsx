import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About me' },
    { href: '/projects', label: 'Work' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (e, href, isMobile = false) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#' + href.substring(1);
      }
      if (isMobile) toggleMenu();
    } else if (isMobile) {
      toggleMenu();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 bg-white/80 dark:bg-gray-900/80 ${
        isScrolled ? 'shadow-md' : ''
      } backdrop-blur-lg z-50 animate-slide-down`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-1 flex flex-wrap md:flex-nowrap items-center justify-between">
        {/* Logo */}
        <img
  src="/logo1.png"
  alt="Logo"
  className="w-36 h-15  object-contain transition-transform duration-300 hover:scale-105"
/>

        {/* Right-aligned Navigation and Section */}
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4 mt-3 md:mt-0">
          {/* Navigation (Desktop & Tablet) */}
          <nav className="hidden md:flex flex-wrap md:flex-nowrap items-center space-x-4 lg:space-x-10 text-gray-700 dark:text-gray-200 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-600 dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Theme Toggle */}
            <button
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-200 hover:scale-110"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Download CV */}
            <a
              href="/My_Resume.pdf"
              download
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-transform duration-200 hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform duration-200 hover:scale-110"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-6 space-y-4 text-gray-700 dark:text-gray-200 font-medium animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 hover:text-gray-700 dark:hover:text-white transition-transform duration-200 hover:translate-x-2"
              onClick={(e) => handleNavClick(e, link.href, true)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/My_Resume.pdf"
            download
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-transform duration-200 hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
      )}

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        .dark {
          background-color: #1f2937;
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
