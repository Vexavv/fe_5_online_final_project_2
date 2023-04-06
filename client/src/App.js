import React, {useEffect} from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import OneProduct from './pages/OneProduct/OneProduct';
import MyAccount from './pages/MyAccount/MyAccount';
import Contacts from './pages/Contacts/Contacts';
import Products from './pages/Products/Products';
import Login from './pages/LoginPage/LoginPage';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout'
import Successful from './pages/Checkout/Shipping/Successful'
import PageNotFound from './pages/PageNotFound/PageNotFound';
import ProductModal from './components/ProductModal/ProductModal';
import Favorites from './pages/Favorites/Favorites';
import Sale from './pages/Sale/Sale'
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncWishlist} from "./store/slices/wishlistSlice";

function App(props) {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.isLogged.isLogged.success);
  const location = useLocation();

  useEffect(() => {
   if(isLogged)
    dispatch(fetchAsyncWishlist({ method: 'GET' }))
  }, [dispatch,isLogged ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<OneProduct />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/successful" element={<Successful />} />
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