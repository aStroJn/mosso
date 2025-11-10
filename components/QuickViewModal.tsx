import React, { useState, useEffect } from 'react';
import { Page, Product } from '../types';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';

interface QuickViewModalProps {
  product: Product;
  onClose: () => void;
  navigateTo: (page: Page, params?: { productId?: number }) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, navigateTo }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300); // Match duration of closing animation
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };
  
  const handleViewFullDetails = () => {
    navigateTo('product-overview', { productId: product.id });
    handleClose();
  }

  const allProductImages = [product.imageUrl, ...product.galleryImages];
  const isProductWishlisted = isWishlisted(product.id);

  const animationClass = isClosing ? 'opacity-0' : 'opacity-100';
  const panelAnimationClass = isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${animationClass}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} aria-hidden="true"></div>
      
      <div className={`relative w-full max-w-4xl max-h-[90vh] bg-secondary-background-light dark:bg-secondary-background-dark rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out ${panelAnimationClass}`}>
        <button 
          onClick={handleClose} 
          aria-label="Close" 
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto p-6 md:p-8">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="bg-cover bg-center rounded-lg aspect-[4/5] w-full" style={{ backgroundImage: `url("${selectedImage}")` }}></div>
            <div className="grid grid-cols-5 gap-2">
              {allProductImages.map((img, index) => (
                <div
                  key={index}
                  className={`bg-cover bg-center rounded cursor-pointer aspect-square ${selectedImage === img ? 'ring-2 ring-primary ring-offset-2 dark:ring-offset-secondary-background-dark' : 'opacity-60 hover:opacity-100'}`}
                  style={{ backgroundImage: `url("${img}")` }}
                  onClick={() => setSelectedImage(img)}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <h2 id="quick-view-title" className="text-3xl font-bold text-text-light dark:text-text-dark font-display">{product.name}</h2>
            <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark">{product.description}</p>
            <p className="text-2xl font-bold text-text-light dark:text-text-dark mt-4">${product.price.toFixed(2)}</p>
            
            <div className="mt-6 border-t border-border-light dark:border-border-dark pt-6">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium" htmlFor="modal-quantity">Quantity</label>
                <div className="flex items-center border border-border-light dark:border-border-dark rounded-lg">
                  <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-l-lg">-</button>
                  <input id="modal-quantity" type="text" value={quantity} readOnly className="w-10 text-center bg-transparent border-x border-border-light dark:border-border-dark focus:ring-0 focus:outline-none" />
                  <button onClick={() => handleQuantityChange(1)} className="px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-r-lg">+</button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button onClick={handleAddToCart} className="flex-1 rounded-lg bg-primary text-white font-bold h-12 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">add_shopping_cart</span>
                Add to Cart
              </button>
              <button onClick={() => toggleWishlist(product.id)} className="h-12 w-12 rounded-lg border border-border-light dark:border-border-dark flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <span 
                    className={`material-symbols-outlined ${isProductWishlisted ? 'text-red-500' : 'text-text-secondary-light dark:text-text-secondary-dark'}`}
                    style={{ fontVariationSettings: `'FILL' ${isProductWishlisted ? 1 : 0}` }}
                >
                    favorite
                </span>
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <a onClick={handleViewFullDetails} className="text-sm font-medium text-primary hover:underline cursor-pointer">
                View Full Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;