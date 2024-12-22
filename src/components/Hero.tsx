import React from 'react';
import { Hexagon } from 'lucide-react';
import { HeroButton } from './ui/HeroButton';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Hexagon size={64} className="text-neutral" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-neutral mb-6">
          Hexagon
        </h1>
        <p className="text-2xl md:text-3xl text-neutral mb-8">
          Your One-Stop Solution for Financial Freedom
        </p>
        <p className="text-xl text-neutral/90 mb-12 max-w-2xl mx-auto">
          Experience a revolutionary approach to managing your finances with our comprehensive platform that brings all your financial needs under one roof.
        </p>
        <HeroButton />
      </div>
    </section>
  );
}