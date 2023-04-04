import React, {useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../../store/slices/productsSlice";
import {PAGE_SIZE} from '../../../constants/constants'


// const theme = createTheme({
//     palette: {
//         gold: {
//             main: '#ba933e',
//         },
//     },
// });

function ProductPagination({data}) {

    const dispatch = useDispatch()
    const {page} = useSelector(state => state.products)
    const handlePageChange = (event, value) => {
        dispatch(setPage(value))
    };

    const count = Math.ceil(data / PAGE_SIZE)

    return (
        // <ThemeProvider theme={theme}>
        <Stack sx={{ padding: '15px 0 50px 0' }} spacing={2}>
            <Pagination
                color="primary"
                count={count}
                onChange={handlePageChange}
                page={page}
                variant="outlined"
                shape="rounded"
            />
        </Stack>
        // </ThemeProvider>
    );
}
export default ProductPagination;