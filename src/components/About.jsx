import React from 'react';
import { Layout, Code, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const competencies = [
  {
    icon: <Layout className="text-blue-600" size={24} />,
    title: "UI/UX Excellence",
    description: "Obsessed with pixel-perfect layouts, harmonized typography, and elegant, smooth micro-interactions that engage users."
  },
  {
    icon: <Code className="text-blue-600" size={24} />,
    title: "Modern Architectures",
    description: "Developing scalable interfaces using component-driven paradigms, proper state structures, and optimized React hooks."
  },
  {
    icon: <Zap className="text-blue-600" size={24} />,
    title: "Performance & SEO",
    description: "Ensuring lighting-fast bundle compiles, modular lazy imports, high Lighthouse scores, and semantic, readable HTML."
  },
  {
    icon: <Heart className="text-blue-600" size={24} />,
    title: "Inclusivity & A11y",
    description: "Ensuring applications conform to WCAG rules, proper aria attributes, keyboard navigation, and structural layouts."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            My Philosophy & Journey
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-4"></div>
        </div>

        {/* Section Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-6 space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 leading-tight">
              Bridging the gap between beautiful aesthetics and robust engineering.
            </h3>
            
            <p>
              Hello! I'm {personalInfo.fullName}, a developer who believes a digital experience should be as fluid and visually captivating as it is technically sound. I specialize in designing and engineering high-quality React web applications using Tailwind CSS and other cutting-edge tools.
            </p>
            
            <p>
              My goal is always to build interfaces that feel light, natural, and incredibly responsive. I accomplish this by writing clean, standardized code and ensuring that every pixel, border-radius, and animation curve is carefully tuned.
            </p>

            {/* Blockquote Quote */}
            <div className="border-l-4 border-blue-500 pl-4 py-2 italic bg-blue-50/50 rounded-r-2xl text-gray-800 font-medium">
              "A truly great product is not just what it looks like, but how seamlessly it responds to user interactions and meets their goals."
            </div>

            <p>
              Whether structuring responsive layout grids, designing high-fidelity wireframes, or configuring web build engines, I focus heavily on product performance, cross-browser compatibility, and accessibility.
            </p>
          </motion.div>

          {/* Right Column: Competencies Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {competencies.map((comp, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 group"
              >
                <div className="p-3 bg-blue-50 w-fit rounded-xl transition-colors duration-300 group-hover:bg-blue-100">
                  {comp.icon}
                </div>
                <h4 className="text-base font-bold text-gray-900">
                  {comp.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
