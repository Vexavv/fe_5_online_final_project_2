import React from 'react';

function Button({className, onClick, text, type, disabled}) {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>{text} </button>
    );
}

export default Button;