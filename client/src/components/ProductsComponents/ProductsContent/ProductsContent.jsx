import React, {useEffect, useState} from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {useSelector, useDispatch} from "react-redux";
import {
    fetchAsyncBestSellers,
    fetchAsyncProducts,
    fetchAsyncTrending,
    getElement,
    openModal
} from "../../../store/productsSlice";
import ProductPagination from "../ProductPagination/ProductPagination";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";


function ProductsContent() {
    const dispatch = useDispatch();
    const display = useSelector(state => state.products.display)
    const products = useSelector(state => state.products.products)


    //------------------------------------------------
    const value = useSelector(state => state.productsFilters.radioButtonValue)


const valueBest = useSelector(state => state.productsFilters.visibleRadioOff)
    // const visible = useSelector(state => state.productsFilters.visibleRadioOff)
//-----------------------redux toolkit ------------------------
//     const chairs = useSelector(state => state.productsFilters.chairs)
//     const lamps = useSelector(state => state.productsFilters.lamps)
//     const decor = useSelector(state => state.productsFilters.decor)
//     const furniture = useSelector(state => state.productsFilters.furniture)
//     const sofas = useSelector(state => state.productsFilters.sofas)
const {chairs,lamps,decor,furniture,sofas}=useSelector(state => state.productsFilters)

    // const trending = useSelector(state => state.topProducts.trending) //trending products
    // const bestSellers = useSelector(state => state.topProducts.bestSellers) //best sellers products
    // console.log(trending)
    // console.log(bestSellers)
    // console.log(furniture)
    // console.log(lamps)
    // console.log(products)
    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(openModal())
        console.log(product)
    }
    const page = useSelector(state => state.products.page)
    const status = useSelector(state => state.products.status)
    useEffect(() => {
        dispatch(fetchAsyncProducts(page))
    }, [page])

    // useEffect(() => {
    //     dispatch(fetchAsyncTrending())
    // }, [dispatch])
    //
    // useEffect(() => {
    //     dispatch(fetchAsyncBestSellers())
    // }, [dispatch])

    switch (status) {
        case 'loading':
            return <Loader/>;
        case 'loaded':
            return (
                <>
                    <ul className={display ? styles.Row : styles.Column}>
                        {(() => {
                            switch (value) {
                                case 'chairs':
                                    return (chairs.products.map(product => {
                                        return <ProductCard{...product} key={product._id}
                                                           product={product} onClick={() => handleProductClick(product)}/>
                                    }));
                                case 'lamps':
                                    return (lamps.products.map(product => {
                                            return <ProductCard{...product} key={product._id}
                                                               product={product}
                                                               onClick={() => handleProductClick(product)}/>
                                        })

                                    );
                                case 'decor':
                                    return (decor.products.map(product => {
                                            return <ProductCard{...product} key={product._id}
                                                               product={product}
                                                               onClick={() => handleProductClick(product)}/>
                                        })
                                    );
                                case 'furniture':
                                    return (
                                        furniture.products.map(product => {
                                            return <ProductCard{...product} key={product._id}
                                                               product={product}
                                                               onClick={() => handleProductClick(product)}/>
                                        })
                                    );
                                case 'sofas':
                                    return (sofas.products.map(product => {
                                            return <ProductCard{...product} key={product._id}
                                                               product={product}
                                                               onClick={() => handleProductClick(product)}/>
                                        })
                                    );

                                default:
                                    return (
                                        products.map(product => {
                                            return <ProductCard{...product} key={product._id}
                                                               product={product}
                                                               onClick={() => handleProductClick(product)}/>
                                        })


                                    )
                            }
                        })()}

                        {/*{(() => {*/}
                        {/*    switch (valueBest) {*/}

                        {/*        case 'best':*/}
                        {/*            return (*/}
                        {/*                     trending.products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product._id)}/>*/}
                        {/*                })*/}
                        {/*            );*/}
                        {/*        case 'trending':*/}
                        {/*            return (trending.products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product._id)}/>*/}
                        {/*                })*/}
                        {/*            );*/}

                        {/*        default:*/}
                        {/*            return (products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product._id)}/>*/}
                        {/*                })*/}
                        {/*                console.log('hhjhjhjhjhj')*/}

                        {/*            )*/}
                        {/*    }*/}
                        {/*})()}*/}


                    </ul>
                    <ProductPagination/>
                </>
            );
        default:
            return <Error error={status}/>
    }


}

export default ProductsContent;