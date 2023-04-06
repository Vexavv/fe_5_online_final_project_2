import React, { useState } from "react";
import styles from "./Account.module.scss";
import Container from "@mui/material/Container";
import AddForm from "./AddForm/AddForm";
import EditForm from "./EditForm/EditForm";
function Account() {
  const [openAddres, isOpenAddres] = useState(false);
  const handelAddres = () => {
    if (openAddres === true) {
      isOpenAddres(false);
    } else {
      isOpenAddres(true);
    }
  };
  return (
    <Container maxWidth="xl">
      <p className={styles.addresses__title}>Your Addresses</p>
      <div className={styles.addresses__container}>
        <button className={styles.addresses__add} onClick={handelAddres}>
          Add a New Addres
        </button>
        {openAddres && <AddForm />}
      </div>
      <EditForm/>
    </Container>
  );
}

export default Account;
