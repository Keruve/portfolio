'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import Badge from '@/components/ui/Badge';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="zen-card zen-card-hover overflow-hidden h-full">
          {/* Thumbnail */}
          <div className="relative aspect-[4/3] overflow-hidden bg-zen-100 dark:bg-zen-800">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-zen-900/60 via-zen-900/0 to-zen-900/0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge variant={project.type === 'software' ? 'blue' : project.type === '3d' ? 'purple' : 'gradient'}>
                {project.type}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-2">
              <Badge variant={project.visibility === 'public' ? 'green' : project.visibility === 'showcase' ? 'yellow' : 'gray'}>
                {project.visibility}
              </Badge>
            </div>
            
            <h3 className="text-2xl font-display font-bold text-zen-900 dark:text-zen-50 mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-zen-600 dark:text-zen-300 text-sm mb-6 line-clamp-2 font-light leading-relaxed">
              {project.tagline}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 3).map((tech) => (
                <motion.span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 bg-zen-100 dark:bg-zen-800 text-zen-600 dark:text-zen-300 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs font-mono px-3 py-1 text-zen-500">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 text-sm font-mono">
              {project.links.demo && (
                <motion.span 
                  className="flex items-center gap-1.5 text-accent-600 dark:text-accent-400"
                  whileHover={{ scale: 1.05, x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FiExternalLink size={14} />
                  Live
                </motion.span>
              )}
              {project.links.repository && (
                <motion.span 
                  className="flex items-center gap-1.5 text-accent-600 dark:text-accent-400"
                  whileHover={{ scale: 1.05, x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <FiGithub size={14} />
                  Code
                </motion.span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
