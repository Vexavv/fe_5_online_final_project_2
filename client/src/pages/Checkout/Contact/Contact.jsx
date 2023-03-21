import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import s from './Contact.module.scss';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Checkbox,
  TextField,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

const theme = createTheme({
  palette: {
    primary: {
      main: '#141414',
      darker: '#212121',
    },
    secondary: {
      main: '#212121',
      contrastText: '#ffcc00',
    },
  },
});

export const Contact = ({ next, data }) => {
  const formik = useFormik({
    initialValues: {
      ...data,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      next(values);
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card className={s.cardForm} sx={{ marginTop: 0, paddingRight: 5 }}>
          <CardContent sx={{ paddingY: 10, paddingX: 1 }}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" align="left">
                    Contact information
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" align="right">
                    Already have an account? Log in
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={1}>
                  <Checkbox />
                </Grid>
                <Grid item xs={11}>
                  <Typography
                    sx={{ marginTop: 1.2 }}
                    variant="subtitle2"
                    align="left"
                  >
                    Email me with news and offers
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" component="h2" align="left">
                    Shipping address
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="country"
                    name="country"
                    label="Country/Region"
                    type="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helperText={formik.touched.country && formik.errors.country}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Address"
                    type="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="apartment"
                    name="apartment"
                    label="Apartment, suite, etc. (optional)"
                    value={formik.values.apartment}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.apartment &&
                      Boolean(formik.errors.apartment)
                    }
                    helperText={
                      formik.touched.apartment && formik.errors.apartment
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="city"
                    name="city"
                    label="City"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    id="postalCode"
                    name="postalCode"
                    label="Postal Code"
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.postalCode &&
                      Boolean(formik.errors.postalCode)
                    }
                    helperText={
                      formik.touched.postalCode && formik.errors.postalCode
                    }
                  />
                </Grid>
                <Grid item xs={1}>
                  <Checkbox />
                </Grid>
                <Grid item xs={11}>
                  <Typography
                    sx={{ marginTop: 1.2 }}
                    variant="subtitle2"
                    align="left"
                  >
                    Save this information for next time
                  </Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: 3 }} spacing={2}>
                <Grid item md={6}>
                  <Button
                    startIcon={<ArrowBackIosIcon />}
                    component={Link}
                    to="/cart"
                  >
                    Return to cart
                  </Button>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Continue to shipping
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
};
