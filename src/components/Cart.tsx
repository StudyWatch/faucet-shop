
import { useCart } from "../context/CartContext";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const { cart, removeFromCart, clearCart, getTotal } = useCart();

  return (
    <div dir="rtl" className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">🛒 עגלת הקניות שלך</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">העגלה ריקה כרגע 😕</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-4 last:border-none"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.quantity} × ₪{item.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="text-sm text-red-600 hover:underline"
            >
              נקה את העגלה
            </button>
            <div className="text-xl font-bold text-blue-900">
              סך הכול: ₪{getTotal().toLocaleString()}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
