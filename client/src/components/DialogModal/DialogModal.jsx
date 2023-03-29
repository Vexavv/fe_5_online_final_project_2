import { TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, IconButton, Button, } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search'



const DialogModal = (props) => {
  const {search, textButton, textSubmitButton, typeInput, autoComplete, titleText, ariaLabel} = props;
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(value => !value);
  };

  return (
    <>
    {search && <IconButton
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
      </IconButton>}
      {!search && 
      <Button
      variant="outlined"
      size="small"
      aria-label={ariaLabel}
      disableElevation
      onClick={handleClickOpen}>
        {textButton}
      </Button>
      }
      <Dialog open={openDialog} onClose={() => handleClickOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '70%', sm: '50%', md: '30%' },
            overflow: 'hidden',
            color: "#1A1A1A",
            '&:active': { color: '#BA933E',
          boxSizing:'border-box' }
          }
        }}
      >
        <DialogTitle>{titleText}</DialogTitle>
        <DialogContent sx={{color:'#BA933E' }
        }
        component = 'form'
        >
          <DialogContentText>
           
          </DialogContentText>
          <TextField
          error={false}
            autoFocus
            margin="dense"
            id="name"
            inputProps={{
              label: textSubmitButton,
              type: typeInput,
              autoComplete: autoComplete,
              
            }}  
           
            fullWidth
            variant="standard"
            sx={{color:'#BA933E' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClickOpen(false)}>Cancel</Button>
          <Button onClick={() => handleClickOpen(false)}>{textSubmitButton}</Button>
        </DialogActions>
      </Dialog>

    </>

  )
}

export default DialogModal