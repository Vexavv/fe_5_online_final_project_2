import React, {useState} from 'react';
import styles from './ProductCard.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../Button/Button';
import RatingStar from './RatingStar/RatingStar';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {TfiSearch} from 'react-icons/tfi';
import {getElement} from '../../../store/productsSlice';
import {Link} from 'react-router-dom';

function ProductCard({
                         name,
                         imageUrls,
                         currentPrice,
                         description,
                         product,
                         onClick,
                         _id,
                     }) {
    const dispatch = useDispatch();
    const displayType = useSelector((state) => state.products.displayType);
    const [hovered, setHovered] = useState(null);

    return (
        <>
            {displayType ? (
                <li className={styles.Card}>
                    <Link to={`/products/${product.itemNo}`}>
                        <img
                            className={styles.CardImg}
                            src={
                                hovered === _id && imageUrls.length > 1
                                    ? imageUrls[1]
                                    : imageUrls[0]
                            }
                            onMouseLeave={() => setHovered(null)}
                            onMouseEnter={() => setHovered(_id)}
                            alt={name}
                        />
                    </Link>
                    <div className={styles.CardButton}>
                        <HiOutlineShoppingBag className={styles.CardButtonIcon}/>
                        <TfiSearch onClick={onClick} className={styles.CardButtonIcon}/>
                    </div>
                    <div className={styles.CardDescription}>
                        <Link to={`/products/${product.itemNo}`}>
                            <h5 className={styles.CardDescriptionName}>{name}</h5>
                        </Link>
                        <div className={styles.CardDescriptionContainer}>
              <span className={styles.CardDescriptionContainerPrice}>
                ${currentPrice}.00
              </span>
                            <ul className={styles.CardDescriptionContainerLabel}>
                                {imageUrls.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={item} alt="product"/>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </li>
            ) : (
                <li className={styles.Row}>
                    <Link to={`/products/${product.itemNo}`}>
                        <img
                            className={styles.RowImg}
                            src={
                                hovered === _id && imageUrls.length > 1
                                    ? imageUrls[1]
                                    : imageUrls[0]
                            }
                            onMouseLeave={() => setHovered(null)}
                            onMouseEnter={() => setHovered(_id)}
                            alt={name}
                        />
                    </Link>
                    <div className={styles.RowDescription}>
                        <Link to={`/products/${product.itemNo}`}>
                            <h5 className={styles.RowDescriptionName}>{name}</h5>
                        </Link>
                        <span className={styles.RowDescriptionPrice}>
              ${currentPrice}.00
            </span>
                        <ul className={styles.RowDescriptionLabel}>
                            {imageUrls.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <img src={item} alt="product"/>
                                    </li>
                                );
                            })}
                        </ul>
                        <span className={styles.RowDescriptionParam}>{description}</span>
                    </div>
                    <div className={styles.RowNav}>
                        <RatingStar/>
                        <Button
                            onClick={onClick}
                            className={styles.RowNavButton}
                            text="Quick View"
                        />
                        <Button className={styles.RowNavButton} text="Add To Cart"/>
                    </div>
                </li>
            )}
        </>
    );
}

export default ProductCard;
