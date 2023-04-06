import React from 'react';
import styles from './SelectSort.module.scss'
import {sortingProducts} from "../../../store/slices/productsSlice";
import {useDispatch, useSelector} from "react-redux";

function SelectSort(props) {
    const dispatch = useDispatch()
    const sort =useSelector(state =>state.products.filterBy.sort)
    const handleChange = (event) => {
        dispatch(sortingProducts({sort: event.target.value}));
    };

    return (
        <select className={styles.Select} onChange={handleChange} value={sort}>
            <option value={''}>Sorting</option>
            <option value={'+name'}>Alphabetically, A-Z</option>
            <option value={'-name'}>Alphabetically, Z-A</option>
            <option value={'+currentPrice'}>Price, low to high</option>
            <option value={'-currentPrice'}>Price, high to low</option>
        </select>
    );
}

export default SelectSort;