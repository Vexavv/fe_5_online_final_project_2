import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import s from './Shipping.module.scss';

import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const Contact = ({ prev, data, orderData }) => {
  const { email, address, apartment, city, country, postalCode } = data;

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Card className={s.cardForm} sx={{ marginTop: 0, paddingRight: 5 }}>
        <CardContent sx={{ paddingY: 10, paddingX: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography variant="h6" align="left">
                Contact:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" align="left">
                {email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                className={s.btn}
                type="submit"
                onClick={() => {
                  prev();
                  console.log('ggg');
                }}
                variant="h7"
              >
                Change
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" align="left">
                <hr />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6" align="left">
                Ship to:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6" align="left">
                {`${address} ${apartment} ${city} ${postalCode} ${country}`}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                className={s.btn}
                type="submit"
                onClick={() => {
                  prev();
                  console.log('ggg');
                }}
                variant="h7"
              >
                Change
              </Typography>
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 3 }} spacing={2}>
            <Grid item md={6}>
              <Button
                startIcon={<ArrowBackIosIcon />}
                type="submit"
                fullWidth
                variant="text"
                color="secondary"
                size="large"
                onClick={() => {
                  prev();
                }}
              >
                Return to information
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <Button
                onClick={() => {
                  console.log('orderData', orderData);
                }}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                to="/successful"
              >
                Complete order
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Contact;
