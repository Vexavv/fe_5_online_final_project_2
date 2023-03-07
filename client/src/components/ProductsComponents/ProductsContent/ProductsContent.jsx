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
    //------------------------------------------------
    const value = useSelector(state => state.products. radioButtonValue)
    const chairs = products.filter(el => el.categories === 'chairs')
    const lamps = products.filter(el => el.categories === 'lamps')
    const decor = products.filter(el => el.categories === 'decor')
    const furniture = products.filter(el => el.categories === 'furniture')
    const sofas = products.filter(el => el.categories === 'sofas')


    //------------------------------------------------------------------------
    function handleProductClick(product) {
        dispatch(getElement(product));
        dispatch(openModal())
    }
    switch(value){
        case 'chairs':
            return (
                <>
                    <ul className={display ? styles.Row : styles.Column}>
                        {chairs.map(product => {
                            return <ProductCard{...product} key={product._id}
                                               product={product} onClick={()=>handleProductClick(product._id)}/>
                        })}
                    </ul>
                </>
            );
        case 'lamps':
            return (
                <>
                    <ul className={display ? styles.Row : styles.Column}>
                        {lamps.map(product => {
                            return <ProductCard{...product} key={product._id}
                                               product={product} onClick={()=>handleProductClick(product._id)}/>
                        })}
                    </ul>
                </>
            );
        case 'decor':
            return (
                <>
                    <ul className={display ? styles.Row : styles.Column}>
                        {decor.map(product => {
                            return <ProductCard{...product} key={product._id}
                                               product={product} onClick={()=>handleProductClick(product._id)}/>
                        })}
                    </ul>
                </>
            );
        case 'furniture':
            return (
                <>
                    <ul className={display ? styles.Row : styles.Column}>
                        {furniture.map(product => {
                            return <ProductCard{...product} key={product._id}
                                               product={product} onClick={()=>handleProductClick(product._id)}/>
                        })}
                    </ul>
                </>);
        case 'sofas':
            return (
                <>
                    <ul className={display ? styles.Row : styles.Column}>
                        {sofas.map(product => {
                            return <ProductCard{...product} key={product._id}
                                               product={product} onClick={()=>handleProductClick(product._id)}/>
                        })}
                    </ul>
                </>
            );
        default:
            return(
              <>
              <ul className={display ? styles.Row : styles.Column}>
                  {products.map(product => {
                  return <ProductCard{...product} key={product._id}
                  product={product} onClick={()=>handleProductClick(product._id)}/>
              })}
              </ul>
              </>
            )

    }




    // return (
    //     <>
    //         <ul className={display ? styles.Row : styles.Column}>
    //             {value === "lamps" ? lamps.map(product => {
    //                 return <ProductCard{...product} key={product._id}
    //                                    product={product} onClick={()=>handleProductClick(product._id)}/>
    //             }) : products.map(product => {
    //                 return <ProductCard{...product} key={product._id}
    //                                    product={product} onClick={()=>handleProductClick(product._id)}/>
    //             }) }
    //
    //
    //         </ul>
    //         <ProductPagination/>
    //     </>
    // );






    // return (
    //     <>
    //         <ul className={display ? styles.Row : styles.Column}>
    //             {products.map(product => {
    //                 return <ProductCard{...product} key={product._id}
    //                                product={product} onClick={()=>handleProductClick(product._id)}/>
    //             })}
    //         </ul>
    //         <ProductPagination/>
    //     </>
    // );
}

export default ProductsContent;