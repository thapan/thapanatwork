import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Briefcase, Clock, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ParticleBackground from './ParticleBackground';

export default function HeroSection({ onScrollToSection }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-purple-300 text-sm font-medium tracking-wide">Available for opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="block">Quality Engineer</span>
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              & System Architect
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 mb-4 font-light max-w-3xl mx-auto"
          >
            10 Years of Building, Breaking & Improving Systems
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            From WLAN chipset validation at Qualcomm to Fire TV connectivity at Amazon —
            crafting automation frameworks, ML-driven testing, and bulletproof systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              onClick={() => onScrollToSection('projects')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              onClick={() => onScrollToSection('timeline')}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800/50 px-8 py-6 text-lg rounded-xl"
            >
              <Clock className="mr-2 h-5 w-5" />
              Timeline
            </Button>
            <Button
              onClick={() => onScrollToSection('contact')}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800/50 px-8 py-6 text-lg rounded-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => onScrollToSection('timeline')}
          >
            <ChevronDown className="w-8 h-8 text-purple-400/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}