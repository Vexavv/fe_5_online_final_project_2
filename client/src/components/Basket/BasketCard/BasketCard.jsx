import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decreaseCard,
  increaseCard,
  removeItemBasket,
  addCard,
  removeCard,
  clearCard,
} from '../../../store/cardSlice';
import styles from './BsketCard.module.scss';

function BasketCard({
  currentPrice,
  brand,
  color,
  img,
  name,
  id,
  amount,
  quantity,
  item,
}) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.card.products);

  console.log(quantity);
  // console.log('totalPrice', totalPrice);
  // const itemCount = cartItems.length;

  const handleAddCard = () => {
    dispatch(addCard(item));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(id));
  };

  const handleClearCard = () => {
    dispatch(clearCard());
  };

  // const removeItem = (id) => {
  //   dispatch(removeItemBasket({ id }));
  // };
  // const handleIncrease = (id) => {
  //   dispatch(increaseCard({ id }));
  // };
  // const handleDecrease = (id) => {
  //   dispatch(decreaseCard({ id }));
  // };

  return (
    <div className={styles.Container}>
      <div className={styles.Card} key={id}>
        <div className="img">
          <img className={styles.CardImg} src={img} alt="cardCatalog" />
        </div>
        <div className={styles.Option}>
          <div className={styles.CardOptionSection}>
            <a className={styles.CardOptionName} href=".">
              {name}
            </a>
            <p className={styles.CardOptionTotalPrice}>
              ${currentPrice * quantity}
            </p>
          </div>
          <p className={styles.CardOptionColor}>{color}</p>
          <p className={styles.CardOptionDesription}>{brand}</p>
          <p className={styles.CardOptionPrice}>${currentPrice}</p>
          <div className={styles.CardOptionContainer}>
            <div className={styles.CardOptionContainerCount}>
              <button
                className={styles.CardOptionContainerCountMinus}
                onClick={() => handleRemoveCard()}
              >
                <span className={styles.CardOptionContainerCountMinusText}>
                  -
                </span>
              </button>
              <input
                // onChange={}
                type="text"
                value={quantity}
                className={styles.CardOptionContainerCountValue}
              ></input>
              <button
                className={styles.CardOptionContainerCountPlus}
                onClick={() => handleAddCard()}
              >
                <span className={styles.CardOptionContainerCountMinusText}>
                  +
                </span>
              </button>
            </div>
            <button
              className={styles.CardOptionContainerRemove}
              onClick={() => handleClearCard()}
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
