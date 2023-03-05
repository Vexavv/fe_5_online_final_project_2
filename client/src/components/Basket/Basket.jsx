import React from "react";
import styles from "./Basket.module.scss";
import BasketCard from "./BasketCard/BasketCard";
import BasketFooterPrice from "./BasketFooterPrice/BasketFooterPrice";
import Container from "@mui/material/Container";
function Basket() {
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
      <BasketCard></BasketCard>

      <BasketCard></BasketCard>

      <BasketFooterPrice></BasketFooterPrice>
    </Container>
  );
}

export default Basket;
