import { Skeleton } from './components/ui/skeleton';
import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import ThemeToggle from './components/ThemeToggle';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { projects, blogPosts, } from './data';
import { Project } from './types';
import ContactPage from './components/Contact_us';
import FooterPage from './components/Footer';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [heroImgLoaded, setHeroImgLoaded] = useState(false);
  const [blogImgLoaded, setBlogImgLoaded] = useState<{ [id: string]: boolean }>({});

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <ThemeToggle />
      {/* Hero Section */}
      <section className="relative h-screen bg-background">
        {/* Hero Image with Skeleton */}
        {!heroImgLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full z-10" />
        )}
        <img
          src="/images/Background.webp"
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-cover ${heroImgLoaded ? '' : 'invisible'}`}
          onLoad={() => setHeroImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">MD Jaan</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">Interior Designer & Architect</p>
          <button
            onClick={() => {
              const about = document.getElementById('about');
              about?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 md:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 dark:text-white">About Me</h2>
          <p className="text-base sm:text-lg mb-8 text-muted-foreground">
            With over 15 years of experience in interior design and architecture, 
            I specialize in creating spaces that blend functionality with aesthetic beauty. 
            My approach combines modern design principles with sustainable practices to 
            create environments that inspire and endure.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">Portfolio</h2>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {['all', 'residential', 'commercial', 'modern', 'minimalist'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${filter === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'}`}
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
      <section className="py-16 sm:py-20 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">Design Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-lg overflow-hidden shadow-lg bg-card transition-colors flex flex-col h-[340px] min-h-[340px] min-w-0 w-full max-w-[370px] mx-auto"
              >
                {!blogImgLoaded[post.id] && <Skeleton className="w-full h-40 sm:h-44 md:h-48" />}
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full h-40 sm:h-44 md:h-48 object-cover ${blogImgLoaded[post.id] ? '' : 'invisible'}`}
                  onLoad={() => setBlogImgLoaded((prev) => ({ ...prev, [post.id]: true }))}
                />
                <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground line-clamp-1">{post.title}</h3>
                    <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2">{post.excerpt}</p>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm text-muted-foreground mt-auto">
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
   <ContactPage/>
  {/* Footer */}
  <FooterPage />
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