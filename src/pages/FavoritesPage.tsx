import { Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { restaurants, groceries } from '../data/items';
import { RestaurantCard } from '../components/RestaurantCard';
import { GroceryCard } from '../components/GroceryCard';

export function FavoritesPage() {
  const { favorites } = useApp();

  // Filter favorited items from restaurants and groceries
  const favoriteRestaurants = restaurants.filter(restaurant => favorites.includes(restaurant.id));
  const favoriteGroceries = groceries.filter(grocery => favorites.includes(grocery.id));

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-[#FF8A00]" />
          <h1 className="text-3xl">My Favorites</h1>
        </div>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Heart className="w-24 h-24 text-gray-300 mb-6" />
            <h2 className="text-2xl text-gray-600 mb-2">No favorites yet</h2>
            <p className="text-gray-500">
              Start adding your favorite restaurants and items to see them here
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {/* Favorite Restaurants Section */}
            {favoriteRestaurants.length > 0 && (
              <div>
                <h2 className="text-2xl mb-4">Restaurants ({favoriteRestaurants.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} {...restaurant} />
                  ))}
                </div>
              </div>
            )}

            {/* Favorite Groceries Section */}
            {favoriteGroceries.length > 0 && (
              <div>
                <h2 className="text-2xl mb-4">Groceries ({favoriteGroceries.length})</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {favoriteGroceries.map((grocery) => (
                    <GroceryCard key={grocery.id} {...grocery} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}