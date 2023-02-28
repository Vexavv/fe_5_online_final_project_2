import React from 'react';
import styles from './ProductsBanner.module.scss'
import {Link} from "react-router-dom";
function ProductsBanner(props) {
    return (
        <div className={styles.Banner}>
            <div className={styles.BannerContainer}>
                <nav className={styles.BannerContainerNav}>
                    <h1 className={styles.BannerContainerNavTitle}>Products</h1>
                    <ul className={styles.BannerContainerNavLink}>
                        <li className={styles.BannerContainerNavLinkItem}><Link
                            to='/'>Home</Link>
                        </li>
                        <li className={styles.BannerContainerNavLinkItem}>
                            <span>  Products</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default ProductsBanner;