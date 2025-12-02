import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, FileText, Send } from 'lucide-react';

export default function ContactSection() {
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
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-xl"
          >
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800/50 px-8 py-6 text-lg rounded-xl"
          >
            <a href="#" download>
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
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