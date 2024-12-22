import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NewsletterForm } from './ui/NewsletterForm';
import { SocialLinks } from './ui/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <NewsletterForm />
          </div>
          <div className="flex items-start justify-center md:justify-end">
            <button className="bg-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Coming Soon
            </button>
          </div>
        </div>
        
        <SocialLinks />
        
        <div className="text-center text-gray-400 mt-8">
          <p>&copy; {new Date().getFullYear()} Hexagon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}