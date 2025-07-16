import { Project, BlogPost} from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Minimalist Villa',
    category: 'residential',
    description: 'A contemporary villa design emphasizing clean lines and natural light, creating a harmonious living space that blends indoor and outdoor elements.',
    images: [
      '/images/Portfolio-images/image_1.webp',
      '/images/Portfolio-images/image_2.webp',
      '/images/Portfolio-images/image_3.webp',
    ],
    materials: ['Natural Stone', 'Glass', 'Sustainable Wood', 'Steel', 'Concrete'],
    clientTestimonial: {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'The attention to detail and understanding of our vision was exceptional. Jaan transformed our space into something beyond our expectations.',
    },
  },
  {
    id: '2',
    title: 'Urban Office Space',
    category: 'commercial',
    description: 'A dynamic workspace designed for collaboration and creativity, featuring flexible areas and modern amenities to enhance productivity.',
    images: [
      '/images/Portfolio-images/image_4.webp',
      '/images/Portfolio-images/image_5.webp',
      '/images/Portfolio-images/image_6.webp',
    ],
    materials: ['Concrete', 'Steel', 'Glass', 'Acoustic Panels', 'Bamboo'],
    clientTestimonial: {
      name: 'Michael Chen',
      role: 'CEO, TechStart Inc.',
      content: 'Our new office space has completely transformed how our team works together. The design perfectly balances functionality with aesthetic appeal.',
    },
  },
  // Modern project
  {
    id: '3',
    title: 'Modern Loft Apartment',
    category: 'modern',
    description: 'A sleek loft apartment featuring open spaces, industrial accents, and smart home technology for a truly modern lifestyle.',
    images: [
      '/images/Portfolio-images/image_2.webp',
      '/images/Portfolio-images/image_3.webp',
    ],
    materials: ['Exposed Brick', 'Glass', 'Steel', 'Polished Concrete'],
    clientTestimonial: {
      name: 'Alex Rivera',
      role: 'Resident',
      content: 'The modern design and smart features make my home both beautiful and functional. I love the open, airy feel!',
    },
  },
  // Minimalist project
  {
    id: '4',
    title: 'Minimalist Studio Retreat',
    category: 'minimalist',
    description: 'A calming studio space with a focus on simplicity, neutral tones, and clutter-free living, perfect for relaxation and creativity.',
    images: [
      '/images/Portfolio-images/image_5.webp',
      '/images/Portfolio-images/image_6.webp',
    ],
    materials: ['White Oak', 'Matte Black Fixtures', 'Linen', 'Concrete'],
    clientTestimonial: {
      name: 'Priya Singh',
      role: 'Artist',
      content: 'The minimalist design has transformed my studio into a peaceful haven. It inspires my creativity every day.',
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Sustainable Design',
    excerpt: 'Exploring eco-friendly materials and practices in modern architecture that are shaping the future of sustainable design.',
    date: '2024-03-15',
    author: 'Md Jaan',
    content: 'Sustainable design is revolutionizing the way we approach architecture...',
    image: '/images/Blog/image_1.webp',
  },
  {
    id: '2',
    title: 'Biophilic Design Trends',
    excerpt: 'How incorporating natural elements into interior spaces can improve wellbeing and productivity.',
    date: '2024-03-10',
    author: 'Md Jaan',
    content: 'Biophilic design is more than just a trend...',
    image: '/images/Blog/image_2.webp',
  },
  {
    id: '3',
    title: 'Color Psychology in Design',
    excerpt: 'Understanding how color choices impact mood and behavior in interior spaces.',
    date: '2024-03-05',
    author: 'Md Jaan',
    content: 'The psychology of color plays a crucial role...',
    image: '/images/Blog/image_3.webp',
  },
];