import './App.css';
import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home"
import Page_1 from "./pages/Page_1/Page_1";
import Page_2 from "./pages/Page_2/Page_2";
import Page_3 from "./pages/Page_3/Page_3";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="page1" element={<Page_1/>}/>
                <Route path="page2" element={<Page_2/>}/>
                <Route path="page3" element={<Page_3/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
