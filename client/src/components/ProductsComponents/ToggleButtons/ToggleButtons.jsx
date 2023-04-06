import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AppsIcon from "@mui/icons-material/Apps";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import styles from './ToggleButton.module.scss'
import {toggleDisplayType} from "../../../store/slices/productsSlice";
import {useDispatch} from "react-redux";

function ToggleButtons() {
    const dispatch = useDispatch()
    const [view, setView] = useState(JSON.parse(localStorage.getItem("view")) || 'module');
    const handleChange = (event, nextView) => {
        setView(nextView);
        localStorage.setItem('view', JSON.stringify(nextView));
    };
    return (
        <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleChange}
            sx={{display: {xs: 'none', sm: 'flex'}, marginLeft: {sm: 1, md: 0}}}
        >
            <ToggleButton sx={{border: 'none',}} onClick={() => {
                dispatch(toggleDisplayType(true))
            }} value="module" aria-label="module" className={styles.P} data-title='Module'>
                <AppsIcon/>
            </ToggleButton>
            <ToggleButton sx={{border: 'none'}} onClick={() => {
                dispatch(toggleDisplayType(false))
            }} value="list" aria-label="list" className={styles.P} data-title='List'>
                <FormatListBulletedIcon/>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToggleButtons;