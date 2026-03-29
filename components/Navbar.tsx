import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Page, Collection } from '../types';
import { COLLECTIONS, PRODUCT_STYLES } from '../constants';
import ThemeToggle from './ThemeToggle';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';

interface NavbarProps {
  navigateTo: (page: Page, params?: { productId?: number; collectionId?: number }) => void;
  toggleTheme: () => void;
  currentPage: Page;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigateTo, toggleTheme, currentPage, setIsMobileMenuOpen }) => {
  const { wishlist } = useWishlist();
  const { cartCount } = useCart();
  const isHomePage = currentPage === 'home';

  const getNavLinkClasses = (page: string) => {
    // 'collections' link is bold only when exactly on the collections listing page
    // 'products' mega-menu trigger is never auto-bolded
    const isActive = currentPage === page;
    if (isHomePage) {
      return `text-sm cursor-pointer transition-colors ${isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white font-medium'}`;
    } else {
      return `text-sm cursor-pointer transition-colors ${isActive ? 'text-text-light dark:text-text-dark font-bold' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark font-medium'}`;
    }
  };

  const borderColorClass = isHomePage ? 'border-white/20' : 'border-border-light dark:border-border-dark';
  const iconColorClass = isHomePage ? 'text-white' : 'text-text-light dark:text-text-dark';
  const buttonHoverBgClass = isHomePage ? 'hover:bg-white/10' : 'hover:bg-black/10 dark:hover:bg-white/10';

  const collectionsByStyle = PRODUCT_STYLES.map(style => ({
    style,
    collections: COLLECTIONS.filter(c => c.style === style)
  })).filter(group => group.collections.length > 0);

  // Split into two columns: first 3 styles in col 1, remaining in col 2
  // This helps place Natural (3rd) on the left and balances content
  const midPoint = 3;
  const leftColumnStyles = collectionsByStyle.slice(0, midPoint);
  const rightColumnStyles = collectionsByStyle.slice(midPoint);

  const featuredCollections = useMemo(() => COLLECTIONS.filter(c => [1, 2, 7, 8].includes(c.id)), []);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hoveredCollection, setHoveredCollection] = useState<Collection | null>(null);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleProductsEnter = useCallback(() => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    const timeout = setTimeout(() => {
      setIsProductsOpen(true);
    }, 300);
    setHoverTimeout(timeout);
  }, [hoverTimeout]);

  const handleProductsLeave = useCallback(() => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setHoverTimeout(null);
    setIsProductsOpen(false);
  }, [hoverTimeout]);

  useEffect(() => {
    if (featuredCollections.length < 2) return;

    const intervalId = setInterval(() => {
      setFeaturedIndex(prevIndex => (prevIndex + 1) % featuredCollections.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [featuredCollections.length]);

  // Show hovered collection if available, otherwise fall back to auto-rotating featured
  const previewCollection = hoveredCollection ?? featuredCollections[featuredIndex];

  const handleCollectionHover = useCallback((collection: Collection) => {
    setHoveredCollection(collection);
  }, []);

  const handleCollectionLeave = useCallback(() => {
    setHoveredCollection(null);
  }, []);

  return (
    <header className={`flex items-center justify-between whitespace-nowrap border-b border-solid ${borderColorClass} py-4 relative`}>
      <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
        <img src="./logo-mosso.svg" alt="MOSSO Logo" className="h-14 w-auto" />
      </div>
      <div className="hidden md:flex flex-1 justify-end gap-6 items-center">
        <div className="flex gap-6 items-baseline">
          <a className={getNavLinkClasses('home')} onClick={() => navigateTo('home')}>Home</a>
          <a className={getNavLinkClasses('collections')} onClick={() => navigateTo('collections')}>Collections</a>

          <div
            onMouseEnter={handleProductsEnter}
            onMouseLeave={handleProductsLeave}
          >
            <a className={`${getNavLinkClasses('products')} leading-normal inline-flex items-center gap-1 cursor-pointer`}>
              Products <span className={`material-symbols-outlined text-base ${iconColorClass} transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </a>

            <div className={`absolute top-[80%] right-0 w-[calc(100vw-2rem)] md:w-[46rem] lg:w-[60rem] xl:w-[64rem] max-w-full z-30 pt-4 ${isProductsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} transition-all duration-300 text-left`}>
              <div className="bg-secondary-background-light dark:bg-secondary-background-dark shadow-2xl rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 whitespace-normal">
                <div className="grid grid-cols-3">
                  <div className="col-span-2 flex gap-12 p-8">
                    <div className="flex-1 flex flex-col gap-10">
                      {leftColumnStyles.map(({ style, collections }) => (
                        <div key={style}>
                          <h3 className="text-sm font-semibold tracking-wider uppercase text-text-secondary-light dark:text-text-secondary-dark">{style}</h3>
                          <ul className="mt-4 space-y-2">
                            {collections.map(collection => (
                              <li key={collection.id}>
                                <a
                                  href="#"
                                  onClick={(e) => { e.preventDefault(); navigateTo('collection-detail', { collectionId: collection.id }); }}
                                  onMouseEnter={() => handleCollectionHover(collection)}
                                  onMouseLeave={handleCollectionLeave}
                                  className="text-sm text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                                >
                                  {collection.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 flex flex-col gap-10">
                      {rightColumnStyles.map(({ style, collections }) => (
                        <div key={style}>
                          <h3 className="text-sm font-semibold tracking-wider uppercase text-text-secondary-light dark:text-text-secondary-dark">{style}</h3>
                          <ul className="mt-4 space-y-4">
                            {collections.map(collection => (
                              <li key={collection.id}>
                                <a
                                  href="#"
                                  onClick={(e) => { e.preventDefault(); navigateTo('collection-detail', { collectionId: collection.id }); }}
                                  onMouseEnter={() => handleCollectionHover(collection)}
                                  onMouseLeave={handleCollectionLeave}
                                  className="text-sm text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                                >
                                  {collection.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-1 bg-background-light dark:bg-background-dark p-4">
                    {previewCollection && (
                      <div
                        key={previewCollection.id}
                        className="bg-cover bg-center rounded-lg aspect-[4/5] w-full flex flex-col justify-end p-6 text-white h-full animate-fade-in"
                        style={{ backgroundImage: `url('${previewCollection.heroImageUrl}')` }}
                      >
                        <div className="bg-black/50 p-4 rounded-md backdrop-blur-sm overflow-hidden">
                          <h4 className="font-bold text-lg truncate">{previewCollection.name}</h4>
                          <p className="text-sm mt-1 mb-3 break-words min-h-[40px] whitespace-normal">{previewCollection.tagline}</p>
                          <button onClick={() => navigateTo('collection-detail', { collectionId: previewCollection.id })} className="text-sm font-bold bg-white text-black px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                            Explore Now
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-background-light dark:bg-background-dark px-8 py-4 border-t border-border-light dark:border-border-dark">
                  <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('collections'); }} className="text-sm font-semibold text-primary inline-flex items-center gap-2 group/link cursor-pointer hover:underline">
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