import React from 'react'
import './Input.css'

const Input = props => {

  return (
    <div className="input">
      <input
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Input
