import {React, useState} from 'react';

import SignUp from './components/SignUp';
import ThemeButton from './components/ThemeButton';

import './App.css';

function App() {

  // 0 --> white and 1 --> dark
  const [theme, setTheme] = useState(1)
  
  return (
    <div className={`App ${(theme === 0) ? 'white-theme' : 'dark-theme'}`}>
      <ThemeButton 
        setTheme={setTheme}
      />
      <SignUp />
    </div>
  );
}

export default App;