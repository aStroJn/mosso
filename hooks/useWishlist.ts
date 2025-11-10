import { useState, useEffect, useCallback } from 'react';

const WISHLIST_KEY = 'mosso-wishlist';

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());

  useEffect(() => {
    try {
      const storedWishlist = localStorage.getItem(WISHLIST_KEY);
      if (storedWishlist) {
        // FIX: Cast the result of JSON.parse to number[] to ensure a Set<number> is created.
        // Without this, a Set<unknown> was being created, causing a downstream type error.
        setWishlist(new Set(JSON.parse(storedWishlist) as number[]));
      }
    } catch (error) {
      console.error('Error parsing wishlist from localStorage', error);
      setWishlist(new Set());
    }
  }, []);

  const updateLocalStorage = (newWishlist: Set<number>) => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(Array.from(newWishlist)));
  };

  const toggleWishlist = useCallback((productId: number) => {
    setWishlist(prevWishlist => {
      const newWishlist = new Set(prevWishlist);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      updateLocalStorage(newWishlist);
      return newWishlist;
    });
  }, []);

  const isWishlisted = useCallback((productId: number) => {
    return wishlist.has(productId);
  }, [wishlist]);

  return { wishlist, toggleWishlist, isWishlisted };
};
