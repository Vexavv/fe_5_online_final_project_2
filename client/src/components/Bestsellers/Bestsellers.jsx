import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Bestsellers.module.scss";
import BestsellerItem from "../BestsellerItem/BestsellerItem";
import { getElement, openModal } from "../../store/productsSlice";
import Loader from "../Loader/Loader";
import { fetchAsyncBestSellers } from "../../store/topProductsSlice";

function Bestsellers(props) {
  const dispatch = useDispatch();
  const bestSellers = useSelector((state) => state.topProducts.bestSellers);
  function handleProductClick(product) {
    dispatch(getElement(product));
    dispatch(openModal());
  }
  useEffect(() => {
    dispatch(fetchAsyncBestSellers());
  }, [dispatch]);

  if (!bestSellers) {
    return <Loader />;
  }
  return (
    <div className={styles.container}>
      <h2>Best Sellers Products</h2>
      <p>Top sale in this week</p>
      <div className={styles.flexWrapper}>
        {bestSellers.products.map((item) => (
          <BestsellerItem
            key={item._id}
            item={item}
            onClick={() => handleProductClick(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
