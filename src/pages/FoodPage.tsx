import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Star, Clock, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useApp } from '../contexts/AppContext';
import { toast } from 'sonner@2.0.3';

const restaurants = [
  {
    id: 1,
    name: 'Burger Hub',
    image: 'https://images.unsplash.com/photo-1644447381290-85358ae625cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MjE2MzA4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.3,
    cuisine: 'Burgers, American',
    deliveryTime: '30 mins',
    menuItems: [
      { id: 'b1', name: 'Classic Burger', price: 199, image: 'https://images.unsplash.com/photo-1644447381290-85358ae625cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2MjE2MzA4MXww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'b2', name: 'Cheese Burger', price: 249, image: 'https://images.unsplash.com/photo-1703945530449-81f526495c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBidXJnZXIlMjBkZWxpY2lvdXN8ZW58MXx8fHwxNzYyMTc5ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'b3', name: 'Chicken Burger', price: 229, image: 'https://images.unsplash.com/photo-1637710847214-f91d99669e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYnVyZ2VyfGVufDF8fHx8MTc2MjE3OTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'b4', name: 'French Fries', price: 99, image: 'https://images.unsplash.com/photo-1665920403818-59e36526f738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllcyUyMGZyZW5jaHxlbnwxfHx8fDE3NjIxNzk4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 2,
    name: 'Pizza Planet',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emF8ZW58MXx8fHwxNzYyMTY4NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    cuisine: 'Pizza, Italian',
    deliveryTime: '25 mins',
    menuItems: [
      { id: 'p1', name: 'Margherita Pizza', price: 299, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emF8ZW58MXx8fHwxNzYyMTY4NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'p2', name: 'Pepperoni Pizza', price: 399, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YXxlbnwxfHx8fDE3NjIxMTQ5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'p3', name: 'Pasta Alfredo', price: 249, image: 'https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGFsZnJlZG98ZW58MXx8fHwxNzYyMTMxNDAzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'p4', name: 'Caesar Salad', price: 179, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzYyMTMyODYyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 3,
    name: 'Tandoori Treats',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NjIxNzk4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    cuisine: 'North Indian, Tandoor',
    deliveryTime: '35 mins',
    menuItems: [
      { id: 't1', name: 'Chicken Biryani', price: 329, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NjIxNzk4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 't2', name: 'Paneer Tikka', price: 279, image: 'https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYXxlbnwxfHx8fDE3NjIxNjk4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 't3', name: 'Butter Chicken', price: 349, image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjaGlja2VuJTIwY3Vycnl8ZW58MXx8fHwxNzYyMTQ0ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 4,
    name: 'Sushi Express',
    image: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYyMTQ4MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    cuisine: 'Japanese, Sushi',
    deliveryTime: '40 mins',
    menuItems: [
      { id: 's1', name: 'Sushi Platter', price: 599, image: 'https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYyMTQ4MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 's2', name: 'California Roll', price: 399, image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGxzfGVufDF8fHx8MTc2MjExNDk1Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 's3', name: 'Ramen Bowl', price: 349, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYW1lbiUyMG5vb2RsZXN8ZW58MXx8fHwxNzYyMTAwNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 5,
    name: 'South Spice',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBkb3NhfGVufDF8fHx8MTc2MjA1NTEwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.4,
    cuisine: 'South Indian',
    deliveryTime: '28 mins',
    menuItems: [
      { id: 'si1', name: 'Masala Dosa', price: 149, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBkb3NhfGVufDF8fHx8MTc2MjA1NTEwMXww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'si2', name: 'Idli Sambar', price: 99, image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGxpJTIwc2FtYmFyfGVufDF8fHx8MTc2MjA5MDI3NHww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'si3', name: 'Filter Coffee', price: 49, image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZXxlbnwxfHx8fDE3NjIxNTI0Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 6,
    name: 'Chinese Wok',
    image: 'https://images.unsplash.com/photo-1617622141675-d3005b9067c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWtrYSUyMG5vb2RsZXN8ZW58MXx8fHwxNzYyMTA1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.2,
    cuisine: 'Chinese',
    deliveryTime: '32 mins',
    menuItems: [
      { id: 'c1', name: 'Hakka Noodles', price: 199, image: 'https://images.unsplash.com/photo-1617622141675-d3005b9067c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWtrYSUyMG5vb2RsZXN8ZW58MXx8fHwxNzYyMTA1NzYxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'c2', name: 'Fried Rice', price: 179, image: 'https://images.unsplash.com/photo-1504670555658-db8fb2e908ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllZCUyMHJpY2UlMjBjaGluZXNlfGVufDF8fHx8MTc2MjA3NDcwNXww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'c3', name: 'Pad Thai', price: 229, image: 'https://images.unsplash.com/photo-1637806930600-37fa8892069d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWQlMjB0aGFpfGVufDF8fHx8MTc2MjE3OTg0OHww&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 7,
    name: 'Taco Fiesta',
    image: 'https://images.unsplash.com/photo-1599488400918-5f5f96b3f463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW58ZW58MXx8fHwxNzYyMTMxMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    cuisine: 'Mexican',
    deliveryTime: '30 mins',
    menuItems: [
      { id: 'tf1', name: 'Chicken Tacos', price: 249, image: 'https://images.unsplash.com/photo-1599488400918-5f5f96b3f463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW58ZW58MXx8fHwxNzYyMTMxMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'tf2', name: 'Burrito Bowl', price: 299, image: 'https://images.unsplash.com/photo-1668665771757-4d42737d295a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJyaXRvJTIwYm93bHxlbnwxfHx8fDE3NjIxNzU5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'tf3', name: 'Quesadilla', price: 229, image: 'https://images.unsplash.com/photo-1606350383072-4b031d6bd834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWVzYWRpbGxhJTIwbWV4aWNhbnxlbnwxfHx8fDE3NjIwOTcwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 8,
    name: 'Steakhouse Prime',
    image: 'https://images.unsplash.com/photo-1706650616334-97875fae8521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lcnxlbnwxfHx8fDE3NjIxNjYyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    cuisine: 'Steaks, American',
    deliveryTime: '45 mins',
    menuItems: [
      { id: 'sh1', name: 'Grilled Steak', price: 699, image: 'https://images.unsplash.com/photo-1706650616334-97875fae8521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhayUyMGRpbm5lcnxlbnwxfHx8fDE3NjIxNjYyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'sh2', name: 'Club Sandwich', price: 349, image: 'https://images.unsplash.com/photo-1730878423239-0fd430bbac37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW5kd2ljaCUyMGNsdWJ8ZW58MXx8fHwxNzYyMTE0MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 9,
    name: 'Sweet Delights',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbXxlbnwxfHx8fDE3NjIxNjAzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    cuisine: 'Desserts, Ice Cream',
    deliveryTime: '20 mins',
    menuItems: [
      { id: 'sd1', name: 'Ice Cream Sundae', price: 199, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbXxlbnwxfHx8fDE3NjIxNjAzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'sd2', name: 'Chocolate Cookies', price: 149, image: 'https://images.unsplash.com/photo-1642774692082-b876a1f3bda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWVzJTIwZGVzc2VydHxlbnwxfHx8fDE3NjIwNzc0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
];

export function FoodPage() {
  const { addToCart, setCartOpen, favorites, toggleFavorite } = useApp();

  const handleAddToCart = (item: any, restaurant: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      type: 'food',
      restaurantName: restaurant.name,
    });
    toast.success('Added to cart!');
  };

  const handleBuyNow = (item: any, restaurant: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      type: 'food',
      restaurantName: restaurant.name,
    });
    setCartOpen(true);
  };

  return (
    <div className="py-6 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-[#FF8A00] to-[#32C96E] bg-clip-text text-transparent">Food Delivery</h1>
          <p className="text-gray-600">Order from {restaurants.length} amazing restaurants near you</p>
        </div>

        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="mb-12">
            {/* Restaurant Header */}
            <div className="flex items-center gap-4 mb-6 bg-white rounded-2xl p-6 shadow-md">
              <div className="w-24 h-24 rounded-xl overflow-hidden">
                <ImageWithFallback
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl mb-1">{restaurant.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                    <span className="text-sm">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">{restaurant.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-4 gap-4">
              {restaurant.menuItems.map((item) => {
                const isFavorite = favorites.includes(item.id);
                return (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(item.id);
                      toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites!');
                    }}
                    className="absolute top-2 right-2 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
                      }`}
                    />
                  </button>
                  <div className="h-40 relative">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm mb-2">{item.name}</h3>
                    <p className="text-lg text-[#FF8A00] mb-3">₹{item.price}</p>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleAddToCart(item, restaurant)}
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#FF8A00] text-[#FF8A00] hover:bg-[#FF8A00] hover:text-white"
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                      <Button
                        onClick={() => handleBuyNow(item, restaurant)}
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-[#FF8A00] to-[#32C96E] hover:opacity-90"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}