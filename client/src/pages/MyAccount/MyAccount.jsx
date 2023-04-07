import Button from "../../components/Button/Button";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loguotCustomer } from '../../store/slices/loginSlice'
import styles from "./MyAccount.module.scss";
import { Navigate } from "react-router-dom";
import { fetchGetCustomer } from "../../store/slices/customerSlice";
import UpdatePassword from '../../components/DialogModal/UpdatePassword'
import { Collapse, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
import {persistor} from '../../store/index';
//miss order history
const MyAccount = () => {
    const dispatch = useDispatch();

    const isLogged = useSelector(state => state.isLogged.isLogged.success)
    const customer = useSelector(state => state.customer.customer)
    const newCustomer = { ...customer }
    console.log(newCustomer);


    // added clear localStorage
    const LogOutAccount = async () => {
        try {
            await persistor.purge('root');
            localStorage.clear();
            dispatch(loguotCustomer());
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    }
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
                            <p className={styles.accountLink}>To Shopping</p>
                        </Link>
                        
                        <Link to='/favorites'>
                            <p className={styles.accountLink}>To Wishlist</p>
                        </Link>
                    </div>
                    <h1 className={styles.accountTitle}>My Account</h1>
                        <p className={styles.accountSubtitle}>Welcome, {newCustomer.firstName || "Guest"}</p>
                        <ul className={styles.accountContentWrapper}>
                            <li className={styles.accountItem}>

                                <h2 className={styles.accountItemTitle}>Account Details</h2>
                                <div>
                                <p className={styles.accountItemText}>Name: {customer.firstName || "Stranger"}</p>
                                    <p className={styles.accountItemText}>Last name: {newCustomer.lastName || "Guest"}</p>
                                    <div>
                                        <p className={styles.accountItemText}>Email: {newCustomer.email || "fdgsgs@gmail.com"}</p>
                                    </div>
                                    <UpdatePassword
                                      password= {newCustomer.password}
                                         />
                                </div>
                            </li>
                           

                            <li className={styles.accountItem}>
                                <h2 className={styles.accountItemTitle}>Your Address</h2>                              
                                <p className={styles.accountItemText}>LastName: {customer.lastName || "Stranger"}</p>
                                <span>Address:</span>
                                <p className={styles.accountItemText}>Country: United States</p>

                                {/* <DialogModal textButton='Change address'
                                    ariaLabel="text"
                                    titleText='Enter new address'
                                    textSubmitButton='Save changes'
                                    typeInput='text' /> */}
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
