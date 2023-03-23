import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import OneProduct from './pages/OneProduct/OneProduct';
import MyAccount from './pages/MyAccount/MyAccount';
import Collection from './pages/Collection/Collection';
import Contacts from './pages/Contacts/Contacts';
import Products from './pages/Products/Products';
import Login from './pages/LoginPage/LoginPage';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout'
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ProductModal from './components/ProductModal/ProductModal';
import Favorites from './pages/Favorites/Favorites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<OneProduct />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/account" element={<Account/>}/> */}
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ProductModal />
    </div>
  );
}

export default App;