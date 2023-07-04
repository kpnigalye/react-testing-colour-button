import { useState } from 'react';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red'?'blue': 'red';
  const toggleColor = () => setButtonColor(newButtonColor)

  return (
    <div>
      <button style={{ backgroundColor: buttonColor}} onClick={toggleColor}>Change to {newButtonColor}</button>
    </div>
  );
}

export default App;
