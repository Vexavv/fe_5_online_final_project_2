import Button from "../../components/Button/Button";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loguotCustomer } from '../../store/slices/loginSlice'
import styles from "./MyAccount.module.scss";
import { Navigate } from "react-router-dom";
import { fetchGetCustomer } from "../../store/slices/customerSlice";
import DialogModal from '../../components/DialogModal/DialogModal'
import { Collapse, IconButton, Alert, Grid, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
//miss order history
const MyAccount = () => {
    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.isLogged.isLogged.success)
    const customer = useSelector(state => state.customer.customer)
    const newCustomer = { ...customer }
    console.log(newCustomer);

    const LogOutAccount = () => dispatch(loguotCustomer())
    const [openAlert, setOpenAlert] = useState(true);

    useEffect(() => {
        dispatch(fetchGetCustomer())
    }, [dispatch])

    return (
        <>
            {isLogged &&
                <>
                    <Collapse in={openAlert}>
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => { setOpenAlert(false) }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >You are alredy logged in</Alert>
                    </Collapse>
                   

                    <div className={classNames(styles.container, styles.account)}>
                    <div className={styles.accountLinkWrapper}>
                        <Link to='/products'>
                            <p className={styles.accountLink}>to Shopping</p>
                        </Link>
                        
                        <Link to='/favorites'>
                            <p className={styles.accountLink}>to Wishlist</p>
                        </Link>
                    </div>
                    <h1 className={styles.accountTitle}>My Account</h1>
                        <p className={styles.accountSubtitle}>Welcome, {customer.firstName || "Guest"}</p>
                        <ul className={styles.accountContentWrapper}>
                            <li className={styles.accountItem}>

                                <h2 className={styles.accountItemTitle}>Account Details</h2>
                                <div>
                                <p className={styles.accountItemText}>Name: {customer.firstName || "Stranger"}</p>
                                    <p className={styles.accountItemText}>last name: {customer.lastName || "Guest"}</p>
                                    <div>
                                        <p className={styles.accountItemText}>Email: {customer.email || "fdgsgs@gmail.com"}</p>
                                    </div>
                                    <DialogModal textButton='Reset password'
                                        titleText="Enter new password"
                                        textSubmitButton='Save changes'
                                        typeInput='password'
                                        ariaLabel="password"
                                        autoComplete={newCustomer.firstName} />
                                </div>
                            </li>
                            {/* <li className={styles.accountItem}>
                    <Link to='/favorites'>
                        <h2 className={styles.link}>Wishlist</h2>
                    </Link>
                    <p>Tap to see your wishlist.</p>
                </li> */}

                            <li className={styles.accountItem}>
                                <h2 className={styles.accountItemTitle}>Your Address</h2>                              
                                <p className={styles.accountItemText}>LastName: {customer.lastName || "Stranger"}</p>
                                <span>Address:</span>
                                <p className={styles.accountItemText}>Country: United States</p>

                                <DialogModal textButton='Change address'
                                    ariaLabel="text"
                                    titleText='Enter new address'
                                    textSubmitButton='Save changes'
                                    typeInput='text' />
                            </li>
                            <li className={classNames(styles.accountItem, styles.accountItemOrders)}>
                                <h2 className={styles.accountItemTitle}>Order History</h2>
                                <p className={styles.accountItemText}>You haven't any orders yet.</p>
                            </li>

                        </ul>
                        <Link to='/login' >
                            <Button text='Logout' onClick={LogOutAccount} className={styles.accountLink} />
                        </Link>
                    </div>
                </>
            }
            {!isLogged && <Navigate to="/" replace />}
        </>
    );
}

export default MyAccount;
