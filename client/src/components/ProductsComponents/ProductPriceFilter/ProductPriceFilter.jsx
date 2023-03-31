import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography';
import {setMinPrice, setMaxPrice} from "../../../store/slices/productsSlice";
import {useSelector, useDispatch} from "react-redux";
import {debounce} from "lodash";

function valuetext(value1, value2) {
    return `${value1} - ${value2}$`;
}

function ProductPriceFilter(props) {
    const {minPrice, maxPrice} = useSelector(state => state.products.filterBy)
    const dispatch = useDispatch()
    const handleChange = debounce((event, newValue) => {
        dispatch(setMinPrice({ minPrice: newValue[0] }));
        dispatch(setMaxPrice({ maxPrice: newValue[1] }));
    }, 20);
    return (
        <Box sx={{}}>
            <Typography sx={{color: "#1A1A1A", fontSize: 18, fontWeight: 700, lineHeight: 2, padding: "50px 0 10px 0"}}>
                Price {valuetext(minPrice, maxPrice)}
            </Typography>
            <Slider sx={{color: "#ba933e", marginTop: "15px"}}
                    value={[minPrice, maxPrice]}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    max={500}
                    min={1}
            />
        </Box>
    );
}

export default ProductPriceFilter;