import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillRadarChart from './SkillRadarChart';

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="pt-20 pb-28 px-6 relative overflow-hidden">
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
            Explore the capabilities below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
              <SkillRadarChart activeSkill={hoveredSkill} />
              <p className="text-center text-sm text-gray-500 mt-4">
                Hover the legend to spotlight a skill; radar shows relative focus across capabilities.
              </p>

              {/* Legend */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Wireless/RF", desc: "802.11, RVR, Sniffer Analysis" },
                  { label: "Testing", desc: "Automation, Stress, Regression" },
                  { label: "Automation", desc: "Framework Design, CI/CD" },
                  { label: "Python/Perl", desc: "Scripting, Tools, Analytics" },
                  { label: "Cloud/AWS", desc: "Infrastructure, Scaling" },
                  { label: "ML/Analytics", desc: "Test Prioritization, Data Analysis" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(item.label)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`p-3 rounded-xl bg-gray-800/30 border border-gray-700/30 transition-colors group cursor-default ${
                      hoveredSkill === item.label ? 'border-purple-500/50 bg-gray-800/50' : 'hover:border-purple-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-medium transition-colors ${
                        hoveredSkill === item.label ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Planning & Tracking",
                items: [
                  { label: "Jira", url: "https://www.atlassian.com/software/jira" },
                  { label: "Prism" },
                  { label: "Salesforce IR", url: "https://www.salesforce.com" }
                ]
              },
              {
                title: "Version Control & CI/CD",
                items: [
                  { label: "Git", url: "https://git-scm.com" },
                  { label: "Jenkins", url: "https://www.jenkins.io" }
                ]
              },
              {
                title: "Cloud & Containers",
                items: [
                  { label: "AWS", url: "https://aws.amazon.com" },
                  { label: "Docker", url: "https://www.docker.com" }
                ]
              },
              {
                title: "Wi-Fi/Mesh & Performance",
                items: [
                  { label: "Wireshark", url: "https://www.wireshark.org" },
                  { label: "Omnipeek", url: "https://www.liveaction.com/products/omnipeek/" },
                  { label: "Ixia IxLoad", url: "https://www.keysight.com/us/en/products/network-test/ixload.html" },
                  { label: "IxChariot", url: "https://www.keysight.com/us/en/products/network-test/ixchariot.html" },
                  { label: "IxNetwork", url: "https://www.keysight.com/us/en/products/network-test/ixnetwork.html" },
                  { label: "Iperf", url: "https://iperf.fr" },
                  { label: "Spirent", url: "https://www.spirent.com" },
                  { label: "tcpdump", url: "https://www.tcpdump.org" },
                  { label: "Mesh testbeds" },
                  { label: "Performance regression suites" },
                  { label: "Interop labs" }
                ]
              },
              {
                title: "RF/Lab",
                items: [
                  { label: "Attenuators" },
                  { label: "Shield Boxes" }
                ]
              },
              {
                title: "Terminals & Utilities",
                items: [
                  { label: "Tera Term", url: "https://osdn.net/projects/ttssh2/releases/" },
                  { label: "PuTTY", url: "https://www.putty.org" },
                  { label: "CLI/SSH debug" }
                ]
              },
              {
                title: "App/Web/Playback QA",
                items: [
                  { label: "Selenium", url: "https://www.selenium.dev" },
                  { label: "API testing", url: "https://restfulapi.net" },
                  { label: "Playback/streaming labs" },
                  { label: "iOS/Android/Web regressions" },
                  { label: "Living room/Fire TV validation" }
                ]
              },
              {
                title: "Languages",
                items: [
                  { label: "Python", url: "https://www.python.org" },
                  { label: "Perl", url: "https://www.perl.org" },
                  { label: "C", url: "https://en.wikipedia.org/wiki/C_(programming_language)" },
                  { label: "Bash", url: "https://www.gnu.org/software/bash/" },
                  { label: "SQL", url: "https://en.wikipedia.org/wiki/SQL" }
                ]
              },
              {
                title: "Data & ML",
                items: [
                  { label: "Pandas", url: "https://pandas.pydata.org" },
                  { label: "scikit-learn", url: "https://scikit-learn.org" },
                  { label: "REST APIs", url: "https://restfulapi.net" }
                ]
              },
              {
                title: "AI Assistants",
                items: [
                  { label: "Amazon Q" },
                  { label: "Prompt engineering" },
                  { label: "AI code assistants" },
                  { label: "AI test case generation" },
                  { label: "LLM-integrated tools" }
                ]
              }
            ].map((group, idx) => (
              <div key={group.title} className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <h4 className="text-sm font-semibold text-white mb-3">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tool, index) => {
                    const content = (
                      <span className="px-3 py-1.5 rounded-lg bg-gray-900/50 text-gray-300 border border-gray-700/50
                               hover:border-purple-500/50 hover:text-white hover:bg-gray-800
                               transition-all duration-200 cursor-pointer text-sm">
                        {tool.label}
                      </span>
                    );
                    return (
                      <motion.span
                        key={tool.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx * 0.05) + index * 0.02 }}
                        whileHover={{ scale: 1.06, y: -1 }}
                        className="inline-flex"
                      >
                        {tool.url ? (
                          <a href={tool.url} target="_blank" rel="noreferrer">
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
