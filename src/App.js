import React, { useState }  from 'react';
import './App.css'
import UserProps from './Props';

const App = () => {

  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  }
  return (
    <div className='App'>
      <h1>Props</h1>
      <UserProps handleClick={handleButtonClick}
      conut={count}
      increment={incrementCount} />
    </div>
  )
}

export default App
