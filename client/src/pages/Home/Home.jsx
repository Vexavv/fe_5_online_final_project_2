import React from 'react';
import BigCarousel from "../../components/BigCarousel/BigCarousel"
import SubscriptionNews from "../../components/SubscriptionNews/SubscriptionNews";

function Home(props) {
    return (
        <main>
            <BigCarousel/>
            <SubscriptionNews/>
        </main>
    );
}

export default Home;