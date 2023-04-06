import React, { useState } from "react";
import styles from "./EditForm.module.scss";

function EditForm() {
  const [openEditAddress, isOpenEditAddress] = useState(false);
  const handelEditForm = () => {
    if (openEditAddress === true) {
      isOpenEditAddress(false);
    } else {
      isOpenEditAddress(true);
    }
  };
  return (
    <>
      <h3 className={styles.addresses__title}>List address</h3>
      <div className={styles.addresses__container}>
        <div className={styles.addresses__container__section}>
          <p className={styles.addresses__container__section__label}>DEFAULT</p>
          <div>
            <h3 className={styles.addresses__container__section__name}>
              Anton Kramarchuk
            </h3>
            <p className={styles.addresses__container__section__info}>
              Phone number:
            </p>
            <p className={styles.addresses__container__section__info}>
              Addres:
            </p>
            <p className={styles.addresses__container__section__info}>
              {" "}
              Country:
            </p>
            <div className={styles.addresses__container__section__button}>
              <button
                className={styles.addresses__container__section__edit}
                onClick={handelEditForm}
              >
                EDIT
              </button>
              <button className={styles.addresses__container__section__delete}>
                DLETE
              </button>
            </div>
            <h3 className={styles.addresses__container__section__title}>
              Edit address
            </h3>
            {openEditAddress && (
              <div className={styles.addresses__section}>
                <form className={styles.addresses__form}>
                  <p className={styles.addresses__form__title}>
                    Add a New Addres
                  </p>
                  <div className={styles.addresses__form__section}>
                    <div className={styles.addresses__form__input__padding}>
                      <label
                        htmlFor="First Name"
                        className={styles.addresses__form__input__lable}
                      >
                        First Name
                      </label>
                      <input
                        id="First Name"
                        type="text"
                        placeholder="First Name"
                        className={styles.addresses__form__input__first}
                      />
                    </div>

                    <div
                      className={
                        styles.addresses__form__input__padding__secound
                      }
                    >
                      <label
                        htmlFor="Last Name"
                        className={styles.addresses__form__input__lable}
                      >
                        Last Name
                      </label>
                      <input
                        id="Last Name"
                        type="text"
                        placeholder="Last Name"
                        className={styles.addresses__form__input__secound}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="Company"
                    className={styles.addresses__form__input__lable}
                  >
                    Company
                  </label>
                  <input
                    id="Company"
                    type="text"
                    placeholder="Company"
                    className={styles.addresses__form__input}
                  />
                  <label
                    htmlFor="Adress1"
                    className={styles.addresses__form__input__lable}
                  >
                    Adress1
                  </label>
                  <input
                    id="Adress1"
                    type="text"
                    placeholder="Adress1"
                    className={styles.addresses__form__input}
                  />
                  <label
                    htmlFor=""
                    className={styles.addresses__form__input__lable}
                  >
                    Adress2
                  </label>
                  <input
                    id="Adress2"
                    type="text"
                    placeholder="Adress2"
                    className={styles.addresses__form__input}
                  />
                  <label
                    htmlFor="City"
                    className={styles.addresses__form__input__lable}
                  >
                    City
                  </label>
                  <input
                    id="City"
                    type="text"
                    placeholder="City"
                    className={styles.addresses__form__input}
                  />
                  <label
                    htmlFor="country"
                    className={styles.addresses__form__select}
                  >
                    Country
                  </label>
                  <select
                    name=""
                    id="country"
                    className={styles.addresses__form__input}
                  >
                    <option value="Kiev">Kiev</option>
                    <option value="Lviv">Lviv</option>
                    <option value="Odessa">Odessa</option>
                  </select>
                  <div className={styles.addresses__form__section}>
                    <div className={styles.addresses__form__input__padding}>
                      <label
                        htmlFor="Postal/Zip"
                        className={styles.addresses__form__input__lable}
                      >
                        Postal/Zip Code
                      </label>
                      <input
                        id="Postal/Zip"
                        type="text"
                        placeholder="Postal/Zip Code"
                        className={styles.addresses__form__input}
                      />
                    </div>
                    <div
                      className={
                        styles.addresses__form__input__padding__secound
                      }
                    >
                      <label
                        htmlFor="Phone number"
                        className={styles.addresses__form__input__lable}
                      >
                        Phone number
                      </label>
                      <input
                        id="Phone number"
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
                  />
                  <label
                    htmlFor="address_default"
                    className={styles.addresses__form__checkbox__label}
                  >
                    <span
                      className={styles.addresses__form__checkbox__custum}
                    ></span>
                    Set as default address
                  </label>
                  <button
                    type="submit"
                    className={styles.addresses__form__submit}
                  >
                    Update Address
                  </button>
                  <div className={styles.addresses__form__container}>
                    <button
                      className={styles.addresses__form__container__cancel}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditForm;
