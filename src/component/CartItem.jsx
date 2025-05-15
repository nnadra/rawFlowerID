import { X, Plus, Minus } from "lucide-react";
import { useState } from "react";

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  // const [isCartOpen, setIsCartOpen] = useState(true); // default true biar kelihatan

  if (!isCartOpen) return null; // cart hilang saat false

  return (
    <div className="py-4 border-b border-[#cdb8a1] flex items-start gap-4">
      {/* Ambil gambar pertama dari array image */}
      <img
        src={item.image[0]}
        alt={item.title}
        className="w-[60px] h-[60px] object-cover rounded"
      />

      <div className="flex-1">
        <h3 className="text-[18px] font-semibold text-[#3e1f1f] leading-none">
          {item.title}
        </h3>
        <p className="text-sm text-[#3e1f1f] mb-2">{item.description}</p>
        <p className="text-sm text-[#3e1f1f]">
          Rp {item.price.toLocaleString("id-ID")}
        </p>
      </div>

      <div className="flex flex-col items-end justify-between h-full">
        <button onClick={() => onRemove(item.id)}>
          <X className="w-5 h-5 text-[#3e1f1f]" />
        </button>
        <div className="mt-6 flex items-center gap-3 border px-3 py-[2px] rounded text-[#3e1f1f]">
          <Minus
            className="w-4 h-4 cursor-pointer"
            onClick={() => onDecrease(item.id)}
          />
          <span className="text-sm">{item.quantity}</span>
          <Plus
            className="w-4 h-4 cursor-pointer"
            onClick={() => onIncrease(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
