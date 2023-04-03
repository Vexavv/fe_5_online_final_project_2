import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Favorites.module.scss";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncWishlist,
  removeProductFromWishlist,
} from "../../store/slices/wishlistSlice";
import Button from "../../components/Button/Button";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

function Favorites() {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const isLogged = useSelector((state) => state.isLogged.isLogged.success);
  const [hovered, setHovered] = useState(null);
  const deleteALLProduct = () => {
    dispatch(fetchAsyncWishlist({ method: "DELETE" })).then(() => {
      window.location.reload();
    });
  };
  const deleteOneProduct = (id) => {
    dispatch(removeProductFromWishlist(id)).then(() => {
      window.location.reload();
    });
  };
  let content;
  if (!wishlist || !wishlist.products) {
    content = (
      <span className={styles.FavoriteHeaderText}>
        Your wishlist is still empty :(
      </span>
    );
  } else {
    content =
      wishlist.products.length > 0 ? (
        <ul className={styles.FavoriteContentList}>
          {wishlist.products.map((product) => (
            <li className={styles.FavoriteContentListItem} key={product._id}>
              <Link to={`/products/${product.itemNo}`}>
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
              </Link>
              <h2 className={styles.FavoriteContentListItemText}>
                {product.name}
              </h2>
              <p className={styles.FavoriteContentListItemText}>
                ${product.currentPrice}
              </p>
              <div className={styles.FavoriteContentListItemButton}>
                <HiOutlineShoppingBag
                  className={styles.FavoriteContentListItemButtonIcon}
                />
                <FaHeart
                  className={styles.FavoriteContentListItemButtonIcon}
                  onClick={() => {
                    deleteOneProduct(product._id);
                  }}
                />
              </div>
            </li>
          ))}
          <div className={styles.FavoriteContentFooter}>
            <Button
              className={styles.FavoriteContentFooterBtn}
              text='delete wishlist'
              onClick={deleteALLProduct}
            />
          </div>
        </ul>
      ) : null;
  }
  return isLogged ? (
    <div className={styles.Favorite}>
      <div className={styles.FavoriteHeader}>
        <Link to='/products'>
          <Button className={styles.FavoriteHeaderBtn} text='go shopping' />
        </Link>
        <span className={styles.FavoriteHeaderText}>Your wishlist:</span>
      </div>
      <div className={styles.FavoriteContent}>{content}</div>
    </div>
  ) : (
    <Navigate to='/' replace />
  );
}
export default Favorites;
