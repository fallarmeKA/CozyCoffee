import { useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Use localStorage to persist cart items
const CART_STORAGE_KEY = "cozy-coffee-cart";

// Get cart items from localStorage
const getStoredCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];

  const storedCart = localStorage.getItem(CART_STORAGE_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
};

// Save cart items to localStorage
const storeCart = (cart: CartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

// Custom hook for cart functionality
export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(getStoredCart());

  // Update localStorage when cart changes
  useEffect(() => {
    storeCart(cartItems);
  }, [cartItems]);

  // Add item to cart
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Increase item quantity
  const increaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    subtotal,
    tax,
    total,
    itemCount,
  };
};
