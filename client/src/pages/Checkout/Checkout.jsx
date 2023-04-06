import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Contact } from './Contact/Contact';
import Shipping from './Shipping/Shipping';
import Total from './Total/Total';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetCustomer } from '../../store/slices/customerSlice';
import { BASE_URL } from '../../constants/api';

const Checkout = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.customer);

  const INITIAL_FORM_STATE = {
    firstName: customer.firstName || '',
    lastName: customer.lastName || '',
    email: customer.email || '',
    // firstName: '',
    // lastName: '',
    // email: '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    postalCode: '',
  };

  const [data, setData] = useState(INITIAL_FORM_STATE);
  const [curentStep, setCurentStep] = useState(0);

  // useEffect(() => {
  //   async function getProduct() {
  //     const res = await fetch(`${BASE_URL}/customers/customer`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization:
  //           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjU5MjYwNzUyOTU0MmE5ODI2ZjVlMiIsImZpcnN0TmFtZSI6InRlc3R0dHciLCJsYXN0TmFtZSI6InRlc3R0dHciLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjgwNDU0MDE4LCJleHAiOjE2ODA0OTAwMTh9._f-hbleI0IIfAdq3SkTwTXvAPmclf6HV8oR75VBqyYQ',
  //       },
  //     });
  //     const data2 = await res.json();
  //     console.log('firstName', data2.firstName);
  //     setData((prevData) => ({
  //       ...prevData,
  //       lastName: data2?.lastName || '',
  //       email: data2?.email || '',
  //     }));
  //   }
  //   getProduct();
  // }, []);

  const handleNextStep = (value) => {
    setData((prev) => ({ ...prev, ...value }));
    setCurentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurentStep((prev) => prev - 1);
  };

  console.log('customer', customer);

  useEffect(() => {
    dispatch(fetchGetCustomer());
  }, [dispatch]);

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      firstName: customer?.firstName || '',
      lastName: customer?.lastName || '',
      email: customer?.email || '',
    }));
  }, [customer]);

  console.log('data', data);

  const step = [
    <Contact value={0} next={handleNextStep} data={data} />,
    <Shipping value={curentStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <>
      <Container sx={{ bgcolor: '#white', marginTop: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
            {step[curentStep]}
          </Grid>

          <Grid item xs={12} sm={5}>
            <Total />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Checkout;
