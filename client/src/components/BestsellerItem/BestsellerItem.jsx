import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TfiSearch } from "react-icons/tfi";
import styles from "./BestsellerItem.module.scss";



function BestsellerItem({ item, onClick }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnWrapper}>
        <HiOutlineShoppingBag className={styles.btnWrapperIcon} />
        <TfiSearch className={styles.btnWrapperIcon} onClick={onClick} />
      </div>
      <a href='/page'>
        <img
          src={
            hovered === item._id && item.imageUrls.length > 1
              ? item.imageUrls[1]
              : item.imageUrls[0]
          }
          onMouseLeave={() => setHovered(null)}
          onMouseEnter={() => setHovered(item._id)}
          alt=''
        />
        <h3>{item.name}</h3>
        <p>
          <s>${item.previousPrice}</s> ${item.currentPrice}
        </p>
      </a>
    </div>
  );
}

export default BestsellerItem;
