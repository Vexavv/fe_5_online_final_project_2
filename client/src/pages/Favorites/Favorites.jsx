import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Favorites.module.scss";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FavoritesContext } from "./FavoritesContext";

import { useSelector, useDispatch } from "react-redux";
import { createWishlist } from "./wishlistSlice.js";

const Favorites = () => {
  const dispatch = useDispatch();

  const handleCreateWishlist = async (wishlist) => {
    try {
      await dispatch(createWishlist(wishlist));
      console.log("Wishlist created");
    } catch (error) {
      console.error("Error creating wishlist:", error);
    }
  };
  handleCreateWishlist({
    name: "My Wishlist",
    items: ["item1", "item2", "item3"],
  });

  return (
    <div>
      <h2>Products</h2>
      {/* {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
        </div>
      ))} */}
    </div>
  );
};

export default Favorites;

// function Favorites() {
//   const { favorites, removeFavorite } = useContext(FavoritesContext);
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className={styles.wrapper}>
//       <Link to='/products'>
//         <h2 className={styles.link}>Go to Products!</h2>
//       </Link>
//       <span>Your wishlist:</span>
//       <ul className={styles.favList}>
//         {favorites.length > 0 ? (
//           favorites.map((product) => (
//             <li className={styles.favItems} key={product._id}>
//               <img
//                 width='200'
//                 height='250'
//                 src={
//                   hovered === product._id && product.imageUrls.length > 1
//                     ? product.imageUrls[1]
//                     : product.imageUrls[0]
//                 }
//                 onMouseLeave={() => setHovered(null)}
//                 onMouseEnter={() => setHovered(product._id)}
//                 alt=''
//               />
//               <div className={styles.flexbox}>
//                 <h2>{product.name}</h2>
//                 <p>${product.currentPrice}</p>
//               </div>
//               <div className={styles.flexbox}>
//                 <div
//                   className={styles.btn}
//                   onClick={() => removeFavorite(product)}>
//                   {favorites ? <AiFillHeart /> : <AiOutlineHeart />}
//                 </div>
//                 <AiOutlineShoppingCart
//                   className={styles.btn}></AiOutlineShoppingCart>
//               </div>
//             </li>
//           ))
//         ) : (
//           <span className={styles.empty}>Your wishlist is still empty :(</span>
//         )}
//       </ul>
//     </div>
//   );
// }
// export default Favorites;
