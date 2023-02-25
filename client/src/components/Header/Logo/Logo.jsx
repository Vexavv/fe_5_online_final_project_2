import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Logo =()=>{
return(
    <Typography
            variant="h5"
            noWrap
            component={Link}  to='/'
            sx={{
              mr: 3,
              display: { xs: 'flex', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            RUBIX
          </Typography>
)
}

export default Logo