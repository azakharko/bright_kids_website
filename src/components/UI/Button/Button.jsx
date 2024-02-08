import React from 'react'
import "./style/Button.css"

const Button = ({width, height, className, text}) => {
  return (
	<button id="btn-register-main" style={{ width: width + "px", height: height + "px" }} className={className}>{text}</button>
  )
}

export default Button;
