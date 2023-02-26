import './App.css';
import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home"
import Page_1 from "./pages/Page_1/Page_1";
import Page_2 from "./pages/Page_2/Page_2";
import Page_3 from "./pages/Page_3/Page_3";
import Footer from "./pages/Footer/Footer";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Product from "./pages/Product/Product";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="page1" element={<Page_1/>}/>
                <Route path="page2" element={<Page_2/>}/>
                <Route path="page3" element={<Page_3/>}/>
                <Route path="footer" element={<Footer/>}/>
                <Route path="page1" element={<Page1/>}/>
                <Route path="page2" element={<Page2/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
