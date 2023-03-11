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
    const value = useSelector(state => state.products.radioButtonValue)
//-------------------- запит на server------------------------------
//     const [chairs, setChairs] = useState({})
//     const [lamps, setLamps] = useState({})
//     const [decor, setDecor] = useState({})
//     const [furniture, setFurniture] = useState({})
//     const [sofas, setSofas] = useState({})



    // useEffect(() => {
    //     fetch('http://localhost:3001/api/products/filter?categories=chairs')
    //         .then(res => res.json())
    //         .then(list => {
    //             setChairs(list)
    //         })
    // }, []);
    // useEffect(() => {
    //     fetch('http://localhost:3001/api/products/filter?categories=lamps')
    //         .then(res => res.json())
    //         .then(list => {
    //             setLamps(list)
    //         })
    // }, [])
    // useEffect(() => {
    //     fetch('http://localhost:3001/api/products/filter?categories=decor')
    //         .then(res => res.json())
    //         .then(list => {
    //             setDecor(list)
    //         })
    // }, [])
    // useEffect(() => {
    //     fetch('http://localhost:3001/api/products/filter?categories=furniture')
    //         .then(res => res.json())
    //         .then(list => {
    //             setFurniture(list)
    //         })
    // }, [])
    // useEffect(() => {
    //     fetch('http://localhost:3001/api/products/filter?categories=sofas')
    //         .then(res => res.json())
    //         .then(list => {
    //             setSofas(list)
    //         })
    // }, [])


    // const [trending, setTrending] = useState({})
    // useEffect(() => {
    //     fetch('http://localhost:3001/api/products/filter?trendingProduct=true')
    //         .then(res => res.json())
    //         .then(list => {
    //             setTrending(list)
    //         })
    // }, [])
    //
    // console.log(trending)
//-----------------------redux toolkit ------------------------
    const chairs = useSelector(state => state.products.chairs)
    const lamps = useSelector(state => state.products.lamps)
    const decor = useSelector(state => state.products.decor)
    const furniture = useSelector(state => state.products.furniture)
    const sofas = useSelector(state => state.products.sofas)
//-------------------- фільтр front end -------------------------------
    // const chairs = products.filter(el => el.categories === 'chairs')
    // const lamps = products.filter(el => el.categories === 'lamps')
    // const decor = products.filter(el => el.categories === 'decor')
    // const furniture = products.filter(el => el.categories === 'furniture')
    // const sofas = products.filter(el => el.categories === 'sofas')
    //------------------------------------------------------------------------
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