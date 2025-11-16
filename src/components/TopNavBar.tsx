import { MapPin, Search, ShoppingCart, Home, UtensilsCrossed, ShoppingBasket, Heart, User } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { SignInDialog } from './SignInDialog';

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'food', icon: UtensilsCrossed, label: 'Food' },
  { id: 'grocery', icon: ShoppingBasket, label: 'Grocery' },
  { id: 'favorites', icon: Heart, label: 'Favorites' },
  { id: 'account', icon: User, label: 'Account' },
];

export function TopNavBar() {
  const { activeTab, setActiveTab, cart, setCartOpen, user, searchQuery, setSearchQuery } = useApp();
  const [signInOpen, setSignInOpen] = useState(false);

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAccountClick = () => {
    if (!user) {
      setSignInOpen(true);
    } else {
      setActiveTab('account');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      setActiveTab('search');
    } else if (activeTab === 'search') {
      setActiveTab('home');
    }
  };

  return (
    <>
      <div className="bg-white shadow-md sticky top-0 z-50">
        {/* Main Nav Bar */}
        <div className="border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between gap-8">
              {/* Logo */}
              <button 
                onClick={() => setActiveTab('home')}
                className="flex items-center gap-2"
              >
                <div className="bg-gradient-to-br from-[#FF8A00] to-[#32C96E] w-10 h-10 rounded-xl flex items-center justify-center">
                  <ShoppingBasket className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl bg-gradient-to-r from-[#FF8A00] to-[#32C96E] bg-clip-text text-transparent">QuickBite</span>
              </button>

              {/* Location */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <MapPin className="w-5 h-5 text-[#FF8A00]" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Delivering to:</span>
                  <span className="text-sm">Mumbai, India</span>
                </div>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-2xl relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for restaurants, food or groceries…"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF8A00] focus:border-transparent transition-all"
                />
              </div>

              {/* User Info / Sign In */}
              {user ? (
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#FF8A00] to-[#32C96E] rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm">{user.name}</span>
                </div>
              ) : (
                <button
                  onClick={() => setSignInOpen(true)}
                  className="px-6 py-2 bg-gradient-to-r from-[#FF8A00] to-[#32C96E] text-white rounded-xl hover:opacity-90 transition-opacity"
                >
                  Sign In
                </button>
              )}

              {/* Cart Icon */}
              <button 
                onClick={() => setCartOpen(true)}
                className="p-3 hover:bg-gray-100 rounded-xl transition-colors relative"
              >
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FF8A00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Nav - Navigation Items */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'account') {
                      handleAccountClick();
                    } else {
                      setActiveTab(item.id);
                    }
                  }}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all ${
                    isActive
                      ? 'border-[#FF8A00] text-[#FF8A00]'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <SignInDialog open={signInOpen} onOpenChange={setSignInOpen} />
    </>
  );
}
