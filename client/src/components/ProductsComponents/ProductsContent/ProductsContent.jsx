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


//-----------------------redux toolkit ------------------------
    const chairs = useSelector(state => state.productsFilters.chairs)
    const lamps = useSelector(state => state.productsFilters.lamps)
    const decor = useSelector(state => state.productsFilters.decor)
    const furniture = useSelector(state => state.productsFilters.furniture)
    const sofas = useSelector(state => state.productsFilters.sofas)

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
                            return (products.map(product => {
                                    return <ProductCard{...product} key={product._id}
                                                       product={product}
                                                       onClick={() => handleProductClick(product._id)}/>
                                })

                            )
                    }
                })()}
            </ul>
        </>
    );
}

export default ProductsContent;