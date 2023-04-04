import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { changeCategory} from "../../../store/slices/productsSlice";
import {useDispatch, useSelector} from "react-redux";

function RadioButton(props) {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.products.filterBy.categories)
    const handleChange = (event) => {
        dispatch(changeCategory({categories: event.target.value}));
    };
    return (
        <FormControl>
            <FormLabel sx={{color: "#1A1A1A", fontSize: {xs: '17px', md: '18px'}, fontWeight: 700, lineHeight: 2,}}
                       focused={false}
                       id="demo-radio-buttons-group-label">Product Categories</FormLabel>
            <RadioGroup
                name="controlled-radio-buttons-group"
                value={categories}
                onChange={handleChange}>

                <FormControlLabel value="all"
                                  control={<Radio icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                      sx={{color: 'black'}}/>}/>} label="All Categories"/>
                <FormControlLabel value="furniture"
                                  control={<Radio icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                      sx={{color: 'black'}}/>}/>} label="Furniture"/>
                <FormControlLabel value="chairs"
                                  control={<Radio icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                      sx={{color: 'black'}}/>}/>} label="Chairs"/>
                <FormControlLabel value="sofas"
                                  control={<Radio icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                      sx={{color: 'black'}}/>}/>} label="Sofas"/>
                <FormControlLabel value="lamps"
                                  control={<Radio icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                      sx={{color: 'black'}}/>}/>} label="Lighting Lamp"/>
                <FormControlLabel value="decor"
                                  control={<Radio icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                      sx={{color: 'black'}}/>}/>} label="Decor"/>
            </RadioGroup>
        </FormControl>
    );
}

export default RadioButton;