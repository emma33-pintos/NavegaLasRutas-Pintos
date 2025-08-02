import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity) {
    setCart(prev => {
      const found = prev.find(prod => prod.id === item.id);
      if (found) {
        return prev.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
      }
      return [...prev, { ...item, quantity }];
    });
  }

  function getTotalQuantity() {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  }

  function getTotalPrice() {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalQuantity, getTotalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}