import React, {useEffect, useState} from 'react';
import styles from './SmallCarousel.module.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import SmallCarouselItem from "./SmallCarouselItem";
import {useDispatch} from "react-redux";
import {getElement, openModal} from "../../store/productsSlice";
import Loader from "../Loader/Loader";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 1200},
        items: 4,
        slidesToSlide: 1
    },
    desktop: {
        breakpoint: {max: 1200, min: 901},
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: {max: 900, min: 601},
        items: 2
    },
    mobile: {
        breakpoint: {max: 600, min: 0},
        items: 1
    }
};


function SmallCarousel(props) {
    const dispatch = useDispatch()
    const handleProductClick = (product)=> {
        dispatch(getElement(product));
        dispatch(openModal())
        console.log(product)
    }
    const [trending, setTrending] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:3001/api/products/filter?trendingProduct=true`)
            .then(res => res.json())
            .then(list => {
                setTrending(list)
            })
    }, [])


    if (!trending) {
        return <Loader/>
    }
    return (
        <div className={styles.Slider}>
            <div className={styles.SliderDescription}>
                <h3 className={styles.SliderDescriptionTitle}>Trending Products</h3>
                <span className={styles.SliderDescriptionText}>Top view in this week</span>
            </div>
            <div className={styles.SliderContent}>
                <Carousel responsive={responsive}
                          swipeable={true}
                          renderArrowsWhenDisabled={true}
                          removeArrowOnDeviceType={['mobile', 'tablet']}
                          shouldResetAutoplay
                          arrows
                          rewind={true}
                          keyBoardControl={true}
                          draggable
                          showDots={true}
                >
                    {trending.products.map(product => {
                        return <SmallCarouselItem {...product} key={product._id} product={product}
                                                  onClick={()=>handleProductClick(product)}/>
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default SmallCarousel;