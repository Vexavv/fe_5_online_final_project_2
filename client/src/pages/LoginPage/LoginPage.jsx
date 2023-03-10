import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password'
import Button from '../../components/Button/Button'
import styles from './LoginPage.module.scss'
// додати: show password, span show/hide, style on focus,

YupPassword(yup)

function Login() {
  // local state
  const [isLoginPage, setisLoginPage] = useState(false)
  const [isShowPassword, setIsShowPassword] = useState(false)

  const ToggleLoginPage = () => {
    setisLoginPage(prev => !prev)
  }


  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  const validationSchema = yup.object().shape({
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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => { }}
        >
          {({ isValid }) => (
            <Form className={styles.loginPageForm}>
              {!isLoginPage &&
                <>
                  <Field className={styles.loginPageFormInput} type="text" name="firstName" placeholder="First Name" />
                  <ErrorMessage component="span" name="firstName" />
                  <Field className={styles.loginPageFormInput} type="text" name="lastName" placeholder="Last Name" />
                  <ErrorMessage component="span" name="lastName" />
                </>
              }
              <Field className={styles.loginPageFormInput} type="text" name="email" placeholder="Email" />
              <ErrorMessage component="span" name="email" />
              <Field className={styles.loginPageFormInput}
                name="password"
                type={isShowPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <ErrorMessage component="span" name="password" />



              {isLoginPage ?
                <>
                  <Button type="submit" className={styles.LoginButton} disabled={!isValid} text="Sign in" />
                  <Button type="button" className={styles.RecoveryButton} text='Fogot password?' />
                </>
                :
                <Button type="submit" className={styles.LoginButton} disabled={!isValid} text="Create an account" />

              }
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;