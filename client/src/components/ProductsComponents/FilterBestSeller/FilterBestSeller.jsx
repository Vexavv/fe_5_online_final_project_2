import React, {useState, useEffect} from 'react';
import styles from './FilterBestSeller.module.scss'
import BestSellerItem from "./BestSellerItem";

const state = [
    {
        enabled: true,
        imageUrls: [
            "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/21_1.jpg?v=1598253084",
            "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/21_2.jpg?v=1598253084"
        ],
        quantity: 10,
        _id: "63f4cf301bf4be0b2fc0ba79",
        name: "arctander chair",
        currentPrice: 39,
        previousPrice: 50,
        categories: "chairs",
        color: "yellow",
        productUrl: "/chairs",
        brand: "Demo brand",
        myCustomParam: "Most of us are familiar with the iconic design of the egg shaped chair floating in the air. The Hanging Egg Chair is a critically acclaimed design that has enjoyed praise worldwide ever since the distinctive sculptural shape was created.",
        itemNo: "413289",
        date: "2023-02-21T14:03:28.291Z",
        __v: 0
    },
    {
        enabled: true,
        imageUrls: [
            "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/12_800x.jpg?v=1586179903"
        ],
        quantity: 10,
        _id: "63f4cf571bf4be0b2fc0ba7c",
        name: "hanging egg chair",
        currentPrice: 210,
        previousPrice: 250,
        categories: "chairs",
        color: "yellow",
        productUrl: "/chairs",
        brand: "Demo brand",
        myCustomParam: "Most of us are familiar with the iconic design of the egg shaped chair floating in the air. The Hanging Egg Chair is a critically acclaimed design that has enjoyed praise worldwide ever since the distinctive sculptural shape was created.",
        itemNo: "214179",
        date: "2023-02-21T14:04:07.894Z",
        __v: 0
    },
    {
        enabled: true,
        imageUrls: [
            "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/29_800x.jpg?v=1586316900",
            "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/29_2.jpg?v=1586316900"
        ],
        quantity: 10,
        _id: "63f4cf7f1bf4be0b2fc0ba80",
        name: "beoplay a1",
        currentPrice: 39,
        previousPrice: 50,
        categories: " lamps",
        color: "white",
        productUrl: "/lamps",
        brand: "Demo brand",
        myCustomParam: "Most of us are familiar with the iconic design of the egg shaped chair floating in the air. The Hanging Egg Chair is a critically acclaimed design that has enjoyed praise worldwide ever since the distinctive sculptural shape was created.",
        itemNo: "1611",
        date: "2023-02-21T14:04:47.828Z",
        __v: 0
    },
    {
        enabled: true,
        imageUrls: [
            "https://cdn.shopify.com/s/files/1/0376/9440/6700/products/6_800x.jpg?v=1586244426"
        ],
        quantity: 10,
        _id: "63f4cf941bf4be0b2fc0ba83",
        name: "hubert pendant lamp",
        currentPrice: 90,
        previousPrice: 100,
        categories: " lamps",
        color: "black",
        productUrl: "/lamps",
        brand: "Demo brand",
        myCustomParam: "Most of us are familiar with the iconic design of the egg shaped chair floating in the air. The Hanging Egg Chair is a critically acclaimed design that has enjoyed praise worldwide ever since the distinctive sculptural shape was created.",
        itemNo: "970995",
        date: "2023-02-21T14:05:08.933Z",
        __v: 0
    },

]
function FilterBestSeller(props) {
    // const [state, setState] = useState([])
    //
    // useEffect(() => {
    //     fetch('http://localhost:3001/api/products')
    //         .then(res => res.json())
    //         .then(list => {
    //             setState(list)
    //         })
    // }, [])
    // console.log(state)
    return (
        <ul className={styles.List}>
            {state.map((item,) => <BestSellerItem key={item._id} item={item} {...item}/>)}
        </ul>
    );
}

export default FilterBestSeller;