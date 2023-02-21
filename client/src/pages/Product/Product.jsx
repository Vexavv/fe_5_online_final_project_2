import React, {useEffect, useState} from 'react';
import styles from './Product.module.scss'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ProductCard from "../../components/ProductCard/ProductCard";




function Product(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(list => {
                setProducts(list)
            })
    }, [])
    console.log(products)

    return (
        <Box className={styles.Product} sx={{flexGrow: 1}}>
            <Grid container spacing={{ xs: 1, md: 2 }} >
                <Grid xs={12}>
                    <div>Baner</div>
                </Grid>
                <Grid className={styles.ProductFilter} xs={3}>
                    <div>Filter</div>
                </Grid>
                <Grid className={styles.ProductWrapper} xs={9}>


                            <ul className={styles.ProductList}>
                                {products.map(item => {
                                    return <ProductCard{...item} key={item._id}
                                                       item={item}/>
                                })}
                            </ul>


                </Grid>
            </Grid>
        </Box>
    );

}

export default Product;