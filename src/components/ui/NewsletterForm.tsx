import React from 'react';

export function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      <button 
        type="submit"
        className="bg-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}