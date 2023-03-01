import React, { useState } from 'react';
import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss"
import MenuList from '@mui/material/List'
import MenuItem from '@mui/material/ListItem';



const Navigation =({onClick, navItems})=>{   
        
      //add useEffect to tabs

    return(
        <MenuList sx={{ flexGrow: {md:1, lg:0}, display: { xs: 'block', sm:'block', md: 'flex', fontFamily:'Red Hat Display' } }}       
          >

{navItems.map(navItem=>
            (
              <MenuItem 
              key={navItem.title}
              component={Link} 
              to={navItem.path}
              sx={{color:"#1A1A1A", '&:hover, active':{
                  color: '#BA933E'},
               }}
                  onClick={onClick}
              >            
            {navItem.title}
            </MenuItem>
            )
          )}
                {/* <MenuItem component={Link}  to='/'
                 sx={{color:"#1A1A1A",
                  '&:hover, active':{color: '#BA933E'} }}>
          
            Home
            </MenuItem> */}
            {/* <MenuItem component={Link}  to='/product' 
             sx={{color:"#1A1A1A", '&:hover, active':{color: '#BA933E'} }}>
           
            Product
            </MenuItem> */}
            {/* <MenuItem component={Link}  to='/collection'
                   sx={{color:"#1A1A1A", '&:hover, active':{color: '#BA933E'} }}>
            Collection
           
            </MenuItem> */}
                     
            {/* <MenuItem component={Link}  to='/sale'
                   sx={{color:"#1A1A1A", '&:hover, active':{color: '#BA933E'} }}>
           
            Sale
            </MenuItem> */}
            {/* <MenuItem component={Link}  to='/contacts'
                   sx={{color:"#1A1A1A", '&:hover, active':{color: '#BA933E'} }}> 
         
            Contacts
            </MenuItem> */}
            </MenuList>
    )
}

export default Navigation