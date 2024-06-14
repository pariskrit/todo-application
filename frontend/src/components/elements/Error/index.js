import React from 'react'
import './style.css'

function Error({ showError, message }) {
    return (
        showError && <p className="error">{message}</p>

    )
}

export default Error