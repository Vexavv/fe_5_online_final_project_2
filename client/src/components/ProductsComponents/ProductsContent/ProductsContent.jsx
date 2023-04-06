import React, {useEffect} from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {useSelector, useDispatch} from "react-redux";
import {getElement, toggleModal} from "../../../store/slices/productsSlice";
import {fetchAsyncProducts} from "../../../store/slices/productsSlice";
import ProductPagination from "../ProductPagination/ProductPagination";
import Loader from "../../Loader/Loader";
import Error from "../../Error/Error";
import {useSearchParams} from "react-router-dom";

function ProductsContent() {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
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

    useEffect(() => {
        const queryParams = {
            page,
            categories,
            color,
            bestSeller,
            trendingProduct,
            minPrice,
            maxPrice,
            sort
        };

        Object.keys(queryParams).forEach(key => {
            if (!queryParams[key]) {
                delete queryParams[key];
            }
            if (key === 'categories' && queryParams[key] === 'all') {
                delete queryParams[key];
            }
        });

        setSearchParams(new URLSearchParams(queryParams));
    }, [page, categories, color, bestSeller, trendingProduct, minPrice, maxPrice, sort, setSearchParams, dispatch]);


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
                    <ProductPagination data={data.productsQuantity}/>
                </>
            );
        default:
            return <Error error={error}/>
    }
}

export default ProductsContent;