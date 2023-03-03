import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import {IconButton, Box} from '@mui/material';
import PersonOutline from '@mui/icons-material/PersonOutline';


const Login =()=>{
return(
    <Box  sx={{display:{xs:'flex', sm:'flex', md:'flex'}}}>
    <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"                
    color="black"
    component={Link}  to='/login'
    sx={{
        '&:hover': {color: '#BA933E'}
    }}
>
     <PersonOutline />
</IconButton>
 <Button
 className={'LogInButton'} onClick={()=>{}} text={'Login'} type={'button'}  
 />
 <Button
 className={'SighInButton'} onClick={()=>{}} text={'Sign In'} type={'button'} />
 </Box>
)
}

export default Login