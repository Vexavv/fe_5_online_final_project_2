import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
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
              component={NavLink} 
              to={navItem.path}
              sx={{color:"#1A1A1A", '&:hover, active':{
                  color: '#BA933E'},
                  textAlign:'center',
               }}
                  onClick={onClick}
              >            
            {navItem.title}
            </MenuItem>
            )
          )}
       
            </MenuList>
    )
}

Navigation.propTypes = { 
  navItems: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Navigation