import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.scss"
function Header(props) {
    return (
        <div className='Header'>
           <NavLink to='/'>Home</NavLink>
            <NavLink to='/page1'>Page__1</NavLink>
            <NavLink to='/page2'>Page_2</NavLink>
<<<<<<< HEAD
            <NavLink to='/page3'>Page_3</NavLink>
            <NavLink to='/footer'>Footer</NavLink>
=======
            <NavLink to='/product'>Product</NavLink>
>>>>>>> origin/dev
        </div>
    );
}

export default Header;