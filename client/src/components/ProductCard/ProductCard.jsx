import React from 'react';
import styles from './ProductCard.module.scss'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

function ProductCard({name, imageUrls, currentPrice}) {
    return (
        <li className={styles.Card}>
            <img className={styles.CardImg} src={imageUrls[0]} alt="image"/>
            <div className={styles.CardButton}>
                <ShoppingBagIcon className={styles.CardButtonIcon}
                                 sx={{width: 35, height: 35, padding: 1, background: '#ffffff', borderRadius: 2, marginBottom: 1}}/>
                <SearchIcon className={styles.CardButtonIcon} sx={{width: 35, height: 35, padding: 1, background: '#ffffff', borderRadius: 2}}/>
            </div>
            <div className={styles.CardDescription}>
                <h5 className={styles.CardDescriptionName}>{name}</h5>
                <span className={styles.CardDescriptionPrice}>${currentPrice}.00</span>
            </div>
        </li>
    );
}

export default ProductCard;