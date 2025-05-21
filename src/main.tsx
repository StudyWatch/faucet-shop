import React from 'react'; // ✅ חייב להיות פה
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './context/NotificationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
