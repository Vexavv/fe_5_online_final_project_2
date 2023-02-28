import React,{useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function RadioButton(props) {
    const [value, setValue] = useState('all');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormControl>
            <RadioGroup
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}>
                <FormControlLabel value="all" control={<Radio icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon
                    sx={{color: 'black'}}/>} />}  label="All Categories" />
                <FormControlLabel value="furniture" control={<Radio icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon
                    sx={{color: 'black'}}/>}/>} label="Furniture" />
                <FormControlLabel value="chairs" control={<Radio icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon
                    sx={{color: 'black'}}/>}/>} label="Chairs" />
                <FormControlLabel value="sofas" control={<Radio icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon
                    sx={{color: 'black'}}/>}/>} label="Sofas" />
                <FormControlLabel value="lamp" control={<Radio icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon
                    sx={{color: 'black'}}/>}/>} label="Lighting Lamp" />
                <FormControlLabel value="decor" control={<Radio icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon
                    sx={{color: 'black'}}/>}/>} label="Decor" />
            </RadioGroup>
        </FormControl>
    );
}

export default RadioButton;