import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 1000);
  };

  return (
    <main
      dir="rtl"
      className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-b from-white to-blue-50 shadow-xl rounded-3xl mt-10 font-body"
    >
      <h1 className="text-4xl font-display font-bold text-blue-800 mb-8 text-center">
        💳 סיכום ההזמנה
      </h1>

      {cart.length === 0 && !orderPlaced ? (
        <div className="text-center py-20 text-gray-600 text-lg">
          העגלה שלך ריקה. חזור לחנות להוסיף מוצרים.
        </div>
      ) : orderPlaced ? (
        <div className="text-center py-20 text-green-700">
          <CheckCircle size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold">הזמנתך התקבלה בהצלחה!</h2>
          <p className="text-gray-600 mt-2">פרטי ההזמנה נשלחו לדוא"ל שלך.</p>
        </div>
      ) : (
        <>
          {/* רשימת מוצרים */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🧾 פרטי המוצרים:</h2>
            <ul className="divide-y divide-gray-200 border rounded-lg bg-white">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="px-5 py-4 flex items-center justify-between gap-4"
                >
                  <div className="flex flex-col text-right">
                    <span className="font-medium text-gray-700">
                      {item.quantity} × {item.name}
                    </span>
                    <span className="text-sm text-gray-400">
                      ₪{item.price.toLocaleString()} ליחידה
                    </span>
                  </div>
                  <div className="text-blue-700 font-bold text-lg">
                    ₪{(item.quantity * item.price).toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* סכום כולל */}
          <div className="bg-blue-100 p-6 rounded-xl shadow-inner text-right text-blue-900 mb-10">
            <div className="text-xl font-bold mb-2">
              סה"כ לתשלום: ₪{getTotal().toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">כולל מע"מ, לא כולל משלוח</div>
          </div>

          {/* פרטי לקוח */}
          <section className="mb-10 bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">📇 פרטי לקוח</h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="שם מלא"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-300"
              />
              <input
                type="tel"
                placeholder="מספר טלפון"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-300"
              />
             <input
  type="email"
  placeholder='דוא"ל'
  className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-300"
/>

              <input
                type="text"
                placeholder="כתובת מלאה למשלוח"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-300 col-span-full"
              />
              <textarea
                placeholder="הערות להזמנה"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-300 col-span-full"
                rows={3}
              />
            </form>
          </section>

          {/* כפתור סיום */}
          <div className="text-center">
            <button
              onClick={handlePlaceOrder}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md transition-all hover:scale-105"
            >
              אישור הזמנה
            </button>
            <p className="text-xs text-gray-400 mt-3">בלחיצה תשלח ההזמנה ותתאפס העגלה</p>
          </div>
        </>
      )}
    </main>
  );
}