import { useState } from 'react';
import { ArrowDown, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { projects, blogPosts, } from './data';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">Jane Smith</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">Interior Designer & Architect</p>
          <button
            onClick={() => {
              const about = document.getElementById('about');
              about?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="animate-bounce"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 dark:text-white">About Me</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8">
            With over 15 years of experience in interior design and architecture, 
            I specialize in creating spaces that blend functionality with aesthetic beauty. 
            My approach combines modern design principles with sustainable practices to 
            create environments that inspire and endure.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">Portfolio</h2>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {['all', 'residential', 'commercial', 'modern', 'minimalist'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${filter === category 
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
                    : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 sm:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">Design Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-colors">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">Get in Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-white">Send a Message</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project"
                    rows={5}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-500 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-300 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:jane@example.com" className="text-gray-900 dark:text-white hover:underline">
                        jane@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <a href="tel:+1234567890" className="text-gray-900 dark:text-white hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-gray-900 dark:text-white">New York City, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 dark:text-white">Follow Me</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;