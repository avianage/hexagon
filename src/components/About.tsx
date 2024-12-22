import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Target } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <Target className="w-16 h-16 text-primary mx-auto mb-6" />
        </div>
        <SectionTitle>About Hexagon</SectionTitle>
        <p className="text-xl text-primary/80 leading-relaxed text-center">
          Our mission is to simplify financial processes and cover all aspects of a healthy financial life. We believe everyone deserves access to powerful financial tools that were once reserved for the wealthy.
        </p>
      </div>
    </section>
  );
}