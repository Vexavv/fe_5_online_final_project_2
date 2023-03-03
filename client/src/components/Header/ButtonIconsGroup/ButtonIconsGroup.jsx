import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Button from '../../Button/Button'
import Login from '../../Login/Login'
import {ButtonGroup, Badge, IconButton } from '@mui/material';
// import  from '@mui/material/Badge';
// import  from '@mui/material/IconButton';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ButtonIconsGroup = () => {
    return (
        <ButtonGroup variant="text" aria-label="text button group">

           <Login/>
           
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link}  to='/cart'
                color="black"
                sx={{
                    '&:hover': {color: '#BA933E'}
                }}
            >
                <Badge badgeContent={4} sx={{
                    color: "gray",
                    '&:hover': {color: '#BA933E'}
                }}>
                    <AddShoppingCartIcon />
                </Badge>
            </IconButton>
        </ButtonGroup>
    )
}
export default ButtonIconsGroup