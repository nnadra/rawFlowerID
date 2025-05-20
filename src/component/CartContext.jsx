import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import axiosClient, { getAuthHeaders } from '../utils/helper';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchCart = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosClient.get('/api/cart', { headers: getAuthHeaders() });
      setCartItems(data.items || []);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async ({ product_id, quantity = 1 }) => {
    await axiosClient.post(
      '/api/cart/add',
      { product_id, quantity },
      { headers: getAuthHeaders() }
    );
    await fetchCart();
  };

  const updateQty = async (itemId, quantity) => {
    await axiosClient.patch(
      `/api/cart/update/${itemId}`,
      { quantity },
      { headers: getAuthHeaders() }
    );
    await fetchCart();
  };

  const removeItem = async (itemId) => {
    await axiosClient.delete(`/api/cart/remove/${itemId}`, { headers: getAuthHeaders() });
    await fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{
      cartItems,
      isLoading,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      updateQty,
      removeItem
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
