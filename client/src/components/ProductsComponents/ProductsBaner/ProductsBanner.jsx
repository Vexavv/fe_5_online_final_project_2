import React from 'react';
import styles from './ProductsBanner.module.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


function ProductsBanner(props) {
    const category = useSelector(state => state.products.filterBy.category)
    // console.log(value)
    return (
        <div  className={styles.Banner}>
            <div className={styles.BannerContainer}>
                <nav className={styles.BannerContainerNav}>
                    <h1 className={styles.BannerContainerNavTitle}>{category}</h1>
                    <ul className={styles.BannerContainerNavLink}>
                        <li className={styles.BannerContainerNavLinkItem}><Link
                            to='/'>Home</Link>
                        </li>
                        <li className={styles.BannerContainerNavLinkItem}>
                            <span>{category}</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default ProductsBanner;