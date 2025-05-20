import React from 'react';
import { useCart } from './CartContext';
import { X } from 'lucide-react';

export default function Cart({}) {
  const { cartItems, isLoading, isCartOpen, setIsCartOpen, updateQty, removeItem } = useCart();

  return (
    <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform transition-transform
      ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={() => setIsCartOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
        {isLoading ? (
          <p>Loading...</p>
        ) : cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex items-center mb-4">
              <img src={item.product.images?.[0]} alt="" className="w-16 h-16 object-cover rounded" />
              <div className="flex-1 ml-3">
                <h3 className="font-medium">{item.product.name}</h3>
                <p>Rp {item.price.toLocaleString('id-ID')}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => updateQty(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-2 py-1 border rounded"
                  >–</button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQty(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >+</button>
                </div>
              </div>
              <button onClick={() => removeItem(item.id)} className="ml-2 text-red-500">
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
