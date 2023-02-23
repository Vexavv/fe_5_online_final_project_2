import React,{useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AppsIcon from "@mui/icons-material/Apps";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import styles from './ToggleButton.module.scss'

function ToggleButtons(props) {
    const [view, setView] = useState('module');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };
    return (
        <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton sx={{border: 'none'}} value="module" aria-label="module" className={styles.P}  data-title='Module' >
                <AppsIcon />
            </ToggleButton>
            <ToggleButton sx={{border: 'none'}} value="list" aria-label="list"  className={styles.P}  data-title='List'>
                <FormatListBulletedIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToggleButtons;