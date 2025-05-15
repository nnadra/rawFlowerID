import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { getAuthHeaders } from "../utils/helper";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCart = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/api/cart", {
        headers: getAuthHeaders(),
      });
      setCartItems(res.data.items || []);
    } catch (error) {
      console.error("Failed to fetch cart", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async ({ product_id, quantity = 1 }) => {
    try {
      await axios.post(
        "http://localhost:8000/api/cart/add",
        { product_id, quantity },
        { headers: getAuthHeaders() }
      );
      // refresh cart data setelah add
      await fetchCart();
    } catch (error) {
      console.error("Failed to add to cart", error);
    }
  };

  const increaseQty = async (item) => {
    try {
      await axios.patch(
        `http://localhost:8000/api/cart/update/${item.id}`,
        { quantity: item.quantity + 1 },
        { headers: getAuthHeaders() }
      );
      await fetchCart();
    } catch (error) {
      console.error("Failed to increase quantity", error);
    }
  };

  const decreaseQty = async (item) => {
    if (item.quantity <= 1) return; // atau lo bisa auto remove juga
    try {
      await axios.patch(
        `http://localhost:8000/api/cart/update/${item.id}`,
        { quantity: item.quantity - 1 },
        { headers: getAuthHeaders() }
      );
      await fetchCart();
    } catch (error) {
      console.error("Failed to decrease quantity", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/cart/remove/${id}`, {
        headers: getAuthHeaders(),
      });
      await fetchCart(); // refresh data cart dari server
    } catch (error) {
      console.error("Gagal hapus item dari cart", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, isLoading, addToCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
