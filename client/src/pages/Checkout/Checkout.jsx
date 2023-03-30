import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Contact } from './Contact/Contact';
import Shipping from './Shipping/Shipping';
import Total from './Total/Total';

const Checkout = () => {
  const INITIAL_FORM_STATE = {
    firstName: '',
    lastName: '',
    email: '',
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
