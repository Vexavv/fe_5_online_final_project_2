

import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';
import {useDispatch, useSelector} from "react-redux";
import {changeRadioBest, hideRadioOffBest} from "../../../store/productsFiltersSlice";
import {changeTopProducts} from '../../../store/productsSlice'
function FilterBestSeller(props) {
    const dispatch = useDispatch()
    const topProducts = useSelector(state => state.products.topProducts)
    // const visible = useSelector(state => state.productsFilters.visibleRadioOffBest)
    const [visible, setVisible] =useState(false)
    const handleChange = (event) => {
        dispatch(changeTopProducts({topProducts: event.target.value}))
    };

    // const offRadio = () => {
    //     dispatch(hideRadioOffBest())
    // }

    return (

        <>
            {visible && <CancelIcon sx={{color: "#ba933e", cursor: "pointer", marginTop:"10px", display:"block", float:"right"}} />}
            <FormControl>
                <FormLabel sx={{color: "#1A1A1A", fontSize: {xs:'17px', md:'18px'}, fontWeight: 700, lineHeight: 2,padding: "50px 0 10px 0"}}
                           focused={false}
                           id="demo-radio-buttons-group-label">Best Products</FormLabel>
                <RadioGroup

                    name="controlled-radio-buttons-group"
                    value={topProducts}
                    onChange={handleChange}>

                    <FormControlLabel value="best"
                                      sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Radio  icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                          sx={{color: 'black'}}/>}/>} label="Best Sellers"/>
                    <FormControlLabel value="trending"
                                      sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Radio   icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                          sx={{color: 'black'}}/>}/>} label="Trending Products"/>

                </RadioGroup>
            </FormControl>
        </>

    );
}



export default FilterBestSeller;
