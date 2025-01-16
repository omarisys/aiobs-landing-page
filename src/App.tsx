import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Sectors } from './components/Sectors';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <Services />
          <Sectors />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;