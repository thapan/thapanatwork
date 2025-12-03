import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, Brain, ArrowRight, CheckCircle, AlertTriangle,
  Cloud, Server, Smartphone, RefreshCw, Upload, Download,
  Wifi, Radio, BarChart3, Zap, Target, TrendingUp,
  GitBranch, TestTube, Bug, Shield, Calendar, Clock, CheckCircle2,
  Play, Pause, MessageSquare, FileText, Link2
} from 'lucide-react';

// ML Test Prioritization Animation
function MLPrioritizationDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s + 1) % 5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const tests = [
    { id: 1, name: 'Auth Test', risk: 92, isCrash: true },
    { id: 2, name: 'Network Test', risk: 87, isCrash: true },
    { id: 3, name: 'UI Test', risk: 23, isCrash: false },
    { id: 4, name: 'Perf Test', risk: 78, isCrash: true },
    { id: 5, name: 'Unit Test', risk: 12, isCrash: false },
    { id: 6, name: 'Stress Test', risk: 95, isCrash: true },
  ];

  const sortedTests = [...tests].sort((a, b) => b.risk - a.risk);

  return (
    <div className="relative p-6 rounded-xl bg-gray-900/50 border border-purple-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-5 h-5 text-purple-400" />
        <span className="text-purple-300 font-semibold text-sm">ML Test Prioritization</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Historical Data */}
        <div className={`p-3 rounded-lg border transition-all duration-500 ${
          step >= 0 ? 'bg-blue-500/10 border-blue-500/30' : 'bg-gray-800/50 border-gray-700/50'
        }`}>
          <Database className={`w-6 h-6 mx-auto mb-2 transition-colors ${
            step >= 0 ? 'text-blue-400' : 'text-gray-600'
          }`} />
          <p className="text-xs text-center text-gray-400">Historical Data</p>
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2 space-y-1"
              >
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-1 bg-blue-500/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.random() * 60 + 40}%` }}
                      transition={{ delay: i * 0.1 }}
                      className="h-full bg-blue-400"
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ML Model */}
        <div className={`p-3 rounded-lg border transition-all duration-500 ${
          step >= 2 ? 'bg-purple-500/10 border-purple-500/30' : 'bg-gray-800/50 border-gray-700/50'
        }`}>
          <Brain className={`w-6 h-6 mx-auto mb-2 transition-colors ${
            step >= 2 ? 'text-purple-400 animate-pulse' : 'text-gray-600'
          }`} />
          <p className="text-xs text-center text-gray-400">ML Model</p>
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 flex justify-center"
              >
                <div className="relative w-8 h-8">
                  {[0, 1, 2].map(i => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-2 border-purple-400 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ delay: i * 0.3, duration: 1.5, repeat: Infinity }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Priority Queue */}
        <div className={`p-3 rounded-lg border transition-all duration-500 ${
          step >= 3 ? 'bg-green-500/10 border-green-500/30' : 'bg-gray-800/50 border-gray-700/50'
        }`}>
          <BarChart3 className={`w-6 h-6 mx-auto mb-2 transition-colors ${
            step >= 3 ? 'text-green-400' : 'text-gray-600'
          }`} />
          <p className="text-xs text-center text-gray-400">Priority Queue</p>
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 space-y-1"
              >
                {sortedTests.slice(0, 3).map((test, i) => (
                  <motion.div
                    key={test.id}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-center gap-1"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      test.isCrash ? 'bg-red-400' : 'bg-gray-500'
                    }`} />
                    <span className="text-[10px] text-gray-400 truncate flex-1">{test.name}</span>
                    <span className="text-[10px] text-green-400">{test.risk}%</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Result Banner */}
      <AnimatePresence>
        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
          >
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-medium">
                85% crashes detected in first 20% of tests
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress indicator */}
      <div className="flex justify-center gap-1 mt-4">
        {[0, 1, 2, 3, 4].map(i => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i <= step ? 'bg-purple-400' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Dual-Client Sanity Testbed Animation
function DualClientSanityDemo() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1400);
    return () => clearInterval(interval);
  }, []);

  const channels = ["2.4G", "5G"];
  const channel = channels[tick % channels.length];
  const throughputA = 120 + Math.sin(tick) * 15;
  const throughputB = 105 + Math.cos(tick * 1.2) * 18;
  const stability = 99.2 + Math.sin(tick * 0.5) * 0.3;

  return (
    <div className="p-6 rounded-xl bg-gray-900/50 border border-purple-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Wifi className="w-5 h-5 text-purple-400" />
        <span className="text-purple-200 font-semibold text-sm">Wi-Fi Dual-Client Sanity</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {["Client A", "Client B"].map((label, idx) => {
          const throughput = idx === 0 ? throughputA : throughputB;
          return (
            <motion.div
              key={label}
              animate={{ borderColor: 'rgba(168, 85, 247, 0.4)', scale: 1 + (tick % 2 === idx ? 0.02 : 0) }}
              className="p-3 rounded-lg bg-gray-800/60 border border-gray-700/60"
            >
              <div className="flex items-center justify-between text-xs text-gray-300 mb-2">
                <span>{label}</span>
                <span className="font-mono text-purple-300">{channel}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>Throughput</span>
                    <span className="text-emerald-300 font-mono">{throughput.toFixed(0)} Mbps</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-gray-700 overflow-hidden">
                    <motion.div
                      animate={{ width: `${Math.min(100, throughput / 2)}%` }}
                      className="h-full bg-gradient-to-r from-purple-400 to-emerald-400"
                    />
                  </div>
                </div>
                <div className="px-2 py-1 rounded bg-gray-900/70 border border-gray-700 text-[10px] text-gray-300">
                  Mode<br /><span className="font-mono text-purple-300">11n/ac</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-3 text-xs text-gray-300">
        <div className="p-3 rounded-lg bg-gray-800/60 border border-gray-700/60 text-center">
          <div className="text-[11px] text-gray-400 mb-1">Security</div>
          <div className="font-mono text-purple-200">WPA2/WPA3</div>
        </div>
        <div className="p-3 rounded-lg bg-gray-800/60 border border-gray-700/60 text-center">
          <div className="text-[11px] text-gray-400 mb-1">Stability</div>
          <div className="font-mono text-emerald-200">{stability.toFixed(1)}%</div>
        </div>
        <div className="p-3 rounded-lg bg-gray-800/60 border border-gray-700/60 text-center">
          <div className="text-[11px] text-gray-400 mb-1">Client Swap</div>
          <div className="font-mono text-blue-200">{channel}</div>
        </div>
      </div>
    </div>
  );
}

// Sniffer & Packet Analysis Animation
function SnifferAnalysisDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setStep(s => (s + 1) % 4), 1600);
    return () => clearInterval(interval);
  }, []);

  const colorMap = {
    blue: 'rgb(96, 165, 250)',
    purple: 'rgb(192, 132, 252)',
    amber: 'rgb(251, 191, 36)',
    emerald: 'rgb(52, 211, 153)',
  };

  const phases = [
    { label: "Capture", color: "blue", icon: <Wifi className="w-4 h-4" /> },
    { label: "Analyze", color: "purple", icon: <Brain className="w-4 h-4" /> },
    { label: "Root Cause", color: "amber", icon: <Target className="w-4 h-4" /> },
    { label: "Fix Verify", color: "emerald", icon: <CheckCircle2 className="w-4 h-4" /> },
  ];

  const packets = [
    { id: "Auth", status: "ok", jitter: 12 },
    { id: "Roam", status: "warn", jitter: 45 },
    { id: "Assoc", status: "ok", jitter: 18 },
    { id: "Data", status: "fail", jitter: 72 },
  ];

  const statusGradient = {
    ok: 'linear-gradient(90deg, #34d399 0%, #10b981 100%)',
    warn: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
    fail: 'linear-gradient(90deg, #f87171 0%, #ef4444 100%)',
  };

  return (
    <div className="p-6 rounded-xl bg-gray-900/50 border border-blue-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Radio className="w-5 h-5 text-blue-400" />
        <span className="text-blue-200 font-semibold text-sm">Wi-Fi Sniffer & Packet Analysis</span>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4 text-xs text-gray-300">
        {phases.map((p, idx) => (
          <motion.div
            key={p.label}
            animate={{
              borderColor: idx === step ? `rgba(59,130,246,0.6)` : 'rgba(75,85,99,0.5)',
              backgroundColor: idx === step ? 'rgba(59,130,246,0.08)' : 'rgba(31,41,55,0.6)'
            }}
            className="p-2 rounded-lg border"
          >
            <div className="flex items-center gap-1 mb-1 text-gray-200">
              <span style={{ color: colorMap[p.color] }}>{p.icon}</span>
              <span>{p.label}</span>
            </div>
            <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
              <motion.div
                animate={{ width: idx === step ? '100%' : '20%' }}
                transition={{ duration: 0.8 }}
                className="h-full"
                style={{
                  background: `linear-gradient(90deg, ${colorMap[p.color]} 0%, ${colorMap[p.color]} 100%)`
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-2">
        {packets.map((pkt, idx) => {
          const isActive = step === 1 && idx === step;
          const statusColor = pkt.status === "ok" ? "text-emerald-300" : pkt.status === "warn" ? "text-amber-300" : "text-red-300";
          return (
            <motion.div
              key={pkt.id}
              animate={{ borderColor: isActive ? 'rgba(168,85,247,0.5)' : 'rgba(75,85,99,0.6)' }}
              className="p-3 rounded-lg bg-gray-800/60 border"
            >
              <div className="flex items-center justify-between text-[11px] text-gray-300 mb-1">
                <span className="font-mono text-purple-200">{pkt.id}</span>
                <span className={statusColor}>{pkt.status.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-[10px] text-gray-400">
                    <span>Latency/Jitter</span>
                    <span className="font-mono text-gray-200">{pkt.jitter} ms</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-gray-700 overflow-hidden">
                    <motion.div
                      animate={{ width: `${Math.min(100, pkt.jitter)}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-full"
                      style={{ background: statusGradient[pkt.status] }}
                    />
                  </div>
                </div>
                <div className="px-2 py-1 rounded bg-gray-900/70 border border-gray-700 text-[10px] text-gray-300">
                  {step < 2 ? "Capture" : step === 2 ? "Trace" : "Fix"}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// OTA CLI Migration Animation
function OTAMigrationDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(s => (s + 1) % 6);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-6 rounded-xl bg-gray-900/50 border border-blue-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Cloud className="w-5 h-5 text-blue-400" />
        <span className="text-blue-300 font-semibold text-sm">OTA Cli Tool</span>
      </div>

      <div className="relative">
        {/* Architecture Diagram */}
        <div className="flex items-center justify-between gap-2">
          {/* Build Upload */}
          <motion.div
            animate={{
              scale: step === 0 ? 1.1 : 1,
              borderColor: step === 0 ? 'rgb(59, 130, 246)' : 'rgba(75, 85, 99, 0.5)'
            }}
            className="p-3 rounded-lg bg-gray-800/50 border-2 transition-all"
          >
            <Upload className={`w-5 h-5 mx-auto mb-1 ${step === 0 ? 'text-blue-400' : 'text-gray-500'}`} />
            <p className="text-[10px] text-center text-gray-400">Build</p>
          </motion.div>

          <motion.div
            animate={{ opacity: step >= 1 ? 1 : 0.3 }}
            className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 relative"
          >
            {step >= 1 && (
              <motion.div
                initial={{ left: '0%' }}
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute w-2 h-2 -top-0.5 bg-blue-400 rounded-full shadow-lg shadow-blue-500/50"
              />
            )}
          </motion.div>

          {/* AWS Cloud */}
          <motion.div
            animate={{
              scale: step === 1 || step === 2 ? 1.1 : 1,
              borderColor: step === 1 || step === 2 ? 'rgb(168, 85, 247)' : 'rgba(75, 85, 99, 0.5)'
            }}
            className="p-3 rounded-lg bg-gray-800/50 border-2 transition-all relative"
          >
            <Cloud className={`w-5 h-5 mx-auto mb-1 ${step === 1 || step === 2 ? 'text-purple-400' : 'text-gray-500'}`} />
            <p className="text-[10px] text-center text-gray-400">AWS</p>
            {step === 2 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center"
              >
                <CheckCircle className="w-2 h-2 text-white" />
              </motion.div>
            )}
          </motion.div>

          <motion.div
            animate={{ opacity: step >= 3 ? 1 : 0.3 }}
            className="flex-1 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 relative"
          >
            {step >= 3 && (
              <motion.div
                initial={{ left: '0%' }}
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute w-2 h-2 -top-0.5 bg-orange-400 rounded-full shadow-lg shadow-orange-500/50"
              />
            )}
          </motion.div>

          {/* Device Fleet */}
          <motion.div
            animate={{
              scale: step === 3 || step === 4 ? 1.1 : 1,
              borderColor: step === 3 || step === 4 ? 'rgb(249, 115, 22)' : 'rgba(75, 85, 99, 0.5)'
            }}
            className="p-3 rounded-lg bg-gray-800/50 border-2 transition-all"
          >
            <div className="flex justify-center gap-0.5 mb-1">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: step >= 3 ? 1 : 0.3,
                    y: step === 4 ? [0, -2, 0] : 0
                  }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Smartphone className={`w-3 h-3 ${step >= 3 ? 'text-orange-400' : 'text-gray-500'}`} />
                </motion.div>
              ))}
            </div>
            <p className="text-[10px] text-center text-gray-400">Fleet</p>
          </motion.div>
        </div>

        {/* Status Messages */}
        <div className="mt-4 h-16 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <StatusMessage key="build" icon={Upload} color="blue" text="Uploading build artifacts..." />
            )}
            {step === 1 && (
              <StatusMessage key="provision" icon={Server} color="purple" text="Provisioning cloud infrastructure..." />
            )}
            {step === 2 && (
              <StatusMessage key="deploy" icon={Cloud} color="purple" text="Deploying to AWS..." />
            )}
            {step === 3 && (
              <StatusMessage key="push" icon={Download} color="orange" text="Pushing OTA to device fleet..." />
            )}
            {step === 4 && (
              <StatusMessage key="validate" icon={RefreshCw} color="orange" text="Validating updates..." spinning />
            )}
            {step === 5 && (
              <StatusMessage key="success" icon={CheckCircle} color="green" text="10x scalability • 40% cost reduction" success />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// Auto Jira Plugin "interactive video"
function JiraDemo() {
  const scenes = [
    {
      title: "Failure captured from automation framework",
      subtitle: "Crash + log bundle streamed from automation framework run; stacktrace parsed in-line.",
      accent: "from-pink-500/20 via-purple-500/10 to-gray-900/60",
      chips: ["CrashLog.zip", "Stacktrace.txt", "Screenshot.png"],
      jira: { status: "Draft", priority: "P1", link: "AUT-482" }
    },
    {
      title: "Auto-create Jira issue",
      subtitle: "Fields mapped from signal: component, priority, labels, and owner suggestions.",
      accent: "from-purple-500/25 via-indigo-500/10 to-gray-900/60",
      chips: ["Component: Fire TV", "Priority: P1", "Labels: Automation"],
      jira: { status: "Created", priority: "P1", link: "AUT-482" }
    },
    {
      title: "Link & notify",
      subtitle: "Links test case + Automation framework evidence; posts deep-links to Slack/email watchers.",
      accent: "from-emerald-500/20 via-blue-500/10 to-gray-900/60",
      chips: ["Slack notify", "Watchers added", "TC: 1287"],
      jira: { status: "Linked", priority: "P1", link: "AUT-482" }
    }
  ];

  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setScene((prev) => (prev + 1) % scenes.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [playing, scenes.length]);

  const active = scenes[scene];

  return (
    <div className="relative p-6 rounded-xl bg-gray-900/50 border border-pink-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Bug className="w-5 h-5 text-pink-300" />
        <span className="text-pink-200 font-semibold text-sm">Auto Jira Plugin</span>
        <span className="text-[11px] text-gray-400 bg-gray-800/70 border border-gray-700/60 px-2 py-0.5 rounded">
          Interactive video walkthrough
        </span>
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-4">
        {/* Video window */}
        <div className="relative p-4 rounded-xl bg-gray-900/80 border border-pink-500/30 shadow-inner">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 rounded border border-white/5 bg-white/5 text-white/80 flex items-center gap-1">
                <Play className="w-3 h-3 text-emerald-300" />
                <span>Recorded run</span>
              </div>
              <span className="text-gray-500">automation framework → Jira sync</span>
            </div>
            <button
              onClick={() => setPlaying((p) => !p)}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-pink-500/10 border border-pink-500/40 text-pink-200 hover:border-pink-400/70"
            >
              {playing ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{playing ? 'Pause' : 'Play'}</span>
            </button>
          </div>

          <div className="mt-4 h-52 rounded-xl border border-pink-500/30 overflow-hidden bg-gray-800/60 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 p-4 bg-gradient-to-br ${active.accent}`}
              >
                <div className="flex items-center justify-between text-xs text-gray-200 mb-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-pink-200" />
                    <span className="font-semibold">{active.title}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-black/30 border border-white/10 text-[11px]">
                    Scene {scene + 1}/3
                  </span>
                </div>

                <p className="text-sm text-gray-200/90 mb-3">{active.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {active.chips.map((chip) => (
                    <motion.span
                      key={chip}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-[11px] px-2 py-1 rounded-lg bg-black/30 border border-white/10 text-gray-100"
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-gray-400">Evidence</div>
                    <div className="text-pink-100 font-semibold">Attachments synced</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-gray-400">Issue</div>
                    <div className="text-emerald-200 font-semibold">{active.jira.status}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-gray-400">Priority</div>
                    <div className="text-amber-200 font-semibold">{active.jira.priority}</div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/30">
                  <motion.div
                    key={`progress-${scene}`}
                    initial={{ width: '0%' }}
                    animate={{ width: `${((scene + 1) / scenes.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-emerald-400"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-3 flex items-center gap-2">
            {scenes.map((s, idx) => (
              <button
                key={s.title}
                onClick={() => {
                  setScene(idx);
                  setPlaying(false);
                }}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  idx === scene ? 'bg-pink-400' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Jump to ${s.title}`}
              />
            ))}
          </div>
        </div>

        {/* Jira details side panel */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-gray-800/60 border border-pink-500/30">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Link2 className="w-4 h-4 text-pink-200" />
                <span className="text-sm font-semibold text-white">Jira Ticket Snapshot</span>
              </div>
              <span className="text-xs text-gray-400">#{active.jira.link}</span>
            </div>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
                  {active.jira.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Priority</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-200">
                  {active.jira.priority}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Assignee</span>
                <span className="text-gray-100">Auto-suggested</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-gray-800/60 border border-purple-500/30">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-purple-200" />
              <span className="text-sm font-semibold text-white">Live Signals</span>
            </div>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center justify-between">
                <span>Attachments pushed</span>
                <span className="text-emerald-300 font-semibold">Yes</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Watchers notified</span>
                <span className="text-emerald-300 font-semibold">{scene >= 2 ? 'Slack + Email' : 'Queued'}</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Deep link to automation framework</span>
                <span className="text-emerald-300 font-semibold">Attached</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusMessage({ icon: Icon, color, text, spinning, success }) {
  const colors = {
    blue: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    orange: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    green: 'text-green-400 bg-green-500/10 border-green-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`absolute inset-0 flex items-center justify-center p-3 rounded-lg border ${colors[color]}`}
    >
      <Icon className={`w-4 h-4 mr-2 ${spinning ? 'animate-spin' : ''} ${success ? 'text-green-400' : ''}`} />
      <span className={`text-sm ${success ? 'font-semibold text-green-300' : 'text-gray-300'}`}>{text}</span>
    </motion.div>
  );
}

// Max Client Stress Test Animation
function StressTestDemo() {
  const [connectedDevices, setConnectedDevices] = useState(0);
  const [phase, setPhase] = useState('connecting');

  useEffect(() => {
    const interval = setInterval(() => {
      setConnectedDevices(prev => {
        if (prev >= 150) {
          setPhase('stable');
          return 150;
        }
        setPhase('connecting');
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 300);

    const resetInterval = setInterval(() => {
      setConnectedDevices(0);
      setPhase('connecting');
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(resetInterval);
    };
  }, []);

  return (
    <div className="relative p-6 rounded-xl bg-gray-900/50 border border-orange-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Wifi className="w-5 h-5 text-orange-400" />
        <span className="text-orange-300 font-semibold text-sm">Max-Client Stress Test</span>
      </div>

      {/* Device Grid */}
      <div className="grid grid-cols-10 gap-1 mb-4">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              backgroundColor: i < (connectedDevices / 1.5)
                ? phase === 'stable' ? 'rgb(34, 197, 94)' : 'rgb(251, 146, 60)'
                : 'rgb(31, 41, 55)',
              scale: i < (connectedDevices / 1.5) && i > (connectedDevices / 1.5) - 10 ? [1, 1.2, 1] : 1
            }}
            className="w-2 h-2 rounded-sm"
          />
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-2 rounded-lg bg-gray-800/50 text-center">
          <div className="text-xl font-bold text-orange-400">{Math.min(connectedDevices, 150)}</div>
          <div className="text-[10px] text-gray-500">Connected</div>
        </div>
        <div className="p-2 rounded-lg bg-gray-800/50 text-center">
          <div className="text-xl font-bold text-green-400">
            {phase === 'stable' ? '99.9%' : `${(95 + Math.random() * 4).toFixed(1)}%`}
          </div>
          <div className="text-[10px] text-gray-500">Uptime</div>
        </div>
        <div className="p-2 rounded-lg bg-gray-800/50 text-center">
          <div className="text-xl font-bold text-blue-400">
            {phase === 'stable' ? '0' : Math.floor(Math.random() * 3)}
          </div>
          <div className="text-[10px] text-gray-500">Drops</div>
        </div>
      </div>

      {/* Status */}
      <motion.div
        animate={{
          backgroundColor: phase === 'stable' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(251, 146, 60, 0.1)',
          borderColor: phase === 'stable' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(251, 146, 60, 0.3)'
        }}
        className="mt-3 p-2 rounded-lg border text-center"
      >
        <span className={`text-xs font-medium ${phase === 'stable' ? 'text-green-400' : 'text-orange-400'}`}>
          {phase === 'stable' ? '✓ Stress test passed - System stable' : '⟳ Connecting devices...'}
        </span>
      </motion.div>
    </div>
  );
}

// RF/RVR Testing Animation
function RVRTestDemo() {
  const [attenuation, setAttenuation] = useState(0);
  const [throughput, setThroughput] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setAttenuation(prev => {
        const next = prev >= 60 ? 0 : prev + 2;
        setThroughput(Math.max(5, 100 - next * 1.5 + Math.random() * 5));
        return next;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-6 rounded-xl bg-gray-900/50 border border-cyan-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Radio className="w-5 h-5 text-cyan-400" />
        <span className="text-cyan-300 font-semibold text-sm">RVR Testing (Rate vs Range)</span>
      </div>

      {/* Signal visualization */}
      <div className="flex items-end justify-between h-24 mb-4 px-2">
        {Array.from({ length: 20 }).map((_, i) => {
          const height = Math.max(10, 100 - (i * 5) + Math.sin(Date.now() / 200 + i) * 5);
          const isActive = i <= attenuation / 3;
          return (
            <motion.div
              key={i}
              animate={{ height: `${height}%` }}
              className={`w-2 rounded-t transition-colors ${
                isActive ? 'bg-cyan-400' : 'bg-gray-700'
              }`}
            />
          );
        })}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-gray-800/50">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Attenuation</span>
            <span className="text-cyan-400 font-mono text-sm">{attenuation} dB</span>
          </div>
          <div className="mt-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${(attenuation / 60) * 100}%` }}
              className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600"
            />
          </div>
        </div>
        <div className="p-3 rounded-lg bg-gray-800/50">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Throughput</span>
            <span className="text-green-400 font-mono text-sm">{throughput.toFixed(0)} Mbps</span>
          </div>
          <div className="mt-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${throughput}%` }}
              className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Lab Ops & Booking Animation
function LabOpsDemo() {
  const slots = [
    { time: "09:00", team: "Connectivity", room: "RF-1", status: "booked" },
    { time: "11:00", team: "Audio", room: "RF-2", status: "free" },
    { time: "13:00", team: "Apps", room: "RF-1", status: "free" },
    { time: "15:00", team: "Connectivity", room: "Shield", status: "booked" },
  ];
  const [activeSlot, setActiveSlot] = useState(0);
  const [rfReady, setRfReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlot((prev) => (prev + 1) % slots.length);
      setRfReady((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-6 rounded-xl bg-gray-900/50 border border-indigo-500/20">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-indigo-400" />
        <span className="text-indigo-300 font-semibold text-sm">RF Lab Booking & Readiness</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-gray-800/50 border border-indigo-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-indigo-300" />
            <span className="text-xs text-indigo-200 font-semibold">Schedule</span>
          </div>
          <div className="space-y-2">
            {slots.map((slot, idx) => {
              const isActive = idx === activeSlot;
              return (
                <motion.div
                  key={idx}
                  animate={{
                    borderColor: isActive ? 'rgba(99,102,241,0.6)' : 'rgba(75,85,99,0.5)',
                    backgroundColor: isActive ? 'rgba(99,102,241,0.12)' : 'rgba(31,41,55,0.5)'
                  }}
                  className="p-2 rounded-lg border text-xs flex justify-between items-center"
                >
                  <div className="flex flex-col">
                    <span className="text-gray-200 font-mono">{slot.time}</span>
                    <span className="text-gray-400">{slot.team}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-300">{slot.room}</div>
                    <div className={`text-[10px] ${slot.status === "booked" ? 'text-emerald-400' : 'text-gray-500'}`}>
                      {slot.status === "booked" ? 'Reserved' : 'Available'}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-gray-800/50 border border-indigo-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-emerald-300" />
            <span className="text-xs text-emerald-200 font-semibold">RF Readiness</span>
          </div>
          <div className="space-y-3">
            {[
              { label: "Shield room", ready: rfReady },
              { label: "Attenuators", ready: !rfReady },
              { label: "RVR rig", ready: rfReady },
              { label: "Perf/stress", ready: !rfReady },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                animate={{ opacity: item.ready ? 1 : 0.6 }}
                className="flex items-center justify-between text-xs text-gray-300"
              >
                <span>{item.label}</span>
                <span className={item.ready ? 'text-emerald-400' : 'text-amber-400'}>
                  {item.ready ? 'Ready' : 'Configuring'}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-3 p-2 rounded-lg border border-indigo-500/30 bg-indigo-500/5 text-center">
            <span className="text-xs text-indigo-200">
              Auto-conflict checks & status broadcast to teams
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Leadership: FTV Launch & Quality Assurance
function FTVLeadershipDemo() {
  const stages = [
    { label: "Plan", detail: "Coverage & owners", color: "from-blue-500 to-indigo-500" },
    { label: "Validate", detail: "Wi-Fi/BT/BLE/CoEx + OOBE/FFS", color: "from-purple-500 to-violet-500" },
    { label: "Live TV", detail: "Frank/Dektec E2E", color: "from-amber-500 to-orange-500" },
    { label: "Gate", detail: "KPIs & sign-off", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <div className="relative p-6 rounded-xl bg-gray-900/50 border border-purple-500/20">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle2 className="w-5 h-5 text-purple-300" />
        <span className="text-purple-200 font-semibold text-sm">FTV Launch Flow</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {stages.map((stage, idx) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-3 rounded-lg bg-gradient-to-br ${stage.color} text-white shadow-sm`}
          >
            <div className="text-sm font-semibold">{idx + 1}. {stage.label}</div>
            <div className="text-xs text-white/80">{stage.detail}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg bg-gray-800/60 border border-purple-500/30">
        <p className="text-xs text-purple-200 font-semibold mb-1">KPIs gated</p>
        <ul className="text-[11px] text-gray-300 space-y-1 list-disc list-inside">
          <li>Remote latency thresholds</li>
          <li>FFS/OOBE success rate</li>
          <li>Wi-Fi/BT/BLE/CoEx regressions = 0 blockers</li>
        </ul>
      </div>
    </div>
  );
}

// Automation: Remotes & Routers
function RemoteRouterDemo() {
  const routerProfiles = [
    { name: "TP-Link AX3000", mode: "5 GHz WPA2", status: "applied" },
    { name: "Netgear AC1900", mode: "2.4 GHz WPA3", status: "queued" },
    { name: "Asus AX6000", mode: "5 GHz Open", status: "ready" },
  ];
  const [profile, setProfile] = useState(0);
  const [latency, setLatency] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setProfile((p) => (p + 1) % routerProfiles.length);
      setLatency(30 + Math.random() * 40);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-6 rounded-xl bg-gray-900/50 border border-amber-500/20">
      <div className="flex items-center gap-2 mb-4">
        <RefreshCw className="w-5 h-5 text-amber-400" />
        <span className="text-amber-300 font-semibold text-sm">Automation: Remotes & Routers</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-lg bg-gray-800/50 border border-amber-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Server className="w-4 h-4 text-amber-300" />
            <span className="text-xs text-amber-100 font-semibold">Router Profiles</span>
          </div>
          <div className="space-y-2">
            {routerProfiles.map((r, idx) => {
              const active = idx === profile;
              return (
                <motion.div
                  key={r.name}
                  animate={{
                    borderColor: active ? 'rgba(251,191,36,0.6)' : 'rgba(75,85,99,0.6)',
                    backgroundColor: active ? 'rgba(251,191,36,0.12)' : 'rgba(31,41,55,0.6)'
                  }}
                  className="p-2 rounded-lg border text-xs flex justify-between items-center"
                >
                  <div className="flex flex-col">
                    <span className="text-gray-200">{r.name}</span>
                    <span className="text-gray-400">{r.mode}</span>
                  </div>
                  <span className={`text-[10px] ${r.status === "applied" ? "text-emerald-400" : "text-gray-500"}`}>
                    {r.status}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="p-3 rounded-lg bg-gray-800/50 border border-amber-500/30">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-emerald-300" />
            <span className="text-xs text-emerald-100 font-semibold">Remote Latency</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Latency</span>
                <span className="text-emerald-300 font-mono">{latency.toFixed(0)} ms</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-gray-700 overflow-hidden">
                <motion.div
                  animate={{ width: `${Math.min(100, latency)}%` }}
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                />
              </div>
              <p className="text-[10px] text-gray-500 mt-1">
                Arduino rig auto-runs per remote; gates releases on KPIs.
              </p>
            </div>
            <div className="p-2 rounded-lg bg-gray-900/60 border border-emerald-500/30 text-center">
              <Zap className="w-5 h-5 text-emerald-400 mx-auto" />
              <span className="text-[10px] text-emerald-200">Auto-run</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export all demos
export {
  MLPrioritizationDemo,
  OTAMigrationDemo,
  JiraDemo,
  StressTestDemo,
  RVRTestDemo,
  LabOpsDemo,
  RemoteRouterDemo,
  FTVLeadershipDemo,
  DualClientSanityDemo,
  SnifferAnalysisDemo
};

export default function AnimatedDiagram({ type }) {
  switch (type) {
    case 'ml-prioritization':
      return <MLPrioritizationDemo />;
    case 'ota-migration':
      return <OTAMigrationDemo />;
    case 'jira':
      return <JiraDemo />;
    case 'stress-test':
      return <StressTestDemo />;
    case 'rvr-test':
      return <RVRTestDemo />;
    case 'lab-ops':
      return <LabOpsDemo />;
    case 'remote-router':
      return <RemoteRouterDemo />;
    case 'ftv-leadership':
      return <FTVLeadershipDemo />;
    case 'dual-client':
      return <DualClientSanityDemo />;
    case 'sniffer-analysis':
      return <SnifferAnalysisDemo />;
    default:
      return null;
  }
}
