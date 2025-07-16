import { X } from 'lucide-react';
import { Project } from '../types';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const [imgLoaded, setImgLoaded] = useState<boolean[]>(() => project.images.map(() => false));

  const handleImgLoad = (idx: number) => {
    setImgLoaded((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-card shadow-2xl transform transition-all duration-300 animate-in slide-in-from-bottom-4"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm px-8 pt-8 pb-4 border-b border-border">
          <button
            onClick={onClose}
            className="absolute right-6 top-6 p-2.5 rounded-full bg-primary hover:bg-primary/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-white" />
          </button>
          <h2 className="text-3xl font-bold mb-2 text-foreground pr-12">{project.title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Content Section */}
        <div className="px-8 py-8">
          {/* Image Gallery */}
          <div className="grid gap-8">
            {project.images.map((image, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-xl dark:shadow-gray-800/30 transition-transform hover:scale-[1.02] duration-300 relative"
              >
                {!imgLoaded[index] && (
                  <Skeleton className="absolute inset-0 w-full h-full z-10" />
                )}
                <img
                  src={image}
                  alt={`${project.title} - View ${index + 1}`}
                  className={`w-full h-auto object-cover ${imgLoaded[index] ? '' : 'invisible'}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onLoad={() => handleImgLoad(index)}
                />
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* Materials Section */}
            <div className="bg-card/80 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Materials Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((material, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            {project.clientTestimonial && (
              <div className="bg-card/80 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Client Testimonial</h3>
                <blockquote>
                  <p className="text-muted-foreground italic text-lg leading-relaxed mb-4">
                    "{project.clientTestimonial.content}"
                  </p>
                  <footer>
                    <p className="font-semibold text-foreground">
                      {project.clientTestimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.clientTestimonial.role}
                    </p>
                  </footer>
                </blockquote>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}