import { X } from "lucide-react";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    removeItem,
    updateQty,
    isLoading,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[600px] bg-[#f9f0e6] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="px-6 sm:px-8 pt-6 pb-4 flex justify-between items-center">
          <h2 className="text-[24px] sm:text-[28px] font-bold text-[#3e1f1f]">
            Cart ({cartItems.length})
          </h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 pb-6">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={() => removeItem(item.id)}
              onIncrease={() => updateQty(item.id, item.quantity + 1)}
              onDecrease={() => {
                if (item.quantity > 1) {
                  updateQty(item.id, item.quantity - 1);
                } else {
                  removeItem(item.id);
                }
              }}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 pt-4 pb-6 border-t border-[#3e1f1f] bg-[#f9f0e6]">
          <div className="flex justify-between mb-4 text-[#3e1f1f]">
            <span className="text-base">Total</span>
            <span className="text-lg font-semibold">
              Rp {totalPrice.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              className="w-full sm:flex-1 border border-[#3e1f1f] text-[#3e1f1f] py-2 rounded text-base"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
            <button
              onClick={() => {
                setIsCartOpen(false);
                navigate("/checkout");
              }}
              className="w-full cursor-pointer sm:flex-1 bg-[#3e1f1f] text-white py-2 rounded text-base"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
