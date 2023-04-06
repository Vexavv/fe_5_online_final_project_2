import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TfiSearch } from "react-icons/tfi";
import styles from "./BestsellerItem.module.scss";
import { Link } from "react-router-dom";
import { getElement } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../store/slices/cardSlice";
import classNames from "classnames";

function BestsellerItem({ item, onClick }) {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(null);
  const products = useSelector((state) => state.card.products);
 
  const isInBasket = products.find(
    (productItem) => productItem._id === item?._id
  );
  const addProductBascet = () => {
    if (isInBasket) {
      console.log("remove");
    } else {
      dispatch(
        addCard({
          ...item,
          amount: 1,
          totalPrice: item.currentPrice,
        })
      );
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.btnWrapper}>
        <HiOutlineShoppingBag
          className={styles.btnWrapperIcon}
          onClick={addProductBascet}
        />
        <TfiSearch className={styles.btnWrapperIcon} onClick={onClick} />
      </div>
      <Link to={`/products/${item.itemNo}`}>
        <img
          onClick={() => {
            dispatch(getElement(item));
          }}
          src={
            hovered === item._id && item.imageUrls.length > 1
              ? item.imageUrls[1]
              : item.imageUrls[0]
          }
          onMouseLeave={() => setHovered(null)}
          onMouseEnter={() => setHovered(item._id)}
          alt={item.name}
        /></Link>
        {item.sale && <Link to='/sale'>
            <div className={styles.btnWrapperSale}>
                <span className={styles.btnWrapperSaleText}>sale</span>
            </div>
        </Link>}
        <div className={styles.btnWrapperTitle}>
            <h3 className={styles.btnWrapperTitleName}>{item.name}</h3>
            <div className={ styles.btnWrapperTitleAllPrice}>
              <span className={item.sale ? classNames(styles.btnWrapperTitleAllPricePrice, styles.btnWrapperTitleAllPriceSalePrice) : styles.btnWrapperTitleAllPricePrice}>
              ${item.previousPrice}.00
            </span>
                {item.sale && <span className={styles.btnWrapperTitleAllPricePrice2}>
              ${item.currentPrice}.00
            </span>}
            </div>
        </div>

    </div>
  );
}

export default BestsellerItem;
