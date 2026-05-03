import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectRoadmap from '@/components/projects/ProjectRoadmap';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectDocumentation from '@/components/projects/ProjectDocumentation';
import ImageGallery from '@/components/ui/ImageGallery';
import Badge from '@/components/ui/Badge';
import { Project } from '@/types';
import { getProjectBySlug, getProjects } from '@/lib/data';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';
import ScaleIn from '@/components/animations/ScaleIn';
import Stagger, { StaggerItem } from '@/components/animations/Stagger';

// Get project by slug from real data
const getProject = async (slug: string): Promise<Project | null> => {
  return getProjectBySlug(slug) || null;
};

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  // Get related projects if they exist
  const allProjects = getProjects();
  const relatedProjects = project.relatedProjects
    ? allProjects.filter(p => project.relatedProjects?.includes(p.slug))
    : [];
  
  // Get parent project if this is a satellite
  const parentProject = project.parentProject
    ? getProjectBySlug(project.parentProject)
    : null;

  return (
    <div className="min-h-screen zen-gradient">
      <ProjectHero project={project} />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Overview Section - Three Column Cards */}
        <section className="mb-32">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                Project Overview
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 mt-4">
                Understanding the Challenge
              </h2>
            </div>
          </FadeIn>
          
          <Stagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="zen-card zen-card-hover p-8 h-full group">
                <div className="w-12 h-1 bg-blue-600 rounded-full mb-6 transition-all duration-500 group-hover:w-20" />
                <h3 className="text-xl font-display font-bold text-zen-900 dark:text-zen-50 mb-4">
                  Context
                </h3>
                <p className="text-zen-600 dark:text-zen-300 leading-relaxed">
                  {project.context}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="zen-card zen-card-hover p-8 h-full group">
                <div className="w-12 h-1 bg-accent-600 rounded-full mb-6 transition-all duration-500 group-hover:w-20" />
                <h3 className="text-xl font-display font-bold text-zen-900 dark:text-zen-50 mb-4">
                  Problem
                </h3>
                <p className="text-zen-600 dark:text-zen-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="zen-card zen-card-hover p-8 h-full group">
                <div className="w-12 h-1 bg-purple-600 rounded-full mb-6 transition-all duration-500 group-hover:w-20" />
                <h3 className="text-xl font-display font-bold text-zen-900 dark:text-zen-50 mb-4">
                  My Role
                </h3>
                <p className="text-zen-600 dark:text-zen-300 leading-relaxed">
                  {project.role}
                </p>
              </div>
            </StaggerItem>
          </Stagger>
        </section>

        {/* Approach Section - Side by Side */}
        <section className="mb-32">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                Solution Design
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 mt-4">
                Strategic Approach
              </h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <SlideIn direction="left" delay={0.2}>
              <div className="zen-card p-10 h-full relative overflow-hidden group">
                {/* Decorative Element */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xl font-bold">
                      T
                    </div>
                    <h3 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50">
                      Technical
                    </h3>
                  </div>
                  <p className="text-zen-600 dark:text-zen-300 leading-relaxed text-lg">
                    {project.approach.technical}
                  </p>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.3}>
              <div className="zen-card p-10 h-full relative overflow-hidden group">
                {/* Decorative Element */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-500/5 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white text-xl font-bold">
                      C
                    </div>
                    <h3 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50">
                      Creative
                    </h3>
                  </div>
                  <p className="text-zen-600 dark:text-zen-300 leading-relaxed text-lg">
                    {project.approach.creative}
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>
        </section>

        {/* Tech Stack Section - Modern Grid */}
        <section className="mb-32">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                Technology & Tools
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 mt-4">
                Tech Stack
              </h2>
            </div>
          </FadeIn>
          
          <div className="max-w-6xl mx-auto">
            <Stagger staggerDelay={0.1} className="flex flex-wrap justify-center gap-4">
              {project.stack.frontend && (
                <StaggerItem>
                  <div className="zen-card p-6 group hover:shadow-zen-lg transition-all duration-300 h-full w-full md:w-64">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-mono text-sm font-bold">
                        FE
                      </div>
                      <h3 className="text-lg font-display font-bold text-zen-900 dark:text-zen-50">
                        Frontend
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.frontend.map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )}

              {project.stack.backend && (
                <StaggerItem>
                  <div className="zen-card p-6 group hover:shadow-zen-lg transition-all duration-300 h-full w-full md:w-64">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-mono text-sm font-bold">
                        BE
                      </div>
                      <h3 className="text-lg font-display font-bold text-zen-900 dark:text-zen-50">
                        Backend
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.backend.map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg text-sm font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )}

              {project.stack.tools3D && (
                <StaggerItem>
                  <div className="zen-card p-6 group hover:shadow-zen-lg transition-all duration-300 h-full w-full md:w-64">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-mono text-sm font-bold">
                        3D
                      </div>
                      <h3 className="text-lg font-display font-bold text-zen-900 dark:text-zen-50">
                        3D Tools
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.tools3D.map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )}

              {project.stack.infrastructure && (
                <StaggerItem>
                  <div className="zen-card p-6 group hover:shadow-zen-lg transition-all duration-300 h-full w-full md:w-64">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-mono text-sm font-bold">
                        IF
                      </div>
                      <h3 className="text-lg font-display font-bold text-zen-900 dark:text-zen-50">
                        Infrastructure
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.infrastructure.map(tech => (
                        <span key={tech} className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-lg text-sm font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              )}
            </Stagger>
          </div>
        </section>

        {/* Roadmap Section - Replaces old Process & Workflow */}
        {project.roadmap && project.roadmap.length > 0 && (
          <section className="mb-32">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                  Development Journey
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 mt-4">
                  Progress & Roadmap
                </h2>
                <p className="text-xl text-zen-600 dark:text-zen-300 mt-4 max-w-2xl mx-auto">
                  Track the project's evolution from concept to completion
                </p>
              </div>
            </FadeIn>
            
            <div className="max-w-5xl mx-auto">
              <ProjectRoadmap phases={project.roadmap} />
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-32">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                  Visual Showcase
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 mt-4">
                  Project Gallery
                </h2>
                <p className="text-xl text-zen-600 dark:text-zen-300 mt-4 max-w-2xl mx-auto">
                  Screenshots, designs, and visual documentation
                </p>
              </div>
            </FadeIn>
            
            <div className="max-w-7xl mx-auto">
              <ProjectGallery items={project.gallery} />
            </div>
          </section>
        )}

        {/* Documentation Section */}
        {project.documentation && project.documentation.length > 0 && (
          <section className="mb-32">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                  Technical Details
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 mt-4">
                  Documentation
                </h2>
                <p className="text-xl text-zen-600 dark:text-zen-300 mt-4 max-w-2xl mx-auto">
                  Key technical implementations and architectural decisions
                </p>
              </div>
            </FadeIn>
            
            <div className="max-w-4xl mx-auto">
              <ProjectDocumentation sections={project.documentation} />
            </div>
          </section>
        )}

        {/* Results Section - Highlighted */}
        <section className="mb-32">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                Impact & Outcomes
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 mt-4">
                Results Achieved
              </h2>
            </div>
          </FadeIn>
          
          <ScaleIn delay={0.2}>
            <div className="max-w-4xl mx-auto relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent-500/20 to-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
              
              <div className="zen-card p-12 relative bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-zen-900 dark:via-zen-900 dark:to-blue-950/50 border-2 border-blue-100 dark:border-blue-900/30">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    ✓
                  </div>
                  <p className="text-zen-700 dark:text-zen-200 text-xl leading-relaxed pt-3">
                    {project.results}
                  </p>
                </div>
              </div>
            </div>
          </ScaleIn>
        </section>

        {/* Key Learnings Section */}
        <section className="mb-20">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                Insights & Growth
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 mt-4">
                Key Learnings
              </h2>
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto">
            <Stagger staggerDelay={0.1} className="space-y-4">
              {project.learnings.map((learning, index) => (
                <StaggerItem key={index}>
                  <div className="zen-card zen-card-hover p-6 group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold mt-1">
                        {index + 1}
                      </div>
                      <p className="text-zen-600 dark:text-zen-300 text-lg leading-relaxed pt-1">
                        {learning}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Parent Project Connection (if this is a satellite) */}
        {parentProject && (
          <section className="mb-32">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <div className="zen-card p-8 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent border-2 border-blue-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      Satellite Project
                    </span>
                  </div>
                  <p className="text-zen-600 dark:text-zen-300 mb-6 leading-relaxed">
                    This project was developed as an independent module to support <strong className="text-zen-900 dark:text-zen-50">{parentProject.title}</strong>. 
                    It operates as a standalone system while being tightly integrated with the core platform.
                  </p>
                  <Link 
                    href={`/projects/${parentProject.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
                  >
                    <span>View {parentProject.title}</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </section>
        )}

        {/* Related/Satellite Projects */}
        {relatedProjects.length > 0 && (
          <section className="mb-32">
            <FadeIn>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-accent-500/10 via-purple-500/10 to-blue-500/10 rounded-full border border-accent-500/20 mb-6">
                  <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                    Satellite Projects
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 mb-4">
                  Supporting Infrastructure
                </h2>
                <p className="text-xl text-zen-600 dark:text-zen-300 max-w-3xl mx-auto">
                  Standalone projects developed to extend and enhance the core platform's capabilities
                </p>
              </div>
            </FadeIn>

            <Stagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedProjects.map((related) => (
                <StaggerItem key={related.slug}>
                  <Link href={`/projects/${related.slug}`} className="group block h-full">
                    <div className="h-full zen-card p-8 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-accent-500/30 relative overflow-hidden">
                      {/* Gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-accent-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                      
                      <div className="relative">
                        {/* Icon based on technology */}
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          {related.slug.includes('license') ? (
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          ) : (
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                        </div>

                        {/* Title and tagline */}
                        <h3 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50 mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-zen-600 dark:text-zen-300 mb-6 leading-relaxed">
                          {related.tagline}
                        </p>

                        {/* Key technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {related.technologies.slice(0, 4).map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-zen-100 dark:bg-zen-800 text-zen-700 dark:text-zen-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {related.technologies.length > 4 && (
                            <span className="px-3 py-1 bg-zen-100 dark:bg-zen-800 text-zen-500 dark:text-zen-400 rounded-full text-xs font-medium">
                              +{related.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        {/* CTA Arrow */}
                        <div className="flex items-center gap-2 text-accent-600 dark:text-accent-400 font-medium group-hover:gap-4 transition-all duration-300">
                          <span>Explore project</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        )}

        {/* Skills Showcased */}
        {project.skills.length > 0 && (
          <section className="mb-20">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                  Skills Demonstrated
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-zen-900 dark:text-zen-50 mt-4">
                  Expertise Applied
                </h2>
              </div>
            </FadeIn>
            
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap gap-4 justify-center">
                {project.skills.map((skill, index) => (
                  <FadeIn key={skill} delay={0.05 * index}>
                    <span className="inline-block px-5 py-3 zen-card hover:shadow-zen-md text-zen-700 dark:text-zen-200 rounded-xl text-sm font-medium transition-all hover:scale-105 m-1">
                      {skill}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
