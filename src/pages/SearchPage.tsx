import { Search, X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { restaurants, groceries } from '../data/items';
import { RestaurantCard } from '../components/RestaurantCard';
import { GroceryCard } from '../components/GroceryCard';

export function SearchPage() {
  const { searchQuery, setSearchQuery, setActiveTab } = useApp();

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const query = searchQuery.toLowerCase();
    return (
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.cuisine.toLowerCase().includes(query)
    );
  });

  const filteredGroceries = groceries.filter((grocery) => {
    const query = searchQuery.toLowerCase();
    return grocery.name.toLowerCase().includes(query);
  });

  const hasResults = filteredRestaurants.length > 0 || filteredGroceries.length > 0;

  const handleClearSearch = () => {
    setSearchQuery('');
    setActiveTab('home');
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Search Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6 text-[#FF8A00]" />
            <h1 className="text-3xl">Search Results for "{searchQuery}"</h1>
          </div>
          <button
            onClick={handleClearSearch}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
            Clear Search
          </button>
        </div>

        {!hasResults ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-2xl mb-2">No results found</h2>
            <p className="text-gray-500 mb-6">
              Try searching for something else or browse our categories
            </p>
            <button
              onClick={handleClearSearch}
              className="px-6 py-3 bg-gradient-to-r from-[#FF8A00] to-[#32C96E] text-white rounded-xl hover:opacity-90 transition-opacity"
            >
              Browse All
            </button>
          </div>
        ) : (
          <>
            {/* Restaurants Results */}
            {filteredRestaurants.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl">Restaurants</h2>
                  <span className="text-gray-500 text-sm">
                    {filteredRestaurants.length} result{filteredRestaurants.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                  ))}
                </div>
              </div>
            )}

            {/* Groceries Results */}
            {filteredGroceries.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl">Groceries</h2>
                  <span className="text-gray-500 text-sm">
                    {filteredGroceries.length} result{filteredGroceries.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredGroceries.map((grocery) => (
                    <GroceryCard key={grocery.id} grocery={grocery} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
