import { RestaurantCard } from './RestaurantCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { restaurants } from '../data/items';

export function RestaurantsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl mb-1">Nearby Restaurants</h2>
            <p className="text-sm text-gray-500">Delicious food delivered to your doorstep</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#FF8A00] hover:text-[#FF8A00] transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#FF8A00] hover:text-[#FF8A00] transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="flex-shrink-0 w-[340px]">
              <RestaurantCard {...restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}