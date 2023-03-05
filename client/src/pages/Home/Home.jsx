import React from 'react';
import { Link } from 'react-router-dom';
import SubscriptionNews from "../../components/SubscriptionNews/SubscriptionNews";
import ShopCollection from '../../components/ShopCollection/ShopCollection';
import Bestsellers from '../../components/Bestsellers/Bestsellers';
import BigCarousel from '../../components/BigCarousel/BigCarousel';
import SmallCarousel from "../../components/SmallCarousel/SmallCarousel";

import {closeModal} from "../../store/productsSlice";
import {useDispatch, useSelector} from "react-redux";
import ProductModal from "../../components/ProductsComponents/ProductModal/ProductModal";


function Home(props) {
    const dispatch = useDispatch();
    const activeModal = useSelector(state => state.products.activeModal)
    const handlerCloseModal = ()=>{
        dispatch(closeModal())
    }

    return (
        <main>
            <BigCarousel/>
            <SmallCarousel/>
            <Link to='/product'><ShopCollection/></Link>
            <Bestsellers/>
            <SubscriptionNews/>

            <ProductModal active={activeModal} closeModal={handlerCloseModal}/>
        </main>
    );
}

export default Home;