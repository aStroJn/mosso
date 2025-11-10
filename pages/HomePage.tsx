
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import { PRODUCTS } from '../constants';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

interface HomePageProps {
  navigateTo: (page: Page, params?: { productId?: number }) => void;
  toggleTheme: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigateTo={navigateTo}
        toggleTheme={toggleTheme}
        currentPage='home'
      />
      <div className="bg-background-light dark:bg-background-dark">
        {/* Navbar and Hero Section */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 z-20 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
            <Navbar
              navigateTo={navigateTo}
              toggleTheme={toggleTheme}
              currentPage="home"
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          </div>

          {/* New Hero Section */}
          <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img alt="Close-up of a modern, elegant bathroom faucet" className="absolute inset-0 w-full h-full object-cover animate-hero-zoom" src="https://picsum.photos/seed/mossohero/1920/1080"/>
            <div className="relative z-10 px-4">
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold mb-4 leading-tight">
                Where Everlasting<br/>Charm Meets<br/>Engineered Perfection
              </h1>
              <p className="text-lg mb-8 text-gray-200">Discover the MOSSO 2024 Collection...</p>
              <button onClick={() => navigateTo('collections')} className="bg-primary text-white px-10 py-4 rounded-lg text-base font-medium hover:opacity-90 transition-opacity">
                EXPLORE THE COLLECTIONS
              </button>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
              <div className="animate-bounce-slow">
                <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
              </div>
            </div>
          </section>
        </div>

        <main>
          {/* New Features Section */}
          <AnimatedSection>
            <section className="py-20 sm:py-28">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-text-light dark:text-text-dark">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                    </div>
                    <h3 className="font-semibold mb-1">100% Factory Tested</h3>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-primary text-3xl">shield</span>
                    </div>
                    <h3 className="font-semibold mb-1">Higher Durability Guaranteed</h3>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-primary text-3xl">water_drop</span>
                    </div>
                    <h3 className="font-semibold mb-1">No Worries of Leakages</h3>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-primary text-3xl">flag</span>
                    </div>
                    <h3 className="font-semibold mb-1">Make in India</h3>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* New About Section */}
          <AnimatedSection>
            <section className="py-20 sm:py-28 bg-secondary-background-light dark:bg-secondary-background-dark">
              <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                      <div className="rounded-xl overflow-hidden aspect-[4/5]">
                          <img src="https://picsum.photos/seed/mossoabout/800/1000" alt="Elegant bathroom interior with natural light" className="w-full h-full object-cover"/>
                      </div>
                      <div className="text-center md:text-left">
                          <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-6 text-text-light dark:text-text-dark">Your Bathroom, Made Extraordinarily Good</h2>
                          <p className="text-base sm:text-lg leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                              MOSSO is dedicated to transforming everyday routines into moments of luxury and tranquility. Our mission is to combine timeless design with unparalleled engineering, creating sanitary ware that not only looks exquisite but performs flawlessly for years to come. We believe in quality, innovation, and the art of a perfect finish.
                          </p>
                      </div>
                  </div>
              </div>
            </section>
          </AnimatedSection>

          {/* New Collections Highlight Section */}
          <AnimatedSection>
            <section className="py-20 sm:py-28">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 text-text-light dark:text-text-dark">Discover Your Signature Style</h2>
                    <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">Explore our curated collections, each with a unique personality.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PRODUCTS.slice(0, 6).map((product) => (
                    <div key={product.id} onClick={() => navigateTo('product-overview', { productId: product.id })} className="bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark group cursor-pointer">
                        <div className="overflow-hidden aspect-[4/5]">
                           <img alt={product.altText} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" src={product.imageUrl} />
                        </div>
                        <div className="p-6">
                            <h3 className="font-display text-2xl font-semibold mb-2 text-text-light dark:text-text-dark">{product.name}</h3>
                            <p className="mb-4 text-text-secondary-light dark:text-text-secondary-dark">{product.description}</p>
                            <div className="font-medium text-primary inline-flex items-center gap-2">
                              View Collection
                              <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-16">
                  <button onClick={() => navigateTo('collections')} className="border border-primary text-primary px-10 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors">
                      VIEW ALL COLLECTIONS
                  </button>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* New Technology Section */}
          <AnimatedSection>
            <section className="py-20 sm:py-28 bg-secondary-background-light dark:bg-secondary-background-dark">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                  <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 text-text-light dark:text-text-dark">The Technology Behind the Style</h2>
                  <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">Our commitment to excellence is forged in precision engineering and rigorous quality standards.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 mb-6 flex items-center justify-center bg-primary/10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110">
                      <span className="material-symbols-outlined text-primary text-4xl">precision_manufacturing</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">Advanced Manufacturing</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">Utilizing state-of-the-art machinery and techniques to ensure every piece is crafted to perfection with flawless finishes.</p>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 mb-6 flex items-center justify-center bg-primary/10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110">
                      <span className="material-symbols-outlined text-primary text-4xl">task_alt</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">Strict Quality Checks</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">Each product undergoes a multi-point inspection process, from material sourcing to final assembly, guaranteeing reliability.</p>
                  </div>
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 mb-6 flex items-center justify-center bg-primary/10 rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110">
                      <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">Unbeatable Value</h3>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">By combining superior craftsmanship with efficient processes, we deliver luxury that endures, providing exceptional value.</p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* New CTA Section */}
          <AnimatedSection>
            <section className="py-20 sm:py-28">
              <div className="container mx-auto px-4">
                <div className="bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl p-8 sm:p-16 text-center shadow-md">
                  <h2 className="font-display text-4xl sm:text-5xl font-semibold mb-4 text-text-light dark:text-text-dark">Ready to Build Your Better Life?</h2>
                  <p className="mb-8 max-w-2xl mx-auto text-text-secondary-light dark:text-text-secondary-dark">Begin your journey with MOSSO today. Our experts are ready to assist you in creating the bathroom of your dreams.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-primary text-white px-8 py-3 rounded-lg text-base font-medium hover:opacity-90 transition-opacity w-full sm:w-auto">
                        REQUEST A FREE CONSULTATION
                    </button>
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">Or,</span>
                    <button className="text-primary font-medium hover:underline">Download the Full 2024 Catalogue</button>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </main>
      </div>
      <Footer navigateTo={navigateTo} />
    </>
  );
};

export default HomePage;