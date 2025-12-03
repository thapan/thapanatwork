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
              {project.latest && (
                <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-1 rounded">
                  Latest
                </span>
              )}
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

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {project.highlights.map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-200 text-xs font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          )}

          {/* Problem / Solution / Impact preview */}
          {(project.problem || project.solution || project.impact) && (
            <div className="mb-4 grid gap-3 md:grid-cols-3">
              {project.problem && (
                <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                  <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-red-300">
                    <Target className="w-4 h-4" />
                    <span>Problem</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                  <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-yellow-200">
                    <Zap className="w-4 h-4" />
                    <span>Solution</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{project.solution}</p>
                </div>
              )}
              {project.impact && (
                <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-green-200">
                    <TrendingUp className="w-4 h-4" />
                    <span>Impact</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{project.impact}</p>
                </div>
              )}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-100 mb-4"
            >
              <span>View product</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          )}

          {project.imageUrl && (
            <div className="mb-4 rounded-xl overflow-hidden border border-gray-800/70 bg-gray-900/60">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-contain p-4"
              />
            </div>
          )}

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
                  {/* Flow / Checklist */}
                  {project.flow && !project.demoType && (
                    <div className="mt-6 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <h4 className="text-sm font-semibold text-purple-400 mb-4">
                        {project.listStyle === "ordered" ? "Scope" : "Process Flow"}
                      </h4>
                      {project.listStyle === "ordered" ? (
                        <ol className="space-y-2 list-decimal list-inside text-sm text-gray-300">
                          {project.flow.map((step, i) => (
                            <li key={i} className="pl-1">{step}</li>
                          ))}
                        </ol>
                      ) : (
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
                      )}
                    </div>
                  )}

                  {/* Detailed items */}
                  {project.details && (
                    <div className="mt-6 space-y-4">
                      {project.details.map((item, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50"
                        >
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h5 className="text-sm font-semibold text-white">
                              {item.title}
                            </h5>
                            {item.tech && (
                              <div className="flex flex-wrap gap-1 justify-end">
                                {item.tech.map((t) => (
                                  <TechBadge key={t} tech={t} delay={0} />
                                ))}
                              </div>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                          {item.flow && (
                            <ul className="list-disc list-inside space-y-1 text-xs text-gray-400">
                              {item.flow.map((step, idx) => (
                                <li key={idx}>{step}</li>
                              ))}
                            </ul>
                          )}
                          {item.demoType && (
                            <div className="mt-3">
                              <AnimatedDiagram type={item.demoType} />
                            </div>
                          )}
                        </div>
                      ))}
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
