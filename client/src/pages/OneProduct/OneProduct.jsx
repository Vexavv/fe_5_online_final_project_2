import {
  DialogTitle,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddIcon from "@mui/icons-material/Add";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./OneProduct.module.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import { useDispatch, useSelector } from "react-redux";
import { addCard, addToCard, removeCard } from "../../store/slices/cardSlice";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { BASE_URL } from "../../constants/api";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "../../store/slices/wishlistSlice";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#ba933e",
    },
  },
});

const buttonSX = {
  backgroundColor: "#222222",
  color: "white",
  borderRadius: 0,
  minWidth: "150px",
  padding: "10px 40px",
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
  const isLogged = useSelector((state) => state.isLogged.isLogged.success);
  const products = useSelector((state) => state.card.products);
  console.log(products);
  const isInBasket = products.find((productItem) =>
    isLogged
      ? productItem.product._id === product?._id
      : productItem._id === product?._id
  );

  const addProductBascet = () => {
    if (isInBasket) {
    } else {
      isLogged
        ? dispatch(addToCard(product))
        : dispatch(
            addCard({
              ...product,
              amount: 1,
              totalPrice: product.currentPrice,
            })
          );
    }
  };

  // --------------------------------- add to wish list----------------
  const { wishlist } = useSelector((state) => state.wishlist);
  const isFavorite = wishlist && wishlist.products;
  const isInWishlist =
    isFavorite &&
    product &&
    isFavorite.find((item) => item._id === product._id);
  const addToWishlist = (id) => {
    dispatch(addProductToWishlist(id));
  };
  const removeFromWishlist = (id) => {
    dispatch(removeProductFromWishlist(id));
  };

  if (!product) {
    return <Loader />;
  }
  return (
    <>
      <DialogTitle
        sx={{
          background: "#eaebef",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
          textTransform="capitalize"
        >
          {product.name}
        </Box>
      </DialogTitle>

      <Box width="80%" m="80px auto">
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          {/* IMAGES */}
          <Box flex="1 1 40%" mb="40px">
            <img
              alt={"sss"}
              width="100%"
              height="100%"
              src={product.imageUrls[0]}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* ACTIONS */}

          <Box flex="1 1 50%" mb="40px">
            <Box m="5px 0 25px 0">
              <Typography
                align="left"
                variant="h4"
                sx={{ textTransform: "capitalize" }}
              >
                {product.name}
              </Typography>

              <Typography align="left" sx={{ mt: "20px" }}>
                {product.description}
              </Typography>
              <Box display="flex">
                {product.sale ? (
                  <Typography
                    variant="h6"
                    color="#666666"
                    align="left"
                    m="30px 0"
                    sx={{
                      textDecoration: "line-through",
                    }}
                  >
                    ${product.previousPrice}.00
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    color="#666666"
                    align="left"
                    m="30px 0"
                  >
                    ${product.previousPrice}.00
                  </Typography>
                )}
                {product.sale && (
                  <Typography
                    variant="h6"
                    color="#ba933e"
                    align="left"
                    m="30px 10px"
                  >
                    ${product.currentPrice}.00
                  </Typography>
                )}
              </Box>
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
                  {isInBasket ? "PRODUCT IN BASKET" : "ADD TO CART"}
                </Button>
                {/*-----------------add to wish list --------------*/}
                <IconButton
                  sx={{ marginLeft: 3 }}
                  onClick={() =>
                    isInWishlist
                      ? removeFromWishlist(product._id)
                      : addToWishlist(product._id)
                  }
                >
                  {isLogged &&
                    (isInWishlist ? (
                      <FavoriteIcon sx={{ fontSize: 40, color: "#ba933e" }} />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: 40 }} />
                    ))}
                </IconButton>
              </ThemeProvider>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="flex-start">
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
                  color: "gray",
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
          <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
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
