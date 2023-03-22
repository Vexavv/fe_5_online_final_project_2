import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {isLogin, loginCustomerFetch,
    createAccountFetch
  } from '../../store/slices/loginSlice'
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import Button from '../../components/Button/Button'
import styles from './LoginPage.module.scss'
import { functions } from 'lodash';
// додати: show password, span show/hide, 

YupPassword(yup)

const Login =() =>{

  const dispatch = useDispatch()
const isLogged = useSelector(state => state.isLogged)
const user = useSelector(state => state.customer)
const token = useSelector(state => state.token)

  // local state
  const [isLoginPage, setIsLoginPage] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)

  //useEffect

 useEffect(()=>{
if(isLogged || token){

}
 }, [isLogged])


  const ToggleLoginPage = () => {
    setIsLoginPage(prev => !prev)
    console.log(isLoginPage);
  }

  // submitting functions

const HandleLoginSubmit=(loginData) => {
 dispatch(loginCustomerFetch(loginData)) 
 console.log(loginData);

}

const HandleRegiserSubmit=(newCustomer) => {
  dispatch(createAccountFetch(newCustomer))
  console.log(newCustomer);
 
}

const initialValuesLogin ={
  email: '',
    password: ''
}

const initialValuesSignIn = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

  // const initialValues = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // }
  const validationSchemaLogin= yup.object().shape({
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

  return (

    <div className={styles.loginPage}>
      <div className={styles.loginPageContentWrapper}>
        <ul className={styles.loginPageNav} >

          <li className={isLoginPage ? styles.loginPageTitle : styles.loginPageTitleActive} onClick={ToggleLoginPage}>Login</li>
          <li className={!isLoginPage ? styles.loginPageTitle : styles.loginPageTitleActive} onClick={ToggleLoginPage}>Create Account</li>

        </ul>
        {isLogged && 
        <h3>Hi, {user.firstName}</h3>
        }
        {isLoginPage &&
        <Formik
        initialValues={initialValuesLogin}
        validationSchema={validationSchemaLogin}
        onSubmit={HandleLoginSubmit}
        >
              {({ isValid}) => (
            <Form className={styles.loginPageForm}>
            <FastField className={styles.loginPageFormInput} type="text" name="email" placeholder="Email" />
            <ErrorMessage style={{ color: 'red' }} component="span" name="email" />
            <FastField className={styles.loginPageFormInput}
              name="password" type ='password'
              // type={isShowPassword ? 'text' : 'password'}
              placeholder="Password"
            />
            <ErrorMessage style={{ color: 'red' }} component="span" name="password" />
            <Button type="submit" className={styles.LoginButton} disabled={!isValid} text="Sign in" />
            <Button type="button" className={styles.RecoveryButton} text='Fogot password?' />
            </Form>
            )}          
        </Formik>
        }
        {!isLoginPage &&
          <Formik
          initialValues={initialValuesSignIn}
          validationSchema={validationSchemaRegister}
          onSubmit={HandleRegiserSubmit}
          >
          {({ isValid}) => (
            <Form className={styles.loginPageForm}>
               <FastField className={styles.loginPageFormInput} type="text" name="firstName" placeholder="First Name" />
                  <ErrorMessage style={{ color: 'red' }} component="span" name="firstName" />
                  <FastField className={styles.loginPageFormInput} type="text" name="lastName" placeholder="Last Name" />
                  <ErrorMessage style={{ color: 'red' }} component="span" name="lastName" />
                  <FastField className={styles.loginPageFormInput} type="text" name="email" placeholder="Email" />
              <ErrorMessage style={{ color: 'red' }} component="span" name="email" />
              <FastField className={styles.loginPageFormInput}
                name="password"
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <ErrorMessage style={{ color: 'red' }} component="span" name="password" />
              <Button type="submit"className={styles.LoginButton} disabled={!isValid} text="Create an account" />
              </Form>
          )}        
          </Formik>
        }
      
      </div>
    </div>
  );
}

export default Login;