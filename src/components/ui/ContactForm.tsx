import React, { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-lg border border-accent focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg border border-accent focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-accent focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Your message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-neutral py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}