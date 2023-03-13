import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BestsellerItem from "../../components/BestsellerItem/BestsellerItem";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
import ProductCard from "../../components/ProductsComponents/ProductCard/ProductCard";
import ProductsContent from "../../components/ProductsComponents/ProductsContent/ProductsContent";
import styles from "./Favorites.module.scss";
import { fetchAsyncBestSellers } from "../../store/topProductsSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Loader from "../../components/Loader/Loader";

function Favorites({ item }) {
  const [isChecked, setIsChecked] = useState(false);
  const [favorites, setFav] = useState(
    JSON.parse(localStorage.getItem("favoriteList")) || []
  );

  const addToFav = (item) => {
    let resultArr;
    if (favorites.includes(item.id)) {
      resultArr = favorites.filter((el) => el !== item.id);
    } else {
      resultArr = [...favorites, item.id];
    }
    setFav(resultArr);
    localStorage.setItem("favoriteList", JSON.stringify(resultArr));
  };

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={handleClick}>
      {isChecked ? (
        <AiFillHeart onClick={addToFav} />
      ) : (
        <AiOutlineHeart onClick={addToFav} />
      )}
    </div>
  );
}
export default Favorites;
