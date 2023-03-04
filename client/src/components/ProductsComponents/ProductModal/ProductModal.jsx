
import styles from './ProductModal.module.scss'
import classNames from "classnames";
import Button from "../../Button/Button";
import {AiOutlineClose} from 'react-icons/ai';
import {BiMinus, BiPlus} from "react-icons/bi";

function ProductModal({active, closeModal, imageUrls, name, myCustomParam, color, currentPrice, quantity, brand }) {
    return (
        <div className={active ? classNames(styles.Modal, styles.Active) : styles.Modal} onClick={closeModal}>

            <div className={styles.ModalContent} onClick={e => e.stopPropagation()}>
                <AiOutlineClose onClick={closeModal} className={styles.ModalContentClosed}/>
                <div className={styles.ModalContentPicture}>
                    <img className={styles.ModalContentPictureImg}
                         src={imageUrls[0]}
                         alt="product"/>
                    <div className={styles.ModalContentPictureCarousel}>
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/21_1.jpg?v=1598253084"
                             alt="prop"/>
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/21_1.jpg?v=1598253084"
                             alt="prop"/>
                        <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/21_1.jpg?v=1598253084"
                             alt="prop"/>
                    </div>
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