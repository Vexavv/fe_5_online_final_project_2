import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";
import Footer from '../Footer/Footer.jsx';

function Layout(props) {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;