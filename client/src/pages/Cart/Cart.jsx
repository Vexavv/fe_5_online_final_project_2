import React, { useEffect } from "react";
import styles from "./Cart.module.scss";

import BasketCard from "../../components/Basket/BasketCard/BasketCard";

import BasketFooterPrice from "../../components/Basket/BasketFooterPrice/BasketFooterPrice";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";

import { fetchGetBasket } from "../../store/slices/cardSlice";

function Cart() {
  const cards = useSelector((state) => state.card.products);

  const isLogged = useSelector((state) => state.isLogged.isLogged.success);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetBasket());
  }, [dispatch]);
  return (
    <Container maxWidth="xl">
      <h3 className={styles.Title}>Shopping cart</h3>
      <div className={styles.Description}>
        <p className={styles.DescriptionTextLeft}>IMAGE</p>
        <div className={styles.DescriptionContainer}>
          <p className={styles.DescriptionContainerText}>PRODUCT</p>
          <p className={styles.DescriptionContainerTextTotal}>TOTAL</p>
        </div>
      </div>
      { cards.map((item) =>
        isLogged ? (
          <BasketCard
            item={item}
            key={item._id}
            className={styles.basketCard}
            currentPrice={item.product.currentPrice}
            brand={item.product.brand}
            color={item.product.color}
            img={item.product.imageUrls[0]}
            name={item.product.name}
            id={item._id}
            amount={item.cartQuantity}
            totalPrice={item.cartQuantity * item.product.currentPrice}
          ></BasketCard>
        ) : (
          <BasketCard
            key={item._id}
            className={styles.basketCard}
            item={item}
            currentPrice={item.currentPrice}
            brand={item.brand}
            color={item.color}
            img={item.imageUrls[0]}
            name={item.name}
            id={item._id}
            quantity={item.quantity}
            amount={item.amount}
            totalPrice={item.totalPrice}
          ></BasketCard>
        )
      )}

      <BasketFooterPrice></BasketFooterPrice>
    </Container>
  );
}

export default Cart;
