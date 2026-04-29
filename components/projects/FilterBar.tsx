'use client';

import { useState } from 'react';
import { ProjectType, ProjectVisibility } from '@/types';
import { FiCode, FiBox, FiZap, FiEye, FiEyeOff, FiLock, FiX, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  availableTechnologies: string[];
  availableSkills: string[];
}

export interface FilterState {
  types: ProjectType[];
  technologies: string[];
  skills: string[];
  visibility: ProjectVisibility[];
}

export default function FilterBar({ onFilterChange, availableTechnologies, availableSkills }: FilterBarProps) {
  const [filters, setFilters] = useState<FilterState>({
    types: [],
    technologies: [],
    skills: [],
    visibility: [],
  });
  
  const [isOpen, setIsOpen] = useState(false);

  const handleTypeToggle = (type: ProjectType) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type];
    
    const newFilters = { ...filters, types: newTypes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleTechToggle = (tech: string) => {
    const newTech = filters.technologies.includes(tech)
      ? filters.technologies.filter((t) => t !== tech)
      : [...filters.technologies, tech];
    
    const newFilters = { ...filters, technologies: newTech };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleVisibilityToggle = (vis: ProjectVisibility) => {
    const newVis = filters.visibility.includes(vis)
      ? filters.visibility.filter((v) => v !== vis)
      : [...filters.visibility, vis];
    
    const newFilters = { ...filters, visibility: newVis };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const emptyFilters: FilterState = {
      types: [],
      technologies: [],
      skills: [],
      visibility: [],
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const activeFiltersCount = 
    filters.types.length + 
    filters.technologies.length + 
    filters.skills.length + 
    filters.visibility.length;

  const typeIcons = {
    software: <FiCode size={16} />,
    '3d': <FiBox size={16} />,
    hybrid: <FiZap size={16} />,
  };

  const visibilityIcons = {
    public: <FiEye size={16} />,
    showcase: <FiEyeOff size={16} />,
    confidential: <FiLock size={16} />,
  };

  return (
    <div className="zen-card overflow-hidden">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full p-4 flex items-center justify-between text-left border-b border-zen-200 dark:border-zen-700"
      >
        <div>
          <h3 className="text-base font-display font-bold text-zen-900 dark:text-zen-50 uppercase tracking-wide">
            Filters
          </h3>
          {activeFiltersCount > 0 && (
            <span className="text-xs font-mono text-accent-600 dark:text-accent-400 mt-1 block">
              {activeFiltersCount} active
            </span>
          )}
        </div>
        <FiChevronDown 
          className={`h-5 w-5 text-zen-600 dark:text-zen-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {/* Desktop/Tablet Header (always visible) */}
      <div className="hidden lg:flex items-center justify-between p-8 pb-0">
        <div>
          <h3 className="text-lg font-display font-bold text-zen-900 dark:text-zen-50 uppercase tracking-wide">
            Filters
          </h3>
          {activeFiltersCount > 0 && (
            <span className="text-xs font-mono text-zen-500 dark:text-zen-400 mt-1 block">
              {activeFiltersCount} active
            </span>
          )}
        </div>
        <AnimatePresence>
          {activeFiltersCount > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={resetFilters}
              className="text-xs font-mono uppercase tracking-wider text-accent-600 dark:text-accent-400 hover:text-accent-500 transition-colors flex items-center gap-1.5"
            >
              <FiX size={14} />
              Reset
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      
      {/* Filter Content - Collapsible on mobile, always visible on desktop */}
      <div className={`
        lg:block overflow-hidden transition-all duration-300
        ${isOpen ? 'block' : 'hidden'}
      `}>
        <div className="p-4 lg:p-8 lg:pt-8 space-y-6 lg:space-y-8">
          {/* Mobile Reset Button */}
          {activeFiltersCount > 0 && (
            <button
              onClick={resetFilters}
              className="lg:hidden w-full p-3 bg-accent-100 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-800 rounded-lg text-sm font-mono text-accent-700 dark:text-accent-300 hover:text-accent-900 dark:hover:text-accent-100 uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <FiX size={14} />
              Clear All Filters
            </button>
          )}

      {/* Type Filter */}
      <div>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zen-500 dark:text-zen-400 mb-4">
          Project Type
        </h4>
        <div className="space-y-2">
          {(['software', '3d', 'hybrid'] as ProjectType[]).map((type) => (
            <motion.button
              key={type}
              onClick={() => handleTypeToggle(type)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                filters.types.includes(type)
                  ? 'bg-accent-500/10 border-2 border-accent-500/50 text-accent-600 dark:text-accent-400'
                  : 'bg-zen-50 dark:bg-zen-800 border-2 border-transparent text-zen-700 dark:text-zen-300 hover:border-zen-300 dark:hover:border-zen-700'
              }`}
            >
              <span className={filters.types.includes(type) ? 'text-accent-600 dark:text-accent-400' : 'text-zen-500'}>
                {typeIcons[type]}
              </span>
              <span className="text-sm font-medium capitalize">
                {type === '3d' ? '3D Design' : type}
              </span>
              {filters.types.includes(type) && (
                <span className="ml-auto w-2 h-2 rounded-full bg-accent-600 dark:bg-accent-400" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Visibility Filter */}
      <div>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zen-500 dark:text-zen-400 mb-4">
          Visibility
        </h4>
        <div className="space-y-2">
          {(['public', 'showcase', 'confidential'] as ProjectVisibility[]).map((vis) => (
            <motion.button
              key={vis}
              onClick={() => handleVisibilityToggle(vis)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                filters.visibility.includes(vis)
                  ? 'bg-accent-500/10 border-2 border-accent-500/50 text-accent-600 dark:text-accent-400'
                  : 'bg-zen-50 dark:bg-zen-800 border-2 border-transparent text-zen-700 dark:text-zen-300 hover:border-zen-300 dark:hover:border-zen-700'
              }`}
            >
              <span className={filters.visibility.includes(vis) ? 'text-accent-600 dark:text-accent-400' : 'text-zen-500'}>
                {visibilityIcons[vis]}
              </span>
              <span className="text-sm font-medium capitalize">
                {vis}
              </span>
              {filters.visibility.includes(vis) && (
                <span className="ml-auto w-2 h-2 rounded-full bg-accent-600 dark:bg-accent-400" />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Technologies Filter */}
      <div>
        <h4 className="text-xs font-mono uppercase tracking-wider text-zen-500 dark:text-zen-400 mb-4">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {availableTechnologies.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => handleTechToggle(tech)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-xs font-mono px-4 py-2 rounded-full transition-all border-2 ${
                filters.technologies.includes(tech)
                  ? 'bg-accent-600 dark:bg-accent-500 text-white border-accent-600 dark:border-accent-500 shadow-lg shadow-accent-500/20'
                  : 'bg-zen-50 dark:bg-zen-800 text-zen-600 dark:text-zen-400 border-zen-200 dark:border-zen-700 hover:border-accent-500/50'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
