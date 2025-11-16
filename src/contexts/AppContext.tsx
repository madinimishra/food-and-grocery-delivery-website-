import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'food' | 'grocery';
  restaurantName?: string;
}

interface Address {
  id: string;
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  type: 'Home' | 'Work' | 'Other';
  isDefault: boolean;
}

interface AppContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addresses: Address[];
  addAddress: (address: Omit<Address, 'id'>) => void;
  updateAddress: (id: string, address: Partial<Address>) => void;
  deleteAddress: (id: string) => void;
  selectedAddress: string | null;
  setSelectedAddress: (id: string | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  const addAddress = (address: Omit<Address, 'id'>) => {
    setAddresses((prevAddresses) => [
      ...prevAddresses,
      { ...address, id: Date.now().toString() },
    ]);
  };

  const updateAddress = (id: string, address: Partial<Address>) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((addr) =>
        addr.id === id ? { ...addr, ...address } : addr
      )
    );
  };

  const deleteAddress = (id: string) => {
    setAddresses((prevAddresses) => prevAddresses.filter((addr) => addr.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        user,
        setUser,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        favorites,
        toggleFavorite,
        cartOpen,
        setCartOpen,
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
        selectedAddress,
        setSelectedAddress,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}