import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { createPageUrl } from './utils';
import { Briefcase, Clock, Code2, Mail, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navItems = [
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Timeline', href: '#timeline', icon: Clock },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const RESUME_URL = `${import.meta.env.BASE_URL}shubham_resume.pdf`;

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const scrollToSection = () => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    requestAnimationFrame(() => setTimeout(scrollToSection, 50));
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <style>{`
        :root {
          --background: 222.2 84% 4.9%;
          --foreground: 210 40% 98%;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(139, 92, 246, 0.3) transparent;
        }

        *::-webkit-scrollbar {
          width: 6px;
        }

        *::-webkit-scrollbar-track {
          background: transparent;
        }

        *::-webkit-scrollbar-thumb {
          background-color: rgba(139, 92, 246, 0.3);
          border-radius: 3px;
        }

        ::selection {
          background: rgba(139, 92, 246, 0.4);
          color: white;
        }
      `}</style>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50'
            : 'bg-transparent'
        }`}
      >
        {/* Scroll progress bar */}
        <div className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400" style={{ width: `${scrollProgress}%` }} />
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <span className="text-white font-semibold hidden sm:block">Portfolio</span>
            </Link>

            {/* Nav */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                >
                  <item.icon className="w-5 h-5 text-purple-400" />
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* Floating contact button */}
      <Button
        onClick={() => handleNavClick('#contact')}
        className="fixed bottom-6 right-6 z-40 bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/30 px-4 py-3 rounded-full hidden sm:inline-flex items-center gap-2"
      >
        <Mail className="w-4 h-4" />
        Contact
      </Button>

      {/* Back to top */}
      {showBackToTop && (
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-40 bg-gray-800/80 hover:bg-gray-800 text-gray-100 border border-gray-700/50 px-3 py-2 rounded-full hidden sm:inline-flex items-center gap-2"
        >
          ↑ Top
        </Button>
      )}
    </div>
  );
}
