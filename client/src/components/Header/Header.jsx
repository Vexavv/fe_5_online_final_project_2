import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.scss"
function Header(props) {
    return (
        <div className='Header'>
           <NavLink to='/'>Home</NavLink>
            <NavLink to='/page1'>Page__1</NavLink>
            <NavLink to='/page2'>Page_2</NavLink>
            <NavLink to='/product'>Product</NavLink>
        </div>
    );
}

export default Header;