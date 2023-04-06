import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate} from 'react-router-dom';
import {
    loginCustomerFetch,
    createAccountFetch
} from '../../store/slices/loginSlice'
import { fetchGetCustomer } from '../../store/slices/customerSlice'
import { Formik, Form, FastField, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import Button from '../../components/Button/Button'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import styles from './LoginPage.module.scss'

// initialValues
const initialValuesLogin = {
    email: '',
    password: ''
}
const initialValuesSignIn = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

// validations
YupPassword(yup)
const validationSchemaLogin = yup.object().shape({
    email: yup.string()
        .email('the email is filled in with an error')
        .required('this field is required'),
    password: yup.string()
        .minSymbols(0)
        .min(7, 'Password must be between 7 and 30 characters')
        .max(30, 'Password must be between 7 and 30 characters')
        .minLowercase(5)
        .required('Password is required field'),
})
const validationSchemaRegister = yup.object().shape({
    firstName: yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters for First Name is a-z, A-Z, а-я, А-Я.')
        .min(2, 'First Name must be between 2 and 25 characters.')
        .max(25, 'First Name must be between 2 and 25 characters.')
        .required('First Name is required'),
    lastName: yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters for Last Name is a-z, A-Z, а-я, А-Я.')
        .min(2, 'Last Name must be between 2 and 25 characters.')
        .max(25, 'Last Name must be between 2 and 25 characters.')
        .required('Last Name is required.'),
    email: yup.string()
        .email('the email is filled in with an error')
        .required('this field is required'),
    password: yup.string()
        .minSymbols(0)
        .min(7, 'Password must be between 7 and 30 characters')
        .max(30, 'Password must be between 7 and 30 characters')
        .minLowercase(5)
        .required('Password is required field'),
})


const Login = () => {

    const dispatch = useDispatch()

    const isLogged = useSelector(state => state.isLogged.isLogged.success)


    // local states
    const [isLoginPage, setIsLoginPage] = useState(true)
    const [isShowPassword, setIsShowPassword] = useState(false)
   

    // switch login/account forms
    const HandleToggle = (data) => {
        data(prev => !prev)
    }

    // submitting functions
  
    const HandleLoginSubmit = ({ email, password }) => {
        dispatch(loginCustomerFetch({ email, password }))
        dispatch(fetchGetCustomer())
    }

    const HandleRegiserSubmit = ({ firstName, lastName, email, password }) => {
        dispatch(createAccountFetch({ firstName, lastName, email, password }))
    }

    return (
        <>
        {isLogged && <Navigate to="/myaccount" replace/>}
       
   
         <div className={styles.loginPage}>
            <div className={styles.loginPageContentWrapper}>
                <ul className={styles.loginPageNav}>

                    <li className={isLoginPage ? styles.loginPageTitle : styles.loginPageTitleActive}
                        onClick={() => { HandleToggle(setIsLoginPage) }}>Login
                    </li>
                    <li className={!isLoginPage ? styles.loginPageTitle : styles.loginPageTitleActive}
                        onClick={() => { HandleToggle(setIsLoginPage) }}>Create Account
                    </li>

                </ul>

                {/* form for login */}
                {isLoginPage &&
                    <Formik
                        initialValues={initialValuesLogin}
                        validationSchema={validationSchemaLogin}
                        onSubmit={(loginData, { resetForm }) => {
                            HandleLoginSubmit(loginData)
                            resetForm()
                        }}
                    >
                        {({ isValid }) => (
                            <Form className={styles.loginPageForm}>
                                <FastField className={styles.loginPageFormInput} type="text" name="email"
                                    placeholder="Email" />
                                <ErrorMessage style={{ color: 'red' }} component="span" name="email" />
                                <div className={styles.loginPageFieldWrapper}>
                                    <Field className={styles.loginPageFormInputPass}
                                        name="password"
                                        type={isShowPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                    />
                                    <span className={styles.loginPageSpan}
                                        onClick={() => { HandleToggle(setIsShowPassword) }}>
                                        {isShowPassword ? <Visibility /> : <VisibilityOff />}
                                    </span>
                                </div>
                                <ErrorMessage style={{ color: 'red' }} component="span" name="password" />
                                <Button type="submit" className={styles.LoginButton} disabled={!isValid}
                                    text="Sign in" />
                                <Button type="button" className={styles.RecoveryButton} text='Fogot password?' />
                            </Form>
                        )}
                    </Formik>
                }

                {/* form for new customer */}
                {!isLoginPage &&
                    <Formik
                        initialValues={initialValuesSignIn}
                        validationSchema={validationSchemaRegister}
                        onSubmit={(newCustomer, { resetForm }) => {
                            HandleRegiserSubmit(newCustomer)
                            resetForm()
                        }}
                    >
                        {({ isValid }) => (
                            <Form className={styles.loginPageForm}>
                                <FastField className={styles.loginPageFormInput} type="text" name="firstName"
                                    placeholder="First Name" />
                                <ErrorMessage style={{ color: 'red' }} component="span" name="firstName" />
                                <FastField className={styles.loginPageFormInput} type="text" name="lastName"
                                    placeholder="Last Name" />
                                <ErrorMessage style={{ color: 'red' }} component="span" name="lastName" />
                                <FastField className={styles.loginPageFormInput} type="text" name="email"
                                    placeholder="Email" />
                                <ErrorMessage style={{ color: 'red' }} component="span" name="email" />
                                <div className={styles.loginPageFieldWrapper}>
                                    <Field className={styles.loginPageFormInputPass}
                                        name="password"
                                        type={isShowPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                    />
                                    <span className={styles.loginPageSpan}
                                        onClick={() => { HandleToggle(setIsShowPassword) }}>
                                        {isShowPassword ? <Visibility /> : <VisibilityOff />}
                                    </span>
                                </div>
                                <ErrorMessage style={{ color: 'red' }} component="span" name="password" />
                                <Button type="submit" className={styles.LoginButton} disabled={!isValid}
                                    text="Create an account" />
                            </Form>
                        )}
                    </Formik>
                }


            </div>
        </div>
        </>
        );
}

export default Login;