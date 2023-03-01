import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Brightness1Icon from '@mui/icons-material/Brightness1';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import CheckIcon from '@mui/icons-material/Check';

function RadioButtonColor(props) {
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormControl>
            <FormLabel sx={{color: "#1A1A1A", fontSize: 18, fontWeight: 700, lineHeight: 2,padding:"50px 0 10px 0"}}
                       focused={false}
                       id="demo-radio-buttons-group-label">Color</FormLabel>
            <RadioGroup
                sx={{'& .MuiSvgIcon-root': {fontSize: 33}, justifyContent: ''}}
                row
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}>
                <Radio value="black" icon={<Brightness1Icon sx={{color: 'black'}}/>} checkedIcon={<CheckCircleIcon
                    sx={{color: 'black', alignItems: "center"}}/>}/>
                <Radio value="blue" icon={<Brightness1Icon sx={{color: 'blue'}}/>} checkedIcon={<CheckCircleIcon
                    sx={{color: 'blue'}}/>}/>
                <Radio value="grey" icon={<Brightness1Icon  sx={{color: 'grey'}}/>} checkedIcon={<CheckCircleIcon
                    sx={{color: 'grey'}}/>}/>
                <Radio value="white" icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleOutlineIcon
                  sx={{color: "black"}}/>}/>
                <Radio value="gold" icon={<Brightness1Icon sx={{color: 'gold'}}/>} checkedIcon={<CheckCircleIcon
                    sx={{color: 'gold'}}/>}/>

            </RadioGroup>
        </FormControl>
    );
}

export default RadioButtonColor;