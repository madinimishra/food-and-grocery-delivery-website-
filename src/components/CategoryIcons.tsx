import { UtensilsCrossed, ShoppingBasket, Apple, Milk, Sandwich, Coffee, Pizza, IceCream } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const categories = [
  { name: 'Food', icon: UtensilsCrossed, color: '#FF8A00', tab: 'food' },
  { name: 'Groceries', icon: ShoppingBasket, color: '#32C96E', tab: 'grocery' },
  { name: 'Fruits', icon: Apple, color: '#FF6B6B', tab: 'grocery' },
  { name: 'Dairy', icon: Milk, color: '#4ECDC4', tab: 'grocery' },
  { name: 'Snacks', icon: Sandwich, color: '#FFD93D', tab: 'grocery' },
  { name: 'Beverages', icon: Coffee, color: '#6C5CE7', tab: 'grocery' },
  { name: 'Pizza', icon: Pizza, color: '#FF8A00', tab: 'food' },
  { name: 'Desserts', icon: IceCream, color: '#FF69B4', tab: 'food' },
];

export function CategoryIcons() {
  const { setActiveTab } = useApp();

  return (
    <div className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl mb-6">What's on your mind?</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(category.tab)}
                className="flex flex-col items-center gap-3 group flex-shrink-0"
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl border border-gray-100"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <Icon className="w-9 h-9 transition-transform group-hover:scale-110" style={{ color: category.color }} />
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
