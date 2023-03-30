import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Favorites.module.scss";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FavoritesContext } from "./FavoritesContext";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const [hovered, setHovered] = useState(null);
  const isLogged = useSelector((state) => state.isLogged.isLogged.success);

  return isLogged ? (
    <div className={styles.wrapper}>
      <Link to='/products'>
        <h2 className={styles.link}>Go to Products!</h2>
      </Link>
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
              <div className={styles.flexbox}>
                <h2>{product.name}</h2>
                <p>${product.currentPrice}</p>
              </div>
              <div className={styles.flexbox}>
                <div
                  className={styles.btn}
                  onClick={() => removeFavorite(product)}>
                  {favorites ? <AiFillHeart /> : <AiOutlineHeart />}
                </div>
                <AiOutlineShoppingCart
                  className={styles.btn}></AiOutlineShoppingCart>
              </div>
            </li>
          ))
        ) : (
          <span className={styles.empty}>Your wishlist is still empty :(</span>
        )}
      </ul>
    </div>
  ) : (
    <Navigate to='/' replace />
  );
}

export default Favorites;
