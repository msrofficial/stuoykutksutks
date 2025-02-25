import React, { useState } from 'react';
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
    title: "Project 1",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#"
  },
  {
    id: 2,
    title: "Project 2",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "#"
  },
  {
    id: 3,
    title: "Project 3",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    link: "#"
  }
];

const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        My Projects
      </h2>
      
      <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
        <img
          src={projects[currentIndex].image}
          alt={projects[currentIndex].title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">
          <a
            href={projects[currentIndex].link}
            className="px-6 py-2 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Open
          </a>
        </div>
      </div>
      
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={prevProject}
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={nextProject}
          className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;