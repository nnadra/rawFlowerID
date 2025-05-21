import { useState } from "react";
import { X, Plus, Minus } from "lucide-react";


import ImgCartProduct from "../assets/cart-img1.svg";
import ImgCartProduct2 from "../assets/cart-img2.svg";

const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: ImgCartProduct,
      title: "Pretty Cout",
      description: "Bouquet fresh",
      price: 350000,
      quantity: 1,
    },
    {
      id: 2,
      image: ImgCartProduct2,
      title: "Pretty Cout",
      description: "Bouquet fresh",
      price: 185000,
      quantity: 1,
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isCartOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-[600px] h-full bg-[#f9f0e6] shadow-lg z-50 flex flex-col">
      {/* Header */}
      <div className="px-8 pt-6 pb-4 flex justify-between items-center">
        <h2 className="text-[28px] font-bold text-[#3e1f1f]">
          Cart ({cartItems.length})
        </h2>
        <button onClick={() => setIsCartOpen(false)}>
          <X className="w-6 h-6 text-[#3e1f1f]" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="py-4 border-b border-[#cdb8a1] flex items-start gap-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[90px] h-[80px] rounded-sm object-cover"
            />
            <div className="flex-1">
              <h3 className="text-[22px] font-medium text-[#3e1f1f] leading-none">
                {item.title}
              </h3>
              <p className="text-sm font-light text-[#3e1f1f] mb-2">{item.description}</p>
              <p className="text-sm text-[#3e1f1f] mt-8">
                Rp {item.price.toLocaleString("id-ID")}
              </p>
            </div>
            <div className="flex flex-col items-end justify-between h-full">
              <button onClick={() => removeItem(item.id)}>
                <X className="w-5 h-5 text-[#3e1f1f]" />
              </button>
              <div className="mt-12 flex items-center gap-3 border px-3 py-[2px] rounded text-[#3e1f1f]">
                <Minus
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => decreaseQty(item.id)}
                />
                <span className="text-sm">{item.quantity}</span>
                <Plus
                  className="w-4 h-4 cursor-pointer"
                  onClick={() => increaseQty(item.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-8 pt-4 pb-6 border-t border-[#3e1f1f] bg-[#f9f0e6] mt-auto">
        <div className="flex justify-between mb-4 text-[#3e1f1f]">
          <span className="text-base">Total</span>
          <span className="text-lg font-semibold">
            Rp {totalPrice.toLocaleString("id-ID")}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            className="flex-1 border border-[#3e1f1f] text-[#3e1f1f] py-2 rounded text-base"
            onClick={() => setIsCartOpen(false)}
          >
            Continue Shopping
          </button>
          <button className="flex-1 bg-[#3e1f1f] text-white py-2 rounded text-base">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
