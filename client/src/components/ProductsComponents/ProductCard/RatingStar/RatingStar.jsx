import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingStar() {
    return (
        <Stack spacing={1}>
            <Rating sx={{color:"#ba933e",marginBottom: 2,  display: { xs: 'none', sm: 'none', md: 'flex' },}} name="size-medium" defaultValue={2} />
        </Stack>
    );
}
