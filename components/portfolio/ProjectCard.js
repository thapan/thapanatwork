import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, Zap, TrendingUp, ArrowRight, Play } from 'lucide-react';
import TechBadge from './TechBadge';
import AnimatedDiagram from './AnimatedDiagram';

export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500
          bg-gradient-to-br from-gray-900/80 to-gray-800/40
          border border-gray-700/50 hover:border-purple-500/50
          backdrop-blur-xl
          ${isExpanded ? 'shadow-[0_0_60px_rgba(139,92,246,0.15)]' : 'hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]'}
        `}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                  {project.period}
                </span>
                {project.hasDemo && (
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                    <Play className="w-3 h-3" />
                    Interactive Demo
                  </span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                {project.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-full bg-gray-800/50"
            >
              <ChevronDown className="w-5 h-5 text-purple-400" />
            </motion.div>
          </div>

          {/* Summary */}
          <p className="text-gray-400 mb-4 leading-relaxed">
            {project.summary}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <TechBadge key={tech} tech={tech} delay={i * 0.05} />
            ))}
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-gray-700/50 space-y-6">

                  {/* Interactive Demo Section */}
                  {project.demoType && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Play className="w-4 h-4 text-emerald-400" />
                        <h4 className="text-sm font-semibold text-emerald-400">Live Visualization</h4>
                      </div>
                      <AnimatedDiagram type={project.demoType} />
                    </motion.div>
                  )}

                  {/* Problem */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-1">The Challenge</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-yellow-400 mb-1">The Solution</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-1">The Impact</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  {/* Flow Diagram (for projects without interactive demo) */}
                  {project.flow && !project.demoType && (
                    <div className="mt-6 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <h4 className="text-sm font-semibold text-purple-400 mb-4">Process Flow</h4>
                      <div className="flex flex-wrap items-center justify-center gap-2">
                        {project.flow.map((step, i) => (
                          <React.Fragment key={i}>
                            <div className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">
                              {step}
                            </div>
                            {i < project.flow.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-purple-500/50" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Metrics (for projects with demos) */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                      {project.metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="p-3 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 text-center"
                        >
                          <div className="text-xl font-bold text-purple-400">{metric.value}</div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}