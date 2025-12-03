import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Bug, Zap, Award, Wifi, Wrench } from 'lucide-react';

const stats = [
  {
  icon: Award,
  value: "10+",
  label: "Product Launches"
},
{
  icon: Cpu,
  value: "100%",
  label: "Automation Expertise"
},
{
  icon: Zap,
  value: "50k+",
  label: "Tests Executed"
},
{
  icon: Wrench,
  value: "25+",
  label: "Tools & Frameworks Built"
}
];

export default function StatsSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-4"
              >
                <stat.icon className="w-8 h-8 text-purple-400" />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>

              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
