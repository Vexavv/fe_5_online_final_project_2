import React, { useState } from 'react';
import { Link  } from "react-router-dom";

import styles from "./Navigation.module.scss"
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';

const NavigationMobile =(mobileMenuToggle)=>{

    return(
        <List>
                <ListItem component={Link} to='/'
                 sx={{color:"#1A1A1A", '&:hover':{
                    color: '#BA933E'} }}
                 onClick={mobileMenuToggle}>
            
            home
            </ListItem>
            <ListItem component={Link} to='/product'
              sx={{color:"#1A1A1A", '&:hover':{
                color: '#BA933E', backgroundColor: '#F5F5F5'} }}
             onClick={mobileMenuToggle}>
            
            product
            </ListItem>
            <ListItem component={Link} to='/wishlist'
              sx={{color:"#1A1A1A", '&:hover':{
                color: '#BA933E', backgroundColor: '#F5F5F5'} }}
             onClick={mobileMenuToggle}>
           
            wishlist
            </ListItem>
                     
            <ListItem component={Link} to='/sale'
              sx={{color:"#1A1A1A", '&:hover':{
                color: '#BA933E', backgroundColor: '#F5F5F5'} }}
             onClick={mobileMenuToggle}>
           
            sale
            </ListItem>
            <ListItem component={Link} to='/contacts' 
             sx={{color:"#1A1A1A", '&:hover':{
                color: '#BA933E', backgroundColor: '#F5F5F5'} }}
            onClick={mobileMenuToggle}>   
          
            contacts
            </ListItem>
            </List>
    )
}

export default NavigationMobile