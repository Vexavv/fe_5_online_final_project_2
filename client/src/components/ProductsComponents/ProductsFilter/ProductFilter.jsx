import React from 'react';
import styles from './ProductFilter.module.scss'
import RadioButton from "../RadioButton/RadioButton";
import RadioButtonColor from "../RadioButtonColor/RadioButtonColor";
import ProductPriceFilter from "../ProductPriceFilter/ProductPriceFilter";
import FilterBestSeller from "../FilterBestSeller/FilterBestSeller";

function ProductFilter(props) {
    return (

        <div className={styles.Filter}>
            <div className={styles.FilterRadio}>
                <RadioButton/>
            </div>

            <div className={styles.FilterColor}>
                <RadioButtonColor/>
            </div>
            <div className={styles.FilterColor}>
                <ProductPriceFilter/>
            </div>
            <div className={styles.FilterBest}>
                <FilterBestSeller/>
            </div>
        </div>
    );
}

export default ProductFilter;