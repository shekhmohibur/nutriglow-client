import { createContext, useContext, useState } from "react";

// Create context
const WishlistContext = createContext();

// Custom hook for consuming the context
export const useWishlist = () => useContext(WishlistContext);

// Provider component
export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  // Toggle product in wishlist
  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    setWishlist(
      exists
        ? wishlist.filter((item) => item.id !== product.id)
        : [...wishlist, product]
    );
  };

  // Check if product is wishlisted
  const isWishlisted = (id) => wishlist.some((item) => item.id === id);

  // Only export what components/hooks need, no extra constants here
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}