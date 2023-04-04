import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const ContactLogged = () => {
  const isLogged = useSelector((state) => state.isLogged.isLogged.success);

  if (isLogged) {
    return null;
  }
  return (
    <Typography variant="subtitle2" align="right">
      Already have an account? <Link to={'/login'}>Log in</Link>
    </Typography>
  );
};

export default ContactLogged;
