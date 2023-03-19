import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography';



import {useSelector, useDispatch} from "react-redux";
function valuetext(value) {
    return `${value}$`;
}


function ProductPriceFilter(props) {
    const dispatch = useDispatch()
    const [value, setValue] =useState([0, 500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ }}>
            <Typography sx={{color: "#1A1A1A", fontSize: 18, fontWeight: 700, lineHeight: 2, padding: "50px 0 10px 0"}}>
                Price {valuetext(value)}
            </Typography>
            <Slider sx={{color: "#ba933e"}}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              max={500}
            />
        </Box>
    );
}

export default ProductPriceFilter;