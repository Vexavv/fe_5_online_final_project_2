import React, {useEffect, useState} from 'react';
import styles from './SmallCarousel.module.scss'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import SmallCarouselItem from "./SmallCarouselItem";
// import ProductModal from "../ProductsComponents/ProductModal/ProductModal";
// import {useDispatch, useSelector} from "react-redux";
// import {openModal} from "../../store/productsSlice";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 1200},
        items: 4,
        slidesToSlide: 4
    },
    desktop: {
        breakpoint: {max: 1200, min: 901},
        items: 3,
        slidesToSlide: 3
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

    // const dispatch = useDispatch()
    // const activeModal = useSelector(state => state.products.activeModal)
    // const handlerOpenModal = ()=>{
    //     dispatch(openModal())
    // }

    const [state, setState] = useState([]) ;

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(res => res.json())
            .then(list => {
                setState(list)
            })
    }, [])
    console.log(state)
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
                          infinite
                >

                    {state.map(item => {
                        return <SmallCarouselItem {...item} key={item._id}
                                                  item={item}/>
                    })}
                </Carousel>
            </div>
        </div>
    );
}

export default SmallCarousel;