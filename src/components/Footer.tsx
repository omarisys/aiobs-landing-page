import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const navigation = {
  solutions: [
    { name: 'Chatbots', href: '#' },
    { name: 'Assistants Virtuels', href: '#' },
    { name: 'Automatisation', href: '#' },
    { name: 'Analyse Prédictive', href: '#' },
  ],
  sectors: [
    { name: 'Logistique', href: '#' },
    { name: 'Retail', href: '#' },
    { name: 'Banques', href: '#' },
    { name: 'Assurances', href: '#' },
  ],
  company: [
    { name: 'À propos', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Carrières', href: '#' },
    { name: 'Contact', href: '#' },
  ],
};

const contactInfo = [
  { icon: Mail, text: 'contact@aiobs.com' },
  { icon: Phone, text: '+212 6 61 80 92 23' },
  { icon: MapPin, text: 'Rabat, Morocco' },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-white font-bold text-2xl mb-4">AIOBS</div>
            <p className="text-gray-400 mb-4">
              Solutions d'Intelligence Artificielle innovantes pour transformer votre entreprise.
            </p>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-400">
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Secteurs</h3>
            <ul className="space-y-2">
              {navigation.sectors.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            {new Date().getFullYear()} AIOBS. Tous droits réservés.
          </div>
          <div className="flex gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={item.label}
              >
                <item.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}