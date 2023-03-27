import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Favorites.module.scss";
import {
    AiOutlineHeart,
    AiFillHeart,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import {Navigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {fetchAsyncDeleteWishlist, fetchAsyncGetWishlist, fetchAsyncWishlist} from "../../store/slices/wishlistSlice";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";


function Favorites() {
    const dispatch = useDispatch();
    const {wishlist} = useSelector(state => state.wishlist);
    const [hovered, setHovered] = useState(null);
    const isLogged = useSelector(state => state.isLogged.isLogged.success);

    useEffect(() => {
        dispatch(fetchAsyncWishlist({ method: 'GET' }));
    }, [dispatch]);

    let content;
    if (!wishlist || !wishlist.products) {
        content = <span className={styles.empty}>Your wishlist is still empty :(</span>;
    } else {
        content = wishlist.products.length > 0 ? (
            wishlist.products.map((product) => (
                <li className={styles.favItems} key={product._id}>
                    <img
                        width='200'
                        height='250'
                        src={
                            hovered === product._id && product.imageUrls.length > 1
                                ? product.imageUrls[1]
                                : product.imageUrls[0]
                        }
                        onMouseLeave={() => setHovered(null)}
                        onMouseEnter={() => setHovered(product._id)}
                        alt=''
                    />
                    <div className={styles.flexbox}>
                        <h2>{product.name}</h2>
                        <p>${product.currentPrice}</p>
                    </div>
                    <div className={styles.flexbox}>
                        <div className={styles.btn}>
                            {wishlist.products ? <AiFillHeart/> : <AiOutlineHeart/>}
                        </div>
                        <AiOutlineShoppingCart className={styles.btn}/>
                    </div>
                </li>
            ))
        ) : null
    }

    return isLogged ? (
        <div className={styles.wrapper}>
            <Link to='/products'>
                <h2 className={styles.link}>Go to Products!</h2>
            </Link>
            <span>Your wishlist:</span>
            <button onClick={()=>{dispatch(fetchAsyncWishlist({ method: 'DELETE' }))}}>delete oll wishlist</button>
            <ul className={styles.favList}>

                {content}
            </ul>
        </div>
    ) : (<Navigate to="/" replace/>);
}

export default Favorites;
