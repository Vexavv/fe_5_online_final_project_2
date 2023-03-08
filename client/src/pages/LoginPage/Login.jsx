import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import Button from '../../components/Button/Button'
import styles from './LoginPage.module.scss'

// const loginLink = "true"
function Login() {

//  const [isLoginPage, setisLoginPage] = useState("true")

    const initialValues= {
        firstName:'',
        lastName:'',
        email:'',
        password:''
       }
    const validationSchema = yup.object().shape({
        firstName: yup.string().required('this field is required'),
        lastName: yup.string().required('this field is required'),
        email: yup.string().email('the address is filled in with an error').required('this field is required'),
        password: yup.string().min(8).required('password must contain at least 8 characters')
    })  
   
    return (
        
        <div className={styles.loginPage}>

           <Formik
           
          initialValues={initialValues}
          validationSchema={validationSchema}
           onSubmit={()=>{}}
           >
            {({isValid})=>(
            <Form className={styles.loginPageForm}>
                <h2 className={styles.loginPageFormTitle}>Login</h2>
                <h2 className={styles.loginPageFormTitle}>Create Account</h2>
                <Field className={styles.loginPageFormInput} type="text" name ="firstName" placeholder="First Name"/>
                <ErrorMessage name ="firstName"/>
                <Field className={styles.loginPageFormInput} type="text" name ="lastName" placeholder="Last Name"/>
                <ErrorMessage name ="lastName"/>
                <Field className={styles.loginPageFormInput} type="text" name ="email" placeholder="Email"/>
                <ErrorMessage name ="email"/>
                <Field className={styles.loginPageFormInput} type="password" name ="password" placeholder="Password"/>
                <ErrorMessage name ="password"/>
                {/* <Button type="submit" text={isLoginPage ? "Sign in":"Create an account"}/> */}
                <Button type="submit" text="submit" disabled={!isValid}/>
            </Form>
            )}
            </Formik>      
           
        </div>
    );
}

export default Login;