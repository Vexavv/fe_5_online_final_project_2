import { TextField, DialogActions, DialogContent,  DialogTitle, Dialog, IconButton, Button, } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {fetchChangePassword} from '../../store/slices/passwordSlice'
import SearchIcon from '@mui/icons-material/Search'
import { Formik, Form, FastField, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'

const initialValuesPassword = {  
  password: ''
}
YupPassword(yup)
const validationSchemaPassword = yup.string().password()
.minSymbols(0)
.min(7, 'Password must be between 7 and 30 characters')
.max(30, 'Password must be between 7 and 30 characters')
.minLowercase(5)
.required('Password is required field')


const DialogModal = (props) => {
  const {search, textButton, textSubmitButton, typeInput, autoComplete, titleText, ariaLabel} = props;
  const [openDialog, setOpenDialog] = useState(false);
const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpenDialog(value => !value);
  };

  const HandlePasswordSubmit = ( password ) => {
    console.log(password);
    dispatch(fetchChangePassword( password ))
    handleClickOpen ()
}

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
        <Formik
           initialValues={initialValuesPassword}
           validationSchema={validationSchemaPassword}
           onSubmit={(password, { resetForm }) => {
            HandlePasswordSubmit(password)
               resetForm()
           }}>
             {({ isValid }) => (
          <Form>
        <DialogContent sx={{color:'#BA933E' }
        }
        component = 'form'
        >
         
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
          //  onSubmitted
            fullWidth
            variant="standard"
            sx={{color:'#BA933E' }}
          />
         
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={() => handleClickOpen(false)}>Cancel</Button>
          <Button type ="submit" disabled={!isValid}>{textSubmitButton}</Button>
        </DialogActions>
        </Form>
             )}
        </Formik>
      </Dialog>

    </>

  )
}

export default DialogModal