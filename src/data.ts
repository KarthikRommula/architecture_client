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
      '/images/Portfolio-images/image_6.webp',
      '/images/Portfolio-images/image_2.webp',
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
      '/images/Portfolio-images/image_4.webp',
    ],
    materials: ['White Oak', 'Matte Black Fixtures', 'Linen', 'Concrete'],
    clientTestimonial: {
      name: 'Priya Singh',
      role: 'Artist',
      content: 'The minimalist design has transformed my studio into a peaceful haven. It inspires my creativity every day.',
    },
  },
  {
    id: '5',
    title: 'Luxury Penthouse Suite',
    category: 'residential',
    description: 'An opulent penthouse with panoramic city views, featuring bespoke furnishings and high-end finishes for a truly luxurious living experience.',
    images: [
      '/images/Portfolio-images/image_3.webp',
      '/images/Portfolio-images/image_1.webp',
    ],
    materials: ['Marble', 'Brass', 'Velvet', 'Glass'],
    clientTestimonial: {
      name: 'Rohit Sharma',
      role: 'Businessman',
      content: 'The penthouse is a dream come true. Every detail exudes luxury and comfort. Highly recommended!',
    },
  },
  {
    id: '6',
    title: 'Eco-Friendly Workspace',
    category: 'commercial',
    description: 'A sustainable office design utilizing recycled materials and energy-efficient systems, promoting wellness and productivity.',
    images: [
      '/images/Portfolio-images/image_2.webp',
      '/images/Portfolio-images/image_1.webp',
    ],
    materials: ['Recycled Wood', 'LED Lighting', 'Green Walls', 'Bamboo'],
    clientTestimonial: {
      name: 'Anjali Mehta',
      role: 'Startup Founder',
      content: 'Our new workspace is not only beautiful but also eco-conscious. It inspires our team every day!',
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1.1',
    title: 'The Future of Sustainable Design',
    excerpt: 'Exploring eco-friendly materials and practices in modern architecture that are shaping the future of sustainable design.',
    date: '2024-03-15',
    author: 'MD Jaan',
    content: 'Sustainable design is revolutionizing the way we approach architecture...',
    image: '/images/Blog/image_1.webp',
  },
  {
    id: '2.1',
    title: 'Biophilic Design Trends',
    excerpt: 'How incorporating natural elements into interior spaces can improve wellbeing and productivity.',
    date: '2024-03-10',
    author: 'MD Jaan',
    content: 'Biophilic design is more than just a trend...',
    image: '/images/Blog/image_2.webp',
  },
  {
    id: '3.1',
    title: 'Color Psychology in Design',
    excerpt: 'Understanding how color choices impact mood and behavior in interior spaces.',
    date: '2024-03-05',
    author: 'MD Jaan',
    content: 'The psychology of color plays a crucial role...',
    image: '/images/Blog/image_3.webp',
  },
  {
    id: '4.1',
    title: 'Smart Homes: The Next Generation',
    excerpt: 'Discover how smart technology is transforming modern living spaces for convenience and efficiency.',
    date: '2024-03-18',
    author: 'MD Jaan',
    content: 'Smart homes are becoming the new standard, integrating technology for comfort, security, and energy savings...',
    image: '/images/Blog/image_4.webp',
  },
  {
    id: '5.1',
    title: 'Minimalism in Modern Interiors',
    excerpt: 'Why less is more: the rise of minimalist design in contemporary homes and offices.',
    date: '2023-03-20',
    author: 'MD Jaan',
    content: 'Minimalism is not just a trend but a lifestyle, focusing on simplicity, functionality, and beauty...',
    image: '/images/Blog/image_5.webp',
  },
  {
    id: '6.1',
    title: 'Workspace Wellness',
    excerpt: 'How thoughtful workspace design can boost productivity and employee wellbeing.',
    date: '2023-03-22',
    author: 'MD Jaan',
    content: 'A well-designed workspace can make a significant difference in productivity and morale...',
    image: '/images/Blog/image_6.webp',
  }
];