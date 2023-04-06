import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import styles from "./Bestsellers.module.scss";
import BestsellerItem from "../BestsellerItem/BestsellerItem";
import { getElement, toggleModal} from "../../store/slices/productsSlice";
import Loader from "../Loader/Loader";
import {BASE_URL} from "../../constants/api";
import axios from 'axios'

function Bestsellers(props) {
  const dispatch = useDispatch();

  function handleProductClick(product) {
    dispatch(getElement(product));
    dispatch(toggleModal(true));
  }
  const [bestSellers, setBestSellers] = useState(null)
    useEffect(() => {
        axios.get(`${BASE_URL}/products/filter?bestSeller=trueBest`)
            .then(response => setBestSellers(response.data))
            .catch(error => console.error(error));
    }, []);


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
