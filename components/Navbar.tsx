import React, { useState, useEffect, useMemo } from 'react';
import { Page, Product } from '../types';
import { PRODUCTS, PRODUCT_STYLES } from '../constants';
import ThemeToggle from './ThemeToggle';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';

interface NavbarProps {
  navigateTo: (page: Page, params?: { productId?: number }) => void;
  toggleTheme: () => void;
  currentPage: Page;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigateTo, toggleTheme, currentPage, setIsMobileMenuOpen }) => {
  const { wishlist } = useWishlist();
  const { cartCount } = useCart();
  const isHomePage = currentPage === 'home';
  const textColorClass = isHomePage ? 'text-white' : 'text-text-light dark:text-text-dark';
  const hoverTextColorClass = isHomePage ? 'hover:text-white' : 'hover:text-text-light dark:hover:text-text-dark';
  const activeLinkClass = (page: Page) => currentPage === page ? 'font-bold' : 'font-medium';
  const borderColorClass = isHomePage ? 'border-white/20' : 'border-border-light dark:border-border-dark';
  const iconColorClass = isHomePage ? 'text-white' : 'text-text-light dark:text-text-dark';
  const buttonHoverBgClass = isHomePage ? 'hover:bg-white/10' : 'hover:bg-black/10 dark:hover:bg-white/10';

  const productsByStyle = PRODUCT_STYLES.reduce((acc, style) => {
    const prods = PRODUCTS.filter(p => p.style === style);
    if (prods.length > 0) {
      acc[style] = prods;
    }
    return acc;
  }, {} as Record<string, Product[]>);

  const isProductPage = currentPage === 'product-overview' || currentPage === 'collections';

  const featuredProducts = useMemo(() => PRODUCTS.filter(p => [1, 2, 7, 8].includes(p.id)), []);
  const [featuredProductIndex, setFeaturedProductIndex] = useState(0);

  useEffect(() => {
    if (featuredProducts.length < 2) return;
    
    const intervalId = setInterval(() => {
      setFeaturedProductIndex(prevIndex => (prevIndex + 1) % featuredProducts.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [featuredProducts.length]);
  
  const featuredProduct = featuredProducts[featuredProductIndex];

  return (
    <header className={`flex items-center justify-between whitespace-nowrap border-b border-solid ${borderColorClass} py-4`}>
      <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
        <img src="./assets/logo.svg" alt="MOSSO Logo" className="h-14 w-auto" />
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-6 items-center">
        <div className="flex gap-6">
            <a className={`${textColorClass} ${activeLinkClass('home')} text-sm cursor-pointer ${hoverTextColorClass} transition-colors`} onClick={() => navigateTo('home')}>Home</a>
            <a className={`${textColorClass} ${activeLinkClass('collections')} text-sm ${isHomePage ? 'text-white/90' : 'text-text-secondary-light dark:text-text-secondary-dark'} ${hoverTextColorClass} cursor-pointer transition-colors`} onClick={() => navigateTo('collections')}>Collections</a>
            
            <div className="group relative">
              <button className={`${textColorClass} text-sm ${isHomePage ? 'text-white/90' : 'text-text-secondary-light dark:text-text-secondary-dark'} ${hoverTextColorClass} ${isProductPage ? 'font-bold' : 'font-medium'} leading-normal cursor-pointer transition-colors flex items-center gap-1`}>
                Products <span className={`material-symbols-outlined text-base ${iconColorClass} transition-transform duration-200 group-hover:rotate-180`}>expand_more</span>
              </button>
              
              <div className="absolute top-full -right-20 w-[64rem] max-w-4xl z-30 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <div className="bg-secondary-background-light dark:bg-secondary-background-dark shadow-2xl rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-6 p-8">
                      {Object.entries(productsByStyle).map(([style, products]) => (
                        <div key={style}>
                          <h3 className="text-sm font-semibold tracking-wider uppercase text-text-secondary-light dark:text-text-secondary-dark">{style}</h3>
                          <ul className="mt-4 space-y-2">
                            {products.map(product => (
                              <li key={product.id}>
                                <a
                                  href="#"
                                  onClick={(e) => { e.preventDefault(); navigateTo('product-overview', { productId: product.id }); }}
                                  className="text-sm text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                                >
                                  {product.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="col-span-1 bg-background-light dark:bg-background-dark p-4">
                      {featuredProduct && (
                        <div 
                          key={featuredProduct.id} 
                          className="bg-cover bg-center rounded-lg aspect-[4/5] w-full flex flex-col justify-end p-6 text-white h-full animate-fade-in" 
                          style={{ backgroundImage: `url('${featuredProduct.imageUrl}')` }}
                        >
                            <div className="bg-black/50 p-4 rounded-md backdrop-blur-sm overflow-hidden">
                              <h4 className="font-bold text-lg truncate">{featuredProduct.name}</h4>
                              <p className="text-sm mt-1 mb-3 break-words min-h-[40px]">{featuredProduct.description}</p>
                              <button onClick={() => navigateTo('product-overview', { productId: featuredProduct.id })} className="text-sm font-bold bg-white text-black px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                                  Explore Now
                              </button>
                            </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-background-light dark:bg-background-dark px-8 py-4 border-t border-border-light dark:border-border-dark">
                      <a onClick={() => navigateTo('collections')} className="text-sm font-semibold text-primary inline-flex items-center gap-2 group/link cursor-pointer hover:underline">
                        View All Collections
                        <span className="material-symbols-outlined transition-transform duration-300 group-hover/link:translate-x-1">arrow_forward</span>
                      </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className={`h-6 w-px ${isHomePage ? 'bg-white/20' : 'bg-border-light dark:bg-border-dark'}`}></div>
        
        <div className="flex items-center gap-1">
            <ThemeToggle onClick={toggleTheme} className={`${iconColorClass} ${buttonHoverBgClass}`} />
            <button 
              onClick={() => navigateTo('wishlist')}
              aria-label="Wishlist" 
              className={`${iconColorClass} h-10 w-10 flex items-center justify-center rounded-full ${buttonHoverBgClass} transition-colors relative`}
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
              onClick={() => navigateTo('cart')}
              className={`${iconColorClass} h-10 w-10 flex items-center justify-center rounded-full ${buttonHoverBgClass} transition-colors relative`}>
              <span className="material-symbols-outlined text-2xl">shopping_bag</span>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {cartCount}
                </div>
              )}
            </button>
        </div>
      </div>
      <div className="flex items-center gap-1 md:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu" className={`${iconColorClass} p-2 rounded-full ${buttonHoverBgClass} transition-colors -mr-2`}>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
