import { X, Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  const [localQuantity, setLocalQuantity] = useState(item.quantity);

  useEffect(() => {
    setLocalQuantity(item.quantity);
  }, [item.quantity]);

  const handleDecrease = () => {
    if (localQuantity <= 1) return;
    const newQty = localQuantity - 1;
    setLocalQuantity(newQty);
    onDecrease(item.id, newQty);
  };

  return (
    <div className="py-4 border-b border-[#cdb8a1] flex items-start gap-4">
      {/* Ambil gambar pertama dari array image */}
      <img
        src={item.product?.images?.[0]}
        alt={item.product?.name}
        className="w-[60px] h-[60px] object-cover rounded"
      />

      <div className="flex-1">
        <h3 className="text-[18px] font-semibold text-[#3e1f1f] leading-none">
        {item.product?.name}
        </h3>
        <p className="text-sm text-[#3e1f1f] mb-2">{item.product?.category?.name}</p>
        <p className="text-sm text-[#3e1f1f]">
          Rp {Number(item.price).toLocaleString("id-ID")}
        </p>
      </div>

      <div className="flex flex-col items-end justify-between h-full">
        <button onClick={() => onRemove(item.id)}>
          <X className="w-5 h-5 text-[#3e1f1f]" />
        </button>
        <div className="mt-6 flex items-center gap-3 border px-3 py-[2px] rounded text-[#3e1f1f]">
          <Minus
            className="w-4 h-4 cursor-pointer"
            onClick={onDecrease}
          />
          <span className="text-sm">{localQuantity}</span>
          <Plus
            className="w-4 h-4 cursor-pointer"
            onClick={onIncrease}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
