import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Briefcase, Clock, Mail, FileText, PhoneCall, Wifi, Bot, Crown, MonitorSmartphone, BadgeCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ParticleBackground from './ParticleBackground';
import headshot from '../../assets/mypic.jpeg';

export default function HeroSection({ onScrollToSection }) {
  const resumeLink = 'mailto:shubhamthapan@gmail.com?subject=Resume%20request%20%2F%20Role%20discovery';
  const bookLink = 'mailto:shubhamthapan@gmail.com?subject=Schedule%20a%2015%20min%20intro';
  const typingPhrases = [
    "Automation Architect",
    "Product QA Lead",
    "Wireless Systems Engineer"
  ];
  const achievements = [
    "Automation modernization + velocity gains",
    "Trusted feedback and zero critical escapes across FTV launches"
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = typingPhrases[phraseIndex];
    if (charIndex < current.length) {
      const timer = setTimeout(() => setCharIndex((c) => c + 1), 45);
      return () => clearTimeout(timer);
    }
    const pause = setTimeout(() => {
      setCharIndex(0);
      setPhraseIndex((i) => (i + 1) % typingPhrases.length);
    }, 1200);
    return () => clearTimeout(pause);
  }, [charIndex, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
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

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-purple-500/60 shadow-[0_0_30px_rgba(139,92,246,0.25)]"
            >
              <img src={headshot} alt="Shubham Thapan" className="w-full h-full object-cover" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight text-center md:text-left"
            >
              Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">Shubham</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-2xl md:text-4xl text-gray-200 mb-6 font-light text-center md:text-left"
            aria-label="Typing introduction"
          >
            I&apos;m a{" "}
            <span className="font-semibold text-blue-300 min-w-[260px] inline-block text-left">
              {typingPhrases[phraseIndex].slice(0, charIndex)}
              <span className="border-r-2 border-pink-400 animate-pulse ml-0.5" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 max-w-3xl mx-auto"
          >
            {[
              { icon: Clock, label: "10+ yrs QA/Automation", color: "text-emerald-300", border: "border-emerald-400/40" },
              { icon: MonitorSmartphone, label: "Connected Consumer Devices", color: "text-purple-300", border: "border-purple-400/40" },
              { icon: Crown, label: "Leadership", color: "text-amber-300", border: "border-amber-400/40" },
              { icon: Wifi, label: "Wireless", color: "text-cyan-300", border: "border-cyan-400/40" },
              { icon: Bot, label: "Automation", color: "text-emerald-300", border: "border-emerald-400/40" },
            ].map((item) => (
              <span
                key={item.label}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900/60 border ${item.border} text-xs sm:text-sm text-gray-100`}
              >
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="whitespace-nowrap">{item.label}</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 max-w-3xl mx-auto"
          >
            {achievements.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900/70 border border-purple-400/30 text-xs sm:text-[13px] text-white/90"
              >
                <BadgeCheck className="w-3 h-3 text-emerald-300" />
                <span className="text-left">{item}</span>
              </span>
            ))}
          </motion.div>

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
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <BadgeCheck className="w-4 h-4 text-emerald-300" />
            <span className="font-semibold text-white">Worked with:</span>
            <span className="px-2 py-1 rounded-full bg-gray-900/70 border border-gray-700 text-gray-200">Amazon</span>
            <span className="px-2 py-1 rounded-full bg-gray-900/70 border border-gray-700 text-gray-200">Qualcomm</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex justify-center"
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
