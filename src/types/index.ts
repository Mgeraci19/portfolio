export interface NavItem {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies?: string[];
  isExternal?: boolean;
}

export interface Skill {
  name: string;
  description: string;
} 