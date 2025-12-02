import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from './ProjectCard';

const qualcommProjects = [
  {
    title: "ML-Driven Test Prioritization",
    period: "2016-2017",
    summary: "Implemented a supervised machine learning model to intelligently prioritize crash-heavy tests for faster regression detection.",
    tech: ["ML", "Python", "Automation", "Sanity"],
    problem: "With thousands of test cases, running full regression took too long, missing critical crash issues.",
    solution: "Built a supervised ML model analyzing historical crash data, test failure patterns, and code change impact to prioritize high-risk test cases.",
    impact: "Detected 85% of crash issues in first 20% of test execution, dramatically reducing time-to-detection.",
    hasDemo: true,
    demoType: "ml-prioritization",
    metrics: [
      { value: "85%", label: "Early Detection" },
      { value: "5x", label: "Faster Triage" },
      { value: "10K+", label: "Tests Analyzed" },
      { value: "60%", label: "Time Saved" }
    ]
  },
  {
    title: "Max-Client Stress Test Environment",
    period: "2016-2018",
    summary: "Designed and operated a 150+ device stress testing environment to validate WLAN chipset stability under extreme load.",
    tech: ["WLAN", "SNS", "Automation", "Chipsets"],
    problem: "Real-world deployments with hundreds of clients exposed stability issues not caught in standard testing.",
    solution: "Built a dedicated stress test lab with 150+ devices, automated client connection cycling, and continuous throughput monitoring.",
    impact: "Identified and resolved 40+ critical stability bugs before production, achieving 99.9% uptime in customer deployments.",
    hasDemo: true,
    demoType: "stress-test",
    metrics: [
      { value: "150+", label: "Devices" },
      { value: "99.9%", label: "Uptime" },
      { value: "40+", label: "Bugs Found" },
      { value: "24/7", label: "Monitoring" }
    ]
  },
  {
    title: "RF Environment & RVR Testing",
    period: "2015-2018",
    summary: "Established RF testing infrastructure including shield boxes, RVR setups, and attenuators for precise wireless validation.",
    tech: ["RF", "RVR", "Shield Box", "WLAN"],
    problem: "Inconsistent RF environments led to non-reproducible test results and missed sensitivity issues.",
    solution: "Set up isolated RF chambers with programmable attenuators for precise Rate vs Range (RVR) testing across all frequency bands.",
    impact: "Achieved 99% test reproducibility and caught 25+ RF sensitivity regressions across chipset generations.",
    hasDemo: true,
    demoType: "rvr-test",
    metrics: [
      { value: "99%", label: "Reproducibility" },
      { value: "25+", label: "Regressions Caught" },
      { value: "6", label: "RF Chambers" },
      { value: "All", label: "Bands Covered" }
    ]
  },
  {
    title: "WLAN Sanity Automation Framework",
    period: "2015-2016",
    summary: "Built comprehensive Perl automation for WLAN sanity testing including throughput modes, stability checks, and regression testing.",
    tech: ["Perl", "WLAN", "Automation", "802.11"],
    problem: "Manual WLAN testing was time-consuming and error-prone, causing delays in chipset release cycles.",
    solution: "Developed a Perl-based automation framework handling sanity testing across multiple throughput modes with intelligent retry logic and detailed reporting.",
    impact: "Reduced test cycle time by 60% and improved test coverage by 3x across Beeliner, Dakota, and ath10k platforms.",
    flow: ["Test Config", "Device Setup", "Execute Tests", "Analyze Results", "Generate Report"]
  },
  {
    title: "Wi-Fi Sniffer & Packet Analysis",
    period: "2016-2018",
    summary: "Expert-level debugging using Wi-Fi sniffer captures for packet-level analysis of complex connectivity issues.",
    tech: ["Sniffer", "802.11", "Debugging", "WLAN"],
    problem: "Complex roaming and handoff issues were difficult to diagnose without deep packet inspection.",
    solution: "Implemented systematic sniffer capture workflows with automated packet analysis scripts for fast root cause identification.",
    impact: "Reduced average debug time from 2 days to 4 hours for complex connectivity issues.",
    flow: ["Capture Setup", "Issue Reproduce", "Packet Analysis", "Root Cause", "Fix Verify"]
  },
  {
    title: "Chipset Bring-up to Release (Dakota)",
    period: "2017-2018",
    summary: "Owned complete validation lifecycle from prototype bring-up through production release for Dakota chipset platform.",
    tech: ["Chipsets", "Sanity", "Automation", "WLAN"],
    problem: "New chipset platforms required coordinated validation across multiple teams with tight deadlines.",
    solution: "Led end-to-end validation including test plan development, automation creation, and cross-functional coordination.",
    impact: "Delivered Dakota platform on schedule with zero critical escapes, earning multiple appreciation certificates.",
    flow: ["Bring-up", "Feature Val", "Stability", "Perf Test", "Release Sign-off"]
  },
  {
    title: "Alexa Wi-Fi Stress Testing",
    period: "2017-2018",
    summary: "Specialized stress testing for Amazon Alexa integration ensuring reliable voice commands over Wi-Fi.",
    tech: ["WLAN", "SNS", "Automation", "Sanity"],
    problem: "Voice assistant reliability depended on consistent low-latency Wi-Fi connectivity under various conditions.",
    solution: "Developed targeted stress scenarios simulating real home environments with network congestion and interference.",
    impact: "Validated 99.5% voice command reliability under stress, contributing to successful Alexa integration.",
    flow: ["Network Stress", "Voice Commands", "Latency Check", "Reliability Score"]
  },
  {
    title: "Jira Automation & Issue Analytics",
    period: "2016-2018",
    summary: "Automated Jira issue analysis and reporting to accelerate bug triage and track quality metrics.",
    tech: ["Jira", "Automation", "Python", "Perl"],
    problem: "Manual Jira tracking was inefficient and quality trends were difficult to visualize.",
    solution: "Built automated scripts for issue categorization, duplicate detection, and trend visualization dashboards.",
    impact: "Reduced triage time by 50% and provided real-time quality dashboards for leadership visibility.",
    flow: ["Issue Scan", "Auto-Categorize", "Duplicate Check", "Dashboard Update"]
  }
];

const amazonProjects = [
  {
    title: "OTA CLI Migration (AWS)",
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
    flow: ["Test Failure", "Auto-Capture", "Jira Create", "Link & Notify"]
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
  const [activeTab, setActiveTab] = useState("qualcomm");

  const projects = activeTab === "qualcomm" ? qualcommProjects : amazonProjects;

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
                  value="qualcomm"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white px-6 py-2"
                >
                  Qualcomm (2015-2018)
                </TabsTrigger>
                <TabsTrigger
                  value="amazon"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-2"
                >
                  Amazon (2020-2025)
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