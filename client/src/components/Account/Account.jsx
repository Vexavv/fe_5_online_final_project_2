import React from "react";
import styles from "./Account.module.scss";
import Container from "@mui/material/Container";
function Account() {
  return (
    <Container maxWidth="xl">
      <p className={styles.addresses__title}>Your Addresses</p>
      <div className={styles.addresses__section}> </div>
      <div className={styles.addresses__container}>
        <button className={styles.addresses__add}>Add a New Addres</button>
        <form>
          <input type="text" className="" />
          <input type="text" className="" />
          <input type="text" className="" />
          <input type="text" className="" />
          <input type="text" className="" />
          <input type="text" className="" />
          <label htmlFor="country"></label>
          <select name="" id="country" className="">
            <option value="Kiev">Kiev</option>
            <option value="Lviv">Lviv</option>
            <option value="Odessa">Odessa</option>
          </select>
          <input type="text" className="" />
          <input type="text" className="" />
          <label htmlFor="address_default" className=""></label>
          <input type="checkbox" id="address_default" className="" />
          <button type="submit" className="">
            Add Address
          </button>
          <button className="">Cancel</button>
        </form>
      </div>
    </Container>
  );
}

export default Account;
