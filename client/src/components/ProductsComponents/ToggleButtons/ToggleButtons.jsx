import React,{useState, useEffect} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AppsIcon from "@mui/icons-material/Apps";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import styles from './ToggleButton.module.scss'
 import {toggleDisplay} from "../../../store/productsSlice";
import {useDispatch} from "react-redux";



function ToggleButtons() {
    const dispatch = useDispatch()

    const [view, setView] = useState(JSON.parse(localStorage.getItem("view")) ||'module');
    const handleChange = (event, nextView) => {
        setView(nextView);
        localStorage.setItem('view', JSON.stringify(nextView));
    };

    return (
        <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleChange}
            sx={{display: {xs:'none', sm:'flex'},marginLeft:{sm:1,md:0}}}
        >
            <ToggleButton sx={{border: 'none', }} onClick={()=>{dispatch(toggleDisplay(true))}}  value="module" aria-label="module" className={styles.P}  data-title='Module' >
                <AppsIcon />
            </ToggleButton>
            <ToggleButton sx={{border: 'none'}} onClick={()=>{dispatch(toggleDisplay(false))}}  value="list" aria-label="list"  className={styles.P}  data-title='List'>
                <FormatListBulletedIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToggleButtons;