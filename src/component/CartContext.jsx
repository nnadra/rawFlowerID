import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosClient from '../utils/helper';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Ambil semua item cart
  const fetchCart = async () => {
    setIsLoading(true);
    try {
      // HANYA PAKAI axiosClient (withCredentials:true sudah diatur)
      const { data } = await axiosClient.get('/api/cart');
      setCartItems(data.items.map(item => ({
        id: item.id,
        price: item.price,
        quantity: item.quantity,
        // title: item.product?.name,
        // description: item.product?.description,
        // image: item.product?.images?.[0],
        // category: item.product?.category,
        product: item.product
      })));
    } catch (err) {
      console.error('Fetch cart error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Tambah produk ke cart
  const addToCart = async ({ product_id, quantity = 1 }) => {
    try {
      // Jangan tambahkan header manual di sini
      await axiosClient.post('/api/cart/add', { product_id, quantity });
      await fetchCart();
    } catch (err) {
      console.error('Add to cart error:', err.response?.data || err);
      throw err;
    }
  };

  // Update jumlah
  const updateQty = async (itemId, quantity) => {
    try {
      await axiosClient.patch('/api/cart/update/${itemId}, { quantity }');
      await fetchCart();
    } catch (err) {
      console.error('Update cart error:', err);
      throw err;
    }
  };

  // Hapus item
  const removeItem = async (itemId) => {
    try {
      await axiosClient.delete('/api/cart/remove/${itemId}');
      await fetchCart();
    } catch (err) {
      console.error('Remove from cart error:', err);
      throw err;
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isLoading,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQty,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// buat akses isi dri cartContext dri luar
export const useCart = () => useContext(CartContext);