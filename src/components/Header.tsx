
import { ShoppingCart, Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartModal from "./CartModal";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { cart } = useCart();
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // סגור תפריט במעבר דף
  }, [location.pathname]);

  const navLinks = [
    { label: "בית", to: "/" },
    { label: "מוצרים", to: "/products" },
    { label: "אודות", to: "/about" },
    { label: "צור קשר", to: "/contact" },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 border-b backdrop-blur-md ${
        scrolled ? "bg-white/95 shadow-md" : "bg-white/75 shadow"
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-5 flex items-center justify-between gap-6">
        {/* לוגו ותפריט מובייל */}
        <div className="flex items-center gap-5">
          <button
            className="lg:hidden p-2 rounded-md border border-blue-200 hover:bg-blue-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="פתיחת תפריט"
          >
            <Menu className="w-6 h-6 text-blue-800" />
          </button>
          <Link
            to="/"
            className="text-2xl font-extrabold text-blue-900 tracking-tight hover:text-blue-700 flex items-center gap-2"
          >
            <img src="/logo.svg" alt="ברזים פלוס+ לוגו" className="w-7 h-7" />
            ברזים פלוס+
          </Link>
        </div>

        {/* ניווט דסקטופ */}
        <nav className="hidden lg:flex gap-6 text-[15px]">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-xl transition-all font-semibold border border-blue-200 hover:bg-blue-600 hover:text-white ${
                location.pathname === link.to
                  ? "bg-blue-600 text-white"
                  : "text-blue-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* כפתור עגלה */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex items-center gap-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2 rounded-full shadow-md transition-all"
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">עגלת קניות</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -left-2 bg-white text-blue-700 font-bold text-xs px-2 py-0.5 rounded-full shadow">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* ניווט מובייל */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-blue-100 px-6 py-5 animate-fade-in">
          <nav className="grid grid-cols-2 gap-4 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2 text-center rounded-xl font-semibold border transition-all ${
                  location.pathname === link.to
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* פס דקורטיבי */}
      <div className="w-full h-[2px] bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 animate-pulse" />

      {/* מודל עגלה */}
      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </header>
  );
}
