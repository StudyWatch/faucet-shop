
import {
  Store,
  MoveLeft,
  ShowerHead,
  Bath,
  Percent,
  Filter,
} from "lucide-react";
import products from "../data/products";

interface Props {
  onSelectCategory: (category: string | null) => void;
  onPriceRangeChange?: (min: number, max: number) => void;
  onOnlyDiscountChange?: (enabled: boolean) => void;
}

const categories = [
  { label: "כל המוצרים", value: null, icon: Store },
  { label: "ברזים", value: "faucets", icon: MoveLeft },
  { label: "מקלחות", value: "showers", icon: ShowerHead },
  { label: "שירותים", value: "toilets", icon: Bath },
];

export default function Sidebar({
  onSelectCategory,
  onPriceRangeChange,
  onOnlyDiscountChange,
}: Props) {
  const productPrices = products.map((p) => p.price);
  const absoluteMax = Math.max(...productPrices, 1000);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(absoluteMax);
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);

  const handlePriceChange = (newMin: number, newMax: number) => {
    setMinPrice(newMin);
    setMaxPrice(newMax);
    if (onPriceRangeChange) onPriceRangeChange(newMin, newMax);
  };

  const handleDiscountToggle = () => {
    const newState = !onlyDiscounted;
    setOnlyDiscounted(newState);
    if (onOnlyDiscountChange) onOnlyDiscountChange(newState);
  };

  return (
    <aside className="bg-white shadow-xl border border-gray-200 rounded-3xl p-6 space-y-6 animate-slide-in-right">
      <h2 className="text-2xl font-display font-bold text-blue-800 text-center mb-4">
        <Filter className="inline w-6 h-6 text-blue-600 mb-1" /> סינון מוצרים
      </h2>

      {/* קטגוריות */}
      <ul className="space-y-3">
        {categories.map(({ label, value, icon: Icon }) => (
          <li key={label} className="group">
            <button
              onClick={() => onSelectCategory(value)}
              className="flex items-center justify-between gap-4 w-full px-5 py-3 rounded-xl bg-white hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 text-right">
                <Icon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-700 font-medium group-hover:text-blue-700">
                  {label}
                </span>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-blue-400">←</span>
            </button>
          </li>
        ))}
      </ul>

      {/* טווח מחירים */}
      <div className="pt-6 border-t border-gray-100">
        <h3 className="text-md font-semibold text-blue-800 mb-3">₪ טווח מחירים</h3>

        <div className="text-sm text-gray-600 mb-2 flex justify-between">
          <span>מינימום: ₪{minPrice}</span>
          <span>מקסימום: ₪{maxPrice}</span>
        </div>

        <div className="relative h-6 mb-5">
          <div className="absolute top-1/2 -translate-y-1/2 h-2 w-full bg-blue-100 rounded-full" />

          {/* כל אחת מהידיות עם pointer-events עצמאיות */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <input
              type="range"
              min={0}
              max={maxPrice - 5}
              value={minPrice}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val < maxPrice - 5) handlePriceChange(val, maxPrice);
              }}
              className="w-full appearance-none bg-transparent z-20 pointer-events-auto"
              style={{ WebkitAppearance: 'none' }}
            />
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <input
              type="range"
              min={minPrice + 5}
              max={absoluteMax}
              value={maxPrice}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val > minPrice + 5) handlePriceChange(minPrice, val);
              }}
              className="w-full appearance-none bg-transparent z-30 pointer-events-auto"
              style={{ WebkitAppearance: 'none' }}
            />
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="number"
            min={0}
            max={maxPrice - 1}
            value={minPrice}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val < maxPrice) handlePriceChange(val, maxPrice);
            }}
            className="w-1/2 border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            min={minPrice + 1}
            max={absoluteMax}
            value={maxPrice}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val > minPrice) handlePriceChange(minPrice, val);
            }}
            className="w-1/2 border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      {/* רק בהנחה */}
      <div className="pt-4 border-t border-gray-100">
        <label className="flex items-center gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={onlyDiscounted}
            onChange={handleDiscountToggle}
            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 rounded"
          />
          <span className="text-sm text-blue-800 font-medium flex items-center gap-1">
            <Percent className="w-4 h-4" /> הצג רק מוצרים בהנחה
          </span>
        </label>
      </div>

      {/* טיפ מסכם */}
      <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-xl text-center shadow-inner">
        <p className="text-sm text-blue-800 font-semibold leading-relaxed">
          סנן לפי קטגוריה, מחיר והנחות כדי למצוא בדיוק את מה שאתה צריך 🛁
        </p>
      </div>
    </aside>
  );
}
