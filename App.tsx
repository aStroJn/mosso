import React, { useState, useEffect, useCallback } from 'react';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import CollectionDetailPage from './pages/CollectionDetailPage';
import Error404Page from './pages/Error404Page';
import ProductOverviewPage from './pages/ProductOverviewPage';
import WishlistPage from './pages/WishlistPage';
import FAQPage from './pages/FAQPage';
import CartPage from './pages/CartPage';
import { Page } from './types';
import ScrollToTopButton from './components/ScrollToTopButton';

const getInitialUrlState = () => {
  if (typeof window === 'undefined') return { initialPage: 'home' as Page, initialProductId: undefined, initialCollectionId: undefined };
  const searchParams = new URLSearchParams(window.location.search);
  const initialPage = (searchParams.get('page') as Page) || 'home';
  const initialProductId = searchParams.get('productId') ? parseInt(searchParams.get('productId')!, 10) : undefined;
  const initialCollectionId = searchParams.get('collectionId') ? parseInt(searchParams.get('collectionId')!, 10) : undefined;
  return { initialPage, initialProductId, initialCollectionId };
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const { initialPage, initialProductId, initialCollectionId } = getInitialUrlState();
  const [page, setPage] = useState<Page>(initialPage);
  const [productId, setProductId] = useState<number | undefined>(initialProductId);
  const [collectionId, setCollectionId] = useState<number | undefined>(initialCollectionId);

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

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;
      if (state) {
        setPage(state.page || 'home');
        setProductId(state.productId);
        setCollectionId(state.collectionId);
      } else {
        const { initialPage, initialProductId, initialCollectionId } = getInitialUrlState();
        setPage(initialPage);
        setProductId(initialProductId);
        setCollectionId(initialCollectionId);
      }
    };

    const { initialPage, initialProductId, initialCollectionId } = getInitialUrlState();
    window.history.replaceState({ 
      page: initialPage, 
      productId: initialProductId,
      collectionId: initialCollectionId
    }, '');

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
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
  
  const navigateTo = (newPage: Page, params?: { productId?: number; collectionId?: number }, pushHistory: boolean = true) => {
    setPage(newPage);
    setProductId(params?.productId);
    setCollectionId(params?.collectionId);
    window.scrollTo(0, 0);

    if (pushHistory) {
      const searchParams = new URLSearchParams();
      if (newPage !== 'home') {
        searchParams.set('page', newPage);
      }
      if (params?.productId) {
        searchParams.set('productId', params.productId.toString());
      }
      if (params?.collectionId) {
        searchParams.set('collectionId', params.collectionId.toString());
      }
      
      const newUrl = window.location.pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
      window.history.pushState({ page: newPage, productId: params?.productId, collectionId: params?.collectionId }, '', newUrl);
    }
  };

  const renderCurrentPage = () => {
    switch (page) {
      case 'home':
        return <HomePage navigateTo={navigateTo} toggleTheme={toggleTheme} />;
      case 'collections':
        return <CollectionsPage navigateTo={navigateTo} toggleTheme={toggleTheme} />;
      case 'collection-detail':
        if (collectionId) {
          return <CollectionDetailPage navigateTo={navigateTo} toggleTheme={toggleTheme} collectionId={collectionId} />;
        }
        return <Error404Page navigateTo={navigateTo} />;
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