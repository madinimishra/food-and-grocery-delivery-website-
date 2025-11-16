import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plus, Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { toast } from 'sonner@2.0.3';

interface GroceryCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  unit?: string;
}

export function GroceryCard({ id, image, name, price, unit }: GroceryCardProps) {
  const { addToCart, favorites, toggleFavorite } = useApp();
  const isFavorite = favorites.includes(id);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
      type: 'grocery',
    });
    toast.success('Added to cart!');
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 relative border border-gray-100">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(id);
        }}
        className="absolute top-2.5 left-2.5 z-10 w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
      >
        <Heart
          className={`w-4 h-4 transition-all ${
            isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-600 group-hover:text-red-400'
          }`}
        />
      </button>
      <div className="relative h-40 bg-gradient-to-br from-green-50 to-gray-50 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-sm mb-1 line-clamp-2 h-10 group-hover:text-[#32C96E] transition-colors">{name}</h3>
        {unit && <p className="text-xs text-gray-500 mb-2 bg-gray-50 px-2 py-1 rounded-md inline-block">{unit}</p>}
        <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
          <span className="text-lg text-[#32C96E]">₹{price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-[#32C96E] to-[#28A55F] text-white w-10 h-10 rounded-xl flex items-center justify-center hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
