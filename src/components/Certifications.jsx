import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-24 border-t border-gray-100 bg-gray-50/30">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Certifications & Badges
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-4"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    Verified
                  </span>
                </div>

                {/* Info block */}
                <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 font-semibold mt-1">
                  {cert.issuer}
                </p>

                {/* Issue date / ID metadata */}
                <div className="flex flex-col gap-1 mt-4 pt-4 border-t border-gray-50 text-xs text-gray-400 font-medium">
                  <div>Issued: <span className="font-semibold text-gray-500">{cert.date}</span></div>
                  <div>ID: <span className="font-mono text-gray-500">{cert.credentialId}</span></div>
                </div>
              </div>

              {/* Action Verify CTA */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors w-fit group/link"
              >
                Verify Credential
                <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
