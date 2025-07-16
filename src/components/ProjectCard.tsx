import { useState } from 'react';
import { Project } from '../types';
import { Skeleton } from './ui/skeleton';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-card flex flex-col h-[420px] min-h-[420px] max-h-[420px]"
      onClick={() => onClick(project)}
    >
      <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
        {!imgLoaded && (
          <Skeleton className="absolute inset-0 w-full h-full z-10" />
        )}
        <img
          src={project.images[0]}
          alt={project.title}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imgLoaded ? '' : 'invisible'}`}
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-xl font-semibold text-white px-4 text-center">{project.title}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
        </div>
        <span className="inline-block rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground mt-auto w-fit">
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </span>
      </div>
    </div>
  );
}