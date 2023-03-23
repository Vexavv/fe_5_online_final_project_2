import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { loginCustomerFetch,
    createAccountFetch
  } from '../../store/slices/loginSlice'
import {useNavigate} from 'react-router-dom'
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import Button from '../../components/Button/Button'
import styles from './LoginPage.module.scss'
import { functions } from 'lodash';
import { spacing } from '@mui/system';
// додати: show password, span show/hide, 

// initialValues
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

// validations
YupPassword(yup)
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


const Login =() =>{

  const dispatch = useDispatch()
  
const isLogged = useSelector(state => state.isLogged)
const customer = useSelector(state => state.customer)
const goTo = useNavigate()

  // local state
  const [isLoginPage, setIsLoginPage] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)

  //useEffect

//  useEffect(()=>{
// if(isLogged){
//   goTo('/myaccount') 
// }
//  }, [isLogged])


  const ToggleLoginPage = () => {
    setIsLoginPage(prev => !prev)
    console.log(isLoginPage);
  }

  const TolggleShowPassword = () => {
    setIsShowPassword(prev => !prev)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  // submitting functions

const HandleLoginSubmit=(loginData) => {
 dispatch(loginCustomerFetch(loginData)) 
 

}

const HandleRegiserSubmit=(newCustomer) => {
  dispatch(createAccountFetch(newCustomer))
  
 
}



 


 

  return (

    <div className={styles.loginPage}>
      <div className={styles.loginPageContentWrapper}>
        <ul className={styles.loginPageNav} >

          <li className={isLoginPage ? styles.loginPageTitle : styles.loginPageTitleActive} onClick={ToggleLoginPage}>Login</li>
          <li className={!isLoginPage ? styles.loginPageTitle : styles.loginPageTitleActive} onClick={ToggleLoginPage}>Create Account</li>

        </ul>
       
        {isLoginPage &&
        <Formik
        initialValues={initialValuesLogin}
        validationSchema={validationSchemaLogin}
        onSubmit={(loginData,{resetForm})=>{
          HandleLoginSubmit(loginData)
          resetForm()
        }}
        >
              {({ isValid}) => (
            <Form className={styles.loginPageForm}>
            <FastField className={styles.loginPageFormInput} type="text" name="email" placeholder="Email" />
            <ErrorMessage style={{ color: 'red' }} component="span" name="email" />
            <FastField className={styles.loginPageFormInput}
              name="password" 
              type={isShowPassword ? 'text' : 'password'}
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
          onSubmit={(newCustomer,{resetForm})=>{
            HandleRegiserSubmit(newCustomer)
            resetForm()
          }}
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
                // component ={isShowPassword ? <span>'fa fa-eye'</span> : <span>'fa fa-eye-slash'</span>}
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