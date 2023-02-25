import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss"
import Menu from '@mui/material/List'
import MenuItem from '@mui/material/ListItem';

const Navigation =(props)=>{

    const {mobile} = props


    return(
        <Menu sx={{ flexGrow: {md:1, lg:0}, display: { xs: 'none', sm:'none', md: 'flex' } }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}>
                <MenuItem >
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink }  to='/'>home</NavLink>
            </MenuItem>
            <MenuItem >
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink} to='/shop'>shop</NavLink>
            </MenuItem>
            <MenuItem >
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink} to='/wishlist'>wishlist</NavLink>
            </MenuItem>
                     
            <MenuItem >
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink} to='/sale'>sale</NavLink>
            </MenuItem>
            <MenuItem >   
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink} to='/contacts'>contacts</NavLink>
            </MenuItem>
            </Menu>
    )
}

export default Navigation