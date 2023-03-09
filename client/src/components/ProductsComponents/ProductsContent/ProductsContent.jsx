import React from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {useSelector, useDispatch} from "react-redux";
import {getElement, openModal} from "../../../store/productsSlice";

function ProductsContent() {
    const dispatch = useDispatch();
    const display = useSelector(state => state.products.display)
    const products = useSelector(state => state.products.products)
    //------------------------------------------------
    const value = useSelector(state => state.products.radioButtonValue)
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


    return (

        <ul className={display ? styles.Row : styles.Column}>
            {(() => {
                switch (value) {
                    case 'chairs':
                        return (chairs.map(product => {
                            return <ProductCard{...product} key={product._id}
                                               product={product} onClick={() => handleProductClick(product._id)}/>
                        }));
                    case 'lamps':
                        return (lamps.map(product => {
                                return <ProductCard{...product} key={product._id}
                                                   product={product} onClick={() => handleProductClick(product._id)}/>
                            })

                        );
                    case 'decor':
                        return (decor.map(product => {
                                return <ProductCard{...product} key={product._id}
                                                   product={product} onClick={() => handleProductClick(product._id)}/>
                            })
                        );
                    case 'furniture':
                        return (
                            furniture.map(product => {
                                return <ProductCard{...product} key={product._id}
                                                   product={product} onClick={() => handleProductClick(product._id)}/>
                            })
                        );
                    case 'sofas':
                        return (sofas.map(product => {
                                return <ProductCard{...product} key={product._id}
                                                   product={product} onClick={() => handleProductClick(product._id)}/>
                            })
                        );

                    default:
                        return (products.map(product => {
                                return <ProductCard{...product} key={product._id}
                                                   product={product} onClick={() => handleProductClick(product._id)}/>
                            })

                        )
                }
            })()}

        </ul>

    );
}

export default ProductsContent;