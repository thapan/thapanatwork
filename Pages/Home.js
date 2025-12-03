import React, { useRef } from 'react';
import HeroSection from '@/components/portfolio/HeroSection';
import TimelineSection from '@/components/portfolio/TimelineSection';
import StatsSection from '@/components/portfolio/StatsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ContactSection from '@/components/portfolio/ContactSection';

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] overflow-x-hidden">
      <HeroSection onScrollToSection={scrollToSection} />
      <TimelineSection />
      <StatsSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center space-y-3">
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="mailto:shubhamthapan@gmail.com"
              className="px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-gray-200 hover:border-purple-500/50 hover:text-white transition"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-thapan"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-gray-200 hover:border-purple-500/50 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="/#/resume"
              className="px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-700 text-gray-200 hover:border-purple-500/50 hover:text-white transition"
            >
              Resume
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 · Built with passion for quality engineering
          </p>
        </div>
      </footer>
    </div>
  );
}
