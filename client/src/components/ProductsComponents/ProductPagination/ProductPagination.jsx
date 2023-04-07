import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../../store/slices/productsSlice';
import { PAGE_SIZE } from '../../../constants/constants';

function ProductPagination({ data }) {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.products);
  const handlePageChange = (event, value) => {
    dispatch(setPage(value));
  };

  const count = Math.ceil(data / PAGE_SIZE);

  return (
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
  );
}
export default ProductPagination;
