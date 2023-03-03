import React, {useState} from 'react';
import styles from './ProductCard.module.scss'
import {useSelector, useDispatch} from "react-redux";
import Button from '../../Button/Button'
import RatingStar from "./RatingStar/RatingStar";
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {TfiSearch} from 'react-icons/tfi';
import Modal from '../../Modal/Modal'
// import {getElement, openModal, closeModal} from '../../../store/productsSlice'
function ProductCard({name, imageUrls, currentPrice, myCustomParam, item}) {
    // const dispatch = useDispatch();
    const display = useSelector(state => state.products.display)

    // --------------Modal------------ redux-toolkit
    // const activeModal = useSelector(state => state.products.activeModal)
    // const handlerOpenModal = (item) => {
    //     dispatch(getElement(item))
    //     dispatch(openModal())
    //     console.log(item)
    // }
    //
    // const handlerCloseModal = () => {
    //     dispatch(closeModal())
    // }

const [activeModal, setActiveModal]= useState(false)

    const handlerOpenModal = () => {
        setActiveModal(true)
    }

const handlerCloseModal = () => {
        setActiveModal(false)
}
    return (
        <>
            {display ? (<li className={styles.Card}>
                <img className={styles.CardImg} src={imageUrls[0]} alt="product"/>
                <div className={styles.CardButton}>
                    <HiOutlineShoppingBag className={styles.CardButtonIcon}/>
                    <TfiSearch onClick={()=>handlerOpenModal(item)} className={styles.CardButtonIcon}/>
                </div>
                <div className={styles.CardDescription}>
                    <h5 className={styles.CardDescriptionName}>{name}</h5>
                    <div className={styles.CardDescriptionContainer}>
                        <span className={styles.CardDescriptionContainerPrice}>${currentPrice}.00</span>
                        <ul className={styles.CardDescriptionContainerLabel}>{imageUrls.map((item, index) => {
                            return <li key={index}><img src={item} alt="product"/></li>
                        })}</ul>
                    </div>

                </div>
            </li>) : (<li className={styles.Row}>
                <img className={styles.RowImg} src={imageUrls[0]} alt="product"/>
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
                    <Button onClick={()=>handlerOpenModal(item)} className={styles.RowNavButton} text='Quick View'/>
                    <Button className={styles.RowNavButton} text='Add To Cart'/>
                </div>
            </li>)}
            <Modal active={activeModal} closeModal={handlerCloseModal}/>
        </>
    );
}

export default ProductCard;