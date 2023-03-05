import React from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import { useSelector, useDispatch} from "react-redux";
import ProductPagination from "../ProductPagination/ProductPagination";
import {getElement, openModal, closeModal} from "../../../store/productsSlice";
import ProductModal from "../ProductModal/ProductModal";

function ProductsContent() {
    const dispatch = useDispatch();
    const display = useSelector(state => state.products.display)
    const products = useSelector(state => state.products.products)
//------------------------------------------------------------------
    const activeModal = useSelector(state => state.products.activeModal)

    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(openModal())
        // console.log(product)
    }
    const handlerCloseModal = ()=>{
        dispatch(closeModal())
    }
//-------------------------------------------------------------
    return (
        <>
            <ul className={display ? styles.Row : styles.Column}>
                {products.map(product => {
                    return <ProductCard{...product} key={product._id}
                                   product={product} onClick={()=>handleProductClick(product._id)}/>
                })}
            </ul>
            <ProductPagination/>
            <ProductModal active={activeModal} closeModal={handlerCloseModal}/>
        </>

    );
}

export default ProductsContent;