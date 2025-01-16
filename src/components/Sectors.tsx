import React from 'react';
import { Truck, ShoppingBag, Building2, Stethoscope, Factory } from 'lucide-react';

const sectors = [
  {
    icon: Truck,
    title: 'Logistique',
    problem: 'Gestion inefficace des stocks, retards de livraison, suivi limité des expéditions.',
    solutions: [
      'Chatbots pour le suivi des livraisons en temps réel',
      'Modèles prédictifs pour anticiper les ruptures de stock',
      'Algorithmes d\'optimisation des itinéraires',
      'Analyse des données logistiques'
    ]
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    problem: 'Expérience client non personnalisée, inefficacité des promotions, gestion des stocks.',
    solutions: [
      'Chatbots pour recommandations produits personnalisées',
      'Analyse des données de ventes pour promotions ciblées',
      'Prédictions des tendances saisonnières',
      'Tableaux de bord temps réel des performances'
    ]
  },
  {
    icon: Building2,
    title: 'Banques et Assurances',
    problem: 'Délais dans le service client, manque de personnalisation, détection de fraudes.',
    solutions: [
      'Assistants virtuels pour questions clients',
      'Détection des fraudes en temps réel',
      'Prédictions des comportements financiers',
      'Analyse des risques et tendances'
    ]
  },
  {
    icon: Stethoscope,
    title: 'Santé',
    problem: 'Suivi inefficace des patients, surcharge administrative, prévisions des besoins médicaux.',
    solutions: [
      'Chatbots pour questions patients',
      'Automatisation administrative',
      'Prédiction des pics de demande',
      'Outils de diagnostic IA'
    ]
  },
  {
    icon: Factory,
    title: 'Industrie et Fabrication',
    problem: 'Maintenance imprévisible, inefficacité des chaînes de production.',
    solutions: [
      'Maintenance prédictive des équipements',
      'Analyse des performances de production',
      'Automatisation des processus répétitifs',
      'Tableaux de bord temps réel'
    ]
  }
];

export function Sectors() {
  return (
    <section id="sectors" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Des solutions IA pour chaque secteur
        </h2>
        <p className="text-gray-300 text-xl text-center mb-12 max-w-3xl mx-auto">
          Nos solutions sont spécialement conçues pour répondre aux besoins uniques de chaque domaine.
        </p>
        
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
            {sectors.map((sector, index) => (
              <div 
                key={index} 
                className="flex-none w-[300px] md:w-[400px] snap-start bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-lg rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-purple-500/20"
              >
                <div className="bg-purple-500/10 p-4">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <sector.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{sector.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="text-purple-400 font-medium mb-3 flex items-center gap-2">
                      <div className="w-1 h-4 bg-purple-500 rounded-full"></div>
                      Problématique
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{sector.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-purple-400 font-medium mb-3 flex items-center gap-2">
                      <div className="w-1 h-4 bg-purple-500 rounded-full"></div>
                      Solutions
                    </h4>
                    <ul className="space-y-3">
                      {sector.solutions.map((solution, idx) => (
                        <li key={idx} className="text-gray-400 flex items-start gap-3 group">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                          <span className="group-hover:text-purple-400 transition-colors">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}