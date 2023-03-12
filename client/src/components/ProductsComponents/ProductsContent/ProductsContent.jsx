import React, {useEffect, useState} from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {useSelector, useDispatch} from "react-redux";
import {getElement, openModal} from "../../../store/productsSlice";


function ProductsContent() {
    const dispatch = useDispatch();
    const display = useSelector(state => state.products.display)
    const products = useSelector(state => state.products.products)


    //------------------------------------------------
    const value = useSelector(state => state.productsFilters.radioButtonValue)


const valueBest = useSelector(state => state.productsFilters.visibleRadioOff)
    // const visible = useSelector(state => state.productsFilters.visibleRadioOff)
//-----------------------redux toolkit ------------------------
    const chairs = useSelector(state => state.productsFilters.chairs)
    const lamps = useSelector(state => state.productsFilters.lamps)
    const decor = useSelector(state => state.productsFilters.decor)
    const furniture = useSelector(state => state.productsFilters.furniture)
    const sofas = useSelector(state => state.productsFilters.sofas)


    const trending = useSelector(state => state.products.trending) //trending products
    const bestSellers = useSelector(state => state.products.bestSellers) //best sellers products
    console.log(trending)
    console.log(bestSellers)
    console.log(furniture)
    console.log(products)
    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(openModal())
    }


    return (
        <>
            <ul className={display ? styles.Row : styles.Column}>
                {(() => {
                    switch (value) {
                        case 'chairs':
                            return (chairs.products.map(product => {
                                return <ProductCard{...product} key={product._id}
                                                   product={product} onClick={() => handleProductClick(product._id)}/>
                            }));
                        case 'lamps':
                            return (lamps.products.map(product => {
                                    return <ProductCard{...product} key={product._id}
                                                       product={product}
                                                       onClick={() => handleProductClick(product._id)}/>
                                })

                            );
                        case 'decor':
                            return (decor.products.map(product => {
                                    return <ProductCard{...product} key={product._id}
                                                       product={product}
                                                       onClick={() => handleProductClick(product._id)}/>
                                })
                            );
                        case 'furniture':
                            return (
                                furniture.products.map(product => {
                                    return <ProductCard{...product} key={product._id}
                                                       product={product}
                                                       onClick={() => handleProductClick(product._id)}/>
                                })
                            );
                        case 'sofas':
                            return (sofas.products.map(product => {
                                    return <ProductCard{...product} key={product._id}
                                                       product={product}
                                                       onClick={() => handleProductClick(product._id)}/>
                                })
                            );

                        default:
                            return (
                                    products.map(product => {
                                        return <ProductCard{...product} key={product._id}
                                                           product={product}
                                                           onClick={() => handleProductClick(product._id)}/>
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
        </>
    );
}

export default ProductsContent;