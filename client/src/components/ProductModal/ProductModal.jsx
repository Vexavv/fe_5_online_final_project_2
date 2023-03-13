import React from "react";
import styles from './ProductModal.module.scss'
import classNames from "classnames";
import Button from "../Button/Button";
import {AiOutlineClose} from 'react-icons/ai';
import {useSelector, useDispatch} from "react-redux";
import {closeModal} from "../../store/productsSlice";
import Loader from "../Loader/Loader";

function ProductModal({active}) {

const dispatch = useDispatch()
    const selectedProduct = useSelector((state) => state.products.selectedProduct);

    if (!selectedProduct) {
        return null;
    }
    return (
        <div className={active ? classNames(styles.Modal, styles.Active) : styles.Modal} onClick={()=>{dispatch(closeModal())}}>

            <div className={styles.ModalContent} onClick={e => e.stopPropagation()}>
                <AiOutlineClose onClick={()=>{dispatch(closeModal())}} className={styles.ModalContentClosed}/>
                <div className={styles.ModalContentPicture}>
                    <img className={styles.ModalContentPictureImg}
                         src={selectedProduct.imageUrls[0]}
                         alt="product"/>
                    <ul className={styles.ModalContentPictureCarousel}>
                        {selectedProduct.imageUrls.map((img, index) => {
                            return <li key={index}><img src={img} alt="product"/></li>
                        })}
                    </ul>
                </div>
                <div className={styles.ModalContentDescription}>
                    <h3 className={styles.ModalContentDescriptionTitle}>{selectedProduct.name}</h3>
                    <span className={styles.ModalContentDescriptionText}>{selectedProduct.description}</span>
                    <span className={styles.ModalContentDescriptionColor}>Color: {selectedProduct.color}</span>
                    <span className={styles.ModalContentDescriptionPrice}>${selectedProduct.currentPrice}.00</span>
                    <div className={styles.ModalContentDescriptionCount}>
                        <Button className={styles.ModalContentDescriptionCountBtn} text="Add To Cart"/>
                    </div>
                    <span className={styles.ModalContentDescriptionValues}>Availability: {selectedProduct.quantity}</span>
                    <span className={styles.ModalContentDescriptionValues}>Brand: {selectedProduct.brand}</span>
                </div>
            </div>
        </div>

    )
}


export default ProductModal;