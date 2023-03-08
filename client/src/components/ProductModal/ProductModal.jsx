import React from "react";
import styles from './ProductModal.module.scss'
import classNames from "classnames";
import Button from "../Button/Button";
import {AiOutlineClose} from 'react-icons/ai';
import {useSelector, useDispatch} from "react-redux";
import {closeModal} from "../../store/productsSlice";

function ProductModal({active,}) {
const dispatch = useDispatch()

    const selectedProductId = useSelector((state) => state.products.selectedProductId);
    const products = useSelector((state) => state.products.products);
    const product = products.find((p) => p._id === selectedProductId);


    if (!product) {
        return console.log('Loading');
    }
    return (
        <div className={active ? classNames(styles.Modal, styles.Active) : styles.Modal} onClick={()=>{dispatch(closeModal())}}>

            <div className={styles.ModalContent} onClick={e => e.stopPropagation()}>
                <AiOutlineClose onClick={()=>{dispatch(closeModal())}} className={styles.ModalContentClosed}/>
                <div className={styles.ModalContentPicture}>
                    <img className={styles.ModalContentPictureImg}
                         src={product.imageUrls[0]}
                         alt="product"/>
                    <ul className={styles.ModalContentPictureCarousel}>
                        {product.imageUrls.map((img, index) => {
                            return <li key={index}><img src={img} alt="product"/></li>
                        })}
                    </ul>
                </div>
                <div className={styles.ModalContentDescription}>
                    <h3 className={styles.ModalContentDescriptionTitle}>{product.name}</h3>
                    <span className={styles.ModalContentDescriptionText}>{product.myCustomParam}</span>
                    <span className={styles.ModalContentDescriptionColor}>Color: {product.color}</span>
                    <span className={styles.ModalContentDescriptionPrice}>${product.currentPrice}.00</span>
                    <div className={styles.ModalContentDescriptionCount}>
                        <Button className={styles.ModalContentDescriptionCountBtn} text="Add To Cart"/>
                    </div>
                    <span className={styles.ModalContentDescriptionValues}>Availability: {product.quantity}</span>
                    <span className={styles.ModalContentDescriptionValues}>Brand: {product.brand}</span>
                </div>
            </div>
        </div>

    )
}


export default ProductModal;