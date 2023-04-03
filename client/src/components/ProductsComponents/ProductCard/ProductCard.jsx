import React, {useState} from "react";
import styles from "./ProductCard.module.scss";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../Button/Button";
import RatingStar from "./RatingStar/RatingStar";
import {HiOutlineShoppingBag} from "react-icons/hi";
import {TfiSearch} from "react-icons/tfi";
import classNames from "classnames";
import {Link} from "react-router-dom";
import {addCard} from "../../../store/slices/cardSlice";

function ProductCard({
                         name,
                         imageUrls,
                         currentPrice,
                         description,
                         product,
                         onClick,
                         _id,
                         sale,
                         previousPrice,
                     }) {
    const dispatch = useDispatch();
    const displayType = useSelector((state) => state.products.displayType);
    const [hovered, setHovered] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleImageClick = (item, index) => {
        setHovered(index);
        setCurrentImageIndex(index);
    };

    // -------------------------addBasket---------------------------
    const products = useSelector((state) => state.card.products);

    const isInBasket = products.find(
        (productItem) => productItem._id === product?._id
    );
    const addProductBascet = () => {
        if (isInBasket) {
            console.log("remove");
        } else {
            dispatch(
                addCard({
                    ...product,
                    amount: 1,
                    totalPrice: product.currentPrice,
                })
            );
        }
    };


    return (
        <>
            {displayType ? (
                <li className={styles.Card}>
                    <Link className={styles.CardLink} to={`/products/${product.itemNo}`}>
                        <img
                            className={styles.CardLinkImg}
                            src={imageUrls[currentImageIndex]}
                            onMouseEnter={() => {
                                setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
                            }}
                            onMouseLeave={() => {
                                setCurrentImageIndex(currentImageIndex === 0 ? imageUrls.length - 1 : currentImageIndex - 1);
                            }}
                            alt={name}
                        />
                    </Link>
                    <div className={styles.CardButton}>
                        <HiOutlineShoppingBag
                            className={styles.CardButtonIcon}
                            onClick={addProductBascet}
                        />
                        <TfiSearch onClick={onClick} className={styles.CardButtonIcon}/>
                    </div>
                    {sale && <Link to='/sale'>
                        <div className={styles.CardSale}>
                            <span className={styles.CardSaleText}>sale</span>
                        </div>
                    </Link>}
                    <div className={styles.CardDescription}>
                        <Link to={`/products/${product.itemNo}`}>
                            <h5 className={styles.CardDescriptionName}>{name}</h5>
                        </Link>
                        <div className={styles.CardDescriptionContainer}>
              <span
                  className={sale ? classNames(styles.CardDescriptionContainerSalePrice, styles.CardDescriptionContainerPrice) : styles.CardDescriptionContainerPrice}>
                ${previousPrice}.00
              </span>
                            {sale && <span className={styles.CardDescriptionContainerPrice2}>
                ${currentPrice}.00
              </span>}
                            <ul className={styles.CardDescriptionContainerLabel}>
                                {imageUrls.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <img
                                                src={item}
                                                alt="product"
                                                onClick={() => handleImageClick(item, index)}
                                                />
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
                            src={imageUrls[currentImageIndex]}
                            onMouseEnter={() => {
                                setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
                            }}
                            onMouseLeave={() => {
                                setCurrentImageIndex(currentImageIndex === 0 ? imageUrls.length - 1 : currentImageIndex - 1);
                            }}
                            alt={name}
                        />
                    </Link>
                    <div className={styles.RowDescription}>
                        <div className={styles.RowDescriptionWrapper}>
                            <Link to={`/products/${product.itemNo}`}>
                                <h5 className={styles.RowDescriptionWrapperName}>{name}</h5>
                            </Link>
                            {sale && <Link to='/sale'>
                                <div className={styles.RowDescriptionWrapperSale}>
                                    <span className={styles.CardSaleText}>sale</span>
                                </div>
                            </Link>}
                        </div>

                        <div className={styles.RowDescriptionAll}>
                           <span
                               className={sale ? classNames(styles.RowDescriptionAllPrice, styles.RowDescriptionAllPrice2) : styles.RowDescriptionAllPrice}>
              ${previousPrice}.00
            </span>
                            {sale && <span className={styles.RowDescriptionAllSalePrice}>
              ${currentPrice}.00
            </span>}
                        </div>
                        <ul className={styles.RowDescriptionLabel}>
                            {imageUrls.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <img src={item} alt="product"  onClick={() => handleImageClick(item, index)}/>
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
