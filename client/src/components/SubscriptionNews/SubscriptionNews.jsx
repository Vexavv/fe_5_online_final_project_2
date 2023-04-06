import React, { useState } from "react";
import styles from "./SubscriptionNews.module.scss";
import Button from "../Button/Button";
import axios from "axios";
import { BASE_URL } from "../../constants/api";

function SubscriptionNews(props) {
  const [email, setEmail] = useState("");

  const newSubscriber = {
    email: email,
    enabled: false,
    letterSubject: "Welcome RUBIX letter",
    letterHtml:
      "<h1>Welcome to our RUBIX store!</h1></hr><p>Thank you for your interest in our store and products. We are excited to have you as a potential subscriber and we would like to extend a warm welcome to you. As a subscriber, you will receive exclusive access to our newest products, sales, and promotions. You will also be the first to know about our upcoming events and receive personalized recommendations tailored to your preferences.Thank you again for your interest in our store. We look forward to having you as a valued subscriber.</p>",
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const sendMail = async (subscriber) => {
    await axios
      .post(`${BASE_URL}/subscribers`, subscriber)
      .then((response) => {
        console.log(response.data);
        console.log(newSubscriber);
      })
      .catch((error) => {
        return error.message;
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
