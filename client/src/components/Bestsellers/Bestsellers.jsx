import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import styles from "./Bestsellers.module.scss";
import BestsellerItem from "../BestsellerItem/BestsellerItem";
import { getElement, openModal } from "../../store/productsSlice";
import Loader from "../Loader/Loader";


function Bestsellers(props) {
  const dispatch = useDispatch();

  function handleProductClick(product) {
    dispatch(getElement(product));
    dispatch(openModal());
  }
  const [bestSellers, setBestSellers] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:3001/api/products/filter?bestSeller=true`)
            .then(response => response.json())
            .then(json => setBestSellers(json))
    },[])

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
