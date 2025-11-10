import { useState, useEffect, useCallback } from 'react';

const CART_KEY = 'mosso-cart';

type CartItemTuple = [number, number];

export const useCart = () => {
  const [cart, setCart] = useState<Map<number, number>>(new Map());

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_KEY);
      if (storedCart) {
        setCart(new Map(JSON.parse(storedCart) as CartItemTuple[]));
      }
    } catch (error) {
      console.error('Error parsing cart from localStorage', error);
      setCart(new Map());
    }
  }, []);

  const updateLocalStorage = (newCart: Map<number, number>) => {
    localStorage.setItem(CART_KEY, JSON.stringify(Array.from(newCart.entries())));
  };

  const addToCart = useCallback((productId: number, quantity: number = 1) => {
    setCart(prevCart => {
      const newCart = new Map(prevCart);
      const currentQuantity = newCart.get(productId) || 0;
      newCart.set(productId, currentQuantity + quantity);
      updateLocalStorage(newCart);
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prevCart => {
      const newCart = new Map(prevCart);
      newCart.delete(productId);
      updateLocalStorage(newCart);
      return newCart;
    });
  }, []);

  const updateQuantity = useCallback((productId: number, newQuantity: number) => {
    setCart(prevCart => {
      const newCart = new Map(prevCart);
      if (newQuantity > 0) {
        newCart.set(productId, newQuantity);
      } else {
        newCart.delete(productId);
      }
      updateLocalStorage(newCart);
      return newCart;
    });
  }, []);

  const clearCart = useCallback(() => {
    const newCart = new Map<number, number>();
    setCart(newCart);
    updateLocalStorage(newCart);
  }, []);
  
  const cartCount = cart.size;

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart, cartCount };
};
