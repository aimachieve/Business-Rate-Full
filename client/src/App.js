// routes
import React from 'react'
import store from './store';
import { Provider } from 'react-redux';
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
// import Settings from './components/settings';
import ScrollToTop from './components/ScrollToTop';
import NotistackProvider from './components/NotistackProvider';
import ThemePrimaryColor from './components/ThemePrimaryColor';
import { CartProvider } from './contexts/CartContext';
import './App.css';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <ThemePrimaryColor>
          <NotistackProvider>
            <CartProvider>
              {/* <Settings /> */}
              <ScrollToTop />
              <Router />
            </CartProvider>
          </NotistackProvider>
        </ThemePrimaryColor>
      </ThemeConfig >
    </Provider>
  );
}
