import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const skillsData = [
  {
    category: "Wireless & RF",
    color: "purple",
    skills: [
      {
        name: "802.11 Standards",
        level: 95,
        description: "Deep expertise in all Wi-Fi generations from a/b/g to ax (Wi-Fi 6)",
        examples: ["Validated 100+ chipsets across all 802.11 standards", "Led certification testing for new protocol features", "Debugged complex multi-band roaming issues"]
      },
      {
        name: "RVR Testing",
        level: 92,
        description: "Rate vs Range testing for wireless performance characterization",
        examples: ["Built automated RVR test framework", "Established baseline metrics across product lines", "Identified 25+ RF sensitivity regressions"]
      },
      {
        name: "RF Environments",
        level: 90,
        description: "Shield box setup, attenuator control, and interference simulation",
        examples: ["Designed multi-chamber RF test facility", "Calibrated 50+ test environments", "Achieved 99% test reproducibility"]
      },
      {
        name: "Packet Analysis",
        level: 88,
        description: "Wireshark/sniffer expertise for deep protocol debugging",
        examples: ["Reduced debug time from 2 days to 4 hours", "Created automated packet analysis scripts", "Trained team on advanced capture techniques"]
      }
    ]
  },
  {
    category: "Programming",
    color: "blue",
    skills: [
      {
        name: "Python",
        level: 90,
        description: "Primary language for automation, ML, and tooling",
        examples: ["Built ML test prioritization model", "Developed AWS CLI migration tools", "Created data analytics pipelines"]
      },
      {
        name: "Perl",
        level: 88,
        description: "Legacy automation and text processing expertise",
        examples: ["Maintained 50K+ lines of test automation", "Built statistical analysis scripts", "Automated Jira issue processing"]
      },
      {
        name: "Shell/Bash",
        level: 85,
        description: "System automation and CI/CD scripting",
        examples: ["Automated nightly build validation", "Created device provisioning scripts", "Built log analysis tools"]
      },
      {
        name: "SQL",
        level: 78,
        description: "Database queries for test results and metrics",
        examples: ["Built quality dashboards", "Analyzed historical test data", "Optimized report generation queries"]
      }
    ]
  },
  {
    category: "Testing",
    color: "green",
    skills: [
      {
        name: "Automation Frameworks",
        level: 95,
        description: "Design and implementation of scalable test automation",
        examples: ["Architected framework used across 5 product lines", "Reduced test cycle time by 60%", "Achieved 3x test coverage improvement"]
      },
      {
        name: "Stress/Stability",
        level: 93,
        description: "Long-duration stability and stress testing methodologies",
        examples: ["150+ device max-client stress setup", "Identified 40+ stability bugs pre-release", "Achieved 99.9% field uptime metrics"]
      },
      {
        name: "Regression Testing",
        level: 90,
        description: "Systematic regression validation across releases",
        examples: ["ML-driven test prioritization", "85% crash detection in first 20% of tests", "Zero critical launch escapes"]
      },
      {
        name: "Performance Testing",
        level: 88,
        description: "Throughput and latency validation under load",
        examples: ["Built automated throughput benchmarks", "Validated Alexa voice latency requirements", "Established performance baselines"]
      }
    ]
  },
  {
    category: "Infrastructure",
    color: "orange",
    skills: [
      {
        name: "AWS",
        level: 82,
        description: "Cloud infrastructure for test automation",
        examples: ["Migrated OTA testing to AWS", "10x scalability improvement", "40% cost reduction achieved"]
      },
      {
        name: "Testbed Design",
        level: 92,
        description: "Physical and virtual test environment architecture",
        examples: ["Designed 150+ device stress lab", "Built Wi-Fi stability testbeds", "Created isolated RF chambers"]
      },
      {
        name: "CI/CD Integration",
        level: 80,
        description: "Continuous integration and automated validation",
        examples: ["Integrated tests with Jenkins pipelines", "Automated nightly validation", "Built deployment gates"]
      },
      {
        name: "Fleet Management",
        level: 85,
        description: "Large-scale device fleet operations",
        examples: ["Managed 200+ device test pool", "Automated device provisioning", "Built health monitoring dashboards"]
      }
    ]
  }
];

const colorClasses = {
  purple: {
    bg: "bg-purple-500",
    bgLight: "bg-purple-500/20",
    border: "border-purple-500/30",
    text: "text-purple-400",
    gradient: "from-purple-500 to-purple-600"
  },
  blue: {
    bg: "bg-blue-500",
    bgLight: "bg-blue-500/20",
    border: "border-blue-500/30",
    text: "text-blue-400",
    gradient: "from-blue-500 to-blue-600"
  },
  green: {
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    gradient: "from-emerald-500 to-emerald-600"
  },
  orange: {
    bg: "bg-orange-500",
    bgLight: "bg-orange-500/20",
    border: "border-orange-500/30",
    text: "text-orange-400",
    gradient: "from-orange-500 to-orange-600"
  }
};

function SkillBar({ skill, color, index, onHover }) {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group cursor-pointer"
      onMouseEnter={() => onHover(skill)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
          {skill.name}
        </span>
        <span className={`text-sm font-mono ${colors.text}`}>
          {skill.level}%
        </span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 animate-shimmer" />
        </motion.div>

        {/* Glow effect on hover */}
        <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
}

function SkillDetailPopup({ skill, color, onClose }) {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`absolute z-50 top-full left-0 right-0 mt-4 p-5 rounded-xl bg-gray-900/95 backdrop-blur-xl border ${colors.border} shadow-2xl`}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 p-1 rounded-lg hover:bg-gray-800 transition-colors"
      >
        <X className="w-4 h-4 text-gray-400" />
      </button>

      <div className="flex items-center gap-3 mb-3">
        <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
        <span className={`text-sm font-mono ${colors.text}`}>{skill.level}%</span>
      </div>

      <p className="text-gray-400 text-sm mb-4">{skill.description}</p>

      <div className="space-y-2">
        <h5 className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
          Examples in Action
        </h5>
        <ul className="space-y-1.5">
          {skill.examples.map((example, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <span className={`mt-1.5 w-1 h-1 rounded-full ${colors.bg} flex-shrink-0`} />
              {example}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function SkillCategory({ category, color, skills }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/40 border ${colors.border} backdrop-blur-sm`}
    >
      <h3 className={`text-xl font-bold mb-6 ${colors.text}`}>{category}</h3>

      <div className="space-y-5">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            color={color}
            index={index}
            onHover={setHoveredSkill}
          />
        ))}
      </div>

      <AnimatePresence>
        {hoveredSkill && (
          <SkillDetailPopup
            skill={hoveredSkill}
            color={color}
            onClose={() => setHoveredSkill(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function SkillBarChart() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((data) => (
        <SkillCategory
          key={data.category}
          category={data.category}
          color={data.color}
          skills={data.skills}
        />
      ))}

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}