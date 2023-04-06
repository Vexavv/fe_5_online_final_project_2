import React from "react";
import styles from "./BasketFooterPrice.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BasketFooterPrice() {
  const cards = useSelector((state) => state.card.products);
  const isLogged = useSelector((state) => state.isLogged.isLogged.success);

  const totalPrice = isLogged
    ? cards.reduce((prev, curr) => {
        return prev + curr.product.currentPrice * curr.cartQuantity;
      }, 0)
    : cards.reduce((prev, curr) => {
        return prev + curr.product.totalPrice;
      }, 0);

  return (
    <div className={styles.BasketFooter}>
      <button className={styles.BasketFooterOrder}>add order note</button>
      <div className={styles.BasketFooterSection}>
        <div className={styles.BasketFooterSectionContainer}>
          <p className={styles.BasketFooterSectionContainerText}>Subtotal: </p>
          <p className={styles.BasketFooterSectionContainerPrice}>
            ${totalPrice}
          </p>
        </div>
        <p className={styles.BasketFooterText}>
          Shipping, taxes, and discounts will be calculated at checkout.
        </p>
        <Link to={"/checkout"}>
          <button className={styles.BasketFooterCheck}>Check Out</button>
        </Link>
      </div>
    </div>
  );
}

export default BasketFooterPrice;
