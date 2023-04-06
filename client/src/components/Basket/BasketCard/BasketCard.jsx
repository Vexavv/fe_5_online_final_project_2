import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCard,
  decreasCard,
  decreaseCard,
  deletCard,
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
  item,
}) {
  const isLogged = useSelector((state) => state.isLogged.isLogged.success);
  const dispatch = useDispatch();

  const removeItem = () => {
    console.log(id);
    isLogged
      ? dispatch(deletCard(item.product))
      : dispatch(removeItemBasket({ id }));
  };
  const handleIncrease = () => {
    console.log(item.product);
    isLogged
      ? dispatch(addToCard(item.product))
      : dispatch(increaseCard({ id }));
  };
  const handleDecrease = () => {
    console.log(item.product);

    isLogged
      ? dispatch(decreasCard(item.product))
      : dispatch(decreaseCard({ id }));
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
                onClick={handleDecrease}
              >
                <span className={styles.CardOptionContainerCountMinusText}>
                  -
                </span>
              </button>
              <input
                type="text"
                value={amount}
                className={styles.CardOptionContainerCountValue}
                readOnly
              ></input>
              <button
                className={styles.CardOptionContainerCountPlus}
                onClick={handleIncrease}
              >
                <span className={styles.CardOptionContainerCountMinusText}>
                  +
                </span>
              </button>
            </div>
            <button
              className={styles.CardOptionContainerRemove}
              onClick={removeItem}
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
