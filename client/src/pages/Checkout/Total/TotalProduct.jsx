import React from 'react';
import s from './Total.module.scss';

const TotalProduct = ({ name, currentPrice, imageUrls, amount }) => {
  return (
    <div className={s.products}>
      <div className={s.product}>
        <div className={s.productName}>
          <div className={s.productImg}>
            <img src={imageUrls[0]} alt={name} />
            <div className={s.iconPrise}>{amount}</div>
          </div>
          <div className={s.productTitle}>
            <p>{name}</p>
          </div>
        </div>
        <div className={s.productPrice}>${currentPrice}</div>
      </div>
    </div>
  );
};

export default TotalProduct;
