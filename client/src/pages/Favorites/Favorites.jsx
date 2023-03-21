import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BestsellerItem from "../../components/BestsellerItem/BestsellerItem";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
import ProductCard from "../../components/ProductsComponents/ProductCard/ProductCard";
import ProductsContent from "../../components/ProductsComponents/ProductsContent/ProductsContent";
import styles from "./Favorites.module.scss";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Loader from "../../components/Loader/Loader";

class Persistor {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  get() {
    const persistedData = localStorage.getItem(this.storageKey);
    return persistedData ? JSON.parse(persistedData) : null;
  }

  set(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  clear() {
    localStorage.removeItem(this.storageKey);
  }
}

function Favorites({ item }) {
  const [isChecked, setIsChecked] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const persistor = new Persistor();

  useEffect(() => {
    const persistedFavorites = persistor.get("favoriteList");
    if (persistedFavorites) {
      setFavorites(persistedFavorites);
    }
  }, []);

  const addToFav = (item) => {
    let updatedFavorites;
    if (favorites.includes(item.id)) {
      updatedFavorites = favorites.filter((id) => id !== item.id);
    } else {
      updatedFavorites = [...favorites, item.id];
    }
    setFavorites(updatedFavorites);
    persistor.set("favoriteList", updatedFavorites);
  };

  // const [favorites, setFav] = useState(
  //   JSON.parse(localStorage.getItem("favoriteList")) || []
  // );
  // const addToFav = (item) => {
  //   let resultArr;
  //   if (favorites.includes(item.id)) {
  //     resultArr = favorites.filter((el) => el !== item.id);
  //   } else {
  //     resultArr = [...favorites, item.id];
  //   }
  //   setFav(resultArr);
  //   localStorage.setItem("favoriteList", JSON.stringify(resultArr));
  // };

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
