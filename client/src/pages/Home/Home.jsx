import React from "react";
import { Link } from "react-router-dom";
import BigCarousel from "../../components/BigCarousel/BigCarousel";
import ShopCollection from "../../components/ShopCollection/ShopCollection";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
import SmallCarousel from "../../components/SmallCarousel/SmallCarousel";
import SubscriptionNews from "../../components/SubscriptionNews/SubscriptionNews";
function Home(props) {
  return (
    <main>
      <BigCarousel />
      <SmallCarousel />
      <Link to='/products'>
        <ShopCollection />
      </Link>
      <Bestsellers />
      <SubscriptionNews />
    </main>
  );
}

export default Home;
