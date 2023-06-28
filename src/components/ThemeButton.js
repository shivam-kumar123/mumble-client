import React from 'react'

import './ThemeButton.css'

function ThemeButton({setTheme}) {

    const handleTheme = () => {
        setTheme((prev) => {
            return prev ^ 1
        })
    }

  return (
    <div>
        <label className="switch">
            <input type="checkbox" onClick={handleTheme}/>
            <span className="slider"></span>
        </label>
    </div>
  )
}

export default ThemeButton