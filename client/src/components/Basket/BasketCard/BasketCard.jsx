import React from "react";
import styles from "./BsketCard.module.scss";

function BasketCard() {
  return (
    <div className={styles.Container}>
      <div className={styles.Card}>
        <div className="img">
        <img
          className={styles.CardImg}
          src="//cdn.shopify.com/s/files/1/0376/9440/6700/products/29_370x.jpg?v=1586316900"
          alt=""
        />
        </div>
        <div className={styles.Option}>
          <div className={styles.CardOptionSection}>
            <a className={styles.CardOptionName} href=".">
              Beoplay A1
            </a>
            <p className={styles.CardOptionTotalPrice}>$39.00</p>
          </div>
          <p className={styles.CardOptionColor}>Yellow</p>
          <p className={styles.CardOptionDesription}>Demo Vender</p>
          <p className={styles.CardOptionPrice}>$39.00</p>
          <div className={styles.CardOptionContainer}>
            <div className={styles.CardOptionContainerCount}>
              <button className={styles.CardOptionContainerCountMinus}>
                <span className={styles.CardOptionContainerCountMinusText}>
                  -
                </span>
              </button>
              <input
                type="text"
                value={1}
                className={styles.CardOptionContainerCountValue}
              ></input>
              <button className={styles.CardOptionContainerCountPlus}>
                <span className={styles.CardOptionContainerCountMinusText}>
                  +
                </span>
              </button>
            </div>
            <button className={styles.CardOptionContainerRemove}>Remove</button>
          </div>
        </div>
      </div>
      <div className={styles.Line}></div>
    </div>
  );
}

export default BasketCard;
