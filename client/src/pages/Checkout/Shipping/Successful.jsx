import React from 'react';
import { Link } from 'react-router-dom';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import {
  Container,
  Card,
  Box,
  CardContent,
  Typography,
  Grid,
  Button,
} from '@mui/material';

const Successful = () => {

  return (
    <Container sx={{ margin: 3 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
      >
        <Grid item xs={12}>
          <DoneOutlineIcon color="primary" size="large" />
        </Grid>
        <Grid item xs={6}>
          Success
        </Grid>

        <Grid item xs={6}>
          You have successfully made an order !
        </Grid>

        <Grid item xs={6}>
          Congrats on making your purchase
        </Grid>
        <Grid item md={6} xs={12}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/"
          >
            Continue shopping
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Successful;
