export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'modern' | 'minimalist';
  description: string;
  images: string[];
  materials: string[];
  clientTestimonial?: {
    name: string;
    role: string;
    content: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
  image: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}