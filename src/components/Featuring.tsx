
import { ExternalLink } from 'lucide-react';

const Featuring = () => {
  const featuredGame = {
    title: "Ink Link",
    description: "Ink Link is a sleek world of action in 2.5D! Outsmart enemies, piece together platforms, and upgrade your skills to take on powerful bosses. Discover hidden paths as darkness creeps in and your ally-turned-enemy, Ink, tests your skills—and your will to survive.",
    image: "/SteamCapsule_1232_706.jpg",
    steamUrl: "https://store.steampowered.com/app/2908170/Ink_Link/",
    genre: "Action/Looter Shooter",
    status: "Coming Soon"
  };

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featuring
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our latest creation, pushing the boundaries of interactive entertainment
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30">
            <div className="aspect-[2/1] overflow-hidden">
              <img 
                src={featuredGame.image} 
                alt={featuredGame.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {featuredGame.title}
                </h3>
                <span className="px-3 py-1 text-sm rounded-full bg-yellow-500/20 text-yellow-400">
                  {featuredGame.status}
                </span>
              </div>
              
              <p className="text-purple-400 text-lg mb-4">{featuredGame.genre}</p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{featuredGame.description}</p>
              
              <a
                href={featuredGame.steamUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 text-lg font-semibold"
              >
                <ExternalLink size={20} />
                Play on Steam
              </a>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuring;
