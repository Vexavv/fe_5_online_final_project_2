
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
import {changeBestSeller, changeTrending} from '../../../store/productsSlice'

function FilterBestSeller(props) {
    const dispatch = useDispatch()
    const {bestSeller, trendingProduct} = useSelector(state => state.products.filterBy)

    const [visible, setVisible] =useState(false)
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        const { value } = event.target;
        setSelectedValue(value);
        if (value === "trueBest") {
            dispatch(changeBestSeller({bestSeller: event.target.value}));
            dispatch(changeTrending({ trendingProduct: '' }));
        }
        if(value === "trueTrending"){
            dispatch(changeTrending({trendingProduct: event.target.value}));
            dispatch(changeBestSeller({ bestSeller: '' }));
        }

        if (value !== '') {
            setVisible(true);
        }
    };

    const offRadio = () => {
    setVisible(false)
        setSelectedValue('')
        dispatch(changeBestSeller({bestSeller: ''}));
        dispatch(changeTrending({trendingProduct:''}));
}
    // console.log('TOP PRODUCTS>>>>',trendingProduct)
    // console.log('TOP PRODUCTS>>>>',bestSeller)
    return (

        <>
            {visible && <CancelIcon sx={{color: "#ba933e", cursor: "pointer", marginTop:"10px", display:"block", float:"right"}} onClick={offRadio} />}
            <FormControl>
                <FormLabel sx={{color: "#1A1A1A", fontSize: {xs:'17px', md:'18px'}, fontWeight: 700, lineHeight: 2,padding: "50px 0 10px 0"}}
                           focused={false}
                           id="demo-radio-buttons-group-label">Best Products</FormLabel>
                <RadioGroup

                    name="controlled-radio-buttons-group"
                    value={selectedValue}
                    onChange={handleChange}>

                    <FormControlLabel value="trueBest"
                                      sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Radio  icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                          sx={{color: 'black'}}/>}/>} label="Best Sellers"/>
                    <FormControlLabel value="trueTrending"
                                      sx={{"&:hover": {color: "#ba933e"}}}
                                      control={<Radio   icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon
                                          sx={{color: 'black'}}/>}/>} label="Trending Products"/>

                </RadioGroup>
            </FormControl>
        </>

    );
}



export default FilterBestSeller;


