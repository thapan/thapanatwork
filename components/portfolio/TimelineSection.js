import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Tv, ChevronRight } from 'lucide-react';

const timelineData = [
  {
    company: "Open To",
    icon: Building2,
    color: "purple",
    highlights: [
      "Senior QA/Automation Lead",
      "Automation Architect",
      "Wireless/Connectivity QA Lead",
      "TPM/PM for quality/automation tools",
      "UI Developer for device/streaming experiences"
    ]
  },
  {
    company: "Amazon",
    role: "Fire TV & Connectivity Engineer",
    period: "2018 - Present",
    icon: Tv,
    color: "blue",
    highlights: [
      "FTV Launch & Quality Assurance",
      "Automation: Remotes & Routers",
      "Lab Ops: RF stewardship & booking",
      "OTA CLI Tool",
      "Auto Jira Plugin",
      "Wi-Fi stability testbeds"
    ]
  },
  {
    company: "Qualcomm",
    role: "WLAN Quality Engineer",
    period: "2015 - 2018",
    icon: Building2,
    color: "purple",
    highlights: [
      "100+ chipset releases delivered across 802.11 a/b/g/n/ac/ad",
      "Built Python sanity/stress automation and multi-client farm (150+ devices)",
      "Developed ML-based crash predictor to prioritize stability tests",
      "Led max-client, RVR, and voice/Alexa WLAN validations; drove bug closure via Jira/Prism/IR"
    ]
  },
  {
    company: "CDAC",
    role: "PG Diploma • Embedded System Design",
    period: "2014 - 2015",
    icon: Building2,
    color: "purple",
    highlights: [
      "Embedded systems design and firmware foundations",
      "Microcontrollers, RTOS, and interfacing projects",
      "Built capstone around end-to-end embedded stack"
    ]
  },
  {
    company: "Bachelor of Engineering",
    role: "Electronics & Communication",
    period: "2009 - 2013",
    icon: Building2,
    color: "purple",
    highlights: [
      "Electronics fundamentals: signals, circuits, communications",
      "Projects in embedded/communication systems"
    ]
  },
  {
    company: "Born",
    icon: Building2,
    color: "purple",
    highlights: []
  }
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Career <span className="text-purple-400">Timeline</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A decade of engineering excellence across industry giants
          </p>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent hidden md:block" />

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: item.company === "Born" ? 0 : (index % 2 === 0 ? -50 : 50) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${item.company === "Born" ? 'items-center' : 'md:flex-row items-center gap-8 ' + (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}`}
              >
                {item.company === "Born" ? (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-5 h-5 rounded-full ${
                        item.color === 'purple' ? 'bg-purple-500' : 'bg-blue-500'
                      } shadow-[0_0_20px_rgba(139,92,246,0.5)] z-10`}
                    />
                    <div className="mt-3 px-4 py-2 rounded-xl bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-500/30 text-center">
                      <div className="text-sm font-semibold text-white">{item.company}</div>
                      {item.period && <div className="text-xs text-purple-300 font-mono">{item.period}</div>}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-8 rounded-2xl bg-gradient-to-br ${
                          item.color === 'purple'
                            ? 'from-purple-900/30 to-purple-800/10 border-purple-500/20'
                            : 'from-blue-900/30 to-blue-800/10 border-blue-500/20'
                        } border backdrop-blur-sm`}
                      >
                        <div className={`flex items-center gap-3 mb-4 ${
                          index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          <div className={`p-3 rounded-xl ${
                            item.color === 'purple' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                          }`}>
                            <item.icon className={`w-6 h-6 ${
                              item.color === 'purple' ? 'text-purple-400' : 'text-blue-400'
                            }`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{item.company}</h3>
                            <p className={`${
                              item.color === 'purple' ? 'text-purple-300' : 'text-blue-300'
                            }`}>{item.role}</p>
                          </div>
                        </div>

                        <p className="text-gray-400 font-mono text-sm mb-4">{item.period}</p>

                        <ul className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className={`flex items-center gap-2 text-gray-300 ${
                              index % 2 === 0 ? 'md:justify-end' : ''
                            }`}>
                              {index % 2 !== 0 && <ChevronRight className="w-4 h-4 text-purple-400" />}
                              <span>{highlight}</span>
                              {index % 2 === 0 && <ChevronRight className="w-4 h-4 text-purple-400 rotate-180" />}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={`w-5 h-5 rounded-full ${
                          item.color === 'purple' ? 'bg-purple-500' : 'bg-blue-500'
                        } shadow-[0_0_20px_rgba(139,92,246,0.5)] z-10`}
                      />
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
