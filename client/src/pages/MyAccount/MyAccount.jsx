import Button from "../../components/Button/Button";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {loguotCustomer} from '../../store/slices/loginSlice'
import styles from "./MyAccount.module.scss";
import {Navigate} from "react-router-dom";

function MyAccount(props) {
    const dispatch = useDispatch();
    // if logout, we go home
    const isLogged = useSelector(state => state.isLogged.isLogged.success)
    // const selectedProduct = useSelector((state) => state.topProducts.bestSellers);
    const LogOutAccount = () => dispatch(loguotCustomer())

    return isLogged ? (
        <div className={styles.container}>
            <h1>My Account</h1>
            <p>Welcome, {props.username || "Stranger"}</p>
            <ul>
                <li>
                    <h2>Account Details</h2>
                    <p>Username: {props.username || "Stranger"}</p>
                    <p>Email: {props.email || "fdgsgs@gmail.com"}</p>
                    <Button text='Reset your password'/>
                </li>
                <li>
                    <h2>Your Addresses</h2>
                    <p>Name: {props.username || "Stranger"}</p>
                    <span>Address 1:</span>
                    <p>Country: United States</p>
                    <Button text='View all addresses'/>
                    <Button text='Change your address'/>
                </li>
                <li>
                    <h2>Order History</h2>
                    <p>You haven't any orders yet.</p>
                </li>
                <li>
                    <Link to='/favorites'>
                        <h2 className={styles.link}>Favorites</h2>
                    </Link>
                    <p>Tap to see your wishlist.</p>
                </li>
            </ul>
            <Link to='/login'>
                <Button text='Logout' onClick={LogOutAccount}/>
            </Link>
        </div>
    ) : (
        <Navigate to="/" replace/>
    );
}

export default MyAccount;
