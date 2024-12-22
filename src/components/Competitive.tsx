import React from 'react';
import { Zap, Shield, Brain } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const advantages = [
  {
    icon: Zap,
    title: 'All-in-One Platform',
    description: 'Combines all financial tools in one seamless platform.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Personalized recommendations and insights powered by advanced AI.',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Multi-layer security with biometric authentication and OTP verification.',
  },
];

export default function Competitive() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-highlight/5" id="edge">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle>Why Choose Hexagon?</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center p-8 bg-neutral rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
            >
              <advantage.icon className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-primary">{advantage.title}</h3>
              <p className="text-accent">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}