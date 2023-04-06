import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Contact } from './Contact/Contact';
import Shipping from './Shipping/Shipping';
import Total from './Total/Total';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetCustomer } from '../../store/slices/customerSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.customer);
  const checkoutProduct = useSelector((state) => state.card.products);

  const INITIAL_FORM_STATE = {
    firstName: customer.firstName || '',
    lastName: customer.lastName || '',
    email: customer.email || '',
    address: '',
    apartment: '',
    city: '',
    country: '',
    postalCode: '',
  };

  const [data, setData] = useState(INITIAL_FORM_STATE);
  const [curentStep, setCurentStep] = useState(0);

  const handleNextStep = (value) => {
    setData((prev) => ({ ...prev, ...value }));
    setCurentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurentStep((prev) => prev - 1);
  };

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

  const orderData = {
    customer: {
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
    },
    shipping: {
      name: 'International',
      street: data.address,
      city: data.city,
      zipCode: data.postalCode,
      country: data.country,
    },
    products: checkoutProduct,
  };

  const step = [
    <Contact value={0} next={handleNextStep} data={data} />,
    <Shipping
      value={curentStep}
      prev={handlePrevStep}
      data={data}
      orderData={orderData}
    />,
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
