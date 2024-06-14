import React from 'react'
import './style.css'

function FormContainer({ children, style }) {
  return (
    <div className="container" style={style}>{children}</div>
  )
}

export default FormContainer