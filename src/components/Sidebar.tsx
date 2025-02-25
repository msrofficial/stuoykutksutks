import React from 'react';
import { User, Mail, Github, Users, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: User, label: 'About Me', href: '#about' },
    { icon: Mail, label: 'Contact', href: '#contact' },
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Mail, label: 'Email Me', href: 'mailto:example@email.com' },
    { icon: Users, label: 'Groups', href: '#groups' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
        <nav className="mt-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={item.href.startsWith('#') ? onClose : undefined}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;