import React, {useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';
import {useSelector, useDispatch} from "react-redux";
import {changePrice} from '../../../store/productsSlice'

function ProductCheckBox(props) {
    const dispatch = useDispatch()
    const price = useSelector(state => state.products.filterBy.price)

    const [visible, setVisible] = useState(false)
    const [checked, setChecked] = useState({
        one: false,
        two: false,
        three: false,
        four: false
    })
    const {one, two, three, four} = checked;

    const handleChange = (event) => {
        dispatch(changePrice({price: event.target.name}))
        setChecked({
            ...checked,
            [event.target.name]: event.target.checked,
        });
        if (event.target.name !== null) {
            setVisible(true);
        }
    };

    const offCheck = () => {
        setVisible(false)
        dispatch(changePrice({price: null}));
        setChecked({
            one: false,
            two: false,
            three: false,
            four: false
        })

    }
    // console.log('PRICE >>>>',price)
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
                                      label="51$-100$"/>
                    <FormControlLabel sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Checkbox checked={three} onChange={handleChange} name="three"
                                                         icon={<RadioButtonUncheckedIcon/>}
                                                         checkedIcon={<CheckCircleIcon sx={{color: "#ba933e"}}/>}/>}
                                      label="101$-150$"/>
                    <FormControlLabel sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Checkbox checked={four} onChange={handleChange} name="four"
                                                         icon={<RadioButtonUncheckedIcon/>}
                                                         checkedIcon={<CheckCircleIcon sx={{color: "#ba933e"}}/>}/>}
                                      label="151$-250$"/>
                </FormGroup>
            </FormControl>
        </>

    );
}

export default ProductCheckBox;