import React, { useState, useEffect, useRef } from 'react';
import { COLLECTIONS } from '../constants';
import { Page, Product, Collection } from '../types';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { useWishlist } from '../hooks/useWishlist';
import AnimatedSection from '../components/AnimatedSection';
import QuickViewModal from '../components/QuickViewModal';
import Pagination from '../components/Pagination';

interface CollectionDetailPageProps {
  navigateTo: (page: Page, params?: { productId?: number; collectionId?: number }) => void;
  toggleTheme: () => void;
  collectionId: number;
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
        <p className="mb-2 text-text-secondary-light dark:text-text-secondary-dark flex-grow">{product.description}</p>
        <p className="text-lg font-bold text-text-light dark:text-text-dark mb-4">₹{product.price.toFixed(2)}</p>
        <div className="font-medium text-primary inline-flex items-center gap-2 mt-auto">
          View Product
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
        </div>
      </div>
    </div>
  );
};

const CollectionDetailPage: React.FC<CollectionDetailPageProps> = ({ navigateTo, toggleTheme, collectionId }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const otherCollectionsRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 8;

  const collection: Collection | undefined = COLLECTIONS.find(c => c.id === collectionId);

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
  }, [collectionId]);

  if (!collection) {
    navigateTo('error404');
    return null;
  }

  const products = collection.products;
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const otherCollections = COLLECTIONS.filter(c => c.id !== collectionId);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (otherCollectionsRef.current) {
      const scrollAmount = otherCollectionsRef.current.clientWidth * 0.75;
      otherCollectionsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const breadcrumbItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Collections', page: 'collections' as Page },
    { label: collection.name },
  ];

  // Get price range for the collection
  const prices = products.map(p => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigateTo={navigateTo}
        toggleTheme={toggleTheme}
        currentPage='collection-detail'
      />
      <div className={`flex flex-1 flex-col items-center transition-all duration-300 ${quickViewProduct ? 'blur-sm' : ''}`}>
        <div className="layout-content-container flex w-full max-w-screen-xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
          <Navbar
            navigateTo={navigateTo}
            toggleTheme={toggleTheme}
            currentPage="collection-detail"
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <main className="flex-1 pb-16 lg:pb-24">
            <Breadcrumbs items={breadcrumbItems} navigateTo={navigateTo} />

            {/* Collection Hero Section */}
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden mb-12 md:mb-16">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img
                  src={collection.heroImageUrl}
                  alt={collection.name}
                  className="w-full h-[500px] sm:h-[450px] md:h-96 object-cover"
                />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 sm:mb-4">
                    {collection.style} Collection
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">{collection.name}</h1>
                  <p className="max-w-xl text-sm sm:text-base md:text-lg text-white/85 leading-relaxed">{collection.description}</p>
                  <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-white/70">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">inventory_2</span>
                      {products.length} Products
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">payments</span>
                      ₹{minPrice.toFixed(0)} – ₹{maxPrice.toFixed(0)}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Products Grid */}
            <AnimatedSection>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark font-display">
                  Products in {collection.name}
                </h2>
                <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">
                  Showing {paginatedProducts.length} of {products.length} products
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {paginatedProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    navigateTo={navigateTo}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </AnimatedSection>

            {/* Other Collections Carousel */}
            <AnimatedSection>
              <div className="mt-24 lg:mt-32">
                <div className="border-t border-border-light dark:border-border-dark pt-12">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">Explore Other Collections</h2>
                    <div className="flex gap-2">
                      <button onClick={() => scrollCarousel('left')} aria-label="Scroll left" className="flex items-center justify-center h-10 w-10 rounded-full border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined">arrow_back</span>
                      </button>
                      <button onClick={() => scrollCarousel('right')} aria-label="Scroll right" className="flex items-center justify-center h-10 w-10 rounded-full border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                  <div ref={otherCollectionsRef} className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth">
                    {otherCollections.map(otherCollection => (
                      <div
                        key={otherCollection.id}
                        className="flex flex-col group cursor-pointer w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0"
                        onClick={() => navigateTo('collection-detail', { collectionId: otherCollection.id })}
                      >
                        <div className="overflow-hidden rounded-xl aspect-[4/5] w-full bg-secondary-background-light dark:bg-secondary-background-dark">
                          <img
                            src={otherCollection.heroImageUrl}
                            alt={otherCollection.name}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                          />
                        </div>
                        <div className="pt-4 text-center">
                          <h3 className="font-bold text-base text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{otherCollection.name}</h3>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">{otherCollection.tagline}</p>
                          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">{otherCollection.products.length} products</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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

export default CollectionDetailPage;
