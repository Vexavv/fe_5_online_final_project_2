import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import {useDispatch, useSelector} from "react-redux";
import {changeColor} from "../../../store/slices/productsSlice";

function RadioButtonColor(props) {
    const dispatch= useDispatch()
    const color = useSelector(state => state.products.filterBy.color)
    const [visibleColor, setVisibleColor] =useState(JSON.parse(localStorage.getItem("visibleColor")) || false)
    const handleChange = (event) => {
        dispatch(changeColor({color: event.target.value}));
        if (event.target.value !== '') {
            setVisibleColor(true);
            localStorage.setItem('visibleColor', JSON.stringify(true))
        }
    };
    const offRadio = () => {
       setVisibleColor(false)
        localStorage.setItem('visibleColor', JSON.stringify(false))
        dispatch(changeColor({color:''}));
    }
    return (
        <>
            {visibleColor && <CancelIcon sx={{color: "#ba933e", cursor: "pointer", marginTop:"10px", display:"block", float:"right" }} onClick={offRadio}/>}
            <FormControl  >
                <FormLabel
                    sx={{color: "#1A1A1A", fontSize: 18, fontWeight: 700, lineHeight: 2, padding: "50px 0 10px 0"}}
                    focused={false}
                    id="demo-radio-buttons-group-label">Color</FormLabel>
                <RadioGroup
                    sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                    row
                    name="controlled-radio-buttons-group"
                    value={color}
                    onChange={handleChange}>
                    <Radio  value="black" icon={<Brightness1Icon sx={{color: 'black'}}/>} checkedIcon={<CheckCircleIcon
                        sx={{color: 'black', alignItems: "center"}}/>}/>
                    <Radio value="brown" icon={<Brightness1Icon sx={{color: 'saddlebrown'}}/>} checkedIcon={<CheckCircleIcon
                        sx={{color: 'saddlebrown'}}/>}/>
                    <Radio value="grey" icon={<Brightness1Icon sx={{color: 'grey'}}/>} checkedIcon={<CheckCircleIcon
                        sx={{color: 'grey'}}/>}/>
                    <Radio value="white" icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleOutlineIcon
                        sx={{color: "black"}}/>}/>
                    <Radio value="yellow" icon={<Brightness1Icon sx={{color: 'gold'}}/>} checkedIcon={<CheckCircleIcon
                        sx={{color: 'gold'}}/>}/>
                </RadioGroup>
            </FormControl>
        </>
    );
}

export default RadioButtonColor;