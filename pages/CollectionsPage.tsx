import React, { useState, useEffect } from 'react';
import { PRODUCTS, PRODUCT_STYLES } from '../constants';
import { Page, Product, ProductStyle } from '../types';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import { useWishlist } from '../hooks/useWishlist';
import AnimatedSection from '../components/AnimatedSection';
import QuickViewModal from '../components/QuickViewModal';
import Pagination from '../components/Pagination';

interface CollectionsPageProps {
  navigateTo: (page: Page, params?: { productId?: number }) => void;
  toggleTheme: () => void;
}

interface ProductCardProps {
    product: Product;
    navigateTo: (page: Page, params?: { productId?: number }) => void;
    onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, navigateTo, onQuickView }) => {
    const { isWishlisted, toggleWishlist } = useWishlist();
    const isProductWishlisted = isWishlisted(product.id);

    const handleWishlistClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggleWishlist(product.id);
    };
    
    const handleQuickViewClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onQuickView(product);
    };

    return (
        <div 
            onClick={() => navigateTo('product-overview', { productId: product.id })} 
            className="bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark group cursor-pointer flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-primary/10"
        >
            <div className="overflow-hidden aspect-[4/5] relative">
               <img alt={product.altText} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" src={product.imageUrl} />
               
               {/* Overlay buttons */}
               <button
                    onClick={handleQuickViewClick}
                    aria-label="Quick view"
                    className="absolute top-3 right-12 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all opacity-0 group-hover:opacity-100"
                >
                    <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
                <button 
                    onClick={handleWishlistClick}
                    aria-label={isProductWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                    className="absolute top-3 right-2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
                >
                    <span 
                        className={`material-symbols-outlined text-xl ${isProductWishlisted ? 'text-red-500' : ''}`}
                        style={{ fontVariationSettings: `'FILL' ${isProductWishlisted ? 1 : 0}` }}
                    >
                        favorite
                    </span>
                </button>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-semibold mb-2 text-text-light dark:text-text-dark">{product.name}</h3>
                <p className="mb-4 text-text-secondary-light dark:text-text-secondary-dark flex-grow">{product.description}</p>
                <div className="font-medium text-primary inline-flex items-center gap-2 mt-auto">
                  View Details
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </div>
            </div>
        </div>
    );
};

const CollectionsPage: React.FC<CollectionsPageProps> = ({ navigateTo, toggleTheme }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All Collections');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

  useEffect(() => {
    const isModalOpen = isMobileMenuOpen || !!quickViewProduct;
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, quickViewProduct]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const filteredProducts = activeFilter === 'All Collections'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.style === activeFilter);
  
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const filters = ['All Collections', ...PRODUCT_STYLES];

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigateTo={navigateTo}
        toggleTheme={toggleTheme}
        currentPage='collections'
      />
      <div className={`flex flex-1 flex-col items-center transition-all duration-300 ${quickViewProduct ? 'blur-sm' : ''}`}>
        <div className="layout-content-container flex w-full max-w-screen-xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
            <Navbar
                navigateTo={navigateTo}
                toggleTheme={toggleTheme}
                currentPage="collections"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <main className="flex flex-col gap-8 md:gap-12 py-8 md:py-12">
                <div className="flex flex-wrap justify-center text-center gap-3">
                    <div className="flex max-w-3xl flex-col gap-4">
                        <h1 className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-black tracking-normal font-display">Explore All MOSSO Collections</h1>
                        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base md:text-lg font-normal leading-relaxed">Discover the artistry and innovation behind each design. Find the style that defines your space.</p>
                    </div>
                </div>
                <div className="flex gap-3 p-3 flex-wrap justify-center">
                    {filters.map(filter => (
                        <button key={filter} onClick={() => setActiveFilter(filter)} className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full transition-all pl-5 pr-5 ${activeFilter === filter ? 'bg-primary' : 'bg-secondary-background-light dark:bg-secondary-background-dark hover:bg-opacity-80'}`}>
                            <p className={`text-sm font-medium ${activeFilter === filter ? 'text-white' : 'text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark'}`}>{filter}</p>
                        </button>
                    ))}
                </div>
                <AnimatedSection>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {paginatedProducts.map(product => <ProductCard key={product.id} product={product} navigateTo={navigateTo} onQuickView={setQuickViewProduct} />)}
                    </div>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                </AnimatedSection>
            </main>
        </div>
    </div>
    <Footer navigateTo={navigateTo} />
    {quickViewProduct && (
        <QuickViewModal 
            product={quickViewProduct} 
            onClose={() => setQuickViewProduct(null)}
            navigateTo={navigateTo}
        />
    )}
    </>
  );
};

export default CollectionsPage;