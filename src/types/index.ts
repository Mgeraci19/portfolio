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
}

export interface Skill {
  name: string;
  description: string;
} 