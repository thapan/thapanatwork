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
          <p className="text-gray-500 text-sm">
            © 2025 · Built with passion for quality engineering
          </p>
        </div>
      </footer>
    </div>
  );
}
