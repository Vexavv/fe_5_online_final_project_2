import { TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog, Button } from '@mui/material';
import React, { useState } from 'react';




const ModalInput = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(value => !value);
  };

  return (
    <>
    <Button   aria-label="search"
        size="large"
        control="dialog"
        aria-haspopup="true"
        onClick={handleClickOpen}
        color="black"
        sx={{
          '&:hover': {
            color: '#BA933E',
          }
        }}>Change</Button>
      <Dialog open={openDialog} onClose={() => handleClickOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '70%', sm: '50%', md: 'none' },
            overflow: 'hidden',
            color: "#1A1A1A",
            '&:active': { color: '#BA933E' }
          }
        }}
      > <DialogTitle>Enter your correct data</DialogTitle>
        <DialogContent sx={{ color: '#BA933E' }
        }>
          <DialogContentText>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="search"
            type="text"
            fullWidth
            variant="standard"
            sx={{ color: '#BA933E' }}
          />
        </DialogContent>
        <DialogActions> 
        <Button onClick={() => handleClickOpen(false)}>Cancel</Button>
        <Button onClick={() => handleClickOpen(false)}>Edit</Button>
        </DialogActions></Dialog>
    </>
  )

}

export default ModalInput