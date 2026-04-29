'use client';

import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';
import Stagger, { StaggerItem } from '@/components/animations/Stagger';
import Parallax from '@/components/animations/Parallax';

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Multi-Layer Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zen-50/50 to-white dark:from-zen-900 dark:via-black/50 dark:to-zen-900" />
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]" 
             style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      </div>

      {/* Animated Background Orbs */}
      <Parallax speed={-0.3}>
        <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-accent-500/10 via-accent-600/5 to-transparent rounded-full blur-3xl animate-float" />
      </Parallax>
      <Parallax speed={0.2}>
        <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </Parallax>
      <Parallax speed={-0.15}>
        <div className="absolute bottom-40 right-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 via-purple-600/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </Parallax>

      <div className="container mx-auto px-6 relative z-10 py-24 md:py-32">
        {/* Hero Header */}
        <div className="max-w-5xl mx-auto mb-24">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-accent-500 to-accent-600" />
                <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-[0.2em]">
                  About Me
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-8 tracking-tight leading-[0.95]">
                <span className="text-zen-900 dark:text-zen-50">Bridging</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-blue-600 to-purple-600">
                  Code & Canvas
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zen-600 dark:text-zen-300 font-light leading-relaxed max-w-3xl">
                3D artist and live coder from Sevilla, bridging{' '}
                <span className="text-zen-900 dark:text-zen-50 font-medium">creative artistry</span> with{' '}
                <span className="text-zen-900 dark:text-zen-50 font-medium">AI-powered development</span> to build 
                cutting-edge solutions. Mastering tools to excel where traditional knowledge alone falls short.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Intro Cards */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/30 to-orange-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 bg-white/80 dark:bg-zen-800/80 backdrop-blur-xl rounded-2xl border border-zen-200 dark:border-zen-700">
                  <div className="text-5xl mb-4">🎨</div>
                  <h3 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50 mb-3">
                    3D Artist
                  </h3>
                  <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                    Higher Degree in 3D Design and Video Games (CEU Cardenal Herrera, 2022). 
                    Specialized in Blender with expertise in hard surface modeling, PBR rendering, and asset optimization.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 bg-white/80 dark:bg-zen-800/80 backdrop-blur-xl rounded-2xl border border-zen-200 dark:border-zen-700">
                  <div className="text-5xl mb-4">�</div>
                  <h3 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50 mb-3">
                    Live Coder
                  </h3>
                  <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                    Formal training in programming (C#, Java, Python). Specialized in AI-assisted development—mastering tools and methodologies to excel in any technology stack and deliver high-performance solutions.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Professional Journey Timeline */}
          <section className="mb-24">
            <FadeIn delay={0.3}>
              <div className="mb-12 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50">
                  Professional Journey
                </h2>
              </div>
            </FadeIn>
            
            <Stagger staggerDelay={0.1}>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-500 via-blue-500 to-purple-500 hidden md:block" />
                
                <div className="space-y-8">
                  <StaggerItem>
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-gradient-to-r from-accent-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative md:ml-20">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[4.5rem] top-6 hidden md:flex items-center justify-center w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-zen-900" />
                        
                        <div className="p-8 bg-white dark:bg-zen-800 rounded-2xl border-2 border-accent-500/30 dark:border-accent-500/30">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-lg text-sm font-mono uppercase tracking-wider">
                              2023 - Present
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-zen-900 dark:text-zen-50">
                            TerraStock Development
                          </h3>
                          <p className="text-zen-600 dark:text-zen-400 leading-relaxed text-lg">
                            Actively developing a stock control application using Electron and JavaScript, 
                            focused on industrial workflow optimization with encryption and traceability systems. 
                            Building practical solutions for real-world inventory management challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative md:ml-20">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[4.5rem] top-6 hidden md:flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-zen-900" />
                        
                        <div className="p-8 bg-white dark:bg-zen-800 rounded-2xl border-2 border-blue-500/30 dark:border-blue-500/30">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-mono uppercase tracking-wider">
                              2022 - 2023
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-zen-900 dark:text-zen-50">
                            Live Coding Methodology
                          </h3>
                          <p className="text-zen-600 dark:text-zen-400 leading-relaxed text-lg">
                            Formal training in C#, Java, and Python with official certification. Evolved into AI-assisted development—
                            leveraging GitHub Copilot, ChatGPT, and modern tooling to build full-stack applications, embedded systems, and automation tools. 
                            The Live Coder is the next evolution: tool mastery over memorization.
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="relative group">
                      <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative md:ml-20">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[4.5rem] top-6 hidden md:flex items-center justify-center w-4 h-4 bg-purple-500 rounded-full border-4 border-white dark:border-zen-900" />
                        
                        <div className="p-8 bg-white dark:bg-zen-800 rounded-2xl border-2 border-purple-500/30 dark:border-purple-500/30">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-mono uppercase tracking-wider">
                              2018 - 2022
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-zen-900 dark:text-zen-50">
                            3D Design Education
                          </h3>
                          <p className="text-zen-600 dark:text-zen-400 leading-relaxed text-lg">
                            Higher Degree in 3D Design and Video Games at CEU Cardenal Herrera, Valencia. 
                            Specialized in Blender, learned foundations in 3ds Max. Developed expertise in optimized modeling, 
                            lighting, PBR texturing, and mesh repair through academic training and personal projects.
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                </div>
              </div>
            </Stagger>
          </section>

          {/* Work Philosophy */}
          <section className="mb-24">
            <FadeIn delay={0.4}>
              <div className="mb-12 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zen-900 dark:text-zen-50">
                  Work Philosophy
                </h2>
              </div>
            </FadeIn>
            
            <Stagger staggerDelay={0.08}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StaggerItem>
                  <div className="relative group h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/30 to-orange-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-8 bg-white dark:bg-zen-800 rounded-2xl border border-zen-200 dark:border-zen-700 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3 text-zen-900 dark:text-zen-50">
                        Optimized Workflows
                      </h3>
                      <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                        Whether it's 3D mesh topology or code architecture, efficiency is paramount. 
                        Clean, optimized solutions that perform well, scale gracefully, and remain maintainable over time.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative group h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-8 bg-white dark:bg-zen-800 rounded-2xl border border-zen-200 dark:border-zen-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3 text-zen-900 dark:text-zen-50">
                        Passion-Driven Quality
                      </h3>
                      <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                        My work in 3D started as passion, not a job—and that drives quality in everything I create. 
                        I build tools and assets because I genuinely love the craft itself.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative group h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-8 bg-white dark:bg-zen-800 rounded-2xl border border-zen-200 dark:border-zen-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3 text-zen-900 dark:text-zen-50">
                        Tool Mastery Philosophy
                      </h3>
                      <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                        The Live Coder represents the future: knowing how to leverage AI assistants, documentation, and modern tooling 
                        to excel in demanding environments. Tool proficiency beats encyclopedic knowledge in today's fast-evolving landscape.
                      </p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="relative group h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-8 bg-white dark:bg-zen-800 rounded-2xl border border-zen-200 dark:border-zen-700 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-display font-bold mb-3 text-zen-900 dark:text-zen-50">
                        Practical Solutions
                      </h3>
                      <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                        Focus on real-world applications—tools that solve actual problems, 
                        from industrial automation to 3D asset optimization. Function over fashion, with both when possible.
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </div>
            </Stagger>
          </section>

          {/* The Live Coding Evolution */}
          <section className="mb-24">
            <FadeIn delay={0.5}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative p-10 md:p-12 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent backdrop-blur-xl rounded-2xl border-2 border-blue-500/30 dark:border-blue-500/30">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/50">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full mb-4">
                        <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">The Future of Development</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
                          The Live Coding Evolution
                        </span>
                      </h2>
                      <p className="text-lg text-zen-600 dark:text-zen-300 mb-6 leading-relaxed">
                        Being honest: I have formal training in <span className="text-zen-900 dark:text-zen-50 font-medium">C#, Java, and Python</span> with official certification. 
                        But the <span className="text-zen-900 dark:text-zen-50 font-medium">rest? It's live coding</span>—AI-assisted development using GitHub Copilot, ChatGPT, 
                        and cutting-edge tools. And that's not a limitation—<span className="text-blue-500 dark:text-blue-400 font-bold">it's the future</span>.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mb-8">
                    <div className="p-6 bg-white/50 dark:bg-zen-800/50 rounded-xl border border-blue-500/20">
                      <h3 className="text-xl font-bold text-zen-900 dark:text-zen-50 mb-3">
                        🎯 The Live Coder Philosophy
                      </h3>
                      <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                        The <span className="text-blue-500 dark:text-blue-400 font-medium">Live Coder</span> represents the next evolution in software development. 
                        We don't memorize syntax—we master <span className="font-medium">tool proficiency</span>. We don't gatekeep knowledge—we 
                        leverage <span className="font-medium">AI assistants, documentation, and modern workflows</span> to excel in technologies 
                        we've never touched before. This is how you stay cutting-edge in a field that evolves daily.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">01</span>
                      </div>
                      <div>
                        <h4 className="text-zen-900 dark:text-zen-50 font-semibold mb-2">Tool Mastery Over Memorization</h4>
                        <p className="text-zen-600 dark:text-zen-400 leading-relaxed text-sm">
                          Knowing how to leverage GitHub Copilot, ChatGPT, and modern documentation beats encyclopedic syntax knowledge. 
                          The skill is in <span className="font-medium">orchestrating tools</span>, not hoarding facts.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">02</span>
                      </div>
                      <div>
                        <h4 className="text-zen-900 dark:text-zen-50 font-semibold mb-2">Performance in Unknown Territory</h4>
                        <p className="text-zen-600 dark:text-zen-400 leading-relaxed text-sm">
                          I can dive into demanding environments—frameworks I've never used, languages I'm unfamiliar with—and 
                          <span className="font-medium"> deliver high-performance results</span> by knowing how to ask the right questions and use the right tools.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">03</span>
                      </div>
                      <div>
                        <h4 className="text-zen-900 dark:text-zen-50 font-semibold mb-2">Accelerated Learning Loop</h4>
                        <p className="text-zen-600 dark:text-zen-400 leading-relaxed text-sm">
                          Live coding creates a <span className="font-medium">rapid feedback loop</span>. Learn by building, iterate with AI assistance, 
                          and ship faster than traditional methods. This isn't cheating—it's evolution.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">04</span>
                      </div>
                      <div>
                        <h4 className="text-zen-900 dark:text-zen-50 font-semibold mb-2">All My Software Projects</h4>
                        <p className="text-zen-600 dark:text-zen-400 leading-relaxed text-sm">
                          Every software project in my portfolio? <span className="font-medium">Built with live coding</span>. 
                          TerraStock, embedded systems, automation tools—all leveraging AI assistance. 
                          That's not a disclaimer—<span className="font-semibold">it's my methodology</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Why Combine Code & 3D? */}
          <section className="mb-24">
            <FadeIn delay={0.55}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-accent-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative p-10 md:p-12 bg-white/80 dark:bg-zen-800/80 backdrop-blur-xl rounded-2xl border border-zen-200 dark:border-zen-700">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500 via-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-zen-900 dark:text-zen-50 mb-6">
                        Why Combine Code & 3D?
                      </h2>
                      <p className="text-lg text-zen-600 dark:text-zen-300 mb-6 leading-relaxed">
                        My background in 3D design and live coding creates a unique perspective that benefits both disciplines:
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-accent-600 dark:text-accent-400 font-bold">01</span>
                      </div>
                      <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                        <span className="text-zen-900 dark:text-zen-50 font-medium">Deep understanding of optimization</span> from manually 
                        cleaning thousands of meshes translates to efficient code architecture
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">02</span>
                      </div>
                      <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                        <span className="text-zen-900 dark:text-zen-50 font-medium">Ability to build automation tools</span> that eliminate 
                        repetitive 3D workflows, saving hours of manual work
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">03</span>
                      </div>
                      <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                        <span className="text-zen-900 dark:text-zen-50 font-medium">Artist's eye for detail</span> combined with 
                        technician's focus on efficiency—precision in both aesthetics and performance
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 dark:text-green-400 font-bold">04</span>
                      </div>
                      <p className="text-zen-600 dark:text-zen-400 leading-relaxed">
                        <span className="text-zen-900 dark:text-zen-50 font-medium">Fluent in both languages</span>—technical specs and 
                        creative briefs—making cross-disciplinary collaboration seamless
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Current Status CTA */}
          <ScaleIn delay={0.6}>
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-accent-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
              
              <div className="relative p-10 md:p-12 bg-gradient-to-br from-accent-600 via-blue-600 to-purple-600 rounded-2xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-mono text-white/90 uppercase tracking-wider">
                      Open to Opportunities
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
                    Let's Build Something Together
                  </h2>
                  
                  <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-2xl">
                    I'm open to <span className="text-white font-medium">freelance projects</span>, 
                    <span className="text-white font-medium"> collaborations</span>, and 
                    <span className="text-white font-medium"> opportunities</span> that leverage my 3D expertise 
                    or programming skills—especially in embedded systems, automation tools, or creative-technical hybrids.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-white/90">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium">Morón de la Frontera, Sevilla</span>
                    </div>
                    <span className="text-white/60">•</span>
                    <span className="text-white/90 font-medium">Remote Work Available</span>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}
