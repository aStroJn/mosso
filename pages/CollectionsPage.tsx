import React, { useState, useEffect } from 'react';
import { COLLECTIONS, PRODUCT_STYLES } from '../constants';
import { Page, Collection } from '../types';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import AnimatedSection from '../components/AnimatedSection';
import Pagination from '../components/Pagination';

interface CollectionsPageProps {
  navigateTo: (page: Page, params?: { productId?: number; collectionId?: number }) => void;
  toggleTheme: () => void;
}

interface CollectionCardProps {
    collection: Collection;
    navigateTo: (page: Page, params?: { productId?: number; collectionId?: number }) => void;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection, navigateTo }) => {
    return (
        <div 
            onClick={() => navigateTo('collection-detail', { collectionId: collection.id })} 
            className="bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark group cursor-pointer flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-primary/10"
        >
            <div className="overflow-hidden aspect-[4/5] relative">
               <img alt={collection.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" src={collection.heroImageUrl} />
               <div className="absolute bottom-3 left-3 z-10 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                 {collection.products.length} Products
               </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-semibold mb-2 text-text-light dark:text-text-dark">{collection.name}</h3>
                <p className="mb-4 text-text-secondary-light dark:text-text-secondary-dark flex-grow">{collection.tagline}</p>
                <div className="font-medium text-primary inline-flex items-center gap-2 mt-auto">
                  View Collection
                  <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </div>
            </div>
        </div>
    );
};

const CollectionsPage: React.FC<CollectionsPageProps> = ({ navigateTo, toggleTheme }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All Collections');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 8;

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
    setCurrentPage(1);
  }, [activeFilter]);

  const filteredCollections = activeFilter === 'All Collections'
    ? COLLECTIONS
    : COLLECTIONS.filter(c => c.style === activeFilter);
  
  const totalPages = Math.ceil(filteredCollections.length / ITEMS_PER_PAGE);
  const paginatedCollections = filteredCollections.slice(
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
      <div className="flex flex-1 flex-col items-center">
        <div className="layout-content-container flex w-full max-w-screen-xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
            <Navbar
                navigateTo={navigateTo}
                toggleTheme={toggleTheme}
                currentPage="collections"
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <main className="flex flex-col gap-8 md:gap-12 pb-8 md:pb-12">
                <Breadcrumbs
                  items={[
                    { label: 'Home', page: 'home' as Page },
                    { label: 'Collections' },
                  ]}
                  navigateTo={navigateTo}
                />
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
                        {paginatedCollections.map(collection => <CollectionCard key={collection.id} collection={collection} navigateTo={navigateTo} />)}
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
    </>
  );
};

export default CollectionsPage;