import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import ProductStore from './store/producStore';
import BasketStore from './store/basketStore';
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user:new UserStore(),
    product: new ProductStore(),
    basket: new BasketStore()
  }}>
<React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>
  
);


reportWebVitals();
