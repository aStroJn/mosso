

import React, { useState, useEffect } from 'react';
import { Page, Product } from '../types';
import { PRODUCTS } from '../constants';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';
import Breadcrumbs from '../components/Breadcrumbs';
import AnimatedSection from '../components/AnimatedSection';

interface WishlistPageProps {
  navigateTo: (page: Page, params?: { productId?: number }) => void;
  toggleTheme: () => void;
}

const WishlistProductCard: React.FC<{ 
    product: Product; 
    navigateTo: (page: Page, params?: { productId?: number }) => void;
    onRemove: (productId: number) => void;
}> = ({ product, navigateTo, onRemove }) => {
    
    const { addToCart } = useCart();

    const handleCardClick = () => {
        navigateTo('product-overview', { productId: product.id });
    };

    const handleRemoveClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onRemove(product.id);
    };

    const handleAddToCartClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        addToCart(product.id, 1);
    };

    return (
        <div className="flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-secondary-background-light dark:bg-secondary-background-dark overflow-hidden group">
            <div className="relative">
                <div 
                    onClick={handleCardClick}
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer" 
                    style={{ backgroundImage: `url("${product.imageUrl}")` }}
                    aria-label={product.altText}
                ></div>
                <button 
                    onClick={handleRemoveClick}
                    aria-label="Remove from wishlist"
                    className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-background-light/70 dark:bg-background-dark/70 text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 backdrop-blur-sm transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>
            </div>
            <div className="flex flex-1 flex-col p-4">
                <div className="flex-grow cursor-pointer" onClick={handleCardClick}>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{product.style}</p>
                    <p className="text-lg font-bold leading-tight tracking-tight text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{product.name}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg font-semibold text-text-light dark:text-text-dark">${product.price.toFixed(2)}</p>
                    <button onClick={handleAddToCartClick} className="flex h-10 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white transition-opacity hover:opacity-90">
                        <span className="truncate">Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};


const WishlistPage: React.FC<WishlistPageProps> = ({ navigateTo, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { wishlist, toggleWishlist } = useWishlist();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const wishlistedProducts = PRODUCTS.filter(product => wishlist.has(product.id));

  const breadcrumbItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'My Wishlist' },
  ];

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigateTo={navigateTo}
        toggleTheme={toggleTheme}
        currentPage='wishlist'
      />
      <div className="flex flex-1 flex-col items-center">
        <div className="layout-content-container flex w-full max-w-screen-xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
          <Navbar
            navigateTo={navigateTo}
            toggleTheme={toggleTheme}
            currentPage="wishlist"
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <main className="flex flex-col flex-grow pb-10">
            <Breadcrumbs items={breadcrumbItems} navigateTo={navigateTo} />
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-text-light dark:text-text-dark text-4xl font-black tracking-tighter sm:text-5xl font-display">My Wishlist</h1>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {wishlistedProducts.length > 0
                    ? `You have ${wishlistedProducts.length} item(s) in your wishlist.`
                    : 'A collection of your favorite MOSSO pieces.'}
                </p>
              </div>
            </div>

            {wishlistedProducts.length > 0 ? (
              <AnimatedSection>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {wishlistedProducts.map(product => (
                    <WishlistProductCard 
                      key={product.id} 
                      product={product} 
                      navigateTo={navigateTo}
                      onRemove={toggleWishlist}
                    />
                  ))}
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection className="flex-grow">
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center rounded-full bg-primary/10 p-5 mb-6">
                    <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: `'FILL' 1` }}>favorite</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark">Your wishlist is empty</h3>
                  <p className="mt-2 max-w-md text-text-secondary-light dark:text-text-secondary-dark">
                    Looks like you haven't added anything yet. Discover our collections to save pieces for later.
                  </p>
                  <button 
                    onClick={() => navigateTo('collections')}
                    className="mt-6 flex h-12 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-white transition-opacity hover:opacity-90">
                    <span className="truncate">Browse Collections</span>
                  </button>
                </div>
              </AnimatedSection>
            )}
          </main>
        </div>
      </div>
      <Footer navigateTo={navigateTo} />
    </>
  );
};

export default WishlistPage;