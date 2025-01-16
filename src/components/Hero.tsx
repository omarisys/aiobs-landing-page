import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-32 pb-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
        Intégrez l'IA dans votre entreprise : 
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          {" "}Révolutionnez vos processus avec des agents intelligents
        </span>
      </h1>
      <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
        Du service client au support interne, nous créons des solutions IA sur mesure pour optimiser vos opérations et améliorer vos résultats.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
          Découvrir nos solutions
          <ArrowRight className="w-4 h-4" />
        </button>
        <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Demandez une consultation gratuite
        </button>
      </div>
    </div>
  );
}