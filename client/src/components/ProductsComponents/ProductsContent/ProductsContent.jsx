import React, {useEffect, useState} from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {useSelector, useDispatch} from "react-redux";
import {

    getElement,
    toggleModal
} from "../../../store/productsSlice";
import { fetchAsyncProducts} from "../../../store/productsSlice";
import ProductPagination from "../ProductPagination/ProductPagination";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";


function ProductsContent() {
    const dispatch = useDispatch();
    const {display,page, status, data, error} = useSelector(state => state.products)



    //--------------------------- display--------
    // const [display1, setDisplay1] = useState(true)
    // console.log('STATE >>>>',display1)
    //------------------------------------------------
    console.log('REDUX >>>>', display)
    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(toggleModal(true))
    }

    useEffect(() => {
        dispatch(fetchAsyncProducts(page))
    }, [page])
    // console.log(data)




    // if (!data) {
    //     return <Loader/>;
    // }
    switch (status) {
        case 'loading':
            return <Loader/>;
        case 'loaded':
    return (
        <>
            <ul className={display ? styles.Column :styles.Row }>
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