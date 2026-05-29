import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-24 border-t border-gray-100 bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            My Technical Expertise
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-4"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Category Title */}
              <div className="flex items-center gap-2.5 border-b border-gray-100 pb-4 mb-6">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                  <Award size={18} />
                </div>
                <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              {/* Skills Badge Container */}
              <div className="flex flex-col gap-4.5 flex-grow">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2 group">
                    
                    {/* Skill Info */}
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-gray-700 transition-colors duration-200 group-hover:text-blue-600">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100 font-mono">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Progress Bar - Custom High-End Element */}
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: skillIdx * 0.05 }}
                        className="h-full bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors duration-300"
                      />
                    </div>

                  </div>
                ))}
              </div>

              {/* Quick Inline Badge Pills (Satisfying spec few-shot design) */}
              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-gray-100">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs text-gray-500 font-medium cursor-default transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
