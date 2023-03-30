import {
  DialogTitle,
  Box,
  Button,
  IconButton,
  Typography,
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddIcon from '@mui/icons-material/Add';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './OneProduct.module.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import { addCard, removeCard } from '../../store/cardSlice';

import { useEffect, useState, useContext } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { BASE_URL } from '../../constants/api';
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from '../../store/slices/wishlistSlice';

//------------

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
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // added constant from fetch request
  useEffect(() => {
    async function getProduct() {
      const res = await fetch(`${BASE_URL}/products/` + id);

      const data = await res.json();
      setProduct(data);
    }

    getProduct();
  }, [id]);

  //----------------------------------------------
  const { tw, fb, inst, span } = styles;

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  // -------------------------------добавка в корзину -------------------
  const products = useSelector((state) => state.card.products);
  const isInBasket = products.find(
    (productItem) => productItem._id === product?._id
  );

  const addProductBascet = () => {
    if (isInBasket) {
      console.log('remove');
    } else {
      dispatch(
        addCard({
          ...product,
          amount: 1,
          totalPrice: product.currentPrice,
        })
      );
    }
  };

  // ---------------------------------wishlist----------------
  const isLogged = useSelector((state) => state.isLogged.isLogged.success);
  const { wishlist } = useSelector((state) => state.wishlist);
  console.log(wishlist);

  // const isFavorite = wishlist.products
  // const isInWishlist = wishlist.products && product && wishlist.products.find(item => item._id === product._id);
  //
  // const [isFavoriteLocal, setIsFavoriteLocal] = useState(isInWishlist);
  // console.log(isInWishlist)

  const addToWishlist = (id) => {
    dispatch(addProductToWishlist(id));
    /* setIsFavoriteLocal(true);*/
  };
  const removeFromWishlist = (id) => {
    dispatch(removeProductFromWishlist(id));
    /*   setIsFavoriteLocal(false);*/
  };

  if (!product) {
    return <Loader />;
  }

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
          {product.name}
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
              src={product.imageUrls[0]}
              style={{ objectFit: 'contain' }}
            />
          </Box>

          {/* ACTIONS */}

          <Box flex="1 1 50%" mb="40px">
            <Box m="5px 0 25px 0">
              <Typography
                align="left"
                variant="h4"
                sx={{ textTransform: 'capitalize' }}
              >
                {product.name}
              </Typography>

              <Typography align="left" sx={{ mt: '20px' }}>
                {product.description}
              </Typography>
              <Typography variant="h6" color="#ba933e" align="left" m="30px 0">
                ${product.currentPrice}.00
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" minHeight="50px">
              {/* <Box
                display="flex"
                alignItems="center"
                backgroundColor="#f5f5f5"
                border="1px solid #f5f5f5"
                borderRadius="5px"
                mr="20px"
                p="2px 5px"
              >
                <IconButton>
                  {/* <RemoveIcon onClick={handleRemoveCard} /> */}
              {/* <RemoveIcon />
                </IconButton>
                <Typography sx={{ p: "0 5px" }}>
                  {/* {oneProd.quantity || 1} */}
              {/* {1} */}
              {/* </Typography>
                <IconButton>
                  <AddIcon />
                  {/* <AddIcon onClick={handleAddCard} /> */}
              {/* </IconButton> */}
              {/* </Box>  */}
              <ThemeProvider theme={theme}>
                <Button
                  onClick={addProductBascet}
                  // onClick={handleAddCard}
                  sx={buttonSX}
                  variant="contained"
                  color="secondary"
                >
                  {isInBasket ? 'PRODUCT IN BASKET' : 'ADD TO CART'}
                </Button>
                {/*<IconButton onClick={() => isFavoriteLocal ? removeFromWishlist(product._id) : addToWishlist(product._id)}>
                                    {isLogged && (isFavoriteLocal ?
                                            <FavoriteIcon sx={{fontSize: 35, color: '#ba933e'}}/>
                                            : <FavoriteBorderIcon sx={{fontSize: 35}}/>
                                    )}
                                </IconButton>*/}
              </ThemeProvider>
            </Box>
            {/*-----------------my fishlist --------------*/}
            <Box display="flex" alignItems="center" minHeight="50px">
              <ThemeProvider theme={theme}>
                <Button
                  onClick={() => {
                    addToWishlist(product._id);
                  }}
                  sx={buttonSX}
                  variant="contained"
                  color="secondary"
                >
                  {/*{isInWishlist ? "PRODUCT IN WISHLIST" : "ADD TO WISHLIST"}*/}
                </Button>
              </ThemeProvider>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              {/*<Box m="20px 0 5px 0" display="flex">*/}
              {/*  /!*------------------------- add to wishlist*!/*/}
              {/*  <div onClick={()=>{dispatch(addProductToWishlist(product._id))}} className={styles.favorites}>*/}
              {/*    {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}*/}
              {/*    <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>*/}
              {/*  </div>*/}
              {/*</Box>*/}
              <Typography m="8px 0 0 0">
                <span className={span}>Availability: </span> {product.quantity}
              </Typography>
              <Typography m="8px 0 0 0">
                <span className={span}>Product type: </span>
                Demo Type
              </Typography>

              <Typography m="8px 0 0 0">
                <span className={span}>Brand: </span>
                {product.brand}
              </Typography>
              <Typography m="8px 0 0 0">
                <span className={span}>SKU: </span> N/A
              </Typography>
              <Typography align="left" m="8px 0 0 0">
                <span className={span}>Categories: </span>
                {product.categories}
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
                <Typography>{product.description}</Typography>
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
