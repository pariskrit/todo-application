import React from 'react'
import './style.css';

function Button({ label, type, onClick, style, className, children }) {

    return (
        <button className={`button ${className}`} type={type} onClick={onClick} style={style} >{label || children}</button>

    )
}

export default Button