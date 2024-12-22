import React from 'react';
import { Mail } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { ContactForm } from './ui/ContactForm';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
          <SectionTitle>Get in Touch</SectionTitle>
          <p className="text-accent text-lg mb-12">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}