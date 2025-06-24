
import GameCard from './GameCard';

const GameShowcase = () => {
  // Sample games data - you can replace with your actual games
  const games = [
    {
      title: "Pixel Adventure",
      description: "A challenging 2D platformer with pixel-perfect controls and beautiful hand-drawn artwork. Navigate through mystical forests and ancient ruins.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop",
      steamUrl: "https://store.steampowered.com",
      genre: "2D Platformer",
      status: "Released"
    },
    {
      title: "Code Warriors",
      description: "An innovative puzzle game where players solve coding challenges to defeat enemies and progress through a cyberpunk world.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
      steamUrl: "https://store.steampowered.com",
      itchUrl: "https://itch.io",
      genre: "Puzzle/Strategy",
      status: "Released"
    },
    {
      title: "Neural Networks",
      description: "A sci-fi strategy game where you build and manage AI networks to solve complex problems across different planets.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=450&fit=crop",
      steamUrl: "https://store.steampowered.com",
      genre: "Strategy/Simulation",
      status: "Early Access"
    },
    {
      title: "Digital Dreams",
      description: "An artistic exploration game that takes players through surreal digital landscapes with interactive storytelling.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <div 
              key={game.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;
