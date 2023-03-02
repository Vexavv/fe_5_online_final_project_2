import React from 'react';
import { Link } from 'react-router-dom';
import SubscriptionNews from "../../components/SubscriptionNews/SubscriptionNews";
import ShopCollection from '../../components/ShopCollection/ShopCollection';
import Bestsellers from '../../components/Bestsellers/Bestsellers';


function Home(props) {
    return (
        <main>
            <Link to='/product'><ShopCollection/></Link>
            <Bestsellers/>
            <SubscriptionNews/>
        </main>
    );
}

export default Home;