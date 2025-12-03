import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { createPageUrl } from './utils';
import { Menu, X, Briefcase, Clock, Code2, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navItems = [
  { label: 'Projects', href: '#projects', icon: Briefcase },
  { label: 'Timeline', href: '#timeline', icon: Clock },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Contact', href: '#contact', icon: Mail },
];

const RESUME_URL = `${import.meta.env.BASE_URL}shubham_thapan_resume.pdf`;

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <span className="text-white font-semibold hidden sm:block">Portfolio</span>
            </Link>

            {/* Desktop Nav + Actions */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                >
                  {item.label}
                </button>
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
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                  >
                    <item.icon className="w-5 h-5 text-purple-400" />
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

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
    </div>
  );
}
