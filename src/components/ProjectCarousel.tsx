import React, { useState, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Photography Portfolio",
    image: "https://images.unsplash.com/photo-1554080353-a576cf803bda",
    link: "#"
  },
  {
    id: 2,
    title: "Task Manager App",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    link: "#"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b",
    link: "#"
  },
  {
    id: 4,
    title: "Music Player",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    link: "#"
  },
  {
    id: 5,
    title: "Recipe Finder",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
    link: "#"
  }
];

interface ProjectCardProps {
  project: Project;
  position: number;
}

const ProjectCard = memo(({ project, position }: ProjectCardProps) => (
  <div className="flex flex-col items-center">
    <div
      className={`transform transition-all duration-300 ease-out will-change-transform ${
        position === 1
          ? 'w-72 h-96 z-20 scale-100 opacity-100'
          : 'w-60 h-80 z-10 scale-90 opacity-70'
      }`}
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        
        {position === 1 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-200">
            <a
              href={project.link}
              className="px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Open
            </a>
          </div>
        )}
      </div>
    </div>
    <div 
      className={`mt-4 text-center transform transition-all duration-300 ease-out ${
        position === 1
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-40 translate-y-2 scale-95'
      }`}
      style={{
        width: position === 1 ? '288px' : '240px', // Matches w-72 (288px) and w-60 (240px)
      }}
    >
      <h3 className={`text-lg font-semibold text-gray-800 dark:text-gray-200 truncate px-2 ${
        position === 1 ? 'text-lg' : 'text-base'
      }`}>
        {project.title}
      </h3>
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const getVisibleProjects = useCallback(() => {
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    const next = (currentIndex + 1) % projects.length;
    return [prev, currentIndex, next];
  }, [currentIndex]);

  const visibleProjects = getVisibleProjects();

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        My Projects
      </h2>
      
      <div className="relative flex justify-center items-center gap-4 overflow-hidden py-4">
        {visibleProjects.map((index, position) => (
          <ProjectCard
            key={`${projects[index].id}-${position}`}
            project={projects[index]}
            position={position}
          />
        ))}
      </div>
      
      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors transform active:scale-95"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>
      
      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors transform active:scale-95"
      >
        <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};

export default ProjectCarousel;
