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
  title: "FTV Launch Leadership",
  summary:
    "Connectivity & launch execution lead for Fire TV 1P devices—driving readiness across Wi-Fi/BT/BLE/CoEx, OOBE/FFS, Live TV, QA gates, and global launch room alignment.",
  tech: ["Prime Video","Content","E2E","2P Apps","Wi-Fi", "BT", "BLE", "CoEx", "FFS", "Live TV", "Launch QA", "Program Mgmt"],
  links: [
    { label: "Smart TVs by Amazon", url: "https://www.amazon.com/firetv/smart-tvs-by-amazon?ref_=amzdv_esc_bn_clk_8521791011_mepage-ESC-3_d_smart-tvs-by_1" },
    { label: "Fire TV Stick 4K Max Review", url: "https://www.androidcentral.com/streaming-tv/amazon-fire-tv-stick-4k-max-2023-review" },
    { label: "Fire TV Hotspot (Mumbai)", url: "https://www.aboutamazon.in/news/devices/amazon-introduces-fire-tv-hotspot-an-all-inclusive-on-demand-video-streaming-service-for-tvs-in-mumbai" },
    { label: "Fire TV Cube (product)", url: "https://www.amazon.com/dp/B08XVYZ1Y5/ref=tsm_1_fb_lk" }
  ],
  problem:
  "E2E Fire TV product QA across OOBE, Launcher, Settings, Connectivity, Alexa, Prime Video, and 1P/2P apps—failures risked on-time launches.",
  solution:
    "Daily triage, regression gating, and launch room readiness across OOBE/Launcher/Settings, Alexa/Prime/1P/2P apps; AWS-backed environments and PMT/TPM alignment on customer KPIs.",
  impact:
    "5+ launches with zero critical escapes across connectivity/apps; OOBE/Live TV/Prime KPIs up; consistent global execution.",
  details: [
    {
      title: "Fire TV 1P NPI Launches",
      description:
        "Delivered Fire TV NPI launches (Cube, Stick, Smart TVs) by owning planning, validation, and release alignment with PMTs, TPMs, and engineering."
    },
    {
      title: "Hotspot Connectivity Validation",
      description:
        "Owned hotspot onboarding and compliance validation for pilot regions—reducing regression load by 40% and enabling deployment readiness."
    },
     {
      title: "ISP & VNO Integrations",
      description:
        "Implemented IPDR/VNO flows with ISPs to accelerate deployment readiness by 35% for hotspot programs."
    },
    {
      title: "FTV Connectivity Regression Testing and Launch Gating",
      description:
        "Validated Wi-Fi/BT/BLE/CoEx functionality across Fire TV devices for different FOS versions; led regression cycles and launch readiness gating."
    }
  ]
},
{
  title: "Automation & Tooling",
  summary:
    "Built and stabilized end-to-end automation for 1P Fire TV use cases; delivered tooling to drive consumption/utilization and faster issue closure.",
  
  tech: ["Automation", "AWS", "Design Docs", "Python", "CLI", "Jira", "Routers", "Arduino", "Amazon Q", "EC2", "Lambda"],

  problem:
    "1P Fire TV automation was under-utilized and flaky; manual router changes, OTA dial-up, and defect logging slowed sign-offs.",
  
  solution:
    "Stabilized core automation libraries and 1P end-to-end suites to lift consumption/utilization; built Auto Jira MMS for automated defect capture; delivered dial-up/OTA CLI tool to LTPMs; maintained router/remote rigs and self-healing prompts.",
  
  impact:
    "Higher automation consumption for 1P FTV, faster OTA/LTPM workflows, 70%+ reduction in manual defect work with Auto Jira, 30% faster triage, and 25% better lab utilization.",

  details: [
    {
      title: "Dial-up/OTA CLI Tool Migration",
      description:
        "Migrated OTA testing to AWS CLI with IAM roles—80% fewer Lambda calls, faster CI/CD, and scalable testing."
    },
     {
      title: "Auto Jira MMS Plugin",
      description:
        "AWS Lambda plugin to auto-create/update Jira defects from MMS/TestRail with 70%+ manual effort reduction."
    },
    {
      title: "1P FTV E2E Automation Stabilization",
      description:
        "Hardened core libraries and end-to-end use cases for 1P Fire TV; improved automation consumption and utilization across Smart TVs.",
    },
    {
      title: "Automation Consumption for 1P NPI FTV devices",
      description:
        "Scaled automation usage from 30%→90% by onboarding Smart TVs and stabilizing suites with global QA teams."
    },
    {
      title: "Self-Healing Test Execution Prompt",
      description:
        "Intelligent prompt to detect test context, execute suites, and auto-debug failures—cut triage by 30%."
    },
    {
      title: "FTV Hotspot ZTP Automation Framework",
      description:
        "Built automation for zero-touch provisioning (ZTP) hotspot flows across multiple ISPs and regions."
    },
    {
      title: "ConnQA Automation Framework",
      description:
        "Designed and maintained ConnQA automation for Wi-Fi/BLE validation across multiple Fire TV generations."
    },
    {
      title: "Router Automation",
      description:
        "Developed automated 3P router UI flows to replicate real-world network conditions."
    },
    {
      title: "Arduino KPI Test Rigs",
      description:
        "Created Arduino-driven KPI rigs to automate Wi-Fi/BLE performance measurement."
    },
    {
      title: "EC2-Hosted Lab Booking Tool",
      description:
        "Built Flask-based lab booking system on AWS EC2—automating scheduling workflows and increasing lab utilization by 25%."
    }
  ]
},
{
  title: "Lab Qwnership",
  summary:
    "Maintained RF labs, automation labs, and device infrastructure—ensuring stable, calibrated, and conflict-free test environments.",
  
  tech: ["RF", "RVR", "Perf", "Stress", "Lab Ops", "Device Mgmt", "Shield Rooms","Host management"],

  problem:
    "Shared labs and inconsistent environment setups created conflicts, instability, and delays in automation/testing throughput.",
  
  solution:
    "Managed shield rooms, RVR/perf rigs, interference scenarios, device setups, and lab health. Improved environment stability and scheduling reliability.",
  
  impact:
    "Higher lab throughput, consistent test environments, fewer run conflicts, and faster automation efficiency.",

  details: [
    {
      title: "Arlington Device Lab Stewardship",
      description:
        "Managed host/device setup, infra improvements, automation environment health, and device onboarding."
    },
    {
      title: "FTV Hotspot Infrastructure Lab",
      description:
        "Maintined Testhouses and lab environments for hotspot connectivity validation."
    },
    {
      title: "FTV Connectivity Lab",
      description:
        "Maintained RF chambers, RVR/perf rigs, and interference setups for connectivity validation."
    }
  ]
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
