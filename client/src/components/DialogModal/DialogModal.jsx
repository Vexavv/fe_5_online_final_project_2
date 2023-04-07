import { TextField, DialogActions, DialogContent,  DialogTitle, Dialog, IconButton, Button, } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from '@mui/icons-material/Search'
import { Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import { ThemeProvider, createTheme } from '@mui/material/styles';



const DialogModal = (props) => {
  // const {search, textButton,   titleText, ariaLabel} = props;
  const [openDialog, setOpenDialog] = useState(false);
const dispatch = useDispatch()


  const handleClickOpen = () => {
    setOpenDialog(value => !value);
  };

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
    fontFamily: 'Red Hat Display',  
    size:{xs:'small', sm:"medium", md:"large"},
    backgroundColor: '#1a1a1a',
    color: "white",
    borderRadius: '6px',  
    padding: "6px 10px", 
    '&:hover': {
      backgroundColor: '#BA933E',
    }
    
  };
  
  return (
    <>
    <ThemeProvider theme={theme}>
     <IconButton
        aria-label="search"
        
        control="dialog"
        aria-haspopup="true"
        onClick={handleClickOpen}
        color="black"
        sx={{
          size:{xs:'small', sm:"medium", md:"large"},
          '&:hover': {
            color: '#BA933E',
          }
        }}
      >
        <SearchIcon />
      </IconButton>
    
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
        <DialogTitle>What are you looking for?</DialogTitle>
        <Formik
           initialValues={{ 
            password: '',
            newPassword:''}
          }
          //  validationSchema={validationSchemaPassword}
         >
             {() => (
          <Form>
        <DialogContent sx={{color:'#BA933E' }
        }   
        >
        <Field name ='search'
           type='text' 
           as={TextField} 
           variant='outlined' 
           color='primary' 
           label='search' 
           fullWidth          
           autoFocus
           margin="dense"/>  
         
     
        
        </DialogContent>
        <DialogActions>
          <Button type="button" variant='contained' sx={{buttonSX}}onClick={() => handleClickOpen()}>Cancel</Button>
          <Button type="submit" variant='contained' sx={buttonSX}> Search </Button>
        </DialogActions>
        </Form>
             )}
        </Formik>
      </Dialog>
      </ThemeProvider>
    </>

  )
}

export default DialogModal