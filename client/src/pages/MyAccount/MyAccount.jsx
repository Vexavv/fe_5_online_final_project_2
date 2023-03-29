import Button from "../../components/Button/Button";
import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loguotCustomer } from '../../store/slices/loginSlice'
import styles from "./MyAccount.module.scss";
import { Navigate } from "react-router-dom";
import {fetchGetCustomer} from "../../store/slices/customerSlice";
import DialogModal from '../../components/DialogModal/DialogModal'
import { Collapse, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
//miss order history
const MyAccount = () => {
    const dispatch = useDispatch();
   
    const isLogged = useSelector(state => state.isLogged.isLogged.success)
    const customer = useSelector(state => state.customer.customer)
    const newCustomer = {...customer}
    console.log(newCustomer);
    
    const LogOutAccount = () => dispatch(loguotCustomer())
    const [openAlert, setOpenAlert] = useState(true);
  
    useEffect(()=>{
        dispatch(fetchGetCustomer())
    },[dispatch])
 
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
              <div className={styles.customerLinkWrapper}>
                <Link to='/products'>
                    <p className={styles.customerLink}>to shopping</p>
                </Link>
        
                <Link to='/favorites'>
                    <p className={styles.customerLink}>to wishlist</p>
                </Link>
            </div>
        
        <div className={styles.container}>
            <h1>My Account</h1>
            <p>Welcome, {customer.firstName || "Guest"}</p>
            <ul>
                <li>
                    <h2>Account Details</h2>
                    <p>last name: {customer.lastName || "Guest"}</p>
                    <p>Email: {customer.email || "fdgsgs@gmail.com"}</p>
                
                    <DialogModal textButton='Reset password'
                    titleText="Enter new password"
                    textSubmitButton='Save changes'
                     typeInput='password'
                     ariaLabel ="password"
                    autoComplete={newCustomer.firstName}/>
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
                 
                    <DialogModal textButton='Change address'
                    ariaLabel="text"
                    titleText='Enter new address'
                    textSubmitButton='Save changes' 
                    typeInput='text'/>
                </li>


            </ul>
            <Link to='/login'>
                <Button text='Logout' onClick={LogOutAccount} />
            </Link>
        </div>  
        </>     
                }
       {!isLogged && <Navigate to="/" replace />}
        </>
    );
}

export default MyAccount;
