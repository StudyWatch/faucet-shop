export default function ContactPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-12 text-gray-800">
      {/* כותרת ראשית */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">📞 צור קשר</h1>
        <p className="text-lg text-gray-600">
          נשמח לשמוע ממך! בין אם יש לך שאלה, בקשה מיוחדת או פשוט רוצה לומר שלום.
        </p>
      </section>

      {/* פרטי התקשרות */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">🧭 דרכי יצירת קשר</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li>
            <strong>📧 דוא"ל:</strong> support@faucetsplus.co.il
          </li>
          <li>
            <strong>📱 טלפון:</strong> 050-1234567
          </li>
          <li>
            <strong>📍 כתובת:</strong> רח' ברזים 12, אזור תעשייה מודיעין
          </li>
          <li>
            <strong>🕒 שעות פעילות:</strong> א'-ה' 9:00–17:00, ו' 9:00–13:00
          </li>
        </ul>
      </section>

      {/* טופס יצירת קשר */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">✉️ טופס יצירת קשר</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
              שם מלא
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300"
              placeholder="הכנס את שמך המלא"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
              דוא"ל
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300"
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-1 font-medium text-gray-700">
              נושא הפנייה
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300"
              placeholder="כותרת ההודעה שלך"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
              תוכן ההודעה
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-300"
              placeholder="כתוב כאן את ההודעה שלך..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition shadow"
          >
            שלח פנייה
          </button>
        </form>
      </section>

      {/* קריאה לפעולה */}
      <section className="mt-20 text-center">
        <p className="text-gray-600 text-lg mb-4">מחפש מוצר מסוים או זקוק לעזרה בבחירה?</p>
        <a
          href="/products"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition"
        >
          חפש עכשיו מוצרים באתר
        </a>
      </section>
    </main>
  );
}
