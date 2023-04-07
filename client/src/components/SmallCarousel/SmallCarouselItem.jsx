import React, {useState} from 'react';
import {Box, Typography, CardMedia, CardContent, Card} from '@mui/material'
import styles from './SmallCarousel.module.scss'
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {TfiSearch} from 'react-icons/tfi';
import {getElement} from "../../store/slices/productsSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addCard} from "../../store/slices/cardSlice";

function SmallCarouselItem({imageUrls, name, currentPrice, onClick, _id, itemNo, product, sale, previousPrice}) {

    const dispatch = useDispatch()
    const [hovered, setHovered] = useState(null);
    const products = useSelector((state) => state.card.products);

    const isInBasket = products.find(
        (productItem) => productItem._id === product?._id
    );
    const addProductBascet = () => {
        if (isInBasket) {
            console.log("remove");
        } else {
            dispatch(
                addCard({
                    ...product,
                    amount: 1,
                    totalPrice: product.currentPrice,
                })
            );
        }
    };
    return (
        <Card
            sx={{
                width: {xs: '300px', sm: '250px', md: '270px', xl: '335px'},
                border: 'none',
                boxShadow: 0,
                margin: '0 auto',

            }}
        >
            <CardMedia
                className={styles.Wrapper}
                sx={{
                    height: {xs: '350px', sm: '250px', md: '335px'},
                    padding: 1,
                    position: 'relative',
                }}
                image={
                    hovered === _id && imageUrls.length > 1
                        ? imageUrls[1]
                        : imageUrls[0]
                }
                onMouseLeave={() => setHovered(null)}
                onMouseEnter={() => setHovered(_id)}
                title={name}
            >
                <div className={styles.WrapperIcon}>
                    <HiOutlineShoppingBag className={styles.WrapperIconBtn} onClick={addProductBascet}/>
                    <TfiSearch className={styles.WrapperIconBtn} onClick={onClick}/>
                </div>
                {sale && <Link to='/sale'><Box component="div" sx={{borderRadius:'4px', background: '#ba933e', width: 37, height: 27}}>
                    <Typography sx={{
                        color: 'rgba(255,255,255,0.95)',
                        fontFamily: 'Red Hat Display',
                        fontSize: '14px',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                        padding: '3px'
                    }}>sale</Typography>
                </Box></Link>}
            </CardMedia>

            <Link to={`/products/${itemNo}`}>
                <CardContent
                    onClick={() => {
                        dispatch(getElement(product));
                    }}
                    sx={{padding: '20px 0', cursor: 'pointer',}}
                >
                    <Typography
                        sx={{
                            textTransform: 'capitalize',
                            color: '#444444',
                            fontFamily: 'Red Hat Display',
                            fontSize: '16px',
                            fontWeight: 700,
                            paddingBottom: '15px',
                            '&:hover': {color: '#ba933e', transition: 'all .5s ease'},
                        }}
                        component="div"
                    >
                        {name}
                    </Typography>
                    <Box display='flex'>
                        {sale ? <Typography
                            sx={{
                                color: '#666666',
                                fontFamily: 'Red Hat Display',
                                fontSize: '14px',
                                fontWeight: 400,
                                textDecoration: 'line-through'
                            }}
                        >
                            ${previousPrice}.00
                        </Typography> : <Typography
                            sx={{
                                color: '#666666',
                                fontFamily: 'Red Hat Display',
                                fontSize: '14px',
                                fontWeight: 400,
                            }}
                        >
                            ${previousPrice}.00
                        </Typography>}
                        {sale && <Typography
                            sx={{
                                color: '#ba933e',
                                fontFamily: 'Red Hat Display',
                                fontSize: '14px',
                                fontWeight: 400,
                                marginLeft: 1,
                            }}
                        >
                            ${currentPrice}.00
                        </Typography>
                        }
                    </Box>

                </CardContent>
            </Link>
        </Card>
    );
}

export default SmallCarouselItem;