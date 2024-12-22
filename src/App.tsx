import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Audience from './components/Audience';
import Competitive from './components/Competitive';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Audience />
      <Competitive />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;