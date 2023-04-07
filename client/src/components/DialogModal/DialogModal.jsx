import {InputBase, DialogActions, DialogContent,  DialogTitle, Dialog, IconButton, Button, InputAdornment} from '@mui/material';
import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { addSearch, resetSearch, setSearch, setResult } from '../../store/slices/searchSlice'

const DialogModal = () => {
 
  const [openDialog, setOpenDialog] = useState(false);
  
  const { data } = useSelector(state => state.products)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const search = useSelector(state => state.search.search)

  useEffect(() => {
    const result = data
    dispatch(setSearch(result))   
  }, [data, dispatch])

  useEffect(() => {
    if (location.pathname !== '/products' && search !== '') {
      window.scrollTo({ top: 0 })
      navigate('/products')    }  
     searchData(search)
     console.log(search);
  }, [search])

  const searchData = pattern => {
    const options = {
      threshold: 0.3,
      keys: ['name', 'categories', 'description']
    }
    if (!pattern) {
      dispatch(setResult(data))
      return
    }
    const fuse = new Fuse(data, options)
    const result = fuse.search(pattern)
    const matches = []
    if (!result.length) {
      dispatch(setResult([]))
    } else {
      result.forEach(({ item }) => {
        matches.push(item)
      })
      dispatch(setResult(matches))
    }
  }
  const handleChange = event => {
    dispatch(addSearch(event.target.value))
  }
  const handleClickResetSearch = () => {
    dispatch(resetSearch())
  }

  const handleMouseDownReset = event => {
    event.preventDefault()
  }

  const handleClickOpen = () => {
    setOpenDialog(value => !value);
  }; 

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
      <IconButton
        aria-label="search"
        control="dialog"
        aria-haspopup="true"
        onClick={handleClickOpen}
        color="black"
        sx={{
          size: { xs: 'small', sm: 'medium', md: 'large' },
          '&:hover': {
            color: '#BA933E',
          },
        }}
      >
        <SearchIcon />
      </IconButton>
    
      <Dialog
        open={openDialog}
        onClose={() => handleClickOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: '70%', sm: '50%', md: '30%' },
            overflow: 'hidden',
            color: '#1A1A1A',
            '&:active': { color: '#BA933E', boxSizing: 'border-box' },
          },
        }}
      >
        <DialogTitle>What are you looking for?</DialogTitle>
       
        <DialogContent sx={{color:'#BA933E' }
        }   
        >
         <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        value={search}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="reset search"
              onClick={handleClickResetSearch}
              onMouseDown={handleMouseDownReset}
              edge="end"
              size="small"
              sx={{ marginRight: '5px' }}
            >
              {search && <CloseIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
        </DialogContent>
       
        <DialogActions>
      
        <Button type="button" variant='contained' sx={{buttonSX}} onClick={() => handleClickOpen()}>Cancel</Button>
          <Button type="submit" variant='contained' sx={buttonSX} onClick={()=>{
         
           handleClickResetSearch()
           handleClickOpen()
          }}> Search </Button>
     
        </DialogActions>       
       
      </Dialog>
     
    
    </>
  );
}

export default DialogModal