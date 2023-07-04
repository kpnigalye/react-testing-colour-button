import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isEnabled, setIsEnabled] = useState(false);

  const newButtonColor = buttonColor === 'red'?'blue': 'red';
  
  const toggleColor = () => setButtonColor(newButtonColor);
  
  const toggleButton = () => setIsEnabled(!isEnabled);
  
  return (
    <div>
      <button 
        style={{ backgroundColor: buttonColor}} 
        onClick={toggleColor} 
        disabled={isEnabled}
      >
        Change to {newButtonColor}
      </button>
      <input type='checkbox' onChange={toggleButton} value={isEnabled} />
    </div>
  );
}

export default App;
