<<<<<<< HEAD
import React from 'react';
import {NavLink} from "react-router-dom";
import "./Header.scss"
function Header(props) {
    return (
        <div className='Header'>
           <NavLink to='/'>Home</NavLink>
            <NavLink to='/page1'>Page__1</NavLink>
            <NavLink to='/page2'>Page_2</NavLink>
<<<<<<< HEAD
            <NavLink to='/page3'>Page_3</NavLink>
            <NavLink to='/footer'>Footer</NavLink>
=======
            <NavLink to='/product'>Product</NavLink>
>>>>>>> origin/dev
        </div>
    );
=======
import React, { useState } from 'react';

// import components
import NavigationMobile from './NavigationMobile/NavigationMobile';
import Navigation from './Navigation/Navigation';
import HeaderBanner from './HeaderBanner/HeaderBannerr';
import Logo from './Logo/Logo'
import ButtonIconsGroup from './ButtonIconsGroup/ButtonIconsGroup';
import Search from './Search/Search'

//import from materialUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';

// import icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = (props) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const mobileMenuToggle = () => {
    setIsMobileMenuOpen(current => !current)
    console.log(isMobileMenuOpen);
  }  

  return (
    <>
      <HeaderBanner />
      <AppBar position="fixed"
        mt={3}
        sx={{backgroundColor: 'white',          
          boxShadow: 'none'
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/*burger for mobile adaptive */}
            <Box sx={{
              flexGrow: { xs: 1, sm: 0 },
              display: { xs: 'flex', sm: 'none', md: 'none' },
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
                  {!isMobileMenuOpen && <MenuIcon />}
                </IconButton>
                <Search />
              </ButtonGroup>
            </Box>

            {/*burger for tabs adaptive */}
            <Box sx={{
              flexGrow: { xs: 1, sm: 1 },
              display: { xs: 'none', sm: 'flex', md: 'none' },
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
                {!isMobileMenuOpen && <MenuIcon />}
              </IconButton>
            </Box>

            {/* drop navigation for mobile */}
            <Drawer
              anchor="left"
              component="div"
              variant="temporary"
              open={isMobileMenuOpen}
              onClose={mobileMenuToggle}
              ModalProps={{ keepMounted: true }}
              SlideProps={{ timeout: 400 }}
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

              <Box
                sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "white"
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={mobileMenuToggle}
                  color="black" sx={{ mb: 2 }} >
                  <CloseIcon />
                </IconButton>

                <Divider sx={{ mb: 2 }} />
                <NavigationMobile onClick={() => { mobileMenuToggle() }} />

              </Box>
            </Drawer>
            
            {/* main logo */}
            <Logo />

                {/*icons for tab */}
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'flex', sm: 'none', md: 'none' },
              flexDirection: 'column',
              alignItems: 'center',
            }}>

              <ButtonIconsGroup />

            </Box>

            {/* navbar for desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
              <Navigation />
            </Box>
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex', md: 'flex' },
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              
              <ButtonGroup variant="text" aria-label="text button group">
                <Search />
                <ButtonIconsGroup />
              </ButtonGroup>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
>>>>>>> b1c01e7e7e5aa67fee68dea5a88fdb2f36912b60
}

export default Header;