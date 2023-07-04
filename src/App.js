import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isEnabled, setIsEnabled] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue': 'red';
  
  const toggleColor = () => setButtonColor(newButtonColor);
  
  const toggleButtonStatus = () => setIsEnabled(!isEnabled);
  
  return (
    <div>
      <button 
        style={{ backgroundColor: isEnabled ? 'gray' : buttonColor}} 
        onClick={toggleColor} 
        disabled={isEnabled}
      >
        Change to {newButtonColor}
      </button>
      <input type='checkbox' id="disable-button-checkbox" onChange={toggleButtonStatus} value={isEnabled} />
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default App;
