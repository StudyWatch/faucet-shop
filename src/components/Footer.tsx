import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6 border-t border-neutral-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
        {/* על החנות */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">על החנות</h3>
          <p className="text-neutral-400 leading-relaxed">
            ברזים פלוס+ מתמחה בברזים, מקלחות ושירותים מעוצבים. אנו משלבים איכות, חדשנות ושירות אישי כדי להפוך כל חדר רחצה לחוויה.
          </p>
        </div>

        {/* קישורים */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">ניווט מהיר</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-neutral-300 hover:text-white transition">🏠 בית</Link></li>
            <li><Link to="/products" className="text-neutral-300 hover:text-white transition">🛁 מוצרים</Link></li>
            <li><Link to="/about" className="text-neutral-300 hover:text-white transition">ℹ️ אודות</Link></li>
            <li><Link to="/contact" className="text-neutral-300 hover:text-white transition">📞 צור קשר</Link></li>
            <li><a href="#" className="text-neutral-300 hover:text-white transition">❓ שאלות נפוצות</a></li>
          </ul>
        </div>

        {/* צור קשר */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">צור קשר</h3>
          <ul className="space-y-2 text-neutral-400">
            <li className="flex items-center gap-2"><Phone size={16} /> 03-5555555</li>
            <li className="flex items-center gap-2"><Mail size={16} /> info@faucetsplus.co.il</li>
            <li className="flex items-center gap-2"><MapPin size={16} /> תל אביב, ישראל</li>
            <li>שעות פעילות: א׳–ה׳ 09:00–18:00</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-neutral-500 mt-10 border-t border-neutral-800 pt-6">
        © {new Date().getFullYear()} ברזים פלוס+. כל הזכויות שמורות.
      </div>
    </footer>
  );
}
