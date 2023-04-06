import React from 'react';
import{Link} from "react-router-dom";
import styles from './PageNotFound.module.scss'
function PageNotFound(props) {
    return (
         <div className={styles.backgroundNotFoundPage}>
            <h1 className={styles.titleNotFoundPage}>Page not found</h1>
            <div className={styles.ButtonNotFoundPage}>                
            <Link to="/" className={styles.linkNotFoundPage}>home</Link></div> 
            
            <div className={styles.ImageNotFoundPage}>
                <img src="../../img/oops1.jpg" alt="oops" width="100%" />
            </div>
            </div>
    );
}

export default PageNotFound;