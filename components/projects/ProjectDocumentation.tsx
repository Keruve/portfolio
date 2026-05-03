'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiCheck, FiBook } from 'react-icons/fi';
import { DocumentationSection } from '@/types';

interface ProjectDocumentationProps {
  sections: DocumentationSection[];
}

export default function ProjectDocumentation({ sections }: ProjectDocumentationProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="zen-card p-8 md:p-10"
        >
          {/* Section Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
              <FiBook className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50 mb-2">
                {section.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-zen dark:prose-invert max-w-none mb-6">
            <p className="text-zen-600 dark:text-zen-300 leading-relaxed">
              {section.content}
            </p>
          </div>

          {/* Code Block (if exists) */}
          {section.code && (
            <div className="relative group">
              <div className="absolute top-3 right-3 z-10">
                <button
                  onClick={() => copyToClipboard(section.code!, index)}
                  className="px-3 py-2 rounded-lg bg-zen-800/50 hover:bg-zen-800/70 backdrop-blur-sm text-white text-sm font-mono flex items-center gap-2 transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Copy code"
                >
                  {copiedIndex === index ? (
                    <>
                      <FiCheck className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <FiCopy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              
              <div className="bg-zen-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm text-zen-50 font-mono leading-relaxed">
                  <code>{section.code}</code>
                </pre>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
