import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import Button from '../../components/Button/Button'

const loginLink = "true"
function Login(loginLink) {

 const [isLoginPage, setisLoginPage] = useState("true")

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
        password: yup.string().password()
    })  
   
    return (
        
        <div className="loginPage">

           <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
           onSubmit={()=>{}}
           >
            {(props)=>(
            <Form action="">
                <Field type="text" name ="firstName" placeholder="First Name"/>
                <ErrorMessage name ="firstName"/>
                <Field type="text" name ="lastName" placeholder="Last Name"/>
                <ErrorMessage name ="lastName"/>
                <Field type="text" name ="email" placeholder="Email"/>
                <ErrorMessage name ="email"/>
                <Field type="password" name ="password" placeholder="Password"/>
                <ErrorMessage name ="password"/>
                <Button type="submit" text={isLoginPage ? "Sign in":"Create an account"}/>
            </Form>
            )}
            </Formik>      
           
        </div>
    );
}

export default Login;