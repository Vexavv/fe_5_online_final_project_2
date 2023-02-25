import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss"
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';

const NavigationMobile =()=>{

    return(
        <List>
                <ListItem sx={{color:"#1A1A1A", TypographyClasses: styles.navLink} }>
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink} to='/'>home</NavLink>
            </ListItem>
            <ListItem sx={{color:"#1A1A1A"}}>
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink} to='/shop'>shop</NavLink>
            </ListItem>
            <ListItem sx={{color:"#1A1A1A"}}>
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink} to='/wishlist'>wishlist</NavLink>
            </ListItem>
                     
            <ListItem sx={{color:"#1A1A1A"}}>
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink} to='/sale'>sale</NavLink>
            </ListItem>
            <ListItem sx={{color:"#1A1A1A"}}>   
            <NavLink className={({ isActive })=> isActive ? styles.activeLink :styles.navLink} to='/contacts'>contacts</NavLink>
            </ListItem>
            </List>
    )
}

export default NavigationMobile