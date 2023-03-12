import React, { useState } from "react";
import styles from "./AddForm.module.scss";

function AddForm() {
  const [checked, setChecked] = useState(false);
  const handleCheck = (e) => {
    setChecked(e.target.checked);
    
  };
  return (
    <div className={styles.addresses__section}>
      <form className={styles.addresses__form}>
        <p className={styles.addresses__form__title}>Add a New Addres</p>
        <div className={styles.addresses__form__section}>
          <div className={styles.addresses__form__input__padding}>
            <input
              type="text"
              placeholder="First Name"
              className={styles.addresses__form__input}
            />
          </div>
          <div className={styles.addresses__form__input__padding__secound}>
            <input
              type="text"
              placeholder="Last Name"
              className={styles.addresses__form__input}
            />
          </div>
        </div>
        <input
          type="text"
          placeholder="Company"
          className={styles.addresses__form__input}
        />
        <input
          type="text"
          placeholder="Adress1"
          className={styles.addresses__form__input}
        />
        <input
          type="text"
          placeholder="Adress2"
          className={styles.addresses__form__input}
        />
        <input
          type="text"
          placeholder="City"
          className={styles.addresses__form__input}
        />
        <label htmlFor="country" className={styles.addresses__form__select}>
          Country
        </label>
        <select name="" id="country" className={styles.addresses__form__input}>
          <option value="Kiev">Kiev</option>
          <option value="Lviv">Lviv</option>
          <option value="Odessa">Odessa</option>
        </select>
        <div className={styles.addresses__form__section}>
          <div className={styles.addresses__form__input__padding}>
            <input
              type="text"
              placeholder="Postal/Zip Code"
              className={styles.addresses__form__input}
            />
          </div>
          <div className={styles.addresses__form__input__padding__secound}>
            <input
              type="text"
              placeholder="Phone number"
              className={styles.addresses__form__input}
            />
          </div>
        </div>
        <input
          type="checkbox"
          id="address_default"
          className={styles.addresses__form__checkbox}
          checked={checked}
          onChange={handleCheck}
        />
        <label
          htmlFor="address_default"
          className={styles.addresses__form__checkbox__label}
        >
          <span className={styles.addresses__form__checkbox__custum}></span>
          Set as default address
        </label>
        <button type="submit" className={styles.addresses__form__submit}>
          Add Address
        </button>
        <div className={styles.addresses__form__container}>
          <button className={styles.addresses__form__container__cancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
