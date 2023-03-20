import React, {useEffect, useState} from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {useSelector, useDispatch} from "react-redux";
import {getElement, toggleModal} from "../../../store/productsSlice";
import {fetchAsyncProducts} from "../../../store/productsSlice";
import ProductPagination from "../ProductPagination/ProductPagination";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";

function ProductsContent() {
    const dispatch = useDispatch();
    const {displayType, page, status, data, error,} = useSelector(state => state.products)
    const {
        categories,
        color,
        bestSeller,
        trendingProduct,
        minPrice,
        maxPrice,
        sort
    } = useSelector(state => state.products.filterBy)

    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(toggleModal(true))
    }
    useEffect(() => {
        dispatch(fetchAsyncProducts({page, categories, color, bestSeller, trendingProduct, minPrice, maxPrice, sort}))
    }, [page, categories, color, bestSeller, trendingProduct, minPrice, maxPrice, sort])

    switch (status) {
        case 'loading':
            return <Loader/>;
        case 'loaded':
            return (
                <>
                    <ul className={displayType ? styles.Column : styles.Row}>
                        {data.products.map(product => {
                            return <ProductCard{...product} key={product._id}
                                               product={product}
                                               onClick={() => handleProductClick(product)}/>
                        })}
                    </ul>
                    <ProductPagination/>
                </>
            );
        default:
            return <Error error={error}/>
    }
}

export default ProductsContent;