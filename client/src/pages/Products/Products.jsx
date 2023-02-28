import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import styles from './Product.module.scss'
import {fetchAsyncProducts} from '../../store/productsSlice'
import Error from '../../components/Error/Error'
import Loader from '../../components/Loader/Loader'
import ProductsBanner from "../../components/ProductsComponents/ProductsBaner/ProductsBanner";
import ProductsNav from "../../components/ProductsComponents/ProductsNav/ProductsNav";
import ProductsContent from "../../components/ProductsComponents/ProductsContent/ProductsContent";

function Products(props) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const status = useSelector(state => state.products.status)

    useEffect(() => {
        dispatch(fetchAsyncProducts())
    }, [dispatch])

    switch (status) {
        case 'loading':
            return <Loader/>;
        case 'loaded':
            return (
                <main className={styles.Product}>
                    <section>
                        <ProductsBanner/>
                    </section>
                    <section>
                        <div className={styles.ProductWrapper}>
                            <div className={styles.ProductWrapperFilter}></div>
                            <div className={styles.ProductWrapperContent}>
                                <ProductsNav/>
                                <ProductsContent products={products}/>
                            </div>
                        </div>
                    </section>
                </main>
            );
        default:
            return <Error error={status}/>
    }

}

export default Products;