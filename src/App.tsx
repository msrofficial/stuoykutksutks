import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProjectCarousel from './components/ProjectCarousel';
import SocialLinks from './components/SocialLinks';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors`}>
      <Header
        toggleSidebar={() => setIsSidebarOpen(true)}
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative">
          <div className="w-full h-64 md:h-96 overflow-hidden rounded-b-lg">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="mt-20 text-center px-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white uppercase">
            MD SAKIBUR RAHMAN
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm from Meherpur, Bangladesh. My hobby is photography and making some simple projects. 
            I don't want to study. Give me some break and PC.
          </p>
        </div>
        
        {/* Projects Section */}
        <section className="mt-16">
          <ProjectCarousel />
        </section>
        
        {/* Social Links */}
        <SocialLinks />
        
        {/* Footer */}
        <footer className="text-center py-6 text-gray-600 dark:text-gray-400 text-sm">
          This website is copyrighted by MSR term with 2025.
        </footer>
      </main>
    </div>
  );
}

export default App;