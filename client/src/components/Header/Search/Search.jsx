import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';

const Search =()=>{
    return(
        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=>{}}
                color="black"
               sx={{
                '&:hover':{
                  color: '#BA933E',
                }
               }}
              >
                <SearchIcon />
              </IconButton>
    )
}

export default Search