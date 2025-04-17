import { Project, BlogPost, Client } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    category: 'residential',
    description: 'A contemporary villa design emphasizing clean lines and natural light, creating a harmonious living space that blends indoor and outdoor elements.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80',
    ],
    materials: ['Natural Stone', 'Glass', 'Sustainable Wood', 'Steel', 'Concrete'],
    clientTestimonial: {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'The attention to detail and understanding of our vision was exceptional. Jane transformed our space into something beyond our expectations.',
    },
  },
  {
    id: '2',
    title: 'Urban Office Space',
    category: 'commercial',
    description: 'A dynamic workspace designed for collaboration and creativity, featuring flexible areas and modern amenities to enhance productivity.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80',
    ],
    materials: ['Concrete', 'Steel', 'Glass', 'Acoustic Panels', 'Bamboo'],
    clientTestimonial: {
      name: 'Michael Chen',
      role: 'CEO, TechStart Inc.',
      content: 'Our new office space has completely transformed how our team works together. The design perfectly balances functionality with aesthetic appeal.',
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Sustainable Design',
    excerpt: 'Exploring eco-friendly materials and practices in modern architecture that are shaping the future of sustainable design.',
    date: '2024-03-15',
    author: 'Jane Smith',
    content: 'Sustainable design is revolutionizing the way we approach architecture...',
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'Biophilic Design Trends',
    excerpt: 'How incorporating natural elements into interior spaces can improve wellbeing and productivity.',
    date: '2024-03-10',
    author: 'Jane Smith',
    content: 'Biophilic design is more than just a trend...',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Color Psychology in Design',
    excerpt: 'Understanding how color choices impact mood and behavior in interior spaces.',
    date: '2024-03-05',
    author: 'Jane Smith',
    content: 'The psychology of color plays a crucial role...',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
  },
];

export const clients: Client[] = [
  {
    id: '1',
    name: 'Luxury Homes Co.',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'Modern Spaces',
    logo: 'https://images.unsplash.com/photo-1563986768494-4dee09f4960a?auto=format&fit=crop&q=80',
  },
];