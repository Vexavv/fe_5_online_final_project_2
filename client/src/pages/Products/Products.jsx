import React, { useState } from 'react';
import styles from './Product.module.scss'
import ProductsBanner from "../../components/ProductsComponents/ProductsBaner/ProductsBanner";
import ProductsNav from "../../components/ProductsComponents/ProductsNav/ProductsNav";
import ProductsContent from "../../components/ProductsComponents/ProductsContent/ProductsContent";
import ProductFilter from "../../components/ProductsComponents/ProductsFilter/ProductFilter";
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../store/slices/cardSlice';


function Products(props) {
    const dispatch= useDispatch()

    const [product, setProduct] = useState(null);
    const products = useSelector((state) => state.card.products);


    const isInBasket = products.find(
      (productItem) => productItem._id === product?._id
    );
  
    const addProductBascet = () => {
      if (isInBasket) {
        console.log("remove");
      } else {
        dispatch(
          addCard({
            ...product,
            amount: 1,
            totalPrice: product.currentPrice,
          })
        );
     
      }
    };
            return (
                <main className={styles.Product}>
                    <section>
                        <ProductsBanner/>
                    </section>
                    <section>
                        <div className={styles.ProductWrapper}>
                            <div className={styles.ProductWrapperFilter}>
                                <ProductFilter/>
                            </div>
                            <div className={styles.ProductWrapperContent}>
                                <ProductsNav/>
                                <ProductsContent/>

                            </div>
                        </div>
                    </section>


                </main>
            );
}

export default Products;