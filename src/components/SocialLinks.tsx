import React from 'react';
import { Facebook, Instagram, Github, User } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: User, href: '#about', label: 'About Me' },
  ];

  return (
    <div className="flex justify-center space-x-6 my-12">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="p-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;