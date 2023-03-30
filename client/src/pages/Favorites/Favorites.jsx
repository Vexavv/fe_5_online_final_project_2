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
import {fetchAsyncWishlist, removeProductFromWishlist} from "../../store/slices/wishlistSlice";



function Favorites() {
    const dispatch = useDispatch();
    const {wishlist} = useSelector(state => state.wishlist);
    console.log(wishlist)
    const [hovered, setHovered] = useState(null);
    const isLogged = useSelector(state => state.isLogged.isLogged.success);

    useEffect(() => {
        dispatch(fetchAsyncWishlist({ method: 'GET' }));
    }, [dispatch]);
const deleteALLProduct = ()=> {
    dispatch(fetchAsyncWishlist({method: 'DELETE'})).then(() => {
        window.location.reload();
    });
}
    const deleteOneProduct = (id)=>{
        dispatch(removeProductFromWishlist(id)).then(() => {
            window.location.reload();
    });
}
    let content;
    if (!wishlist || !wishlist.products) {
        content = <span className={styles.empty}>Your wishlist is still empty :(</span>;
    } else {
        content = wishlist.products.length > 0 ? (
          <ul className={styles.favList}>
              <button  onClick={deleteALLProduct}>delete all wishlist</button>
              {wishlist.products.map((product) => (
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
                        <div className={styles.btn} onClick={()=>{deleteOneProduct(product._id)}} >
                            {wishlist.products ? <AiFillHeart/> : <AiOutlineHeart/>}
                        </div>
                        <AiOutlineShoppingCart className={styles.btn}/>
                    </div>
                </li>
            ))}
            </ul>) : null
    }

    return isLogged ? (
        <div className={styles.wrapper}>
            <Link to='/products'>
                <h2 className={styles.link}>Go to Products!</h2>
            </Link>
            <span>Your wishlist:</span>
            <div >
                {content}
            </div>
        </div>
    ) : (<Navigate to="/" replace/>);
}

export default Favorites;
