import React, {useState} from 'react';
import styles from './ProductCard.module.scss'
import {useDispatch, useSelector} from "react-redux";
import Button from '../../Button/Button'
import RatingStar from "./RatingStar/RatingStar";
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {TfiSearch} from 'react-icons/tfi';

import {Link} from "react-router-dom";


function ProductCard({name, imageUrls, currentPrice, myCustomParam, product, onClick, _id}) {

    const display = useSelector(state => state.products.display)
    const [hovered, setHovered] = useState(null);

    return (
        <>
            {display ? (<li className={styles.Card}>
                <img className={styles.CardImg} src={hovered === _id && imageUrls.length > 1
                    ? imageUrls[1]
                    : imageUrls[0]}
                     onMouseLeave={() => setHovered(null)}
                     onMouseEnter={() => setHovered(_id)}
                     alt={name}/>
                <div className={styles.CardButton}>
                   <Link to="/product"><HiOutlineShoppingBag className={styles.CardButtonIcon}/></Link>
                    <TfiSearch onClick={onClick} className={styles.CardButtonIcon}/>
                </div>
                <div className={styles.CardDescription}>
                    <h5 className={styles.CardDescriptionName}>{name}</h5>
                    <div className={styles.CardDescriptionContainer}>
                        <span className={styles.CardDescriptionContainerPrice}>${currentPrice}.00</span>
                        <ul className={styles.CardDescriptionContainerLabel}>
                            {imageUrls.map((item, index) => {
                            return <li key={index}><img src={item} alt="product"/></li>
                        })}
                        </ul>
                    </div>
                </div>
            </li>) : (<li className={styles.Row}>
                <img className={styles.RowImg} src={hovered === _id && imageUrls.length > 1
                    ? imageUrls[1]
                    : imageUrls[0]}
                     onMouseLeave={() => setHovered(null)}
                     onMouseEnter={() => setHovered(_id)}
                     alt={name}/>
                <div className={styles.RowDescription}>
                    <h5 className={styles.RowDescriptionName}>{name}</h5>
                    <span className={styles.RowDescriptionPrice}>${currentPrice}.00</span>
                    <ul className={styles.RowDescriptionLabel}>{imageUrls.map((item, index) => {
                        return <li key={index}><img src={item} alt="product"/></li>
                    })}</ul>
                    <span className={styles.RowDescriptionParam}>{myCustomParam}</span>
                </div>
                <div className={styles.RowNav}>
                    <RatingStar/>
                    <Button className={styles.RowNavButton} text='Select Options'/>
                    <Button onClick={onClick} className={styles.RowNavButton} text='Quick View'/>
                    <Button className={styles.RowNavButton} text='Add To Cart'/>
                </div>
            </li>)}
        </>
    );
}

export default ProductCard;