import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-neutral p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-primary mb-6" />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-accent">{description}</p>
    </div>
  );
}