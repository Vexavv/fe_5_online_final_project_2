import React from 'react';
import { Link } from 'react-router-dom';
import BigCarousel from "../../components/BigCarousel/BigCarousel"
import ShopCollection from '../../components/ShopCollection/ShopCollection';
import Bestsellers from '../../components/Bestsellers/Bestsellers';
import SubscriptionNews from "../../components/SubscriptionNews/SubscriptionNews";

function Home(props) {
    return (
        <main>
            <Link to='/product'><ShopCollection/></Link>
            <BigCarousel/>
            <Bestsellers/>
            <SubscriptionNews/>

        </main>
    );
}









export default Home;