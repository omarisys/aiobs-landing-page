import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Contactez-nous
        </h2>
        <p className="text-gray-300 text-xl text-center mb-12 max-w-3xl mx-auto">
          Prêt à transformer votre entreprise avec l'IA ? Parlons de vos besoins.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Jean"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="jean.dupont@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-purple-500/20 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p>contact@aiobs.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Téléphone</p>
                    <p>+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Adresse</p>
                    <p>Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-600/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-gray-300">
                <p>Lundi - Vendredi: 9h00 - 18h00</p>
                <p>Samedi - Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}