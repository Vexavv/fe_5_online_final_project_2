
import styles from './Modal.module.scss'
import classNames from "classnames";
import Button from "../Button/Button";
import {AiOutlineClose} from 'react-icons/ai';
import {BiMinus, BiPlus} from "react-icons/bi";

function Modal({active, closeModal}) {
    return (
        <div className={active ? classNames(styles.Modal, styles.Active) : styles.Modal} onClick={closeModal}>

            <div className={styles.ModalContent} onClick={e => e.stopPropagation()}>
                <AiOutlineClose onClick={closeModal} className={styles.ModalContentClosed}/>
                <div className={styles.ModalContentPicture}>
                    <img className={styles.ModalContentPictureImg}
                         src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/21_1.jpg?v=1598253084"
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
                    <h3 className={styles.ModalContentDescriptionTitle}>Arctander Chair</h3>
                    <span className={styles.ModalContentDescriptionText}>Most of us are familiar with the iconic design of the egg shaped chair floating in the air. The Hanging Egg Chair is a critically acclaimed design that has enjoyed praise worldwide ever since the distinctive sculptural shape was created.</span>
                    <span className={styles.ModalContentDescriptionColor}>Color: Red</span>
                    <span className={styles.ModalContentDescriptionPrice}>$100.00</span>
                    <div className={styles.ModalContentDescriptionCount}>
                        <div className={styles.ModalContentDescriptionCountCounter} >
                            <BiMinus className={styles.ModalContentDescriptionCountCounterIcon}/>
                            <span>1</span>
                            <BiPlus className={styles.ModalContentDescriptionCountCounterIcon}/>
                        </div>
                        <Button className={styles.ModalContentDescriptionCountBtn} text="Add To Cart"/>
                    </div>
                    <span className={styles.ModalContentDescriptionValues}>Availability: gggggg</span>
                    <span className={styles.ModalContentDescriptionValues}>Vendor: Demo Vender</span>
                    <span className={styles.ModalContentDescriptionValues}>SKU: N/A</span>
                </div>
            </div>
        </div>
    )
}


export default Modal;