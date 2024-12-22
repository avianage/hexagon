import React from 'react';
import { Users } from 'lucide-react';

export default function Audience() {
  return (
    <section className="py-20 bg-white" id="audience">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Users className="w-16 h-16 text-blue-600 mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Who Is Hexagon For?</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          Hexagon is perfect for individuals, families, and small business owners looking to take control of their financial future. Whether you're just starting your financial journey or managing complex portfolios, our platform adapts to your needs.
        </p>
      </div>
    </section>
  );
}