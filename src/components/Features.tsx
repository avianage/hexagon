import React from 'react';
import { Wallet, Shield, TrendingUp, DollarSign, CreditCard, PieChart } from 'lucide-react';
import { FeatureCard } from './ui/FeatureCard';

const features = [
  {
    icon: Wallet,
    title: 'Banking',
    description: 'Seamless UPI, NEFT, and transaction tracking for effortless money management.',
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Comprehensive policy management and timely reminders for your peace of mind.',
  },
  {
    icon: TrendingUp,
    title: 'Investments',
    description: 'AI-driven recommendations to help you make informed investment decisions.',
  },
  {
    icon: DollarSign,
    title: 'Asset Valuation',
    description: 'Expert valuations for accurate net worth calculation and tracking.',
  },
  {
    icon: CreditCard,
    title: 'Debt Management',
    description: 'Smart loan and credit tracking to keep your finances in check.',
  },
  {
    icon: PieChart,
    title: 'Expenditure Tracking',
    description: 'Detailed expense reports and insights for better financial planning.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-accent/10" id="features">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}