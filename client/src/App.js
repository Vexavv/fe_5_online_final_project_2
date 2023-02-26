import './App.css';
import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home"
// import Page1 from "./pages/Wihslist/Wishlist";
import Collections from "./pages/Collections/Collections";
import Contacts from "./pages/Contacts/Contacts";
import Product from "./pages/Product/Product";
import Login from "./pages/LoginPage/Login";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/collections" element={<Collections/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="*" element={<PageNotFound/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
