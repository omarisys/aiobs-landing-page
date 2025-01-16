import React from 'react';
import { MessageSquare, Users, BarChart, Database } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Chatbots et Agents Conversationnels IA',
    description: 'Réponse instantanée et intelligente aux questions des clients, 24/7.',
    features: [
      'Escalade des demandes complexes grâce à une analyse contextuelle avancée',
      'Chatbots multilingues et personnalisables',
      'Amélioration continue par le Machine Learning'
    ]
  },
  {
    icon: Users,
    title: 'Assistants Virtuels pour les Collaborateurs',
    description: 'Automatisation des tâches répétitives grâce à l\'IA.',
    features: [
      'Analyse et traitement des demandes internes (RH, IT, etc.)',
      'Recommandations basées sur la data pour améliorer la productivité',
      'Intégration avec vos outils existants (ERP, CRM)'
    ]
  },
  {
    icon: BarChart,
    title: 'Analyse et Prédictions Basées sur la Data et le ML',
    description: 'Analyse exploratoire et visualisation des données historiques.',
    features: [
      'Modèles prédictifs pour identifier les tendances',
      'Détection d\'anomalies et de nouvelles opportunités',
      'Génération d\'alertes pour faciliter la prise de décision'
    ]
  },
  {
    icon: Database,
    title: 'Optimisation des Données et Insights Avancés',
    description: 'Structuration, nettoyage et valorisation des données d\'entreprise.',
    features: [
      'Création de pipelines pour l\'analyse en temps réel',
      'Tableaux de bord interactifs pour suivre les KPI',
      'Deep Learning pour analyses complexes (images, textes)'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Des Solutions IA adaptées à vos défis
        </h2>
        <p className="text-gray-300 text-xl text-center mb-12 max-w-3xl mx-auto">
          Nos services sont conçus pour améliorer la productivité, réduire les coûts et offrir une expérience inégalée à vos utilisateurs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors">
              <service.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}