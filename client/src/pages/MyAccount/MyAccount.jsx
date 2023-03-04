import Button from "../../components/Button/Button";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyAccount.module.scss";

function MyAccount(props) {
    return (
        <div className={styles.container}>
            <h1>My Account</h1>
            <p>Welcome, {props.username || "Stranger"}</p>
            <ul>
                <li>
                    <h2>Account Details</h2>
                    <p>Username: {props.username || "Stranger"}</p>
                    <p>Email: {props.email || 'fdgsgs@gmail.com'}</p>
                    <Button text="Reset your password" />
                </li>
                <li>
                    <h2>Your Addresses</h2>
                    <p>Name: {props.username || "Stranger"  }</p>
                    <span>Address 1:</span>
                    <p>Country: United States</p>
                    <Button text="View all addresses" />
                </li>
                <li>
                    <h2>Order History</h2>
                    <p>You haven't any orders yet.</p>
                </li>
            </ul>
            <Link to='/login'><Button text="Logout"/></Link>
        </div>
    );
}

export default MyAccount;