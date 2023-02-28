import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import styles from './Product.module.scss'
import {fetchAsyncProducts} from '../../store/productsSlice'
import {changeDisplay, changeDisplayList} from "../../store/productsSlice";
import ToggleButtons from "../../components/ProductsComponents/ToggleButtons/ToggleButtons";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCard from "../../components/ProductsComponents/ProductCard/ProductCard";
import {Link} from "react-router-dom";
import TuneIcon from '@mui/icons-material/Tune';
import SelectSort from "../../components/ProductsComponents/SelectSort/SelectSort";
import Error from '../../components/Error/Error'
import Loader from '../../components/Loader/Loader'
import ProductsBanner from "../../components/ProductsComponents/ProductsBaner/ProductsBanner";

function Products(props) {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const status = useSelector(state => state.products.status)

    // Реалізація зміни відображення продуктів
    const display = useSelector(state => state.products.display)

    const handlerChangeDisplay = () => {
        dispatch(changeDisplay())
    }
    const handlerChangeDisplayList = () => {
        dispatch(changeDisplayList())
    }


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
                            <div className={styles.ProductWrapperFilter}>
                                <p>Filter</p>
                            </div>
                            <div className={styles.ProductWrapperContent}>
                                <div className={styles.ProductWrapperContentContainer}>

                                </div>
                            </div>

                        </div>
                    </section>


                    {/*Сторінка продуктів*/}
                    <Box className={styles.Product} sx={{flexGrow: 1}}>
                        <Grid container spacing={{xs: 1, md: 2}}>
                            {/*Банер сторінки*/}
                            <Grid className={styles.ProductBanner} xs={12}>
                                <div className={styles.ProductBannerContainer}>
                                    <nav className={styles.ProductBannerContainerNav}>
                                        <h1 className={styles.ProductBannerContainerNavTitle}>Products</h1>
                                        <ul className={styles.ProductBannerContainerNavLink}>
                                            <li className={styles.ProductBannerContainerNavLinkItem}><Link
                                                to='/'>Home</Link>
                                            </li>
                                            <li className={styles.ProductBannerContainerNavLinkItem}>
                                                <span>  Products</span>
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
                                            <ToggleButtons changeDisplayList={handlerChangeDisplayList}
                                                           changeDisplay={handlerChangeDisplay}/>
                                        </div>
                                        <SelectSort/>
                                    </nav>
                                    {/*Картки*/}
                                    <ul className={display ? styles.ProductContentContainerRow : styles.ProductContentContainerColumn}>
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

export default Products;