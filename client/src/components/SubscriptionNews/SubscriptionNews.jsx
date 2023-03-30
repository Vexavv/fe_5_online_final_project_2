import React, { useState } from "react";
import styles from "./SubscriptionNews.module.scss";
import Button from "../Button/Button";
import axios from "axios";
import { BASE_URL } from "../../constants/api";

function SubscriptionNews(props) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const newSubscriber = {
    email: email,
    letterSubject: "Test letter (final project)",
    letterHtml:
      "<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' /> <meta name='viewport' content='width=device-width, initial-scale=1.0' /> <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title> <style> td { padding: 20px 50px; background-color: yellow; color: blueviolet; font-size: 20px; } </style> </head> <body> <table> <tr> <td>Test1</td> <td>Test2</td> <td>Test3</td> </tr> <tr> <td>Test1.1</td> <td>Test2.1</td> <td>Test3.1</td> </tr> </table> </body></html>",
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/subscribers`, newSubscriber)
      .then(() => {
        setSubscribed(true);
        setError("");
      })
      .catch((error) => {
        setSubscribed(false);
        setError(error.message);
      });
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
