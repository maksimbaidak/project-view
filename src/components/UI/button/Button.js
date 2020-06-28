import React from 'react'
import './Button.css'

const Button = props => {

  const clsName = 'button ' + props.type;

  return (
    <div className="button">
      <button
        onClick={props.onClick}
        className={clsName}
      >
        {props.children}
      </button>
    </div>
  )
}

export default Button;
