import React from 'react';
import{Link} from "react-router-dom";
function PageNotFound(props) {
    return (
         <div><h1>Page not found</h1> <Link to="/">home</Link></div>
    );
}

export default PageNotFound;