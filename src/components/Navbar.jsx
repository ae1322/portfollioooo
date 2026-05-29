import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for shadow/border activation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to spy on scroll sections
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href));
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in active reading view
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          setActiveSection(id);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Handle smooth scroll clicks
  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleClick(e, '#home')}
          className="text-xl font-extrabold text-gray-900 tracking-tight flex items-center gap-1 group"
        >
          aravind ak<span className="text-blue-600 transition-transform duration-300 group-hover:scale-150">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`text-sm font-medium transition-colors relative py-2 ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Header Action Button */}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2.5 rounded-full transition-all duration-200 border border-blue-100 hover:scale-[1.03]"
          >
            Hire Me
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburguer Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none hover:bg-gray-50 rounded-xl transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg absolute w-full top-20 left-0"
          >
            <ul className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`block py-2 text-base font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-blue-600 font-bold border-l-2 border-blue-600 pl-3'
                        : 'text-gray-600 hover:text-gray-900 pl-3'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 pl-3">
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, '#contact')}
                  className="w-full justify-center flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 py-3 rounded-xl transition-all duration-200"
                >
                  Hire Me
                  <ArrowUpRight size={16} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
