import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Bestsellers.module.scss";
import BestsellerItem from "../BestsellerItem/BestsellerItem";
import {getElement, openModal} from "../../store/productsSlice";

function Bestsellers(props) {
    const dispatch = useDispatch()
    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(openModal())
    }
    const bestSellers = useSelector(state => state.products.bestSellers)


    return (
    <div className={styles.container}>
      <h2>Best Sellers Products</h2>
      <p>Top sale in this week</p>
      <div className={styles.flexWrapper}>
        {bestSellers.products.map((item) => (
          <BestsellerItem key={item._id} item={item}  onClick={()=>handleProductClick(item._id)} />
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
