import React, { useRef } from 'react';
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
  Send,
  Building
} from 'lucide-react';

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = React.useState({
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
        'service_st3ijwa',
        'template_eced47b',
        formRef.current!,
        'b02iGkzSTi1Gi53Nj'
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
      
      {/* Hero Section avec parallax */}
      <header className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transform scale-110"
          style={{
            backgroundImage: 'url("/images/wallpaper.png")',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">Bien Vieillir à Dieulefit</h1>
          <p className="text-2xl mb-8 font-light leading-relaxed">Une nouvelle approche du bien-être pour nos aînés dans un cadre exceptionnel</p>
          <a 
            href="#soutenir" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2"
          >
            <Heart className="w-5 h-5" />
            <span>Soutenir le projet</span>
          </a>
        </div>
      </header>

      {/* Contexte Section avec design moderne */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
            Contexte et ambition du projet
          </h2>
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Face aux défis posés par l'allongement de l'espérance de vie et aux limites des structures d'hébergements classiques, nous proposons de réfléchir, avec tous les Dieulefitois qui le souhaitent, à une alternative qui soit humaine, adaptée et accessible au plus grand nombre.
            </p>
            <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-0">
                Il s'agit d'accompagner les personnes du 3eme et 4eme âge, au plus près du type d'habitat qu'ils souhaitent, tant dans son emplacement, que dans sa configuration et son aménagement.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Deux structures (à créer) assureront, l'une la réalisation et la gestion de l'habitat proprement dit, l'autre l'aspect plus humain et social des relations entre les habitants et avec les partenaires extérieurs concernés le cas échéant. Dans le cadre législatif et règlementaire de l'Habitat Inclusif, un animateur de vie partagée veillera à l'organisation et une saine efficacité de ces relations.
            </p>
          </div>
        </div>
      </section>

      {/* Approche Section avec cards modernes */}
      <section className="py-24 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
            Une approche flexible et humaine
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Home className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Façon Béguinages</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pour avoir « sa maison » sans les inconvénients qui en faisaient le charme quand on était plus jeune. Types T1, T2, ou T3 avec ou sans un petit espace privatif extérieur.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Colocations seniors</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pour ceux qui souhaitent partager leur quotidien avec d'autres personnes tout en conservant leur autonomie.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Building className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Espaces de repos</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Pour se ressourcer après un incident de santé ou une hospitalisation. Accueil à la semaine ou au mois.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Flower2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold ml-4 text-gray-800">Jardins partagés</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Espaces verts dédiés aux seniors, ouverts aux non-résidents, pour se détendre ou participer à des activités thérapeutiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complexe Section avec image et texte */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
            Exemple d'un complexe de 3 unités de vie
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Architecture adaptée</h3>
                <p className="text-gray-700">
                  Chaque unité est conçue pour maximiser le confort et l'autonomie, avec des espaces de vie lumineux et des accès facilités.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Espaces communs</h3>
                <p className="text-gray-700">
                  Des zones partagées favorisent la convivialité et les activités collectives, tout en préservant l'intimité de chacun.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-800 mb-3">Accessibilité optimale</h3>
                <p className="text-gray-700">
                  La conception de plain-pied et les aménagements adaptés garantissent une mobilité aisée pour tous les résidents.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/plan.png"
                alt="Complexe de 3 unités de vie"
                className="w-[773px] h-[559px] object-contain"
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto mt-16">
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Plusieurs terrains (d'environ 1000m² chacun) seraient nécessaires pour couvrir notre territoire d'autant de « complexes d'unité de vie » (Béguinages, colocations…) que nécessaire.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Au fur et à mesure des réflexions, nous trouverons ensemble les solutions adaptées et souhaitées à Dieulefit et, pourquoi pas, plus largement sur la Communauté de Communes Dieulefit Bourdeaux, à l'instar du développement du concept de « Quartier Inclusif » par l'association Bien Vivre et bien Vieillir Ensemble chez soi du quartier des Rouvières.
            </p>
          </div>
        </div>
      </section>

      {/* Support Form Section avec design moderne */}
      <section id="soutenir" className="bg-emerald-50 py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Soutenir le projet</h2>
          <p className="text-center text-gray-600 text-lg mb-12 leading-relaxed">
            Pour concrétiser ce projet ambitieux, nous souhaitons impliquer pleinement les habitants de Dieulefit et les acteurs locaux. Votre soutien est essentiel !
          </p>
          
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Je soutiens le projet</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer avec design moderne */}
      <footer className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Porteurs du projet</h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Maxime CHAUVIN - Expert juridique et financier</span>
                </p>
                <p className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Frédéric TRESSOL - Jeune retraité de l'encadrement d'« Aide et Accompagnement à Domicile », et de structures Médico-sociales de l'Economie Sociale et Solidaire</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                  <span>Dieulefit, Drôme (26220)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-emerald-400" />
                  <span>Réunions publiques prévues pour l'été 2025</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 Bien Vieillir à Dieulefit. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;