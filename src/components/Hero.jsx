import React from 'react';
import { ArrowRight, Download, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

export default function Hero() {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/20 via-transparent to-transparent"
    >
      {/* Abstract background shapes */}
      <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-[-10%] w-[300px] h-[300px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col justify-center text-center md:text-left"
        >
          {/* Status Badge */}
          <div className="mx-auto md:mx-0 inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Hi, I'm <span className="text-blue-600">{personalInfo.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight mt-2.5">
            {personalInfo.role}
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-xl my-6 mx-auto md:mx-0">
            {personalInfo.tagline} {personalInfo.bio}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-2">
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm shadow-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-300"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Let's Connect
              <Send size={16} />
            </a>
          </div>

          {/* Social Stats Preview */}
          <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8 mt-10 max-w-md mx-auto md:mx-0">
            {personalInfo.stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Right Column: Profile Avatar Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
          className="md:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] md:h-[420px] lg:h-[480px]">
            
            {/* Visual background framing ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-sky-400 rounded-3xl transform rotate-3 scale-95 opacity-20 blur-md"></div>
            
            {/* Soft decorative shadow frame */}
            <div className="absolute inset-0 bg-gray-200 rounded-3xl transform -rotate-2 scale-[0.99] transition-transform duration-500 hover:rotate-0"></div>

            {/* Profile Avatar Container */}
            <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-md border-4 border-white transition-transform duration-300 hover:scale-[1.01]">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.fullName}
                className="w-full h-full object-cover object-top grayscale-[5%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60";
                }}
              />
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
