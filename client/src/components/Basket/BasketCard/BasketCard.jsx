import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseCard,
  increaseCard,
  removeItemBasket,
} from "../../../store/slices/cardSlice";
import styles from "./BsketCard.module.scss";

function BasketCard({
  currentPrice,
  brand,
  color,
  img,
  name,
  id,
  amount,
  totalPrice,
}) {
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeItemBasket({ id }));
  };
  const handleIncrease = (id) => {
    dispatch(increaseCard({ id }));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseCard({ id }));
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Card} key={id}>
        <div className="img">
          <img className={styles.CardImg} src={img} alt="cardCatalog" />
        </div>
        <div className={styles.CardOption}>
          <div className={styles.CardOptionSection}>
            <a className={styles.CardOptionName} href=".">
              {name}
            </a>
            <p className={styles.CardOptionTotalPrice}>${totalPrice}</p>
          </div>
          <p className={styles.CardOptionColor}>{color}</p>
          <p className={styles.CardOptionDesription}>{brand}</p>
          <p className={styles.CardOptionPrice}>${currentPrice}</p>
          <div className={styles.CardOptionContainer}>
            <div className={styles.CardOptionContainerCount}>
              <button
                className={styles.CardOptionContainerCountMinus}
                onClick={() => handleDecrease(id)}
              >
                <span className={styles.CardOptionContainerCountMinusText}>
                  -
                </span>
              </button>
              <input
                // onChange={}
                type="text"
                value={amount}
                className={styles.CardOptionContainerCountValue}
                readOnly
              ></input>
              <button
                className={styles.CardOptionContainerCountPlus}
                onClick={() => handleIncrease(id)}
              >
                <span className={styles.CardOptionContainerCountMinusText}>
                  +
                </span>
              </button>
            </div>
            <button
              className={styles.CardOptionContainerRemove}
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className={styles.Line}></div>
    </div>
  );
}

export default BasketCard;
