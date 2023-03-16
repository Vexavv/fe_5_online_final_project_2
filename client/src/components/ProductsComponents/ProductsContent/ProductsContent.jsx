import React, {useEffect, useState} from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {useSelector, useDispatch} from "react-redux";
import {

    getElement,
    openModal
} from "../../../store/productsSlice";
import { fetchAsyncProducts} from "../../../store/productsSlice";
import ProductPagination from "../ProductPagination/ProductPagination";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";


function ProductsContent() {
    const dispatch = useDispatch();
    const {display, products, page, status, data, error} = useSelector(state => state.products)
    const {radioButtonValue, categories, radioColorValue} = useSelector(state => state.productsFilters)


    //------------------------------------------------
    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(openModal())
    }

    useEffect(() => {
        dispatch(fetchAsyncProducts(page))
    }, [page,dispatch])
    console.log(data)



//попытка вызова
//     useEffect(() => {
//         if (radioButtonValue === 'products') {
//             dispatch(fetchAsyncProducts(page))
//         }
//         if (radioButtonValue) {
//             dispatch(fetchAsyncFilters({radioButtonValue: radioButtonValue, page: page}))
//         }
//         if (radioColorValue) {
//             dispatch(fetchAsyncColor({radioColorValue: radioColorValue, page: page}))
//         }
//
//     }, [dispatch, page, radioButtonValue, radioColorValue])
//
//     console.log('categories>>>>', categories)
//
//     console.log('value >>>>', radioColorValue)
//     console.log('value >>>>', radioButtonValue)

///--------------------------


    // if (!data) {
    //     return <Loader/>;
    // }
    switch (status) {
        case 'loading':
            return <Loader/>;
        case 'loaded':
    return (
        <>
            <ul className={display ? styles.Row : styles.Column}>
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