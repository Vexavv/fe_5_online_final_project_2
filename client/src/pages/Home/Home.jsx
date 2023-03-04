import React from 'react';
import { Link } from 'react-router-dom';
import SubscriptionNews from "../../components/SubscriptionNews/SubscriptionNews";
import ShopCollection from '../../components/ShopCollection/ShopCollection';
import Bestsellers from '../../components/Bestsellers/Bestsellers';
import BigCarousel from '../../components/BigCarousel/BigCarousel';


function Home(props) {

    return (
        <main>
            <BigCarousel/>
            <Link to='/product'><ShopCollection/></Link>
            <Bestsellers/>
            <SubscriptionNews/>
        </main>
    );
}

export default Home;