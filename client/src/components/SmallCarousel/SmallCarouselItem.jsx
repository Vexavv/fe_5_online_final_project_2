import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './SmallCarousel.module.scss'
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {TfiSearch} from 'react-icons/tfi';
import {getElement} from "../../store/slices/productsSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

function SmallCarouselItem({imageUrls, name, currentPrice, onClick, _id, itemNo, product}) {

    const dispatch = useDispatch()
    const [hovered, setHovered] = useState(null);
    return (
        <Card
            sx={{
                width: { xs: '350px', sm: '250px', md: '270px', xl: '335px' },
                border: 'none',
                boxShadow: 0,
                margin: '0 auto',
                cursor: 'pointer',
            }}
        >
            <CardMedia
                className={styles.Wrapper}
                sx={{
                    height: { xs: '350px', sm: '250px', md: '335px' },
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
                    <HiOutlineShoppingBag className={styles.WrapperIconBtn} />
                    <TfiSearch className={styles.WrapperIconBtn} onClick={onClick} />
                </div>
            </CardMedia>

            <Link to={`/products/${itemNo}`}>
                <CardContent
                    onClick={() => {
                        dispatch(getElement(product));
                    }}
                    sx={{ padding: '20px 0' }}
                >
                    <Typography
                        sx={{
                            textTransform: 'capitalize',
                            color: '#444444',
                            fontFamily: 'Red Hat Display',
                            fontSize: '16px',
                            fontWeight: 700,
                            paddingBottom: '15px',
                            '&:hover': { color: '#ba933e', transition: 'all .5s ease' },
                        }}
                        component="div"
                    >
                        {name}
                    </Typography>
                    <Typography
                        sx={{
                            color: '#666666',
                            fontFamily: 'Red Hat Display',
                            fontSize: '14px',
                            fontWeight: 400,
                        }}
                    >
                        ${currentPrice}.00
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
}

export default SmallCarouselItem;