export type ProjectType = 'software' | '3d' | 'hybrid';
export type ProjectVisibility = 'public' | 'showcase' | 'confidential';
export type ProjectStatus = 'completed' | 'in-progress' | 'archived';

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  type: ProjectType;
  visibility: ProjectVisibility;
  status: ProjectStatus;
  featured: boolean;
  date: string;

  // Taxonomía
  technologies: string[];
  skills: string[];

  // Imágenes
  thumbnail: string;
  coverImage: string;

  // Case Study Content
  context: string;
  problem: string;
  role: string;
  
  approach: {
    technical: string;
    creative: string;
  };

  stack: {
    frontend?: string[];
    backend?: string[];
    tools3D?: string[];
    infrastructure?: string[];
  };

  process: {
    description: string;
    images: string[];
    videos?: string[];
  };

  results: string;
  learnings: string[];

  // Enlaces
  links: {
    demo?: string;
    repository?: string;
    article?: string;
    gallery?: string;
  };

  // Relaciones entre proyectos
  relatedProjects?: string[]; // slugs of related/satellite projects
  parentProject?: string; // slug of parent project if this is a satellite
}

export interface Skill {
  id: string;
  name: string;
  category: 'engineering' | 'design-3d';
  subcategory: string;
  level: number; // 1-5
  yearsExperience?: number;
  projects: string[]; // project slugs
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface FilterOptions {
  types: ProjectType[];
  technologies: string[];
  skills: string[];
  visibility: ProjectVisibility[];
}
