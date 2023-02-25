import React, { useState } from 'react';
import styles from "./Header.module.scss"

// import components
import  NavigationMobile  from './NavigationMobile/NavigationMobile';
import  Navigation  from './Navigation/Navigation';
import HeaderBanner from './HeaderBanner/HeaderBannerr';
import  Logo  from './Logo/Logo'
import ButtonIconsGroup from './ButtonIconsGroup/ButtonIconsGroup';
import  Search  from './Search/Search'

//import from materialUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';

import Container from '@mui/material/Container';

// import icons

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { SvgIcon } from '@mui/material';
// import { current } from '@reduxjs/toolkit';
// import { Search } from '@mui/icons-material';


 

const Header = (props) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const mobileMenuToggle = () => {
    setIsMobileMenuOpen(current => !current)
    console.log(isMobileMenuOpen);
  }

  return (
    <>
    <HeaderBanner/>
    <AppBar position="fixed" 
    mt={3}
    sx={{ backgroundColor: 'white', 
    // zIndex: theme => theme.zIndex.drawer + 1,
    boxShadow: 'none'
    }}  >    
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/*burger for mobile adaptive */}
          <Box sx={{
            flexGrow: {xs:1, sm:0},
            display: { xs: 'flex', sm:'none', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
          }}>

            <ButtonGroup variant="text" aria-label="text button group">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={mobileMenuToggle}
                color="black"
              >
                {!isMobileMenuOpen ? <MenuIcon /> : <CloseIcon/>}
              </IconButton>
              <Search/>
            </ButtonGroup>
          </Box>

          {/*burger for tabs adaptive */}
          <Box sx={{
            flexGrow: {xs: 1, sm: 1},
            display: { xs: 'none',  sm: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
          }}>
             <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={mobileMenuToggle}
                color="black"
              >
                {!isMobileMenuOpen ? <MenuIcon /> : <CloseIcon/>}
              </IconButton>
              </Box>

          {/* drop navigation for mobile */}               
          <Drawer
            anchor="left"
            component="div"
            variant="temporary"
            open={isMobileMenuOpen}
            onClose={mobileMenuToggle}
            ModalProps={{keepMounted: true}}
            SlideProps={{timeout: 400}}
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: { xs: '70%', sm: '50%', md:'none'},
                overflow: 'hidden',
                color:"#1A1A1A",
                '&:active':{color: '#BA933E'}}
            }}
          >
            <Box
              sx={{p: 2,
                height: 1,
                backgroundColor: "white"
              }}
            >
            
              <NavigationMobile onClick={()=>{mobileMenuToggle()}}/>
              {/* <Navigation/> */}
            </Box>
          </Drawer>

         <Logo/> 

          <Box sx={{
            flexGrow: 1,
            display: { xs: 'flex', sm: 'none', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
          }}>

             <ButtonIconsGroup/> 
               
              </Box>  

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm:'none', md: 'flex' } }}>
                  <Navigation/>
          </Box>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', sm:'flex',  md: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
          }}>
             <ButtonGroup variant="text" aria-label="text button group">
             <Search/>
             <ButtonIconsGroup /> 

             </ButtonGroup>
           
               
              </Box>  
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}

export default Header;