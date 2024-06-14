import React from 'react'
import Inputfield from '../../elements/Inputfield'
import './style.css'

function InputLabel({ label, id, ...rest }) {
    return (
        <div className="input-label">
            <label htmlFor={id}>{label}:</label>
            <Inputfield
                id={id}
                {...rest}

            />
        </div>
    )
}

export default InputLabel