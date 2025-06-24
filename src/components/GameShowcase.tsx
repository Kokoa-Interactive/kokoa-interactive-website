
import { ExternalLink } from 'lucide-react';

const GameShowcase = () => {
  const games = [
    {
      title: "Pixel Adventure",
      description: "A challenging 2D platformer with pixel-perfect controls and beautiful hand-drawn artwork. Navigate through mystical forests and ancient ruins.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      steamUrl: "https://store.steampowered.com",
      genre: "2D Platformer",
      status: "Released"
    },
    {
      title: "Code Warriors",
      description: "An innovative puzzle game where players solve coding challenges to defeat enemies and progress through a cyberpunk world.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      steamUrl: "https://store.steampowered.com",
      itchUrl: "https://itch.io",
      genre: "Puzzle/Strategy",
      status: "Released"
    },
    {
      title: "Digital Dreams",
      description: "An artistic exploration game that takes players through surreal digital landscapes with interactive storytelling.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      itchUrl: "https://itch.io",
      genre: "Adventure/Artistic",
      status: "In Development"
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Games
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore the worlds I've created, each one a unique journey waiting to be discovered
          </p>
        </div>
        
        <div className="w-full">
          <div className="relative h-96 overflow-hidden">
            {games.map((game, index) => (
              <div
                key={game.title}
                className="group absolute inset-0 overflow-hidden"
                style={{
                  clipPath: index === 0 
                    ? 'polygon(0 0, 33.33% 0, 36.67% 100%, 0% 100%)'
                    : index === 1 
                    ? 'polygon(33.33% 0, 66.67% 0, 70% 100%, 36.67% 100%)'
                    : 'polygon(66.67% 0, 100% 0, 100% 100%, 70% 100%)'
                }}
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay - now shows for all blocks */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                  <div className="text-center text-white max-w-xs">
                    <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
                    <p className="text-purple-400 text-sm mb-3">{game.genre}</p>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{game.description}</p>
                    <div className="flex flex-col gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        game.status === 'Released' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {game.status}
                      </span>
                      <div className="flex gap-2 justify-center">
                        {game.steamUrl && (
                          <a
                            href={game.steamUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
                          >
                            <ExternalLink size={12} />
                            Steam
                          </a>
                        )}
                        {game.itchUrl && (
                          <a
                            href={game.itchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 px-3 py-1 bg-pink-600 text-white rounded text-xs hover:bg-pink-700 transition-colors"
                          >
                            <ExternalLink size={12} />
                            itch.io
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;
