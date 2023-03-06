import React, { useState, useEffect, useMemo } from "react";
import styles from "./Bestsellers.module.scss";
import Item from "../Item/Item";

function Bestsellers(props) {
  const [state, setState] = useState([]);

  const filteredItems = useMemo(
    () => state.filter((el) => el.bestSeller),
    [state.length]
  );

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((list) => {
        setState(list);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2>Best Sellers Products</h2>
      <p>Top sale in this week</p>
      <div className={styles.flexWrapper}>
        {filteredItems.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
