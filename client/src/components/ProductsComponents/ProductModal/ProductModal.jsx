import React from "react";
import styles from './ProductModal.module.scss'
import classNames from "classnames";
import Button from "../../Button/Button";
import {AiOutlineClose} from 'react-icons/ai';


function ProductModal({active, closeModal, imageUrls, name, myCustomParam, color, currentPrice, quantity, brand }) {
    return (
        <div className={active ? classNames(styles.Modal, styles.Active) : styles.Modal} onClick={closeModal}>

            <div className={styles.ModalContent} onClick={e => e.stopPropagation()}>
                <AiOutlineClose onClick={closeModal} className={styles.ModalContentClosed}/>
                <div className={styles.ModalContentPicture}>
                    <img className={styles.ModalContentPictureImg}
                         src={imageUrls[0]}
                         alt="product"/>
                    <ul className={styles.ModalContentPictureCarousel}>
                        {imageUrls.map((img, index) => {
                            return <li key={index}><img src={img} alt="product"/></li>
                        })}
                    </ul>
                </div>
                <div className={styles.ModalContentDescription}>
                    <h3 className={styles.ModalContentDescriptionTitle}>{name}</h3>
                    <span className={styles.ModalContentDescriptionText}>{myCustomParam}</span>
                    <span className={styles.ModalContentDescriptionColor}>Color: {color}</span>
                    <span className={styles.ModalContentDescriptionPrice}>${currentPrice}.00</span>
                    <div className={styles.ModalContentDescriptionCount}>
                        <Button className={styles.ModalContentDescriptionCountBtn} text="Add To Cart"/>
                    </div>
                    <span className={styles.ModalContentDescriptionValues}>Availability: {quantity}</span>
                    <span className={styles.ModalContentDescriptionValues}>Brand: {brand}</span>
                </div>
            </div>
        </div>
    )
}


export default ProductModal;