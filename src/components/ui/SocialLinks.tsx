import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="flex justify-center space-x-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="hover:text-blue-400 transition-colors"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
}