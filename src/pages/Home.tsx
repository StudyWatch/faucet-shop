import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-10 text-gray-800 font-body">
      {/* באנר פתיחה */}
      <section className="max-w-7xl mx-auto text-center py-20 animate-fade-in">
        <h1 className="text-5xl sm:text-6xl font-display font-bold text-blue-900 mb-6 leading-tight drop-shadow-md">
          ברוכים הבאים ל-ברזים פלוס+
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          אתר הבית לברזים חדשניים, מקלחות חכמות ושירותים מעוצבים — באיכות גבוהה ובמחיר משתלם.
        </p>
        <Link
          to="/products"
          className="bg-gold hover:bg-yellow-500 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-xl hover:scale-105"
        >
          גלה את הקטלוג המלא
        </Link>
      </section>

      {/* אזור מבצע מוביל */}
      <section className="bg-blue-100 py-16 mt-12 shadow-inner rounded-lg animate-slide-up">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
          <img
            src="/images/water4.jpeg"
            alt="ברז לשירותים"
            className="w-full lg:w-1/2 rounded-xl shadow-xl object-cover max-h-[350px] border border-gray-200"
          />
          <div className="text-right lg:w-1/2">
            <h2 className="text-3xl font-display font-bold text-blue-800 mb-4">
              🚽 מבצע החודש – 20% הנחה על ברזים לשירותים
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              רק החודש – כל הברזים המעוצבים לשירותים שלנו ב-20% הנחה! שילוב של עיצוב מודרני, התקנה קלה ועמידות לאורך שנים.
            </p>
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow hover:scale-105"
            >
              לעיון במבצע
            </Link>
          </div>
        </div>
      </section>

      {/* קולקציה נבחרת */}
      <section className="max-w-7xl mx-auto py-24 px-4 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-gray-800 mb-12">
          ⭐ דגמים נבחרים מתוך הקולקציה שלנו
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-card hover:shadow-xl transition transform hover:-translate-y-1 p-5 flex flex-col border border-gray-100"
            >
              <img
                src={`/images/water${i}.jpeg`}
                alt={`מוצר ${i}`}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">ברז דגם {i}</h3>
              <p className="text-sm text-gray-500 mb-2">דגם איכותי בעיצוב מודרני עם זרימה מתכווננת.</p>
              <span className="text-gold font-bold text-xl">₪{i * 100 + 150}</span>
              <Link
                to="/products"
                className="mt-auto text-sm text-blue-600 hover:underline pt-3 font-medium"
              >
                צפה במוצר
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ביקורות */}
      <section className="bg-gray-50 py-20 mt-16 animate-fade-in">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-gray-800 mb-12">
            💬 מה הלקוחות שלנו אומרים
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["שירה מת" + "א", "אורן מנתניה", "דנה מהרצליה"].map((name, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-all"
              >
                <p className="text-gray-700 mb-4 text-base leading-relaxed">
                  קיבלתי את הברז תוך יומיים! קל להתקנה, איכות מעולה ונראה מהמם בחדר האמבטיה. ממליצה בחום!
                </p>
                <p className="text-sm font-semibold text-blue-700">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* קריאה לפעולה אחרונה */}
      <section className="text-center py-20 mt-16 bg-white animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">מוכן לשדרג את הבית שלך?</h2>
        <p className="text-lg text-gray-600 mb-8">התחל לדפדף בין הקולקציה שלנו או צור קשר לייעוץ מותאם אישית.</p>
        <Link
          to="/products"
          className="bg-gold hover:bg-yellow-500 text-white px-10 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:scale-105"
        >
          לעיון במוצרים
        </Link>
      </section>
    </main>
  );
}
