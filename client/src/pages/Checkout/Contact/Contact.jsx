import React from 'react';

import { Link } from 'react-router-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ContactLogged from './ContactLogged';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
} from '@mui/material';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Enter a first name'),
  lastName: Yup.string().required('Enter a last name'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Please enter a valid email'),
  address: Yup.string().required('Enter an address'),
  apartment: Yup.string(),
  city: Yup.string().required('Enter a city'),
  country: Yup.string().required('Enter a country'),
  postalCode: Yup.number()
    .integer()
    .typeError('Please enter a valid Postal Code')
    .required('Required'),
});

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.touched && meta.error ? meta.error : '';
  return (
    <TextField
      label={label}
      {...field}
      helperText={errorText}
      error={!!errorText}
      fullWidth
    />
  );
};

export const Contact = ({ next, data }) => {
  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={data}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            next(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" align="left">
                    Contact information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ContactLogged />
                </Grid>

                <Grid item xs={12}>
                  <TextInput name="email" label="Email" type="email" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" component="h2" align="left">
                    Shipping address
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    name="country"
                    label="Country/Region"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextInput name="firstName" label="First Name" />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextInput name="lastName" label="Last Name" />
                </Grid>

                <Grid item xs={12}>
                  <TextInput name="address" label="Address" type="text" />
                </Grid>
                <Grid item xs={12}>
                  <TextInput
                    name="apartment"
                    label="Apartment, suite, etc. (optional)"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput name="city" label="City" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextInput name="postalCode" label="Postal Code" />
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 3 }} spacing={2}>
                <Grid item md={6}>
                  <Button
                    startIcon={<ArrowBackIosIcon />}
                    component={Link}
                    to="/cart"
                    color="secondary"
                  >
                    Return to cart
                  </Button>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                    disabled={isSubmitting}
                  >
                    Continue to shipping
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};
