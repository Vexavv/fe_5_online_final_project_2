import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SubscriptionNews.module.scss";
import Button from "../Button/Button";
import axios from "axios";
import { BASE_URL, MONGO_URI } from "../../constants/api";

// console.log(process.env);

function SubscriptionNews(props) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const newSubscriber = {
    subscriberMail: email,
    enabled: false,
    letterSubject: "Test letter (final project)",
    letterHtml: "<p>hi</p>",
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const sendMail = async (subscriber) => {
    await axios
      .post(`${BASE_URL}/subscribers`, subscriber)
      .then((response) => {
        console.log(response.data);
        // console.log(newSubscriber);
        // setSubscribed(true);
      })
      .catch((error) => {
        // setSubscribed(false);
        setError(error.message);
      });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    sendMail(newSubscriber);
  };

  return (
    <div className={styles.Subscription}>
      <div className={styles.SubscriptionContainer}>
        <div className={styles.SubscriptionContainerWrapper}>
          <div className={styles.SubscriptionContainerWrapperContent}>
            <h3 className={styles.SubscriptionContainerWrapperContentTitle}>
              Subscribe To Our Newsletter
            </h3>
            <span className={styles.SubscriptionContainerWrapperContentText}>
              Sign up for the weekly newsletter and build better ecommerce
              stores.
            </span>
            <form
              onSubmit={handleSubmit}
              className={styles.SubscriptionContainerWrapperContentForm}>
              <input
                onChange={handleEmailChange}
                type='email'
                value={email}
                placeholder='Yor email address...'
                required={true}
              />
              <Button
                className={styles.SubscriptionContainerWrapperContentFormButton}
                type='submit'
                text='Subscribe'
              />
              {error && <div>{error}</div>}
              {subscribed && <div>Thank you for subscribing!</div>}
            </form>
            <span className={styles.SubscriptionContainerWrapperContentPrivacy}>
              We respect your privacy, so we never share your info.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionNews;
