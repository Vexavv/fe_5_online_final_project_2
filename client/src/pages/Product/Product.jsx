import React, {useEffect, useState,} from 'react';
import {useSelector, useDispatch} from "react-redux";
import styles from './Product.module.scss'
import {fetchAsyncProducts} from '../../store/productsSlice'
import ToggleButtons from "../../components/ToggleButtons/ToggleButtons";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCard from "../../components/ProductCard/ProductCard";
import {Link} from "react-router-dom";
import TuneIcon from '@mui/icons-material/Tune';
import SelectSort from "../../components/SelectSort/SelectSort";
import Error from '../../components/Error/Error'
import Loader from '../../components/Loader/Loader'
function Product(props) {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const status = useSelector(state => state.products.status)
    useEffect(() => {
        dispatch(fetchAsyncProducts())
    }, [dispatch])

switch (status){
    case 'loading':
        return <Loader/>;
    case 'loaded':
        return (
            <main>
                {/*Сторінка продуктів*/}
                <Box className={styles.Product} sx={{flexGrow: 1}}>
                    <Grid container spacing={{xs: 1, md: 2}}>
                        {/*Банер сторінки*/}
                        <Grid className={styles.ProductBanner} xs={12}>
                            <div className={styles.ProductBannerContainer}>
                                <nav className={styles.ProductBannerContainerNav}>
                                    <h1 className={styles.ProductBannerContainerNavTitle}>Products</h1>
                                    <ul className={styles.ProductBannerContainerNavLink}>
                                        <li className={styles.ProductBannerContainerNavLinkItem}><Link to='/'>Home</Link>
                                        </li>
                                        <li className={styles.ProductBannerContainerNavLinkItem}><span>  Products</span>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </Grid>
                        {/*Фильтр товарів*/}


                        <Grid className={styles.ProductFilter} md={3}>
                            <div>Filter</div>
                        </Grid>

                        {/*Секція продуктів*/}
                        <Grid className={styles.ProductContent} xs={12} md={9}>
                            <div className={styles.ProductContentContainer}>
                                {/*Секція селекта, кнопок вибору відображення карток*/}
                                <nav className={styles.ProductContentContainerNav}>
                                    <div className={styles.ProductContentContainerNavFilter}>
                                        <TuneIcon className={styles.ProductContentContainerNavFilterIcon}/>
                                        <span className={styles.ProductContentContainerNavFilterText}>Filter</span>
                                    </div>
                                    <div className={styles.ProductContentContainerNavToggleButton}>
                                        <ToggleButtons/>
                                    </div>
                                    <SelectSort/>
                                </nav>
                                {/*Картки*/}
                                <ul className={styles.ProductContentContainerList}>
                                    {products.map(item => {
                                        return <ProductCard{...item} key={item._id}
                                                           item={item}/>
                                    })}
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </main>
        );
    default:
        return <Error error={status}/>

}

}

export default Product;