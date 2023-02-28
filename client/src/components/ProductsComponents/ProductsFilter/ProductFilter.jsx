import React from 'react';
import styles from './ProductFilter.module.scss'
import classNames from "classnames";
import RadioButton from "../../RadioButton/RadioButton";

function ProductFilter(props) {
    return (
        <div className={styles.Filter}>
            <h3 className={styles.FilterTitle}>Product Categories</h3>
            <div className={styles.FilterRadio}>
                <RadioButton/>
            </div>
            <h3 className={classNames(styles.FilterTitle, styles.FilterCategory)}>Color</h3>
            <ul className={styles.FilterColor}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <h3 className={classNames(styles.FilterTitle, styles.FilterCategory)}>Price</h3>

        </div>
    );
}

export default ProductFilter;