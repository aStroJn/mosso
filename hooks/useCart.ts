import { useState, useEffect, useCallback } from 'react';

const CART_KEY = 'mosso-cart';
const CART_EVENT = 'mosso-cart-updated';

type CartItemTuple = [number, number];

export const useCart = () => {
  const [cart, setCart] = useState<Map<number, number>>(new Map());

  // Helper to read latest data from LocalStorage
  const getCartFromStorage = useCallback((): Map<number, number> => {
    try {
      const storedCart = localStorage.getItem(CART_KEY);
      if (storedCart) {
        return new Map(JSON.parse(storedCart) as CartItemTuple[]);
      }
    } catch (error) {
      console.error('Error parsing cart from localStorage', error);
    }
    return new Map();
  }, []);

  useEffect(() => {
    // Initial load
    setCart(getCartFromStorage());

    // Listener for synchronization
    const handleCartUpdate = () => {
      setCart(getCartFromStorage());
    };

    // Listen for custom app events and standard storage events (cross-tab)
    window.addEventListener(CART_EVENT, handleCartUpdate);
    window.addEventListener('storage', handleCartUpdate);

    return () => {
      window.removeEventListener(CART_EVENT, handleCartUpdate);
      window.removeEventListener('storage', handleCartUpdate);
    };
  }, [getCartFromStorage]);

  const updateLocalStorage = (newCart: Map<number, number>) => {
    localStorage.setItem(CART_KEY, JSON.stringify(Array.from(newCart.entries())));
    // Broadcast event to notify other components (like Navbar) immediately
    window.dispatchEvent(new Event(CART_EVENT));
  };

  const addToCart = useCallback((productId: number, quantity: number = 1) => {
    const currentCart = getCartFromStorage();
    const newCart = new Map<number, number>(currentCart);
    const currentQuantity = newCart.get(productId) || 0;
    newCart.set(productId, currentQuantity + quantity);
    updateLocalStorage(newCart);
  }, [getCartFromStorage]);

  const removeFromCart = useCallback((productId: number) => {
    const currentCart = getCartFromStorage();
    const newCart = new Map<number, number>(currentCart);
    newCart.delete(productId);
    updateLocalStorage(newCart);
  }, [getCartFromStorage]);

  const updateQuantity = useCallback((productId: number, newQuantity: number) => {
    const currentCart = getCartFromStorage();
    const newCart = new Map<number, number>(currentCart);
    if (newQuantity > 0) {
      newCart.set(productId, newQuantity);
    } else {
      newCart.delete(productId);
    }
    updateLocalStorage(newCart);
  }, [getCartFromStorage]);

  const clearCart = useCallback(() => {
    const newCart = new Map<number, number>();
    updateLocalStorage(newCart);
  }, []);
  
  const cartCount = cart.size;

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount };
};