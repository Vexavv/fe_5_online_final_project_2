import { TextField, DialogActions, DialogContent,  DialogTitle, Dialog, IconButton, Button, } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field} from 'formik';
import {fetchChangePassword} from '../../store/slices/passwordSlice'
import YupPassword from 'yup-password'
import * as yup from 'yup';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const initialValuesPassword = {  
    password: '',
    newPassword:''
  }
//   YupPassword(yup)
//   const validationSchemaPassword = yup.object().shape({
//   newPassword: yup.string().password()
//   .minSymbols(0)
//   .min(7, 'Password must be between 7 and 30 characters')
//   .max(30, 'Password must be between 7 and 30 characters')
//   .minLowercase(5)
//   .required('Password is required field'),
//   currentPassword:yup.string().password()
//   .minSymbols(0)
//   .min(7, 'Password must be between 7 and 30 characters')
//   .max(30, 'Password must be between 7 and 30 characters')
//   .minLowercase(5)
//   .required('Password is required field'),
//   })
const theme = createTheme({
  palette: {
    primary: {
      main:'#4444',
    },
    secondary: {
      main: "#ba933e",
    },
  },
});

const buttonSX = {
  backgroundColor: '#1a1a1a',
  color:  '#ffffff',
  borderRadius: '6px',  
  padding: "6px 10px",
  '&:hover': {
    backgroundColor: '#BA933E',
  }
};

    const UpdatePassword = () =>{
        const [openDialog, setOpenDialog] = useState(false);
        const dispatch = useDispatch()
        const handleClickOpen = () => {
            setOpenDialog(value => !value);
          };
          const HandlePasswordSubmit = ( {currentPassword, newPassword }) => {
            console.log({currentPassword, newPassword });
            dispatch(fetchChangePassword({currentPassword, newPassword }))
            handleClickOpen ()
        }
        

        return (
            <>
             <ThemeProvider theme={theme}>
             <Button
      variant="contained"
      size="small"
      aria-label='Change Password'
      disableElevation
     sx={
      buttonSX      
     }
      onClick={handleClickOpen}>
       Change Password 
      </Button>
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
         <DialogTitle>Change Password</DialogTitle>
         <Formik
           initialValues={initialValuesPassword}
          //  validationSchema={validationSchemaPassword}
           onSubmit={(password, { resetForm }) => {
            HandlePasswordSubmit(password)
               resetForm()
           }}
           >
          {()  =>( 
          <Form>
        <DialogContent sx={{color:'#BA933E' }
        }   
        >
          <Field name ='password'
           type='password'
            as={TextField}
             variant='outlined'
              color='primary'
               label='currentPassword'
               error={false}
                fullWidth
                autoFocus
                margin="dense"
                />
          <Field name ='newPassword'
           type='text' 
           as={TextField} 
           variant='outlined' 
           color='primary' 
           label='new password' 
           fullWidth
           error={false}
           autoFocus
           margin="dense"/>  
          </DialogContent>
          <DialogActions>
          <Button type="button" variant='contained' sx={{buttonSX}} onClick={() => handleClickOpen(false)}>Cancel</Button>
          <Button type ="submit" variant='contained' sx={buttonSX}>Change</Button>
        </DialogActions>
        </Form>
          )}   
        </Formik>
      </Dialog>
      </ThemeProvider>
      </>
        )
    }
    export default UpdatePassword