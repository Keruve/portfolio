'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiClock, FiCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RoadmapPhase } from '@/types';

interface ProjectRoadmapProps {
  phases: RoadmapPhase[];
}

export default function ProjectRoadmap({ phases }: ProjectRoadmapProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % phases.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + phases.length) % phases.length);
  };

  const goToPhase = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const getStatusIcon = (status: RoadmapPhase['status']) => {
    switch (status) {
      case 'completed':
        return <FiCheck className="w-5 h-5" />;
      case 'in-progress':
        return <FiClock className="w-5 h-5" />;
      case 'planned':
        return <FiCircle className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: RoadmapPhase['status']) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-emerald-600';
      case 'in-progress':
        return 'from-blue-500 to-blue-600';
      case 'planned':
        return 'from-zen-400 to-zen-500';
    }
  };

  const getStatusTextColor = (status: RoadmapPhase['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 dark:text-green-400';
      case 'in-progress':
        return 'text-blue-600 dark:text-blue-400';
      case 'planned':
        return 'text-zen-600 dark:text-zen-400';
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="space-y-8">
      {/* Timeline Progress Bar */}
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          {phases.map((phase, index) => (
            <button
              key={phase.id}
              onClick={() => goToPhase(index)}
              className="group relative flex-1 focus:outline-none"
              aria-label={`Go to ${phase.title}`}
            >
              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="absolute top-6 left-1/2 right-0 h-0.5 bg-zen-200 dark:bg-zen-700 -z-10">
                  <div
                    className={`h-full transition-all duration-500 ${
                      index < activeIndex || phase.status === 'completed'
                        ? 'bg-gradient-to-r from-accent-500 to-blue-500 w-full'
                        : 'w-0'
                    }`}
                  />
                </div>
              )}

              {/* Phase Dot */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${
                      index === activeIndex
                        ? `bg-gradient-to-br ${getStatusColor(phase.status)} text-white scale-110 shadow-lg`
                        : phase.status === 'completed'
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white'
                        : 'bg-zen-200 dark:bg-zen-700 text-zen-600 dark:text-zen-400 group-hover:scale-105'
                    }
                  `}
                >
                  {getStatusIcon(phase.status)}
                </div>
                
                <span
                  className={`
                    mt-3 text-xs font-mono uppercase tracking-wider transition-colors
                    ${index === activeIndex ? 'text-zen-900 dark:text-zen-50 font-bold' : 'text-zen-600 dark:text-zen-400'}
                  `}
                >
                  Phase {index + 1}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Slider Content */}
      <div className="relative zen-card p-8 md:p-12 overflow-hidden min-h-[300px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zen-100 dark:bg-zen-800 rounded-full">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor(phases[activeIndex].status)}`} />
              <span className={`text-sm font-mono uppercase tracking-wider ${getStatusTextColor(phases[activeIndex].status)}`}>
                {phases[activeIndex].status.replace('-', ' ')}
              </span>
              {phases[activeIndex].date && (
                <>
                  <span className="text-zen-400">•</span>
                  <span className="text-sm text-zen-600 dark:text-zen-400">
                    {phases[activeIndex].date}
                  </span>
                </>
              )}
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-display font-bold text-zen-900 dark:text-zen-50">
              {phases[activeIndex].title}
            </h3>

            {/* Description */}
            <p className="text-lg text-zen-600 dark:text-zen-300 leading-relaxed max-w-2xl">
              {phases[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 right-8 flex items-center gap-2">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full bg-zen-200 dark:bg-zen-700 hover:bg-accent-500 dark:hover:bg-accent-500 text-zen-600 dark:text-zen-300 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Previous phase"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full bg-zen-200 dark:bg-zen-700 hover:bg-accent-500 dark:hover:bg-accent-500 text-zen-600 dark:text-zen-300 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Next phase"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Phase Counter */}
        <div className="absolute bottom-8 left-8 text-sm font-mono text-zen-500 dark:text-zen-400">
          {activeIndex + 1} / {phases.length}
        </div>
      </div>
    </div>
  );
}
