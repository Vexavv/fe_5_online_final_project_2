import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import ButtonGroup from '@mui/material/ButtonGroup';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ButtonIconsGroup = () => {
    return (
        <ButtonGroup variant="text" aria-label="text button group">

            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"                
                color="black"
                component={Link}  to='/login'
                sx={{
                    '&:hover': {
                        color: '#BA933E',
                    }
                }}
            >
                <PersonOutlineIcon />
            </IconButton>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link}  to='/cart'
                color="black"
                sx={{
                    '&:hover': {
                        color: '#BA933E',
                    }
                }}
            >
                <Badge badgeContent={4} sx={{
                    color: "gray",
                    '&:hover': {
                        color: '#BA933E',
                    }
                }}>
                    <AddShoppingCartIcon />
                </Badge>
            </IconButton>
        </ButtonGroup>
    )
}
export default ButtonIconsGroup