import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.scss"
function Header(props) {
    return (
        <div className='Header'>
           <NavLink to='/'>Home</NavLink>
            <NavLink to='/page1'>Page_1</NavLink>
            <NavLink to='/page2'>Page_2</NavLink>
            <NavLink to='/page3'>Page_3</NavLink>
        </div>
    );
}

export default Header;