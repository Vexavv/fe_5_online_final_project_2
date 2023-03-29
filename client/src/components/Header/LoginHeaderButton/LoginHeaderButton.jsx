import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Box, Typography } from '@mui/material';
import PersonOutline from '@mui/icons-material/PersonOutline';
import HowToReg from '@mui/icons-material/HowToReg';
import { loguotCustomer } from '../../../store/slices/loginSlice'


const Login = () => {
    const isLogged = useSelector(state => state.isLogged.isLogged.success)
    const dispatch = useDispatch()

    const LogOutAccount = () => {
        dispatch(loguotCustomer())
    }

    return (
        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' } }}>
            {/* button icon */}
            {!isLogged &&
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
                </IconButton>}

            {isLogged &&
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="black"
                    component={Link} to='/myaccount'
                    sx={{
                        '&:hover': { color: '#BA933E' },
                    }}
                >
                    <HowToReg />
                </IconButton>
            }

            {/* button login */}
            {!isLogged &&
                <Typography
                    component={Link} to='/login'
                    sx={{
                        display: { xs: "none", sm: 'none', md: "flex" },
                        color: "#1A1A1A",
                        fontSize: '14px',
                        fontFamily: 'Red Hat Display',
                        textAlign: 'center',
                        alignItems: 'center',
                        marginRight: '5px',
                        '&:hover': { color: '#BA933E' }

                    }}>
                    Login
                </Typography>}

            {isLogged &&
                <Typography
                    onClick={LogOutAccount}
                    sx={{
                        display: { xs: "none", sm: 'none', md: "flex" },
                        color: "#1A1A1A",
                        fontSize: '14px',
                        fontFamily: 'Red Hat Display',
                        textAlign: 'center',
                        alignItems: 'center',
                        marginRight: '5px',
                        '&:hover': { color: '#BA933E' }

                    }}>
                    Logout
                </Typography>
            }

            {/* button signin */}
            {!isLogged &&
                <Typography
                    component={Link} to='/login'
                    sx={{
                        display: { xs: "none", sm: 'none', md: "flex" },
                        color: "#1A1A1A",
                        fontSize: '14px',
                        fontFamily: 'Red Hat Display',
                        textAlign: 'center',
                        alignItems: 'center',
                        '&:hover': { color: '#BA933E' }
                    }}>
                    Sign In
                </Typography>
            }

            {isLogged &&
                <Typography
                    component={Link} to='/favorites'
                    sx={{
                        display: { xs: "none", sm: 'none', md: "flex" },
                        color: "#1A1A1A",
                        fontSize: '14px',
                        fontFamily: 'Red Hat Display',
                        textAlign: 'center',
                        alignItems: 'center',
                        '&:hover': { color: '#BA933E' }
                    }}>
                    MyWishlist
                </Typography>
            }
        </Box>
    )
}

export default Login