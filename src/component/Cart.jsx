import { X } from "lucide-react";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

 return (
  <div
    className={`fixed top-0 right-0 h-full w-[600px] bg-[#f9f0e6] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
      isCartOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    {/* Tambahkan wrapper flex column di sini */}
    <div className="flex flex-col h-full">

      {/* Header */}
      <div className="px-8 pt-6 pb-4 flex justify-between items-center">
        <h2 className="text-[28px] font-bold text-[#3e1f1f]">
          Cart ({cartItems.length})
        </h2>
        <button onClick={() => setIsCartOpen(false)}>
          <X className="w-6 h-6 text-[#3e1f1f]" />
        </button>
      </div>

      {/* Konten item cart: beri flex-1 agar ambil sisa ruang */}
      <div className="flex-1 overflow-y-auto px-8 pb-6">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Footer tetap sama, akan otomatis nempel bawah */}
      <div className="px-8 pt-4 pb-6 border-t border-[#3e1f1f] bg-[#f9f0e6]">
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
  </div>
);
};

export default Cart;
