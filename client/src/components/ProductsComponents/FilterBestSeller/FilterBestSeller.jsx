import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';


function FilterBestSeller(props) {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
        if (event.target.value !== '') {
            setVisible(true)
        }
    };

    const offRadio = () => {
        setVisible(false)
        setValue("")
    }

    return (

        <>
            {visible && <CancelIcon sx={{color: "#ba933e", cursor: "pointer", marginTop:"10px", display:"block", float:"right"}} onClick={offRadio}/>}
            <FormControl>
                <FormLabel sx={{color: "#1A1A1A", fontSize: {xs:'17px', md:'18px'}, fontWeight: 700, lineHeight: 2,padding: "50px 0 10px 0"}}
                           focused={false}
                           id="demo-radio-buttons-group-label">Best Products</FormLabel>
                <RadioGroup

                    name="controlled-radio-buttons-group"
                    value={value}
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