import { useState, useEffect, useCallback } from 'react';

const WISHLIST_KEY = 'mosso-wishlist';
const WISHLIST_EVENT = 'mosso-wishlist-updated';

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  // Helper to read latest data from LocalStorage
  const getWishlistFromStorage = useCallback((): Set<number> => {
    try {
      const storedWishlist = localStorage.getItem(WISHLIST_KEY);
      if (storedWishlist) {
        return new Set(JSON.parse(storedWishlist) as number[]);
      }
    } catch (error) {
      console.error('Error parsing wishlist from localStorage', error);
    }
    return new Set();
  }, []);

  useEffect(() => {
    // Initial load
    setWishlist(getWishlistFromStorage());

    // Listener for synchronization
    const handleWishlistUpdate = () => {
      setWishlist(getWishlistFromStorage());
    };

    // Listen for custom app events and standard storage events (cross-tab)
    window.addEventListener(WISHLIST_EVENT, handleWishlistUpdate);
    window.addEventListener('storage', handleWishlistUpdate);

    return () => {
      window.removeEventListener(WISHLIST_EVENT, handleWishlistUpdate);
      window.removeEventListener('storage', handleWishlistUpdate);
    };
  }, [getWishlistFromStorage]);

  const toggleWishlist = useCallback((productId: number) => {
    // Read fresh from storage to ensure we don't overwrite concurrent updates
    const currentWishlist = getWishlistFromStorage();
    const newWishlist = new Set(currentWishlist);

    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }

    // Save and Broadcast
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(Array.from(newWishlist)));
    window.dispatchEvent(new Event(WISHLIST_EVENT));
  }, [getWishlistFromStorage]);

  const isWishlisted = useCallback((productId: number) => {
    return wishlist.has(productId);
  }, [wishlist]);

  return { wishlist, toggleWishlist, isWishlisted };
};