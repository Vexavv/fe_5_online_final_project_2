import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Collection.module.scss'

const Collections = (props) =>{
    return (
        <>
        <div><Link to="/">home</Link></div>
        
            <h1>This is collection page</h1>            
        
        </>
    );
}

export default Collections;