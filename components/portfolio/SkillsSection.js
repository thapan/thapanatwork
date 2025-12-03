import React from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Zap,
  Cloud,
  Code,
  ClipboardCheck,
  Brain,
  Rocket,
  Users,
  Settings2,
  Wrench,
  GraduationCap,
  MessageSquare,
  Terminal,
  Server,
  Bug,
  GitBranch,
  Bot
} from 'lucide-react';

export default function SkillsSection() {
  const technicalTiles = [
    {
      icon: Wifi,
      title: "Wireless/RF",
      desc: "RVR/shield-box, sniffer analysis; IxChariot/IxLoad, Wireshark.",
      anchor: "Projects: Wireless Testing & Packet Debug"
    },
    {
      icon: Zap,
      title: "Automation",
      desc: "Frameworks, sanity/stress, router/remote rigs, self-healing prompts.",
      anchor: "Projects: Automation & Tooling"
    },
    {
      icon: Cloud,
      title: "Cloud/AWS",
      desc: "Dial-up/OTA CLI, Jira MMS (Lambda), hotspot Step Functions; Docker/EC2.",
      anchor: "Projects: Dial-up/OTA CLI, Jira MMS, Hotspot Programs"
    },
    {
      icon: Code,
      title: "Python",
      desc: "Scripting, tools, analytics; WLAN sanity automation; ML pipelines.",
      anchor: "Projects: ML Prioritization, Sanity Automation"
    },
    {
      icon: ClipboardCheck,
      title: "Testing",
      desc: "Test planning/strategy from prototype to launch; stress/stability labs, launch gates, regression coverage.",
      anchor: "Projects: Launch Leadership, Stress & Reliability"
    },
    {
      icon: Brain,
      title: "ML/Analytics",
      desc: "Test prioritization, defect analytics, stability metrics.",
      anchor: "Projects: ML Test Prioritization, Jira metrics"
    }
  ];

  const leadershipTiles = [
    {
      icon: Rocket,
      title: "Launch/Program QA",
      desc: "NPI launches, launch rooms, gates/bug bars.",
      anchor: "Projects: FTV Launch Leadership"
    },
    {
      icon: Users,
      title: "Cross-Functional",
      desc: "PMT/TPM/Eng alignment, customer-impact metrics.",
      anchor: "Projects: Launch Leadership, Hotspot Programs"
    },
    {
      icon: Settings2,
      title: "Automation Strategy",
      desc: "Consumption 30%→90%, scale-up across products.",
      anchor: "Projects: Smart TV automation, Auto Test Prompt"
    },
    {
      icon: Wrench,
      title: "Lab/Infra Ops",
      desc: "Arlington lab stewardship, readiness, utilization.",
      anchor: "Projects: Launch Leadership, Lab Ops"
    },
    {
      icon: GraduationCap,
      title: "Coaching/Mentoring",
      desc: "SDET path, framework hardening with SDE mentors.",
      anchor: "Projects: Automation & Tooling"
    },
    {
      icon: MessageSquare,
      title: "Stakeholder Comms",
      desc: "Status, KPIs, decision gates; exec-ready updates.",
      anchor: "Projects: Launch Leadership, Device Ownership"
    }
  ];

  const toolGroups = [
    {
      title: "Wireless/RF & Performance",
      anchor: "Projects: Wireless Testing & Packet Debug",
      items: ["Wireshark", "Omnipeek", "tcpdump", "IxLoad/IxChariot/IxNetwork", "Spirent"],
      icon: Wifi
    },
    {
      title: "Automation",
      anchor: "Projects: Automation & Tooling",
      items: ["Python", "Selenium","UiAutomator","Appium", "Bash", "Arduino rigs", "CLI", "Linux", "MacOS"],
      icon: Terminal
    },
    {
      title: "Cloud & Pipelines",
      anchor: "Projects: Dial-up/OTA CLI, Jira MMS, Hotspot",
      items: ["AWS (Lambda/Step Functions/EC2)", "REST APIs", "Jenkins", "Git/GitHub"],
      icon: Cloud
    },
    {
      title: "QA & Launch Ops",
      anchor: "Projects: Launch Leadership",
      items: ["Jira", "Splunk", "Launch gates/bug bars", "Status/KPI dashboards"],
      icon: Bug
    },
    {
      title: "Lab Ops",
      anchor: "Projects: Lab Ops & Arlington",
      items: ["Host", "Shield boxes", "Attenuators", "Lab booking", "Mesh/interop labs", "Perf/stability rigs"],
      icon: Server
    },
    {
      title: "AI Assist & Analytics",
      anchor: "Projects: ML Prioritization, Jira metrics",
      items: ["Pandas", "scikit-learn", "SQL", "Amazon Q", "AI code/test assist"],
      icon: Bot
    }
  ];

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
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Technical Focus</h3>
                <span className="text-xs text-gray-500">Projects & tools</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {technicalTiles.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-xl bg-gray-800/40 border border-gray-700/40 hover:border-purple-500/40 hover:bg-gray-800/60 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="w-4 h-4 text-purple-300" />
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{item.desc}</p>
                    <p className="text-[11px] text-purple-300">{item.anchor}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Leadership Focus</h3>
                <span className="text-xs text-gray-500">Programs & teams</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {leadershipTiles.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-xl bg-gray-800/40 border border-gray-700/40 hover:border-blue-500/40 hover:bg-gray-800/60 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="w-4 h-4 text-blue-300" />
                      <div className="text-sm font-semibold text-white">{item.title}</div>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{item.desc}</p>
                    <p className="text-[11px] text-blue-300">{item.anchor}</p>
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
            {toolGroups.map((group, idx) => (
              <div key={group.title} className="p-5 rounded-xl bg-gray-800/50 border border-gray-700/50">
                <div className="flex items-center gap-2 mb-1">
                  <group.icon className="w-4 h-4 text-purple-300" />
                  <h4 className="text-sm font-semibold text-white">{group.title}</h4>
                </div>
                <p className="text-[11px] text-purple-300 mb-3">{group.anchor}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((label, index) => (
                    <motion.span
                      key={`${group.title}-${label}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 + index * 0.02 }}
                      className="px-3 py-1.5 rounded-lg bg-gray-900/50 text-gray-300 border border-gray-700/50
                                 hover:border-purple-500/50 hover:text-white hover:bg-gray-800
                                 transition-all duration-200 text-sm"
                    >
                      {label}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
