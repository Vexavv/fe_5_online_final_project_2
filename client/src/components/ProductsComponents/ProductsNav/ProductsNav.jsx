import React from 'react';
import styles from './ProductsNav.module.scss'
import TuneIcon from "@mui/icons-material/Tune";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import SelectSort from "../SelectSort/SelectSort";
import {changeDisplay, changeDisplayList} from "../../../store/productsSlice";
import {useDispatch} from "react-redux";
function ProductsNav(props) {

    const dispatch = useDispatch()
    const handlerChangeDisplay = () => {
        dispatch(changeDisplay())
    }
    const handlerChangeDisplayList = () => {
        dispatch(changeDisplayList())
    }
    return (
        <nav className={styles.Nav}>
            <div className={styles.NavFilter}>
                <TuneIcon sx={{display:{xs:'flex', sm:'flex', md:'none'}, color: '#ba933e', marginRight:1}}/>
                <span className={styles.NavFilterText}>Filter</span>
                <ToggleButtons changeDisplayList={handlerChangeDisplayList}
                               changeDisplay={handlerChangeDisplay}/>
            </div>
            <SelectSort/>
        </nav>
    );
}

export default ProductsNav;