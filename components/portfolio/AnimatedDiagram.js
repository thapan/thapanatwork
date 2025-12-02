import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database, Brain, ArrowRight, CheckCircle, AlertTriangle,
  Cloud, Server, Smartphone, RefreshCw, Upload, Download,
  Wifi, Radio, BarChart3, Zap, Target, TrendingUp,
  GitBranch, TestTube, Bug, Shield
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
        <span className="text-blue-300 font-semibold text-sm">OTA CLI Migration (AWS)</span>
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

// Export all demos
export { MLPrioritizationDemo, OTAMigrationDemo, StressTestDemo, RVRTestDemo };

export default function AnimatedDiagram({ type }) {
  switch (type) {
    case 'ml-prioritization':
      return <MLPrioritizationDemo />;
    case 'ota-migration':
      return <OTAMigrationDemo />;
    case 'stress-test':
      return <StressTestDemo />;
    case 'rvr-test':
      return <RVRTestDemo />;
    default:
      return null;
  }
}