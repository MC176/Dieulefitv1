import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import {
  Heart,
  Home,
  Users,
  Flower2,
  Calendar,
  CheckCircle,
  MapPin,
  Send
} from 'lucide-react';

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    adresse: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await emailjs.sendForm(
        'service_st3ijwa', // Remplacez par votre Service ID
        'template_eced47b', // Remplacez par votre Template ID
        formRef.current!,
        'b02iGkzSTi1Gi53Nj' // Remplacez par votre Public Key
      );

      if (result.text === 'OK') {
        toast.success('Votre demande a été envoyée avec succès !');
        setFormData({ nom: '', prenom: '', dateNaissance: '', adresse: '', message: '' });
      }
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
      console.error('EmailJS Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("/images/wallpaper.png")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Bien Vieillir à Dieulefit</h1>
          <p className="text-xl mb-8">Une nouvelle approche du bien-être pour nos aînés dans un cadre exceptionnel</p>
          <a href="#soutenir" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-colors">
            Soutenir le projet
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Notre Vision</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Habitat Partagé</h3>
              <p className="text-gray-600">Des espaces de vie conviviaux adaptés aux besoins des seniors</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vie Sociale Active</h3>
              <p className="text-gray-600">Une communauté dynamique et solidaire</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bien-être</h3>
              <p className="text-gray-600">Un accompagnement personnalisé pour une vie épanouie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-emerald-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Nos Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Home className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Habitat Partagé</h3>
                <p className="text-gray-600">Des logements adaptés permettant de maintenir son autonomie tout en bénéficiant d'une présence bienveillante.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Calendar className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Activités Quotidiennes</h3>
                <p className="text-gray-600">Un programme varié d'activités sociales, culturelles et physiques adaptées.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Flower2 className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Espaces Verts</h3>
                <p className="text-gray-600">Des jardins thérapeutiques et des espaces extérieurs propices à la détente.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accompagnement</h3>
                <p className="text-gray-600">Une équipe professionnelle à l'écoute pour un soutien personnalisé.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi Dieulefit ?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Un climat méditerranéen idéal pour le bien-être</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Une ville à taille humaine avec tous les services nécessaires</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Une vie culturelle riche et une communauté accueillante</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Un environnement naturel préservé en Drôme provençale</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/ville.jpg" 
                alt="Vue panoramique de Dieulefit" 
                className="rounded-lg shadow-xl object-cover h-[500px] w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Dieulefit, Drôme Provençale</p>
                <p className="text-xs opacity-75">Un cadre de vie exceptionnel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Form Section */}
      <section id="soutenir" className="bg-emerald-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Participez au Projet</h2>
          <p className="text-center text-gray-600 mb-12">Rejoignez-nous dans cette aventure humaine pour créer un lieu de vie innovant à Dieulefit.</p>
          
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="dateNaissance" className="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
                <input
                  type="date"
                  id="dateNaissance"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="adresse" className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (facultatif)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Partagez vos questions, attentes ou suggestions concernant le projet..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center justify-center space-x-2"
              >
                <span>Je souhaite participer</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Bien Vieillir à Dieulefit</h3>
              <p className="text-gray-400">Un projet innovant d'habitat partagé pour seniors actifs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Dieulefit, Drôme (26220)</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
              <p className="text-gray-400">Restez informé de l'avancement du projet et des prochaines réunions d'information.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 Bien Vieillir à Dieulefit. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;