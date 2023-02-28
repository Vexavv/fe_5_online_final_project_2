import React from 'react';
import styles from './ProductsContent.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import { useSelector} from "react-redux";


function ProductsContent({products}) {
    const display = useSelector(state => state.products.display)
    return (
        <ul className={display ? styles.Row : styles.Column}>
            {products.map(item => {
                return <ProductCard{...item} key={item._id}
                                   item={item}/>
            })}
        </ul>
    );
}

export default ProductsContent;