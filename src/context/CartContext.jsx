import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const exists = cart.find(
      item => item.id === product.id
    );

    if (exists) {

      setCart(
        cart.map(item =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          qty: 1
        }
      ]);

    }

  };

  const removeFromCart = id => {

    setCart(
      cart.filter(item => item.id !== id)
    );

  };

  const isInCart = id => {

    return cart.some(item => item.id === id);

  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  );

}