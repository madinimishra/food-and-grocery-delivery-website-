import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Clock, Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface RestaurantCardProps {
  id: string;
  image: string;
  name: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
}

export function RestaurantCard({ id, image, name, rating, cuisine, deliveryTime }: RestaurantCardProps) {
  const { favorites, toggleFavorite } = useApp();
  const isFavorite = favorites.includes(id);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 relative border border-gray-100">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(id);
        }}
        className="absolute top-3 left-3 z-10 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
      >
        <Heart
          className={`w-5 h-5 transition-all ${
            isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-600 group-hover:text-red-400'
          }`}
        />
      </button>
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg">
          <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
          <span className="text-sm">{rating}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg mb-1.5 group-hover:text-[#FF8A00] transition-colors">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{cuisine}</p>
        <div className="flex items-center gap-1.5 text-gray-600">
          <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
            <Clock className="w-4 h-4 text-[#FF8A00]" />
          </div>
          <span className="text-sm">{deliveryTime}</span>
        </div>
      </div>
    </div>
  );
}
