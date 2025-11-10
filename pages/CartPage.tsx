import React, { useState, useEffect, useMemo } from 'react';
import { Page, Product } from '../types';
import { PRODUCTS } from '../constants';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import { useCart } from '../hooks/useCart';
import Breadcrumbs from '../components/Breadcrumbs';
import AnimatedSection from '../components/AnimatedSection';

interface CartPageProps {
  navigateTo: (page: Page, params?: { productId?: number }) => void;
  toggleTheme: () => void;
}

interface CartProduct extends Product {
  quantity: number;
}

const CartPage: React.FC<CartPageProps> = ({ navigateTo, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity } = useCart();

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

  const cartItems: CartProduct[] = useMemo(() => {
    return Array.from(cart.entries()).map(([productId, quantity]) => {
      const product = PRODUCTS.find(p => p.id === productId);
      return { ...product!, quantity };
    }).filter(item => item.id); // Filter out any potential mismatches
  }, [cart]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  const handleQuantityChange = (productId: number, delta: number) => {
    const currentQuantity = cart.get(productId) || 0;
    const newQuantity = currentQuantity + delta;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    } else {
      removeFromCart(productId);
    }
  };

  const breadcrumbItems = [
    { label: 'Home', page: 'home' as Page },
    { label: 'Your Cart' },
  ];

  return (
    <>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigateTo={navigateTo}
        toggleTheme={toggleTheme}
        currentPage='cart'
      />
      <div className="flex flex-1 flex-col items-center">
        <div className="layout-content-container flex w-full max-w-screen-xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
          <Navbar
            navigateTo={navigateTo}
            toggleTheme={toggleTheme}
            currentPage="cart"
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <main className="w-full flex flex-col flex-grow pb-8 lg:pb-16">
            <Breadcrumbs items={breadcrumbItems} navigateTo={navigateTo} />
            <div className="mb-8">
              <h1 className="text-4xl font-black tracking-tighter lg:text-5xl text-text-light dark:text-text-dark font-display">Your Cart</h1>
            </div>

            {cartItems.length > 0 ? (
              <AnimatedSection>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
                  <div className="col-span-1 lg:col-span-2">
                    <div className="space-y-6">
                      {cartItems.map(item => (
                        <div key={item.id} className="flex flex-row gap-6 border-b border-border-light dark:border-border-dark pb-6">
                          <div
                            className="bg-center bg-no-repeat bg-cover rounded-lg w-28 h-28 shrink-0 cursor-pointer"
                            style={{ backgroundImage: `url("${item.imageUrl}")` }}
                            onClick={() => navigateTo('product-overview', { productId: item.id })}
                          ></div>
                          <div className="flex flex-grow flex-col justify-between">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="text-lg font-bold text-text-light dark:text-text-dark">{item.name}</p>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">{item.style}</p>
                              </div>
                              <p className="text-lg font-bold shrink-0 ml-4 text-text-light dark:text-text-dark">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between items-end">
                              <div className="flex items-center gap-2 border border-border-light dark:border-border-dark rounded-lg">
                                <button onClick={() => handleQuantityChange(item.id, -1)} className="flex h-8 w-8 items-center justify-center rounded-l-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-text-secondary-light dark:text-text-secondary-dark">-</button>
                                <input className="w-10 p-0 text-center text-base font-medium bg-transparent border-x border-border-light dark:border-border-dark focus:outline-none focus:ring-0 text-text-light dark:text-text-dark" type="text" value={item.quantity} readOnly />
                                <button onClick={() => handleQuantityChange(item.id, 1)} className="flex h-8 w-8 items-center justify-center rounded-r-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer text-text-secondary-light dark:text-text-secondary-dark">+</button>
                              </div>
                              <button onClick={() => removeFromCart(item.id)} className="flex items-center gap-1.5 text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 transition-colors">
                                <span className="material-symbols-outlined text-base">delete</span>
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="col-span-1 lg:col-span-1">
                    <div className="sticky top-24 rounded-xl border border-border-light dark:border-border-dark p-6 lg:p-8 bg-secondary-background-light dark:bg-secondary-background-dark">
                      <h2 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark font-display">Order Summary</h2>
                      <div className="mt-6 space-y-4">
                        <div className="flex justify-between text-base text-text-light dark:text-text-dark">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-base">
                          <span className="text-text-light dark:text-text-dark">Shipping</span>
                          <span className="text-text-secondary-light dark:text-text-secondary-dark">Calculated at next step</span>
                        </div>
                        <div className="border-t border-border-light dark:border-border-dark my-4"></div>
                        <div className="flex justify-between text-lg font-bold text-text-light dark:text-text-dark">
                          <span>Total</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="mt-8">
                        <button className="flex h-12 w-full items-center justify-center rounded-lg bg-primary text-white text-base font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]">
                          Proceed to Checkout
                        </button>
                      </div>
                      <div className="mt-4 text-center">
                        <a onClick={() => navigateTo('collections')} className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:text-primary transition-colors cursor-pointer">or Continue Shopping</a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ) : (
              <AnimatedSection className="flex-grow">
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center rounded-full bg-primary/10 p-5 mb-6">
                    <span className="material-symbols-outlined text-primary text-5xl">shopping_cart</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-text-light dark:text-text-dark font-display">Your cart is empty</h3>
                  <p className="mt-2 max-w-md text-text-secondary-light dark:text-text-secondary-dark">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <button 
                    onClick={() => navigateTo('collections')}
                    className="mt-6 flex h-12 max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-white transition-opacity hover:opacity-90">
                    <span className="truncate">Start Shopping</span>
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

export default CartPage;