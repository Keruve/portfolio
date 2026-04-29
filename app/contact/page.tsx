'use client';

import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiClock } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import CustomSelect from '@/components/ui/CustomSelect';
import FadeIn from '@/components/animations/FadeIn';
import ScaleIn from '@/components/animations/ScaleIn';
import Stagger, { StaggerItem } from '@/components/animations/Stagger';
import Parallax from '@/components/animations/Parallax';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (integrate with your backend/email service)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-accent-500/10 via-accent-600/5 to-transparent rounded-full blur-3xl animate-float" />
      </Parallax>
      <Parallax speed={0.2}>
        <div className="absolute top-1/3 -left-20 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </Parallax>
      <Parallax speed={-0.15}>
        <div className="absolute bottom-40 right-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/10 via-purple-600/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </Parallax>

      <div className="container mx-auto px-6 relative z-10 py-24 md:py-32">
        {/* Hero Header */}
        <div className="mb-24">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-accent-500 to-accent-600" />
                <span className="text-sm font-mono text-accent-600 dark:text-accent-400 uppercase tracking-[0.2em]">
                  Get In Touch
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-8 tracking-tight leading-[0.95]">
                <span className="text-zen-900 dark:text-zen-50">Let's Create</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 via-blue-600 to-purple-600">
                  Together
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zen-600 dark:text-zen-300 font-light leading-relaxed max-w-2xl">
                Open to{' '}
                <span className="text-zen-900 dark:text-zen-50 font-medium">collaborations</span>,{' '}
                <span className="text-zen-900 dark:text-zen-50 font-medium">freelance projects</span>, and{' '}
                <span className="text-zen-900 dark:text-zen-50 font-medium">full-time opportunities</span> that 
                combine technical expertise with creative vision
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Contact Info & Availability */}
            <div className="space-y-8">
              {/* Quick Contact Cards */}
              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50 mb-6">
                    Direct Contact
                  </h2>
                  
                  <Stagger staggerDelay={0.08}>
                    <div className="space-y-3">
                      <StaggerItem>
                        <a
                          href="mailto:acarrascobru@gmail.com"
                          className="group relative block"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-accent-500/30 to-orange-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative flex items-center gap-4 p-4 bg-white dark:bg-zen-800 rounded-xl border border-zen-200 dark:border-zen-700 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                              <FiMail className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-mono text-zen-500 dark:text-zen-400 uppercase tracking-wider mb-1">
                                Email
                              </div>
                              <div className="text-sm font-mono text-zen-900 dark:text-zen-50 truncate">
                                acarrascobru@gmail.com
                              </div>
                            </div>
                            <svg className="w-5 h-5 text-accent-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </a>
                      </StaggerItem>

                      <StaggerItem>
                        <a
                          href="https://github.com/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative block"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative flex items-center gap-4 p-4 bg-white dark:bg-zen-800 rounded-xl border border-zen-200 dark:border-zen-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              <FiGithub className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-mono text-zen-500 dark:text-zen-400 uppercase tracking-wider mb-1">
                                GitHub
                              </div>
                              <div className="text-sm font-mono text-zen-900 dark:text-zen-50 truncate">
                                github.com/yourusername
                              </div>
                            </div>
                            <svg className="w-5 h-5 text-blue-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </a>
                      </StaggerItem>

                      <StaggerItem>
                        <a
                          href="https://linkedin.com/in/yourusername"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative block"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative flex items-center gap-4 p-4 bg-white dark:bg-zen-800 rounded-xl border border-zen-200 dark:border-zen-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                              <FiLinkedin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-mono text-zen-500 dark:text-zen-400 uppercase tracking-wider mb-1">
                                LinkedIn
                              </div>
                              <div className="text-sm font-mono text-zen-900 dark:text-zen-50 truncate">
                                linkedin.com/in/yourusername
                              </div>
                            </div>
                            <svg className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </a>
                      </StaggerItem>
                    </div>
                  </Stagger>
                </div>
              </FadeIn>

              {/* Location & Availability */}
              <FadeIn delay={0.3}>
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 bg-white/80 dark:bg-zen-800/80 backdrop-blur-xl rounded-2xl border border-zen-200 dark:border-zen-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm font-mono text-green-600 dark:text-green-400 uppercase tracking-wider">
                        Available for Work
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <FiMapPin className="w-5 h-5 text-zen-500 dark:text-zen-400 mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-zen-900 dark:text-zen-50 mb-1">
                            Location
                          </div>
                          <div className="text-zen-600 dark:text-zen-400">
                            Morón de la Frontera, Sevilla
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <FiClock className="w-5 h-5 text-zen-500 dark:text-zen-400 mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-zen-900 dark:text-zen-50 mb-1">
                            Work Mode
                          </div>
                          <div className="text-zen-600 dark:text-zen-400">
                            Remote-friendly
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* What I'm Looking For */}
              <FadeIn delay={0.4}>
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-accent-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 bg-white dark:bg-zen-800 rounded-2xl border border-zen-200 dark:border-zen-700">
                    <h3 className="text-xl font-display font-bold mb-6 text-zen-900 dark:text-zen-50">
                      Open To
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Full-stack development roles',
                        '3D visualization projects',
                        'Hybrid technical/creative work',
                        'Automation & tool development',
                        'Freelance collaborations',
                        'Innovative product development'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-zen-600 dark:text-zen-400 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.5}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-accent-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative p-8 md:p-10 bg-white dark:bg-zen-800 rounded-2xl border border-zen-200 dark:border-zen-700">
                  {submitted ? (
                    <div className="text-center py-12">
                      <ScaleIn>
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-3xl font-display font-bold mb-4 text-zen-900 dark:text-zen-50">
                          Message Sent!
                        </h3>
                        <p className="text-lg text-zen-600 dark:text-zen-400 mb-8 leading-relaxed">
                          Thanks for reaching out. I'll get back to you as soon as possible.
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({ name: '', email: '', projectType: 'development', message: '' });
                          }}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-zen-100 dark:bg-zen-900 hover:bg-zen-200 dark:hover:bg-zen-800 text-zen-900 dark:text-zen-50 rounded-lg font-medium transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          <span>Send Another Message</span>
                        </button>
                      </ScaleIn>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50 mb-2">
                          Send a Message
                        </h2>
                        <p className="text-zen-600 dark:text-zen-400">
                          Fill out the form below and I'll respond within 24-48 hours
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider mb-3 text-zen-600 dark:text-zen-400">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-5 py-4 rounded-xl border-2 border-zen-200 dark:border-zen-700 bg-zen-50 dark:bg-zen-900 text-zen-900 dark:text-zen-50 placeholder:text-zen-400 dark:placeholder:text-zen-600 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider mb-3 text-zen-600 dark:text-zen-400">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full px-5 py-4 rounded-xl border-2 border-zen-200 dark:border-zen-700 bg-zen-50 dark:bg-zen-900 text-zen-900 dark:text-zen-50 placeholder:text-zen-400 dark:placeholder:text-zen-600 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider mb-3 text-zen-600 dark:text-zen-400">
                            Project Type *
                          </label>
                          <CustomSelect
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            options={[
                              { value: 'development', label: 'Software Development' },
                              { value: '3d', label: '3D Design & Visualization' },
                              { value: 'hybrid', label: 'Hybrid Project' },
                              { value: 'employment', label: 'Employment Opportunity' },
                              { value: 'collaboration', label: 'Collaboration' },
                              { value: 'other', label: 'Other' },
                            ]}
                            placeholder="Select project type..."
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider mb-3 text-zen-600 dark:text-zen-400">
                            Your Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            placeholder="Tell me about your project or opportunity..."
                            className="w-full px-5 py-4 rounded-xl border-2 border-zen-200 dark:border-zen-700 bg-zen-50 dark:bg-zen-900 text-zen-900 dark:text-zen-50 placeholder:text-zen-400 dark:placeholder:text-zen-600 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all resize-none"
                          />
                        </div>

                        <Button type="submit" className="w-full group">
                          <span>Send Message</span>
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Response Time Info */}
          <FadeIn delay={0.6}>
            <div className="text-center p-8 bg-zen-100/50 dark:bg-zen-800/50 backdrop-blur-sm rounded-2xl border border-zen-200/50 dark:border-zen-700/50">
              <p className="text-zen-600 dark:text-zen-400">
                <span className="text-zen-900 dark:text-zen-50 font-medium">Average response time: 24-48 hours</span> • 
                I read every message personally and will get back to you as soon as possible
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
