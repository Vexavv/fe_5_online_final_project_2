import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import Link from '@mui/material/Link';
import styles from "./Navigation.module.scss"
import MenuList from '@mui/material/List'
import MenuItem from '@mui/material/ListItem';

const Navigation =(props)=>{   


    return(
        <MenuList sx={{ flexGrow: {md:1, lg:0}, display: { xs: 'flex', sm:'flex', md: 'flex' } }}       
          >
                <MenuItem component={Link}  to='/'
                 sx={{color:"#1A1A1A",
                  '&:hover, active':{color: '#BA933E'} }}>
          
            home
            </MenuItem>
            <MenuItem component={Link}  to='/product' 
             sx={{color:"#1A1A1A", '&:hover, active':{color: '#BA933E'} }}>
           
            product
            </MenuItem>
            <MenuItem component={Link}  to='/wishlist'
                   sx={{color:"#1A1A1A", '&:hover, active':{color: '#BA933E'} }}>
            wishlist
           
            </MenuItem>
                     
            <MenuItem component={Link}  to='/sale'
                   sx={{color:"#1A1A1A", '&:hover, active':{color: '#BA933E'} }}>
           
            sale
            </MenuItem>
            <MenuItem component={Link}  to='/contacts'
                   sx={{color:"#1A1A1A", '&:hover, active':{color: '#BA933E'} }}> 
         
            contacts
            </MenuItem>
            </MenuList>
    )
}

export default Navigation