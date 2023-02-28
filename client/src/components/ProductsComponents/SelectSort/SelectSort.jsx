import React from 'react';
import styles from './SelectSort.module.scss'
function SelectSort(props) {

    return (
        <select className={styles.Select}>
            <option value={1}>Sorting</option>
            <option value={10}>Featured</option>
            <option value={20}>Best selling</option>
            <option value={30}>Alphabetically, A-Z</option>
            <option value={40}>Alphabetically, Z-A</option>
            <option value={50}>Price, low to high</option>
            <option value={60}>Price, high to low</option>
            <option value={70}>Date, new to old</option>
            <option value={80}>Date, old to new</option>
        </select>

    );
}

export default SelectSort;