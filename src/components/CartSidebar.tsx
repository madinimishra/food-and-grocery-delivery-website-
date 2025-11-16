import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { useApp } from '../contexts/AppContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';
import { CheckoutDialog } from './CheckoutDialog';
import { useState } from 'react';

export function CartSidebar() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQuantity, user } = useApp();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      toast.error('Please sign in to checkout');
      return;
    }
    setCheckoutOpen(true);
  };

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Cart ({cart.length} items)
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <ShoppingBag className="w-12 h-12 text-gray-300" />
            </div>
            <p className="text-gray-500">Your cart is empty</p>
            <p className="text-sm text-gray-400 mt-2">Add items to get started</p>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-120px)]">
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto mt-6 space-y-4 pb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-gray-100">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm mb-1">{item.name}</h4>
                    {item.restaurantName && (
                      <p className="text-xs text-gray-500 mb-2">{item.restaurantName}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-[#32C96E]">₹{item.price}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:border-[#FF8A00] transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:border-[#32C96E] transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-7 h-7 rounded-md bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 ml-2 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Cart Summary */}
            <div className="sticky bottom-0 bg-white border-t-2 border-gray-100 pt-4 mt-4 space-y-4 shadow-lg rounded-t-3xl px-1">
              <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="text-[#32C96E]">FREE</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                  <span>Total</span>
                  <span className="text-[#32C96E]">₹{total}</span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-[#FF8A00] to-[#32C96E] hover:opacity-90 h-14 shadow-lg hover:shadow-xl transition-all"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Proceed to Checkout - ₹{total}
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </Sheet>
  );
}