import './App.css';
import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home"


// import Page1 from "./pages/Wihslist/Wishlist";
import MyAccount from './pages/MyAccount/MyAccount';
import Collection from "./pages/Collection/Collection";
import Contacts from "./pages/Contacts/Contacts";
import Products from "./pages/Products/Products";
import Login from "./pages/LoginPage/Login";
import Cart from "./pages/Cart/Cart";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">      
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/myaccount" element={<MyAccount/>}/>
                <Route path="/product" element={<Products/>}/>
                <Route path="/collections" element={<Collection/>}/>
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
