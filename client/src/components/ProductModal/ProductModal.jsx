import React, {useState} from "react";
import styles from "./ProductModal.module.scss";
import classNames from "classnames";
import Button from "../Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../store/slices/productsSlice";
import { addCard } from "../../store/slices/cardSlice";
import {addProductToWishlist, removeProductFromWishlist} from "../../store/slices/wishlistSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {IconButton} from "@mui/material";
import {Link} from "react-router-dom";

function ProductModal() {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const products = useSelector((state) => state.card.products);
  const isOpen = useSelector((state) => state.products.isOpen);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => {
    setSelectedImage(null);
    dispatch(toggleModal(false));
  };
//--------------------------add to wish list-----------------
  const isLogged = useSelector(state => state.isLogged.isLogged.success)
  const {wishlist} = useSelector(state => state.wishlist);
  const isFavorite = wishlist && wishlist.products;
  const isInWishlist = isFavorite && selectedProduct && isFavorite.find(item => item._id === selectedProduct._id);

  const addToWishlist = (id) => {
    dispatch(addProductToWishlist(id))
  }
  const removeFromWishlist = (id) => {
    dispatch(removeProductFromWishlist(id))
  }


  // -------------------------addBasket---------------------------

  const isInBasket = products.find(
    (productItem) => productItem._id === selectedProduct?._id
  );
  const addProductBascet = () => {
    if (isInBasket) {
      console.log("remove");
    } else {
      dispatch(
        addCard({
          ...selectedProduct,
          amount: 1,
          totalPrice: selectedProduct.currentPrice,
        })
      );
    }
  };

  if (!selectedProduct) {
    return null;
  }
  return (
    <div
      className={
        isOpen ? classNames(styles.Modal, styles.Active) : styles.Modal
      }
      onClick={handleClose}
    >
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <AiOutlineClose
          onClick={handleClose}
          className={styles.ModalContentClosed}
        />
        <div className={styles.ModalContentPicture}>
          <img
            className={styles.ModalContentPictureImg}
            src={selectedImage || selectedProduct.imageUrls[0]}
            alt="product"
          />
          <ul className={styles.ModalContentPictureCarousel}>
            {selectedProduct.imageUrls.map((img, index) => {
              return (
                <li key={index}>
                  <img
                    src={img}
                    alt="product"
                    onClick={() => setSelectedImage(img)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.ModalContentDescription}>
          <h3 className={styles.ModalContentDescriptionTitle}>
            {selectedProduct.name}
          </h3>
          <span className={styles.ModalContentDescriptionText}>
            {selectedProduct.description}
          </span>
          <span className={styles.ModalContentDescriptionColor}>
            Color: {selectedProduct.color}
          </span>
          <div className={ styles.ModalContentDescriptionAllPrice}>
            <span className={selectedProduct.sale ? classNames(styles.ModalContentDescriptionAllPricePrice, styles.ModalContentDescriptionAllPriceSalePrice) : styles.ModalContentDescriptionAllPricePrice}>
            ${selectedProduct.previousPrice}.00
          </span>
            {selectedProduct.sale && <span className={styles.ModalContentDescriptionAllPricePrice2}>
            ${selectedProduct.currentPrice}.00
          </span>}
          </div>

          <div className={styles.ModalContentDescriptionCount}>
            <Button
              className={styles.ModalContentDescriptionCountBtn}
              text={isInBasket ? "PRODUCT IN BASKET" : "Add To Cart"}
              onClick={addProductBascet}
            />
            <IconButton sx={{marginLeft:3}}
                        onClick={() => isInWishlist ? removeFromWishlist(selectedProduct._id) : addToWishlist(selectedProduct._id)}>
              {isLogged && (isInWishlist ?
                      <FavoriteIcon sx={{fontSize: 40, color: '#ba933e'}}/>
                      : <FavoriteBorderIcon sx={{fontSize: 40}}/>
              )}
            </IconButton>
          </div>
          <span className={styles.ModalContentDescriptionValues}>
            Availability: {selectedProduct.quantity}
          </span>
          <span className={styles.ModalContentDescriptionValues}>
            Brand: {selectedProduct.brand}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
