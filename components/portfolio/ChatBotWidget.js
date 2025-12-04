import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Bot } from 'lucide-react';

const lenses = [
  { label: "Leadership", key: "leadership" },
  { label: "Launches", key: "launch" },
  { label: "Automation", key: "automation" },
  { label: "Wireless/RF", key: "wireless" },
  { label: "AI/ML", key: "ml" },
  { label: "Tools", key: "tools" },
  { label: "Lab Ops", key: "lab" },
];

const answers = {
  launch: {
    title: "Launch leadership (Fire TV)",
    summary:
      "Connectivity/QA lead for Fire TV devices: Wi‑Fi/BT/BLE/CoEx readiness, OOBE/FFS, Live TV, QA gates, launch rooms, and zero critical escapes.",
    methods: ["Launch rooms & readiness gates", "QA bug bars", "Connectivity sign-off (Wi‑Fi/BT/BLE/CoEx)", "OOBE/FFS & Live TV validation"],
    metrics: ["Zero critical escapes", "Multiple 1P Fire TV launches"],
    links: ["Projects → FTV Launch Leadership"],
    deepDive: [
      "Ran launch execution: QA gates, bug bars, go/no-go calls, and stakeholder alignment across PM/T‑PM/Eng.",
      "Connectivity readiness: Wi‑Fi/BT/BLE/CoEx plans, OOBE/FFS flows, Live TV checks, and field readiness.",
      "Risk management with launch-room runbooks, incident response, and readiness dashboards."
    ]
  },
  automation: {
    title: "Automation & QA strategy",
    summary:
      "Automation-first QA: sanity/stress suites, router/remote rigs, CI with intelligent retries, and framework hardening to triple coverage and cut cycle time ~60%.",
    methods: ["Sanity/stress suites", "Router/remote/device rigs", "CI (Jenkins) with smart retries", "Framework hardening & consumption"],
    metrics: ["~60% cycle-time reduction", "3× effective coverage uplift"],
    links: ["Projects → Automation & ML Prioritization", "Projects → Automation & Tooling"],
    deepDive: [
      "Expanded sanity/stress automation with stability/throughput coverage for connected devices.",
      "Intelligent retries and structured reporting to reduce flakiness and accelerate triage.",
      "Hardened APIs and CI adoption to make frameworks widely consumable across teams."
    ]
  },
  wireless: {
    title: "Wireless / RF expertise",
    summary:
      "Wireless/RF validation: shield-box + attenuator RVR setups, packet capture/playback, roaming/sensitivity debug, dual-client throughput/stability with ~99% reproducibility.",
    methods: ["Shield-box + attenuator RVR", "Packet capture/playback", "Roaming & sensitivity debug", "Dual-client throughput/stability"],
    metrics: ["~99% reproducibility", "25+ RF regressions caught early"],
    links: ["Projects → Wireless Debug & RF Analysis", "Projects → Stress & Reliability"],
    deepDive: [
      "Controlled RF environments (shield boxes, programmable attenuators) for RVR/throughput sweeps.",
      "Standardized sniffer capture/playback with automated packet analysis for roaming/handoff debug.",
      "Dual-client sanity and stress benches covering modes, security, throughput, and stability."
    ]
  },
  ml: {
    title: "AI/ML test prioritization",
    summary:
      "Supervised ranking using crash history + code deltas to catch ~85% of crash issues in the first 20% of runs; paired with expanded WLAN sanity automation.",
    methods: ["Crash-history + code-delta features", "Supervised ranking model", "WLAN sanity expansion"],
    metrics: ["~85% crash issues found in first 20%", "60% cycle-time reduction with automation"],
    links: ["Projects → Automation & ML Prioritization"],
    deepDive: [
      "Feature-engineered crash data and code-change signals to predict crash-prone tests.",
      "Ranked execution order for early risk surfacing; integrated with CI for fast feedback.",
      "Expanded WLAN sanity to increase coverage while the model front-loads risk."
    ]
  },
  lab: {
    title: "Lab ops & infrastructure",
    summary:
      "Lab/infra owner: 150+ device stress environments, RF chambers, mesh/interop labs, PLC testing, and long-duration voice/Wi‑Fi reliability automation.",
    methods: ["Device farms (150+)", "RF chambers + shield boxes", "Mesh/interop labs", "Voice/Wi‑Fi long-run automation"],
    metrics: ["99.9% lab uptime targets", "Customer-grade stress scenarios"],
    links: ["Projects → Stress & Reliability", "Projects → Lab Ops & Arlington"],
    deepDive: [
      "Built/maintained large device farms with orchestrated connect/disconnect and throughput/stability cycles.",
      "RF chambers and attenuator-driven setups for controlled RVR and roaming scenarios.",
      "Mesh/interop and PLC coverage with noise simulation; long-duration voice/Wi‑Fi reliability loops."
    ]
  },
  leadership: {
    title: "Leadership & coaching",
    summary:
      "Program QA leadership, exec-ready status/bug bars/readiness gates, and mentoring SDET/SDE partners on frameworks and quality bars.",
    methods: ["Bug bars & readiness gates", "Exec-ready status", "Mentoring SDET/SDE partners"],
    metrics: ["Multiple launches with zero critical escapes"],
    links: ["Projects → Launch Leadership", "Projects → Automation & Tooling"],
    deepDive: [
      "Ran QA governance: bug bars, readiness gates, risk calls, and stakeholder alignment.",
      "Mentored SDET/SDE partners on framework design, test architecture, and quality metrics.",
      "Communicated exec-ready updates with clear risk and mitigation narratives."
    ]
  },
  tools: {
    title: "Tools & tech stack",
    summary:
      "Hands-on stack: Amazon Q, Bedrock, Python, Bash; Selenium/Appium; AWS (IAM, Lambda, Step Functions, EC2, S3); REST/CLI tooling; Jenkins/CI; Jira; Wireshark; IxChariot; shield-box/attenuator rigs; SQL/analytics.",
    methods: ["Python/Bash automation", "Selenium/Appium UI automation", "AWS (Lambda/Step Functions/EC2)", "Packet tools (Wireshark/Omnipeek)", "IxLoad/IxChariot"],
    metrics: ["Stack used across launch, automation, wireless, and lab ops"],
    links: ["Projects → Wireless Debug & RF Analysis", "Projects → Automation & Tooling", "Projects → Stress & Reliability"],
    deepDive: [
      "Automation/tooling across Python/Perl/Bash with REST/CLI interfaces and CI integration (Jenkins).",
      "UI automation with Selenium/Appium; packet analysis with Wireshark/Omnipeek; performance with IxLoad/IxChariot.",
      "Cloud and infra: AWS (Lambda/Step Functions/EC2), Docker, SQL/analytics; RF lab tooling (shield boxes, attenuators)."
    ]
  }
};

export default function ChatBotWidget() {
  const [open, setOpen] = useState(false);
  const [activeLens, setActiveLens] = useState("launch");

  const activeAnswer = answers[activeLens];

  const panelClasses =
    "fixed bottom-24 right-4 sm:right-[136px] w-[360px] max-w-[90vw] max-h-[80vh] bg-white/95 border border-slate-200 rounded-2xl shadow-[0_25px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur-xl flex flex-col overflow-hidden z-50 text-[13px]";

  const AnswerBlock = () => (
    <div className="px-4 pb-3 flex-1 overflow-y-auto space-y-3 max-h-[55vh] min-h-[160px]">
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
        <div className="text-sm font-semibold text-slate-900 mb-1">{activeAnswer.title}</div>
        <div className="text-[13px] text-slate-700 leading-6">{activeAnswer.summary}</div>
      </div>
    </div>
  );

  return (
    <>
      {/* Chat Toggle */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-4 sm:right-[136px] z-40 inline-flex items-center gap-2 px-3.5 py-3 rounded-full bg-slate-900 text-white shadow-lg shadow-slate-500/40"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        aria-label="Open work navigator"
      >
        <Bot className="w-4 h-4" />
        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Work navigator</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={panelClasses}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 text-white flex items-center justify-center shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Work Navigator</div>
                  <div className="text-xs text-slate-500">Summaries + deep dives by lens</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 transition"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <AnswerBlock />

            {/* Lenses */}
            <div className="px-4 py-3 border-t border-slate-200 bg-white">
              <div className="grid grid-cols-2 gap-2">
                {lenses.map((lens) => (
                  <button
                    key={lens.key}
                    onClick={() => {
                      setActiveLens(lens.key);
                      setShowDeep(false);
                    }}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition shadow-sm ${
                      activeLens === lens.key
                        ? "bg-slate-900 text-white border-slate-800"
                        : "bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    {lens.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-slate-500">Choose a lens to see summary + deep dive.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
