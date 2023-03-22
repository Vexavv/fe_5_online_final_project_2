import React, { useContext } from "react";
import styles from "./Favorites.module.scss";
// import { fetchAsyncBestSellers } from "../../store/topProductsSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FavoritesContext } from "./FavoritesContext";

function Favorites({ item }) {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);
  console.log(...favorites);

  const isFavorite = Array.from(favorites).forEach((el) => {
    el.includes((id) => item._id === el._id);
  });

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(item._id);
    } else {
      addFavorite(item);
    }
  };

  return (
    <div onClick={handleClick}>
      {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
}
export default Favorites;
