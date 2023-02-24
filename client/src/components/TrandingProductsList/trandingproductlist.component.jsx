import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import TrandingCards from '../TrandignsCards/trandingcards.component';

import './trandgingproductslist.styles.scss'
import { responsive } from './trandingproductslists.responsive';


const TrandingProductList = () => {
    return (
        
        <div className='trending-products-container'>
        <h1  className="trending-products-title">Trending Products
        </h1>
        <p className='subTitle'>Top view in this week</p>
        <Carousel responsive={responsive}  >
            <TrandingCards/>
            <TrandingCards/>
            <TrandingCards/>
            <TrandingCards/>
            <TrandingCards/>
        </Carousel>
        </div>
    )
}
export default TrandingProductList;
