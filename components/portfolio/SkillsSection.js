import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart3, Radar } from 'lucide-react';
import SkillRadarChart from './SkillRadarChart';
import SkillBarChart from './SkillBarChart';

export default function SkillsSection() {
  const [activeView, setActiveView] = useState("bars");

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-purple-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            A decade of specialized skills in wireless validation and automation.
            <span className="text-purple-300"> Hover over any skill</span> to see examples in action.
          </p>

          {/* View Toggle */}
          <Tabs value={activeView} onValueChange={setActiveView} className="inline-flex">
            <TabsList className="bg-gray-800/50 border border-gray-700/50 p-1">
              <TabsTrigger
                value="bars"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white px-6 py-2 flex items-center gap-2"
              >
                <BarChart3 className="w-4 h-4" />
                Detailed View
              </TabsTrigger>
              <TabsTrigger
                value="radar"
                className="data-[state=active]:bg-purple-600 data-[state=active]:text-white px-6 py-2 flex items-center gap-2"
              >
                <Radar className="w-4 h-4" />
                Overview
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Content based on active view */}
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeView === "bars" ? (
            <SkillBarChart />
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
                <SkillRadarChart />

                {/* Legend */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { label: "Wireless/RF", value: "95%", desc: "802.11, RVR, Sniffer Analysis" },
                    { label: "Testing", value: "95%", desc: "Automation, Stress, Regression" },
                    { label: "Automation", value: "92%", desc: "Framework Design, CI/CD" },
                    { label: "Python/Perl", value: "88%", desc: "Scripting, Tools, Analytics" },
                    { label: "Cloud/AWS", value: "80%", desc: "Infrastructure, Scaling" },
                    { label: "ML/Analytics", value: "75%", desc: "Test Prioritization, Data Analysis" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-purple-500/30 transition-colors group cursor-default"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                        <span className="text-purple-400 font-mono text-sm">{item.value}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Additional Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Tools & Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Jira", "Git", "Jenkins", "AWS", "Docker",
              "Wireshark", "IxChariot", "Spirent", "Attenuators",
              "Shield Boxes", "Python", "Perl", "Bash", "SQL",
              "Pandas", "scikit-learn", "REST APIs"
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-xl bg-gray-800/50 text-gray-300 border border-gray-700/50
                         hover:border-purple-500/50 hover:text-white hover:bg-gray-800
                         transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}