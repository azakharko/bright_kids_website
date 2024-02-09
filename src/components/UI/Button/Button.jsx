import React from 'react'
import "./style/Button.css"

const Button = ({ width, height, className, text, id }) => {
  return (
    <button id={id} style={{ width: width + "px", height: height + "px" }} className={className}>{text}</button>
  )
}

export default Button;
