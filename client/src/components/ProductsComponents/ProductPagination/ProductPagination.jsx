import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        gold: {
            main: '#ba933e',
        },
    },
});
function ProductPagination(props) {
    return (
        <ThemeProvider theme={theme} sx={{marginLeft: "200px"}}>
        <Stack sx={{padding:"15px 0 50px 0"}} spacing={2}>
            <Pagination color="gold" count={4} variant="outlined" shape="rounded" />
        </Stack>
        </ThemeProvider>
    );
}

export default ProductPagination;