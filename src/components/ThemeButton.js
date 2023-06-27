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
        <label class="switch">
            <input type="checkbox" onClick={handleTheme}/>
            <span class="slider"></span>
        </label>
    </div>
  )
}

export default ThemeButton