import React, {useState, useEffect} from 'react';
import {Box, Typography, Container} from '@mui/material';
import axios from 'axios';
import {BASE_URL} from "../../../constants/api";
import {PAGE_SIZE} from "../../../constants/constants";
import SmallCarouselItem from "../../SmallCarousel/SmallCarouselItem";
import Loader from "../../Loader/Loader";
import {fetchAsyncProducts, getElement, toggleModal} from "../../../store/slices/productsSlice";
import {useDispatch, useSelector} from "react-redux";
import ProductPagination from "../../ProductsComponents/ProductPagination/ProductPagination";

function SaleContent(props) {
    const dispatch = useDispatch()
    const {page} = useSelector(state => state.products)
    const [inSale, setInSale] = useState(null)
    const handleProductClick = (product)=> {
        dispatch(getElement(product));
        dispatch(toggleModal(true))
    }
    useEffect(() => {
        axios.get(`${BASE_URL}/products/filter?sale=sale&startPage=${page}&perPage=${PAGE_SIZE}`)
            .then(response => setInSale(response.data))
            .catch(error => console.error(error));
    }, [page]);

    if (!inSale) {
        return <Loader/>
    };
    return (
        <Container maxWidth="xl">
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography sx={{
                    marginTop: {xs: '20px'},
                    marginBottom: {xs: '20px'},
                    fontSize: {xs: '25px',sm:'30px',md:'35px'},
                    fontWeight: 700,
                    fontFamily: 'Red Hat Display',
                    color: '#ba933e'
                }}>Sale of Products - 25%</Typography>
            </Box>
            <Box display='flex' flexWrap='wrap' justifyContent='center' alignItems='center' component='ul'>
                {inSale.products.map(product => {
                    return <SmallCarouselItem {...product} key={product._id} product={product} onClick={()=>handleProductClick(product)}/>
                })}
            </Box>
            <ProductPagination data={inSale.productsQuantity}/>
        </Container>
    );
}

export default SaleContent;