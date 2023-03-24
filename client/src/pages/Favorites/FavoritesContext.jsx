import React, { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (product) => {
    setFavorites((prevState) => [...prevState, product]);
  };

  const removeFavorite = (product) => {
    setFavorites(favorites.filter((id) => id !== product));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
