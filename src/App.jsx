import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50/30 text-gray-600 antialiased selection:bg-blue-100 selection:text-blue-600">
      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Sleek Minimal Footer */}
      <Footer />
    </div>
  );
}
