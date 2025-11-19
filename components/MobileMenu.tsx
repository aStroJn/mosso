import React, { useState, useEffect } from 'react';
import { Page, Product } from '../types';
import { PRODUCTS, PRODUCT_STYLES } from '../constants';
import ThemeToggle from './ThemeToggle';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigateTo: (page: Page, params?: { productId?: number }) => void;
  toggleTheme: () => void;
  currentPage: Page;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigateTo, toggleTheme, currentPage }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { wishlist } = useWishlist();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleNavigate = (page: Page, params?: { productId?: number }) => {
    navigateTo(page, params);
    onClose();
  };

  const productsByStyle = PRODUCT_STYLES.reduce((acc, style) => {
    const prods = PRODUCTS.filter(p => p.style === style);
    if (prods.length > 0) {
      acc[style] = prods;
    }
    return acc;
  }, {} as Record<string, Product[]>);

  const isProductPage = currentPage === 'product-overview' || currentPage === 'collections';

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Menu Panel */}
      <div
        className={`relative flex flex-col w-full max-w-sm h-full bg-secondary-background-light dark:bg-secondary-background-dark ml-auto shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <header className="flex items-center justify-between p-4 border-b border-border-light dark:border-border-dark">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigate('home')}>
            <img src="/logo.svg" alt="MOSSO Logo" className="h-7 w-auto" />
          </div>
          <button onClick={onClose} aria-label="Close menu" className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-text-light dark:text-text-dark text-2xl">close</span>
          </button>
        </header>

        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="flex flex-col gap-2">
            <li>
              <a onClick={() => handleNavigate('home')} className={`block text-lg ${currentPage === 'home' ? 'font-bold' : 'font-medium'} text-text-light dark:text-text-dark p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer`}>Home</a>
            </li>
            <li>
              <a onClick={() => handleNavigate('collections')} className={`block text-lg ${currentPage === 'collections' ? 'font-bold' : 'font-medium'} text-text-light dark:text-text-dark p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer`}>Collections</a>
            </li>
            <li>
              <a onClick={() => handleNavigate('wishlist')} className={`block text-lg ${currentPage === 'wishlist' ? 'font-bold' : 'font-medium'} text-text-light dark:text-text-dark p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer`}>Wishlist</a>
            </li>
            <li>
              <div className="flex flex-col">
                <button onClick={() => setIsProductsOpen(!isProductsOpen)} className={`w-full flex justify-between items-center text-lg ${isProductPage ? 'font-bold' : 'font-medium'} text-text-light dark:text-text-dark p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}>
                  <span>Products</span>
                  <span className={`material-symbols-outlined transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {isProductsOpen && (
                  <ul className="pl-4 mt-2 space-y-4 border-l border-border-light dark:border-border-dark">
                    {Object.entries(productsByStyle).map(([style, products]) => (
                      <li key={style}>
                        <h4 className="px-2 text-sm font-semibold tracking-wider uppercase text-text-secondary-light dark:text-text-secondary-dark">{style}</h4>
                        <ul className="mt-2 space-y-1">
                          {products.map(product => (
                            <li key={product.id}>
                              <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); handleNavigate('product-overview', { productId: product.id }); }}
                                className="block text-base font-normal text-text-secondary-light dark:text-text-secondary-dark p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-text-light dark:hover:text-text-dark transition-colors cursor-pointer"
                              >
                                {product.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </nav>

        <footer className="p-4 border-t border-border-light dark:border-border-dark">
          <div className="flex items-center justify-around">
            <ThemeToggle onClick={toggleTheme} className="hover:bg-black/10 dark:hover:bg-white/10" />
            <button
              onClick={() => handleNavigate('wishlist')}
              aria-label="Wishlist"
              className="relative text-text-light dark:text-text-dark h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: `'FILL' ${wishlist.size > 0 ? 1 : 0}` }}
              >
                favorite
              </span>
              {wishlist.size > 0 && (
                <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {wishlist.size}
                </div>
              )}
            </button>
            <button
              aria-label="Shopping cart"
              onClick={() => handleNavigate('cart')}
              className="relative text-text-light dark:text-text-dark h-10 w-10 flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">shopping_bag</span>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {cartCount}
                </div>
              )}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MobileMenu;
