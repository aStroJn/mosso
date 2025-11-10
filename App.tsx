import React, { useState, useEffect, useCallback } from 'react';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import Error404Page from './pages/Error404Page';
import ProductOverviewPage from './pages/ProductOverviewPage';
import WishlistPage from './pages/WishlistPage';
import FAQPage from './pages/FAQPage';
import CartPage from './pages/CartPage';
import { Page } from './types';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [page, setPage] = useState<Page>('home');
  const [productId, setProductId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('color-theme', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newTheme;
    });
  }, []);
  
  const navigateTo = (newPage: Page, params?: { productId?: number }) => {
    setPage(newPage);
    setProductId(params?.productId);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (page) {
      case 'home':
        return <HomePage navigateTo={navigateTo} toggleTheme={toggleTheme} />;
      case 'collections':
        return <CollectionsPage navigateTo={navigateTo} toggleTheme={toggleTheme} />;
      case 'product-overview':
        if (productId) {
          return <ProductOverviewPage navigateTo={navigateTo} toggleTheme={toggleTheme} productId={productId} />;
        }
        return <Error404Page navigateTo={navigateTo} />;
      case 'wishlist':
        return <WishlistPage navigateTo={navigateTo} toggleTheme={toggleTheme} />;
      case 'faq':
        return <FAQPage navigateTo={navigateTo} toggleTheme={toggleTheme} />;
      case 'cart':
        return <CartPage navigateTo={navigateTo} toggleTheme={toggleTheme} />;
      case 'error404':
        return <Error404Page navigateTo={navigateTo} />;
      default:
        return <Error404Page navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {renderCurrentPage()}
      {page !== 'home' && <ScrollToTopButton />}
    </div>
  );
};

export default App;