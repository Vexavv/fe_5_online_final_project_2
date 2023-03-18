import React, {useState} from 'react';
import styles from './Product.module.scss'
import ProductsBanner from "../../components/ProductsComponents/ProductsBaner/ProductsBanner";
import ProductsNav from "../../components/ProductsComponents/ProductsNav/ProductsNav";
import ProductsContent from "../../components/ProductsComponents/ProductsContent/ProductsContent";
import ProductFilter from "../../components/ProductsComponents/ProductsFilter/ProductFilter";
import ProductPagination from "../../components/ProductsComponents/ProductPagination/ProductPagination";

function Products(props) {

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
                        {/*<div className={styles.ProductWrapperPagination}>*/}
                        {/*    <ProductPagination/>*/}
                        {/*</div>*/}
                    </section>


                </main>
            );
}

export default Products;