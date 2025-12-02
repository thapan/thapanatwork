import React from 'react';
import { motion } from 'framer-motion';

const colorMap = {
  'WLAN': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  '802.11': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  'RVR': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'RF': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'Python': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Perl': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'ML': 'bg-green-500/20 text-green-300 border-green-500/30',
  'AWS': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Automation': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  'Sanity': 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  'SNS': 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  'Chipsets': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'Jira': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Debugging': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Shield Box': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  'Sniffer': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
};

export default function TechBadge({ tech, delay = 0 }) {
  const colorClass = colorMap[tech] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClass}`}
    >
      {tech}
    </motion.span>
  );
}