import React from 'react'
import './style.css';

function Header({ name, children }) {
    return (
        <h2 className='header'>{name || children}</h2>

    )
}

export default Header