'use client';

import { Skill } from '@/types';
import FadeIn from '@/components/animations/FadeIn';
import Stagger, { StaggerItem } from '@/components/animations/Stagger';
import ScaleIn from '@/components/animations/ScaleIn';
import Parallax from '@/components/animations/Parallax';
import skillsData from '@/data/skills.json';

// Import skills from JSON
const skills: Skill[] = skillsData as Skill[];

const engineeringSkills = skills.filter(s => s.category === 'engineering');
const design3DSkills = skills.filter(s => s.category === 'design-3d');

const groupBySubcategory = (skills: Skill[]) => {
  return skills.reduce((acc, skill) => {
    if (!acc[skill.subcategory]) {
      acc[skill.subcategory] = [];
    }
    acc[skill.subcategory].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
};

export default function SkillsPage() {
  const engineeringGroups = groupBySubcategory(engineeringSkills);
  const design3DGroups = groupBySubcategory(design3DSkills);

  // Calculate stats
  const totalSkills = skills.length;
  const totalYearsExperience = Math.max(...skills.map(s => s.yearsExperience || 0));
  const expertSkills = skills.filter(s => s.level === 5).length;

  const getLevelLabel = (level: number) => {
    if (level === 5) return 'Expert';
    if (level === 4) return 'Advanced';
    if (level === 3) return 'Proficient';
    if (level === 2) return 'Intermediate';
    return 'Learning';
  };

  const getLevelColor = (level: number) => {
    if (level === 5) return 'from-accent-500 via-accent-600 to-orange-600';
    if (level === 4) return 'from-blue-500 via-blue-600 to-blue-700';
    if (level === 3) return 'from-purple-500 via-purple-600 to-purple-700';
    return 'from-zen-400 via-zen-500 to-zen-600';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Multi-Layer Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zen-50/50 to-white dark:from-zen-900 dark:via-black/50 dark:to-zen-900" />
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]" 
             style={{ backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)', backgroundSize: '50px 50px' }} />
      </div>

      {/* Animated Background Orbs */}
      <Parallax speed={-0.3}>
        <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-accent-500/10 via-accent-600/5 to-transparent rounded-full blur-3xl animate-float" />
      </Parallax>
      <Parallax speed={0.2}>
        <div className="absolute top-1/3 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </Parallax>
      <Parallax speed={-0.15}>
        <div className="absolute bottom-40 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 via-purple-600/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </Parallax>

      <div className="container mx-auto px-6 relative z-10 py-24 md:py-32">
        {/* Hero Header */}
        <div className="mb-20">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-accent-500 to-accent-600" />
                <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-[0.2em]">
                  Expertise
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-8 tracking-tight leading-[0.95]">
                <span className="text-zen-900 dark:text-zen-50">Technical</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-blue-600 to-purple-600">
                  Skills
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zen-600 dark:text-zen-300 font-light leading-relaxed max-w-2xl">
                A comprehensive toolkit spanning{' '}
                <span className="text-zen-900 dark:text-zen-50 font-medium">3D artistry</span> and{' '}
                <span className="text-zen-900 dark:text-zen-50 font-medium">software development</span>, 
                refined through continuous learning and real-world application
              </p>
            </div>
          </FadeIn>

          {/* Stats Grid */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-3xl">
              <div className="p-6 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-xl border border-zen-200/50 dark:border-zen-700/50">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-600 to-accent-500 mb-2">
                  {totalSkills}
                </div>
                <div className="text-sm text-zen-600 dark:text-zen-400 font-medium">
                  Total Skills
                </div>
              </div>
              
              <div className="p-6 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-xl border border-zen-200/50 dark:border-zen-700/50">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-500 mb-2">
                  {totalYearsExperience}+
                </div>
                <div className="text-sm text-zen-600 dark:text-zen-400 font-medium">
                  Years Experience
                </div>
              </div>
              
              <div className="p-6 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-xl border border-zen-200/50 dark:border-zen-700/50">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-purple-500 mb-2">
                  {expertSkills}
                </div>
                <div className="text-sm text-zen-600 dark:text-zen-400 font-medium">
                  Expert Level
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Skills Sections */}
        <div className="space-y-20">
          {/* 3D Design Skills - Primary */}
          <section>
            <FadeIn>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-orange-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50">
                      3D Design & Artistry
                    </h2>
                    <p className="text-zen-600 dark:text-zen-400 mt-2">
                      Core specialization • {design3DSkills.length} skills
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <Stagger staggerDelay={0.08}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(design3DGroups).map(([subcategory, groupSkills]) => (
                  <StaggerItem key={subcategory}>
                    <div className="group">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-accent-500/50 to-transparent" />
                        <h3 className="text-sm font-mono uppercase tracking-[0.15em] text-accent-600 dark:text-accent-400">
                          {subcategory}
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-accent-500/50 to-transparent" />
                      </div>
                      
                      <div className="space-y-4">
                        {groupSkills.map((skill) => (
                          <ScaleIn key={skill.id}>
                            <div className="relative group/card">
                              <div className={`absolute -inset-0.5 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-xl opacity-0 group-hover/card:opacity-20 blur transition-opacity duration-500`} />
                              
                              <div className="relative p-5 bg-white dark:bg-zen-800 rounded-xl border border-zen-200 dark:border-zen-700 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300">
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-lg text-zen-900 dark:text-zen-50 mb-1">
                                      {skill.name}
                                    </h4>
                                    <span className="text-xs font-mono text-zen-500 dark:text-zen-400">
                                      {getLevelLabel(skill.level)}
                                    </span>
                                  </div>
                                  
                                  {skill.yearsExperience && (
                                    <span className="text-xs font-mono px-2.5 py-1 bg-zen-100 dark:bg-zen-900 text-zen-600 dark:text-zen-400 rounded-lg border border-zen-200 dark:border-zen-800">
                                      {skill.yearsExperience}y
                                    </span>
                                  )}
                                </div>
                                
                                <div className="relative w-full bg-zen-100 dark:bg-zen-900 rounded-full h-2 overflow-hidden">
                                  <div
                                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-1000`}
                                    style={{ width: `${(skill.level / 5) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </ScaleIn>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </section>

          {/* Engineering Skills */}
          <section>
            <FadeIn>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50">
                      Software Engineering
                    </h2>
                    <p className="text-zen-600 dark:text-zen-400 mt-2">
                      Live coding capabilities • {engineeringSkills.length} skills
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <Stagger staggerDelay={0.08}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(engineeringGroups).map(([subcategory, groupSkills]) => (
                  <StaggerItem key={subcategory}>
                    <div className="group">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                        <h3 className="text-sm font-mono uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400">
                          {subcategory}
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-l from-blue-500/50 to-transparent" />
                      </div>
                      
                      <div className="space-y-4">
                        {groupSkills.map((skill) => (
                          <ScaleIn key={skill.id}>
                            <div className="relative group/card">
                              <div className={`absolute -inset-0.5 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-xl opacity-0 group-hover/card:opacity-20 blur transition-opacity duration-500`} />
                              
                              <div className="relative p-5 bg-white dark:bg-zen-800 rounded-xl border border-zen-200 dark:border-zen-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300">
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-lg text-zen-900 dark:text-zen-50 mb-1">
                                      {skill.name}
                                    </h4>
                                    <span className="text-xs font-mono text-zen-500 dark:text-zen-400">
                                      {getLevelLabel(skill.level)}
                                    </span>
                                  </div>
                                  
                                  {skill.yearsExperience && (
                                    <span className="text-xs font-mono px-2.5 py-1 bg-zen-100 dark:bg-zen-900 text-zen-600 dark:text-zen-400 rounded-lg border border-zen-200 dark:border-zen-800">
                                      {skill.yearsExperience}y
                                    </span>
                                  )}
                                </div>
                                
                                <div className="relative w-full bg-zen-100 dark:bg-zen-900 rounded-full h-2 overflow-hidden">
                                  <div
                                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-1000`}
                                    style={{ width: `${(skill.level / 5) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </ScaleIn>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </section>
        </div>

        {/* About Section */}
        <ScaleIn delay={0.4}>
          <div className="mt-24">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-accent-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative p-10 md:p-12 bg-white/80 dark:bg-zen-800/80 backdrop-blur-xl rounded-2xl border border-zen-200 dark:border-zen-700">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-zen-900 dark:text-zen-50 mb-4">
                      About This Skillset
                    </h3>
                    <div className="space-y-4 text-zen-600 dark:text-zen-400 leading-relaxed">
                      <p>
                        <span className="text-zen-900 dark:text-zen-50 font-medium">3D design expertise</span> developed through 
                        formal education at CEU Cardenal Herrera (2018-2022) and refined through continuous practice, 
                        focusing on <span className="text-zen-900 dark:text-zen-50 font-medium">Blender</span> mastery and 
                        asset optimization for real-world applications.
                      </p>
                      <p>
                        <span className="text-zen-900 dark:text-zen-50 font-medium">Programming knowledge</span> is entirely self-taught, 
                        beginning with <span className="text-zen-900 dark:text-zen-50 font-medium">Python</span> for automation and 
                        expanding to full-stack web development through project-based learning and experimentation.
                      </p>
                      <p className="text-sm pt-2 border-t border-zen-200 dark:border-zen-700">
                        <strong className="text-zen-700 dark:text-zen-300">Note:</strong> Proficiency levels reflect practical 
                        experience and comfort with each technology in real projects, not years in professional employment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </div>
  );
}
