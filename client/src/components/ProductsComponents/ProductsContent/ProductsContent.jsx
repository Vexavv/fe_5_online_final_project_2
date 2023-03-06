import React from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import { useSelector, useDispatch} from "react-redux";
import ProductPagination from "../ProductPagination/ProductPagination";
import {getElement, openModal} from "../../../store/productsSlice";

function ProductsContent() {
    const dispatch = useDispatch();
    const display = useSelector(state => state.products.display)
    const products = useSelector(state => state.products.products)

    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(openModal())
    }
    return (
        <>
            <ul className={display ? styles.Row : styles.Column}>
                {products.map(product => {
                    return <ProductCard{...product} key={product._id}
                                   product={product} onClick={()=>handleProductClick(product._id)}/>
                })}
            </ul>
            <ProductPagination/>
        </>
    );
}

export default ProductsContent;