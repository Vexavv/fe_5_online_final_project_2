import Button from "../../components/Button/Button";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loguotCustomer } from '../../store/slices/loginSlice'
import styles from "./MyAccount.module.scss";
import { Navigate } from "react-router-dom";

//miss order history
const MyAccount = () => {
    const dispatch = useDispatch();
   
    const isLogged = useSelector(state => state.isLogged.isLogged.success)
    const customer = useSelector(state => state.customer.customer)

    const LogOutAccount = () => dispatch(loguotCustomer())

    return isLogged ? (
        <div className={styles.container}>
            <h1>My Account</h1>
            <p>Welcome, {customer.firstName || "Guest"}</p>
            <ul>
                <li>
                    <h2>Account Details</h2>
                    <p>last name: {customer.lastName || "Guest"}</p>
                    <p>Email: {customer.email || "fdgsgs@gmail.com"}</p>
                    <Button text='Reset your password' onClick={() => {
                       
                    }} />
                </li>
                <li>
                    <Link to='/favorites'>
                        <h2 className={styles.link}>Wishlist</h2>
                    </Link>
                    <p>Tap to see your wishlist.</p>
                </li>
                <li>
                    <h2>Order History</h2>
                    <p>You haven't any orders yet.</p>
                </li>
                <li>
                    <h2>Your Addresses</h2>
                    <p>Name: {customer.firstName || "Stranger"}</p>
                    <p>LastName: {customer.lastName || "Stranger"}</p>
                    <span>Address 1:</span>
                    <p>Country: United States</p>
                    <Button text='View all addresses' />
                    <Button text='Change your address' />
                </li>


            </ul>
            <Link to='/login'>
                <Button text='Logout' onClick={LogOutAccount} />
            </Link>
        </div>
    ) : (
        <Navigate to="/" replace />
    );
}

export default MyAccount;
