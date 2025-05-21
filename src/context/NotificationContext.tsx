import  { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

/**
 * טיפוס שמייצג את מבנה ההקשר (Context) – מה פונקציות והערכים שהוא מספק
 */
interface NotificationContextType {
  message: string;
  showMessage: (msg: string) => void;
}

// יצירת context גלובלי. הוא מאתחל כ־undefined עד שמוסיפים Provider
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

/**
 * וו-קוסטום שמאפשר לגשת לערכי ההקשר מתוך כל קומפוננטה
 */
export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within NotificationProvider");
  }
  return context;
}

/**
 * קומפוננטת Provider – עוטפת את האפליקציה ומספקת את פונקציית showMessage
 */
export function NotificationProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000); // מעלים את ההודעה לאחר 3 שניות
  };

  return (
    <NotificationContext.Provider value={{ message, showMessage }}>
      {children}

      {/* הודעה מוצגת אם יש טקסט */}
      {message && (
        <div className="fixed bottom-6 left-6 bg-green-600 text-white py-2 px-4 rounded shadow-lg text-sm animate-fade-in z-50">
          {message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}
