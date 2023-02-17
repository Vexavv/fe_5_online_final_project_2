import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../Header/Header";


function Layout(props) {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
}

export default Layout;