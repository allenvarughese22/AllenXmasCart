import React, { createContext, useState, useContext, ReactNode } from "react";
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imagesrc: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((currentItems) => {
      const itemIndex = currentItems.findIndex(
        (item) => item.product.id === product.id
      );
      if (itemIndex > -1) {
        const newItems = [...currentItems];
        newItems[itemIndex].quantity += 1;
        return newItems;
      }
      return [...currentItems, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(quantity, 0) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
