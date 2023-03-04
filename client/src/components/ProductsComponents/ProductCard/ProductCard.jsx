import React, {useState} from 'react';
import styles from './ProductCard.module.scss'
import {useDispatch, useSelector} from "react-redux";
import Button from '../../Button/Button'
import RatingStar from "./RatingStar/RatingStar";
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {TfiSearch} from 'react-icons/tfi';
import ProductModal from '../ProductModal/ProductModal'
import {Link} from "react-router-dom";
// import {openModal, closeModal} from "../../../store/productsSlice";

function ProductCard({name, imageUrls, currentPrice, myCustomParam, item}) {
// const {name, imageUrls, currentPrice, myCustomParam, item}= props
//     console.log(props)
    const display = useSelector(state => state.products.display)
    const [activeModal, setActiveModal] = useState(false)
    const handlerToggleModal = () => {
        setActiveModal(current => !current)
        console.log(item)
    }
    // const dispatch = useDispatch()
    // const activeModal = useSelector(state => state.products.activeModal)
    // const handlerOpenModal = ()=>{
    //    dispatch(openModal())
    // }
    // const handlerCloseModal = ()=>{
    //     dispatch(closeModal())
    // }

    return (
        <>
            {display ? (<li className={styles.Card}>
                <img className={styles.CardImg} src={imageUrls[0]} alt="product"/>
                <div className={styles.CardButton}>
                   <Link to="/product"><HiOutlineShoppingBag className={styles.CardButtonIcon}/></Link>
                    <TfiSearch onClick={handlerToggleModal} className={styles.CardButtonIcon}/>
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
                    <Button onClick={handlerToggleModal} className={styles.RowNavButton} text='Quick View'/>
                    <Button className={styles.RowNavButton} text='Add To Cart'/>
                </div>
            </li>)}
            <ProductModal active={activeModal} closeModal={handlerToggleModal} {...item} item={item}/>
        </>
    );
}

export default ProductCard;