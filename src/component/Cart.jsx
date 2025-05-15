import { X, Plus, Minus } from "lucide-react"; // Import icon dari lucide-react (X = close, Plus, Minus)

import { useCart } from "./CartContext";
import CartItem from "./CartItem";

const Cart = ({ setIsCartOpen, isCartOpen }) => {
  // State buat buka/tutup cart popup
  // State buat list item di dalam cart
  const [cartItems] = useCart(); // Ambil data cart dari context (hasil fetch dari backend)

  // // Fungsi buat hapus item dari cart
  // const removeItem = (id) => {
  //   setCartItems(cartItems.filter((item) => item.id !== id));
  // };

  // // Fungsi buat nambahin jumlah item
  // const increaseQty = (id) => {
  //   setCartItems((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  // // Fungsi buat ngurangin jumlah item (kalau 0, item dihapus)
  // const decreaseQty = (id) => {
  //   setCartItems((prev) =>
  //     prev
  //       .map((item) =>
  //         item.id === id
  //           ? { ...item, quantity: item.quantity - 1 }
  //           : item
  //       )
  //       .filter((item) => item.quantity > 0)
  //   );
  // };

  // Hitung total harga semua item
  
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Kalau cart-nya ditutup, jangan tampilin apa-apa
  if (!isCartOpen) return null;

  return (
    // Popup cart-nya (posisi fixed di kanan layar)
    <div className="fixed top-0 right-0 w-[600px] h-full bg-[#f9f0e6] shadow-lg z-50 flex flex-col">
      
      {/* Bagian atas cart */}
      <div className="px-8 pt-6 pb-4 flex justify-between items-center">
        {/* Judul Cart + jumlah item */}
        <h2 className="text-[28px] font-bold text-[#3e1f1f]">
          Cart ({cartItems.length})
        </h2>
        {/* Tombol X buat nutup cart */}
        <button onClick={() => setIsCartOpen(false)}>
          <X className="w-6 h-6 text-[#3e1f1f]" />
        </button>
      </div>

      {/* Daftar item di cart */}
      <div className="cart">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
    </div>

      {/* Bagian bawah (total dan tombol checkout) */}
      <div className="px-8 pt-4 pb-6 border-t border-[#3e1f1f] bg-[#f9f0e6] mt-auto">
        <div className="flex justify-between mb-4 text-[#3e1f1f]">
          {/* Teks total harga */}
          <span className="text-base">Total</span>
          <span className="text-lg font-semibold">
            Rp {totalPrice.toLocaleString("id-ID")}
          </span>
        </div>

        {/* Tombol aksi */}
        <div className="flex gap-2">
          {/* Tombol buat lanjut belanja */}
          <button
            className="flex-1 border border-[#3e1f1f] text-[#3e1f1f] py-2 rounded text-base"
            onClick={() => setIsCartOpen(false)}
          >
            Continue Shopping
          </button>
          {/* Tombol checkout (belum ada aksi) */}
          <button className="flex-1 bg-[#3e1f1f] text-white py-2 rounded text-base">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart; // Export komponen Cart supaya bisa dipakai di tempat lain
