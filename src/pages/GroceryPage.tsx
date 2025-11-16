import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ShoppingBag, Plus, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useApp } from '../contexts/AppContext';
import { toast } from 'sonner@2.0.3';

const categories = [
  {
    id: 'vegetables',
    name: 'Fresh Vegetables',
    items: [
      { id: 'v1', name: 'Fresh Mixed Vegetables', price: 89, unit: '500g', image: 'https://images.unsplash.com/photo-1670680901600-8b2b1856ce3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBncm9jZXJ5fGVufDF8fHx8MTc2MjE2MjQyM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'v2', name: 'Organic Tomatoes', price: 45, unit: '1kg', image: 'https://images.unsplash.com/photo-1683008952458-dc02ac67f382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHRvbWF0b2VzfGVufDF8fHx8MTc2MjE2NDU5OXww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'v3', name: 'Fresh Onions', price: 35, unit: '1kg', image: 'https://images.unsplash.com/photo-1612679300857-0b7600449e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmlvbnMlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzYyMTAwMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'v4', name: 'Bell Peppers', price: 65, unit: '500g', image: 'https://images.unsplash.com/photo-1632992468737-54880593aada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWxsJTIwcGVwcGVyJTIwY2Fwc2ljdW18ZW58MXx8fHwxNzYyMTc5ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'v5', name: 'Fresh Carrots', price: 42, unit: '500g', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNhcnJvdHN8ZW58MXx8fHwxNzYyMTU0ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'v6', name: 'Fresh Spinach', price: 28, unit: '250g', image: 'https://images.unsplash.com/photo-1634731201932-9bd92839bea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWNoJTIwZnJlc2h8ZW58MXx8fHwxNzYyMTc5ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'v7', name: 'Potatoes', price: 30, unit: '1kg', image: 'https://images.unsplash.com/photo-1632403812216-1877021360a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG9lcyUyMHZlZ2V0YWJsZXxlbnwxfHx8fDE3NjIwODQ0MjN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    items: [
      { id: 'f1', name: 'Fresh Apples', price: 120, unit: '1kg', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGFwcGxlc3xlbnwxfHx8fDE3NjIxNzg4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'f2', name: 'Bananas', price: 50, unit: '1 dozen', image: 'https://images.unsplash.com/photo-1695004310230-edf1cb00f321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmFzJTIwZnJ1aXR8ZW58MXx8fHwxNzYyMTU5MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'f3', name: 'Fresh Oranges', price: 80, unit: '1kg', image: 'https://images.unsplash.com/photo-1663002976076-de02deea5fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2VzJTIwY2l0cnVzfGVufDF8fHx8MTc2MjE3OTg1Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'f4', name: 'Watermelon', price: 40, unit: '1pc', image: 'https://images.unsplash.com/photo-1581074817932-af423ba4566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcm1lbG9uJTIwc2xpY2V8ZW58MXx8fHwxNzYyMDk3NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'f5', name: 'Fresh Grapes', price: 95, unit: '500g', image: 'https://images.unsplash.com/photo-1596363505729-4190a9506133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwZXMlMjBmcmVzaHxlbnwxfHx8fDE3NjIxNzk4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'f6', name: 'Strawberries', price: 180, unit: '250g', image: 'https://images.unsplash.com/photo-1710528184650-fc75ae862c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJpZXMlMjBmcmVzaHxlbnwxfHx8fDE3NjIxNjc0Njh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 'dairy',
    name: 'Dairy & Eggs',
    items: [
      { id: 'd1', name: 'Fresh Milk', price: 58, unit: '1L', image: 'https://images.unsplash.com/photo-1576186726115-4d51596775d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwYm90dGxlfGVufDF8fHx8MTc2MjA4MTg3MHww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'd2', name: 'Fresh Yogurt', price: 35, unit: '500g', image: 'https://images.unsplash.com/photo-1627308594190-a057cd4bfac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBib3dsfGVufDF8fHx8MTc2MjE3OTg1M3ww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'd3', name: 'Butter', price: 65, unit: '200g', image: 'https://images.unsplash.com/photo-1660798670183-333ac43c3c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBkYWlyeXxlbnwxfHx8fDE3NjIxMTYzNDN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'd4', name: 'Fresh Eggs', price: 90, unit: '12pc', image: 'https://images.unsplash.com/photo-1585355611444-06154f329e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ2dzJTIwY2FydG9ufGVufDF8fHx8MTc2MjE0OTAwN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'd5', name: 'Cheese Slices', price: 120, unit: '200g', image: 'https://images.unsplash.com/photo-1615595193184-761fb01befb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjBzbGljZXN8ZW58MXx8fHwxNzYyMTc5ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 'bakery',
    name: 'Bakery & Bread',
    items: [
      { id: 'b1', name: 'Artisan Bread', price: 45, unit: '400g', image: 'https://images.unsplash.com/photo-1598373182308-3270495d2f58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGxvYWZ8ZW58MXx8fHwxNzYyMDk1MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'b2', name: 'Fresh Croissants', price: 120, unit: '6pc', image: 'https://images.unsplash.com/photo-1733754348873-feeb45df3bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnRzJTIwcGFzdHJ5fGVufDF8fHx8MTc2MjE3OTg1NXww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'b3', name: 'Bagels', price: 99, unit: '4pc', image: 'https://images.unsplash.com/photo-1707144289499-8903dc4929c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWdlbHMlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzYyMTc5ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'b4', name: 'Blueberry Muffins', price: 140, unit: '6pc', image: 'https://images.unsplash.com/photo-1592345936479-8faba698aa01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWZmaW5zJTIwYmFrZXJ5fGVufDF8fHx8MTc2MjE3OTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 'snacks',
    name: 'Snacks & Beverages',
    items: [
      { id: 's1', name: 'Potato Chips', price: 30, unit: '100g', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG8lMjBjaGlwcyUyMHNuYWNrfGVufDF8fHx8MTc2MjEyOTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 's2', name: 'Soft Drinks', price: 40, unit: '1L', image: 'https://images.unsplash.com/photo-1614620150352-c89bb3dae31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZHJpbmslMjBjb2xhfGVufDF8fHx8MTc2MjE2MDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 's3', name: 'Chocolate Cookies', price: 50, unit: '200g', image: 'https://images.unsplash.com/photo-1642774692082-b876a1f3bda9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWVzJTIwZGVzc2VydHxlbnwxfHx8fDE3NjIwNzc0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 's4', name: 'Dark Chocolate', price: 80, unit: '100g', image: 'https://images.unsplash.com/photo-1623660053975-cf75a8be0908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBiYXJ8ZW58MXx8fHwxNzYyMTY2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
];

export function GroceryPage() {
  const { addToCart, setCartOpen, favorites, toggleFavorite } = useApp();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      type: 'grocery',
    });
    toast.success('Added to cart!');
  };

  const handleBuyNow = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      type: 'grocery',
    });
    setCartOpen(true);
  };

  return (
    <div className="py-6 bg-gradient-to-b from-green-50/30 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2 bg-gradient-to-r from-[#32C96E] to-[#FF8A00] bg-clip-text text-transparent">Grocery Shopping</h1>
          <p className="text-gray-600">Fresh groceries delivered to your doorstep</p>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag className="w-6 h-6 text-[#32C96E]" />
              <h2 className="text-2xl">{category.name}</h2>
            </div>

            {/* Grocery Items */}
            <div className="grid grid-cols-4 gap-5">
              {category.items.map((item) => {
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
                  <div className="relative h-40 bg-gray-50">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm mb-1 line-clamp-2 h-10">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{item.unit}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg text-[#32C96E]">₹{item.price}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleAddToCart(item)}
                        variant="outline"
                        size="sm"
                        className="flex-1 border-[#32C96E] text-[#32C96E] hover:bg-[#32C96E] hover:text-white"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                      <Button
                        onClick={() => handleBuyNow(item)}
                        size="sm"
                        className="flex-1 bg-[#32C96E] hover:bg-[#28A55F]"
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