import React from "react";
import styles from "./BasketFooterPrice.module.scss";

function BasketFooterPrice() {
  return (
    <div className={styles.BasketFooter}>
      <button className={styles.BasketFooterOrder}>add order note</button>
      <div className={styles.BasketFooterSection}>
        <div className={styles.BasketFooterSectionContainer}>
          <p className={styles.BasketFooterSectionContainerText}>Subtotal: </p>
          <p className={styles.BasketFooterSectionContainerPrice}>$429.00</p>
        </div>
        <p className={styles.BasketFooterText}>
          Shipping, taxes, and discounts will be calculated at checkout.
        </p>
        <button className={styles.BasketFooterCheck}>Check Out</button>
      </div>
    </div>
  );
}

export default BasketFooterPrice;
