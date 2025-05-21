import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [onlyOnSale, setOnlyOnSale] = useState(false);

  const filteredProducts = products
    .filter((p) => !selectedCategory || p.category === selectedCategory)
    .filter((p) => p.price >= minPrice && p.price <= maxPrice)
    .filter((p) => !onlyOnSale || p.isOnSale);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-4 sm:px-8 md:px-16 py-12 text-gray-800 font-body"
    >
      {/* כותרת ראשית */}
      <section className="max-w-7xl mx-auto text-center mb-14 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-blue-900 mb-4 drop-shadow-md">
          🛍️ כל המוצרים
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          עיין בקולקציה המלאה של ברזים, מקלחות ושירותים מעוצבים – בחר את הסגנון שמתאים לבית שלך.
        </p>
      </section>

      {/* תוכן עמוד */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* סיידבר עם פילטרים */}
        <aside className="lg:w-72 shrink-0 animate-slide-in-right">
          <Sidebar
            onSelectCategory={setSelectedCategory}
            onPriceRangeChange={(min, max) => {
              setMinPrice(min);
              setMaxPrice(max);
            }}
            onOnlyDiscountChange={setOnlyOnSale}
          />
          {(selectedCategory || minPrice > 0 || maxPrice < 9999 || onlyOnSale) && (
            <button
              onClick={() => {
                setSelectedCategory(null);
                setMinPrice(0);
                setMaxPrice(9999);
                setOnlyOnSale(false);
              }}
              className="mt-4 text-sm text-blue-700 hover:underline transition"
            >
              ← אפס את כל הסינונים
            </button>
          )}
        </aside>

        {/* תצוגת מוצרים */}
        <section className="flex-1 animate-fade-in">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="hover:scale-[1.01] transition-transform duration-300"
                >
                  <ProductCard
                    product={product}
                    onAddToCart={() => console.log("🛒 נוסף לעגלה:", product.name)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white border rounded-xl shadow-md animate-pulse">
              <p className="text-lg text-gray-500">😕 לא נמצאו מוצרים לפי הסינון שבחרת.</p>
              <p className="text-sm text-gray-400 mt-2">
                נסה לשנות טווח מחירים, קטגוריה או להסיר את סינון המבצעים.
              </p>
            </div>
          )}
        </section>
      </div>

      {/* מידע נוסף / מבצע */}
      <section className="max-w-7xl mx-auto mt-24 px-6 py-12 bg-gold/10 rounded-2xl shadow-xl border border-gold animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/images/water1.jpeg"
            alt="מבצע הברזים שלנו"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover max-h-80"
          />
          <div className="text-right md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-gold mb-4">
              💧 למה לבחור בברזים פלוס+?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              אנו משלבים עיצוב איטלקי יוקרתי עם טכנולוגיה חדשנית ועמידות גבוהה. השירות שלנו אישי ומהיר, וכולל משלוח עד הבית.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              תנו לבית שלכם את השדרוג שמגיע לו עם הברזים והמקלחות המעוצבים שלנו.
            </p>
          </div>
        </div>
      </section>

      {/* קריאה לפעולה */}
      <section className="text-center py-20 mt-16 animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">צריך עזרה בבחירת המוצר המתאים?</h2>
        <p className="text-gray-600 text-lg mb-8">
          צוות המומחים שלנו כאן בשבילך – צור קשר לייעוץ אישי ללא התחייבות.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105"
        >
          צור קשר
        </a>
      </section>
    </main>
  );
}
