import {
  DialogTitle,
  Box,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './OneProduct.module.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#ba933e',
    },
  },
});

const buttonSX = {
  backgroundColor: '#222222',
  color: 'white',
  borderRadius: 0,
  minWidth: '150px',
  padding: '10px 40px',
};

export default function OneProduct() {
  const { tw, fb, inst, span } = styles;

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return (
    <>
      <DialogTitle
        sx={{
          background: '#eaebef',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={'space-between'}
        >
          Product title
        </Box>
      </DialogTitle>

      <Box width="80%" m="80px auto">
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          {/* IMAGES */}
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={'sss'}
              width="100%"
              height="100%"
              src={`https://cdn.shopify.com/s/files/1/0376/9440/6700/products/14_800x.jpg`}
              style={{ objectFit: 'contain' }}
            />
          </Box>

          {/* ACTIONS */}
          <Box flex="1 1 50%" mb="40px">
            <Box m="5px 0 25px 0">
              <Typography align="left" variant="h4">
                Victo pedant lamp
              </Typography>

              <Typography align="left" sx={{ mt: '20px' }}>
                Most of us are familiar with the iconic design of the egg shaped
                chair floating in the air. The Hanging Egg Chair is a critically
                acclaimed design that has enjoyed praise worldwide ever since
                the distinctive sculptural shape was created.
              </Typography>
              <Typography variant="h6" color="#ba933e" align="left" m="30px 0">
                $79.00
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" minHeight="50px">
              <Box
                display="flex"
                alignItems="center"
                backgroundColor="#f5f5f5"
                border="1px solid #f5f5f5"
                borderRadius="5px"
                mr="20px"
                p="2px 5px"
              >
                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ p: '0 5px' }}>1</Typography>
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
              <ThemeProvider theme={theme}>
                <Button sx={buttonSX} variant="contained" color="secondary">
                  ADD TO CART
                </Button>
              </ThemeProvider>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Box m="20px 0 5px 0" display="flex">
                <FavoriteBorderOutlinedIcon />
                <Typography sx={{ ml: '5px' }}>ADD TO WISHLIST</Typography>
              </Box>
              <Typography m="8px 0 0 0">
                <span className={span}>Availability: </span> In stock
              </Typography>
              <Typography m="8px 0 0 0">
                <span className={span}>Product type: </span>
                Demo Type
              </Typography>
              <Typography m="8px 0 0 0">
                <span className={span}>Vendor: </span> Demo Vender
              </Typography>
              <Typography m="8px 0 0 0">
                <span className={span}>SKU: </span> N/A
              </Typography>
              <Typography align="left" m="8px 0 0 0">
                <span className={span}>Categories: </span>
                Chairs, Decor Art, Furniture, Home page, Lighting Lamp, Sofas
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  color: 'gray',
                }}
              >
                <IconButton>
                  <TwitterIcon className={tw} sx={{ pl: 2 }} />
                  <FacebookIcon className={fb} sx={{ pl: 2 }} />
                  <InstagramIcon className={inst} sx={{ pl: 2 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* INFORMATION */}
        {/* <Box m="20px 0">
          <Tabs value={changeTable} onChange={handleChange} centered>
            <Tab label="Details" value="description" />
            <Tab label="Shipping & Return" value="reviews" />
            <Tab label="Reviews" value="reviews" />
          </Tabs>
        </Box> */}

        <Box m="20px 0">
          <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
            <ThemeProvider theme={theme}>
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                centered
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Details" />
                <Tab label="Shipping & Return" />
                <Tab label="Reviews" />
              </Tabs>
            </ThemeProvider>
          </Box>
          <Box sx={{ padding: 2 }}>
            {tabIndex === 0 && (
              <Box>
                <Typography>The first tab</Typography>
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <Typography>The second tab</Typography>
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <Typography>The third tab</Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* <Box display="flex" flexWrap="wrap" gap="15px">
          <div>reviews</div>
        </Box> */}

        {/* RELATED ITEMS */}
        {/* <Box mt="50px" width="100%">
          <Typography variant="h3" fontWeight="bold">
            Related Products
          </Typography>
          <Box
            mt="20px"
            display="flex"
            flexWrap="wrap"
            columnGap="1.33%"
            justifyContent="space-between"
          ></Box>
        </Box> */}
      </Box>
    </>
  );
}

// export default OneProduct;
