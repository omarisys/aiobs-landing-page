import React from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-white font-bold text-2xl">AIOBS</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#sectors" className="text-gray-300 hover:text-white transition-colors">Secteurs</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Témoignages</a>
            <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Contactez-nous
            </button>
          </div>
          <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}