import { X, Plus, Minus } from "lucide-react";

const CartItem = ({ image, title, description, price }) => {
  return (
    <div className="py-4 border-b border-[#cdb8a1] flex items-start gap-4">
      <img src={image} alt={title} className="w-[60px] h-[60px] object-cover rounded" />
      <div className="flex-1">
        <h3 className="text-[18px] font-semibold text-[#3e1f1f] leading-none">{title}</h3>
        <p className="text-sm text-[#3e1f1f] mb-2">{description}</p>
        <p className="text-sm text-[#3e1f1f]">Rp {price.toLocaleString("id-ID")}</p>
      </div>
      <div className="flex flex-col items-end justify-between h-full">
        <button>
          <X className="w-5 h-5 text-[#3e1f1f]" />
        </button>
        <div className="mt-6 flex items-center gap-3 border px-3 py-[2px] rounded text-[#3e1f1f]">
          <Minus className="w-4 h-4 cursor-pointer" />
          <span className="text-sm">1</span>
          <Plus className="w-4 h-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
