import React from 'react';
import "./Card.scss"
function Card({name, color,imageUrls }) {
    return (
        <div>
            <h2>{name}</h2>
            <img className='img' src={imageUrls[0]} alt="chair"/>
            <p>{color}</p>
        </div>
    );
}

export default Card;