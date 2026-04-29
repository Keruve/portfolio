import { Project, Skill } from '@/types';
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';

/**
 * Get all projects from the data source
 */
export function getProjects(): Project[] {
  return projectsData as Project[];
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find(project => project.slug === slug);
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  const projects = getProjects();
  return projects.filter(project => project.featured);
}

/**
 * Get projects by type
 */
export function getProjectsByType(type: Project['type']): Project[] {
  const projects = getProjects();
  return projects.filter(project => project.type === type);
}

/**
 * Get all skills from the data source
 */
export function getSkills(): Skill[] {
  return skillsData as Skill[];
}

/**
 * Get skills by category
 */
export function getSkillsByCategory(category: 'engineering' | 'design-3d'): Skill[] {
  const skills = getSkills();
  return skills.filter(skill => skill.category === category);
}

/**
 * Get unique technologies from all projects
 */
export function getAllTechnologies(): string[] {
  const projects = getProjects();
  const techs = projects.flatMap(p => p.technologies);
  return Array.from(new Set(techs)).sort();
}

/**
 * Get unique skills from all projects
 */
export function getAllSkillNames(): string[] {
  const projects = getProjects();
  const skills = projects.flatMap(p => p.skills);
  return Array.from(new Set(skills)).sort();
}
