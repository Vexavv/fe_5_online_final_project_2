import React, { useState } from 'react';
import s from './Checkout.module.scss';
import { Container } from '@mui/material';
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
    <Contact
      value={0}
      next={handleNextStep}
      data={data}
    />,
    <Shipping value={curentStep} prev={handlePrevStep} data={data} />,
  ];

  return (
    <>
      <Container sx={{ bgcolor: '#white', paddingY: 3, marginTop: 4 }}>
        <header>
          {/* <div className={s.img}>
            <img
              src="https://res.cloudinary.com/dj9e1wjcg/image/upload/v1679346683/Final_project/Logo/logo_x320_vn0uu5.png"
              alt="rubix"
            />
          </div> */}
        </header>
        <div className={s.containerForm}>
          {step[curentStep]}
          <Total />
        </div>
      </Container>
    </>
  );
};

export default Checkout;
