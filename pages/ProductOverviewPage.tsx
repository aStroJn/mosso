import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Page, Product } from '../types';
import { PRODUCTS } from '../constants';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';
import Breadcrumbs from '../components/Breadcrumbs';
import AnimatedSection from '../components/AnimatedSection';

interface ProductOverviewPageProps {
  navigateTo: (page: Page, params?: { productId?: number }) => void;
  toggleTheme: () => void;
  productId: number;
}

const ProductOverviewPage: React.FC<ProductOverviewPageProps> = ({ navigateTo, toggleTheme, productId }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const product: Product | undefined = PRODUCTS.find(p => p.id === productId);

  const allProductImages = useMemo(() => {
    if (!product) return [];
    return [product.imageUrl, ...product.galleryImages];
  }, [product]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const relatedProductsRef = useRef<HTMLDivElement>(null);
  const imageGalleryRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (product) {
      setCurrentIndex(0);
      setQuantity(1);
      isInitialMount.current = true;
    } else {
      navigateTo('error404');
    }
  }, [product, navigateTo]);

  useEffect(() => {
    thumbnailRefs.current = thumbnailRefs.current.slice(0, allProductImages.length);
  }, [allProductImages]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (thumbnailRefs.current[currentIndex]) {
        thumbnailRefs.current[currentIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    }
  }, [currentIndex]);
  
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

  useEffect(() => {
    const handleScroll = () => {
        if (imageContainerRef.current) {
            const rect = imageContainerRef.current.getBoundingClientRect();
            const speed = 0.1; // Keep it subtle

            // Only calculate when in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const offset = (elementCenter - viewportCenter) * speed;
                setParallaxOffset(offset);
            }
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial position

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  if (!product) {
    return null; // Or a loading spinner, navigateTo('error404') handles this
  }
  
  const isProductWishlisted = isWishlisted(product.id);

  const handleQuantityChange = (delta: number) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));
  };

  const handleAddToCart = () => {
    if(product) {
      addToCart(product.id, quantity);
    }
  };

  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id);

  const breadcrumbItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Collections', page: 'collections' as Page },
    { label: product.name },
  ];

  const scrollImageGallery = (direction: 'left' | 'right') => {
    if (imageGalleryRef.current) {
        const scrollAmount = imageGalleryRef.current.clientWidth * 0.75;
        imageGalleryRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (relatedProductsRef.current) {
        const scrollAmount = relatedProductsRef.current.clientWidth * 0.75; // Scroll by 75% of the visible width
        relatedProductsRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? allProductImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === allProductImages.length - 1 ? 0 : prev + 1));
  };


  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigateTo={navigateTo}
        toggleTheme={toggleTheme}
        currentPage='product-overview'
      />
      <div className="flex flex-1 flex-col items-center">
        <div className="layout-content-container flex w-full max-w-screen-xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
          <Navbar
            navigateTo={navigateTo}
            toggleTheme={toggleTheme}
            currentPage="product-overview"
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <main className="flex-1 pb-16 lg:pb-24">
            <Breadcrumbs items={breadcrumbItems} navigateTo={navigateTo} />
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                <div className="flex flex-col gap-4">
                  <div ref={imageContainerRef} className="relative group overflow-hidden bg-background-light dark:bg-background-dark/50 rounded-xl aspect-[4/5] w-full">
                    <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {allProductImages.map((img, index) => (
                            <div key={index} className="w-full h-full flex-shrink-0 overflow-hidden">
                              <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                  backgroundImage: `url("${img}")`,
                                  transform: `scale(1.2) translateY(${parallaxOffset}px)`,
                                  willChange: 'transform',
                                }}
                                aria-label={`${product.altText} - image ${index + 1}`}
                              />
                            </div>
                        ))}
                    </div>
                    
                    {allProductImages.length > 1 && (
                      <>
                        <button 
                          onClick={handlePrev} 
                          aria-label="Previous image" 
                          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-black/80 shadow-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                        >
                            <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
                        </button>
                        <button 
                          onClick={handleNext} 
                          aria-label="Next image" 
                          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-black/80 shadow-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                        >
                            <span className="material-symbols-outlined text-xl">arrow_forward_ios</span>
                        </button>
                      </>
                    )}
                  </div>
                  <div className="relative group">
                    <div ref={imageGalleryRef} className="flex items-center gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-1">
                        {allProductImages.map((img, index) => (
                            <div
                                // FIX: The ref callback for a functional component should not return a value.
                                // Encapsulated the assignment in a block statement to ensure an implicit `undefined` return.
                                ref={el => { thumbnailRefs.current[index] = el; }}
                                key={index}
                                className={`bg-cover bg-center rounded-lg aspect-square cursor-pointer shrink-0 w-[23%] ${currentIndex === index ? 'border-2 border-primary' : 'opacity-70 hover:opacity-100 transition-opacity'}`}
                                style={{ backgroundImage: `url("${img}")` }}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`${product.name} thumbnail ${index + 1}`}
                            ></div>
                        ))}
                    </div>
                    {allProductImages.length > 4 && (
                        <>
                            <button 
                                onClick={() => scrollImageGallery('left')} 
                                aria-label="Previous image" 
                                className="absolute top-1/2 left-0 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 dark:bg-black/80 shadow-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110 -translate-x-1/2"
                            >
                                <span className="material-symbols-outlined text-lg">arrow_back_ios_new</span>
                            </button>
                            <button 
                                onClick={() => scrollImageGallery('right')} 
                                aria-label="Next image" 
                                className="absolute top-1/2 right-0 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 dark:bg-black/80 shadow-md opacity-0 group-hover:opacity-100 transition-all hover:scale-110 translate-x-1/2"
                            >
                                <span className="material-symbols-outlined text-lg">arrow_forward_ios</span>
                            </button>
                        </>
                    )}
                  </div>
                </div>
                <div className="flex flex-col pt-4 lg:pt-8">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark font-display">{product.name}</h1>
                    <p className="text-base text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-3xl font-bold text-text-light dark:text-text-dark">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="mt-8 border-t border-border-light dark:border-border-dark pt-8">
                    <div className="flex items-center gap-6">
                      <label className="text-sm font-medium text-text-light dark:text-text-dark" htmlFor="quantity">Quantity</label>
                      <div className="flex items-center border border-border-light dark:border-border-dark rounded-lg">
                        <button
                          className="px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5 rounded-l-lg transition-colors"
                          onClick={() => handleQuantityChange(-1)}
                          aria-label="Decrease quantity"
                        >
                          <span className="material-symbols-outlined text-base">remove</span>
                        </button>
                        <input
                          className="w-10 text-center bg-transparent border-x border-border-light dark:border-border-dark focus:ring-0 focus:outline-none focus:border-primary text-text-light dark:text-text-dark"
                          id="quantity"
                          type="text"
                          value={quantity}
                          readOnly
                          aria-live="polite"
                        />
                        <button
                          className="px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5 rounded-r-lg transition-colors"
                          onClick={() => handleQuantityChange(1)}
                          aria-label="Increase quantity"
                        >
                          <span className="material-symbols-outlined text-base">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <button onClick={handleAddToCart} className="flex flex-1 max-w-xs cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                      <span className="material-symbols-outlined">shopping_cart</span>
                      Add to Cart
                    </button>
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={isProductWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                      className="flex items-center justify-center h-12 w-12 rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                      <span 
                        className={`material-symbols-outlined ${isProductWishlisted ? 'text-red-500' : ''}`}
                        style={{ fontVariationSettings: `'FILL' ${isProductWishlisted ? 1 : 0}` }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                  <div className="mt-12 border-t border-border-light dark:border-border-dark pt-8">
                    <h3 className="text-xl font-bold mb-6 text-text-light dark:text-text-dark uppercase tracking-wider">Specifications</h3>
                    <ul className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {product.specifications.map((spec, index) => (
                        <li key={index}>
                          <span className="block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark uppercase">{spec.label}</span>
                          <span className="block text-base font-semibold text-text-light dark:text-text-dark uppercase mt-1">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="mt-24 lg:mt-32">
                <div className="border-t border-border-light dark:border-border-dark pt-12">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-text-light dark:text-text-dark font-display">You Might Also Like</h2>
                    <div className="flex gap-2">
                        <button onClick={() => scrollCarousel('left')} aria-label="Scroll left" className="flex items-center justify-center h-10 w-10 rounded-full border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <button onClick={() => scrollCarousel('right')} aria-label="Scroll right" className="flex items-center justify-center h-10 w-10 rounded-full border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                  </div>
                  <div ref={relatedProductsRef} className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth">
                    {relatedProducts.map(relatedProduct => (
                      <div key={relatedProduct.id} className="flex flex-col group cursor-pointer w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0" onClick={() => navigateTo('product-overview', { productId: relatedProduct.id })}>
                        <div
                          className="bg-cover bg-center overflow-hidden bg-background-light dark:bg-background-dark/50 rounded-xl aspect-[4/5] w-full"
                          style={{ backgroundImage: `url("${relatedProduct.imageUrl}")` }}
                          aria-label={relatedProduct.altText}
                        ></div>
                        <div className="pt-4 text-center">
                          <h3 className="font-bold text-base text-text-light dark:text-text-dark group-hover:text-primary transition-colors">{relatedProduct.name}</h3>
                          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">${relatedProduct.price.toFixed(2)}</p>
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
    </>
  );
};

export default ProductOverviewPage;