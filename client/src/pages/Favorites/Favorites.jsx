import React, {useContext, useState} from "react";
import styles from "./Favorites.module.scss";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import {FavoritesContext} from "./FavoritesContext";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

function Favorites() {
    const {favorites, removeFavorite} = useContext(FavoritesContext);
    const [hovered, setHovered] = useState(null);
    // if logout, we go  home
    const isLogged = useSelector(state => state.isLogged.isLogged.success)
    return isLogged ? (
        <div className={styles.wrapper}>
            <span>Your wishlist:</span>
            <ul className={styles.favList}>
                {favorites.length > 0 ? (
                    favorites.map((product) => (
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
                            <h2>{product.name}</h2>
                            <p>${product.currentPrice}</p>
                            <div
                                className={styles.btn}
                                onClick={() => removeFavorite(product)}>
                                {favorites ? <AiFillHeart/> : <AiOutlineHeart/>}
                            </div>
                        </li>
                    ))
                ) : (
                    <span>Your wishlist is still empty :(</span>
                )}
            </ul>
        </div>
    ) : (
        <Navigate to="/" replace/>
    );
}

export default Favorites;
