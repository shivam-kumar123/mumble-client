import React from 'react'

import './Button.css'

function Button({btnText, handleFormSubmit}) {
  return (
    <div>
        <button onClick={handleFormSubmit}>
            <span>{btnText}</span>
        </button>
    </div>
  )
}

export default Button