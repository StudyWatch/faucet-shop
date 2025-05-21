export default function AboutPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 px-6 py-16 font-body"
    >
      {/* כותרת עמוד */}
      <section className="max-w-4xl mx-auto text-center mb-14 animate-fade-in">
        <h1 className="text-5xl font-display font-bold text-blue-900 mb-4">ℹ️ אודות ברזים פלוס+</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          שילוב מושלם של טכנולוגיה, איכות, נוחות ושירות אישי – חוויית קנייה מסוג אחר 💡
        </p>
      </section>

      {/* תוכן טקסטואלי */}
      <section className="max-w-4xl mx-auto space-y-6 leading-relaxed text-lg animate-fade-in">
        <p>
          ברזים פלוס+ היא חנות אינטרנטית ישראלית צעירה ודינמית המתמחה בברזים איכותיים, מקלחות חכמות, אביזרי אמבטיה ושירותים מעוצבים.
        </p>
        <p>
          כל מוצר שאנו מציעים נבדק בקפידה על ידי צוות מקצועי שמבין אינסטלציה, עיצוב פנים וצרכים אמיתיים של משפחות בישראל.
        </p>
        <p>
          אנחנו מאמינים ששירות טוב מתחיל בלהקשיב. לכן, כל לקוח מקבל יחס אישי, ייעוץ אמיתי, והתחייבות ל־100% שביעות רצון.
        </p>
        <p>
          אצלנו תמצאו שילוב נדיר: מחירים משתלמים, מוצרים עמידים לשנים קדימה, מראה יוקרתי – והכול בעברית, עם משלוח מהיר.
        </p>
      </section>

      {/* ערכי ליבה */}
      <section className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-800 mb-2">🧠 חדשנות</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            אנו בוחרים את המוצרים שלנו מתוך חזון להתאים את חדר הרחצה שלך לעולם חכם, נוח ונקי יותר. טכנולוגיה שלא תראו בחנויות רגילות.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 border-yellow-400">
          <h3 className="text-xl font-bold text-yellow-600 mb-2">❤️ אמינות</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            אחריות מלאה, תמיכה אמיתית, ומענה מהיר בעברית. אנחנו פה כדי לפתור – לא למכור ולברוח.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center border-t-4 border-green-500">
          <h3 className="text-xl font-bold text-green-600 mb-2">🏆 איכות</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            רק מותגים מוכרים, חומרים איכותיים, וציפויים שלא מתקלפים. הבית שלך שווה את זה.
          </p>
        </div>
      </section>

      {/* יתרונות */}
      <section className="mt-24 bg-white p-10 rounded-3xl shadow-xl max-w-6xl mx-auto animate-slide-up">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          ✅ למה לקוחות אוהבים אותנו?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-700 text-base">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">🚚</span>
            משלוח מהיר עד הבית תוך 48 שעות ברוב האזורים בארץ
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">🔒</span>
            מערכת תשלום מאובטחת בסטנדרט הגבוה ביותר
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">📞</span>
            שירות לקוחות אנושי, מקצועי וזמין גם בוואטסאפ
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">✨</span>
            קולקציות בלעדיות שלא תמצאו באף מקום אחר
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">🔧</span>
            הדרכות התקנה וסרטונים לליווי עצמי בקלות
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 text-2xl">🌱</span>
            פתרונות אקולוגיים לחיסכון במים ואנרגיה
          </li>
        </ul>
      </section>

      {/* גלריה/תמונה */}
      <section className="mt-20 max-w-5xl mx-auto text-center animate-fade-in">
        <img
          src="/images/about-us-bathroom.jpg"
          alt="עיצוב מודרני של חדר רחצה"
          className="mx-auto rounded-xl shadow-xl max-h-[400px] object-cover"
        />
        <p className="mt-4 text-gray-600 text-sm">צילום להמחשה בלבד. המוצרים האמיתיים – יפים יותר 😊</p>
      </section>

      {/* קריאה לפעולה */}
      <section className="mt-24 text-center animate-fade-in">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">רוצים לשדרג את חדר הרחצה שלכם?</h3>
        <p className="text-gray-600 mb-6">
          בואו לראות מה חדש, או דברו איתנו לייעוץ והתאמה אישית.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md"
          >
            לעיון במוצרים
          </a>
          <a
            href="/contact"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold transition-all shadow"
          >
            דברו איתנו
          </a>
        </div>
      </section>
    </main>
  );
}