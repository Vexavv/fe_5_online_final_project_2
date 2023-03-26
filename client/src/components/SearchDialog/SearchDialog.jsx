import { TextField,  DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, IconButton, Button,} from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search'



const SearchDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(value => !value);
  };

  return (
    <>
           <IconButton
      aria-label="search"
      size="large"
      control="dialog"
      aria-haspopup="true"
      onClick={handleClickOpen}
      color="black"    
      sx={{
        '&:hover': {
          color: '#BA933E',
        }
      }}
    >
      <SearchIcon />
    </IconButton>
    <Dialog open={openDialog} onClose={()=>handleClickOpen(false)}
    sx={{
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: { xs: '70%', sm: '50%', md: 'none' },
        overflow: 'hidden',
        color: "#1A1A1A",
        '&:active': { color: '#BA933E' }
      }
    }}
    >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={()=>handleClickOpen(false)}>Cancel</Button>
          <Button onClick={()=>handleClickOpen(false)}>Subscribe</Button>
        </DialogActions>
      </Dialog>

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