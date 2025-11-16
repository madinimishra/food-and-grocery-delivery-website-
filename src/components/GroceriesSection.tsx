import { GroceryCard } from './GroceryCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { groceries } from '../data/items';

export function GroceriesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
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
    <div className="py-8 bg-gradient-to-b from-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl mb-1">Quick Grocery</h2>
            <p className="text-sm text-gray-500">Fresh groceries at your doorstep in minutes</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#32C96E] hover:text-[#32C96E] transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-[#32C96E] hover:text-[#32C96E] transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {groceries.map((grocery) => (
            <div key={grocery.id} className="flex-shrink-0 w-[240px]">
              <GroceryCard {...grocery} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}