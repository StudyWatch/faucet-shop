
import { useCart } from "../context/CartContext";
import { X, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose: () => void;
}

export default function CartModal({ onClose }: Props) {
  const { cart, removeFromCart, clearCart, getTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center backdrop-blur-sm px-4 py-12"
      dir="rtl"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 mt-12 relative animate-cart-pop overflow-hidden">
        {/* כפתור סגירה */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-500 hover:text-red-600 transition"
        >
          <X size={28} />
        </button>

        {/* כותרת */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-blue-800">
            🛒 עגלת הקניות
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            כאן תוכל לראות את כל המוצרים שבחרת
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16 text-gray-500 text-lg">
            העגלה שלך ריקה 😕
          </div>
        ) : (
          <>
            {/* רשימת מוצרים */}
            <ul className="space-y-5 max-h-[340px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4 last:border-none"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl border shadow-sm"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-md font-semibold text-gray-800 line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.quantity} × ₪{item.price.toLocaleString()}
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

            {/* סכום כולל */}
            <div className="mt-8 border-t pt-6 flex flex-col gap-4">
              <div className="flex justify-between items-center text-lg font-bold text-blue-800">
                <span>סה"כ לתשלום:</span>
                <span>₪{getTotal().toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>כולל מע"מ</span>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:underline"
                >
                  נקה את כל העגלה
                </button>
              </div>
            </div>

            {/* כפתור תשלום */}
            <button
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold text-lg transition-all shadow-lg hover:scale-105"
            >
              המשך לתשלום
            </button>

            {/* שורת מידע עתידית */}
            <div className="mt-6 text-sm text-center text-gray-400">
              בעתיד: אפשרות להזין קופון או להוסיף הערות להזמנה 💡
            </div>
          </>
        )}
      </div>
    </div>
  );
}
