import CartItem from "../component/CartItem";

const Cart = () => {
  return (
    <div className="fixed top-0 right-0 w-[420px] h-full bg-[#f9f0e6] shadow-lg z-50 flex flex-col">
  {/* Header */}
  <div className="px-8 pt-6 pb-4 flex justify-between items-center">
    <h2 className="text-[28px] font-bold text-[#3e1f1f]">Cart (5)</h2>
    <button>
      <svg className="w-6 h-6 text-[#3e1f1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  {/* Scrollable Items */}
  <div className="flex-1 overflow-y-auto px-8">
    <CartItem
      image="https://via.placeholder.com/60"
      title="Pretty Cout"
      description="Bouquet fresh"
      price={350000}
    />
    <CartItem
      image="https://via.placeholder.com/60"
      title="Pretty Cout"
      description="Bouquet fresh"
      price={285000}
    />
  </div>

  {/* Sticky Bottom */}
  <div className="px-8 pt-4 pb-6 border-t border-[#3e1f1f] bg-[#f9f0e6]">
    <div className="flex justify-between mb-4 text-[#3e1f1f]">
      <span className="text-base">Total</span>
      <span className="text-lg font-semibold">Rp 535.000</span>
    </div>
    <div className="flex gap-2">
      <button className="flex-1 border border-[#3e1f1f] text-[#3e1f1f] py-2 rounded text-base">
        Continue Shopping
      </button>
      <button className="flex-1 bg-[#3e1f1f] text-white py-2 rounded text-base">
        Continue Shopping
      </button>
    </div>
  </div>
</div>

  );
};

export default Cart;
