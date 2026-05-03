import Image from 'next/image';
import { Project } from '@/types';
import Badge from '@/components/ui/Badge';
import { FiExternalLink, FiGithub, FiImage } from 'react-icons/fi';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  // Get type-specific gradient
  const getTypeAccent = () => {
    switch (project.type) {
      case 'software':
        return 'from-blue-500 to-blue-700';
      case '3d':
        return 'from-purple-500 to-purple-700';
      case 'hybrid':
        return 'from-accent-500 to-accent-700';
      default:
        return 'from-zen-500 to-zen-700';
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-zen-50/50 via-white to-zen-100/50 dark:from-zen-950 dark:via-zen-900 dark:to-zen-900/80">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 bg-grid-zen-200/50 dark:bg-grid-zen-800/20 pointer-events-none" />
      
      {/* Hero Section with Asymmetric Layout */}
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Breadcrumb / Category */}
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge 
                  variant={project.type === 'software' ? 'blue' : project.type === '3d' ? 'purple' : 'gradient'}
                >
                  {project.type.toUpperCase()}
                </Badge>
                <div className="w-1 h-1 rounded-full bg-zen-400 dark:bg-zen-600" />
                <Badge 
                  variant={project.status === 'completed' ? 'green' : project.status === 'in-progress' ? 'yellow' : 'gray'}
                >
                  {project.status}
                </Badge>
                {project.visibility !== 'public' && (
                  <>
                    <div className="w-1 h-1 rounded-full bg-zen-400 dark:bg-zen-600" />
                    <Badge variant="gray">
                      {project.visibility}
                    </Badge>
                  </>
                )}
              </div>
            </FadeIn>

            {/* Title */}
            <FadeIn delay={0.2}>
              <div className="space-y-5">
                <div className={`w-20 h-1.5 rounded-full bg-gradient-to-r ${getTypeAccent()}`} />
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-zen-900 dark:text-zen-50 tracking-tight leading-[0.95]">
                  {project.title}
                </h1>
              </div>
            </FadeIn>
            
            {/* Tagline */}
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl lg:text-3xl text-zen-600 dark:text-zen-300 font-light leading-relaxed max-w-2xl">
                {project.tagline}
              </p>
            </FadeIn>

            {/* Tech Stack Pills - Condensed */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 6).map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-zen-100 dark:bg-zen-800/50 text-zen-700 dark:text-zen-300 rounded-lg text-sm font-mono border border-zen-200 dark:border-zen-700 transition-all hover:scale-105 hover:border-zen-300 dark:hover:border-zen-600"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span className="px-3 py-1.5 text-zen-500 dark:text-zen-400 text-sm font-mono">
                    +{project.technologies.length - 6}
                  </span>
                )}
              </div>
            </FadeIn>

            {/* Action Buttons */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4 pt-4">
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-600 to-orange-600 hover:from-accent-700 hover:to-orange-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
                  >
                    <FiExternalLink className="transition-transform group-hover:rotate-12" />
                    Visit Website
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
                  >
                    <FiExternalLink className="transition-transform group-hover:rotate-12" />
                    View Demo
                  </a>
                )}
                {project.links.repository && project.visibility === 'public' && (
                  <a
                    href={project.links.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-zen-900 dark:bg-zen-800 hover:bg-zen-800 dark:hover:bg-zen-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-medium"
                  >
                    <FiGithub className="transition-transform group-hover:rotate-12" />
                    View Code
                  </a>
                )}
                {project.links.gallery && (
                  <a
                    href={project.links.gallery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-zen-300 dark:border-zen-600 text-zen-700 dark:text-zen-300 hover:bg-zen-100 dark:hover:bg-zen-800 rounded-xl transition-all duration-300 hover:scale-105 font-medium"
                  >
                    <FiImage className="transition-transform group-hover:rotate-12" />
                    Gallery
                  </a>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Featured Image */}
          <div className="lg:col-span-5">
            <SlideIn direction="right" delay={0.3}>
              <div className="relative group">
                {/* Decorative background glow */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${getTypeAccent()} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Image container */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-zen-900/5 dark:ring-zen-50/10">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-zen-900/10 via-transparent to-transparent" />
                </div>

                {/* Floating accent element */}
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${getTypeAccent()} opacity-10 rounded-full blur-3xl`} />
              </div>
            </SlideIn>
          </div>
        </div>
      </div>
    </div>
  );
}
