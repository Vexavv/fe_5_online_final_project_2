import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../../store/productsSlice";

const theme = createTheme({
    palette: {
        gold: {
            main: '#ba933e',
        },
    },
});
function ProductPagination(props) {

    const dispatch = useDispatch()
    const page = useSelector(state => state.products.page)
    const totalPages = useSelector(state => state.products.totalPages)

    const handlePageChange = (event, value) => {
      dispatch(setPage(value))
    };


    return (
        <ThemeProvider theme={theme} >
        <Stack sx={{padding:"15px 0 50px 0"}} spacing={2}>
            <Pagination color="gold" count={4} onChange={handlePageChange}  page={page} variant="outlined" shape="rounded" />
        </Stack>
        </ThemeProvider>
    );
}

export default ProductPagination;