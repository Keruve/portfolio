'use client';

import { useState, useMemo } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import FilterBar, { FilterState } from '@/components/projects/FilterBar';
import { Project, ProjectType, ProjectVisibility } from '@/types';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';
import Stagger, { StaggerItem } from '@/components/animations/Stagger';
import Parallax from '@/components/animations/Parallax';
import { getProjects, getAllTechnologies, getAllSkillNames } from '@/lib/data';

// Get real projects data
const allProjects: Project[] = getProjects();

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  const [activeFilters, setActiveFilters] = useState<FilterState>({ types: [], technologies: [], skills: [], visibility: [] });

  // Extract unique values for filters
  const allTechnologies = getAllTechnologies();
  const allSkills = getAllSkillNames();

  // Calculate stats
  const stats = useMemo(() => {
    const softwareCount = allProjects.filter(p => p.type === 'software').length;
    const designCount = allProjects.filter(p => p.type === '3d').length;
    const hybridCount = allProjects.filter(p => p.type === 'hybrid').length;
    const techCount = allTechnologies.length;
    
    return {
      total: allProjects.length,
      software: softwareCount,
      design: designCount,
      hybrid: hybridCount,
      technologies: techCount
    };
  }, []);

  const handleFilterChange = (filters: FilterState) => {
    setActiveFilters(filters);
    let filtered = allProjects;

    // Filter by type
    if (filters.types.length > 0) {
      filtered = filtered.filter(p => filters.types.includes(p.type));
    }

    // Filter by visibility
    if (filters.visibility.length > 0) {
      filtered = filtered.filter(p => filters.visibility.includes(p.visibility));
    }

    // Filter by technologies
    if (filters.technologies.length > 0) {
      filtered = filtered.filter(p => 
        filters.technologies.some(tech => p.technologies.includes(tech))
      );
    }

    // Filter by skills
    if (filters.skills.length > 0) {
      filtered = filtered.filter(p => 
        filters.skills.some(skill => p.skills.includes(skill))
      );
    }

    setFilteredProjects(filtered);
  };

  const resetFilters = () => {
    const emptyFilters = { types: [], technologies: [], skills: [], visibility: [] };
    setActiveFilters(emptyFilters);
    handleFilterChange(emptyFilters);
  };

  const activeFilterCount = activeFilters.types.length + activeFilters.technologies.length + 
                           activeFilters.skills.length + activeFilters.visibility.length;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Multi-Layer Background System */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zen-50/30 to-white dark:from-zen-900 dark:via-black/30 dark:to-zen-900" />
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]" 
             style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* Animated Background Orbs */}
      <Parallax speed={-0.3}>
        <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl animate-float" />
      </Parallax>
      <Parallax speed={0.2}>
        <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-accent-500/10 via-accent-600/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </Parallax>
      <Parallax speed={-0.15}>
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/10 via-purple-600/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </Parallax>

      <div className="container mx-auto px-6 relative z-10 py-24 md:py-32">
        {/* Hero Header */}
        <div className="mb-20">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-accent-500 to-accent-600" />
                <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-[0.2em]">
                  Portfolio
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight leading-[0.95]">
                <span className="text-zen-900 dark:text-zen-50">All</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-blue-600 to-purple-600">
                  Projects
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zen-600 dark:text-zen-300 font-light leading-relaxed max-w-2xl">
                Explore the complete collection of{' '}
                <span className="text-zen-900 dark:text-zen-50 font-medium">software engineering</span> and{' '}
                <span className="text-zen-900 dark:text-zen-50 font-medium">3D design</span> work
              </p>
            </div>
          </FadeIn>

          {/* Stats Grid */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-4xl">
              <div className="p-4 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-xl border border-zen-200/50 dark:border-zen-700/50">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-600 to-accent-500 mb-1">
                  {stats.total}
                </div>
                <div className="text-xs text-zen-600 dark:text-zen-400 font-medium uppercase tracking-wider">
                  Total
                </div>
              </div>
              
              <div className="p-4 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-xl border border-zen-200/50 dark:border-zen-700/50">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-500 mb-1">
                  {stats.software}
                </div>
                <div className="text-xs text-zen-600 dark:text-zen-400 font-medium uppercase tracking-wider">
                  Software
                </div>
              </div>
              
              <div className="p-4 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-xl border border-zen-200/50 dark:border-zen-700/50">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-600 to-orange-600 mb-1">
                  {stats.design}
                </div>
                <div className="text-xs text-zen-600 dark:text-zen-400 font-medium uppercase tracking-wider">
                  3D Design
                </div>
              </div>
              
              <div className="p-4 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-xl border border-zen-200/50 dark:border-zen-700/50">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-purple-500 mb-1">
                  {stats.hybrid}
                </div>
                <div className="text-xs text-zen-600 dark:text-zen-400 font-medium uppercase tracking-wider">
                  Hybrid
                </div>
              </div>
              
              <div className="p-4 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-xl border border-zen-200/50 dark:border-zen-700/50">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-600 mb-1">
                  {stats.technologies}
                </div>
                <div className="text-xs text-zen-600 dark:text-zen-400 font-medium uppercase tracking-wider">
                  Tech Stack
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Filters Sidebar - Enhanced */}
          <SlideIn direction="left" className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              {/* Active Filters Counter */}
              {activeFilterCount > 0 && (
                <FadeIn>
                  <div className="p-4 bg-accent-100 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-800 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-accent-900 dark:text-accent-100">
                        {activeFilterCount} Filter{activeFilterCount !== 1 ? 's' : ''} Active
                      </span>
                      <button
                        onClick={resetFilters}
                        className="text-xs font-mono text-accent-700 dark:text-accent-300 hover:text-accent-900 dark:hover:text-accent-100 uppercase tracking-wider transition-colors"
                      >
                        Clear All
                      </button>
                    </div>
                    <div className="text-xs text-accent-700 dark:text-accent-300">
                      Showing {filteredProjects.length} of {stats.total} projects
                    </div>
                  </div>
                </FadeIn>
              )}

              {/* Filter Bar */}
              <FilterBar
                onFilterChange={handleFilterChange}
                availableTechnologies={allTechnologies}
                availableSkills={allSkills}
              />
            </div>
          </SlideIn>

          {/* Projects Grid */}
          <div className="lg:col-span-9">
            {filteredProjects.length > 0 ? (
              <>
                {/* Results Header */}
                <FadeIn className="mb-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <h2 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50">
                        {activeFilterCount > 0 ? 'Filtered Results' : 'All Projects'}
                      </h2>
                      <p className="text-sm text-zen-600 dark:text-zen-400 mt-1">
                        {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
                      </p>
                    </div>
                  </div>
                </FadeIn>

                {/* Projects Grid */}
                <Stagger staggerDelay={0.08}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                      <StaggerItem key={project.id}>
                        <ProjectCard project={project} />
                      </StaggerItem>
                    ))}
                  </div>
                </Stagger>
              </>
            ) : (
              /* Empty State - Enhanced */
              <FadeIn>
                <div className="text-center py-20">
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-blue-500/20 blur-3xl" />
                    <div className="relative w-24 h-24 mx-auto bg-zen-100 dark:bg-zen-800 rounded-2xl flex items-center justify-center">
                      <svg className="w-12 h-12 text-zen-400 dark:text-zen-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50 mb-4">
                    No Projects Found
                  </h3>
                  <p className="text-lg text-zen-600 dark:text-zen-400 mb-8 max-w-md mx-auto">
                    No projects match your current filters. Try adjusting your search criteria.
                  </p>
                  
                  <button
                    onClick={resetFilters}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/50"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Reset All Filters</span>
                  </button>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
