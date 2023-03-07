import React from "react";
import { useSelector } from "react-redux";
import styles from "./Bestsellers.module.scss";
import BestsellerItem from "../BestsellerItem/BestsellerItem";

function Bestsellers(props) {
  const products = useSelector((state) => state.products.products);
  const filteredItems = products.filter((el) => el.bestSeller);

  return (
    <div className={styles.container}>
      <h2>Best Sellers Products</h2>
      <p>Top sale in this week</p>
      <div className={styles.flexWrapper}>
        {filteredItems.map((item) => (
          <BestsellerItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
