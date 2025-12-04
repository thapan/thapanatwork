import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Mail, FileText, Send } from 'lucide-react';

const LinkedInIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    aria-label="LinkedIn"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.269 2.372 4.269 5.456v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ContactSection() {
  const resumeUrl = `${import.meta.env.BASE_URL}shubham_resume.pdf`;
  const [jdText, setJdText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeJd = () => {
    setLoading(true);
    const text = jdText.toLowerCase();
    const keywords = [
      // Core QA/automation
      "Automation", "framework", "python", "perl", "bash", "jenkins", "ci", "regression", "test plan", "test cases", "nightly",
      "selenium", "api", "ui automation", "api automation", "soapui", "playback", "streaming", "prime video",
      "ios", "android", "web", "living room", "fire tv", "mobile testing",
      // Wi-Fi / networking
      "wlan", "wifi", "wireless", "mesh", "gateway", "ethernet", "performance", "interop", "characterization",
      "rvr", "max client", "captures", "sniffer", "debug", "triage", "reproduce", "customer issues",
      // Protocols / stacks
      "11ax", "11be", "802.11", "ble", "bluetooth", "thread", "osi", "l2", "l3", "l7",
      // Tooling / infra
      "aws", "docker", "jira", "ota", "router", "lab", "testbed", "stress", "stability",
      // Domains
      "voice", "alexa", "ml", "data", "analytics", "real-time", "hw", "hardware", "sw", "software"
    ];
    const matched = keywords.filter(k => text.includes(k));
    const missing = keywords.filter(k => !text.includes(k));
    const score = Math.max(20, Math.min(100, Math.round((matched.length / keywords.length) * 100)));

    setAnalysis({
      score,
      matched,
      missing: missing.slice(0, 8),
      summary: `Approximate fit: ${score}% based on detected keywords. Prioritize matching must-haves: ${matched.slice(0, 4).join(', ') || 'add role keywords'}.`,
      atsResume: `PROFILE: QA/Automation lead with WLAN/Wi-Fi depth (mesh, gateways), performance/interop testbeds, and automation frameworks.\n` +
        `TOOLS: Python, Perl, Bash, Jenkins/CI, Jira, Wireshark/Omnipeek captures, Ixia IxLoad/IxChariot, RF attenuators/shield boxes, AWS, Docker.\n` +
        `HIGHLIGHTS: Fire TV connectivity sign-off; max-client/RVR/voice (Alexa) validations; nightly regression and performance suites; multi-client farm automation; ML crash predictor; dial-up/OTA CLI; Auto Jira.\n` +
        `EXPERIENCE: Qualcomm WLAN QA (chipset releases, stability, captures); Amazon Fire TV (launch leadership, automation, router UI tooling); CDAC ESD.\n` +
        `KEYWORDS MATCHED: ${matched.join(', ') || 'Add role-specific skills'}.`
    });
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-purple-400">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Interested in discussing quality engineering, automation strategies, or potential opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            <a href="mailto:shubhamthapan@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-xl"
          >
            <a href="https://www.linkedin.com/in/shubham-thapan" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-6 text-lg rounded-xl"
          >
            <a href={resumeUrl} download>
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </a>
          </Button>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
          </div>

          <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700/50">
            <Send className="w-4 h-4 text-purple-400" />
            <span className="text-gray-400">Open to new opportunities</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
