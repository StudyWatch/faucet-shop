
import { ShoppingCart, Info } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNotification } from "../context/NotificationContext";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  isOnSale?: boolean;
}
interface Props {
  product: Product;
  onAddToCart?: () => void;
}


export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const { showMessage } = useNotification();

  return (
    <div
      className="relative bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden hover:-translate-y-1 group"
    >
      {/* תגית מבצע */}
      {product.isOnSale && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white text-xs px-3 py-1 rounded-full shadow-md z-10">
          מבצע 🔥
        </div>
      )}

      {/* תמונה */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover transition duration-300 group-hover:opacity-90"
        loading="lazy"
      />

      {/* תוכן */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </div>

        {/* תחתון */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl text-yellow-600 font-extrabold whitespace-nowrap">
            ₪{product.price}
          </span>

          <button
            onClick={() => {
              addToCart(product);
              showMessage(`✔ "${product.name}" נוסף לעגלה!`);
            }}
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow flex items-center gap-2 transition-all"
          >
            <ShoppingCart size={16} />
            הוסף
          </button>
        </div>

        {/* כפתור נוסף לפרטים */}
        <button
          className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm flex items-center justify-center gap-2 transition"
        >
          <Info size={16} />
          לפרטים נוספים
        </button>
      </div>
    </div>
  );
}
