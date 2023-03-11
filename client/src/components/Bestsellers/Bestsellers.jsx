import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Bestsellers.module.scss";
import BestsellerItem from "../BestsellerItem/BestsellerItem";
import {getElement, openModal} from "../../store/productsSlice";

function Bestsellers(props) {
    const dispatch = useDispatch()
  const products = useSelector((state) => state.products.products);
  const filteredItems = products.filter((el) => el.bestSeller);

// const [filteredItems, setFilteredItems] = useState({})
//     useEffect(() => {
//         fetch('http://localhost:3001/api/products/filter?trendingProduct=true')
//             .then(res => res.json())
//             .then(list => {
//                 setFilteredItems(list)
//             })
//     }, [])
//     console.log(filteredItems)
    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(openModal())
    }


    return (
    <div className={styles.container}>
      <h2>Best Sellers Products</h2>
      <p>Top sale in this week</p>
      <div className={styles.flexWrapper}>
        {filteredItems.map((item) => (
          <BestsellerItem key={item._id} item={item}  onClick={()=>handleProductClick(item._id)} />
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
