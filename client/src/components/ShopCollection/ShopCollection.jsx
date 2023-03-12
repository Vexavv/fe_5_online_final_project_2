import React from 'react';
import styles from './ShopCollection.module.scss';

function ShopCollection(props) {
    return (
        <div className={styles.container}>
            <img src="https://res.cloudinary.com/dj9e1wjcg/image/upload/v1677948252/Final_project/Baners/21_2_360x_giiprc.webp" alt="" />
            <div className={styles.containerBox}>
                <p>Quik parcel delivery, <span>from $25</span></p>
                <h2>Shop The New Brands Up to 40% off now. </h2>
                <button>Shop Collection &#8250;	</button>
            </div>
        </div>
    )
}

export default ShopCollection;