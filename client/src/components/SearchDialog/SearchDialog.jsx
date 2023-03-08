import {Search, Dialog, IconButton, DialogContent, TextField, DialogActions} from '@mui/material';
import React, { useState } from 'react';


import SearchIcon from '@mui/icons-material/Search'

const SearchDialog = ({isOpenSearch, onClick}) => {
   

  return (
    <>
    <IconButton
      aria-label="search"
      size="large"
      control="dialog"
      aria-haspopup="true"
      onClick={onClick}
      color="black"    
      sx={{
        '&:hover': {
          color: '#BA933E',
        }
      }}
    >
      <SearchIcon />
    </IconButton>

{/* {!isOpenSearch && */}
{/* <Dialog 
   anchor="left"
   component="div"
   variant="temporary"
  
   onClose={SearchDialog}
   ModalProps={{ keepMounted: true }}

open={!isOpenSearch}
sx={{
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: { xs: '70%', sm: '50%', md: 'none' },
    overflow: 'hidden',
    color: "#1A1A1A",
    '&:active': { color: '#BA933E' }
  }
}}
 > */}
  {/* <DialogContent>
      <TextField
      autoFocus
      id="outlined-helperText"
      label="Helper text"
      defaultValue="Default Value"
      helperText="Some important text"
      margin="dense"
          
            variant="standard"
    />
    <p>hello</p>
    </DialogContent>
    <DialogActions>
      <SearchIcon/>
    </DialogActions>
    </Dialog> */}
    </>

  )
}

export default SearchDialog