import React from 'react';
import { Link } from 'react-router-dom';
import SubscriptionNews from "../../components/SubscriptionNews/SubscriptionNews";
import ShopCollection from '../../components/ShopCollection/ShopCollection';


function Home(props) {
    return (
        <main>
            <h1> Welcome to Home Page</h1>
            <SubscriptionNews/>
            <Link to='/product'><ShopCollection/></Link>
        </main>
    );
}

export default Home;