import { CategoryIcons } from '../components/CategoryIcons';
import { BannerSlider } from '../components/BannerSlider';
import { RestaurantsSection } from '../components/RestaurantsSection';
import { GroceriesSection } from '../components/GroceriesSection';
import { Sparkles, TrendingUp, Award } from 'lucide-react';

export function HomePage() {
  return (
    <div className="pb-24">
      {/* Hero Section with Stats */}
      <div className="bg-gradient-to-r from-orange-50 via-orange-50/50 to-green-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF8A00]/20 to-[#FF8A00]/10 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#FF8A00]" />
                </div>
                <div>
                  <p className="text-3xl bg-gradient-to-r from-[#FF8A00] to-[#32C96E] bg-clip-text text-transparent">500+</p>
                  <p className="text-sm text-gray-500 mt-0.5">Restaurants</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#32C96E]/20 to-[#32C96E]/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#32C96E]" />
                </div>
                <div>
                  <p className="text-3xl bg-gradient-to-r from-[#FF8A00] to-[#32C96E] bg-clip-text text-transparent">10K+</p>
                  <p className="text-sm text-gray-500 mt-0.5">Daily Orders</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-100 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <p className="text-3xl bg-gradient-to-r from-[#FF8A00] to-[#32C96E] bg-clip-text text-transparent">4.5★</p>
                  <p className="text-sm text-gray-500 mt-0.5">User Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Icons */}
      <CategoryIcons />
      
      {/* Banner Slider */}
      <BannerSlider />
      
      {/* Nearby Restaurants Section */}
      <RestaurantsSection />
      
      {/* Quick Grocery Section */}
      <GroceriesSection />
    </div>
  );
}