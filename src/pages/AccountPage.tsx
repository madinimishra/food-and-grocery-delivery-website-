import { User, MapPin, ShoppingBag, Heart, Settings, LogOut } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { Button } from '../components/ui/button';
import { useState } from 'react';
import { SignInDialog } from '../components/SignInDialog';
import { toast } from 'sonner@2.0.3';

export function AccountPage() {
  const { user, setUser, cart } = useApp();
  const [signInOpen, setSignInOpen] = useState(false);

  const handleSignOut = () => {
    setUser(null);
    toast.success('Signed out successfully');
  };

  if (!user) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#FF8A00] to-[#32C96E] rounded-full flex items-center justify-center mb-6">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl mb-2">Welcome to QuickBite</h2>
            <p className="text-gray-500 mb-6">Sign in to access your account and orders</p>
            <Button
              onClick={() => setSignInOpen(true)}
              className="bg-gradient-to-r from-[#FF8A00] to-[#32C96E] hover:opacity-90"
            >
              Sign In
            </Button>
          </div>
        </div>
        <SignInDialog open={signInOpen} onOpenChange={setSignInOpen} />
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl mb-6">My Account</h1>

        <div className="grid grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF8A00] to-[#32C96E] rounded-full flex items-center justify-center mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-xl mb-1">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-500">{user.phone}</p>
              </div>
              <Button
                onClick={handleSignOut}
                variant="outline"
                className="w-full border-red-500 text-red-500 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Account Details */}
          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Orders Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#FF8A00]/10 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-[#FF8A00]" />
                  </div>
                  <div>
                    <h3 className="text-lg">My Orders</h3>
                    <p className="text-sm text-gray-500">0 orders</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Orders</Button>
              </div>

              {/* Cart Summary */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#32C96E]/10 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-[#32C96E]" />
                  </div>
                  <div>
                    <h3 className="text-lg">Cart Items</h3>
                    <p className="text-sm text-gray-500">{cart.length} items</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Cart</Button>
              </div>

              {/* Addresses */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg">Addresses</h3>
                    <p className="text-sm text-gray-500">1 address</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Manage Addresses</Button>
              </div>

              {/* Favorites */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg">Favorites</h3>
                    <p className="text-sm text-gray-500">0 favorites</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Favorites</Button>
              </div>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Account Settings
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                  Edit Profile
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                  Payment Methods
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                  Notifications
                </button>
                <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                  Help & Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
