import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isDarkMode, toggleTheme }) => {
  return (
    <header className="fixed top-0 w-full h-16 bg-white dark:bg-gray-900 shadow-md z-50 flex items-center justify-between px-4">
      <button
        onClick={toggleSidebar}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
      >
        <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>
      
      <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        MSR×SAKIBUR
      </h1>
      
      <button
        onClick={toggleTheme}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-gray-300" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </button>
    </header>
  );
};

export default Header;