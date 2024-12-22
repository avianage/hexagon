import React from 'react';
import { SectionTitle } from './ui/SectionTitle';

const founders = [
  {
    name: 'Aakash Joshi',
    role: 'Co-Founder & CEO',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400',
    bio: 'Former fintech executive with 10+ years of experience in digital banking.',
  },
  {
    name: 'Omkar Basarkar',
    role: 'Co-Founder & CTO',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400',
    bio: 'Tech innovator with expertise in AI and blockchain technologies.',
  },
];

export default function Founders() {
  return (
    <section className="py-20 bg-gradient-to-br from-highlight/5 to-primary/5" id="founders">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Meet Our Founders</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover ring-4 ring-primary/20"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">{founder.name}</h3>
              <p className="text-secondary font-medium mb-4">{founder.role}</p>
              <p className="text-accent">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}