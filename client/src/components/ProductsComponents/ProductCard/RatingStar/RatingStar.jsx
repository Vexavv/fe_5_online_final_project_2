import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {useState, useEffect} from "react";

export default function RatingStar() {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem("value")) || 2)
    const handleRatingChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value));
    }, [value]);
    return (
        <Stack spacing={1}>
            <Rating sx={{color:"#ba933e",marginBottom: 2,  display: { xs: 'none', sm: 'none', md: 'flex' },}} name="size-medium" value={value} onChange={handleRatingChange} />
        </Stack>
    );
}
