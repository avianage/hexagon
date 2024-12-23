import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import omkar from "../assets/founders/omkar.jpg";
import aakash from "../assets/founders/aakash.png";

const founders = [
  {
    name: 'Aakash Amit Joshi',
    role: 'Co-Founder',
    image: aakash,
    bio: 'B.E Computer, Tech Enthusiast, Passionate about creating Solutions',
  },
  {
    name: 'Omkar Basarkar',
    role: 'Co-Founder',
    image: omkar,
    bio: 'B.M.S in Finance, Finance Enthusiast.',
  },
];

export default function Founders() {
  return (
    <section className="py-20 bg-gradient-to-br from-highlight/5 to-primary/5" id="founders">
      <div className="max-w-6xl px-4 mx-auto">
        <SectionTitle>Meet Our Founders</SectionTitle>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {founders.map((founder, index) => (
            <div key={index} className="text-center group">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 transition-opacity rounded-full opacity-0 bg-gradient-to-br from-primary to-secondary group-hover:opacity-20"></div>
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="object-cover w-48 h-48 mx-auto rounded-full ring-4 ring-primary/20"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-primary">{founder.name}</h3>
              <p className="mb-4 font-medium text-secondary">{founder.role}</p>
              <p className="text-accent">{founder.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}