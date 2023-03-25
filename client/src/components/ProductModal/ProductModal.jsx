import React, { useState, useContext } from "react";
import styles from "./ProductModal.module.scss";
import classNames from "classnames";
import Button from "../Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../store/productsSlice";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FavoritesContext } from "../../pages/Favorites/FavoritesContext";

function ProductModal() {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const isOpen = useSelector((state) => state.products.isOpen);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => {
    setSelectedImage(null);
    dispatch(toggleModal(false));
  };

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((el) => selectedProduct === el);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(selectedProduct);
    } else {
      addFavorite(selectedProduct);
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
      onClick={handleClose}>
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <AiOutlineClose
          onClick={handleClose}
          className={styles.ModalContentClosed}
        />
        <div className={styles.ModalContentPicture}>
          <img
            className={styles.ModalContentPictureImg}
            src={selectedImage || selectedProduct.imageUrls[0]}
            alt='product'
          />
          <ul className={styles.ModalContentPictureCarousel}>
            {selectedProduct.imageUrls.map((img, index) => {
              return (
                <li key={index}>
                  <img
                    src={img}
                    alt='product'
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
          <span className={styles.ModalContentDescriptionPrice}>
            ${selectedProduct.currentPrice}.00
          </span>
          <div className={styles.ModalContentDescriptionCount}>
            <Button
              className={styles.ModalContentDescriptionCountBtn}
              text='Add To Cart'
            />
          </div>
          <div onClick={handleClick} className={styles.Favorites}>
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            <p>ADD TO WISHLIST</p>
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
