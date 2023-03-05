import React from 'react';
import { Link  } from "react-router-dom";

const Cart =(props) =>{
    return (
        <div>
            <div><Link to="/">home</Link></div>
            <div><Link to="/products">to poducts</Link></div>
            <h1>You cart is empty</h1>
                     
        </div>
    );
}

export default Cart;