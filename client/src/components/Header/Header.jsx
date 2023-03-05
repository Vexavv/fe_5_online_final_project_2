import React, { useState } from 'react';
import {Link} from 'react-router-dom';

// import components

import Navigation from './Navigation/Navigation';
import HeaderBanner from './HeaderBanner/HeaderBannerr';
import Logo from './Logo/Logo'
import SearchDialog from '../SearchDialog/SearchDialog'
import Login from '../Login/Login'

//import from materialUI

import { AppBar, Box, Toolbar, ButtonGroup, IconButton, Drawer, Divider, Container, Badge,} from '@mui/material';

// import icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

// data Menu
const navItems = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Products',
    path: '/products'
  },
  {
    title: 'Collection',
    path: '/collection'
  },
  {
    title: 'Sale',
    path: '/sale'
  },
  {
    title: 'Contact',
    path: '/contacts'
  }
]


const Header = (props) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOpenSearch, setisOpenSearch] = useState(false);

  
  const mobileMenuToggle = () => {
    setIsMobileMenuOpen(current => !current)
    
  }  

  const toggleSearch =()=>{
    setisOpenSearch(current => !current)    
  }

  return (
    <>
      <HeaderBanner />
      <AppBar position="static"
        mt={3}
        sx={{backgroundColor: 'white',          
          boxShadow: 'none',
          
        }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{
            justifyContent:'space-between'
          }} >

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
                <SearchDialog isOpenSearch onClick={()=>{toggleSearch()}}/>
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
                <Navigation onClick={() => {mobileMenuToggle()}} navItems={navItems}/>

              </Box>
            </Drawer>
            
            {/* main logo */}
            <Logo />

                  {/* navbar for desktop */}
            <Box sx={{ flexGrow: 1, 
              display: { xs: 'none', sm: 'none', md: 'table' },
              textAlign:'center',
              justifyContent: 'space-evenly', 
              alignItems: 'center'
              }}>
              <Navigation navItems={navItems} />
            </Box>

                {/*icons for tab and desc */}
            <Box sx={{
              flexGrow: 1,
              display: 'flex',
              textAlign:'center',
              justifyContent: {xs:'right', md:'space-evenly',},               
              alignItems: 'center',
            }}>

             <Login/>
             <Box sx={{display:{xs:'none', sm:'flex', md:'flex'}}}>
             <SearchDialog isOpenSearch onClick={()=>{toggleSearch()}} />
             </Box>
             
             <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                component={Link}  to='/cart'
                color="black"
                sx={{
                    '&:hover': {color: '#BA933E'}
                }}
            >
                <Badge badgeContent={4} sx={{
                    color: "gray",
                    '&:hover': {color: '#BA933E'}
                }}>
                    <AddShoppingCartIcon />
                </Badge>
            </IconButton>

            </Box>

          
           

          
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;