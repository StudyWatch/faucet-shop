import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  return (
    <>
      {/* כותרת עליונה */}
      <Header />

      {/* מערכת ניתוב בין דפים לפי כתובת URL */}
      <Routes>
        {/* עמוד הבית */}
        <Route path="/" element={<Home />} />

        {/* עמוד המוצרים */}
        <Route path="/products" element={<ProductsPage />} />

        {/* עמוד אודות */}
        <Route path="/about" element={<AboutPage />} />

        {/* עמוד צור קשר */}
        <Route path="/contact" element={<ContactPage />} />

        {/* עמוד תשלום (צ'קאאוט) */}
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      {/* עגלת קניות קבועה */}
      <Cart />

      {/* תחתית האתר */}
      <Footer />
    </>
  );
}
