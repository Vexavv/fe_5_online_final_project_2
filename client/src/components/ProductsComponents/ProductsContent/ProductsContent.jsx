import React, {useEffect, useState} from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {useSelector, useDispatch} from "react-redux";
import {
    fetchAsyncProducts,
    getElement,
    openModal
} from "../../../store/productsSlice";
import { fetchAsyncFilters} from "../../../store/productsFiltersSlice";
import ProductPagination from "../ProductPagination/ProductPagination";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";


function ProductsContent() {
    const dispatch = useDispatch();
    const {display, products, page, status } = useSelector(state => state.products)
    const {radioButtonValue,categories } = useSelector(state => state.productsFilters)


    //------------------------------------------------
    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(openModal())
    }

    useEffect(() => {
        dispatch(fetchAsyncProducts(page))
    }, [page])



//попытка вызова
    useEffect(() => {
if(radioButtonValue){
    dispatch(fetchAsyncFilters({radioButtonValue:radioButtonValue, page:page}))
}
    }, [page, radioButtonValue])

    console.log('categories>>>>',categories)

    // console.log('value >>>>', radioButtonValue)


///--------------------------



if(!products){
    return <Loader/>;
}


    // switch (status) {
    //     case 'loading':
    //         return <Loader/>;
    //     case 'loaded':
            return (
                <>
                    <ul className={display ? styles.Row : styles.Column}>
                        {radioButtonValue === 'products' ? (products.products.map(product => {
                            return <ProductCard{...product} key={product._id}
                                               product={product}
                                               onClick={() => handleProductClick(product)}/>
                        })) :  (
                            categories.products.map(product => {
                                return <ProductCard{...product} key={product._id}
                                                   product={product}
                                                   onClick={() => handleProductClick(product)}/>
                            }))}


                        {/*{chairs.products.map(product => {*/}
                        {/*    return <ProductCard{...product} key={product._id}*/}
                        {/*                       product={product}*/}
                        {/*                       onClick={() => handleProductClick(product)}/>*/}
                        {/*})}*/}

                        {/*{(() => {*/}
                        {/*    switch (radioButtonValue) {*/}

                        {/*    case `${!radioButtonValue ==='products'?radioButtonValue:null}`:*/}
                        {/*            return (*/}
                        {/*                chairs.products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product)}/>*/}
                        {/*                })*/}
                        {/*            );*/}
                        {/*        default:*/}
                        {/*            return (*/}
                        {/*                products.products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product)}/>*/}
                        {/*                })*/}
                        {/*            )*/}
                        {/*    }*/}
                        {/*})()}*/}


                        {/*{(() => {*/}
                        {/*    switch (value) {*/}
                        {/*        case 'chairs':*/}
                        {/*            return (chairs.products.map(product => {*/}
                        {/*                return <ProductCard{...product} key={product._id}*/}
                        {/*                                   product={product} onClick={() => handleProductClick(product)}/>*/}
                        {/*            }));*/}
                        {/*        case 'lamps':*/}
                        {/*            return (lamps.products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product)}/>*/}
                        {/*                })*/}

                        {/*            );*/}
                        {/*        case 'decor':*/}
                        {/*            return (decor.products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product)}/>*/}
                        {/*                })*/}
                        {/*            );*/}
                        {/*        case 'furniture':*/}
                        {/*            return (*/}
                        {/*                furniture.products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product)}/>*/}
                        {/*                })*/}
                        {/*            );*/}
                        {/*        case 'sofas':*/}
                        {/*            return (sofas.products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product)}/>*/}
                        {/*                })*/}
                        {/*            );*/}

                        {/*        default:*/}
                        {/*            return (*/}
                        {/*                products.products.map(product => {*/}
                        {/*                    return <ProductCard{...product} key={product._id}*/}
                        {/*                                       product={product}*/}
                        {/*                                       onClick={() => handleProductClick(product)}/>*/}
                        {/*                })*/}


                        {/*            )*/}
                        {/*    }*/}
                        {/*})()}*/}

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
    //     default:
    //         return <Error error={status}/>
    // }


}

export default ProductsContent;