import React from 'react';
import styles from './FilterBestSeller.module.scss'
function BestSellerItem({imageUrls, name, currentPrice}) {
    return (
      <div className={styles.Item}>
          <img style={{width: "70px", paddingRight:"10px"}} src={imageUrls[0]} alt='' />
          <div className={styles.ItemTitle}>
              <span className={styles.ItemTitleName}>{name}</span>
              <span className={styles.ItemTitlePrice}>${currentPrice}.00</span>
          </div>

      </div>




    );
}

export default BestSellerItem;