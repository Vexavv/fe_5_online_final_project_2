import React from "react";


import './App.css';
import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home"
import OneProduct from './pages/OneProduct/OneProduct'
import MyAccount from './pages/MyAccount/MyAccount';
import Collection from "./pages/Collection/Collection";
import Contacts from "./pages/Contacts/Contacts";
import Products from "./pages/Products/Products";
import Login from "./pages/LoginPage/Login";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound/PageNotFound";



import {closeModal} from "./store/productsSlice";
import {useDispatch, useSelector} from "react-redux";
import ProductModal from "./components/ProductsComponents/ProductModal/ProductModal";

function App() {

    //------------ Модальне вікно продукту----------------------------
    const dispatch = useDispatch();
    const activeModal = useSelector(state => state.products.activeModal)
    const handlerCloseModal = ()=>{
        dispatch(closeModal())
    }

//--------------------------------------------------------------------

  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/myaccount" element={<MyAccount/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/collections" element={<Collection/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/product" element={<OneProduct/>} />
                <Route path="*" element={<PageNotFound/>}/>
            </Route>
        </Routes>
        <ProductModal active={activeModal} closeModal={handlerCloseModal}/>
    </div>
  );
}

export default App;
