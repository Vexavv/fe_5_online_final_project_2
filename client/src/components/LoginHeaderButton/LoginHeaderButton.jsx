import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IconButton, Box, Typography } from '@mui/material';
import PersonOutline from '@mui/icons-material/PersonOutline';



const Login = () => {
    return (
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="black"
                component={Link} to='/login'
                sx={{
                    '&:hover': { color: '#BA933E' },
                    
                }}
            >
                <PersonOutline />
            </IconButton>
            <Typography
            component={Link} to='/login'
            sx={{
                display:{xs:"none", sm:'none', md:"flex"},
                color: "#1A1A1A",
                fontSize: '14px',
                fontFamily: 'Red Hat Display',
                textAlign:'center',
                alignItems: 'center',
                marginRight: '5px',
                '&:hover': { color: '#BA933E' }
               
            }}>
                Login
            </Typography>
            <Typography 
            component={Link} to='/login'
            sx={{
                display:{xs:"none", sm:'none', md:"flex"},
                color: "#1A1A1A",
                fontSize: '14px',
                fontFamily: 'Red Hat Display',
                textAlign:'center',
                alignItems: 'center',
                '&:hover': { color: '#BA933E' }
            }}>
                Sign In
            </Typography>

        </Box>
    )
}

export default Login