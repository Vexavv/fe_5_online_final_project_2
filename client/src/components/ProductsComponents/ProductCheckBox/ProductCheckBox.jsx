import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';
import {useSelector, useDispatch} from "react-redux";
import {hideCheckBoxPrice, selectCheckBoxPrice} from "../../../store/productsFiltersSlice";

function ProductCheckBox(props) {
const dispatch = useDispatch()
    const visible = useSelector(state => state.productsFilters.visibleCheckBoxOff)
    const state = useSelector(state => state.productsFilters.checkBoxPriceValue)

    const offCheck = () => {
        dispatch(hideCheckBoxPrice())
    }

    const handleChange = (event) => {
       dispatch(selectCheckBoxPrice(event))
    };
    const {one, two, three, four} = state;

    return (
        <>
            {visible && <CancelIcon
                sx={{color: "#ba933e", cursor: "pointer", marginTop: "10px", display: "block", float: "right"}}
                onClick={offCheck}/>}
            <FormControl>
                <FormLabel focused={false} sx={{
                    color: "#1A1A1A",
                    fontSize: 18,
                    fontWeight: 700,
                    lineHeight: 2,
                    padding: "50px 0 10px 0"
                }}>Price</FormLabel>
                <FormGroup>

                    <FormControlLabel sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Checkbox checked={one} onChange={handleChange} name="one"
                                                         icon={<RadioButtonUncheckedIcon/>}
                                                         checkedIcon={<CheckCircleIcon sx={{color: "#ba933e"}}/>}/>}
                                      label="0$-50$"/>
                    <FormControlLabel sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Checkbox checked={two} onChange={handleChange} name="two"
                                                         icon={<RadioButtonUncheckedIcon/>}
                                                         checkedIcon={<CheckCircleIcon sx={{color: "#ba933e"}}/>}/>}
                                      label="50$-100$"/>
                    <FormControlLabel sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Checkbox checked={three} onChange={handleChange} name="three"
                                                         icon={<RadioButtonUncheckedIcon/>}
                                                         checkedIcon={<CheckCircleIcon sx={{color: "#ba933e"}}/>}/>}
                                      label="100$-150$"/>
                    <FormControlLabel sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Checkbox checked={four} onChange={handleChange} name="four"
                                                         icon={<RadioButtonUncheckedIcon/>}
                                                         checkedIcon={<CheckCircleIcon sx={{color: "#ba933e"}}/>}/>}
                                      label="150$-250$"/>
                </FormGroup>
            </FormControl>
        </>

    );
}

export default ProductCheckBox;