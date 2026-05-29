import React, { useState } from 'react';
import { Briefcase, Download, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

export default function Resume() {
  const [downloadState, setDownloadState] = useState('idle'); // idle | downloading | finished

  const triggerDownload = (e) => {
    e.preventDefault();
    if (downloadState !== 'idle') return;

    setDownloadState('downloading');

    // Simulate file generation and download completion after 1.5 seconds
    setTimeout(() => {
      setDownloadState('finished');

      // Create a mock download link
      const link = document.createElement('a');
      link.href = personalInfo.cvUrl || '#';
      link.setAttribute('download', 'Aravind_Resume.pdf');
      document.body.appendChild(link);
      link.click(); // Trigger the actual download of resume.pdf
      document.body.removeChild(link);

      // Reset back to idle after 3 seconds
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="resume" className="py-20 lg:py-24 border-t border-gray-100 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Resume
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Curriculum Vitae
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-md mt-2 leading-relaxed">
            Interested in my academic background, technical training, and complete coding skills index?
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-4"></div>
        </div>

        {/* Center Block: CV Download Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-gray-50/50 border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col items-center text-center"
        >
          <div className="p-4 bg-blue-50 text-blue-600 rounded-full mb-6">
            <Briefcase size={32} />
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Download My Complete Resume
          </h3>
          
          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-md">
            Get a comprehensive overview of my education, projects, technology index, and verified certification coordinates.
          </p>

          {/* Interactive Download Button */}
          <button
            onClick={triggerDownload}
            className={`w-full max-w-sm flex items-center justify-center gap-2 font-semibold px-6 py-4 rounded-xl transition-all duration-300 select-none shadow-sm ${
              downloadState === 'idle' 
                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200 hover:-translate-y-0.5' 
                : downloadState === 'downloading'
                ? 'bg-blue-500 text-white cursor-wait'
                : 'bg-emerald-600 text-white shadow-emerald-200'
            }`}
          >
            {downloadState === 'idle' && (
              <>
                Download Resume PDF
                <Download size={18} className="animate-bounce" />
              </>
            )}
            {downloadState === 'downloading' && (
              <>
                Generating PDF...
                <Loader2 size={18} className="animate-spin" />
              </>
            )}
            {downloadState === 'finished' && (
              <>
                CV Downloaded!
                <CheckCircle2 size={18} />
              </>
            )}
          </button>

          <span className="text-[10px] text-gray-400 font-mono mt-3">
            Format: PDF | Size: ~64 KB
          </span>

        </motion.div>

      </div>
    </section>
  );
}
