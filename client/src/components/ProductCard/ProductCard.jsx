import React from 'react';
import styles from './ProductCard.module.scss'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector} from "react-redux";
import Button from '../Button/Button'
import RatingStar from "./RatingStar/RatingStar";

function ProductCard({name, imageUrls, currentPrice, myCustomParam}) {
    const display = useSelector(state => state.products.display)
    return (
        <>
            {display ? (<li className={styles.Card}>
                <img className={styles.CardImg} src={imageUrls[0]} alt="image"/>
                <div className={styles.CardButton}>
                    <ShoppingBagIcon className={styles.CardButtonIcon}
                                     sx={{
                                         width: 35,
                                         height: 35,
                                         padding: 1,
                                         background: '#ffffff',
                                         borderRadius: 2,
                                         marginBottom: 1
                                     }}/>
                    <SearchIcon className={styles.CardButtonIcon}
                                sx={{width: 35, height: 35, padding: 1, background: '#ffffff', borderRadius: 2}}/>
                </div>
                <div className={styles.CardDescription}>
                    <h5 className={styles.CardDescriptionName}>{name}</h5>
                    <div className={styles.CardDescriptionContainer}>
                        <span className={styles.CardDescriptionContainerPrice}>${currentPrice}.00</span>
                        <ul className={styles.CardDescriptionContainerLabel}>{imageUrls.map((item, index) => {
                            return <li key={index}><img src={item} alt="img"/></li>
                        })}</ul>
                    </div>

                </div>
            </li>) : (<li className={styles.Row}>
                <img className={styles.RowImg} src={imageUrls[0]} alt="image"/>
                <div className={styles.RowDescription}>
                    <h5 className={styles.RowDescriptionName}>{name}</h5>
                    <span className={styles.RowDescriptionPrice}>${currentPrice}.00</span>
                    <ul className={styles.RowDescriptionLabel}>{imageUrls.map((item, index) => {
                        return <li key={index}><img src={item} alt="img"/></li>
                    })}</ul>
                    <span className={styles.RowDescriptionParam}>{myCustomParam}</span>
                </div>
                <div className={styles.RowNav}>
                    <RatingStar/>
                    <Button className={styles.RowNavButton} text='Select Options'/>
                    <Button className={styles.RowNavButton} text='Quick View'/>
                </div>
            </li>)}

        </>

    );
}

export default ProductCard;