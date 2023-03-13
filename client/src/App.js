import React, {useEffect} from "react";
import './App.css';
import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home"
import OneProduct from './pages/OneProduct/OneProduct'
import MyAccount from './pages/MyAccount/MyAccount';
import Collection from "./pages/Collection/Collection";
import Contacts from "./pages/Contacts/Contacts";
import Products from "./pages/Products/Products";
import Login from "./pages/LoginPage/LoginPage";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import {useDispatch, useSelector} from "react-redux";
import ProductModal from "./components/ProductModal/ProductModal";
import {fetchAsyncProducts, fetchAsyncBestSellers, fetchAsyncTrending} from './store/productsSlice'
import {
    fetchAsyncChairs,
    fetchAsyncLamps,
    fetchAsyncDecor,
    fetchAsyncFurniture,
    fetchAsyncSofas,
} from './store/productsFiltersSlice';
import Favorites from "./pages/Favorites/Favorites";



function App() {


    const dispatch = useDispatch()

    const activeModal = useSelector(state => state.products.activeModal)





//-------------------- запит на server фільтрів------------------------------



    // useEffect(() => {
    //     dispatch(fetchAsyncChairs())
    // }, [dispatch])
    //
    // useEffect(() => {
    //     dispatch(fetchAsyncLamps())
    // }, [dispatch])
    //
    // useEffect(() => {
    //     dispatch(fetchAsyncDecor())
    // }, [dispatch])
    //
    // useEffect(() => {
    //     dispatch(fetchAsyncFurniture())
    // }, [dispatch])
    //
    // useEffect(() => {
    //     dispatch(fetchAsyncSofas())
    // }, [dispatch])



            return (
                <div className="App">
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="/myaccount" element={<MyAccount/>}/>
                            <Route path="/products" element={<Products/>}/>
                            <Route path="/collections" element={<Collection/>}/>
                            <Route path="/contacts" element={<Contacts/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/product" element={<OneProduct/>}/>
                            {/* <Route path="/account" element={<Account/>}/> */}
                            <Route path='/favorites' element={<Favorites/>}/>
                            <Route path="*" element={<PageNotFound/>}/>
                        </Route>
                    </Routes>
                    <ProductModal active={activeModal}/>
                </div>
            );
}

export default App;
