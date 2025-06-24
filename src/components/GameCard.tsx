
import { ExternalLink } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  steamUrl?: string;
  itchUrl?: string;
  genre?: string;
  status?: string;
}

const GameCard = ({ title, description, image, steamUrl, itchUrl, genre, status }: GameCardProps) => {
  return (
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          {status && (
            <span className={`px-2 py-1 text-xs rounded-full ${
              status === 'Released' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              {status}
            </span>
          )}
        </div>
        
        {genre && (
          <p className="text-purple-400 text-sm mb-3">{genre}</p>
        )}
        
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex gap-3">
          {steamUrl && (
            <a
              href={steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={16} />
              Steam
            </a>
          )}
          {itchUrl && (
            <a
              href={itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-red-600 text-white rounded-lg hover:from-pink-700 hover:to-red-700 transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={16} />
              itch.io
            </a>
          )}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default GameCard;
