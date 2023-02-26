import React from 'react';
import styles from './SubscriptionNews.module.scss'
import Button from "../Button/Button";

function SubscriptionNews(props) {
    return (
        <div className={styles.Subscription}>
            <div className={styles.SubscriptionContainer}>
                <div className={styles.SubscriptionContainerWrapper}>
                    <div className={styles.SubscriptionContainerWrapperContent}>
                        <h3 className={styles.SubscriptionContainerWrapperContentTitle}>Subscribe To Our
                            Newsletter</h3>
                        <span className={styles.SubscriptionContainerWrapperContentText}>Sign up for the weekly newsletter and build better ecommerce stores.</span>
                        <form className={styles.SubscriptionContainerWrapperContentForm}>
                            <input type='email' placeholder='Yor email address...' required={true}/>
                            <Button className={styles.SubscriptionContainerWrapperContentFormButton} type="submit"
                                    text='Subscribe'/>
                        </form>
                        <span className={styles.SubscriptionContainerWrapperContentPrivacy}>We respect your privacy, so we never share your info.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionNews;