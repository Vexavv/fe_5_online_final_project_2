import React from 'react';
import {ThreeCircles} from "react-loader-spinner";
function Loader(props) {
    return (
        <ThreeCircles
            height="150"
            width="150"
            color="#ba933e"
            wrapperStyle={{marginLeft: '50%', marginTop: '15%'}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""

        />
    );
}

export default Loader;