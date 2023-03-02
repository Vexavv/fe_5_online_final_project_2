import './App.css';
import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home"
// import Page_1 from "./pages/Page_1/Page_1";
// import Page_2 from "./pages/Page_2/Page_2";
// import Page_3 from "./pages/Page_3/Page_3";



// import Page1 from "./pages/Wihslist/Wishlist";
import MyAccount from './pages/MyAccount/MyAccount';
import Collections from "./pages/Collections/Collections";
import Contacts from "./pages/Contacts/Contacts";
import Products from "./pages/Products/Products";
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
                {/* <Route path="page1" element={<Page_1/>}/> */}
                {/* <Route path="page2" element={<Page_2/>}/> */}
                {/* <Route path="page3" element={<Page_3/>}/> */}
                <Route path="/myaccount" element={<MyAccount/>}/>
                <Route path="/product" element={<Products/>}/>
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
