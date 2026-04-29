import Button from '@/components/ui/Button';
import ProjectCard from '@/components/projects/ProjectCard';
import FadeIn from '@/components/animations/FadeIn';
import Stagger, { StaggerItem } from '@/components/animations/Stagger';
import ScaleIn from '@/components/animations/ScaleIn';
import Parallax from '@/components/animations/Parallax';
import { Project } from '@/types';
import { getFeaturedProjects } from '@/lib/data';

// Get real featured projects data
const featuredProjects: Project[] = getFeaturedProjects();

export default function HomePage() {
  return (
    <div className="zen-gradient">
      {/* Hero Section - Reimagined */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Multi-Layer Background System */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]" 
               style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
          
          {/* Gradient Orbs with Parallax */}
          <Parallax speed={-0.4}>
            <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-accent-500/20 to-accent-600/10 rounded-full blur-3xl animate-float" />
          </Parallax>
          <Parallax speed={0.3}>
            <div className="absolute top-1/3 right-20 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </Parallax>
          <Parallax speed={-0.2}>
            <div className="absolute bottom-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-zen-900/5 dark:from-zen-50/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </Parallax>
          
          {/* Geometric Accent Lines */}
          <div className="absolute top-0 left-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-accent-500/20 to-transparent" />
          <div className="absolute bottom-0 right-1/3 w-px h-2/3 bg-gradient-to-t from-transparent via-blue-500/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column - Main Hero Content */}
              <div className="lg:col-span-7 space-y-8">
                <FadeIn delay={0.1}>
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-accent-500/10 via-accent-600/5 to-transparent rounded-full backdrop-blur-sm border border-accent-500/20">
                    <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                    <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                      Available for Opportunities
                    </span>
                  </div>
                </FadeIn>
                
                <div className="space-y-6">
                  <FadeIn delay={0.2}>
                    <h1 className="text-6xl md:text-7xl xl:text-8xl font-display font-bold tracking-tighter leading-[0.95]">
                      <span className="text-zen-900 dark:text-zen-50">Code</span>
                      <br />
                      <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400">
                          Meets
                        </span>
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-400 opacity-30 blur-sm" />
                      </span>
                      <br />
                      <span className="text-zen-900 dark:text-zen-50">Canvas</span>
                    </h1>
                  </FadeIn>
                  
                  <FadeIn delay={0.3}>
                    <div className="flex items-center gap-3 text-zen-600 dark:text-zen-400">
                      <div className="h-px w-12 bg-gradient-to-r from-accent-500 to-transparent" />
                      <p className="text-lg font-mono uppercase tracking-wide">
                        3D Artist · Live Coder
                      </p>
                    </div>
                  </FadeIn>
                </div>
                
                <FadeIn delay={0.4}>
                  <p className="text-xl md:text-2xl text-zen-600 dark:text-zen-300 leading-relaxed font-light max-w-2xl">
                    <span className="text-zen-900 dark:text-zen-50 font-medium">3D artist</span> and{' '}
                    <span className="text-zen-900 dark:text-zen-50 font-medium">live coder</span> from Sevilla.
                    Mastering AI-assisted development to build cutting-edge software while creating optimized 3D assets. 
                    Tool proficiency over memorization.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.5}>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button href="/projects" size="lg" className="group">
                      <span>Explore Work</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Button>
                    <Button href="/contact" variant="outline" size="lg">
                      Start Conversation
                    </Button>
                  </div>
                </FadeIn>
              </div>
              
              {/* Right Column - Stats & Quick Facts */}
              <div className="lg:col-span-5">
                <Stagger staggerDelay={0.1}>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Stat Card 1 */}
                    <StaggerItem>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-accent-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-6 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-2xl border border-zen-200/50 dark:border-zen-700/50 hover:border-accent-500/50 transition-all duration-300">
                          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent-600 to-accent-500 mb-2">
                            5+
                          </div>
                          <div className="text-sm text-zen-600 dark:text-zen-400 font-medium">
                            Years with<br />Blender
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                    
                    {/* Stat Card 2 */}
                    <StaggerItem>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-6 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-2xl border border-zen-200/50 dark:border-zen-700/50 hover:border-blue-500/50 transition-all duration-300">
                          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-600 mb-2">
                            10+
                          </div>
                          <div className="text-sm text-zen-600 dark:text-zen-400 font-medium">
                            Projects<br />Delivered
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                    
                    {/* Skill Highlight 1 */}
                    <StaggerItem>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-6 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-2xl border border-zen-200/50 dark:border-zen-700/50 hover:border-green-500/50 transition-all duration-300">
                          <div className="text-3xl mb-2">🎨</div>
                          <div className="text-sm text-zen-600 dark:text-zen-400 font-medium">
                            3D Asset<br />Optimization
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                    
                    {/* Skill Highlight 2 */}
                    <StaggerItem>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative p-6 bg-white/50 dark:bg-zen-800/50 backdrop-blur-xl rounded-2xl border border-zen-200/50 dark:border-zen-700/50 hover:border-yellow-500/50 transition-all duration-300">
                          <div className="text-3xl mb-2">⚡</div>
                          <div className="text-sm text-zen-600 dark:text-zen-400 font-medium">
                            Python<br />Automation
                          </div>
                        </div>
                      </div>
                    </StaggerItem>
                  </div>
                </Stagger>
                
                {/* Location Badge */}
                <FadeIn delay={0.9}>
                  <div className="mt-6 p-4 bg-white/30 dark:bg-zen-800/30 backdrop-blur-xl rounded-xl border border-zen-200/50 dark:border-zen-700/50">
                    <div className="flex items-center gap-3 text-zen-600 dark:text-zen-400">
                      <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm font-medium">Based in Valencia, Spain</span>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <FadeIn delay={1.1}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs font-mono text-zen-500 dark:text-zen-400 uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border-2 border-zen-300 dark:border-zen-700 rounded-full p-1 relative overflow-hidden">
              <div className="w-1.5 h-3 bg-gradient-to-b from-accent-500 to-accent-600 rounded-full mx-auto animate-pulse" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Featured Projects - Reimagined Dynamic Layout */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Multi-layer background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-zen-50/50 to-white dark:from-zen-900 dark:via-black/50 dark:to-zen-900" />
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        {/* Animated decorative elements */}
        <Parallax speed={-0.3}>
          <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl animate-float" />
        </Parallax>
        <Parallax speed={0.2}>
          <div className="absolute bottom-40 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-accent-500/10 via-accent-600/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </Parallax>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header - Enhanced */}
          <FadeIn>
            <div className="max-w-4xl mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-px bg-gradient-to-r from-accent-500 to-accent-600" />
                  <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-[0.2em]">
                    Portfolio
                  </span>
                </div>
              </div>
              
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-zen-900 dark:text-zen-50 mb-8 tracking-tight leading-[0.95]">
                Featured
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-accent-500 to-blue-600">
                  Work
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-zen-600 dark:text-zen-300 font-light leading-relaxed max-w-2xl">
                Projects that blend technical precision with creative vision—
                <span className="text-zen-900 dark:text-zen-50 font-medium">exploring the intersection of code and art</span>
              </p>
            </div>
          </FadeIn>
          
          {/* Projects Display */}
          {featuredProjects.length > 0 && (
            <div className="space-y-12">
              {/* Main Featured Projects - Alternating Layout */}
              {featuredProjects.slice(0, 2).map((project, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <FadeIn key={project.id} delay={0.2 + index * 0.1}>
                    <div className="group relative">
                      {/* Hover glow */}
                      <div className={`absolute -inset-6 bg-gradient-to-${isEven ? 'r' : 'l'} from-blue-500/20 via-accent-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                      
                      <div className={`relative grid grid-cols-1 ${isEven ? 'lg:grid-cols-5' : 'lg:grid-cols-5'} gap-8 lg:gap-12 items-center`}>
                        {/* Image - order changes based on index */}
                        <div className={`relative lg:col-span-3 ${isEven ? '' : 'lg:order-2'}`}>
                          <div className="group/img relative aspect-[16/10] rounded-2xl overflow-hidden">
                            {/* Image container with multiple layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zen-900/5 to-zen-900/20 dark:from-zen-50/5 dark:to-zen-50/20 z-10" />
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110"
                            />
                            
                            {/* Overlay gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-zen-50/80 dark:to-zen-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            {/* Floating badge */}
                            <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 dark:bg-zen-900/90 backdrop-blur-xl rounded-lg border border-zen-200/50 dark:border-zen-700/50 shadow-lg">
                              <span className="text-xs font-mono text-zen-700 dark:text-zen-300 uppercase tracking-wider">
                                {project.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className={`lg:col-span-2 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                                0{index + 1}
                              </span>
                              <div className="h-px flex-1 bg-gradient-to-r from-accent-500/50 to-transparent" />
                            </div>
                            
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50 tracking-tight leading-tight group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                              {project.title}
                            </h3>
                          </div>
                          
                          <p className="text-lg md:text-xl text-zen-600 dark:text-zen-300 leading-relaxed">
                            {project.tagline}
                          </p>
                          
                          {/* Tech pills - compact */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span 
                                key={tech}
                                className="px-3 py-1.5 bg-zen-100/80 dark:bg-zen-800/80 backdrop-blur-sm text-zen-700 dark:text-zen-300 rounded-lg text-sm font-mono border border-zen-200 dark:border-zen-700"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-3 py-1.5 text-zen-500 dark:text-zen-400 text-sm font-mono">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                          
                          {/* CTA Button */}
                          <div className="pt-2">
                            <Button href={`/projects/${project.slug}`} className="group/btn">
                              <span>View Case Study</span>
                              <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
              
              {/* Additional Projects - Compact Grid */}
              {featuredProjects.length > 2 && (
                <div className="pt-12">
                  <FadeIn delay={0.4}>
                    <div className="mb-8 flex items-center gap-4">
                      <h3 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50">
                        More Projects
                      </h3>
                      <div className="h-px flex-1 bg-gradient-to-r from-zen-300 dark:from-zen-700 to-transparent" />
                    </div>
                  </FadeIn>
                  
                  <Stagger staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.slice(2).map((project) => (
                      <StaggerItem key={project.id}>
                        <ProjectCard project={project} />
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              )}
            </div>
          )}

          {/* View All Projects - Enhanced CTA */}
          <FadeIn delay={0.5}>
            <div className="mt-20 text-center">
              <div className="inline-flex flex-col items-center gap-6">
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-zen-300 dark:via-zen-700 to-transparent" />
                <Button href="/projects" variant="outline" size="lg" className="group/all">
                  <span>Explore All Projects</span>
                  <svg className="w-5 h-5 ml-2 group-hover/all:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dual Expertise - Creative Reimagined */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-zen-900 via-zen-900 to-zen-950 dark:from-black dark:via-zen-950 dark:to-black text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Parallax speed={-0.2}>
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          </Parallax>
          <Parallax speed={0.3}>
            <div className="absolute bottom-20 right-1/4 w-[32rem] h-[32rem] bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
          </Parallax>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-accent-500 rounded-full" />
                <span className="text-sm font-mono text-accent-400 uppercase tracking-wider">
                  Dual Expertise
                </span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent-500 via-accent-400 to-transparent rounded-full" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
                Code & Canvas
              </h2>
              
              <p className="text-xl md:text-2xl text-zen-300 font-light leading-relaxed max-w-3xl mx-auto">
                Bridging the technical and creative worlds to build experiences that are both functional and beautiful
              </p>
            </div>
          </FadeIn>

          {/* Split Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* 3D Design - Left (Primary) */}
            <FadeIn delay={0.2}>
              <div className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-accent-500/30 to-orange-500/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="relative">
                  {/* Icon/Badge */}
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                        3D Artistry
                      </h3>
                      <span className="text-sm font-mono text-accent-400 uppercase tracking-wider">
                        Primary Focus
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-zen-200 leading-relaxed mb-8 font-light">
                    Specialized in <span className="text-accent-400 font-medium">Blender</span> workflows, 
                    creating optimized 3D assets with procedural techniques. From modeling and texturing 
                    to rendering and animation, focused on <span className="text-accent-400 font-medium">efficiency and quality</span> in every pixel.
                  </p>

                  {/* Key Skills */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent-400 text-sm">✦</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Procedural Workflows</h4>
                        <p className="text-zen-300 text-sm">Geometry Nodes, shader development, and automation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent-400 text-sm">✦</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Asset Optimization</h4>
                        <p className="text-zen-300 text-sm">Game-ready models with efficient topology and UV layouts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent-400 text-sm">✦</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Pipeline Integration</h4>
                        <p className="text-zen-300 text-sm">Python scripting for Blender add-ons and batch processing</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-accent-500/20 text-accent-200 rounded-lg text-sm font-mono border border-accent-500/30 hover:border-accent-500/50 transition-colors">
                      Blender
                    </span>
                    <span className="px-4 py-2 bg-accent-500/20 text-accent-200 rounded-lg text-sm font-mono border border-accent-500/30 hover:border-accent-500/50 transition-colors">
                      Substance Painter
                    </span>
                    <span className="px-4 py-2 bg-accent-500/20 text-accent-200 rounded-lg text-sm font-mono border border-accent-500/30 hover:border-accent-500/50 transition-colors">
                      Python
                    </span>
                    <span className="px-4 py-2 bg-accent-500/20 text-accent-200 rounded-lg text-sm font-mono border border-accent-500/30 hover:border-accent-500/50 transition-colors">
                      Photoshop
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Engineering - Right (Secondary) */}
            <FadeIn delay={0.4}>
              <div className="group relative">
                {/* Subtle glow */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="relative">
                  {/* Icon/Badge */}
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                        Development
                      </h3>
                      <span className="text-sm font-mono text-blue-400 uppercase tracking-wider">
                        Self-Taught
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-zen-200 leading-relaxed mb-8 font-light">
                    Building practical tools and applications with modern web technologies. 
                    From <span className="text-blue-400 font-medium">desktop apps</span> to automation scripts, 
                    focused on solving real problems with clean, maintainable code.
                  </p>

                  {/* Key Skills */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-400 text-sm">⚡</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Full-Stack Applications</h4>
                        <p className="text-zen-300 text-sm">React, Next.js, and Node.js ecosystem</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-400 text-sm">⚡</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Desktop Development</h4>
                        <p className="text-zen-300 text-sm">Electron apps with offline-first architecture</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-400 text-sm">⚡</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Automation & Scripting</h4>
                        <p className="text-zen-300 text-sm">Python for workflow optimization and data processing</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg text-sm font-mono border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                      JavaScript
                    </span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg text-sm font-mono border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                      React
                    </span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg text-sm font-mono border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                      Node.js
                    </span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg text-sm font-mono border border-blue-500/30 hover:border-blue-500/50 transition-colors">
                      Python
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Bottom CTA */}
          <FadeIn delay={0.6}>
            <div className="text-center mt-20">
              <p className="text-lg text-zen-300 mb-6">
                Interested in how these skills combine?
              </p>
              <Button href="/skills" variant="outline" size="lg">
                View Full Skillset
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section - Reimagined */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zen-900 via-zen-950 to-black dark:from-black dark:via-zen-950 dark:to-zen-900" />
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-600/30 via-transparent to-blue-600/30" />
          <Parallax speed={0.5}>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" />
            </div>
          </Parallax>
          <Parallax speed={-0.3}>
            <div className="absolute bottom-0 right-0 w-full h-full">
              <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </Parallax>
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main Content */}
            <div className="text-center mb-16">
              <FadeIn delay={0.1}>
                {/* Overline */}
                <div className="inline-flex items-center gap-3 mb-8">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-accent-500 rounded-full" />
                  <span className="text-sm font-mono text-accent-400 uppercase tracking-widest">
                    Let's Connect
                  </span>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-accent-500 via-accent-400 to-transparent rounded-full" />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-8 tracking-tight leading-none">
                  Ready to Build
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-accent-500 to-orange-500 mt-2">
                    Something Amazing?
                  </span>
                </h2>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-xl md:text-2xl lg:text-3xl text-zen-200 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                  From 3D assets to full applications, I bring creativity and technical precision to every project
                </p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <a
                    href="/contact"
                    className="group relative px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-accent-500/50 hover:scale-105 inline-flex items-center gap-3"
                  >
                    <span>Start a Project</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  
                  <a
                    href="/projects"
                    className="group px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-white/20 hover:border-white/40 inline-flex items-center gap-3"
                  >
                    <span>View My Work</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Info Cards */}
            <Stagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <StaggerItem>
                <div className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent-500/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-600/20 flex items-center justify-center border border-accent-500/30">
                      <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-white text-lg">Full-Time Roles</h3>
                    <p className="text-zen-300 text-sm leading-relaxed">
                      Open to opportunities in 3D pipeline development
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center border border-blue-500/30">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-white text-lg">Collaborations</h3>
                    <p className="text-zen-300 text-sm leading-relaxed">
                      Let's combine skills for innovative projects
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center border border-purple-500/30">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-white text-lg">Freelance Work</h3>
                    <p className="text-zen-300 text-sm leading-relaxed">
                      Custom 3D assets and automation tools
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>
    </div>
  );
}
