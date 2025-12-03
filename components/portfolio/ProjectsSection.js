import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from './ProjectCard';

const fireTvImage = new URL('../../assets/fire-tv-stick-4k.png', import.meta.url).href;

const qualcommProjects = [

  /*
  -------------------------------------------------------------------
  1. Wireless Debug & RF Analysis
  -------------------------------------------------------------------
  */

  {
    title: "Wireless Debug & RF Analysis",
    role: "Role: RF validation & packet analysis lead",
    summary:
      "Built controlled RF environments and packet-level debugging workflows to diagnose roaming, RVR, and sensitivity issues across Wi-Fi platforms.",
    
    tech: ["WLAN", "RF", "RVR", "802.11", "Sniffer", "Debugging"],

    problem:
      "Roaming failures and RF sensitivity issues were difficult to reproduce due to inconsistent open-air conditions and limited packet-level visibility.",

    solution:
      "Designed controlled RF chambers with programmable attenuators for accurate RVR sweeps and standardized sniffer capture/playback with automated packet analysis scripts.",

    impact:
      "Achieved 99% reproducibility, identified 25+ RF regressions early, and reduced triage time from 2 days to 4 hours.",

    hasDemo: true,

    details: [
      {
        title: "Wi-Fi Dual-Client Sanity Testbed",
        description:
          "Owned multiple dual-client open-air testbeds validating wireless modes, security, and throughput across Qualcomm Wi-Fi platforms.",
        demoType: "dual-client"
      },
      {
        title: "RF Environment & RVR Testing",
        description:
          "Built shield-box based setups with attenuators for precise RVR/throughput validation across 2.4/5 GHz bands.",
        demoType: "rvr-test"
      },
      {
        title: "Sniffer & Packet Analysis Automation",
        description:
          "Script-driven packet capture, filtering, and correlation to debug roaming and handoff defects rapidly.",
        demoType: "sniffer-analysis"
      }
    ]
  },

  /*
  -------------------------------------------------------------------
  2. Automation & ML-Driven Test Prioritization
  -------------------------------------------------------------------
  */

  {
    title: "Automation & ML-Driven Test Prioritization",
    role: "Role: Automation + ML framework developer",
    summary:
      "Accelerated regression cycles by combining ML-based test ranking with expanded WLAN sanity automation.",
    
    tech: ["ML", "Python", "Perl", "Automation", "WLAN"],

    problem:
      "Full regression cycles across thousands of tests slowed down detection of crash-heavy issues and consumed excessive engineering time.",

    solution:
      "Developed supervised ML ranking using crash history + code deltas; enhanced Perl WLAN sanity automation with intelligent retries and stability/throughput coverage.",

    impact:
      "Caught 85% of crash issues in the first 20% of executions and reduced total cycle time by 60% while tripling effective coverage.",

    hasDemo: true,

    details: [
      {
        title: "ML-Driven Test Ranking",
        description:
          "Supervised model predicting crash-prone tests using historical data and code change patterns.",
        demoType: "ml-prioritization"
      },
      {
        title: "WLAN Sanity Automation",
        description:
          "Built Perl automation for throughput/stability sanity with retries and structured reporting across multiple Wi-Fi platforms."
      }
    ]
  },

  /*
  -------------------------------------------------------------------
  3. Customer-Grade Stress & Reliability Testing
  -------------------------------------------------------------------
  */

  {
    title: "Customer-Grade Stress & Reliability Testing",
    role: "Role: Stress lab & reliability testing owner",
    summary:
      "Ran large-scale device farms and voice/Wi-Fi stress scenarios to mirror real customer environments and expose long-duration reliability issues.",
    
    tech: ["Automation", "WLAN", "Voice", "SNS", "Power Line", "PLC"],

    problem:
      "Customer-like loads and voice interactions exposed issues that standard functional or regression suites failed to detect early.",

    solution:
      "Built a 150+ device stress lab with automated cycles; layered Alexa-style voice/Wi-Fi scenarios; added PLC throughput validation under varied noise.",

    impact:
      "Delivered 99.9% lab uptime, 99.5% voice reliability, and uncovered 40+ critical regressions before production.",

    hasDemo: true,
   
    details: [
      {
        title: "Max-Client Stress Environment",
        description:
          "150+ device orchestrated lab performing automated connect/disconnect cycles, throughput sweeps, and long-duration stability checks.",
         demoType: "stress-test",
      },
      {
        title: "Alexa-Grade Wi-Fi Stress Testing",
        description:
          "Low-latency voice command loops under congestion/interference to validate real-world responsiveness.",
      },
      {
        title: "Power Line Communication (PLC) Testing",
        description:
          "Throughput/stability validation over PLC links with noise simulation and long-duration monitoring.",
      }
    ]
  },

  /*
  -------------------------------------------------------------------
  4. Platform Bring-up & Launch Leadership
  -------------------------------------------------------------------
  */

  {
    title: "Platform Bring-up & Launch Leadership",
    role: "Role: Sanity/bring-up lead & release execution owner",
    summary:
      "Led daily sanity, chipset bring-up, and release execution across Qualcomm Wi-Fi 5 and Wi-Fi 6 platforms, ensuring stable builds for downstream teams.",
    
    tech: [
      "Sanity Validation",
      "Daily Build Verification",
      "Regression Testing",
      "WLAN",
      "Wi-Fi 5 (11ac)",
      "Wi-Fi 6 (11ax)",
      "Chipset Bring-up",
      "Release Management",
      "Cross-Functional Coordination"
    ],

    problem:
      "Daily builds across Wi-Fi platforms often arrived unstable, delaying functional teams and causing unpredictable test cycles due to fragmented early validation.",

    solution:
      "Established consistent sanity validation workflows with automated checks, standardized regression cycles, clear bug bars, and cross-team quality gates. Led daily triage and ensured stable, test-ready builds went to all downstream teams.",

    impact:
      "Significantly reduced build blockers, improved stability, accelerated functional team productivity, and delivered multiple chipset releases with zero critical escapes.",

    details: [
      {
        title: "Wi-Fi 5 (11ac) — Sanity & Regression Leadership",
        description:
          "Owned daily sanity cycles; unified planning; automated critical flows; ensured stable weekly drops for functional teams."
      },
      {
        title: "Wi-Fi 6 (11ax) — Platform Bring-up Execution",
        description:
          "Drove end-to-end bring-up and release workflows: validation strategy, automation, bug bar ownership, and readiness gates."
      }
    ]
  }
];

const amazonProjects = [
  {
    title: "Fire TV launches: connectivity owner",
    period: "2018-2019",
    summary: "Connectivity launch owner for sticks/cubes—Wi-Fi/BT/BLE/CoEx quality, OOBE/FFS readiness, Live TV validation.",
    tech: ["Wi-Fi", "BT", "BLE", "CoEx", "FFS", "Live TV", "Frank", "Dektec"],
    problem: "Connectivity regressions and Live TV setup risks could delay launches.",
    solution: "Daily triage/sign-offs; Wi-Fi/BT/BLE/CoEx regressions; OOBE/FFS readiness; Frank/Dektec Live TV validation.",
    impact: "On-time launches; stable connectivity KPIs; higher Live TV setup success.",
    listStyle: "ordered",
    link: "https://www.amazon.com/dp/B08XVYZ1Y5/ref=tsm_1_fb_lk?th=1",
    imageUrl: fireTvImage,
    flow: [
      "Coverage: FTV Stick, Cubes, Remotes",
      "FTV Regression for Wi-Fi/BT/BLE/CoEx",
      "Daily status, gates, sign-off"
    ]
  },
  {
    title: "Automation: remotes & routers",
    period: "2018-2019",
    summary: "Arduino remote-latency rig + scripted router UI (TP-Link, Netgear) to accelerate connectivity sign-offs.",
    tech: ["Automation", "Arduino", "Routers"],
    problem: "Manual remote latency and router reconfig slowed test cycles and risked inconsistency.",
    solution: "Arduino rig for Snow/Lindberg remotes; scripted router UI for rapid topology changes.",
    impact: "Release gating on latency KPIs; faster multi-router coverage.",
    hasDemo: true,
    demoType: "remote-router",
    listStyle: "ordered",
    flow: [
      "Remote latency automation (Arduino rig for Snow/Lindberg)",
      "Router UI automation (TP-Link, Netgear, etc.)",
      "Topology spins for connectivity scenarios",
      "Faster regression turnaround"
    ]
  },
  {
    title: "RF lab stewardship & booking",
    period: "2018-2019",
    summary: "RF lab ops with RVR/perf/stress setups + booking tool to avoid conflicts and maximize utilization.",
    tech: ["RF", "RVR", "Perf", "Stress", "Scheduling"],
    problem: "Shared labs caused conflicts and inconsistent environments for reproducible connectivity testing.",
    solution: "Maintained shield rooms/RF boxes, calibrated rigs, built booking tool with conflict checks.",
    impact: "Higher lab throughput and reproducible runs.",
    hasDemo: true,
    demoType: "lab-ops",
    listStyle: "ordered",
    flow: [
      "Lab stewardship: shield rooms/RF boxes",
      "RVR/perf/stress configurations",
      "Conflict-free booking and scheduling",
      "Ready-to-run environments for teams"
    ]
  },
  {
    title: "OTA CLI Tool",
    period: "2020-2022",
    summary: "Led migration of Over-The-Air update testing to cloud-based AWS infrastructure with CLI tooling.",
    tech: ["AWS", "Python", "Automation", "CLI"],
    problem: "Legacy OTA testing infrastructure was difficult to scale and maintain.",
    solution: "Architected cloud-native OTA testing platform with automated provisioning and CLI-driven workflows.",
    impact: "10x scalability improvement with 40% cost reduction through cloud optimization.",
    hasDemo: true,
    demoType: "ota-migration",
    metrics: [
      { value: "10x", label: "Scalability" },
      { value: "40%", label: "Cost Saved" },
      { value: "100+", label: "Devices/Day" },
      { value: "Zero", label: "Manual Steps" }
    ]
  },
  {
    title: "Auto Jira MMS Plugin",
    period: "2021-2023",
    summary: "Developed automated Jira integration for test management system enabling seamless defect tracking.",
    tech: ["Jira", "Python", "Automation", "AWS"],
    problem: "Manual defect logging from test results was time-consuming and error-prone.",
    solution: "Built plugin to automatically create, update, and link Jira tickets from test execution results.",
    impact: "Saved 15+ hours per week across team and improved defect tracking accuracy by 95%.",
    hasDemo: true,
    demoType: "jira-mms",
    flow: ["Test Failure", "Auto-Capture", "Jira Create", "Link & Notify"],
    metrics: [
      { value: "95%", label: "Defect accuracy" },
      { value: "15+ hrs", label: "Saved weekly" },
      { value: "<1 min", label: "Ticket latency" },
      { value: "0", label: "Manual fields" }
    ]
  },
  {
    title: "Wi-Fi Stability Testbeds",
    period: "2020-2024",
    summary: "Designed and maintained Wi-Fi stability testbeds for Fire TV connectivity validation.",
    tech: ["WLAN", "Automation", "SNS", "RF"],
    problem: "Fire TV devices needed reliable Wi-Fi across diverse home network conditions.",
    solution: "Built comprehensive testbed simulating various router configurations, interference patterns, and network conditions.",
    impact: "Reduced field Wi-Fi issues by 60% through proactive lab detection.",
    flow: ["Environment Setup", "Scenario Config", "Long-run Test", "Issue Analysis"]
  },
  {
    title: "Device Launch Ownership",
    period: "2022-2025",
    summary: "Led quality validation and launch readiness for multiple Fire TV device generations.",
    tech: ["Automation", "Sanity", "WLAN", "SNS"],
    problem: "Device launches required coordination across multiple validation streams with tight timelines.",
    solution: "Established launch readiness criteria, automated validation gates, and cross-functional coordination processes.",
    impact: "Zero critical launch escapes across 5 device launches with improved time-to-market.",
    flow: ["Feature Lock", "Validation", "Bug Bar", "Launch Gate", "Monitor"]
  }
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("amazon");

  const projects = activeTab === "amazon" ? amazonProjects : qualcommProjects;

  return (
    <section id="projects" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">
            Click on any project to explore the full story
          </p>
          <p className="text-emerald-400 text-sm">
            ✨ Projects with "Interactive Demo" badges include live visualizations
          </p>

          <div className="mt-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="inline-flex">
              <TabsList className="bg-gray-800/50 border border-gray-700/50 p-1">
                <TabsTrigger
                  value="amazon"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2"
                >
                  Amazon (2018-Present)
                </TabsTrigger>
                <TabsTrigger
                  value="qualcomm"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white px-6 py-2"
                >
                  Qualcomm (2015-2018)
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
