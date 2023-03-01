import React from 'react';
import styles from './ProductFilter.module.scss'
import classNames from "classnames";
import RadioButton from "../../RadioButton/RadioButton";
import RadioButtonColor from "../../RadioButtonColor/RadioButtonColor";

function ProductFilter(props) {
    return (
        <div className={styles.Filter}>
            <div className={styles.FilterRadio}>
                <RadioButton/>
            </div>

            <div className={styles.FilterColor}>
                <RadioButtonColor/>
            </div>
            <h3 className={classNames(styles.FilterTitle, styles.FilterCategory)}>Price</h3>

        </div>
    );
}

export default ProductFilter;