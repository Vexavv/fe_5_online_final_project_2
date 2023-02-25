import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Wishlist.module.scss'

function Wishlist(props) {
    return (
        <>
        <div><Link to="/">home</Link></div>
        <div className={styles.WishlistWrapper}>
            {/* !isLogin */}
            <h1>log in to add your favorite items to your wish list</h1>
            {/* isLogin */}
            <h1>You wishlist is empty</h1>            
        </div>
        </>
    );
}

export default Wishlist;