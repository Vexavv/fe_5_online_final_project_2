import React from 'react';
import styles from './ProductCard.module.scss'
function ProductCard({name,imageUrls, currentPrice }) {
    return (
        <li className={styles.Card}>
            <img className={styles.CardImg}  src={imageUrls[0]} alt="image"/>
            <div className={styles.CardDescription}>
                <h5 className={styles.CardDescriptionName}>{name}</h5>
                <span className={styles.CardDescriptionPrice}>${currentPrice}.00</span>
            </div>

        </li>
    );
}

export default ProductCard;