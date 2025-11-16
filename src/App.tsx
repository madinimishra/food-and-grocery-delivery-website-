import { useState } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { BottomNav } from './components/BottomNav';
import { CartSidebar } from './components/CartSidebar';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { HomePage } from './pages/HomePage';
import { FoodPage } from './pages/FoodPage';
import { GroceryPage } from './pages/GroceryPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AccountPage } from './pages/AccountPage';
import { SearchPage } from './pages/SearchPage';
import { AppProvider, useApp } from './contexts/AppContext';
import { Toaster } from './components/ui/sonner';

function AppContent() {
  const { activeTab } = useApp();
  const [showLanding, setShowLanding] = useState(true);

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'food':
        return <FoodPage />;
      case 'grocery':
        return <GroceryPage />;
      case 'favorites':
        return <FavoritesPage />;
      case 'account':
        return <AccountPage />;
      case 'search':
        return <SearchPage />;
      default:
        return <HomePage />;
    }
  };

  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Top Navigation */}
      <TopNavBar />
      
      {/* Main Content */}
      <main className="pb-20">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom Navigation */}
      <BottomNav />

      {/* Cart Sidebar */}
      <CartSidebar />

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
