import { Home, UtensilsCrossed, ShoppingBasket, Heart, User } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'food', icon: UtensilsCrossed, label: 'Food' },
  { id: 'grocery', icon: ShoppingBasket, label: 'Grocery' },
  { id: 'favorites', icon: Heart, label: 'Favorites' },
  { id: 'account', icon: User, label: 'Account' },
];

export function BottomNav() {
  const { activeTab, setActiveTab } = useApp();

  return (
    <div className="bg-white/95 backdrop-blur-lg border-t-2 border-gray-100 shadow-2xl fixed bottom-0 left-0 right-0 z-40 safe-area-inset-bottom">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`flex flex-col items-center gap-1.5 py-2 px-4 rounded-2xl transition-all duration-200 ${
                  isActive 
                    ? 'text-[#FF8A00] bg-orange-50' 
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <div className={`relative ${isActive ? 'transform scale-110' : ''}`}>
                  <Icon className="w-6 h-6 transition-transform" />
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#FF8A00] rounded-full" />
                  )}
                </div>
                <span className={`text-xs transition-all ${isActive ? 'font-medium' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
