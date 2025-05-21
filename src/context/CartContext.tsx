import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// טיפוס שמייצג מוצר בודד
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

// כל פריט בעגלה כולל כמות בנוסף לפרטי המוצר
type CartItem = Product & { quantity: number };

// טיפוס שמגדיר את ערכי ההקשר שלנו
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotal: () => number;
}

// יצירת context ראשוני, כרגע undefined עד שנעטוף אותו ב-Provider
const CartContext = createContext<CartContextType | undefined>(undefined);

// פונקציה שמאפשרת לקומפוננטות אחרות לגשת לעגלה
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

// ספק גלובלי של העגלה לכל האפליקציה
export function CartProvider({ children }: { children: ReactNode }) {
  // אתחול עגלה מתוך localStorage אם יש, אחרת התחלה ריקה
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // שמירה ל-localStorage בכל שינוי של העגלה
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // הוספת מוצר לעגלה
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // הסרה לפי מזהה
  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // ניקוי מוחלט של העגלה
  const clearCart = () => {
    setCart([]);
  };

  // סכימה כוללת של כל הפריטים
  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // החזרת ההקשר לכל שאר האפליקציה
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
