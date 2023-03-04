import React, {useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';

function ProductCheckBox(props) {
    const [state, setState] = useState({
        one: false,
        two: false,
        three: false,
        four: false
    });
    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
        if(event.target.name !== ''){setVisible(true)}
    };
    const {one, two, three, four} = state;

    const [visible, setVisible] = useState(false)
    const offCheck = () => {
        setVisible(false)
        setState({
            one: false,
            two: false,
            three: false,
            four: false
        })
    }
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