
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';

function TextBox(props) {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}

export default App;
