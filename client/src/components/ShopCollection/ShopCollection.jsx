import React from 'react';
import styles from './ShopCollection.module.scss';

function ShopCollection(props) {
    return (
        <div className={styles.container}>
            <img src="https://cdn.shopify.com/s/files/1/0376/9440/6700/products/21_2_360x.jpg?v=1598253084" alt="" />
            <div className={styles.box}>
                <p className='subtitle'>Quik parcel delivery, <span className='brown'>from $25</span></p>
                <h2 className='title'>Shop The New Brands Up to 40% off now. </h2>
                <button>Shop Collection &#8250;	</button>
            </div>
        </div>
    )
}

export default ShopCollection;